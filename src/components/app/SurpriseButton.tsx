"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import type { AISurpriseThreeResult, BucketListItem } from "@/types";

interface SurpriseButtonProps {
  items: Pick<BucketListItem, "id" | "title">[];
  onView: (itemId: string) => void;
}

type Tab = "today" | "this_week" | "this_month";

const TABS: { key: Tab; label: string; emoji: string }[] = [
  { key: "today",      label: "Today",      emoji: "⚡" },
  { key: "this_week",  label: "This Week",  emoji: "📅" },
  { key: "this_month", label: "This Month", emoji: "🌟" },
];

export function SurpriseButton({ items, onView }: SurpriseButtonProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AISurpriseThreeResult | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("today");

  async function handleClick() {
    if (loading || items.length === 0) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/v1/ai/surprise-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const json = await res.json();
      if (json.data) {
        setResult(json.data);
        setActiveTab("today");
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }

  const activeSlot = result?.[activeTab];
  const activeItem = activeSlot
    ? items.find((i) => i.id === activeSlot.item_id)
    : null;

  return (
    <div className="flex flex-col gap-2">
      {/* Main button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={loading || items.length === 0}
        className="group relative flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber via-terracotta to-amber bg-[length:200%_100%] bg-left hover:bg-right px-6 py-3.5 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed w-full"
      >
        <Sparkles
          size={16}
          className={loading ? "animate-spin" : "group-hover:animate-bounce"}
        />
        <span>{loading ? "Finding ideas for you…" : "✨ Surprise me"}</span>
      </button>

      {/* Result card with tabs */}
      {result && activeItem && (
        <div className="rounded-2xl bg-charcoal overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-white/10">
            {TABS.map((tab) => {
              const slot = result[tab.key];
              const item = slot ? items.find((i) => i.id === slot.item_id) : null;
              if (!item) return null;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-1 py-2.5 text-xs font-semibold transition-colors ${
                    activeTab === tab.key
                      ? "text-white border-b-2 border-amber -mb-px"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setResult(null)}
              className="px-3 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>

          {/* Active slot content */}
          <div className="px-4 pt-3 pb-4">
            <p className="font-semibold text-white text-sm mb-1.5 leading-snug">
              {activeItem.title}
            </p>
            <p className="text-white/70 text-sm leading-snug mb-3">
              {activeSlot!.pitch_text}
            </p>
            <button
              type="button"
              onClick={() => onView(activeItem.id)}
              className="text-amber text-sm font-semibold hover:text-amber/80 transition-colors"
            >
              View →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
