// GET  /api/v1/items  — list items
// POST /api/v1/items  — create item (enforces 100-item cap)

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { ACTIVE_ITEM_CAP } from "@/lib/utils";
import type { ItemStatus, ItemType, CostTier, TimeHorizon } from "@/types";
import type { Prisma } from "@prisma/client";

// ─── GET ─────────────────────────────────────

export async function GET(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as ItemStatus | null;
  const type = searchParams.get("type") as ItemType | null;
  const timeHorizon = searchParams.get("time_horizon") as TimeHorizon | null;
  const cost = searchParams.get("cost")?.split(",") as CostTier[] | undefined;
  const sort = searchParams.get("sort") ?? "doability";

  // Build where clause
  const where: Prisma.BucketListItemWhereInput = { userId: user.id };

  if (status) {
    where.status = status;
  } else {
    // Default: active items only
    where.status = { in: ["todo", "ongoing"] };
  }

  if (type) where.type = type;
  if (timeHorizon) where.timeHorizon = timeHorizon;
  if (cost?.length) where.costEstimate = { in: cost };

  // Build orderBy
  const orderBy: Prisma.BucketListItemOrderByWithRelationInput[] = (() => {
    switch (sort) {
      case "priority":
        return [{ priority: "desc" }, { doabilityScore: "desc" }];
      case "created":
        return [{ createdAt: "desc" }];
      case "type":
        return [{ type: "asc" }, { doabilityScore: "desc" }];
      case "doability":
      default:
        return [{ doabilityScore: "desc" }, { priority: "desc" }];
    }
  })();

  const items = await db.bucketListItem.findMany({ where, orderBy });

  return NextResponse.json({ data: items });
}

// ─── POST ────────────────────────────────────

const createSchema = z.object({
  title: z.string().min(1).max(300),
  description: z.string().max(1000).optional(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  source: z.enum(["user", "seed_library", "ai_suggestion"]).optional(),
  seedItemId: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export async function POST(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  // Enforce 100-item active cap
  const activeCount = await db.bucketListItem.count({
    where: { userId: user.id, status: { in: ["todo", "ongoing"] } },
  });

  if (activeCount >= ACTIVE_ITEM_CAP) {
    return NextResponse.json(
      {
        error:
          "Your list is full — 100 dreams is a lot. Complete or set aside something to make room.",
        code: "CAP_REACHED",
      },
      { status: 422 }
    );
  }

  const body = await req.json();
  const parsed = createSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  // If this item comes from a seed, inherit the seed's cached photo (if any)
  let inheritedImageUrl = parsed.data.imageUrl ?? null;
  if (parsed.data.seedItemId && !inheritedImageUrl) {
    const seed = await db.seedLibraryItem.findUnique({
      where: { id: parsed.data.seedItemId },
      select: { imageUrl: true },
    });
    if (seed?.imageUrl) inheritedImageUrl = seed.imageUrl;
  }

  const item = await db.bucketListItem.create({
    data: {
      userId: user.id,
      title: parsed.data.title,
      description: parsed.data.description,
      priority: parsed.data.priority ?? 2,
      source: parsed.data.source ?? "user",
      seedItemId: parsed.data.seedItemId,
      imageUrl: inheritedImageUrl,
    },
  });

  return NextResponse.json({ data: item }, { status: 201 });
}
