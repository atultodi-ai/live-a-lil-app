// GET /api/v1/items/suggestions — personalized seed items not yet on user's list
//
// Algorithm:
// 1. Exclude seeds already on the user's list (any status), by seedItemId OR title similarity
// 2. Exclude client-dismissed IDs (passed as ?dismissed=id1,id2,...)
// 3. Apply hard constraints (age range, financial capacity, mobility)
// 4. Fetch a larger candidate pool (5× limit) to allow scoring/diversity
// 5. Score candidates by: popularity (40%) + category diversity (40%) + randomisation (20%)
//    — diversity: categories under-represented on the user's list score higher
//    — completed items in a category gently reduce that category's score (been there)
// 6. Return top N

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { getLatestSKG } from "@/lib/skg";
import { ACTIVE_ITEM_CAP } from "@/lib/utils";
import type { Prisma } from "@prisma/client";

// ─── Title similarity helpers ─────────────────────────────────────────────────

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "my", "your", "our", "how", "go", "get", "do",
  "make", "take", "have", "learn", "try", "see", "visit", "from", "up",
  "into", "through", "around", "across", "become", "start", "first",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

// Returns fraction of b's tokens that appear in a (0–1)
function overlapScore(a: string[], b: string[]): number {
  if (!a.length || !b.length) return 0;
  const setA = new Set(a);
  const matches = b.filter((w) => setA.has(w)).length;
  return matches / Math.min(a.length, b.length);
}

// ─── Route ────────────────────────────────────────────────────────────────────

export async function GET(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { searchParams } = new URL(req.url);
  const limit = Math.min(parseInt(searchParams.get("limit") ?? "6"), 20);
  const dismissedParam = searchParams.get("dismissed") ?? "";
  const dismissedIds = dismissedParam
    ? dismissedParam.split(",").filter((s) => s.trim())
    : [];

  // Check cap
  const activeCount = await db.bucketListItem.count({
    where: { userId: user.id, status: { in: ["todo", "ongoing"] } },
  });
  if (activeCount >= ACTIVE_ITEM_CAP) {
    return NextResponse.json({ data: [] });
  }

  // Get ALL user items (every status) for exclusion + diversity scoring
  const allUserItems = await db.bucketListItem.findMany({
    where: { userId: user.id },
    select: { seedItemId: true, title: true, type: true, status: true },
  });

  // Seed IDs already on list (any status)
  const existingSeedIds = allUserItems
    .filter((i) => i.seedItemId)
    .map((i) => i.seedItemId!);

  // Tokenized existing titles for similarity check
  const existingTokenSets = allUserItems.map((i) => tokenize(i.title));

  // Category counts by status for diversity scoring
  const activeCounts: Record<string, number> = {};
  const doneCounts: Record<string, number> = {};
  for (const item of allUserItems) {
    const t = item.type ?? "other";
    if (item.status === "todo" || item.status === "ongoing") {
      activeCounts[t] = (activeCounts[t] ?? 0) + 1;
    } else if (item.status === "done") {
      doneCounts[t] = (doneCounts[t] ?? 0) + 1;
    }
  }

  // Build hard-exclude list
  const hardExclude = [...existingSeedIds, ...dismissedIds];

  // Get SKG for personalisation
  const skg = await getLatestSKG(user.id);

  // Base where clause
  const where: Prisma.SeedLibraryItemWhereInput = {
    id: { notIn: hardExclude.length > 0 ? hardExclude : undefined },
  };

  // Age filter
  if (skg?.core.age) {
    where.ageRelevanceMin = { lte: skg.core.age };
    where.ageRelevanceMax = { gte: skg.core.age };
  }

  // Financial filter — don't show expensive items to people with tight budgets
  if (skg?.progressive.economic_capacity === "tight") {
    where.costTier = { notIn: ["very_high", "high"] };
  }

  // Mobility filter
  if (skg?.progressive.health_mobility === "restricted") {
    where.effortTier = { notIn: ["high", "sustained"] };
  }

  // Fetch a generous candidate pool to score and diversify
  const poolSize = Math.min(limit * 8, 80);
  const candidates = await db.seedLibraryItem.findMany({
    where,
    orderBy: { popularityScore: "desc" },
    take: poolSize,
  });

  // ── Filter out title-similar items ────────────────────────────────────────
  const SIMILARITY_THRESHOLD = 0.55; // >55% keyword overlap = considered duplicate

  const filtered = candidates.filter((c) => {
    const cTokens = tokenize(c.title);
    return !existingTokenSets.some(
      (et) => overlapScore(et, cTokens) >= SIMILARITY_THRESHOLD
    );
  });

  // ── Diversity scoring ─────────────────────────────────────────────────────
  // Categories with fewer active items score higher (we want to push exploration)
  // Completed items in a category reduce the diversity boost slightly (already visited)
  const CATEGORY_TYPES = [
    "travel", "skill", "experience", "achievement", "habit", "relationship",
  ];

  const maxActive = Math.max(
    ...CATEGORY_TYPES.map((t) => activeCounts[t] ?? 0),
    1
  );

  function categoryDiversityScore(type: string): number {
    const active = activeCounts[type] ?? 0;
    const done = doneCounts[type] ?? 0;
    // Active items hurt diversity more than done (done means they accomplished something there)
    const effectiveCount = active + done * 0.4;
    const normalized = effectiveCount / (maxActive + 1);
    return Math.max(0, 1 - normalized); // 0–1, higher = more room to grow
  }

  // ── Final scoring ─────────────────────────────────────────────────────────
  const scored = filtered.map((c) => ({
    item: c,
    score:
      (c.popularityScore / 100) * 0.4 +
      categoryDiversityScore(c.type) * 0.4 +
      Math.random() * 0.2, // randomise within quality tiers for freshness
  }));

  scored.sort((a, b) => b.score - a.score);

  const results = scored.slice(0, limit).map((s) => s.item);

  return NextResponse.json({ data: results });
}
