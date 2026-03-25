"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Calendar } from "lucide-react";
import type { BucketListItem } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  travel: "bg-category-travel/15 text-category-travel",
  skill: "bg-category-skill/15 text-category-skill",
  experience: "bg-category-experience/15 text-category-experience",
  achievement: "bg-category-achievement/15 text-category-achievement",
  habit: "bg-category-habit/15 text-category-habit",
  relationship: "bg-category-relationship/15 text-category-relationship",
};

export default function JourneyPage() {
  const [items, setItems] = useState<BucketListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/items?status=done&sort=created")
      .then((r) => r.json())
      .then((json) => setItems(json.data ?? []))
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  // Group by year completed
  const byYear: Record<string, BucketListItem[]> = {};
  for (const item of items) {
    const year = item.completedAt
      ? new Date(item.completedAt).getFullYear().toString()
      : "Unknown";
    (byYear[year] ??= []).push(item);
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-charcoal">Journey</h1>
        <p className="text-stone text-sm">
          {items.length} dream{items.length !== 1 ? "s" : ""} lived
        </p>
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="pb-6">
          {years.map((year) => (
            <div key={year} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-stone" />
                  <span className="text-sm font-semibold text-stone">{year}</span>
                </div>
                <div className="flex-1 h-px bg-stone/15" />
                <span className="text-xs text-stone/60">
                  {byYear[year].length} done
                </span>
              </div>

              <div className="flex flex-col gap-3 relative">
                {/* Timeline line */}
                <div className="absolute left-3.5 top-4 bottom-4 w-px bg-stone/15" />

                {byYear[year].map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full bg-white border-2 border-amber flex items-center justify-center mt-3">
                      <CheckCircle size={12} className="text-amber" fill="currentColor" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-stone/10 p-4 shadow-sm">
                      {item.type && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium mb-2 inline-block ${TYPE_COLORS[item.type] ?? "bg-stone/10 text-stone"}`}
                        >
                          {CATEGORY_LABELS[item.type]}
                        </span>
                      )}
                      <p className="font-semibold text-charcoal text-sm leading-snug">
                        {item.title}
                      </p>
                      {item.completedAt && (
                        <p className="text-xs text-stone/70 mt-1">
                          {new Date(item.completedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      )}
                      {item.completionNote && (
                        <p className="text-stone text-sm mt-2 italic leading-relaxed border-t border-stone/10 pt-2">
                          &ldquo;{item.completionNote}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="rounded-2xl bg-white border border-stone/10 p-4 animate-pulse"
        >
          <div className="space-y-2">
            <div className="h-3 bg-stone/15 rounded w-1/4" />
            <div className="h-4 bg-stone/20 rounded w-3/4" />
            <div className="h-3 bg-stone/10 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <p className="text-5xl">🏔️</p>
      <div>
        <p className="font-semibold text-charcoal">Nothing completed yet</p>
        <p className="text-stone text-sm mt-1 max-w-xs mx-auto">
          When you mark something as done, it will live here forever — your personal
          archive of experiences.
        </p>
      </div>
    </div>
  );
}
