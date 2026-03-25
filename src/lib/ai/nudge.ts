// generateNudge — warm AI nudge card for the dashboard
// Cached 24h — refreshes on SKG change

import { runAI } from "./runner";
import { cacheGet, cacheSet, TTL } from "./cache";
import { buildSystemPrompt, buildNudgePrompt } from "./prompts";
import { compressSKG } from "@/lib/utils";
import { MODEL_FULL } from "./client";
import type { AINudge, SKG } from "@/types";

export async function generateNudge(
  userId: string,
  skgVersion: number,
  topItems: { id: string; title: string; doabilityScore: number | null }[],
  skg: SKG
): Promise<AINudge | null> {
  if (topItems.length === 0) return null;

  const cacheKey = `nudge:${userId}:v${skgVersion}`;
  const cached = await cacheGet<AINudge>(cacheKey);
  if (cached) return cached;

  try {
    const compressed = compressSKG(skg);
    const result = await runAI<AINudge>({
      fn: "generateNudge",
      model: MODEL_FULL,
      system: buildSystemPrompt(compressed),
      user: buildNudgePrompt(topItems),
      maxTokens: 256,
    });

    if (!result.item_id || !result.nudge_text) return null;

    await cacheSet(cacheKey, result, TTL.NUDGE);
    return result;
  } catch {
    return null; // Nudge is optional — fail silently
  }
}
