"use client";

import { clsx } from "clsx";
import { Icon } from "./Icon";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: string;
  rightIcon?: string;
  isLoading?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-[family-name:var(--font-manrope)] font-semibold transition-all duration-300 active:scale-[0.95] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "tonal-gradient text-on-primary hover:opacity-90 oceanic-shadow",
  secondary:
    "bg-transparent text-primary border border-[rgba(163,182,195,0.3)] hover:bg-surface-container-low active:scale-[0.95]",
  tertiary:
    "bg-tertiary-container text-on-tertiary-fixed hover:opacity-90 oceanic-shadow",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {leftIcon && (
        <Icon name={leftIcon} filled={false} className="text-sm" />
      )}
      {isLoading ? "Loading..." : children}
      {rightIcon && (
        <Icon name={rightIcon} filled={false} className="text-sm" />
      )}
    </button>
  );
}