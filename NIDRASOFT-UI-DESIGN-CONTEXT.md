# NidraSoft UI — Design System Context

This file provides the complete design system context for building NidraSoft UI components. Every component in this library MUST use these tokens, patterns, and conventions. This document is the single source of truth.

---

## 1. Theme Architecture

The design system supports **dark mode** (default) and **light mode** via CSS custom properties. Theme is controlled by `data-theme="dark"` or `data-theme="light"` on the `<html>` element.

**Theme switching must be smooth** — all color, background, border, and shadow properties include `transition: all 0.4s ease`.

**Theme persistence** — store preference in `localStorage` under key `nidrasoft-ui-theme`.

---

## 2. Complete CSS Variable Reference

### 2.1 Accent Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-lime` | `#D2FE17` | `#8AB400` | Primary accent, CTAs, active states |
| `--color-lime-hover` | `#c0e616` | `#7DA310` | Hover state for lime elements |
| `--color-lime-gradient` | `#ABC928` | `#6B9A00` | Gradient endpoint |
| `--color-lime-text` | `#121212` | `#ffffff` | Text on lime backgrounds |

### 2.2 Background Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-bg-primary` | `#202020` | `#f5f5f7` | Page background |
| `--color-bg-secondary` | `#1a1a1a` | `#ebebed` | Sidebar, secondary surfaces |
| `--color-bg-card` | `rgba(248,248,248,0.03)` | `rgba(255,255,255,0.7)` | Card backgrounds |
| `--color-bg-elevated` | `rgba(248,248,248,0.06)` | `rgba(255,255,255,0.9)` | Elevated surfaces, active states |
| `--color-bg-input` | `rgba(248,248,248,0.04)` | `rgba(0,0,0,0.03)` | Input fields |
| `--color-bg-hover` | `rgba(248,248,248,0.05)` | `rgba(0,0,0,0.04)` | Hover backgrounds |
| `--color-bg-overlay` | `rgba(10,10,10,0.97)` | `rgba(255,255,255,0.97)` | Modal overlays |
| `--color-bg-sidebar` | `#1a1a1a` | `#ffffff` | Sidebar background |

### 2.3 Text Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-text-primary` | `rgba(248,248,248,0.95)` | `rgba(18,18,18,0.95)` | Headings, primary text |
| `--color-text-secondary` | `rgba(248,248,248,0.70)` | `rgba(18,18,18,0.65)` | Body text, descriptions |
| `--color-text-tertiary` | `rgba(248,248,248,0.50)` | `rgba(18,18,18,0.45)` | Captions, labels, placeholders |

### 2.4 Border Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-border-subtle` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.06)` | Dividers, grid lines |
| `--color-border-standard` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.08)` | Card borders, inputs |
| `--color-border-medium` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.10)` | Hover borders |
| `--color-border-strong` | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.18)` | Active borders, focus rings |

### 2.5 Lime-Tinted Borders & Backgrounds

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-border-lime-subtle` | `rgba(210,254,23,0.1)` | `rgba(138,180,0,0.15)` | Icon box borders |
| `--color-border-lime-medium` | `rgba(210,254,23,0.15)` | `rgba(138,180,0,0.25)` | Accent badges, accent buttons |
| `--color-border-lime-strong` | `rgba(210,254,23,0.3)` | `rgba(138,180,0,0.4)` | Focus rings on inputs |
| `--color-bg-lime-subtle` | `rgba(210,254,23,0.06)` | `rgba(138,180,0,0.06)` | Icon containers, active sidebar |
| `--color-bg-lime-medium` | `rgba(210,254,23,0.08)` | `rgba(138,180,0,0.10)` | Accent badges |
| `--color-bg-lime-strong` | `rgba(210,254,23,0.12)` | `rgba(138,180,0,0.15)` | Accent buttons, active options |

### 2.6 Semantic Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-error` | `#ef4444` | `#dc2626` | Error states |
| `--color-warning` | `#ffbd2e` | `#d97706` | Warning states |
| `--color-success` | `#28c840` | `#16a34a` | Success states |
| `--color-info` | `#3b82f6` | `#2563eb` | Info states |

Each semantic color has `-bg` and `-border` variants:
- `--color-error-bg`, `--color-error-border`
- `--color-warning-bg`, `--color-warning-border`
- `--color-success-bg`, `--color-success-border`
- `--color-info-bg`, `--color-info-border`

