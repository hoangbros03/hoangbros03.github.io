"use client";

import { forwardRef } from "react";
import { clsx } from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-[family-name:var(--font-manrope)] text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            "w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline",
            "focus:outline focus:outline-1 focus:outline-[rgba(0,100,151,0.4)] focus:bg-surface-container-lowest transition-all",
            error && "border border-error",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-error text-xs mt-1 block">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";