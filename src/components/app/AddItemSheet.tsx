"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { X, Plus, Upload, CheckCircle2, AlertCircle } from "lucide-react";

const ACTIVE_CAP = 100;
const CAP_WARNING_THRESHOLD = 80;

// ─── CSV Parser ────────────────────────────────────────────────────
const VALID_TYPES = ["travel", "skill", "experience", "achievement", "habit", "relationship", "other"];

function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim().replace(/^"|"$/g, ""));
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim().replace(/^"|"$/g, ""));
  return result;
}

interface ParsedRow {
  title: string;
  type?: string;
  priority?: number;
}

function parseCSV(text: string): ParsedRow[] {
  const lines = text
    .trim()
    .split(/\r?\n/)
    .filter((l) => l.trim());
  if (!lines.length) return [];

  const firstLower = lines[0].toLowerCase();
  const hasHeader =
    firstLower.includes("title") ||
    firstLower.includes("name") ||
    firstLower.includes("item") ||
    firstLower.includes("dream");

  let headerCols: string[] | null = null;
  let dataStart = 0;
  if (hasHeader) {
    headerCols = parseCSVRow(lines[0]).map((h) => h.toLowerCase());
    dataStart = 1;
  }

  const titleIdx = headerCols
    ? Math.max(
        0,
        headerCols.findIndex((h) =>
          h.includes("title") || h.includes("name") || h.includes("item") || h.includes("dream")
        )
      )
    : 0;
  const typeIdx = headerCols
    ? headerCols.findIndex((h) => h.includes("type") || h.includes("category"))
    : -1;
  const priorityIdx = headerCols
    ? headerCols.findIndex((h) => h.includes("priority"))
    : -1;

  const results: ParsedRow[] = [];
  for (let i = dataStart; i < lines.length; i++) {
    const cols = parseCSVRow(lines[i]);
    const title = cols[titleIdx]?.trim();
    if (!title) continue;

    let type: string | undefined;
    if (typeIdx >= 0 && cols[typeIdx]) {
      const raw = cols[typeIdx].toLowerCase().trim();
      type = VALID_TYPES.find((t) => raw.includes(t)) ?? "other";
    }

    let priority: number | undefined;
    if (priorityIdx >= 0 && cols[priorityIdx]) {
      const raw = cols[priorityIdx].toLowerCase().trim();
      if (raw === "1" || raw === "low" || raw === "maybe") priority = 1;
      else if (raw === "3" || raw === "high" || raw === "must") priority = 3;
      else priority = 2;
    }

    results.push({ title, type, priority });
  }
  return results;
}

// ─── Component ─────────────────────────────────────────────────────

interface AddItemSheetProps {
  onClose: () => void;
  onAdded: () => void;
}

