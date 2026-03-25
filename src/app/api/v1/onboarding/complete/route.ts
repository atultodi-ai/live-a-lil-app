// POST /api/v1/onboarding/complete
// Called at end of onboarding. Creates initial SKG, adds seed items as bucket list items,
// and marks user.onboardingComplete = true. Idempotent.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { createInitialSKG } from "@/lib/skg";

const schema = z.object({
  age: z.number().int().min(13).max(120),
  gender: z
    .enum(["male", "female", "non_binary", "prefer_not_to_say"])
    .optional(),
  city: z.string().min(1).max(100),
  country: z.string().min(1).max(100),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  // Titles of seed items selected in onboarding (we store them as user items)
  seedItems: z
    .array(
      z.object({
        title: z.string().min(1).max(200),
        type: z.enum([
          "travel",
          "skill",
          "experience",
          "achievement",
          "habit",
          "relationship",
        ]),
      })
    )
    .max(20),
  // Free-text custom items the user typed in
  customItems: z.array(z.string().min(1).max(200)).max(10),
});

export async function POST(req: Request) {
  try {
    const { user, errorResponse } = await requireAuth();
    if (errorResponse) return errorResponse;

    // Already onboarded — return success idempotently
    if (user.onboardingComplete) {
      return NextResponse.json({ data: { alreadyComplete: true } });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input." },
        { status: 400 }
      );
    }

    const { age, gender, city, country, latitude, longitude, seedItems, customItems } =
      parsed.data;

    // 1. Create initial SKG (skip if already exists)
    const existingSKG = await db.userSituation.findFirst({ where: { userId: user.id } });
    if (!existingSKG) {
      await createInitialSKG(user.id, {
        age,
        gender: gender ?? null,
        city,
        country,
        latitude: latitude ?? null,
        longitude: longitude ?? null,
      });
    }

    // 2. Create bucket list items from selected seeds
    const allItems = [
      ...seedItems.map((s) => ({
        title: s.title,
        type: s.type,
        source: "seed_library" as const,
      })),
      ...customItems.map((title) => ({
        title,
        type: null,
        source: "user" as const,
      })),
    ];

    if (allItems.length > 0) {
      await db.bucketListItem.createMany({
        data: allItems.map((item) => ({
          userId: user.id,
          title: item.title,
          type: item.type,
          source: item.source,
          priority: 2, // default: "want to do"
          status: "todo",
        })),
        skipDuplicates: true,
      });
    }

    // 3. Mark onboarding complete
    await db.user.update({
      where: { id: user.id },
      data: { onboardingComplete: true },
    });

    // 4. Trigger batch-rerank in background so items get doability scores immediately
    const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
    const cookieHeader = req.headers.get("cookie") ?? "";
    fetch(`${baseUrl}/api/v1/ai/batch-rerank`, {
      method: "POST",
      headers: { cookie: cookieHeader },
    }).catch(() => null);

    return NextResponse.json({ data: { success: true } });
  } catch (err) {
    console.error("[onboarding/complete] error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
