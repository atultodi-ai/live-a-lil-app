"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { ONBOARDING_SEEDS, CATEGORY_META, type OnboardingSeed } from "@/data/onboarding-seeds";
import { summersDisplay } from "@/lib/utils";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type Gender = "male" | "female" | "non_binary" | "prefer_not_to_say";

interface Screen1Data {
  age: string;
  gender: Gender | "";
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

interface CityResult {
  city: string;
  country: string;
  display: string;
  lat: number;
  lon: number;
}

// ─────────────────────────────────────────────
// City Autocomplete Component
// ─────────────────────────────────────────────

function CityAutocomplete({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (result: CityResult) => void;
}) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<CityResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleChange(val: string) {
    setQuery(val);
    setOpen(false);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.trim().length < 2) { setResults([]); return; }

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          q: val,
          format: "json",
          addressdetails: "1",
          limit: "6",
          featuretype: "city",
        });
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?${params}`,
          { headers: { "Accept-Language": "en", "User-Agent": "LiveALittle/1.0" } }
        );
        const data = await res.json();

        const parsed: CityResult[] = data
          .filter((r: NominatimResult) =>
            ["city", "town", "village", "municipality", "administrative"].includes(r.type) ||
            ["city", "town", "village"].includes(r.addresstype)
          )
          .slice(0, 5)
          .map((r: NominatimResult) => ({
            city:
              r.address.city ||
              r.address.town ||
              r.address.village ||
              r.address.municipality ||
              r.name,
            country: r.address.country ?? "",
            display: r.display_name,
            lat: parseFloat(r.lat),
            lon: parseFloat(r.lon),
          }))
          .filter((r: CityResult) => r.city);

        setResults(parsed);
        setOpen(parsed.length > 0);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
  }

  function handleSelect(result: CityResult) {
    setQuery(result.city);
    setOpen(false);
    setResults([]);
    onSelect(result);
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone/50 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Start typing a city..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          className="w-full rounded-xl border border-stone/30 bg-white pl-9 pr-4 py-3 text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber"
          autoComplete="off"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-amber border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-30 w-full mt-1 bg-white rounded-xl border border-stone/20 shadow-lg overflow-hidden">
          {results.map((r, i) => (
            <li key={i}>
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); handleSelect(r); }}
                className="w-full text-left px-4 py-2.5 hover:bg-stone/8 transition-colors"
              >
                <span className="font-medium text-sm text-charcoal">{r.city}</span>
                <span className="text-xs text-stone ml-2">{r.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface NominatimResult {
  lat: string;
  lon: string;
  type: string;
  addresstype: string;
  name: string;
  display_name: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    country?: string;
  };
}

// ─────────────────────────────────────────────
// Main Onboarding Page
// ─────────────────────────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [screen, setScreen] = useState<1 | 2 | 3>(1);
  const [error, setError] = useState<string | null>(null);

  const [s1, setS1] = useState<Screen1Data>({
    age: "",
    gender: "",
    city: "",
    country: "",
    latitude: undefined,
    longitude: undefined,
  });

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [customInput, setCustomInput] = useState("");
  const [customItems, setCustomItems] = useState<string[]>([]);

  function toggleSeed(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); }
      else if (next.size < 20) { next.add(id); }
      return next;
    });
  }

  function addCustomItem() {
    const val = customInput.trim();
    if (!val || customItems.length >= 10) return;
    setCustomItems((prev) => [...prev, val]);
    setCustomInput("");
  }

  function removeCustomItem(idx: number) {
    setCustomItems((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleScreen1Next() {
    const age = parseInt(s1.age, 10);
    if (!s1.age || isNaN(age) || age < 13 || age > 120) {
      setError("Please enter a valid age (13–120).");
      return;
    }
    if (!s1.city.trim()) {
      setError("Please select your city.");
      return;
    }
    if (!s1.country.trim()) {
      setError("Please enter your country.");
      return;
    }
    setError(null);
    setScreen(2);
  }

  function handleScreen2Next() {
    if (selected.size === 0 && customItems.length === 0) {
      setError("Pick at least one dream to continue.");
      return;
    }
    setError(null);
    setScreen(3);
  }

  function handleComplete() {
    const age = parseInt(s1.age, 10);
    const selectedSeeds = ONBOARDING_SEEDS.filter((s) => selected.has(s.id)).map(
      (s) => ({ title: s.title, type: s.type })
    );

    startTransition(async () => {
      try {
        const res = await fetch("/api/v1/onboarding/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            age,
            gender: s1.gender || undefined,
            city: s1.city.trim(),
            country: s1.country.trim(),
            latitude: s1.latitude,
            longitude: s1.longitude,
            seedItems: selectedSeeds,
            customItems,
          }),
        });

        const json = await res.json();
        if (!res.ok || json.error) {
          setError(json.error ?? "Something went wrong. Please try again.");
          return;
        }

        router.replace("/dashboard");
      } catch (err) {
        console.error("[onboarding] submit error:", err);
        setError("Network error. Please try again.");
      }
    });
  }

  const age = parseInt(s1.age, 10);
  const validAge = !isNaN(age) && age >= 13 && age <= 120;

  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <div className="h-1 bg-stone/20">
        <div
          className="h-full bg-amber transition-all duration-500"
          style={{ width: `${(screen / 3) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-6 py-10">
        {screen === 1 && (
          <Screen1
            data={s1}
            onChange={setS1}
            onNext={handleScreen1Next}
            error={error}
          />
        )}
        {screen === 2 && (
          <Screen2
            selected={selected}
            onToggle={toggleSeed}
            customInput={customInput}
            onCustomInputChange={setCustomInput}
            customItems={customItems}
            onAddCustom={addCustomItem}
            onRemoveCustom={removeCustomItem}
            onNext={handleScreen2Next}
            error={error}
          />
        )}
        {screen === 3 && validAge && (
          <Screen3
            age={age}
            itemCount={selected.size + customItems.length}
            onComplete={handleComplete}
            isPending={isPending}
            error={error}
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Screen 1 — Who are you?
// ─────────────────────────────────────────────

function Screen1({
  data,
  onChange,
  onNext,
  error,
}: {
  data: Screen1Data;
  onChange: (d: Screen1Data) => void;
  onNext: () => void;
  error: string | null;
}) {
  const genderOptions: { value: Gender; label: string }[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "non_binary", label: "Non-binary" },
    { value: "prefer_not_to_say", label: "Prefer not to say" },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div>
        <p className="text-stone text-sm font-medium uppercase tracking-widest mb-2">
          Step 1 of 3
        </p>
        <h1 className="text-3xl font-bold text-charcoal leading-tight">
          Let&apos;s start with you.
        </h1>
        <p className="text-stone mt-2">
          We use this to make your list feel personal — not generic.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            How old are you?
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={13}
            max={120}
            placeholder="34"
            value={data.age}
            onChange={(e) => onChange({ ...data, age: e.target.value })}
            className="w-full rounded-xl border border-stone/30 bg-white px-4 py-3 text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber text-lg"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Gender <span className="text-stone font-normal">(optional)</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {genderOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() =>
                  onChange({ ...data, gender: data.gender === opt.value ? "" : opt.value })
                }
                className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                  data.gender === opt.value
                    ? "border-amber bg-amber/10 text-amber"
                    : "border-stone/30 bg-white text-charcoal hover:border-amber/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* City autocomplete */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            Where do you live?
          </label>
          <CityAutocomplete
            value={data.city}
            onSelect={(result) =>
              onChange({
                ...data,
                city: result.city,
                country: result.country,
                latitude: result.lat,
                longitude: result.lon,
              })
            }
          />
          {data.city && data.country && (
            <p className="text-xs text-stone mt-1.5 flex items-center gap-1">
              <MapPin size={11} />
              {data.city}, {data.country}
              {data.latitude && (
                <span className="text-stone/50">
                  &nbsp;({data.latitude.toFixed(2)}, {data.longitude?.toFixed(2)})
                </span>
              )}
            </p>
          )}
          {/* Manual country override if autocomplete didn't fill it */}
          {data.city && !data.country && (
            <input
              type="text"
              placeholder="Country"
              value={data.country}
              onChange={(e) => onChange({ ...data, country: e.target.value })}
              className="mt-2 w-full rounded-xl border border-stone/30 bg-white px-4 py-3 text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber text-sm"
            />
          )}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-amber hover:bg-amber/90 text-white font-semibold rounded-xl py-4 text-base transition-colors"
      >
        Continue →
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Screen 2 — Pick your dreams
// ─────────────────────────────────────────────

const SEED_BY_TYPE: Record<OnboardingSeed["type"], OnboardingSeed[]> = {
  travel: [], skill: [], experience: [], achievement: [], habit: [], relationship: [],
};
for (const seed of ONBOARDING_SEEDS) {
  SEED_BY_TYPE[seed.type].push(seed);
}

function Screen2({
  selected, onToggle, customInput, onCustomInputChange,
  customItems, onAddCustom, onRemoveCustom, onNext, error,
}: {
  selected: Set<string>;
  onToggle: (id: string) => void;
  customInput: string;
  onCustomInputChange: (v: string) => void;
  customItems: string[];
  onAddCustom: () => void;
  onRemoveCustom: (idx: number) => void;
  onNext: () => void;
  error: string | null;
}) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div>
        <p className="text-stone text-sm font-medium uppercase tracking-widest mb-2">
          Step 2 of 3
        </p>
        <h1 className="text-3xl font-bold text-charcoal leading-tight">
          What&apos;s on your list?
        </h1>
        <p className="text-stone mt-2">
          Pick what resonates. You can always add more later.{" "}
          <span className="font-medium text-amber">{selected.size}/20 selected</span>
        </p>
      </div>

      {(Object.keys(SEED_BY_TYPE) as OnboardingSeed["type"][]).map((type) => {
        const meta = CATEGORY_META[type];
        return (
          <div key={type}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">
              {meta.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {SEED_BY_TYPE[type].map((seed) => {
                const isSelected = selected.has(seed.id);
                return (
                  <button
                    key={seed.id}
                    type="button"
                    onClick={() => onToggle(seed.id)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-charcoal text-white border-charcoal"
                        : "bg-white text-charcoal border-stone/30 hover:border-stone/60"
                    }`}
                  >
                    <span>{seed.emoji}</span>
                    <span>{seed.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">
          Something personal?
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Write your own dream..."
            value={customInput}
            onChange={(e) => onCustomInputChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onAddCustom()}
            className="flex-1 rounded-xl border border-stone/30 bg-white px-4 py-2.5 text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber text-sm"
          />
          <button
            type="button"
            onClick={onAddCustom}
            disabled={!customInput.trim() || customItems.length >= 10}
            className="rounded-xl bg-amber px-4 py-2.5 text-white font-medium text-sm disabled:opacity-40"
          >
            Add
          </button>
        </div>
        {customItems.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {customItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1 rounded-full bg-charcoal/10 px-3 py-1.5 text-sm text-charcoal">
                {item}
                <button type="button" onClick={() => onRemoveCustom(idx)} className="text-stone hover:text-charcoal ml-1 text-xs">✕</button>
              </span>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-amber hover:bg-amber/90 text-white font-semibold rounded-xl py-4 text-base transition-colors sticky bottom-6"
      >
        Continue →
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Screen 3 — Summers reveal
// ─────────────────────────────────────────────

function Screen3({
  age, itemCount, onComplete, isPending, error,
}: {
  age: number;
  itemCount: number;
  onComplete: () => void;
  isPending: boolean;
  error: string | null;
}) {
  const summers = Math.max(0, 100 - age);

  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in text-center pt-8">
      <p className="text-stone text-sm font-medium uppercase tracking-widest">Step 3 of 3</p>

      <div>
        <div className="text-8xl font-bold text-amber leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
          {summers}
        </div>
        <p className="text-charcoal text-xl font-medium mt-3">{summersDisplay(age)}</p>
      </div>

      <div className="w-full max-w-xs">
        <div className="h-3 bg-stone/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber to-terracotta rounded-full transition-all duration-1000"
            style={{ width: `${(age / 100) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-stone mt-1">
          <span>0</span>
          <span>You are here</span>
          <span>100</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 w-full text-left shadow-sm border border-stone/10">
        <p className="text-charcoal font-semibold text-lg mb-1">
          You&apos;ve added {itemCount} dream{itemCount !== 1 ? "s" : ""} to your list.
        </p>
        <p className="text-stone text-sm">
          We&apos;ll help you figure out which ones to start first — based on your life, not just enthusiasm.
        </p>
      </div>

      <p className="text-stone text-sm max-w-xs">
        This is your list. Private, personal, and entirely yours. Let&apos;s make these summers count.
      </p>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="button"
        onClick={onComplete}
        disabled={isPending}
        className="w-full bg-charcoal hover:bg-charcoal/90 text-white font-semibold rounded-xl py-4 text-base transition-colors disabled:opacity-60"
      >
        {isPending ? "Setting up your list…" : "Start living a lil →"}
      </button>
    </div>
  );
}
