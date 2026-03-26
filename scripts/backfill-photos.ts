#!/usr/bin/env npx tsx
/**
 * Backfill Unsplash photos for all BucketListItems that have no imageUrl.
 *
 * Run: NODE_TLS_REJECT_UNAUTHORIZED=0 npx tsx scripts/backfill-photos.ts
 *
 * Unsplash free tier = 50 req/hour → script auto-pauses between batches.
 */

import { PrismaClient } from "../src/generated/prisma";
import { fetchUnsplashPhoto, buildImageKeyword } from "../src/lib/unsplash";

const BATCH_SIZE = 8;
const DELAY_MS = 2500; // ~24 req/min — safely under 50/hour

async function main() {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.error("❌  UNSPLASH_ACCESS_KEY not set in .env");
    process.exit(1);
  }

  const db = new PrismaClient();

  const items = await db.bucketListItem.findMany({
    where: { imageUrl: null },
    select: { id: true, title: true, type: true, userId: true },
    orderBy: { createdAt: "asc" },
  });

  if (items.length === 0) {
    console.log("✅  All items already have photos.");
    await db.$disconnect();
    return;
  }

  console.log(`🖼️   Found ${items.length} item(s) without a photo. Starting backfill...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (item) => {
        const keyword = buildImageKeyword(item.title, item.type ?? undefined);
        const photo = await fetchUnsplashPhoto(keyword);

        if (photo) {
          await db.bucketListItem.update({
            where: { id: item.id },
            data: { imageUrl: photo.url },
          });
          console.log(`  ✓  "${item.title.slice(0, 50)}"`);
          success++;
        } else {
          console.log(`  ✗  "${item.title.slice(0, 50)}" — no photo found`);
          failed++;
        }
      })
    );

    // Pause between batches (except after the last one)
    if (i + BATCH_SIZE < items.length) {
      const remaining = items.length - i - BATCH_SIZE;
      console.log(`\n   ⏳  Pausing ${DELAY_MS / 1000}s... (${remaining} item(s) remaining)\n`);
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  console.log(`\n✅  Done — ${success} photos added, ${failed} failed.\n`);
  console.log("Restart your dev server to see the images in the app.");

  await db.$disconnect();
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
