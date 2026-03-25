// Lightweight AI call logger — logs tokens + latency for cost monitoring

interface AILogEntry {
  fn: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  latencyMs: number;
  cached: boolean;
  error?: string;
}

export function logAICall(entry: AILogEntry) {
  if (process.env.NODE_ENV === "development") {
    const cost = estimateCost(entry.model, entry.inputTokens, entry.outputTokens);
    console.log(
      `[AI] ${entry.fn} | ${entry.model} | ` +
      `in:${entry.inputTokens} out:${entry.outputTokens} | ` +
      `${entry.latencyMs}ms | ~$${cost.toFixed(5)}` +
      (entry.cached ? " [cached]" : "") +
      (entry.error ? ` [ERROR: ${entry.error}]` : "")
    );
  }
}

function estimateCost(model: string, inputTokens: number, outputTokens: number): number {
  // Approximate pricing per million tokens (as of 2025)
  const pricing: Record<string, { input: number; output: number }> = {
    "claude-sonnet-4-6":         { input: 3.0,  output: 15.0 },
    "claude-haiku-4-5-20251001": { input: 0.8,  output: 4.0  },
  };
  const p = pricing[model] ?? { input: 3.0, output: 15.0 };
  return (inputTokens * p.input + outputTokens * p.output) / 1_000_000;
}
