"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  value: 1 | 2 | 3;
  onChange?: (value: 1 | 2 | 3) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}

const labels: Record<1 | 2 | 3, string> = {
  1: "Maybe",
  2: "Want to do",
  3: "Must do",
};

export function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: StarRatingProps) {
  const starSize = size === "sm" ? 14 : 18;

  const handleClick = (rating: 1 | 2 | 3) => {
    if (readonly || !onChange) return;
    // Cycle: 1→2→3→1
    const next = value === rating ? (rating === 3 ? 1 : ((rating + 1) as 1 | 2 | 3)) : rating;
    onChange(next);
  };

  return (
    <div
      className="flex items-center gap-0.5"
      role={readonly ? "img" : "radiogroup"}
      aria-label={`Priority: ${labels[value]}`}
      title={labels[value]}
    >
      {([1, 2, 3] as const).map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          disabled={readonly}
          className={[
            "transition-all duration-150",
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber rounded",
            "disabled:pointer-events-none",
          ].join(" ")}
          aria-label={`Set priority to ${labels[star as 1 | 2 | 3]}`}
        >
          <Star
            size={starSize}
            className={
              star <= value
                ? "fill-amber stroke-amber"
                : "fill-transparent stroke-stone-light"
            }
          />
        </button>
      ))}
    </div>
  );
}
