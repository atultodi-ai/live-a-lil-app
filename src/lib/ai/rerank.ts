// batchRerank — re-score all active items against the full SKG
// Most expensive operation — cached per SKG version, only re-runs on SKG change

import { runAI } from "./runner";
import { cacheGet, cacheSet, TTL } from "./cache";
import { buildSystemPrompt, buildBatchRerankPrompt } from "./prompts";
import { compressSKG } from "@/lib/utils";
import { MODEL_FULL } from "./client";
import type { AIRerankResult, SKG } from "@/types";

export async function batchRerank(
  userId: string,
  skgVersion: number,
  items: { id: string; title: string }[],
  skg: SKG
): Promise<AIRerankResult[]> {
  if (items.length === 0) return [];

  const cacheKey = `rerank:${userId}:v${skgVersion}`;
  const cached = await cacheGet<AIRerankResult[]>(cacheKey);
  if (cached) return cached;

  try {
    const compressed = compressSKG(skg);
    const results = await runAI<AIRerankResult[]>({
      fn: "batchRerank",
      model: MODEL_FULL,
      system: buildSystemPrompt(compressed),
      user: buildBatchRerankPrompt(items),
      maxTokens: Math.min(4096, items.length * 60 + 512),
    });

    // Ensure every item has a result (fill missing with default score 50)
    const resultMap = new Map(results.map((r) => [r.item_id, r]));
    const complete: AIRerankResult[] = items.map((item) =>
      resultMap.get(item.id) ?? {
        item_id: item.id,
        doability_score: 50,
        ai_reasoning: "Score estimated — AI analysis pending.",
      }
    );

    await cacheSet(cacheKey, complete, TTL.BATCH_RERANK);
    return complete;
  } catch {
    // Fallback: return neutral scores
    return items.map((item) => ({
      item_id: item.id,
      doability_score: 50,
      ai_reasoning: "Our recommendation engine is taking a break. Your list is still here.",
    }));
  }
}

// Call this whenever the SKG changes to invalidate the rerank cache
export { cacheDelete as invalidateRerankCache } from "./cache";
