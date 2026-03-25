"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, icon, className = "", id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-charcoal"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={[
              "w-full px-4 py-3 text-base text-charcoal",
              "bg-white border rounded-[var(--radius-btn)]",
              "placeholder:text-stone-light",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-0 focus:border-amber",
              "disabled:bg-warm-white disabled:cursor-not-allowed",
              error ? "border-red-400" : "border-border",
              icon ? "pl-10" : "",
              className,
            ].join(" ")}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-stone">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
