# Skill: Animation & Interaction Patterns

## What This Covers
- CSS transition patterns for this project
- Hover state animations
- Page-level transitions
- Ambient motion
- Intersection Observer for scroll-triggered animations
- Accessibility considerations for motion

## Transition Timing Reference

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Card hover lift | 300ms | ease | hover |
| Image zoom | 700ms | ease | hover |
| Button press | 300ms | ease | :active |
| Glass nav fade | 300ms | ease | scroll |
| Card tonality shift | 300ms | ease | hover |
| Icon color | 200ms | ease | hover |
| Backdrop glow pulse | 4s | ease-in-out | ambient |
| Bounce arrow | 1s | ease-in-out | loop |

## CSS Transition Patterns

### Card Hover Lift (Tonal)
```css
.card-lift {
  transition: transform 300ms ease, background-color 300ms ease, box-shadow 300ms ease;
}
.card-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 32px rgba(20, 28, 33, 0.06);
}
```

### Image Zoom (on hover)
```css
.img-zoom {
  transition: transform 700ms ease;
}
.group:hover .img-zoom-target {
  transform: scale(1.05);
}
```

### Button Press Effect
```css
.press-effect {
  transition: transform 300ms ease;
}
.press-effect:active {
  transform: scale(0.95);
}
```

### Ghost Border Focus (Input)
```css
.ghost-border-focus {
  transition: outline 200ms ease, background-color 200ms ease;
}
.ghost-border-focus:focus-within {
  outline: 1px solid rgba(0, 100, 151, 0.4);
}
```

### Nav Fade (Scroll)
```tsx
// components/layout/Navigation.tsx
"use client";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 glass transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      {/* ... */}
    </nav>
  );
}
```

## Ambient Background Glow (Fixed Position)
```tsx
// Used in Q&A page
<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
  <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
  <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-tertiary-container/50 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
</div>
```

## Scroll-Triggered Animations (Intersection Observer)
```tsx
"use client";
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-right";
}

export function AnimateOnScroll({ children, className, animation = "fade-up" }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform:
          animation === "fade-up"
            ? visible ? "translateY(0)" : "translateY(24px)"
            : animation === "fade-in"
            ? undefined
            : visible ? "translateX(0)" : "translateX(-24px)",
      }}
    >
      {children}
    </div>
  );
}
```

## Bounce Animation (Load More Arrow)
```css
@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.animate-bounce-arrow {
  animation: bounce-arrow 1.5s ease-in-out infinite;
}
```

## Accessibility — Reduce Motion
Always wrap animations in `@media (prefers-reduced-motion: no-preference)`:

```css
@media (prefers-reduced-motion: no-preference) {
  .card-lift:hover {
    transform: translateY(-4px);
  }
  .img-zoom-target {
    transition: transform 700ms ease;
  }
}
```

```tsx
// In React — conditional animation
const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

## Summary of Animation Utilities in globals.css
| Class | Purpose |
|-------|---------|
| `.card-lift` | Card hover: translateY(-4px) + shadow |
| `.img-zoom:hover img` | Image scale(1.05) on group hover |
| `.press-effect:active` | Button scale(0.95) on press |
| `.glass` | backdrop-blur + semi-transparent bg |
| `.tonal-gradient` | 135deg primary gradient for CTAs |
| `.oceanic-shadow` | Floating shadow for action buttons |
| `.animate-bounce` | Tailwind built-in bounce keyframe |
| `.animate-pulse` | Ambient glow pulse |