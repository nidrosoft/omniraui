# Omnira Design System — Dark Mode

> A comprehensive design system documentation for the Omnira landing page. This document captures every visual element, color, typography, component pattern, and animation used in the dark mode theme.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Grid Lines System](#grid-lines-system)
5. [Card System](#card-system)
6. [Button System](#button-system)
7. [Badge & Label System](#badge--label-system)
8. [Form Elements](#form-elements)
9. [Icon System](#icon-system)
10. [Animations](#animations)
11. [Shadows & Effects](#shadows--effects)
12. [Component Patterns](#component-patterns)

---

## Color Palette

### Core Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Lime Green (Primary Accent)** | `#D2FE17` | `rgb(210, 254, 23)` | Primary accent, CTAs, highlights, active states |
| **Lime Green Hover** | `#c0e616` | `rgb(192, 230, 22)` | Hover state for lime buttons |
| **Lime Green Gradient End** | `#ABC928` | `rgb(171, 201, 40)` | Gradient accent text |

### Background Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Background Primary** | `#202020` | `rgb(32, 32, 32)` | Main body background |
| **Background Dark** | `#121212` | `rgb(18, 18, 18)` | Darker elements, overlays |
| **Background Card** | `#282828` | `rgb(40, 40, 40)` | Card backgrounds, buttons |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **White (n1)** | `#ffffff` | `rgb(255, 255, 255)` | Pure white (rare) |
| **Off-White (n2)** | `#f8f8f8` | `rgb(248, 248, 248)` | Text, borders base |
| **Gray (n3)** | `#282828` | `rgb(40, 40, 40)` | Card backgrounds |
| **Dark (n4)** | `#121212` | `rgb(18, 18, 18)` | Darkest elements |

### Text Colors

| Name | Value | Usage |
|------|-------|-------|
| **Text Primary** | `rgba(248, 248, 248, 0.95)` | Headlines, important text |
| **Text Secondary** | `rgba(248, 248, 248, 0.70)` | Body text, descriptions |
| **Text Tertiary** | `rgba(248, 248, 248, 0.50)` | Labels, captions, muted text |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success/Active** | `#D2FE17` | Success states, active indicators |
| **Error/Danger** | `#ef4444` | Error states, warnings |
| **Warning** | `#ffbd2e` | Caution indicators |
| **Info** | `#28c840` | Info indicators |

### Lime Green Opacity Scale (for backgrounds/borders)

```css
/* Backgrounds */
rgba(210, 254, 23, 0.025)  /* Very subtle bg */
rgba(210, 254, 23, 0.03)   /* Subtle bg */
rgba(210, 254, 23, 0.04)   /* Light bg */
rgba(210, 254, 23, 0.06)   /* Icon backgrounds */
rgba(210, 254, 23, 0.08)   /* Badge backgrounds */
rgba(210, 254, 23, 0.10)   /* Hover backgrounds */
rgba(210, 254, 23, 0.12)   /* Active backgrounds */
rgba(210, 254, 23, 0.15)   /* Strong backgrounds */

/* Borders */
rgba(210, 254, 23, 0.1)    /* Subtle border */
rgba(210, 254, 23, 0.12)   /* Light border */
rgba(210, 254, 23, 0.15)   /* Medium border */
rgba(210, 254, 23, 0.2)    /* Active border */
rgba(210, 254, 23, 0.3)    /* Strong border */
```

### White/Gray Opacity Scale (for backgrounds/borders)

```css
/* Backgrounds */
rgba(248, 248, 248, 0.01)  /* Barely visible */
rgba(248, 248, 248, 0.02)  /* Very subtle */
rgba(248, 248, 248, 0.03)  /* Subtle card bg */
rgba(248, 248, 248, 0.04)  /* Input backgrounds */
rgba(248, 248, 248, 0.05)  /* Hover backgrounds */
rgba(248, 248, 248, 0.06)  /* Active backgrounds */
rgba(248, 248, 248, 0.08)  /* Strong backgrounds */
rgba(248, 248, 248, 0.12)  /* Very strong backgrounds */

/* Borders */
rgba(255, 255, 255, 0.04)  /* Very subtle border */
rgba(255, 255, 255, 0.05)  /* Subtle border */
rgba(255, 255, 255, 0.06)  /* Standard border */
rgba(255, 255, 255, 0.08)  /* Medium border */
rgba(255, 255, 255, 0.10)  /* Strong border */
rgba(255, 255, 255, 0.15)  /* Very strong border */
rgba(255, 255, 255, 0.25)  /* Highlight border */
```

---

## Typography

### Font Families

```css
/* Primary Font - Body Text */
font-family: "Rubik", sans-serif;

/* Display Font - Headlines */
font-family: "Host Grotesk", sans-serif;
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | `300` | Info text, large descriptions |
| Regular | `400` | Body text |
| Medium | `500` | Subtitles, navigation |
| Semi-Bold | `600` | Labels, buttons, emphasis |
| Bold | `700` | Headlines, titles |

### Type Scale

#### Headlines (Host Grotesk)

```css
/* H1 - Hero */
font-size: 112px;
line-height: 1.1;
font-weight: 700;
letter-spacing: -0.03em;

/* H1 - Tablet */
font-size: 68px;

/* H1 - Mobile */
font-size: 52px;

/* H1 - Small Mobile */
font-size: 40px;

/* H2 - Section Titles */
font-size: 48px;
line-height: 1.15;
font-weight: 700;
letter-spacing: -0.02em;

/* H2 - Mobile */
font-size: 32px;
line-height: 1.2;

/* H3 - Subsection Titles */
font-size: 40px;
line-height: 1.2;
font-weight: 700;
letter-spacing: -0.02em;

/* H3 - Mobile */
font-size: 32px;

/* Card Titles */
font-size: 22px;
line-height: 1.3;
font-weight: 700;
letter-spacing: -0.01em;

/* Small Titles */
font-size: 18px;
line-height: 1.2;
font-weight: 700;
```

#### Body Text (Rubik)

```css
/* Info/Lead Text */
font-size: 20px;
line-height: 1.6;
font-weight: 300;

/* Base Regular */
font-size: 16px;
line-height: 1.5;
font-weight: 400;

/* Base Medium */
font-size: 16px;
line-height: 1.5;
font-weight: 500;

/* Base 2 Regular */
font-size: 14px;
line-height: 1.4;
font-weight: 400;

/* Base 2 Medium */
font-size: 14px;
line-height: 1.4;
font-weight: 500;

/* Base 2 Semi-Bold */
font-size: 14px;
line-height: 1.4;
font-weight: 600;

/* Caption Regular */
font-size: 12px;
line-height: 1.33;
font-weight: 400;

/* Caption Semi-Bold */
font-size: 12px;
line-height: 1.33;
font-weight: 600;

/* Small */
font-size: 10px;
line-height: 1.2;
font-weight: 400;

/* Hairline/Labels */
font-size: 12px;
line-height: 1.65;
font-weight: 500;
```

### Gradient Text Effect

```css
.gradient-text {
  background-image: linear-gradient(93deg, rgba(248, 248, 248, 0.9), rgba(248, 248, 248, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Lime Accent Text */
.lime-gradient-text {
  background: linear-gradient(120deg, #D2FE17 0%, #ABC928 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Spacing & Layout

### Container

```css
.container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 40px;
}

/* XL Breakpoint */
@media (max-width: 1519px) {
  .container {
    max-width: 1200px;
  }
}

/* Tablet */
@media (max-width: 1023px) {
  .container {
    padding: 0 32px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    padding: 0 24px;
  }
}
```

### Section Spacing

```css
.section {
  margin-bottom: 160px;
}

/* Desktop */
@media (max-width: 1259px) {
  .section { margin-bottom: 128px; }
}

/* Tablet */
@media (max-width: 1023px) {
  .section { margin-bottom: 96px; }
}

/* Mobile */
@media (max-width: 767px) {
  .section { margin-bottom: 64px; }
}
```

### Breakpoints

| Name | Max Width | Usage |
|------|-----------|-------|
| XL | 1519px | Large desktop adjustments |
| W | 1419px | Wide desktop |
| D | 1259px | Standard desktop |
| T | 1023px | Tablet |
| M | 767px | Mobile |
| S | 474px | Small mobile |

---

## Grid Lines System

The decorative grid lines create visual structure and depth. They consist of:
- **Vertical lines** on left and right edges
- **Horizontal lines** at top and bottom of sections

### Implementation

```css
.lines {
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

/* Vertical Lines */
.lines span {
  width: 1px;
  height: 100%;
  background: rgba(248, 248, 248, 0.05);
}

/* Horizontal Line - Top */
.lines::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100vw;
  right: -100vw;
  height: 1px;
  background: rgba(248, 248, 248, 0.05);
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.15) 20%,
    black 35%,
    black 65%,
    rgba(0, 0, 0, 0.15) 80%,
    transparent
  );
  pointer-events: none;
}

/* Horizontal Line - Bottom */
.lines::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -100vw;
  right: -100vw;
  height: 1px;
  background: rgba(248, 248, 248, 0.05);
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.15) 20%,
    black 35%,
    black 65%,
    rgba(0, 0, 0, 0.15) 80%,
    transparent
  );
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1023px) {
  .lines { left: 32px; right: 32px; }
}

@media (max-width: 767px) {
  .lines { left: 24px; right: 24px; }
}
```

---

## Card System

### Standard Glass Card

The primary card style used throughout the app.

```css
.card {
  position: relative;
  border-radius: 40px;
  background: rgba(248, 248, 248, 0.03);
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  box-shadow: 
    inset 2px 4px 16px rgba(248, 248, 248, 0.06),
    0px 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
  transition: transform 0.4s ease;
}

.card:hover {
  transform: translateY(-4px);
}

/* Mobile */
@media (max-width: 767px) {
  .card {
    border-radius: 28px;
  }
}
```

### Card Variants

#### Light Card (Subtle)

```css
.card-light {
  border-radius: 28px;
  background: rgba(248, 248, 248, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 
    inset 1px 2px 12px rgba(248, 248, 248, 0.03),
    0px 8px 28px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(50px);
}
```

#### Accent Card (Lime Border)

```css
.card-accent {
  border-radius: 32px;
  background: rgba(210, 254, 23, 0.025);
  border: 1.5px solid rgba(210, 254, 23, 0.12);
  box-shadow: 
    inset 2px 4px 16px rgba(210, 254, 23, 0.04),
    0px 16px 48px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
}
```

#### Framework/Container Card (Gradient Background)

```css
.card-framework {
  border-radius: 48px;
  padding: 60px;
  background: linear-gradient(
    124deg,
    rgba(248, 248, 248, 0.04) 0%,
    rgba(248, 248, 248, 0.01) 46.5%
  ),
  linear-gradient(
    180deg,
    rgba(248, 248, 248, 0.03) 0%,
    rgba(248, 248, 248, 0.00) 100%
  );
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.2);
}

/* Mobile */
@media (max-width: 767px) {
  .card-framework {
    padding: 32px 20px;
    border-radius: 32px;
  }
}
```

#### Inner/Nested Card (Tier Cards)

```css
.card-inner {
  border-radius: 28px;
  background: rgba(248, 248, 248, 0.03);
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  box-shadow: 
    inset 2px 4px 16px rgba(248, 248, 248, 0.04),
    0px 4px 24px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(50px);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-inner:hover {
  transform: translateY(-2px);
  box-shadow: 
    inset 2px 4px 16px rgba(248, 248, 248, 0.06),
    0px 8px 32px rgba(0, 0, 0, 0.25);
}
```

### Border Radius Scale

| Size | Value | Usage |
|------|-------|-------|
| XS | `12px` | Small elements, nav links |
| SM | `14px` | Inputs, small cards |
| MD | `16px` | Buttons, badges |
| LG | `20px` | Medium cards |
| XL | `24px` | Cards |
| 2XL | `28px` | Large cards (mobile) |
| 3XL | `32px` | Buttons, badges |
| 4XL | `40px` | Main cards |
| 5XL | `48px` | Framework containers |
| Full | `100px` | Pills, badges |

---

## Button System

### Primary Button (Lime CTA)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 0 32px;
  border-radius: 16px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: #121212;
  background: #D2FE17;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #c0e616;
  box-shadow: 0 8px 24px rgba(210, 254, 23, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Secondary Button (Glass)

```css
.btn-secondary {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0 32px;
  overflow: hidden;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: rgba(248, 248, 248, 0.7);
  transition: all 0.3s;
}

.btn-secondary::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 32px;
  background: rgba(40, 40, 40, 0.7);
  box-shadow: inset 2px 4px 16px rgba(248, 248, 248, 0.06);
  backdrop-filter: blur(50px);
}

.btn-secondary::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: 32px;
  border: 1px solid rgba(248, 248, 248, 0.25);
  mask-image: linear-gradient(170deg, black, transparent 50%);
  pointer-events: none;
  opacity: 0.25;
}

.btn-secondary span {
  position: relative;
  z-index: 4;
}

.btn-secondary:hover {
  color: rgba(248, 248, 248, 0.95);
}
```

### Ghost Button (Outline)

```css
.btn-ghost {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0 32px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(248, 248, 248, 0.7);
  background: transparent;
  border: 1.5px solid rgba(248, 248, 248, 0.15);
  transition: all 0.3s;
}

.btn-ghost:hover {
  border-color: rgba(248, 248, 248, 0.3);
  color: rgba(248, 248, 248, 0.95);
}
```

### Accent Button (Lime Outline)

```css
.btn-accent {
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border-radius: 12px;
  background: rgba(210, 254, 23, 0.12);
  color: #D2FE17;
  border: 1px solid rgba(210, 254, 23, 0.15);
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-accent:hover {
  background: rgba(210, 254, 23, 0.2);
  box-shadow: 0 4px 12px rgba(210, 254, 23, 0.15);
}
```

### Button with Rotating Animation (Label/Badge Button)

This creates the animated border effect seen on badges.

```css
.btn-animated {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 2px 16px 0;
  overflow: hidden;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.65;
  text-transform: uppercase;
  color: rgba(248, 248, 248, 0.5);
}

.btn-animated::before {
  content: "";
  position: absolute;
  inset: 1.5px;
  z-index: 3;
  background: #202020;
  border-radius: 16px;
}

.btn-animated::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: 16px;
  border: 1.5px solid rgba(248, 248, 248, 0.05);
  mask-image: linear-gradient(170deg, black, transparent 50%);
  pointer-events: none;
  opacity: 0.25;
}

.btn-animated .title {
  position: relative;
  z-index: 4;
  opacity: 0.8;
}

/* Animated circle element */
.btn-animated .circle {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  z-index: 1;
  width: 200px;
  height: 200px;
}

.btn-animated .circle::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg at 50% 51%,
    rgba(255, 255, 255, 0.01) 330deg,
    rgba(255, 255, 255, 1) 360deg
  );
  filter: blur(15px);
  animation: button-circle 3.6s linear infinite;
}

@keyframes button-circle {
  0% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-30px) rotate(90deg); }
  50% { transform: translateX(0) rotate(180deg); }
  75% { transform: translateX(30px) rotate(270deg); }
  100% { transform: translateX(0) rotate(360deg); }
}
```

---

## Badge & Label System

### Section Label Badge

```css
.label {
  display: inline-block;
  position: relative;
  margin-bottom: 16px;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(248, 248, 248, 0.5);
  background: rgba(248, 248, 248, 0.05);
  border: 1.5px solid rgba(248, 248, 248, 0.08);
}

.label span {
  position: relative;
  z-index: 2;
}
```

### Accent Badge (Lime)

```css
.badge-accent {
  display: inline-flex;
  padding: 6px 18px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #D2FE17;
  background: rgba(210, 254, 23, 0.08);
  border: 1px solid rgba(210, 254, 23, 0.15);
}
```

### Status Dot

```css
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Green/Active */
.status-dot-active {
  background: #D2FE17;
  box-shadow: 0 0 8px rgba(210, 254, 23, 0.6), 0 0 16px rgba(210, 254, 23, 0.3);
}

/* Yellow/Warning */
.status-dot-warning {
  background: #ffbd2e;
  box-shadow: 0 0 8px rgba(255, 189, 46, 0.5);
}

/* Red/Error */
.status-dot-error {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5), 0 0 16px rgba(239, 68, 68, 0.25);
}
```

### Live Indicator Dot

```css
.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D2FE17;
  animation: livePulse 1.5s infinite;
}

@keyframes livePulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(210, 254, 23, 0.4);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 0 6px rgba(210, 254, 23, 0);
  }
}
```

---

## Form Elements

### Text Input

```css
.input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 14px;
  background: rgba(248, 248, 248, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: inherit;
  font-size: 14px;
  color: rgba(248, 248, 248, 0.95);
  transition: border-color 0.2s, background 0.2s;
  -webkit-appearance: none;
  appearance: none;
}

.input:focus {
  outline: none;
  border-color: rgba(210, 254, 23, 0.3);
  background: rgba(248, 248, 248, 0.06);
}

.input::placeholder {
  color: rgba(248, 248, 248, 0.2);
}
```

### Large Input

```css
.input-large {
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.04em;
}

/* Mobile */
@media (max-width: 767px) {
  .input-large {
    height: 52px;
    font-size: 18px;
  }
}
```

### Select Dropdown

```css
.select {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  padding-right: 40px;
  border-radius: 14px;
  background: rgba(248, 248, 248, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: inherit;
  font-size: 14px;
  color: rgba(248, 248, 248, 0.7);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(248,248,248,0.3)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
}

.select:focus {
  outline: none;
  border-color: rgba(210, 254, 23, 0.3);
  background-color: rgba(248, 248, 248, 0.06);
}

.select option {
  background: #282828;
  color: rgba(248, 248, 248, 0.95);
}
```

### Form Label

```css
.form-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(248, 248, 248, 0.5);
  opacity: 0.5;
  margin-bottom: 8px;
}
```

### Toggle Switch

```css
.toggle {
  position: relative;
  width: 48px;
  height: 28px;
  min-width: 48px;
  border-radius: 14px;
  border: none;
  background: rgba(248, 248, 248, 0.1);
  cursor: pointer;
  transition: background 0.3s;
}

.toggle.active {
  background: #D2FE17;
}

.toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  transition: transform 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.toggle.active .toggle-knob {
  transform: translateX(20px);
}
```

### Size/Option Buttons

```css
.size-btn {
  flex: 1;
  min-width: 100px;
  height: 48px;
  border-radius: 14px;
  background: rgba(248, 248, 248, 0.04);
  border: 1.5px solid rgba(248, 248, 248, 0.07);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: rgba(248, 248, 248, 0.7);
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s;
}

.size-btn:hover {
  border-color: rgba(248, 248, 248, 0.15);
  opacity: 1;
}

.size-btn.active {
  border-color: #D2FE17;
  background: rgba(210, 254, 23, 0.08);
  color: #D2FE17;
  opacity: 1;
}
```

---

## Icon System

### Icon Library

**Iconsax React** - Using the "Bulk" variant for filled icons with accent color.

```bash
npm install iconsax-react
```

### Icon Usage

```tsx
import { Calendar, DollarCircle, CallCalling, Health, Chart } from "iconsax-react";

// Standard usage with lime accent
<Calendar size={24} variant="Bulk" color="#D2FE17" />

// Sizes
// Small: 18px
// Medium: 24px
// Large: 32px
// XL: 48px
```

### Icon Container

```css
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(210, 254, 23, 0.06);
  border: 1px solid rgba(210, 254, 23, 0.1);
}

/* Large */
.icon-container-lg {
  width: 64px;
  height: 64px;
  border-radius: 16px;
}

/* XL */
.icon-container-xl {
  width: 72px;
  height: 72px;
  border-radius: 20px;
}
```

### Window Dots (macOS Style)

```css
.window-dots {
  display: flex;
  gap: 8px;
}

.window-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(248, 248, 248, 0.12);
}

.window-dots span:nth-child(1) { background: #ff5f57; }
.window-dots span:nth-child(2) { background: #ffbd2e; }
.window-dots span:nth-child(3) { background: #28c840; }
```

---

## Animations

### Framer Motion Variants

```tsx
// Fade In with Direction
const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Scale In
const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Stagger Children
const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
```

### CSS Keyframe Animations

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.06);
    opacity: 0.85;
  }
}

/* Avatar Pulse Ring */
@keyframes avatarPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

/* Button Circle Rotation */
@keyframes button-circle {
  0% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-30px) rotate(90deg); }
  50% { transform: translateX(0) rotate(180deg); }
  75% { transform: translateX(30px) rotate(270deg); }
  100% { transform: translateX(0) rotate(360deg); }
}

/* Live Pulse */
@keyframes livePulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(210, 254, 23, 0.4);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 0 6px rgba(210, 254, 23, 0);
  }
}
```

### Easing Functions

```css
/* Standard ease */
ease: [0.25, 0.1, 0.25, 1]

/* Smooth out */
ease: [0.16, 1, 0.3, 1]

/* Quick */
ease: ease-out

/* Linear */
ease: linear
```

---

## Shadows & Effects

### Box Shadows

```css
/* Card Shadow - Standard */
box-shadow: 
  inset 2px 4px 16px rgba(248, 248, 248, 0.06),
  0px 8px 32px rgba(0, 0, 0, 0.2);

/* Card Shadow - Light */
box-shadow: 
  inset 1px 2px 12px rgba(248, 248, 248, 0.03),
  0px 8px 28px rgba(0, 0, 0, 0.12);

/* Card Shadow - Heavy */
box-shadow: 
  inset 2px 4px 16px rgba(248, 248, 248, 0.06),
  0px 16px 48px rgba(0, 0, 0, 0.2);

/* Button Hover Shadow */
box-shadow: 0 8px 24px rgba(210, 254, 23, 0.3);

/* Header Overlay Shadow */
box-shadow: 
  inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06),
  0px 24px 24px -16px rgba(5, 5, 5, 0.09),
  0px 6px 13px 0px rgba(5, 5, 5, 0.10),
  0px 6px 4px -4px rgba(5, 5, 5, 0.10),
  0px 5px 1.5px -4px rgba(5, 5, 5, 0.25);

/* Tab Active Shadow */
box-shadow: 
  inset 2px 4px 16px rgba(248, 248, 248, 0.06),
  0px 4px 24px rgba(0, 0, 0, 0.2);

/* Glow Shadow - Lime */
box-shadow: 0 0 8px rgba(210, 254, 23, 0.6), 0 0 16px rgba(210, 254, 23, 0.3);

/* Demo Container Shadow */
box-shadow: 
  0 32px 80px rgba(0, 0, 0, 0.4),
  inset 0 1px 0 rgba(255, 255, 255, 0.04);
```

### Backdrop Filter

```css
/* Standard blur */
backdrop-filter: blur(50px);

/* Light blur */
backdrop-filter: blur(40px);

/* Header blur */
backdrop-filter: blur(50px);
```

### Mask Images

```css
/* Horizontal fade gradient */
mask-image: linear-gradient(
  to right,
  transparent,
  rgba(0, 0, 0, 0.15) 20%,
  black 35%,
  black 65%,
  rgba(0, 0, 0, 0.15) 80%,
  transparent
);

/* Border highlight mask */
mask-image: linear-gradient(170deg, black, transparent 50%);

/* Vertical fade */
mask-image: linear-gradient(to bottom, transparent, black 50%, transparent 100%);
```

---

## Component Patterns

### Tab Navigation

```css
.tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 32px;
  border: 1.5px solid rgba(248, 248, 248, 0.06);
  background: rgba(248, 248, 248, 0.02);
  backdrop-filter: blur(50px);
  cursor: pointer;
  transition: all 0.3s;
}

.tab:hover {
  background: rgba(248, 248, 248, 0.05);
  border-color: rgba(248, 248, 248, 0.1);
}

.tab.active {
  background: rgba(248, 248, 248, 0.08);
  border-color: rgba(248, 248, 248, 0.15);
  box-shadow: 
    inset 2px 4px 16px rgba(248, 248, 248, 0.06),
    0px 4px 24px rgba(0, 0, 0, 0.2);
}

.tab-icon {
  display: flex;
  align-items: center;
  color: rgba(248, 248, 248, 0.5);
}

.tab-name {
  font-size: 13px;
  font-weight: 600;
  color: rgba(248, 248, 248, 0.7);
}
```

### Progress Bar

```css
.progress-bar {
  height: 8px;
  border-radius: 8px;
  background: rgba(248, 248, 248, 0.06);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #D2FE17, #e5ff54);
  transition: width 0.3s ease;
  box-shadow: 0 0 12px rgba(210, 254, 23, 0.4);
}
```

### Capability List Item

```css
.capability {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(248, 248, 248, 0.06);
}

.capability:first-child {
  border-top: 1px solid rgba(248, 248, 248, 0.06);
}

.capability-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D2FE17;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(210, 254, 23, 0.6), 0 0 16px rgba(210, 254, 23, 0.3);
}

.capability span {
  font-size: 15px;
  font-weight: 500;
  color: rgba(248, 248, 248, 0.7);
  opacity: 0.8;
}
```

### Section Header Pattern

```css
.section-head {
  position: relative;
  z-index: 2;
  max-width: 640px;
  margin: 0 auto 64px;
  text-align: center;
}

@media (max-width: 767px) {
  .section-head {
    margin-bottom: 40px;
  }
}
```

### Tool/Feature Row

```css
.tool-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(248, 248, 248, 0.04);
}

.tool-name {
  font-size: 14px;
  line-height: 1.4;
  color: rgba(248, 248, 248, 0.5);
  opacity: 0.7;
}

.tool-cost {
  font-family: "Host Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: rgba(248, 248, 248, 0.7);
  opacity: 0.8;
  white-space: nowrap;
  flex-shrink: 0;
}
```

---

## Quick Reference

### CSS Custom Properties (Recommended Setup)

```css
:root {
  /* Colors */
  --color-lime: #D2FE17;
  --color-lime-hover: #c0e616;
  --color-lime-gradient: #ABC928;
  
  --color-bg-primary: #202020;
  --color-bg-dark: #121212;
  --color-bg-card: #282828;
  
  --color-text-primary: rgba(248, 248, 248, 0.95);
  --color-text-secondary: rgba(248, 248, 248, 0.70);
  --color-text-tertiary: rgba(248, 248, 248, 0.50);
  
  --color-error: #ef4444;
  --color-warning: #ffbd2e;
  --color-success: #28c840;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-standard: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.15);
  
  /* Shadows */
  --shadow-card: inset 2px 4px 16px rgba(248, 248, 248, 0.06), 0px 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-button-hover: 0 8px 24px rgba(210, 254, 23, 0.3);
  
  /* Radius */
  --radius-sm: 14px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-2xl: 40px;
  --radius-full: 100px;
  
  /* Fonts */
  --font-body: "Rubik", sans-serif;
  --font-display: "Host Grotesk", sans-serif;
  
  /* Transitions */
  --transition-fast: 0.2s;
  --transition-normal: 0.3s;
  --transition-slow: 0.4s;
  
  /* Blur */
  --blur-standard: blur(50px);
}
```

---

## Usage Notes

1. **Always use the glass card pattern** for elevated content
2. **Lime green (#D2FE17)** is the primary accent - use sparingly for CTAs and highlights
3. **Maintain consistent border radius** - 40px for main cards, 28px on mobile
4. **Use backdrop-filter: blur(50px)** on all glass elements
5. **Grid lines** should be present on all major sections
6. **Animations** should be subtle and use the standard easing
7. **Icons** should use Iconsax "Bulk" variant with lime color
8. **Text hierarchy** - Host Grotesk for headlines, Rubik for body

---

*Last updated: February 2026*
*Version: 1.0.0*
