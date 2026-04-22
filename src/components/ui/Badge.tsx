import { clsx } from "clsx";

type BadgeVariant = "primary" | "secondary" | "sandy" | "ghost";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-[family-name:var(--font-manrope)] font-bold tracking-widest uppercase",
        variant === "primary" && "bg-primary-container text-primary",
        variant === "secondary" && "bg-secondary-container text-secondary",
        variant === "sandy" && "bg-sandy-yellow/10 text-sandy-yellow border border-sandy-yellow/20",
        variant === "ghost" && "bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20",
        className
      )}
    >
      {children}
    </span>
  );
}