export function AddItemSheet({ onClose, onAdded }: AddItemSheetProps) {
  const [mode, setMode] = useState<"single" | "csv">("single");
  const [activeCount, setActiveCount] = useState<number | null>(null);

  // Single mode
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // CSV mode
  const [csvText, setCsvText] = useState("");
  const [csvRows, setCsvRows] = useState<ParsedRow[]>([]);
  const [csvParsed, setCsvParsed] = useState(false);
  const [csvImporting, setCsvImporting] = useState(false);
  const [csvResult, setCsvResult] = useState<{ ok: number; skipped: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch active item count
  useEffect(() => {
    fetch("/api/v1/items/count")
      .then((r) => r.json())
      .then((j) => setActiveCount(j.data?.active ?? null))
      .catch(() => null);
  }, []);

  const isCapped = activeCount !== null && activeCount >= ACTIVE_CAP;
  const isNearCap = activeCount !== null && activeCount >= CAP_WARNING_THRESHOLD && !isCapped;
  const remaining = activeCount !== null ? Math.max(0, ACTIVE_CAP - activeCount) : null;

  // ── Single item ──────────────────────────────
  function handleAdd() {
    const trimmed = title.trim();
    if (!trimmed || isCapped) return;

    startTransition(async () => {
      try {
        const res = await fetch("/api/v1/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: trimmed }),
        });
        const json = await res.json();
        if (!res.ok || json.error) {
          setError(json.error ?? "Something went wrong.");
          return;
        }
        if (json.data?.id) {
          fetch("/api/v1/ai/analyze-item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ itemId: json.data.id }),
          }).catch(() => null);
        }
        onAdded();
        onClose();
      } catch {
        setError("Network error. Please try again.");
      }
    });
  }

  // ── CSV import ───────────────────────────────
  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setCsvText(text);
      const rows = parseCSV(text);
      setCsvRows(rows);
      setCsvParsed(true);
    };
    reader.readAsText(file);
  }

  function handleCsvPaste(text: string) {
    setCsvText(text);
    if (text.trim().length > 0) {
      const rows = parseCSV(text);
      setCsvRows(rows);
      setCsvParsed(rows.length > 0);
    } else {
      setCsvRows([]);
      setCsvParsed(false);
    }
  }

  async function handleCsvImport() {
    if (!csvRows.length || csvImporting) return;
    setCsvImporting(true);
    setCsvResult(null);

    let ok = 0;
    let skipped = 0;
    const toImport = csvRows.slice(0, remaining ?? csvRows.length);

    for (const row of toImport) {
      try {
        const res = await fetch("/api/v1/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: row.title,
            priority: row.priority,
            source: "user",
          }),
        });
        const json = await res.json();
        if (res.ok && json.data?.id) {
          ok++;
          fetch("/api/v1/ai/analyze-item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ itemId: json.data.id }),
          }).catch(() => null);
        } else {
          skipped++;
          if (json.code === "CAP_REACHED") break;
        }
      } catch {
        skipped++;
      }
    }

    // Items beyond the cap are also skipped
    skipped += Math.max(0, csvRows.length - toImport.length);

    setCsvImporting(false);
    setCsvResult({ ok, skipped });
    if (ok > 0) onAdded();
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white shadow-2xl animate-slide-up max-h-[90vh] flex flex-col">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-stone/25" />
        </div>

        <div className="px-6 pt-2 pb-10 flex flex-col gap-4 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Plus size={18} className="text-amber" />
              <span className="text-base font-semibold text-charcoal">Add a dream</span>
            </div>
            <button type="button" onClick={onClose} className="text-stone hover:text-charcoal p-1">
              <X size={20} />
            </button>
          </div>

          {/* Cap progress */}
          {activeCount !== null && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className={isCapped ? "text-terracotta font-medium" : isNearCap ? "text-amber font-medium" : "text-stone"}>
                  {activeCount} / {ACTIVE_CAP} dreams on your list
                </span>
                {!isCapped && <span className="text-stone">{remaining} remaining</span>}
              </div>
              <div className="h-1.5 bg-stone/15 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isCapped ? "bg-terracotta" : isNearCap ? "bg-amber" : "bg-emerald-400"
                  }`}
                  style={{ width: `${Math.min(100, (activeCount / ACTIVE_CAP) * 100)}%` }}
                />
              </div>
              {isCapped && (
                <p className="text-xs text-terracotta mt-1.5 font-medium">
                  Your list is full. Complete or archive something to make room — action beats planning.
                </p>
              )}
              {isNearCap && (
                <p className="text-xs text-amber mt-1.5">
                  Almost there! Focus on doing, not just adding.
                </p>
              )}
            </div>
          )}

          {/* Mode tabs */}
          {!isCapped && (
            <div className="flex rounded-xl bg-stone/8 p-1 gap-1">
              <button
                type="button"
                onClick={() => setMode("single")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                  mode === "single" ? "bg-white shadow-sm text-charcoal" : "text-stone"
                }`}
              >
                Add one
              </button>
              <button
                type="button"
                onClick={() => setMode("csv")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                  mode === "csv" ? "bg-white shadow-sm text-charcoal" : "text-stone"
                }`}
              >
                <Upload size={13} />
                Bulk CSV
              </button>
            </div>
          )}

          {/* ── Single mode ── */}
          {mode === "single" && !isCapped && (
            <div className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. Learn to surf in Bali"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  maxLength={200}
                  className="w-full rounded-xl border border-stone/25 bg-white px-4 py-3.5 text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-amber text-base"
                />
                <p className="text-xs text-stone/60 mt-1.5">
                  AI will automatically categorize and score this for you.
                </p>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="button"
                onClick={handleAdd}
                disabled={!title.trim() || isPending}
                className="w-full bg-amber hover:bg-amber/90 text-white font-semibold rounded-xl py-4 text-base transition-opacity disabled:opacity-60"
              >
                {isPending ? "Adding…" : "Add to my list"}
              </button>
            </div>
          )}

          {/* ── CSV mode ── */}
          {mode === "csv" && !isCapped && (
            <div className="flex flex-col gap-4">
              {!csvResult ? (
                <>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-stone">
                      Upload a CSV or paste text. First column = dream title. Optional columns:{" "}
                      <span className="font-mono bg-stone/8 px-1 rounded">type</span>,{" "}
                      <span className="font-mono bg-stone/8 px-1 rounded">priority</span>.
                    </p>
                    <p className="text-xs text-stone/60">
                      Type is auto-detected by AI if not provided. Valid types: travel, skill, experience, achievement, habit, relationship, other.
                    </p>
                  </div>

                  {/* File upload */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-stone/25 py-4 text-sm text-stone hover:border-amber hover:text-amber transition-colors"
                  >
                    <Upload size={16} />
                    Choose CSV file
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,text/csv"
                    className="hidden"
                    onChange={handleFileUpload}
                  />

                  {/* Or paste */}
                  <div>
                    <p className="text-xs text-stone mb-1.5">Or paste CSV text:</p>
                    <textarea
                      rows={4}
                      placeholder={"title,type,priority\nLearn to surf,travel,2\nWrite a novel,skill,3"}
                      value={csvText}
                      onChange={(e) => handleCsvPaste(e.target.value)}
                      className="w-full rounded-xl border border-stone/25 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:ring-2 focus:ring-amber font-mono resize-none"
                    />
                  </div>

                  {/* Preview */}
                  {csvParsed && csvRows.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-charcoal mb-2">
                        Preview — {csvRows.length} item{csvRows.length !== 1 ? "s" : ""} found
                        {remaining !== null && csvRows.length > remaining && (
                          <span className="text-amber ml-1">
                            (only {remaining} will be imported — list cap)
                          </span>
                        )}
                      </p>
                      <div className="rounded-xl border border-stone/15 overflow-hidden">
                        {csvRows.slice(0, 6).map((row, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 px-3 py-2 text-sm ${
                              i % 2 === 0 ? "bg-white" : "bg-stone/4"
                            }`}
                          >
                            <span className="flex-1 text-charcoal truncate">{row.title}</span>
                            {row.type && (
                              <span className="text-xs bg-stone/10 text-stone px-2 py-0.5 rounded-full">
                                {row.type}
                              </span>
                            )}
                            {row.priority && (
                              <span className="text-xs text-stone/60">★{row.priority}</span>
                            )}
                          </div>
                        ))}
                        {csvRows.length > 6 && (
                          <div className="px-3 py-2 text-xs text-stone bg-stone/4">
                            +{csvRows.length - 6} more…
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {csvParsed && csvRows.length === 0 && (
                    <p className="text-sm text-red-400">No valid items found. Make sure the first column contains dream titles.</p>
                  )}

                  {csvParsed && csvRows.length > 0 && (
                    <button
                      type="button"
                      onClick={handleCsvImport}
                      disabled={csvImporting}
                      className="w-full bg-charcoal hover:bg-charcoal/90 text-white font-semibold rounded-xl py-4 text-base transition-opacity disabled:opacity-60"
                    >
                      {csvImporting
                        ? "Importing…"
                        : `Import ${Math.min(csvRows.length, remaining ?? csvRows.length)} dream${Math.min(csvRows.length, remaining ?? csvRows.length) !== 1 ? "s" : ""}`}
                    </button>
                  )}
                </>
              ) : (
                /* Result screen */
                <div className="flex flex-col items-center gap-4 py-4 text-center">
                  {csvResult.ok > 0 ? (
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={40} className="text-amber" />
                  )}
                  <div>
                    <p className="text-charcoal font-semibold text-lg">
                      {csvResult.ok > 0
                        ? `${csvResult.ok} dream${csvResult.ok !== 1 ? "s" : ""} added!`
                        : "Nothing was imported"}
                    </p>
                    {csvResult.skipped > 0 && (
                      <p className="text-stone text-sm mt-1">
                        {csvResult.skipped} skipped (duplicates or cap reached)
                      </p>
                    )}
                    <p className="text-stone text-xs mt-2">
                      AI is categorizing and scoring each item in the background.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full bg-amber hover:bg-amber/90 text-white font-semibold rounded-xl py-3.5 text-base"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
