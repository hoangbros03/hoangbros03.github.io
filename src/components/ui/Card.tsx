import { clsx } from "clsx";

type CardTone = "lowest" | "low" | "high" | "highest";

interface CardProps {
  tone?: CardTone;
  className?: string;
  children: React.ReactNode;
  hoverLift?: boolean;
  onClick?: () => void;
}

const toneClasses: Record<CardTone, string> = {
  lowest: "bg-surface-container-lowest",
  low: "bg-surface-container-low",
  high: "bg-surface-container-high",
  highest: "bg-surface-container-highest",
};

export function Card({
  tone = "lowest",
  className,
  children,
  hoverLift = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden transition-all duration-300",
        toneClasses[tone],
        hoverLift &&
          "card-lift hover:shadow-md hover:bg-surface-container-high cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}