"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, SlidersHorizontal, List, LayoutGrid } from "lucide-react";
import type { BucketListItem, ItemType } from "@/types";
import { ItemCard } from "@/components/app/ItemCard";
import { VisionBoardCard } from "@/components/app/VisionBoardCard";
import { NudgeCard } from "@/components/app/NudgeCard";
import { QuestionCard } from "@/components/app/QuestionCard";
import { SurpriseButton } from "@/components/app/SurpriseButton";
import { ItemDetailSheet } from "@/components/app/ItemDetailSheet";
import { CompletionSheet } from "@/components/app/CompletionSheet";
import { AddItemSheet } from "@/components/app/AddItemSheet";
import { SuggestionsSection } from "@/components/app/SuggestionsSection";

const FILTERS: { value: ItemType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "travel", label: "Travel" },
  { value: "skill", label: "Skill" },
  { value: "experience", label: "Experience" },
  { value: "achievement", label: "Achievement" },
  { value: "habit", label: "Habit" },
  { value: "relationship", label: "Relationship" },
  { value: "other", label: "Other" },
];

const SORT_OPTIONS = [
  { value: "doability", label: "Doability" },
  { value: "priority", label: "Priority" },
  { value: "created", label: "Newest" },
];

type ViewMode = "list" | "board";

export default function DashboardPage() {
  const [items, setItems] = useState<BucketListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<ItemType | "all">("all");
  const [sort, setSort] = useState("doability");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  // Sheets
  const [selectedItem, setSelectedItem] = useState<BucketListItem | null>(null);
  const [completingItem, setCompletingItem] = useState<BucketListItem | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      const params = new URLSearchParams({ sort });
      if (activeFilter !== "all") params.set("type", activeFilter);
      const res = await fetch(`/api/v1/items?${params}`);
      const json = await res.json();
      setItems(json.data ?? []);
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }, [sort, activeFilter]);

  useEffect(() => {
    setLoading(true);
    fetchItems();
  }, [fetchItems]);

  const allActiveItems = items;

  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-charcoal">My List</h1>
          <p className="text-stone text-sm">{items.length} dream{items.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-1.5 rounded-full bg-amber text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber/90 transition-colors"
        >
          <Plus size={15} />
          Add
        </button>
      </div>

      {/* AI Cards */}
      <div className="flex flex-col gap-3 mb-5">
        <NudgeCard items={allActiveItems} />
        <QuestionCard onAnswered={fetchItems} />
      </div>

      {/* Filter + Sort + View toggle bar */}
      <div className="mb-4 flex items-center gap-2">
        {/* Category filters */}
        <div className="flex-1 flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                activeFilter === f.value
                  ? "bg-charcoal text-white"
                  : "bg-white border border-stone/25 text-charcoal hover:border-stone/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* View toggle: list / board */}
        <div className="flex-shrink-0 flex items-center gap-1 rounded-full border border-stone/25 p-1">
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`flex items-center justify-center rounded-full p-1.5 transition-colors ${
              viewMode === "list" ? "bg-charcoal text-white" : "text-stone hover:text-charcoal"
            }`}
            aria-label="List view"
            title="List view"
          >
            <List size={13} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode("board")}
            className={`flex items-center justify-center rounded-full p-1.5 transition-colors ${
              viewMode === "board" ? "bg-charcoal text-white" : "text-stone hover:text-charcoal"
            }`}
            aria-label="Vision board"
            title="Vision board"
          >
            <LayoutGrid size={13} />
          </button>
        </div>

        {/* Sort */}
        <div className="relative flex-shrink-0">
          <button
            type="button"
            onClick={() => setShowSortMenu((v) => !v)}
            className={`flex items-center justify-center rounded-full border p-2 transition-colors ${
              showSortMenu
                ? "border-amber text-amber bg-amber/5"
                : "border-stone/25 text-stone hover:border-stone/50 hover:text-charcoal"
            }`}
            aria-label="Sort"
            title="Sort"
          >
            <SlidersHorizontal size={14} />
          </button>
          {showSortMenu && (
            <div className="absolute right-0 top-full mt-1 z-20 bg-white rounded-xl shadow-lg border border-stone/15 py-1 min-w-[120px]">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSort(opt.value);
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    sort === opt.value
                      ? "text-amber font-medium"
                      : "text-charcoal hover:bg-stone/8"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Surprise Me */}
      <div className="mb-4">
        <SurpriseButton
          items={allActiveItems}
          onView={(itemId) => {
            const item = items.find((i) => i.id === itemId);
            if (item) setSelectedItem(item);
          }}
        />
      </div>

      {/* Item list / Vision board */}
      {loading ? (
        <LoadingSkeleton viewMode={viewMode} />
      ) : items.length === 0 ? (
        <EmptyState onAdd={() => setShowAdd(true)} />
      ) : viewMode === "list" ? (
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onClick={setSelectedItem} />
          ))}
        </div>
      ) : (
        /* ── Vision Board ── */
        <div className="grid grid-cols-2 gap-2" style={{ gridAutoRows: "170px" }}>
          {items.map((item, i) => (
            <VisionBoardCard
              key={item.id}
              item={item}
              onClick={setSelectedItem}
              // Every 5th card (index 0, 5, 10…) is tall to break up the grid
              tall={i % 5 === 0}
            />
          ))}
        </div>
      )}

      {/* Suggestions — only in list mode to keep board clean */}
      {viewMode === "list" && <SuggestionsSection onAdded={fetchItems} />}

      <div className="pb-6" />

      {/* Sheets */}
      {selectedItem && (
        <ItemDetailSheet
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onUpdated={fetchItems}
          onOpenComplete={(item) => {
            setSelectedItem(null);
            setCompletingItem(item);
          }}
        />
      )}

      {completingItem && (
        <CompletionSheet
          item={completingItem}
          onClose={() => setCompletingItem(null)}
          onCompleted={fetchItems}
        />
      )}

      {showAdd && (
        <AddItemSheet
          onClose={() => setShowAdd(false)}
          onAdded={fetchItems}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Loading skeleton — adapts to view mode
// ─────────────────────────────────────────────

function LoadingSkeleton({ viewMode }: { viewMode: ViewMode }) {
  if (viewMode === "board") {
    return (
      <div className="grid grid-cols-2 gap-2" style={{ gridAutoRows: "170px" }}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className={`rounded-2xl bg-stone/15 animate-pulse ${n === 1 ? "row-span-2" : ""}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className="rounded-2xl bg-white border border-stone/10 overflow-hidden animate-pulse"
        >
          <div className="h-24 bg-stone/15" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-stone/20 rounded w-3/4" />
            <div className="h-3 bg-stone/10 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Empty state
// ─────────────────────────────────────────────

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <p className="text-4xl">✨</p>
      <div>
        <p className="font-semibold text-charcoal">Your list is empty</p>
        <p className="text-stone text-sm mt-1">
          What do you want to do before you die?
        </p>
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="rounded-full bg-amber text-white px-5 py-2.5 text-sm font-semibold"
      >
        Add your first dream
      </button>
    </div>
  );
}
