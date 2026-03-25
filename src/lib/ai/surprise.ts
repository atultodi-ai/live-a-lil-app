// surpriseMe — always live, never cached
// Picks ONE item from the list and generates a spontaneous pitch

import { runAI } from "./runner";
import { buildSystemPrompt, buildSurpriseMePrompt, buildSurpriseThreePrompt } from "./prompts";
import { compressSKG } from "@/lib/utils";
import { MODEL_FULL } from "./client";
import type { AISurpriseResult, AISurpriseThreeResult, SKG } from "@/types";

export async function surpriseMe(
  items: { id: string; title: string }[],
  skg: SKG,
  mood?: string | null
): Promise<AISurpriseResult | null> {
  if (items.length === 0) return null;

  try {
    const compressed = compressSKG(skg);
    const result = await runAI<AISurpriseResult>({
      fn: "surpriseMe",
      model: MODEL_FULL,
      system: buildSystemPrompt(compressed),
      user: buildSurpriseMePrompt(items, mood),
      maxTokens: 256,
    });

    if (!result.item_id || !result.pitch_text) return null;

    // Verify the returned item_id is actually in our list
    const validIds = new Set(items.map((i) => i.id));
    if (!validIds.has(result.item_id)) {
      const fallback = items[Math.floor(Math.random() * items.length)];
      return {
        item_id: fallback.id,
        pitch_text: "This one's been waiting for you. What if today was the day?",
      };
    }

    return result;
  } catch {
    const fallback = items[Math.floor(Math.random() * items.length)];
    return {
      item_id: fallback.id,
      pitch_text: "This one's been waiting for you. What if today was the day?",
    };
  }
}

export async function surpriseMeThree(
  items: { id: string; title: string }[],
  skg: SKG
): Promise<AISurpriseThreeResult | null> {
  if (items.length === 0) return null;

  const validIds = new Set(items.map((i) => i.id));

  function fallbackSlot(pitch: string, exclude: Set<string>): AISurpriseResult {
    const pool = items.filter((i) => !exclude.has(i.id));
    const pick = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : items[0];
    return { item_id: pick.id, pitch_text: pitch };
  }

  try {
    const compressed = compressSKG(skg);
    const raw = await runAI<AISurpriseThreeResult>({
      fn: "surpriseMeThree",
      model: MODEL_FULL,
      system: buildSystemPrompt(compressed),
      user: buildSurpriseThreePrompt(items),
      maxTokens: 512,
    });

    // Validate each slot — fall back to random if item_id is missing or invalid
    const used = new Set<string>();

    function validateSlot(
      slot: AISurpriseResult | undefined,
      fallbackPitch: string
    ): AISurpriseResult {
      if (slot?.item_id && validIds.has(slot.item_id) && !used.has(slot.item_id)) {
        used.add(slot.item_id);
        return { item_id: slot.item_id, pitch_text: slot.pitch_text || fallbackPitch };
      }
      const fb = fallbackSlot(fallbackPitch, used);
      used.add(fb.item_id);
      return fb;
    }

    return {
      today:      validateSlot(raw.today,      "Perfect for today — no excuses needed."),
      this_week:  validateSlot(raw.this_week,  "This week could be the week you actually do it."),
      this_month: validateSlot(raw.this_month, "Give yourself this month. You won't regret it."),
    };
  } catch {
    // Full fallback: pick 3 different random items
    const used = new Set<string>();
    const today     = fallbackSlot("Perfect for today — no excuses needed.", used);
    used.add(today.item_id);
    const this_week  = fallbackSlot("This week could be the week you actually do it.", used);
    used.add(this_week.item_id);
    const this_month = fallbackSlot("Give yourself this month. You won't regret it.", used);
    return { today, this_week, this_month };
  }
}
