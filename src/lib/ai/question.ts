// generateQuestion — returns the next progressive learning question
// Uses the static question templates; AI only adds warmth to the phrasing

import { getNextQuestion, PROGRESSIVE_QUESTIONS } from "@/lib/skg";
import type { AIQuestion, SKG } from "@/types";

// Returns the next question from the static templates — no AI call needed.
// The templates in skg.ts are already conversational. AI rewording is V2.
export function generateQuestion(skg: SKG): AIQuestion | null {
  return getNextQuestion(skg);
}

export { PROGRESSIVE_QUESTIONS };
