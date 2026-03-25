#!/usr/bin/env npx tsx
/**
 * Seed Library Generator
 * ----------------------
 * Generates ~1000 bucket list items across 6 categories using Claude,
 * then writes them directly to the SeedLibraryItem table.
 *
 * Run: NODE_TLS_REJECT_UNAUTHORIZED=0 npx tsx scripts/generate-seed-library.ts
 *
 * Safe to re-run — uses upsert so existing items are updated not duplicated.
 */

import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

// ─────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────

const MODEL = "claude-haiku-4-5-20251001"; // fast + cheap for generation
const BATCH_SIZE = 15; // items per Claude call (smaller = safer JSON output)
const DELAY_MS = 500; // rate-limit buffer between batches

const CATEGORIES = [
  {
    type: "travel",
    count: 200,
    description:
      "Trips, destinations, journeys, adventures — places to go and explore. Include a range from budget backpacking to luxury travel, local and international, solo and group.",
  },
  {
    type: "skill",
    count: 180,
    description:
      "Learning something new — languages, instruments, crafts, sports, cooking, tech skills, creative skills. Include quick skills (weekend workshop) and long-term mastery paths.",
  },
  {
    type: "experience",
    count: 200,
    description:
      "One-off experiences and moments — events, sensations, cultural encounters, natural wonders. Things you witness or participate in rather than learn or achieve.",
  },
  {
    type: "achievement",
    count: 180,
    description:
      "Personal challenges and milestones — physical feats, creative outputs, career goals, financial goals. Things with a clear finish line.",
  },
  {
    type: "habit",
    count: 140,
    description:
      "Lifestyle changes and sustained practices — health, mindfulness, creativity, relationships. Things you do consistently over weeks/months/years.",
  },
  {
    type: "relationship",
    count: 100,
    description:
      "Connections with other people — family, friends, community, mentorship, love. Experiences that involve or are about relationships.",
  },
] as const;

type CategoryType = (typeof CATEGORIES)[number]["type"];

interface GeneratedItem {
  title: string;
  description: string;
  imageKeyword: string;
  ageRelevanceMin: number;
  ageRelevanceMax: number;
  costTier: "free" | "low" | "moderate" | "high" | "very_high";
  effortTier: "minimal" | "low" | "moderate" | "high" | "sustained";
  timeHorizon: "immediate" | "short_term" | "long_term";
  popularityScore: number;
  bestSeason: string;
  constraints: string[];
  tags: string[];
  regionRelevance: string[];
}

// ─────────────────────────────────────────────
// Prompt builder
// ─────────────────────────────────────────────

function buildPrompt(
  type: CategoryType,
  description: string,
  count: number,
  existingTitles: string[]
): string {
  const avoidList =
    existingTitles.length > 0
      ? `\n\nAvoid duplicating these already-generated titles:\n${existingTitles.slice(-80).map((t) => `- ${t}`).join("\n")}`
      : "";

  return `You are generating a curated bucket list seed library for a life-planning app called Live A Little.

Generate exactly ${count} unique bucket list items for the category: **${type}**
Category description: ${description}

For each item, return a JSON array. Each object must have ALL these fields:

- title: string — Short, evocative, first-person implied (e.g. "See the Northern Lights"). Max 80 chars. No numbering.
- description: string — 1-2 sentences explaining the experience and why it matters. Max 200 chars.
- imageKeyword: string — 1-3 keywords for Unsplash image search (e.g. "northern lights aurora")
- ageRelevanceMin: number — Minimum age this is relevant for (12-80)
- ageRelevanceMax: number — Maximum age this is relevant for (20-99)
- costTier: "free" | "low" | "moderate" | "high" | "very_high"
  (free=£0, low=under £100, moderate=£100-1000, high=£1000-5000, very_high=£5000+)
- effortTier: "minimal" | "low" | "moderate" | "high" | "sustained"
  (minimal=hours, low=days, moderate=weeks, high=months, sustained=ongoing commitment)
- timeHorizon: "immediate" | "short_term" | "long_term"
  (immediate=can do this month, short_term=within a year, long_term=multi-year goal)
- popularityScore: number 1-100 — How broadly appealing this is (100=everyone wants this)
- bestSeason: string — "any", "spring", "summer", "autumn", "winter", or a combination like "summer, autumn"
- constraints: string[] — Physical, financial, or logistical requirements. Empty array if none. E.g. ["requires swimming ability", "visa required"]
- tags: string[] — 3-6 descriptive tags for filtering. E.g. ["outdoor", "adventure", "solo-friendly"]
- regionRelevance: string[] — ["global"] if relevant everywhere, or specific regions like ["europe", "asia"]

Rules:
- Vary the items across demographics: some for young adults, some for 50+, some for all ages
- Include a good mix of affordable and expensive items
- Be specific and vivid — "Trek the Annapurna Circuit in Nepal" not just "Go hiking"
- Include both aspirational dreams and achievable goals
- Make each title feel like something a real person would write on their list${avoidList}

Return ONLY a valid JSON array, no markdown, no explanation.`;
}

// ─────────────────────────────────────────────
// Claude call with retry
// ─────────────────────────────────────────────

