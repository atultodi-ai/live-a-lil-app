"use client";

import { useState } from "react";

export function SummersCalculator() {
  const [age, setAge] = useState<string>("");

  const parsedAge = parseInt(age, 10);
  const isValid = !isNaN(parsedAge) && parsedAge >= 1 && parsedAge <= 99;
  const summers = isValid ? Math.max(0, 100 - parsedAge) : null;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Input */}
      <div className="flex items-center gap-3">
        <span className="text-lg text-stone">I am</span>
        <input
          type="number"
          min="1"
          max="99"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="—"
          className="w-20 text-center text-3xl font-bold text-charcoal bg-transparent border-b-2 border-amber focus:outline-none focus:border-terracotta transition-colors placeholder:text-stone-light"
          aria-label="Your age"
        />
        <span className="text-lg text-stone">years old</span>
      </div>

      {/* Result */}
      <div
        className={`transition-all duration-500 text-center ${
          summers !== null ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        aria-live="polite"
      >
        {summers !== null && (
          <>
            <p className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
              {summers}
            </p>
            <p className="text-stone mt-2 text-lg">
              {summers === 0
                ? "summers fully lived."
                : summers === 1
                ? "summer ahead of you."
                : "summers ahead of you."}
            </p>
            {summers > 0 && (
              <p className="text-stone-light text-sm mt-3 max-w-xs mx-auto">
                {summers >= 50
                  ? "A lifetime of possibility. Don't let it slip by."
                  : summers >= 20
                  ? "Still so much ahead. What are you waiting for?"
                  : "Every summer matters. Now more than ever."}
              </p>
            )}
          </>
        )}
      </div>

      {/* Timeline visualization */}
      {summers !== null && summers > 0 && (
        <div className="w-full max-w-sm mt-2" aria-hidden="true">
          <div className="relative h-2 bg-border rounded-full overflow-hidden">
            {/* Past */}
            <div
              className="absolute left-0 top-0 h-full bg-stone-light rounded-full transition-all duration-700"
              style={{ width: `${(parsedAge / 100) * 100}%` }}
            />
            {/* You are here */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-amber rounded-full shadow-sm transition-all duration-700 timeline-pulse"
              style={{ left: `calc(${(parsedAge / 100) * 100}% - 6px)` }}
            />
          </div>
          <div className="flex justify-between text-xs text-stone-light mt-1.5">
            <span>Birth</span>
            <span>Now</span>
            <span>100</span>
          </div>
        </div>
      )}
    </div>
  );
}
