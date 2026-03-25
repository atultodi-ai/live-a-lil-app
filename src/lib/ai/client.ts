import Anthropic from "@anthropic-ai/sdk";

const globalForAI = globalThis as unknown as {
  anthropic: Anthropic | undefined;
};

export const anthropic =
  globalForAI.anthropic ??
  new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

if (process.env.NODE_ENV !== "production") {
  globalForAI.anthropic = anthropic;
}

// Models
export const MODEL_FAST = "claude-haiku-4-5-20251001";   // categorization, simple tasks
export const MODEL_FULL = "claude-sonnet-4-6";            // nudges, surprise-me, nuanced generation
