"use client";

import { useEffect, useState } from "react";
import { HelpCircle, X } from "lucide-react";
import type { AIQuestion } from "@/types";

export function QuestionCard({ onAnswered }: { onAnswered?: () => void }) {
  const [question, setQuestion] = useState<AIQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/v1/ai/next-question")
      .then((r) => r.json())
      .then((json) => setQuestion(json.data ?? null))
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  if (loading || dismissed || !question) return null;

  async function handleAnswer(value: string) {
    if (!question || saving) return;
    setSaving(true);
    try {
      const res = await fetch("/api/v1/situation/progressive", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [question.field_key]: value }),
      });
      if (!res.ok) throw new Error("save failed");
      setDismissed(true);
      onAnswered?.();
    } catch {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white border border-stone/15 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 text-charcoal">
          <HelpCircle size={16} className="text-amber flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-widest text-stone">
            Quick question
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-stone hover:text-charcoal transition-colors p-0.5"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>

      <p className="text-charcoal font-medium text-sm mb-3">
        {question.question_text}
      </p>

      {question.options && (
        <div className="flex flex-wrap gap-2">
          {question.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleAnswer(opt.value)}
              disabled={saving}
              className="rounded-full border border-stone/30 px-3 py-1.5 text-sm font-medium text-charcoal hover:border-amber hover:text-amber transition-colors disabled:opacity-50"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
