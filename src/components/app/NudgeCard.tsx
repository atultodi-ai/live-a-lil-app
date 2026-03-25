"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import type { AINudge, BucketListItem } from "@/types";

interface NudgeCardProps {
  items: Pick<BucketListItem, "id" | "title">[];
}

export function NudgeCard({ items }: NudgeCardProps) {
  const [nudge, setNudge] = useState<AINudge | null>(null);
  const [nudgeItem, setNudgeItem] = useState<Pick<BucketListItem, "id" | "title"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/v1/ai/nudge")
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        const data: AINudge | null = json.data;
        if (data) {
          setNudge(data);
          setNudgeItem(items.find((i) => i.id === data.item_id) ?? null);
        }
      })
      .catch(() => null)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [items]);

  if (loading) return <NudgeSkeleton />;
  if (!nudge || !nudgeItem) return null;

  const toneClass: Record<string, string> = {
    warm: "from-amber/15 to-terracotta/5",
    direct: "from-charcoal/8 to-charcoal/3",
    playful: "from-category-experience/15 to-amber/5",
    reflective: "from-stone/15 to-warm-white",
  };

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${toneClass[nudge.nudge_tone] ?? toneClass.warm} p-5 border border-stone/10`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex-shrink-0">
          <Sparkles size={18} className="text-amber" />
        </div>
        <div>
          <p className="text-charcoal font-medium text-sm leading-snug">
            {nudgeItem.title}
          </p>
          <p className="text-stone text-sm mt-1 leading-relaxed">
            {nudge.nudge_text}
          </p>
        </div>
      </div>
    </div>
  );
}

function NudgeSkeleton() {
  return (
    <div className="rounded-2xl bg-stone/8 p-5 border border-stone/10 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-4 h-4 bg-stone/20 rounded mt-0.5" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-stone/20 rounded w-3/4" />
          <div className="h-3 bg-stone/15 rounded w-full" />
          <div className="h-3 bg-stone/15 rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}
