import { db } from "@/lib/db/client";
import { enrichSKG, compressSKG, getSKGCompleteness, PROGRESSIVE_QUESTION_ORDER } from "@/lib/utils";
import type { SKG, SKGCoreLayer, SKGProgressiveLayer, SKGContextualLayer, AIQuestion } from "@/types";

// ─────────────────────────────────────────────
// READ
// ─────────────────────────────────────────────

export async function getLatestSKG(userId: string): Promise<SKG | null> {
  const situation = await db.userSituation.findFirst({
    where: { userId },
    orderBy: { version: "desc" },
  });

  if (!situation) return null;

  const raw = situation.data as unknown as SKG;
  return enrichSKG(raw);
}

export async function getLatestSKGRaw(userId: string) {
  return db.userSituation.findFirst({
    where: { userId },
    orderBy: { version: "desc" },
  });
}

// ─────────────────────────────────────────────
// WRITE — always creates a new version row
// ─────────────────────────────────────────────

export async function createInitialSKG(
  userId: string,
  core: SKGCoreLayer
): Promise<SKG> {
  const data: SKG = {
    core,
    progressive: {},
    contextual: {},
    behavioral: {},
  };

  await db.userSituation.create({
    data: { userId, version: 1, data: data as object },
  });

  return enrichSKG(data);
}

async function appendSKGVersion(userId: string, newData: SKG): Promise<SKG> {
  const current = await db.userSituation.findFirst({
    where: { userId },
    orderBy: { version: "desc" },
    select: { version: true },
  });

  const nextVersion = (current?.version ?? 0) + 1;

  await db.userSituation.create({
    data: { userId, version: nextVersion, data: newData as object },
  });

  return enrichSKG(newData);
}

export async function updateSKGCore(userId: string, patch: Partial<SKGCoreLayer>): Promise<SKG> {
  const current = await getLatestSKG(userId);
  const base = current ?? { core: {} as SKGCoreLayer, progressive: {}, contextual: {}, behavioral: {} };

  const newData: SKG = {
    ...base,
    core: { ...base.core, ...patch },
  };

  return appendSKGVersion(userId, newData);
}

export async function updateSKGProgressive(
  userId: string,
  patch: Partial<SKGProgressiveLayer>,
  source: "user_stated" | "inferred" | "updated" = "user_stated"
): Promise<SKG> {
  const current = await getLatestSKG(userId);
  const base = current ?? { core: {} as SKGCoreLayer, progressive: {}, contextual: {}, behavioral: {} };

  // Track source for each updated field
  const newSources: SKGProgressiveLayer["_sources"] = { ...base.progressive._sources };
  for (const key of Object.keys(patch) as (keyof typeof patch)[]) {
    if (key !== "_sources") {
      (newSources as Record<string, string>)[key] = source;
    }
  }

  const newData: SKG = {
    ...base,
    progressive: {
      ...base.progressive,
      ...patch,
      _sources: newSources,
    },
  };

  return appendSKGVersion(userId, newData);
}

export async function updateSKGContextual(
  userId: string,
  patch: Partial<SKGContextualLayer>
): Promise<SKG> {
  const current = await getLatestSKG(userId);
  const base = current ?? { core: {} as SKGCoreLayer, progressive: {}, contextual: {}, behavioral: {} };

  const newData: SKG = {
    ...base,
    contextual: { ...base.contextual, ...patch },
  };

  return appendSKGVersion(userId, newData);
}

// ─────────────────────────────────────────────
// PROGRESSIVE QUESTION TEMPLATES
// ─────────────────────────────────────────────

export const PROGRESSIVE_QUESTIONS: Record<string, AIQuestion> = {
  economic_capacity: {
    field_key: "economic_capacity",
    question_text: "How would you describe your current financial situation?",
    options: [
      { value: "tight", label: "Tight — money is a real constraint right now" },
      { value: "comfortable", label: "Comfortable — I can afford things with some planning" },
      { value: "abundant", label: "Abundant — finances aren't really a barrier" },
    ],
  },
  family_status: {
    field_key: "family_status",
    question_text: "What's your relationship status?",
    options: [
      { value: "single", label: "Single" },
      { value: "partnered", label: "In a relationship" },
      { value: "married", label: "Married" },
      { value: "divorced", label: "Divorced" },
      { value: "widowed", label: "Widowed" },
    ],
  },
  health_mobility: {
    field_key: "health_mobility",
    question_text: "How would you describe your physical mobility?",
    options: [
      { value: "full", label: "Full — no physical limitations" },
      { value: "limited", label: "Limited — some activities are harder" },
      { value: "restricted", label: "Restricted — significant physical constraints" },
    ],
  },
  occupation_type: {
    field_key: "occupation_type",
    question_text: "What best describes your current work situation?",
    options: [
      { value: "employed", label: "Employed full-time" },
      { value: "self_employed", label: "Self-employed / own a business" },
      { value: "freelance", label: "Freelance / contract work" },
      { value: "student", label: "Student" },
      { value: "retired", label: "Retired" },
      { value: "unemployed", label: "Currently not working" },
    ],
  },
  children: {
    field_key: "children",
    question_text: "Do you have children?",
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" },
    ],
  },
  education_level: {
    field_key: "education_level",
    question_text: "What's your highest level of education?",
    options: [
      { value: "high_school", label: "High school" },
      { value: "undergraduate", label: "Undergraduate degree" },
      { value: "graduate", label: "Graduate degree" },
      { value: "doctoral", label: "Doctoral degree" },
      { value: "other", label: "Other / prefer not to say" },
    ],
  },
  languages: {
    field_key: "languages",
    question_text: "Besides your native language, what other languages do you speak?",
    // No options — free text
  },
};

export function getNextQuestion(skg: SKG): AIQuestion | null {
  for (const field of PROGRESSIVE_QUESTION_ORDER) {
    const val = skg.progressive[field as keyof SKGProgressiveLayer];
    if (val === null || val === undefined) {
      const question = PROGRESSIVE_QUESTIONS[field];
      if (question) return question;
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// COMPLETENESS
// ─────────────────────────────────────────────

export { getSKGCompleteness, compressSKG };
