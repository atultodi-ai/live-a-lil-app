"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { X, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { BucketListItem } from "@/types";

interface CompletionSheetProps {
  item: BucketListItem;
  onClose: () => void;
  onCompleted: () => void;
}

// ── Confetti particle config ──────────────────────────────────────────────────
const CONFETTI_COLORS = [
  "#F59E0B", // amber
  "#EF4444", // red
  "#10B981", // emerald
  "#3B82F6", // blue
  "#8B5CF6", // violet
  "#F97316", // orange
  "#EC4899", // pink
  "#14B8A6", // teal
];

interface Particle {
  id: number;
  x: number;       // 0-100 vw %
  color: string;
  size: number;     // px
  duration: number; // ms
  delay: number;    // ms
  rotate: number;   // deg
  shape: "square" | "circle" | "rect";
}

function generateParticles(count = 60): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 6 + Math.random() * 8,
    duration: 1800 + Math.random() * 1400,
    delay: Math.random() * 800,
    rotate: Math.random() * 360,
    shape: (["square", "circle", "rect"] as const)[i % 3],
  }));
}

function CelebrationScreen({
  item,
  onDismiss,
}: {
  item: BucketListItem;
  onDismiss: () => void;
}) {
  const [particles] = useState(generateParticles);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Slight delay so the enter animation fires
    requestAnimationFrame(() => setVisible(true));
    timerRef.current = setTimeout(onDismiss, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [onDismiss]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
      onClick={onDismiss}
    >
      {/* Confetti */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${p.x}%`,
            width: p.shape === "rect" ? p.size * 2 : p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "2px" : "1px",
            transform: `rotate(${p.rotate}deg)`,
            animation: `confettiFall ${p.duration}ms ${p.delay}ms ease-in forwards`,
            opacity: 0.9,
          }}
        />
      ))}

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-5 px-8 text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {/* Checkmark ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-emerald-500/20 animate-ping absolute" />
          <div className="w-20 h-20 rounded-full bg-emerald-500/30 flex items-center justify-center relative">
            <CheckCircle size={44} className="text-emerald-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <div>
          <p className="text-5xl mb-2">🎉</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">You did it!</h2>
          <p className="text-white/60 text-sm mt-1">One dream checked off.</p>
        </div>

        {/* Item card */}
        <div className="w-full max-w-xs rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/15">
          {item.imageUrl && (
            <div className="relative h-32 w-full">
              <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
          <div className="px-4 py-3">
            <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
          </div>
        </div>

        <p className="text-white/40 text-xs">Tap anywhere to continue</p>
      </div>

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(var(--r, 0deg)); opacity: 1; }
          100% { transform: translateY(110vh) rotate(calc(var(--r, 0deg) + 720deg)); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ── Main sheet ────────────────────────────────────────────────────────────────

export function CompletionSheet({ item, onClose, onCompleted }: CompletionSheetProps) {
  const [note, setNote] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [celebrating, setCelebrating] = useState(false);

  const MAX_CHARS = 280;

  function handleComplete() {
    startTransition(async () => {
      try {
        const res = await fetch(`/api/v1/items/${item.id}/complete`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            completionNote: note.trim() || undefined,
          }),
        });
        const json = await res.json();
        if (!res.ok || json.error) {
          setError(json.error ?? "Something went wrong.");
          return;
        }
        setCelebrating(true);
        onCompleted();
      } catch {
        setError("Network error. Please try again.");
      }
    });
  }

  function handleDismissCelebration() {
    setCelebrating(false);
    onClose();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white shadow-2xl animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-stone/25" />
        </div>

        <div className="px-6 pt-2 pb-10">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={18} className="text-amber" />
                <span className="text-sm font-semibold text-charcoal">
                  Mark as done
                </span>
              </div>
              <p className="text-stone text-sm">{item.title}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-stone hover:text-charcoal p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Completion note */}
          <div className="mb-5">
            <label className="block text-xs font-semibold uppercase tracking-widest text-stone mb-2">
              How did it feel? <span className="font-normal normal-case">(optional)</span>
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value.slice(0, MAX_CHARS))}
              placeholder="A few words about the experience..."
              rows={4}
              className="w-full rounded-xl border border-stone/25 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber resize-none"
            />
            <p className="text-right text-xs text-stone/60 mt-1">
              {note.length}/{MAX_CHARS}
            </p>
          </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="button"
            onClick={handleComplete}
            disabled={isPending}
            className="w-full bg-amber hover:bg-amber/90 text-white font-semibold rounded-xl py-4 text-base transition-opacity disabled:opacity-60"
          >
            {isPending ? "Saving…" : "✓ Done — it happened!"}
          </button>
        </div>
      </div>

      {/* Celebration overlay */}
      {celebrating && (
        <CelebrationScreen item={item} onDismiss={handleDismissCelebration} />
      )}
    </>
  );
}
