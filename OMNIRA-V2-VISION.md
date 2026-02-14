# Omnira UI — Vision 2.0 Roadmap

> This document outlines the major features and direction for Omnira UI v2.0.
> These features will be developed after the full component library is complete (v1.5).

---

## 1. AI Component Builder

**Priority:** High
**Status:** Planned

A chat-powered interface embedded directly on the Omnira UI docs site. Users describe what they need in natural language, and the system generates production-ready components using Omnira UI primitives.

**How it works:**
- User types: "I need a pricing card with monthly/yearly toggle and a highlighted plan"
- The AI generates a complete React component using Omnira UI's Button, Card, Badge, Toggle, etc.
- Output uses CSS Modules + CSS custom properties — fully theme-aware from day one
- Users can copy the generated code or refine it with follow-up prompts

**Why it's unique:**
- No major component library offers this natively on their docs site
- Bridges the gap between design intent and implementation
- Reduces time-to-build from hours to seconds

---

## 2. Live Theme Playground Page

**Priority:** High
**Status:** Planned

A dedicated full-page showroom where ALL components render side-by-side in a responsive grid. The configurator panel controls everything at once, giving users a bird's-eye view of their entire design system before committing.

**Features:**
- Grid layout showing every component category (buttons, inputs, cards, modals, tables, etc.)
- Real-time updates as the user changes accent color, font, radius, gray palette
- Export button generates the full CSS override file
- Shareable URL with encoded theme settings (e.g., `?accent=blue&font=satoshi&radius=small`)
- Screenshot/export of the full playground for design reviews

**Why it's unique:**
- Material UI and Ant Design don't offer a unified preview of all components under one theme
- Designers and developers can validate their design system in one glance

---

## 3. Copy-as-Framework (Multi-Framework Support)

**Priority:** High
**Status:** Planned

Allow users to copy component code in multiple framework syntaxes: React, Vue, and Svelte.

**Implementation approach:**
- Each component has a canonical React implementation (already built)
- A transpilation layer converts React components to Vue SFC and Svelte syntax
- The docs site shows a framework toggle on every code block
- CLI (`npx omnira-ui init`) detects the user's framework and scaffolds accordingly

**Phases:**
1. React (current — complete)
2. Vue 3 (Composition API + `<script setup>`)
3. Svelte 5 (runes syntax)

**Why it's unique:**
- Most libraries lock you into one framework
- Even starting with React + Vue covers ~85% of the frontend market

---

## 4. Dark/Light Preview Split

**Priority:** Medium
**Status:** Planned

A toggle on the docs site that renders components in dark AND light mode simultaneously, side by side.

**Features:**
- Split-screen view: left = dark, right = light
- Both sides respond to configurator changes in real time
- Useful for checking contrast, readability, and visual balance
- Can be toggled on/off per component preview

**Why it's unique:**
- Designers need to validate both themes — currently they toggle back and forth
- This eliminates that friction entirely

---

## 5. Animation Presets

**Priority:** Medium
**Status:** Planned

A global animation style selector that affects all component transitions, hover states, and entrance animations.

**Preset options:**
- **None** — No animations, instant state changes
- **Subtle** — Minimal, professional transitions (current default)
- **Smooth** — Slightly more pronounced easing and duration
- **Bouncy** — Playful spring physics (Framer Motion spring configs)
- **Dramatic** — Bold entrance animations, scale effects

**Implementation:**
- CSS custom properties for duration and easing: `--anim-duration`, `--anim-easing`
- Framer Motion spring presets exposed via context
- Added to the configurator panel as a new section
- Exported in the Copy Config output

**Why it's unique:**
- No component library lets users globally control animation personality
- Matches the brand feel — a fintech app wants "subtle", a gaming app wants "bouncy"

---

## 6. Figma Token Sync

**Priority:** Medium
**Status:** Planned

Export the configurator output as Figma Variables JSON, so designers can import the exact same tokens into Figma and stay perfectly in sync with developers.

**Features:**
- "Export for Figma" button in the configurator panel
- Generates a JSON file compatible with Figma's Variables API
- Covers colors, radius, fonts, and spacing
- Optional: Figma plugin that auto-imports the JSON

