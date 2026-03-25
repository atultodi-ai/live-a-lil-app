import type { ItemType } from "@/types";
import type { ReactNode } from "react";

type BadgeVariant = ItemType | "default" | "muted";

const variantClasses: Record<BadgeVariant, string> = {
  travel: "bg-[#7aafcf]/15 text-[#4a8aaf]",
  skill: "bg-[#d4a843]/15 text-[#a07a1e]",
  experience: "bg-[#d4708a]/15 text-[#a04060]",
  achievement: "bg-[#5b8c5a]/15 text-[#3a6339]",
  habit: "bg-[#9b8ec2]/15 text-[#6b5ea2]",
  relationship: "bg-[#e07b6c]/15 text-[#b0503e]",
  other: "bg-stone/10 text-stone",
  default: "bg-warm-white text-stone border border-border",
  muted: "bg-warm-white text-stone",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1",
        "px-2.5 py-0.5 rounded-full",
        "text-xs font-medium uppercase tracking-wide",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
