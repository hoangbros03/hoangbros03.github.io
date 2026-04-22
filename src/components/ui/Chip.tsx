import { clsx } from "clsx";

type ChipVariant = "default" | "primary" | "sandy" | "secondary" | "tertiary";

interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-[family-name:var(--font-manrope)] font-bold tracking-widest uppercase",
        variant === "default" && "bg-surface-variant text-on-surface-variant",
        variant === "primary" && "bg-primary-container text-primary",
        variant === "sandy" && "bg-sandy-yellow/10 text-sandy-yellow border border-sandy-yellow/20",
        variant === "secondary" && "bg-secondary-container text-secondary",
        variant === "tertiary" && "bg-tertiary-container text-on-tertiary-fixed",
        className
      )}
    >
      {children}
    </span>
  );
}