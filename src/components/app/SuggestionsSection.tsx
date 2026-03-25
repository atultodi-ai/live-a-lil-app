"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Sparkles, RefreshCw } from "lucide-react";
import type { SeedLibraryItem } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  travel: "bg-category-travel/15 text-category-travel",
  skill: "bg-category-skill/15 text-category-skill",
  experience: "bg-category-experience/15 text-category-experience",
  achievement: "bg-category-achievement/15 text-category-achievement",
  habit: "bg-category-habit/15 text-category-habit",
  relationship: "bg-category-relationship/15 text-category-relationship",
  other: "bg-stone/10 text-stone",
};

const DISMISSED_KEY = "lal_suggestions_dismissed";
const MAX_STORED_DISMISSALS = 200;

function readDismissed(): string[] {
  try {
    const raw = localStorage.getItem(DISMISSED_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveDismissed(ids: string[]) {
  try {
    // Cap stored dismissals so localStorage doesn't grow unboundedly
    const trimmed = ids.slice(-MAX_STORED_DISMISSALS);
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(trimmed));
  } catch {
    // Storage full or unavailable — silently skip
  }
}

interface SuggestionsSectionProps {
  onAdded: () => void;
}

export function SuggestionsSection({ onAdded }: SuggestionsSectionProps) {
  const [suggestions, setSuggestions] = useState<SeedLibraryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [adding, setAdding] = useState<string | null>(null);
  // In-session dismissed (also persisted to localStorage)
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const dismissedRef = useRef<string[]>([]);

  function fetchSuggestions(existingDismissed: string[], isRefresh = false) {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    const params = new URLSearchParams({ limit: "6" });
    if (existingDismissed.length > 0) {
      // Pass the most recent 50 dismissals to the server for exclusion
      params.set("dismissed", existingDismissed.slice(-50).join(","));
    }

    fetch(`/api/v1/items/suggestions?${params}`)
      .then((r) => r.json())
      .then((json) => setSuggestions(json.data ?? []))
      .catch(() => null)
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  }

  useEffect(() => {
    const stored = readDismissed();
    dismissedRef.current = stored;
    setDismissed(new Set(stored));
    fetchSuggestions(stored);
  }, []);

  function handleDismiss(id: string) {
    // Update state
    setDismissed((prev) => new Set([...prev, id]));
    // Persist
    const updated = [...dismissedRef.current, id];
    dismissedRef.current = updated;
    saveDismissed(updated);
  }

  function handleRefresh() {
    fetchSuggestions(dismissedRef.current, true);
  }

  async function handleAdd(item: SeedLibraryItem) {
    if (adding) return;
    setAdding(item.id);
    try {
      const res = await fetch("/api/v1/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: item.title,
          source: "seed_library",
          seedItemId: item.id,
        }),
      });
      const json = await res.json();
      if (res.ok && !json.error) {
        // Remove from visible suggestions
        setSuggestions((prev) => prev.filter((s) => s.id !== item.id));
        // Also dismiss so it doesn't reappear
        handleDismiss(item.id);
        // Fire AI analysis in background
        if (json.data?.id) {
          fetch("/api/v1/ai/analyze-item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ itemId: json.data.id }),
          }).catch(() => null);
        }
        onAdded();
      }
    } catch {
      // silent fail
    } finally {
      setAdding(null);
    }
  }

  const visible = suggestions.filter((s) => !dismissed.has(s.id));

  if (loading) return null;
  if (visible.length === 0 && !refreshing) return null;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-amber" />
          <h2 className="text-sm font-semibold text-charcoal">Suggested for you</h2>
        </div>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-1 text-xs text-stone hover:text-charcoal transition-colors disabled:opacity-40"
          title="Load fresh suggestions"
        >
          <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
          {refreshing ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {refreshing && visible.length === 0 && (
          <div className="rounded-2xl bg-stone/5 border border-stone/10 px-4 py-5 text-center text-sm text-stone">
            Finding ideas for you…
          </div>
        )}
        {visible.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-2xl bg-white border border-stone/10 px-4 py-3 shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-charcoal leading-snug line-clamp-1">
                {item.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    TYPE_COLORS[item.type] ?? "bg-stone/10 text-stone"
                  }`}
                >
                  {CATEGORY_LABELS[item.type as keyof typeof CATEGORY_LABELS] ?? item.type}
                </span>
                <span className="text-xs text-stone/60 capitalize">
                  {item.costTier.replace("_", " ")} cost
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleDismiss(item.id)}
                className="text-stone/40 hover:text-stone text-xs px-1.5 py-1 transition-colors"
                aria-label="Not for me"
                title="Not for me"
              >
                ✕
              </button>
              <button
                type="button"
                onClick={() => handleAdd(item)}
                disabled={adding === item.id}
                className="flex items-center gap-1 rounded-full bg-amber/10 text-amber px-3 py-1.5 text-xs font-semibold hover:bg-amber hover:text-white transition-colors disabled:opacity-50"
              >
                <Plus size={12} />
                {adding === item.id ? "Adding…" : "Add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
