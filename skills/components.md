# Skill: Component Architecture

## What This Covers
- Atomic component design for this project
- Component file location conventions (`components/ui/`, `components/layout/`)
- Props interface design
- Variant patterns (string union types for color, size, state)
- Composition patterns
- Client vs. server component boundaries

## File Location Convention
```
components/
  ui/                    ← atomic, reusable
    Button.tsx
    Chip.tsx
    Card.tsx
    Input.tsx
    Textarea.tsx
    Badge.tsx
    Icon.tsx
  layout/                ← structural, shared across pages
    Navigation.tsx
    Footer.tsx
    PageHero.tsx
  pages/                  ← page-specific sections
    homepage/
      HeroSection.tsx
      PublicationsSection.tsx
      ...
```

## Component Patterns

### 1. Button (Primary / Secondary / Tertiary)
```tsx
// components/ui/Button.tsx
"use client";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

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
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 active:scale-[0.95] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-tonal-gradient text-on-primary hover:opacity-90 shadow-sm",
    secondary:
      "bg-transparent text-primary border border-[rgba(163,182,195,0.3)] hover:bg-surface-container-low active:scale-[0.95]",
    tertiary:
      "bg-tertiary-container text-on-tertiary-fixed hover:opacity-90 shadow-sm",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {leftIcon && leftIcon}
      {isLoading ? "Loading..." : children}
      {rightIcon && rightIcon}
    </button>
  );
}
```

### 2. Navigation (Horizon Nav — Glass Blur + Active Underline)
```tsx
// components/layout/Navigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/systems", label: "Systems" },
  { href: "/travel", label: "Travel" },
  { href: "/qa", label: "Q&A" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-sky-50/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-sky-900 font-headline">
          Tidal Research
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "font-headline tracking-tight font-bold px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "text-sky-900 border-b-2 border-sky-600 pb-1"
                    : "text-sky-700/70 hover:text-sky-900 hover:bg-sky-100/50"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button className="bg-primary text-on-primary px-4 py-2 font-label font-bold text-sm tracking-tight rounded-lg hover:scale-95 transition-transform duration-300">
          Connect
        </button>
      </div>
    </nav>
  );
}
```

### 3. Card (Tonal Layering — No Borders)
```tsx
// components/ui/Card.tsx
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

export function Card({ tone = "lowest", className, children, hoverLift = false }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden transition-all duration-300",
        toneClasses[tone],
        hoverLift && "hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
```

### 4. Chip (Tag / Category Pill)
```tsx
// components/ui/Chip.tsx
import { clsx } from "clsx";

type ChipVariant = "default" | "primary" | "sandy";

interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-label font-bold tracking-widest uppercase",
        variant === "default" && "bg-surface-variant text-on-surface-variant",
        variant === "primary" && "bg-primary-container text-primary",
        variant === "sandy" && "bg-sandy-yellow/10 text-sandy-yellow",
        className
      )}
    >
      {children}
    </span>
  );
}
```

### 5. Input / Textarea (Ghost Border Focus)
```tsx
// components/ui/Input.tsx
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
          <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            "w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline",
            "focus:outline focus:outline-1 focus:outline-[rgba(163,182,195,0.3)] focus:bg-surface-container-lowest transition-all outline-none",
            error && "border border-error",
            className
          )}
          {...props}
        />
        {error && <span className="text-error text-xs mt-1">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
```

### 6. Footer (Shared Shell)
```tsx
// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-slate-100 w-full py-12 px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-sky-900 font-headline">
          Tidal Research
        </div>
        <p className="font-label text-sm tracking-widest uppercase text-sky-600">
          © {new Date().getFullYear()} Tidal Gallery AI Research. All rights reserved.
        </p>
        <div className="flex gap-8 font-label text-sm tracking-widest uppercase">
          {["Privacy", "Contact", "Archive", "GitHub"].map((link) => (
            <a key={link} className="text-sky-600 hover:text-sky-900 hover:underline decoration-sky-500/30 underline-offset-4 transition-all" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

### 7. Icon (Material Symbols Outlined Wrapper)
```tsx
// components/ui/Icon.tsx
"use client";

interface IconProps {
  name: string;
  filled?: boolean;
  className?: string;
  weight?: "fill" | "outlined";
  size?: number;
}

export function Icon({ name, filled = false, className, size = 24 }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        fontSize: `${size}px`,
      }}
    >
      {name}
    </span>
  );
}
```

## Key Dependencies to Install
```bash
npm install clsx
npm install -D @types/node @types/react @types/react-dom
```

## Composition Pattern
```
<Card tone="low" hoverLift>
  <div className="p-8">
    <Chip variant="primary">ACM MM 2025</Chip>
    <h3 className="font-headline text-2xl font-bold mt-4">Title</h3>
    <p className="text-on-surface-variant mt-2">Description</p>
    <div className="flex gap-3 mt-4">
      <Button variant="secondary" size="sm">Paper</Button>
      <Button variant="secondary" size="sm">Code</Button>
    </div>
  </div>
</Card>
```