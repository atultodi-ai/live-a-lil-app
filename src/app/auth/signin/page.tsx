"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { ArrowRight, Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");
    await signIn("resend", { email, callbackUrl: "/dashboard", redirect: false });
    setState("sent");
  };

  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  if (state === "sent") {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center px-5">
        <div className="max-w-sm w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-amber/15 flex items-center justify-center mx-auto">
            <Mail size={24} className="text-amber" />
          </div>
          <h1 className="font-serif text-2xl text-charcoal">Check your inbox</h1>
          <p className="text-stone">
            We sent a sign-in link to <strong className="text-charcoal">{email}</strong>.
            Click it to continue — it expires in 15 minutes.
          </p>
          <p className="text-sm text-stone-light">
            No email?{" "}
            <button
              onClick={() => setState("idle")}
              className="text-amber underline underline-offset-2 hover:text-terracotta"
            >
              Try again
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-5">
      <div className="max-w-sm w-full space-y-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-2">Live A Little</h1>
          <p className="text-stone">Sign in to continue your journey</p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-white border border-border rounded-[var(--radius-btn)] text-charcoal font-medium hover:bg-warm-white hover:border-stone-light active:scale-98 transition-all duration-150"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.826.957 4.039l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-stone-light">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Magic link */}
        <form onSubmit={handleMagicLink} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-border rounded-[var(--radius-btn)] text-charcoal placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber bg-white transition-colors"
          />
          <button
            type="submit"
            disabled={!email || state === "loading"}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-amber text-white rounded-[var(--radius-btn)] font-medium hover:bg-terracotta active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
          >
            {state === "loading" ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Send sign-in link
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-stone-light leading-relaxed">
          By signing in you agree to our{" "}
          <a href="/terms" className="underline hover:text-stone">Terms</a> and{" "}
          <a href="/privacy" className="underline hover:text-stone">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