**Why it's unique:**
- Closes the design-to-code gap that plagues every team
- Designers and developers share a single source of truth

---

## 7. Mobile — React Native Companion Library (`omnira-ui-native`)

**Priority:** High
**Status:** Planned

A separate npm package (`omnira-ui-native`) that brings the Omnira UI design language to React Native / Expo apps.

### Architecture

- **Separate package**, not a unified codebase — keeps web components pure CSS Modules
- **Same design tokens** (colors, radius, fonts) expressed as JavaScript objects instead of CSS variables
- **Same component API** where possible — `<Button variant="primary" size="md" />` works identically
- **Same configurator output** — the Copy Config button exports both CSS (web) and JS tokens (native)

### Token System

```ts
// omnira-tokens-native.ts (auto-generated from configurator)
export const tokens = {
    colors: {
        lime: "#2196F3",
        limeHover: "#1E88E5",
        bgPrimary: "#0f172a",
        bgCard: "rgba(226, 232, 240, 0.03)",
        textPrimary: "rgba(248, 248, 248, 0.95)",
        // ... all tokens
    },
    radius: {
        sm: 4,
        md: 6,
        lg: 8,
        // ...
    },
    fonts: {
        body: "Satoshi",
        display: "Satoshi",
    },
};
```

### Components to Port (Phase 1 — Core)

1. Button
2. Badge
3. Input
4. Card
5. Modal (Bottom Sheet on mobile)
6. Toggle
7. Checkbox
8. Radio Button
9. Select (Action Sheet on mobile)
10. Avatar
11. Tag
12. Alert
13. Progress Bar
14. Slider
15. Tooltip (Long-press tooltip on mobile)

### Components to Port (Phase 2 — Advanced)

1. Table (horizontal scroll on mobile)
2. Calendar / Date Picker
3. Sidebar Navigation (Drawer on mobile)
4. Tabs
5. Notification (Push-style on mobile)
6. File Upload (Document picker on mobile)
7. Carousel
8. Activity Feed
9. Messaging

### Platform Adaptations

| Web Component | Mobile Equivalent |
|---|---|
| Modal | Bottom Sheet |
| Select dropdown | Action Sheet |
| Tooltip | Long-press popover |
| Sidebar | Drawer navigation |
| Hover states | Press/active states |
| CSS blur/glass | `expo-blur` or `BlurView` |

### CLI Support

```bash
# Web
npx omnira-ui init

# Mobile
npx omnira-ui init --native
```

The `--native` flag scaffolds a React Native project with:
- Token file (`omnira-tokens.ts`)
- Theme provider (`OmniraThemeProvider`)
- All Phase 1 components
- Expo-compatible configuration

---

## Release Timeline

| Version | Milestone |
|---|---|
| **v1.0 — v1.4** | Full component library (current) |
| **v1.5** | Component polish, accessibility audit, final adjustments |
| **v2.0** | AI Component Builder, Live Playground, Animation Presets, Dark/Light Split |
| **v2.1** | Multi-framework support (Vue, Svelte) |
| **v2.2** | Figma Token Sync |
| **v2.5** | `omnira-ui-native` Phase 1 (15 core components) |
| **v3.0** | `omnira-ui-native` Phase 2 + AI Builder for mobile |

---

## Competitive Positioning

| Feature | Material UI | Ant Design | shadcn/ui | Chakra UI | **Omnira UI v2** |
|---|---|---|---|---|---|
| Live theme configurator | Partial | No | No | No | **Yes** |
| AI component builder | No | No | No | No | **Yes** |
| Animation presets | No | No | No | No | **Yes** |
| Dark/Light split preview | No | No | No | No | **Yes** |
| Multi-framework | No | Partial | No | No | **Planned** |
| React Native companion | No | Yes (separate) | No | No | **Planned** |
| Figma token export | No | No | No | No | **Planned** |
| Glassmorphism design | No | No | No | No | **Yes** |
| Copy-paste architecture | No | No | Yes | No | **Yes** |

---

*This document will be updated as priorities evolve. Last updated: February 2026.*
