// analyzeItem — categorize a bucket list item and score its doability

import { runAI } from "./runner";
import { cacheGet, cacheSet, TTL } from "./cache";
import { buildSystemPrompt, buildAnalyzePrompt } from "./prompts";
import { MODEL_FAST } from "./client";
import type { AIItemAnalysis } from "@/types";

const DEFAULTS: AIItemAnalysis = {
  type: "experience",
  cost_estimate: "moderate",
  effort_level: "moderate",
  time_horizon: "short_term",
  best_season: "any",
  age_window_min: 18,
  age_window_max: 80,
  constraints: [],
  doability_score: 50,
  ai_reasoning: "This looks like a great experience to add to your list.",
};

export async function analyzeItem(
  itemId: string,
  title: string,
  compressedSKG: string
): Promise<AIItemAnalysis> {
  const cacheKey = `analyze:${itemId}:${Buffer.from(title).toString("base64").slice(0, 20)}`;

  const cached = await cacheGet<AIItemAnalysis>(cacheKey);
  if (cached) return cached;

  try {
    const result = await runAI<AIItemAnalysis>({
      fn: "analyzeItem",
      model: MODEL_FAST,
      system: buildSystemPrompt(compressedSKG),
      user: buildAnalyzePrompt(title),
      maxTokens: 512,
    });

    // Validate required fields, fall back to defaults for any missing
    const safe: AIItemAnalysis = {
      type: result.type ?? DEFAULTS.type,
      cost_estimate: result.cost_estimate ?? DEFAULTS.cost_estimate,
      effort_level: result.effort_level ?? DEFAULTS.effort_level,
      time_horizon: result.time_horizon ?? DEFAULTS.time_horizon,
      best_season: result.best_season ?? DEFAULTS.best_season,
      age_window_min: result.age_window_min ?? DEFAULTS.age_window_min,
      age_window_max: result.age_window_max ?? DEFAULTS.age_window_max,
      constraints: result.constraints ?? [],
      doability_score: result.doability_score ?? DEFAULTS.doability_score,
      ai_reasoning: result.ai_reasoning ?? DEFAULTS.ai_reasoning,
    };

    await cacheSet(cacheKey, safe, TTL.ITEM_ANALYSIS);
    return safe;
  } catch {
    return DEFAULTS;
  }
}
