// POST /api/v1/ai/batch-rerank
// Re-scores ALL active items. Called when SKG updates.
// Also fetches Unsplash photos for any items that are still missing one.
// Writes results back to the DB.

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { getLatestSKG, getLatestSKGRaw } from "@/lib/skg";
import { batchRerank } from "@/lib/ai";
import { fetchUnsplashPhoto, buildImageKeyword } from "@/lib/unsplash";

// Max photos to fetch per batch-rerank run (Unsplash free tier: 50 req/hour)
const MAX_PHOTOS_PER_RUN = 15;

export async function POST() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const [items, skg, skgRaw] = await Promise.all([
    db.bucketListItem.findMany({
      where: { userId: user.id, status: { in: ["todo", "ongoing"] } },
      select: { id: true, title: true, type: true, imageUrl: true },
    }),
    getLatestSKG(user.id),
    getLatestSKGRaw(user.id),
  ]);

  if (!skg || !skgRaw || items.length === 0) {
    return NextResponse.json({ data: [] });
  }

  // Run AI rerank + photo backfill in parallel
  const itemsNeedingPhotos = items
    .filter((i) => !i.imageUrl)
    .slice(0, MAX_PHOTOS_PER_RUN);

  const [results] = await Promise.all([
    batchRerank(user.id, skgRaw.version, items, skg),
    // Fetch photos for items missing one, concurrently but capped
    Promise.all(
      itemsNeedingPhotos.map(async (item) => {
        const photo = await fetchUnsplashPhoto(
          buildImageKeyword(item.title, item.type ?? undefined)
        );
        if (photo) {
          await db.bucketListItem
            .update({
              where: { id: item.id },
              data: { imageUrl: photo.url },
            })
            .catch(() => null);
        }
      })
    ),
  ]);

  // Write doability scores back to DB
  await Promise.all(
    results.map((r) =>
      db.bucketListItem
        .update({
          where: { id: r.item_id },
          data: {
            doabilityScore: r.doability_score,
            aiReasoning: r.ai_reasoning,
          },
        })
        .catch(() => null)
    )
  );

  return NextResponse.json({ data: results });
}
