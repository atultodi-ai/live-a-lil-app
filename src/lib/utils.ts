import type { ItemType, LifeStage, SKG } from "@/types";

// ─────────────────────────────────────────────
// Life stage from age
// ─────────────────────────────────────────────

export function getLifeStage(age: number): LifeStage {
  if (age < 30) return "young_adult";
  if (age < 40) return "early_prime";
  if (age < 50) return "prime";
  if (age < 60) return "experienced";
  if (age < 70) return "wise";
  return "elder";
}

export function getSummersRemaining(age: number): number {
  return Math.max(0, 100 - age);
}

// ─────────────────────────────────────────────
// SKG derived fields (computed on read, not stored)
// ─────────────────────────────────────────────

export function enrichSKG(skg: SKG): SKG {
  return {
    ...skg,
    life_stage: getLifeStage(skg.core.age),
    summers_remaining: getSummersRemaining(skg.core.age),
  };
}

// ─────────────────────────────────────────────
// Compressed SKG summary for AI calls (< 60 tokens)
// ─────────────────────────────────────────────

export function compressSKG(skg: SKG): string {
  const { core, progressive, contextual, behavioral } = skg;
  const ls = getLifeStage(core.age);
  const summers = getSummersRemaining(core.age);

  const parts = [
    `${core.age}${core.gender ? `/${core.gender.replace("_", "")}` : ""}, ${core.city}, ${core.country}.`,
    `${ls} stage.`,
    progressive.economic_capacity ? `${progressive.economic_capacity} finances.` : null,
    progressive.family_status ? `${progressive.family_status}.` : null,
    progressive.health_mobility ? `${progressive.health_mobility} mobility.` : null,
    contextual.upcoming_travel ? `Upcoming: ${contextual.upcoming_travel}.` : null,
    behavioral.engagement_pattern ? `${behavioral.engagement_pattern} engagement.` : null,
    behavioral.preferred_types?.length
      ? `Prefers ${behavioral.preferred_types.slice(0, 2).join(", ")}.`
      : null,
    `${summers} summers remaining.`,
  ].filter(Boolean);

  return parts.join(" ");
}

// ─────────────────────────────────────────────
// Category icon names (maps to lucide-react)
// ─────────────────────────────────────────────

export const CATEGORY_ICONS: Record<ItemType, string> = {
  travel: "Compass",
  skill: "Flame",
  experience: "Eye",
  achievement: "Mountain",
  habit: "RefreshCw",
  relationship: "Link",
  other: "Sparkles",
};

export const CATEGORY_LABELS: Record<ItemType, string> = {
  travel: "Travel",
  skill: "Skill",
  experience: "Experience",
  achievement: "Achievement",
  habit: "Habit",
  relationship: "Relationship",
  other: "Other",
};

// ─────────────────────────────────────────────
// SKG completeness score
// ─────────────────────────────────────────────

const PROGRESSIVE_FIELDS: (keyof NonNullable<SKG["progressive"]>)[] = [
  "economic_capacity",
  "family_status",
  "health_mobility",
  "occupation_type",
  "children",
  "education_level",
  "languages",
];

export function getSKGCompleteness(skg: SKG): { score: number; missingFields: string[] } {
  const missing: string[] = [];

  for (const field of PROGRESSIVE_FIELDS) {
    if (skg.progressive[field] === null || skg.progressive[field] === undefined) {
      missing.push(field);
    }
  }

  const score = (PROGRESSIVE_FIELDS.length - missing.length) / PROGRESSIVE_FIELDS.length;
  return { score, missingFields: missing };
}

// ─────────────────────────────────────────────
// Progressive question priority order
// ─────────────────────────────────────────────

export const PROGRESSIVE_QUESTION_ORDER: (keyof NonNullable<SKG["progressive"]>)[] = [
  "economic_capacity",
  "family_status",
  "health_mobility",
  "occupation_type",
  "children",
  "education_level",
  "languages",
];

export function getNextProgressiveField(skg: SKG): string | null {
  for (const field of PROGRESSIVE_QUESTION_ORDER) {
    if (skg.progressive[field] === null || skg.progressive[field] === undefined) {
      return field;
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// Item active cap check
// ─────────────────────────────────────────────

export const ACTIVE_ITEM_CAP = 100;

export function isAtCap(activeCount: number): boolean {
  return activeCount >= ACTIVE_ITEM_CAP;
}

// ─────────────────────────────────────────────
// Current season from date
// ─────────────────────────────────────────────

export function getCurrentSeason(): "spring" | "summer" | "autumn" | "winter" {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

// ─────────────────────────────────────────────
// Summers display string
// ─────────────────────────────────────────────

export function summersDisplay(age: number): string {
  const n = getSummersRemaining(age);
  if (n <= 0) return "You are timeless.";
  if (n === 1) return "1 summer ahead of you.";
  return `${n} summers ahead of you.`;
}
