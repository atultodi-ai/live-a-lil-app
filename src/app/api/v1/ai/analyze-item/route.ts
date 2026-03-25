// POST /api/v1/ai/analyze-item
// Called after a new item is created. Returns AI categorization + doability score.
// Also writes the results back to the item in the DB.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { getLatestSKG, compressSKG } from "@/lib/skg";
import { analyzeItem } from "@/lib/ai";
import { fetchUnsplashPhoto, buildImageKeyword } from "@/lib/unsplash";

const schema = z.object({
  itemId: z.string().uuid(),
});

export async function POST(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const { itemId } = parsed.data;

  // Verify item belongs to user
  const item = await db.bucketListItem.findUnique({ where: { id: itemId } });
  if (!item || item.userId !== user.id) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  const skg = await getLatestSKG(user.id);
  const compressed = skg ? compressSKG(skg) : `User with bucket list item: "${item.title}"`;

  // Resolve the photo URL using a 3-tier priority:
  // 1. Item already has a photo → keep it, no fetch needed
  // 2. Item came from a seed that already has a cached photo → inherit it
  // 3. Otherwise → fetch from Unsplash and cache on the seed for all future users
  let resolvedPhotoUrl: string | null = item.imageUrl ?? null;
  let seedIdToUpdate: string | null = null;

  if (!resolvedPhotoUrl && item.seedItemId) {
    const seed = await db.seedLibraryItem.findUnique({
      where: { id: item.seedItemId },
      select: { imageUrl: true },
    });
    if (seed?.imageUrl) {
      resolvedPhotoUrl = seed.imageUrl; // free — no Unsplash call needed
    } else {
      seedIdToUpdate = item.seedItemId; // will fetch and write back to seed
    }
  }

  // Run AI analysis + conditional Unsplash fetch in parallel
  const [analysis, freshPhoto] = await Promise.all([
    analyzeItem(itemId, item.title, compressed),
    resolvedPhotoUrl
      ? Promise.resolve(null)
      : fetchUnsplashPhoto(buildImageKeyword(item.title, item.type ?? undefined)),
  ]);

  if (freshPhoto) {
    resolvedPhotoUrl = freshPhoto.url;
    // Cache on the seed so every future user who adds it gets the photo instantly (no extra fetch)
    if (seedIdToUpdate) {
      db.seedLibraryItem
        .update({ where: { id: seedIdToUpdate }, data: { imageUrl: freshPhoto.url } })
        .catch(() => null);
    }
  }

  // Write results back to the item
  const updated = await db.bucketListItem.update({
    where: { id: itemId },
    data: {
      type: analysis.type,
      costEstimate: analysis.cost_estimate,
      effortLevel: analysis.effort_level,
      timeHorizon: analysis.time_horizon,
      bestSeason: analysis.best_season,
      ageWindowMin: analysis.age_window_min,
      ageWindowMax: analysis.age_window_max,
      constraints: analysis.constraints,
      doabilityScore: analysis.doability_score,
      aiReasoning: analysis.ai_reasoning,
      ...(resolvedPhotoUrl && !item.imageUrl ? { imageUrl: resolvedPhotoUrl } : {}),
    },
  });

  return NextResponse.json({ data: updated });
}
