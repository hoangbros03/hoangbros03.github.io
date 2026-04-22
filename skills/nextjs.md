# Skill: Next.js + App Router

## What This Covers
- Project initialization with `create-next-app` or `npx create-next-app`
- App Router file-based routing structure
- `layout.tsx`, `page.tsx`, `template.tsx` patterns
- Server vs. Client component boundaries
- `next/image` and `next/font` optimization
- `next.config.js` / `next.config.ts` configuration
- Dynamic routes, catch-all routes, route groups
- Middleware for redirects and rewrites
- Metadata API for SEO
- Incremental Static Regeneration (ISR)

## File Conventions
```
app/
  layout.tsx       ← root layout (nav + footer + fonts)
  page.tsx         ← homepage
  publications/
    page.tsx
  systems/
    page.tsx
  travel/
    page.tsx
  qa/
    page.tsx
  globals.css
```

## Tailwind Setup (Next.js + Tailwind)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## `tailwind.config.ts` pattern
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { /* design tokens */ },
      fontFamily: { /* headline, body, label */ },
      borderRadius: { /* DEFAULT, lg, xl, full */ },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
```

## `globals.css` baseline
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

## `layout.tsx` pattern (root)
```tsx
import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tidal Research",
  description: "AI Builder & Explorer — Bridging Applied LLMs and Multimodal ML",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## Key Notes
- Always use `next/image` for any `<img>` tags to get automatic optimization
- Use `next/font/google` instead of `<link>` tags for zero layout shift
- Keep `layout.tsx` as a **Server Component** — push interactivity to leaf components
- Use `use client` only where hooks or event handlers are needed
- The `variable` class pattern allows CSS variable access: `font-family: var(--font-space-grotesk)`