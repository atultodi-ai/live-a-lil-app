"use client";

import { useEffect, useRef, useState } from "react";
import {
  LogOut, ChevronRight, BarChart2, Pencil, Check, X,
  MapPin, ChevronDown, ChevronUp,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import type { SKG, BucketListItemCounts, AIQuestion } from "@/types";
import { summersDisplay } from "@/lib/utils";

interface UserProfile {
  id: string;
  name: string | null;
  image: string | null;
  email: string | null;
}

export default function SettingsPage() {
  const [skg, setSkg] = useState<SKG | null>(null);
  const [counts, setCounts] = useState<BucketListItemCounts | null>(null);
  const [completeness, setCompleteness] = useState<number>(0);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Name edit
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [savingName, setSavingName] = useState(false);

  // Profile completeness expansion
  const [questionsOpen, setQuestionsOpen] = useState(false);
  const [question, setQuestion] = useState<AIQuestion | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [savingAnswer, setSavingAnswer] = useState(false);
  const [questionsDone, setQuestionsDone] = useState(false);

  // Location modal
  const [locationOpen, setLocationOpen] = useState(false);
  const [cityInput, setCityInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [savingLocation, setSavingLocation] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/v1/situation").then((r) => r.json()),
      fetch("/api/v1/items/count").then((r) => r.json()),
      fetch("/api/v1/situation/completeness").then((r) => r.json()),
      fetch("/api/v1/user/profile").then((r) => r.json()),
    ])
      .then(([skgJson, countsJson, compJson, profileJson]) => {
        setSkg(skgJson.data ?? null);
        setCounts(countsJson.data ?? null);
        setCompleteness(compJson.data?.score ?? 0);
        const p = profileJson.data ?? null;
        setProfile(p);
        if (p?.name) setNameInput(p.name);
      })
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  const summers = skg ? Math.max(0, 100 - skg.core.age) : null;

  // ── Name editing ────────────────────────────────────────────────────────────

  function startEditName() {
    setNameInput(profile?.name ?? "");
    setEditingName(true);
    setTimeout(() => nameRef.current?.focus(), 50);
  }

  async function saveName() {
    if (!nameInput.trim() || savingName) return;
    setSavingName(true);
    try {
      const res = await fetch("/api/v1/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameInput.trim() }),
      });
      const json = await res.json();
      if (res.ok) {
        setProfile((p) => p ? { ...p, name: json.data.name } : p);
        setEditingName(false);
      }
    } catch { /* silent */ }
    finally { setSavingName(false); }
  }

  // ── Profile completeness questions ──────────────────────────────────────────

  async function openQuestions() {
    if (questionsOpen) {
      setQuestionsOpen(false);
      return;
    }
    setQuestionsOpen(true);
    if (question || questionsDone) return;
    setQuestionLoading(true);
    try {
      const json = await fetch("/api/v1/ai/next-question").then((r) => r.json());
      setQuestion(json.data ?? null);
      if (!json.data) setQuestionsDone(true);
    } catch { /* silent */ }
    finally { setQuestionLoading(false); }
  }

  async function handleAnswer(value: string) {
    if (!question || savingAnswer) return;
    setSavingAnswer(true);
    try {
      await fetch("/api/v1/situation/progressive", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [question.field_key]: value }),
      });
      // Refresh completeness
      const comp = await fetch("/api/v1/situation/completeness").then((r) => r.json());
      setCompleteness(comp.data?.score ?? completeness);
      // Load next question
      setQuestion(null);
      setQuestionLoading(true);
      const next = await fetch("/api/v1/ai/next-question").then((r) => r.json());
      setQuestion(next.data ?? null);
      if (!next.data) setQuestionsDone(true);
    } catch { /* silent */ }
    finally { setSavingAnswer(false); setQuestionLoading(false); }
  }

  // ── Location update ──────────────────────────────────────────────────────────

  function openLocation() {
    setCityInput(skg?.core.city ?? "");
    setCountryInput(skg?.core.country ?? "");
    setLocationOpen(true);
  }

  async function saveLocation() {
    if (!cityInput.trim() || !countryInput.trim() || savingLocation) return;
    setSavingLocation(true);
    try {
      const res = await fetch("/api/v1/situation/core", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: cityInput.trim(), country: countryInput.trim() }),
      });
      const json = await res.json();
      if (res.ok) {
        setSkg(json.data ?? skg);
        setLocationOpen(false);
      }
    } catch { /* silent */ }
    finally { setSavingLocation(false); }
  }

  // ── Avatar helpers ───────────────────────────────────────────────────────────

  const displayName = profile?.name ?? profile?.email?.split("@")[0] ?? "You";
  const initials = displayName
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-10">
      <h1 className="text-2xl font-bold text-charcoal mb-6">Me</h1>

      {/* ── Profile card ── */}
      {loading ? (
        <div className="rounded-2xl bg-white border border-stone/10 p-5 animate-pulse mb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-stone/20" />
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-stone/20 rounded w-1/3" />
              <div className="h-4 bg-stone/10 rounded w-2/3" />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-gradient-to-br from-amber/10 to-terracotta/5 border border-amber/20 p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-amber/20 flex items-center justify-center">
              {profile?.image ? (
                <Image
                  src={profile.image}
                  alt={displayName}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-amber font-bold text-lg select-none">{initials}</span>
              )}
            </div>

            {/* Name + location */}
            <div className="flex-1 min-w-0">
              {editingName ? (
                <div className="flex items-center gap-1.5">
                  <input
                    ref={nameRef}
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveName();
                      if (e.key === "Escape") setEditingName(false);
                    }}
                    className="flex-1 min-w-0 text-base font-semibold text-charcoal bg-white/70 rounded-lg px-2 py-0.5 border border-amber/40 outline-none focus:border-amber"
                    placeholder="Your name"
                  />
                  <button
                    type="button"
                    onClick={saveName}
                    disabled={savingName}
                    className="text-amber hover:text-amber/80 disabled:opacity-40"
                    aria-label="Save name"
                  >
                    <Check size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingName(false)}
                    className="text-stone hover:text-charcoal"
                    aria-label="Cancel"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-charcoal truncate">{displayName}</p>
                  <button
                    type="button"
                    onClick={startEditName}
                    className="text-stone/50 hover:text-amber transition-colors flex-shrink-0"
                    aria-label="Edit name"
                  >
                    <Pencil size={13} />
                  </button>
                </div>
              )}
              {skg?.core.city && (
                <p className="text-stone text-sm truncate">
                  {skg.core.city}, {skg.core.country} · Age {skg.core.age}
                </p>
              )}
            </div>
          </div>

          {/* Summers remaining */}
          {summers !== null && (
            <div className="mb-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-charcoal">Summers remaining</span>
                <span className="text-xl font-bold text-amber">{summers}</span>
              </div>
              <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber to-terracotta rounded-full"
                  style={{ width: `${(skg!.core.age / 100) * 100}%` }}
                />
              </div>
              <p className="text-xs text-stone mt-1">{summersDisplay(skg!.core.age)}</p>
            </div>
          )}
        </div>
      )}

      {/* ── Stats ── */}
      {counts && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          <StatCard label="Active" value={counts.active} />
          <StatCard label="Done" value={counts.done} />
          <StatCard label="Archived" value={counts.archived} />
        </div>
      )}

      {/* ── Profile completeness (clickable) ── */}
      <div className="rounded-2xl bg-white border border-stone/10 mb-4 overflow-hidden">
        <button
          type="button"
          onClick={openQuestions}
          className="w-full text-left p-4 hover:bg-stone/5 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 size={15} className="text-stone" />
            <span className="text-sm font-medium text-charcoal">Profile completeness</span>
            <span className="ml-auto text-sm font-bold text-amber">
              {Math.round(completeness * 100)}%
            </span>
            {questionsOpen ? (
              <ChevronUp size={14} className="text-stone/50" />
            ) : (
              <ChevronDown size={14} className="text-stone/50" />
            )}
          </div>
          <div className="h-1.5 bg-stone/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber rounded-full transition-all duration-500"
              style={{ width: `${completeness * 100}%` }}
            />
          </div>
          <p className="text-xs text-stone mt-1.5">
            {completeness >= 1
              ? "Profile complete! AI has full context."
              : "Answer more questions to get better AI recommendations."}
          </p>
        </button>

        {/* Inline question panel */}
        {questionsOpen && (
          <div className="border-t border-stone/10 p-4">
            {questionLoading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-stone/15 rounded w-3/4" />
                <div className="flex gap-2 mt-3">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-8 w-20 bg-stone/10 rounded-full" />
                  ))}
                </div>
              </div>
            ) : questionsDone || !question ? (
              <p className="text-sm text-stone text-center py-2">
                {completeness >= 1
                  ? "All done! Your profile is complete."
                  : "No more questions right now. Check back later."}
              </p>
            ) : (
              <div>
                <p className="text-sm font-medium text-charcoal mb-3">{question.question_text}</p>
                {question.options && (
                  <div className="flex flex-wrap gap-2">
                    {question.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleAnswer(opt.value)}
                        disabled={savingAnswer}
                        className="rounded-full border border-stone/30 px-3 py-1.5 text-sm font-medium text-charcoal hover:border-amber hover:text-amber transition-colors disabled:opacity-50"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Settings sections ── */}
      <div className="flex flex-col gap-2">
        <SettingsSection>
          <button
            type="button"
            onClick={openLocation}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone/5 transition-colors"
          >
            <span className="text-base">🌍</span>
            <span className="flex-1 text-sm text-charcoal text-left">Update location</span>
            <ChevronRight size={14} className="text-stone/50" />
          </button>
          <a
            href="/api/v1/situation/export"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-stone/5 transition-colors"
          >
            <span className="text-base">📥</span>
            <span className="flex-1 text-sm text-charcoal">Export my data</span>
            <ChevronRight size={14} className="text-stone/50" />
          </a>
        </SettingsSection>

        <SettingsSection>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition-colors rounded-2xl"
          >
            <LogOut size={16} />
            <span className="text-sm font-medium">Sign out</span>
          </button>
        </SettingsSection>
      </div>

      <p className="text-center text-xs text-stone/50 mt-8">
        Live a Lil — Your list. Your summers.
      </p>

      {/* ── Location modal ── */}
      {locationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setLocationOpen(false); }}
        >
          <div className="w-full max-w-lg bg-white rounded-t-3xl p-6 pb-8 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber" />
                <h2 className="text-base font-semibold text-charcoal">Update location</h2>
              </div>
              <button
                type="button"
                onClick={() => setLocationOpen(false)}
                className="text-stone hover:text-charcoal"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <div>
                <label className="text-xs font-medium text-stone uppercase tracking-wider mb-1 block">City</label>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="e.g. Berlin"
                  className="w-full rounded-xl border border-stone/20 px-4 py-2.5 text-sm text-charcoal outline-none focus:border-amber transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-stone uppercase tracking-wider mb-1 block">Country</label>
                <input
                  type="text"
                  value={countryInput}
                  onChange={(e) => setCountryInput(e.target.value)}
                  placeholder="e.g. Germany"
                  className="w-full rounded-xl border border-stone/20 px-4 py-2.5 text-sm text-charcoal outline-none focus:border-amber transition-colors"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={saveLocation}
              disabled={savingLocation || !cityInput.trim() || !countryInput.trim()}
              className="w-full rounded-full bg-amber text-white font-semibold py-3 text-sm hover:bg-amber/90 transition-colors disabled:opacity-50"
            >
              {savingLocation ? "Saving…" : "Save location"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-white border border-stone/10 p-3 text-center">
      <p className="text-2xl font-bold text-charcoal">{value}</p>
      <p className="text-xs text-stone mt-0.5">{label}</p>
    </div>
  );
}

function SettingsSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white border border-stone/10 overflow-hidden">
      {children}
    </div>
  );
}
