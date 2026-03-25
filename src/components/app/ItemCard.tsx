"use client";

import Image from "next/image";
import {
  Compass, Flame, Eye, Mountain, RefreshCw, Link, Sparkles, Clock,
} from "lucide-react";
import type { BucketListItem } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";

function getAgeYears(createdAt: Date | string): number {
  return (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
}

function agingLabel(years: number): string {
  if (years >= 2) return `${Math.floor(years)} yrs on your list`;
  return "1 yr on your list";
}

interface ItemCardProps {
  item: BucketListItem;
  onClick: (item: BucketListItem) => void;
}

// ─── Category colour tokens ───────────────────────────────────────────────────

const TYPE_COLORS: Record<string, string> = {
  travel:       "bg-category-travel/15 text-category-travel",
  skill:        "bg-category-skill/15 text-category-skill",
  experience:   "bg-category-experience/15 text-category-experience",
  achievement:  "bg-category-achievement/15 text-category-achievement",
  habit:        "bg-category-habit/15 text-category-habit",
  relationship: "bg-category-relationship/15 text-category-relationship",
  other:        "bg-stone/10 text-stone",
};

const TYPE_GRADIENT: Record<string, string> = {
  travel:       "from-[#7aafcf]/30 to-[#4a8aaf]/20",
  skill:        "from-[#d4a843]/30 to-[#a07a1e]/20",
  experience:   "from-[#d4708a]/30 to-[#a04060]/20",
  achievement:  "from-[#5b8c5a]/30 to-[#3a6339]/20",
  habit:        "from-[#9b8ec2]/30 to-[#6b5ea2]/20",
  relationship: "from-[#e07b6c]/30 to-[#b0503e]/20",
  other:        "from-stone/15 to-stone/8",
};

const TYPE_ICON_COLOR: Record<string, string> = {
  travel:       "text-[#7aafcf]/50",
  skill:        "text-[#d4a843]/50",
  experience:   "text-[#d4708a]/50",
  achievement:  "text-[#5b8c5a]/50",
  habit:        "text-[#9b8ec2]/50",
  relationship: "text-[#e07b6c]/50",
  other:        "text-stone/30",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TYPE_ICON: Record<string, React.ComponentType<any>> = {
  travel:       Compass,
  skill:        Flame,
  experience:   Eye,
  achievement:  Mountain,
  habit:        RefreshCw,
  relationship: Link,
  other:        Sparkles,
};

// ─── Doability colour — changes with score ───────────────────────────────────

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

// ─── Priority config — text pill replaces ambiguous stars ────────────────────

const PRIORITY_PILL = {
  1: { label: "Maybe",    light: "bg-stone/20 text-stone",              dark: "bg-black/25 text-white/70" },
  2: { label: "Want to",  light: "bg-amber/20 text-amber",              dark: "bg-amber/80 text-white" },
  3: { label: "Must do",  light: "bg-terracotta/20 text-terracotta",    dark: "bg-terracotta/90 text-white" },
};

export function ItemCard({ item, onClick }: ItemCardProps) {
  const typeColor    = item.type ? TYPE_COLORS[item.type]    : "bg-stone/10 text-stone";
  const gradient     = item.type ? TYPE_GRADIENT[item.type]  : "from-stone/15 to-stone/8";
  const iconColor    = item.type ? TYPE_ICON_COLOR[item.type]: "text-stone/30";
  const IconComponent = item.type ? (TYPE_ICON[item.type] ?? Sparkles) : Sparkles;

  const hasPhoto  = Boolean(item.imageUrl);
  const isOngoing = item.status === "ongoing";
  const hasScore  = item.doabilityScore !== null && item.doabilityScore !== undefined;
  const ageYears  = getAgeYears(item.createdAt);
  const isAging   = ageYears >= 1;

  const priority = PRIORITY_PILL[item.priority as 1 | 2 | 3] ?? PRIORITY_PILL[2];

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={`w-full text-left rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] ${
        isOngoing ? "border-2 border-emerald-400/60" : "border border-stone/10"
      }`}
    >
      {/* ── Top banner: photo or category placeholder ───────────────────────── */}
      {hasPhoto ? (
        <div className="relative w-full h-32">
          <Image
            src={item.imageUrl!}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
            <p className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow">
              {item.title}
            </p>
          </div>
          {/* Priority pill */}
          <div className="absolute top-2.5 right-3">
            <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${priority.dark}`}>
              {priority.label}
            </span>
          </div>
          {/* Ongoing badge */}
          {isOngoing && (
            <div className="absolute top-2.5 left-3 flex items-center gap-1 bg-emerald-500/90 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white text-[10px] font-semibold tracking-wide">IN PROGRESS</span>
            </div>
          )}
        </div>
      ) : (
        <div className={`relative w-full h-20 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <IconComponent size={36} className={iconColor} strokeWidth={1.5} />
          {/* Priority pill */}
          <div className="absolute top-2 right-3">
            <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${priority.light}`}>
              {priority.label}
            </span>
          </div>
          {/* Ongoing badge */}
          {isOngoing && (
            <div className="absolute top-2 left-3 flex items-center gap-1 bg-emerald-500/90 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white text-[10px] font-semibold tracking-wide">IN PROGRESS</span>
            </div>
          )}
        </div>
      )}

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-3">
        {/* Title — only when no photo banner */}
        {!hasPhoto && (
          <p className="text-charcoal font-medium text-sm leading-snug line-clamp-2 mb-1.5">
            {item.title}
          </p>
        )}

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {item.type && (
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColor}`}>
              {CATEGORY_LABELS[item.type]}
            </span>
          )}
          {item.timeHorizon && (
            <span className="text-xs text-stone capitalize">
              {item.timeHorizon.replace("_", " ")}
            </span>
          )}
          {isAging && (
            <span className="flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium bg-stone/10 text-stone/70">
              <Clock size={9} className="shrink-0" />
              {agingLabel(ageYears)}
            </span>
          )}
        </div>

        {/* AI reasoning — always shown, max 2 lines */}
        {item.aiReasoning && (
          <p className="text-stone text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {item.aiReasoning}
          </p>
        )}

        {/* Doability — horizontal bar, colour reflects achievability */}
        {hasScore && (
          <div className="mt-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-stone/60 uppercase tracking-wider">Doability</span>
              <span className={`text-[11px] font-bold ${doabilityTextColor(item.doabilityScore!)}`}>
                {item.doabilityScore}
              </span>
            </div>
            <div className="h-1 bg-stone/15 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${doabilityGradient(item.doabilityScore!)} rounded-full`}
                style={{ width: `${item.doabilityScore}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
