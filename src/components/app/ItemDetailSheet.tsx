"use client";

import { useState, useTransition } from "react";
import { X, Star, CheckCircle, Archive, Trash2, PlayCircle, PauseCircle } from "lucide-react";
import type { BucketListItem } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";

interface ItemDetailSheetProps {
  item: BucketListItem;
  onClose: () => void;
  onUpdated: () => void;
  onOpenComplete: (item: BucketListItem) => void;
}

function doabilityGradient(score: number): string {
  if (score >= 70) return "from-emerald-400 to-teal-500";
  if (score >= 40) return "from-amber to-orange-400";
  return "from-rose-400 to-red-500";
}

function doabilityTextColor(score: number): string {
  if (score >= 70) return "text-emerald-500";
  if (score >= 40) return "text-amber";
  return "text-rose-500";
}

const COST_LABELS: Record<string, string> = {
  free: "Free",
  low: "Low cost",
  moderate: "Moderate",
  high: "High cost",
  very_high: "Very high cost",
};

const EFFORT_LABELS: Record<string, string> = {
  minimal: "Minimal effort",
  low: "Low effort",
  moderate: "Moderate effort",
  high: "High effort",
  sustained: "Long-term commitment",
};

export function ItemDetailSheet({
  item,
  onClose,
  onUpdated,
  onOpenComplete,
}: ItemDetailSheetProps) {
  const [isPending, startTransition] = useTransition();
  const [priority, setPriority] = useState<1 | 2 | 3>(item.priority as 1 | 2 | 3);
  const [status, setStatus] = useState(item.status);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  async function savePriority(p: 1 | 2 | 3) {
    setPriority(p);
    await fetch(`/api/v1/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priority: p }),
    });
    onUpdated();
  }

  function handleToggleOngoing() {
    const next = status === "ongoing" ? "todo" : "ongoing";
    setStatus(next);
    startTransition(async () => {
      await fetch(`/api/v1/items/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      onUpdated();
    });
  }

  function handleArchive() {
    startTransition(async () => {
      await fetch(`/api/v1/items/${item.id}/archive`, { method: "PATCH" });
      onUpdated();
      onClose();
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await fetch(`/api/v1/items/${item.id}`, { method: "DELETE" });
      onUpdated();
      onClose();
    });
  }

  const PRIORITY_LABELS: Record<number, string> = {
    1: "Maybe someday",
    2: "Want to do",
    3: "Must do in my lifetime",
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-stone/25" />
        </div>

        <div className="px-6 pt-2 pb-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {item.type && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-stone">
                    {CATEGORY_LABELS[item.type]}
                  </span>
                )}
                {status === "ongoing" && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    In progress
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-charcoal leading-snug">
                {item.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-stone hover:text-charcoal transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Priority selector */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">
              Priority
            </p>
            <div className="flex gap-2">
              {([1, 2, 3] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => savePriority(p)}
                  className={`flex-1 flex flex-col items-center gap-1 rounded-xl py-2.5 border transition-all text-xs font-medium ${
                    priority === p
                      ? "border-amber bg-amber/10 text-amber"
                      : "border-stone/20 text-stone hover:border-stone/40"
                  }`}
                >
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((n) => (
                      <Star
                        key={n}
                        size={12}
                        fill={n <= p ? "currentColor" : "none"}
                        className={n <= p ? "text-amber" : "text-stone/30"}
                      />
                    ))}
                  </div>
                  <span className="text-center leading-tight text-[11px]">
                    {PRIORITY_LABELS[p]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* AI metadata */}
          {(item.costEstimate || item.effortLevel || item.timeHorizon || item.bestSeason) && (
            <div className="mb-5 grid grid-cols-2 gap-2">
              {item.costEstimate && (
                <MetaChip label="Cost" value={COST_LABELS[item.costEstimate]} />
              )}
              {item.effortLevel && (
                <MetaChip label="Effort" value={EFFORT_LABELS[item.effortLevel]} />
              )}
              {item.timeHorizon && (
                <MetaChip
                  label="When"
                  value={item.timeHorizon.replace("_", " ")}
                />
              )}
              {item.bestSeason && (
                <MetaChip label="Best season" value={item.bestSeason} />
              )}
            </div>
          )}

          {/* Doability */}
          {item.doabilityScore !== null && item.doabilityScore !== undefined && (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone">
                  Doability score
                </p>
                <span className={`text-sm font-bold ${doabilityTextColor(item.doabilityScore)}`}>
                  {item.doabilityScore}
                </span>
              </div>
              <div className="h-2 bg-stone/15 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${doabilityGradient(item.doabilityScore)} rounded-full`}
                  style={{ width: `${item.doabilityScore}%` }}
                />
              </div>
              {item.aiReasoning && (
                <p className="text-stone text-xs mt-2 leading-relaxed">
                  {item.aiReasoning}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-2">
            {status !== "done" && (
              <>
                <button
                  type="button"
                  onClick={() => onOpenComplete(item)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber py-3.5 text-white font-semibold text-sm transition-opacity hover:opacity-90"
                >
                  <CheckCircle size={16} />
                  Mark as complete
                </button>

                <button
                  type="button"
                  onClick={handleToggleOngoing}
                  disabled={isPending}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-sm transition-all disabled:opacity-50 ${
                    status === "ongoing"
                      ? "bg-emerald-50 border border-emerald-300 text-emerald-700 hover:bg-emerald-100"
                      : "bg-stone/8 border border-stone/20 text-charcoal hover:border-stone/40"
                  }`}
                >
                  {status === "ongoing" ? (
                    <>
                      <PauseCircle size={16} />
                      Stop working on this
                    </>
                  ) : (
                    <>
                      <PlayCircle size={16} />
                      I&apos;m working on this
                    </>
                  )}
                </button>
              </>
            )}

            <button
              type="button"
              onClick={handleArchive}
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-stone/25 py-3 text-charcoal font-medium text-sm transition-colors hover:border-stone/50 disabled:opacity-50"
            >
              <Archive size={15} />
              Archive
            </button>

            {showDeleteConfirm ? (
              <div className="rounded-xl border border-red-200 p-3 bg-red-50">
                <p className="text-sm text-charcoal mb-2 text-center">
                  Delete this item? This cannot be undone.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 rounded-lg border border-stone/25 py-2 text-sm text-charcoal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isPending}
                    className="flex-1 rounded-lg bg-red-500 py-2 text-sm text-white font-medium disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-stone text-sm hover:text-red-500 transition-colors"
              >
                <Trash2 size={14} />
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-stone/8 px-3 py-2">
      <p className="text-xs text-stone mb-0.5">{label}</p>
      <p className="text-sm font-medium text-charcoal capitalize">{value}</p>
    </div>
  );
}
