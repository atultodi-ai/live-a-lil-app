import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Flame,
  Eye,
  Mountain,
  ArrowRight,
  Sparkles,
  Brain,
  CalendarCheck,
  MapPin,
  Star,
} from "lucide-react";
import { SummersCalculator } from "@/components/landing/SummersCalculator";

export const metadata: Metadata = {
  title: "Live A Little — Your life, experienced",
  description:
    "An AI companion that helps you prioritize the experiences that matter most. Build your bucket list, get personalised nudges, and start living.",
  openGraph: {
    title: "Live A Little — Your life, experienced",
    description: "Build your bucket list. Get AI nudges. Start living.",
    type: "website",
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const steps = [
  {
    icon: <Compass size={22} className="text-travel" />,
    number: "01",
    title: "Tell us about you",
    body: "Your age, where you are, what your life looks like right now. Two minutes. That's all it takes.",
  },
  {
    icon: <Flame size={22} className="text-skill" />,
    number: "02",
    title: "Build your list",
    body: "Pick from hundreds of curated experiences or add your own. There's no wrong answer — just what you actually want.",
  },
  {
    icon: <Eye size={22} className="text-experience" />,
    number: "03",
    title: "The AI learns your life",
    body: "As your situation changes — finances, health, seasons, energy — your list reorders itself around what's achievable right now.",
  },
  {
    icon: <Mountain size={22} className="text-achievement" />,
    number: "04",
    title: "Start living",
    body: "Not someday. Not when things settle down. The app shows you what's possible today, this weekend, this season.",
  },
];

const features = [
  {
    icon: <Brain size={20} className="text-amber" />,
    title: "AI that knows your life",
    body: "Not generic advice. Your doability scores and nudges are built around your actual situation — location, budget, time, energy.",
  },
  {
    icon: <CalendarCheck size={20} className="text-achievement" />,
    title: "Surprise Me",
    body: "One tap picks 3 dreams from your list and pitches you why today, this week, or this month is the time to do them.",
  },
  {
    icon: <MapPin size={20} className="text-experience" />,
    title: "Vision Board",
    body: "Switch to board view and see your dreams as a visual grid of photos and colours. Inspiration, not a chore list.",
  },
  {
    icon: <Star size={20} className="text-skill" />,
    title: "Celebrate completions",
    body: "When you mark something done, the app celebrates it. A full-screen moment that makes the whole effort feel real.",
  },
];

const manifestoLines = [
  "You only know about this life.",
  "Not a past one, not the one you're saving yourself for.",
  "This one. The one where Tuesday is happening.",
  "The one where the seasons keep changing whether you notice or not.",
  "Stop preparing for the next life. Experience this one.",
  "Encourage others to do the same.",
];

// ─────────────────────────────────────────────
// MOCK APP PREVIEW — pure CSS, no images needed
// ─────────────────────────────────────────────

const mockItems = [
  { label: "Northern Lights in Iceland", type: "travel", score: 82, color: "bg-[#4a8aaf]" },
  { label: "Learn to make sourdough", type: "skill", score: 94, color: "bg-[#d4a843]" },
  { label: "Watch a sunrise alone", type: "experience", score: 97, color: "bg-[#d4708a]" },
  { label: "Run a 10k", type: "achievement", score: 76, color: "bg-[#5b8c5a]" },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-56 select-none" aria-hidden="true">
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] bg-charcoal border-4 border-charcoal shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-charcoal rounded-b-xl z-10" />

        {/* Screen content */}
        <div className="bg-[#faf7f2] px-3 pt-7 pb-4 min-h-[420px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[11px] font-bold text-charcoal">My List</p>
              <p className="text-[8px] text-stone/70">4 dreams</p>
            </div>
            <div className="w-14 h-5 rounded-full bg-amber flex items-center justify-center">
              <span className="text-white text-[7px] font-semibold">+ Add</span>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-1.5">
            {mockItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white border border-stone/10 overflow-hidden shadow-sm"
              >
                <div className={`h-8 w-full ${item.color} opacity-30`} />
                <div className="px-2 py-1.5">
                  <p className="text-[8px] font-medium text-charcoal leading-tight line-clamp-1">
                    {item.label}
                  </p>
                  <div className="mt-1 h-0.5 bg-stone/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-4 flex justify-around">
            {["List", "Journey", "Settings"].map((tab) => (
              <div key={tab} className="flex flex-col items-center gap-0.5">
                <div className={`w-4 h-1 rounded-full ${tab === "List" ? "bg-amber" : "bg-stone/25"}`} />
                <p className={`text-[7px] ${tab === "List" ? "text-amber font-semibold" : "text-stone/50"}`}>
                  {tab}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-amber/15 blur-3xl" />
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-white">

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-warm-white/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <span className="font-serif text-xl text-charcoal">Live A Little</span>
          <Link
            href="/auth/signin"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber text-white rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
          >
            Get started <ArrowRight size={13} />
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">

        {/* Background blobs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 right-[8%] w-80 h-80 rounded-full bg-amber/8 blur-3xl" />
          <div className="absolute bottom-0 left-[5%] w-96 h-96 rounded-full bg-terracotta/6 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-experience/6 blur-3xl" />
        </div>

        {/* Timeline heartbeat */}
        <div aria-hidden="true" className="absolute top-28 left-0 right-0 flex items-center justify-center opacity-20">
          <div className="relative w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-amber to-transparent timeline-moving">
            {[20, 35, 52, 68, 80].map((pos) => (
              <div
                key={pos}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/10 text-amber text-sm font-medium mb-8">
                <Sparkles size={14} />
                Free to use
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight mb-6">
                You only have{" "}
                <em className="not-italic text-amber">one</em>{" "}
                life.
                <br />
                <span className="text-stone">Are you living it?</span>
              </h1>

              <p className="text-lg text-stone leading-relaxed mb-10 max-w-md">
                Live A Little is a personal companion that learns your life
                situation and helps you prioritize the experiences that matter
                — before time makes the decision for you.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white rounded-[var(--radius-btn)] font-medium text-base hover:bg-terracotta active:scale-95 transition-all duration-200 shadow-sm"
                >
                  Begin your list
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 text-charcoal hover:text-amber transition-colors text-base font-medium"
                >
                  See your summers ↓
                </a>
              </div>
            </div>

            {/* Right — app preview */}
            <div className="hidden md:flex justify-center">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </section>

      {/* ── MANIFESTO ───────────────────────────────── */}
      <section className="py-24 px-5 bg-charcoal text-warm-white">
        <div className="max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-stone-light mb-10">
            What we believe
          </p>

          <div className="space-y-5">
            {manifestoLines.map((line, i) => (
              <p
                key={i}
                className={`font-serif leading-snug ${
                  i === 0
                    ? "text-3xl md:text-4xl text-warm-white"
                    : i === manifestoLines.length - 2
                    ? "text-2xl md:text-3xl text-amber"
                    : "text-xl md:text-2xl text-stone-light"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-stone/20">
            <p className="text-stone-light text-base leading-relaxed max-w-xl">
              This is not another bucket list app. It&apos;s not a todo list.
              It&apos;s not a productivity tool. It is a companion for being alive —
              one that learns who you are and gently, honestly, helps you spend your
              finite time on what matters to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUMMERS CALCULATOR ──────────────────────── */}
      <section id="calculator" className="py-28 px-5">
        <div className="max-w-2xl mx-auto text-center">

          <p className="text-sm uppercase tracking-widest text-stone mb-4">
            The number that changes things
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
            How many summers do you have left?
          </h2>

          <p className="text-stone text-lg mb-14 max-w-md mx-auto">
            Not to make you anxious. To make you present.
            Enter your age and just sit with the number for a moment.
          </p>

          <SummersCalculator />

          <p className="mt-14 text-stone max-w-sm mx-auto text-base leading-relaxed">
            The point isn&apos;t to count down. It&apos;s to count{" "}
            <em className="text-charcoal not-italic font-medium">up</em> —
            to start filling those summers with things that actually matter to you.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section className="py-24 px-5 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-stone mb-3">
              How it works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Built around your life,
              <br />
              <span className="text-stone">not around a feature list.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 p-6 rounded-[var(--radius-card)] border border-border hover:border-amber/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-stone-light font-mono">{step.number}</span>
                    <h3 className="text-base font-semibold text-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-stone text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────── */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-stone mb-3">
              What's inside
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Not just a list.
              <br />
              <span className="text-amber">A whole companion.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-6 rounded-[var(--radius-card)] bg-white border border-border hover:shadow-sm transition-shadow"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-warm-white flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-charcoal mb-1">{f.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────── */}
      <section className="py-20 px-5 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-charcoal leading-snug mb-4">
            &ldquo;It made me realize I&apos;d been waiting for my life to
            start, when it already had.&rdquo;
          </p>
          <p className="text-stone text-sm">— Early user, 42, London</p>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-28 px-5 bg-charcoal">
        <div className="max-w-xl mx-auto text-center">

          <h2 className="font-serif text-4xl md:text-5xl text-warm-white leading-tight mb-4">
            Your life is waiting.
            <br />
            <span className="text-amber">Stop scrolling.</span>
          </h2>

          <p className="text-stone-light text-lg mb-10 leading-relaxed">
            It takes two minutes to start. Sign in with Google or your email —
            no credit card, no subscription, no excuses.
          </p>

          <Link
            href="/auth/signin"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber text-white rounded-full font-semibold text-lg hover:bg-terracotta active:scale-95 transition-all duration-200 shadow-lg"
          >
            Begin your list
            <ArrowRight size={20} />
          </Link>

          <p className="mt-6 text-stone text-sm">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-amber hover:text-warm-white transition-colors underline underline-offset-2">
              Sign in
            </Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="py-10 px-5 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone">
          <span className="font-serif text-base text-charcoal">Live A Little</span>
          <p className="text-stone-light text-xs text-center">
            You only know about this life. Make it count.
          </p>
          <p className="text-stone-light text-xs">
            Made with intention.
          </p>
        </div>
      </footer>

    </div>
  );
}