async function generateBatch(
  client: Anthropic,
  type: CategoryType,
  description: string,
  count: number,
  existingTitles: string[]
): Promise<GeneratedItem[]> {
  const prompt = buildPrompt(type, description, count, existingTitles);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await client.messages.create({
        model: MODEL,
        max_tokens: 4000,
        messages: [{ role: "user", content: prompt }],
      });

      const raw = response.content[0];
      if (raw.type !== "text") throw new Error("Non-text response");

      // Strip any markdown fences
      let text = raw.text.trim();
      if (text.startsWith("```")) {
        text = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
      }

      const parsed = JSON.parse(text) as GeneratedItem[];
      if (!Array.isArray(parsed)) throw new Error("Response is not an array");

      return parsed;
    } catch (err) {
      console.error(`  Attempt ${attempt} failed:`, err instanceof Error ? err.message : err);
      if (attempt < 3) await sleep(2000 * attempt);
    }
  }

  return [];
}

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function makeId(type: string, index: number): string {
  return `seed_${type}_${String(index).padStart(4, "0")}`;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function sanitizeItem(item: GeneratedItem, type: CategoryType): GeneratedItem {
  return {
    ...item,
    title: String(item.title ?? "").slice(0, 80),
    description: String(item.description ?? "").slice(0, 200),
    imageKeyword: String(item.imageKeyword ?? type).slice(0, 100),
    ageRelevanceMin: clamp(Number(item.ageRelevanceMin) || 18, 12, 80),
    ageRelevanceMax: clamp(Number(item.ageRelevanceMax) || 89, 20, 99),
    costTier: (["free", "low", "moderate", "high", "very_high"].includes(item.costTier)
      ? item.costTier
      : "moderate") as GeneratedItem["costTier"],
    effortTier: (["minimal", "low", "moderate", "high", "sustained"].includes(item.effortTier)
      ? item.effortTier
      : "moderate") as GeneratedItem["effortTier"],
    timeHorizon: (["immediate", "short_term", "long_term"].includes(item.timeHorizon)
      ? item.timeHorizon
      : "short_term") as GeneratedItem["timeHorizon"],
    popularityScore: clamp(Number(item.popularityScore) || 50, 1, 100),
    bestSeason: String(item.bestSeason ?? "any").slice(0, 50),
    constraints: Array.isArray(item.constraints) ? item.constraints.map(String) : [],
    tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
    regionRelevance: Array.isArray(item.regionRelevance)
      ? item.regionRelevance.map(String)
      : ["global"],
  };
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌  ANTHROPIC_API_KEY is not set in .env");
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });
  const db = new PrismaClient();

  console.log("🌱  Live A Little — Seed Library Generator");
  console.log("─".repeat(50));

  let globalIndex = 1;
  let totalInserted = 0;

  for (const category of CATEGORIES) {
    const { type, count, description } = category;
    console.log(`\n📦  Generating ${count} items for: ${type}`);

    const allItems: GeneratedItem[] = [];
    const existingTitles: string[] = [];
    let remaining = count;

    // Generate in batches of BATCH_SIZE
    while (remaining > 0) {
      const batchCount = Math.min(BATCH_SIZE, remaining);
      process.stdout.write(`  Batch (${batchCount} items)... `);

      const batch = await generateBatch(client, type, description, batchCount, existingTitles);

      if (batch.length === 0) {
        console.log("⚠️  Empty batch, skipping");
        remaining -= batchCount;
        continue;
      }

      allItems.push(...batch);
      existingTitles.push(...batch.map((i) => i.title));
      remaining -= batch.length;
      console.log(`✓ got ${batch.length}`);

      if (remaining > 0) await sleep(DELAY_MS);
    }

    // Write to DB
    console.log(`  Writing ${allItems.length} items to database...`);
    let inserted = 0;

    for (const raw of allItems) {
      const item = sanitizeItem(raw, type);
      if (!item.title) continue;

      const id = makeId(type, globalIndex++);

      try {
        await db.seedLibraryItem.upsert({
          where: { id },
          create: {
            id,
            title: item.title,
            description: item.description,
            type,
            imageKeyword: item.imageKeyword,
            ageRelevanceMin: item.ageRelevanceMin,
            ageRelevanceMax: item.ageRelevanceMax,
            costTier: item.costTier,
            effortTier: item.effortTier,
            timeHorizon: item.timeHorizon,
            popularityScore: item.popularityScore,
            bestSeason: item.bestSeason,
            constraints: item.constraints,
            tags: item.tags,
            regionRelevance: item.regionRelevance,
          },
          update: {
            title: item.title,
            description: item.description,
            imageKeyword: item.imageKeyword,
            popularityScore: item.popularityScore,
            tags: item.tags,
          },
        });
        inserted++;
      } catch (err) {
        console.error(`  ⚠️  Failed to insert "${item.title}":`, err);
      }
    }

    totalInserted += inserted;
    console.log(`  ✅  ${inserted} items saved for ${type}`);
  }

  console.log("\n" + "─".repeat(50));
  console.log(`🎉  Done! ${totalInserted} total items in the seed library.`);

  const finalCount = await db.seedLibraryItem.count();
  console.log(`📊  Total in DB: ${finalCount} items`);

  await db.$disconnect();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