### 2.7 Shadows

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--shadow-card` | `inset 2px 4px 16px rgba(248,248,248,0.06), 0px 8px 32px rgba(0,0,0,0.2)` | `0px 1px 3px rgba(0,0,0,0.04), 0px 6px 24px rgba(0,0,0,0.06)` | Standard glass cards |
| `--shadow-card-light` | `inset 1px 2px 12px rgba(248,248,248,0.03), 0px 8px 28px rgba(0,0,0,0.12)` | `0px 1px 2px rgba(0,0,0,0.03), 0px 4px 16px rgba(0,0,0,0.04)` | Light/secondary cards |
| `--shadow-card-accent` | `inset 2px 4px 16px rgba(210,254,23,0.04), 0px 16px 48px rgba(0,0,0,0.2)` | `0px 2px 8px rgba(138,180,0,0.08), 0px 12px 36px rgba(0,0,0,0.06)` | Lime accent cards |
| `--shadow-card-hover` | `inset 2px 4px 16px rgba(248,248,248,0.08), 0px 12px 40px rgba(0,0,0,0.28)` | `0px 2px 6px rgba(0,0,0,0.06), 0px 12px 36px rgba(0,0,0,0.1)` | Card hover state |
| `--shadow-btn-primary` | `0 8px 24px rgba(210,254,23,0.3)` | `0 6px 20px rgba(138,180,0,0.25)` | Primary button hover |
| `--shadow-glow-lime` | `0 0 8px rgba(210,254,23,0.6), 0 0 16px rgba(210,254,23,0.3)` | `0 0 6px rgba(138,180,0,0.4), 0 0 12px rgba(138,180,0,0.2)` | Active dots, glowing elements |

### 2.8 Gradients

| Token | Usage |
|-------|-------|
| `--gradient-text` | Applied to headings for subtle fade effect |
| `--gradient-framework` | Large container/framework card backgrounds |
| `--gradient-progress` | Progress bar fills |

### 2.9 Spacing & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Small buttons, tags |
| `--radius-md` | `14px` | Inputs, dropdowns, icon boxes |
| `--radius-lg` | `20px` | Cards, panels |
| `--radius-xl` | `28px` | Mobile cards |
| `--radius-2xl` | `32px` | Standard glass cards |
| `--radius-3xl` | `40px` | Hero cards, large containers |
| `--radius-full` | `100px` | Pills, badges, toggles |
| `--blur-standard` | `blur(50px)` | All glass surfaces |

---

## 3. Typography System

### Fonts
- **Display/Headlines**: `"Host Grotesk", sans-serif` — Bold 700 only, loaded as local font
- **Body**: `"Rubik", sans-serif` — Weights 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale

| Name | Font | Size | Weight | Letter Spacing | Line Height | Usage |
|------|------|------|--------|----------------|-------------|-------|
| Hero | Host Grotesk | 72px | 700 | -0.03em | 1.1 | Landing hero headlines |
| H1 | Host Grotesk | 56px | 700 | -0.03em | 1.15 | Page titles |
| H2 | Host Grotesk | 48px | 700 | -0.02em | 1.15 | Section titles |
| H3 | Host Grotesk | 40px | 700 | -0.02em | 1.2 | Subsection titles |
| H4 | Host Grotesk | 22px | 700 | -0.01em | 1.3 | Card titles |
| Lead | Rubik | 20px | 300 | normal | 1.6 | Section descriptions |
| Body | Rubik | 16px | 400 | normal | 1.6 | Paragraphs |
| Body Small | Rubik | 14px | 400 | normal | 1.5 | Secondary text |
| Caption | Rubik | 12px | 400 | normal | 1.5 | Annotations |
| Label | Rubik | 11px | 600 | 0.06em | normal | Section labels (uppercase) |

### Gradient Text
```css
.gradient-text {
    background-image: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Lime Text
```css
.lime-text {
    color: var(--color-lime);
}
```

---

## 4. Component Patterns

### 4.1 Glass Card (Core Pattern)

Every elevated surface in the system uses this pattern:

```css
.glass-card {
    border-radius: var(--radius-2xl);
    background: var(--color-bg-card);
    border: 1.5px solid var(--color-border-standard);
    box-shadow: var(--shadow-card);
    backdrop-filter: var(--blur-standard);
    transition: all 0.35s ease;
}

/* Hover lift */
.glass-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
}
```

**Variants:**
- **Standard**: Default glass card (above)
- **Light**: Uses `--shadow-card-light`, `--color-border-subtle`, thinner border (1px)
- **Accent**: Uses `--color-bg-lime-subtle` background, `--color-border-lime-medium` border, `--shadow-card-accent`
- **Framework**: Uses `--gradient-framework` background, for grouping nested cards

### 4.2 Button System

```css
/* Primary — Lime CTA */
.btn-primary {
    height: 52px;
    padding: 0 32px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 700;
    color: var(--color-lime-text);
    background: var(--color-lime);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
}
.btn-primary:hover {
    background: var(--color-lime-hover);
    box-shadow: var(--shadow-btn-primary);
}
.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Secondary — Glass */
.btn-secondary {
    height: 52px;
    padding: 0 32px;
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-secondary);
    background: var(--color-bg-card);
    border: 1.5px solid var(--color-border-standard);
    box-shadow: var(--shadow-card-light);
    backdrop-filter: var(--blur-standard);
    cursor: pointer;
    transition: all 0.3s;
}
.btn-secondary:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-elevated);
    border-color: var(--color-border-medium);
}

/* Ghost — Outline */
.btn-ghost {
    height: 52px;
    padding: 0 32px;
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-secondary);
    background: transparent;
    border: 1.5px solid var(--color-border-medium);
    cursor: pointer;
    transition: all 0.3s;
}
.btn-ghost:hover {
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
}

/* Accent — Lime Outline */
.btn-accent {
    height: 40px;
    padding: 0 20px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 600;
    color: var(--color-lime);
    background: var(--color-bg-lime-strong);
    border: 1px solid var(--color-border-lime-medium);
    cursor: pointer;
    transition: all 0.2s;
}

/* Small — Tag-like */
.btn-small {
    padding: 5px 16px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-lime);
    background: var(--color-bg-lime-strong);
    border: 1px solid var(--color-border-lime-medium);
    cursor: pointer;
}
```

### 4.3 Input System

```css
.input {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    border-radius: var(--radius-md);
    background: var(--color-bg-input);
    border: 1px solid var(--color-border-standard);
    font-family: inherit;
    font-size: 14px;
    color: var(--color-text-primary);
    transition: all 0.25s;
}
.input:focus {
    outline: none;
    border-color: var(--color-border-lime-strong);
    background: var(--color-bg-elevated);
}
.input::placeholder {
    color: var(--color-text-tertiary);
    opacity: 0.5;
}
```

### 4.4 Badge System

```css
/* Section Badge */
.badge-section {
    display: inline-block;
    padding: 6px 16px;
    border-radius: var(--radius-full);
    background: var(--color-bg-hover);
    border: 1.5px solid var(--color-border-medium);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-tertiary);
}

/* Accent Badge */
.badge-accent {
    display: inline-block;
    padding: 6px 18px;
    border-radius: var(--radius-full);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-lime);
    background: var(--color-bg-lime-medium);
    border: 1px solid var(--color-border-lime-medium);
}
```

### 4.5 Toggle Switch

```css
.toggle {
    position: relative;
    width: 48px;
    height: 28px;
    border-radius: 14px;
    border: none;
    background: var(--toggle-track-off); /* rgba(248,248,248,0.1) dark / rgba(0,0,0,0.12) light */
    cursor: pointer;
    transition: background 0.3s;
}
.toggle.on {
    background: var(--color-lime);
}
.toggle-knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}
.toggle.on .toggle-knob {
    transform: translateX(20px);
}
```

### 4.6 Alert System

```css
.alert {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 20px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-text-secondary);
}
.alert-success { background: var(--color-success-bg); border: 1px solid var(--color-success-border); }
.alert-error   { background: var(--color-error-bg);   border: 1px solid var(--color-error-border); }
.alert-warning { background: var(--color-warning-bg); border: 1px solid var(--color-warning-border); }
.alert-info    { background: var(--color-info-bg);    border: 1px solid var(--color-info-border); }
```

### 4.7 Icon Container

```css
.icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    background: var(--color-bg-lime-subtle);
    border: 1px solid var(--color-border-lime-subtle);
    transition: all 0.3s;
}
```

### 4.8 Status Dots

```css
.dot-active  { background: var(--color-lime);    box-shadow: var(--shadow-glow-lime); }
.dot-warning { background: var(--color-warning); box-shadow: 0 0 8px rgba(255,189,46,0.5); }
.dot-error   { background: var(--color-error);   box-shadow: 0 0 8px rgba(239,68,68,0.5); }
```

### 4.9 Progress Bar

```css
.progress-bar {
    height: 8px;
    border-radius: 8px;
    background: var(--color-bg-input);
    overflow: hidden;
}
.progress-fill {
    height: 100%;
    border-radius: 8px;
    background: var(--gradient-progress);
    box-shadow: 0 0 12px rgba(210,254,23,0.3);
}
```

### 4.10 Tabs

```css
.tab {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: var(--radius-full);
    border: 1.5px solid var(--color-border-standard);
    background: var(--color-bg-card);
    backdrop-filter: var(--blur-standard);
    font-size: 13px;
    font-weight: 600;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.3s;
}
.tab:hover {
    background: var(--color-bg-hover);
    border-color: var(--color-border-medium);
}
.tab.active {
    background: var(--color-bg-elevated);
    border-color: var(--color-border-strong);
    box-shadow: var(--shadow-card);
    color: var(--color-text-primary);
}
```

### 4.11 Accordion

```css
.accordion-item {
    border-radius: var(--radius-lg);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-standard);
    overflow: hidden;
    transition: all 0.3s;
}
.accordion-item.open {
    border-color: var(--color-border-lime-subtle);
}
.accordion-trigger {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 24px;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text-primary);
    cursor: pointer;
    text-align: left;
}
```

---

## 5. Icon System

- **Library**: `iconsax-react`
- **Default variant**: `"Bulk"` (always)
- **Default color**: `var(--color-lime)`
- **Sizes**: 18px (small/inline), 24px (default), 32px (medium), 48px (large)

```tsx
import { Calendar } from "iconsax-react";

// Standard usage
<Calendar size={24} variant="Bulk" color="var(--color-lime)" />

// Inside icon container
<div className="icon-box">
    <Calendar size={24} variant="Bulk" color="var(--color-lime)" />
</div>
```

---

## 6. Animation Patterns

### Framer Motion Defaults
```tsx
// Fade in up
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

// Stagger children
const staggerContainer = {
    animate: { transition: { staggerChildren: 0.08 } }
};

// Scale in
const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
};
```

### CSS Transitions
- **Fast**: `0.2s` — hover states, focus rings
- **Normal**: `0.3s` — button interactions, tab switches
- **Slow**: `0.4s` — theme transitions, card lifts, page transitions
- **Easing**: `ease` for most, `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for entrances

### Live Pulse Animation
```css
@keyframes live-pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(210,254,23,0.4); }
    50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(210,254,23,0); }
}
```

---

## 7. Responsive Breakpoints

| Name | Max Width | Usage |
|------|-----------|-------|
| XL | 1519px | Large desktop adjustments |
| Desktop | 1259px | Standard desktop |
| Tablet | 1023px | Tablet, sidebar collapses |
| Mobile | 767px | Mobile, single column |
| Small | 474px | Small phones |

---

## 8. Grid Lines (Decorative)

Sections use decorative vertical and horizontal lines:

```css
.grid-lines {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}
.grid-lines span {
    width: 1px;
    height: 100%;
    background: var(--color-border-subtle);
}
.grid-lines::before,
.grid-lines::after {
    content: "";
    position: absolute;
    left: -100vw;
    right: -100vw;
    height: 1px;
    background: var(--color-border-subtle);
    mask-image: var(--gradient-line-mask);
}
```

---

## 9. Key Rules

1. **NEVER hardcode colors** — always use `var(--color-*)` tokens
2. **NEVER use Tailwind** — use CSS Modules + CSS custom properties
3. **ALL cards use glass morphism** — backdrop-filter, subtle border, inset shadow (dark) or drop shadow (light)
4. **ALL icons use Iconsax "Bulk" variant** with `var(--color-lime)` color
5. **ALL interactive elements have transitions** — minimum `transition: all 0.3s`
6. **Theme switching animates smoothly** — 0.4s transition on all themed properties
7. **Mobile-first responsive** — sidebar collapses, grids stack, font sizes reduce
8. **Each component is self-contained** — own folder with .tsx, .module.css, index.ts
9. **Display font (Host Grotesk) for headings only** — never for body text
10. **Body font (Rubik) for everything else** — body, buttons, labels, inputs
