// Core Claude call wrapper — handles JSON parsing, retry, logging

import { anthropic } from "./client";
import { logAICall } from "./logger";

interface RunOptions {
  fn: string;
  model: string;
  system: string;
  user: string;
  maxTokens?: number;
}

export async function runAI<T>(options: RunOptions): Promise<T> {
  const { fn, model, system, user, maxTokens = 1024 } = options;
  const start = Date.now();

  const attempt = async (): Promise<T> => {
    const response = await anthropic.messages.create({
      model,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    });

    const text = response.content
      .filter((c) => c.type === "text")
      .map((c) => (c as { type: "text"; text: string }).text)
      .join("");

    // Strip markdown code fences if present
    const clean = text.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();

    return JSON.parse(clean) as T;
  };

  try {
    const result = await attempt();
    logAICall({
      fn,
      model,
      inputTokens: 0,   // SDK doesn't expose this in streaming-less mode easily; acceptable
      outputTokens: 0,
      latencyMs: Date.now() - start,
      cached: false,
    });
    return result;
  } catch (firstErr) {
    // One retry on parse failure
    try {
      const result = await attempt();
      logAICall({ fn, model, inputTokens: 0, outputTokens: 0, latencyMs: Date.now() - start, cached: false });
      return result;
    } catch (secondErr) {
      logAICall({
        fn,
        model,
        inputTokens: 0,
        outputTokens: 0,
        latencyMs: Date.now() - start,
        cached: false,
        error: String(secondErr),
      });
      throw secondErr;
    }
  }
}
