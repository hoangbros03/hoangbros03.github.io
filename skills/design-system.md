# Skill: Design System Architecture

## What This Covers
- Extracting design tokens from reference HTML/CSS
- Defining a canonical color scale using Material 3 surface philosophy
- Building Tailwind `theme.extend` tokens from reference files
- Component variant strategy (size, color, state)
- Atomic component design (one component, many configurations via props)
- No-line rule: separation via tonal shifts, not 1px borders
- Ghost border fallback pattern

## Canonical Design Tokens (from Design System spec + reference files)

### Colors

#### Surface Palette (Material 3 tonal system)
| Token | Hex | Purpose |
|-------|-----|---------|
| `background` | `#f0f8ff` | Base sand — app-wide background |
| `surface` | `#f0f8ff` | Same as background (expansive base) |
| `surface-container-low` | `#e6f2fc` | Card backgrounds, subtle lift |
| `surface-container-high` | `#d6ebfa` | Sidebar zones, utility areas |
| `surface-container-highest` | `#cce5f7` | Persistent sidebars, anchored zones |
| `surface-container-lowest` | `#ffffff` | Highest focus: floating cards, modals, inputs |

#### Primary (Ocean Blue — "Coastal Editorial")
| Token | Hex |
|-------|-----|
| `primary` | `#006497` |
| `on-primary` | `#ffffff` |
| `primary-container` | `#cce5ff` |
| `on-primary-container` | `#003e6b` |

#### Secondary (Seafoam / Slate)
| Token | Hex |
|-------|-----|
| `secondary` | `#a2c1de` |
| `on-secondary` | `#ffffff` |
| `secondary-container` | `#d3e5f6` |
| `on-secondary-container` | `#183652` |

#### Tertiary (Sandy Yellow — "Sunlight", use sparingly)
| Token | Hex |
|-------|-----|
| `tertiary` | `#e5b98f` |
| `on-tertiary` | `#ffffff` |
| `tertiary-container` | `#ffdcbc` |
| `on-tertiary-fixed` | `#281804` |
| `sandy-yellow` | `#e8b851` |

#### On-Surface (Text & Icons)
| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` | `#141c21` | Primary text (not pure black!) |
| `on-surface-variant` | `#434b52` | Secondary text, descriptions |
| `on-background` | `#141c21` | Background text |

#### Outlines & Dividers
| Token | Hex | Usage |
|-------|-----|-------|
| `outline` | `#7b8a96` | Form borders, icon colors |
| `outline-variant` | `#c3ced6` | Ghost borders (20% opacity), dividers |

#### Error
| Token | Hex |
|-------|-----|
| `error` | `#ba1a1a` |
| `on-error` | `#ffffff` |
| `error-container` | `#ffdad6` |

### Typography

#### Font Families (via `next/font/google`)
| Role | Font | Variable | Usage |
|------|------|----------|-------|
| Headlines | Space Grotesk | `--font-space-grotesk` | Hero text, section titles |
| Body | Manrope | `--font-manrope` | Paragraphs, descriptions |
| Labels | Manrope | `--font-manrope` | Tags, chips, small UI text |

#### Type Scale (Tailwind arbitrary values)
| Class | Size | Line Height | Letter Spacing | Usage |
|-------|------|------------|---------------|-------|
| `text-display-lg` | 4.5rem / 6rem | 1.0 | -0.02em | Hero headlines |
| `text-display` | 3.5rem | 1.1 | -0.02em | Page titles |
| `text-headline-lg` | 2.5rem | tight | tight | Section headings |
| `text-headline-md` | 2rem | normal | tight | Card headings |
| `text-title-lg` | 1.5rem | normal | tight | Subsection titles |
| `text-body-lg` | 1.125rem | 1.7 | normal | Body paragraphs |
| `text-body-md` | 1rem | 1.6 | normal | Descriptions |
| `text-label` | 0.75rem | normal | 0.1em | Tags, chips, nav links |
| `uppercase tracking-widest` | — | — | — | Section labels (e.g. "RESEARCH & ENGINEERING") |

### Border Radii
| Token | Value | Usage |
|-------|-------|-------|
| `DEFAULT` | 0.5rem | Standard elements |
| `lg` | 0.5rem | Cards, buttons |
| `xl` | 0.5rem | Large cards, modals |
| `full` | 0.5rem | Chips, pills, avatars |

**Note:** `xl` is 0.5rem (8px) — softer feel, not dramatic rounding. `full` is also 0.5rem — pills.

### Elevation (No Drop Shadows — Tonal Layering)

**The Layering Principle:** Depth comes from placing `surface-container-lowest` (#ffffff) on `surface-container-low` (#e6f2fc). The 2% brightness shift is more sophisticated than heavy shadows.

**Oceanic Shadow** (for floating Action Buttons only):
```css
box-shadow: 0 0 32px rgba(20, 28, 33, 0.06); /* blur-32, offset-0, 6% opacity on_surface */
```

### Custom Utilities to Add

```ts
// tailwind.config.ts
extend: {
  // Glassmorphism
  backdropBlur: { 'xl': '20px' },

  // Ghost border (for form fields, accessible form borders)
  // Usage: <input className="outline outline-[rgba(163,182,195,0.3)]" />
  outline: { 'ghost': '1px solid rgba(163, 182, 195, 0.3)' },

  // Tonal gradient (primary CTA backgrounds)
  backgroundImage: {
    'tonal-gradient': 'linear-gradient(135deg, #006497 0%, #003e6b 100%)',
  },
}
```

### CSS Custom Properties Pattern
```css
/* In globals.css or component-level */
@layer base {
  :root {
    --font-headline: var(--font-space-grotesk), system-ui, sans-serif;
    --font-body: var(--font-manrope), system-ui, sans-serif;
    --font-label: var(--font-manrope), system-ui, sans-serif;
  }
}
```

### Color Application Map

| Element | Background | Text | Border |
|---------|-----------|------|--------|
| App background | `background` | — | — |
| Floating card | `surface-container-lowest` | `on-surface` | none |
| Card on bg | `surface-container-low` | `on-surface` | none |
| Sidebar/utility | `surface-container-high` | `on-surface-variant` | none |
| Primary CTA | `primary` gradient | `on-primary` | none |
| Secondary button | transparent | `primary` | ghost border |
| Input field | `surface-container-low` | `on-surface` | none (focus: ghost) |
| Chip | `surface-variant` | `on-surface-variant` | none |
| Active nav | — | `on-surface` | `border-b-2 border-primary` |
| Label tag | `surface-container-low` | `on-surface-variant` | none |
| Sandy location tag | `sandy-yellow/10` | `sandy-yellow` | none |

### "No-Line" Rule Enforcement
> Designers are prohibited from using 1px solid borders to define sections or containers. Separation achieved via:
1. **Background Shifts** — tonal card placement
2. **Tonal Transitions** — subtle hue shifts
3. **Whitespace** — spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96px)

### Do's and Don'ts (from DESIGN.md)
- ✅ Use `on-surface` (#141c21), never pure `#000000`
- ✅ Use `md` and `xl` radii, avoid `none` or `sm`
- ✅ Double padding when a section feels "busy"
- ✅ Asymmetric layouts — text left, images slightly offset right
- ❌ No 1px borders to define containers
- ❌ No heavy drop shadows (use tonal layering instead)
- ❌ Don't use `tertiary` (sandy yellow) excessively — it's "sunlight", use sparingly
- ❌ Don't cram elements together