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

interface VisionBoardCardProps {
  item: BucketListItem;
  onClick: (item: BucketListItem) => void;
  /** tall = spans 2 grid rows; normal = 1 row */
  tall?: boolean;
}

const TYPE_GRADIENT: Record<string, string> = {
  travel:       "from-[#4a8aaf] to-[#2a5a7f]",
  skill:        "from-[#a07a1e] to-[#7a5a0e]",
  experience:   "from-[#a04060] to-[#702040]",
  achievement:  "from-[#3a6339] to-[#1a4319]",
  habit:        "from-[#6b5ea2] to-[#4b3e82]",
  relationship: "from-[#b0503e] to-[#80301e]",
  other:        "from-stone to-stone/70",
};

const TYPE_ICON_COLOR: Record<string, string> = {
  travel:       "text-[#7aafcf]/70",
  skill:        "text-[#d4a843]/70",
  experience:   "text-[#d4708a]/70",
  achievement:  "text-[#5b8c5a]/70",
  habit:        "text-[#9b8ec2]/70",
  relationship: "text-[#e07b6c]/70",
  other:        "text-white/40",
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

const TYPE_ACCENT: Record<string, string> = {
  travel:       "bg-category-travel/80 text-white",
  skill:        "bg-category-skill/80 text-white",
  experience:   "bg-category-experience/80 text-white",
  achievement:  "bg-category-achievement/80 text-white",
  habit:        "bg-category-habit/80 text-white",
  relationship: "bg-category-relationship/80 text-white",
  other:        "bg-stone/60 text-white",
};

function doabilityBar(score: number): { track: string; fill: string } {
  if (score >= 70) return { track: "bg-white/20", fill: "bg-emerald-400" };
  if (score >= 40) return { track: "bg-white/20", fill: "bg-amber" };
  return { track: "bg-white/20", fill: "bg-rose-400" };
}

export function VisionBoardCard({ item, onClick, tall = false }: VisionBoardCardProps) {
  const hasPhoto    = Boolean(item.imageUrl);
  const isOngoing   = item.status === "ongoing";
  const hasScore    = item.doabilityScore !== null && item.doabilityScore !== undefined;
  const isAging     = getAgeYears(item.createdAt) >= 1;

  const gradient    = item.type ? TYPE_GRADIENT[item.type]   : "from-stone to-stone/70";
  const iconColor   = item.type ? TYPE_ICON_COLOR[item.type] : "text-white/40";
  const IconCmp     = item.type ? (TYPE_ICON[item.type] ?? Sparkles) : Sparkles;
  const typeAccent  = item.type ? (TYPE_ACCENT[item.type] ?? "bg-stone/60 text-white") : "bg-stone/60 text-white";
  const barColors   = hasScore ? doabilityBar(item.doabilityScore!) : null;

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={`relative w-full h-full overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] focus:outline-none ${
        tall ? "row-span-2" : ""
      } ${isOngoing ? "ring-2 ring-emerald-400/70 ring-offset-1" : ""}`}
    >
      {/* ── Background: photo or gradient ────────────────────────────────── */}
      {hasPhoto ? (
        <Image
          src={item.imageUrl!}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 512px) 50vw, 256px"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <IconCmp size={52} className={iconColor} strokeWidth={1} />
        </div>
      )}

      {/* ── Gradient overlay from bottom ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* ── Ongoing indicator ────────────────────────────────────────────── */}
      {isOngoing && (
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-emerald-500/90 rounded-full px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white text-[9px] font-semibold tracking-wide">LIVE</span>
        </div>
      )}

      {/* ── Aging indicator ──────────────────────────────────────────────── */}
      {isAging && !isOngoing && (
        <div className="absolute top-2.5 right-2.5 flex items-center justify-center w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm">
          <Clock size={11} className="text-white/70" />
        </div>
      )}

      {/* ── Bottom content ───────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6">
        {/* Type badge */}
        {item.type && (
          <span className={`inline-block rounded-full px-1.5 py-0.5 text-[9px] font-semibold mb-1 ${typeAccent}`}>
            {CATEGORY_LABELS[item.type]}
          </span>
        )}

        {/* Title */}
        <p className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow-sm">
          {item.title}
        </p>

        {/* Doability bar — thin strip at very bottom */}
        {hasScore && barColors && (
          <div className={`mt-2 h-0.5 rounded-full overflow-hidden ${barColors.track}`}>
            <div
              className={`h-full rounded-full ${barColors.fill}`}
              style={{ width: `${item.doabilityScore}%` }}
            />
          </div>
        )}
      </div>
    </button>
  );
}
