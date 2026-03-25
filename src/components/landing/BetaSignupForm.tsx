"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

type State = "idle" | "loading" | "success" | "error";

export function BetaSignupForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading" || state === "success") return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setState("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong. Try again?");
        setState("error");
      }
    } catch {
      setErrorMsg("We're having trouble connecting. Try again in a moment.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 text-achievement">
        <CheckCircle size={20} className="shrink-0" />
        <p className="text-base">
          You&apos;re on the list.{" "}
          <span className="text-stone">We&apos;ll reach out when we launch.</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex gap-2 ${
          variant === "hero" ? "flex-col sm:flex-row" : "flex-row"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-[var(--radius-btn)] border border-border bg-white text-charcoal placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition-colors text-base"
          aria-label="Email address"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading" || !email}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber text-white rounded-[var(--radius-btn)] font-medium hover:bg-terracotta active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {state === "loading" ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Join the waitlist
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-2 text-sm text-red-500">{errorMsg}</p>
      )}
      <p className="mt-2 text-xs text-stone-light">
        No spam. Just a heads up when it&apos;s ready.
      </p>
    </form>
  );
}
