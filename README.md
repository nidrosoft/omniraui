# Omnira UI

Premium glassmorphism component library and documentation website. Dark-first design system with glass effects, lime green accents, and a distinctive visual identity.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

## Tech Stack

- **Framework:** Next.js 16+ (App Router, TypeScript)
- **Styling:** CSS Modules + CSS Custom Properties (no Tailwind)
- **Icons:** Iconsax React (Bulk variant)
- **Animations:** Framer Motion
- **Fonts:** Host Grotesk (display) + Rubik (body)

## Project Structure

```
app/                    # Next.js App Router pages
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Landing page
├── globals.css         # Design system CSS variables + base styles
├── providers.tsx       # Client-side providers
└── docs/               # Documentation pages
    ├── layout.tsx      # Docs layout with sidebar
    ├── getting-started/
    ├── resources/
    ├── base/           # Base component docs (Button, Badge, Input, etc.)
    └── application-ui/ # Application UI component docs

components/
├── docs/               # Documentation site components
│   ├── Sidebar         # Collapsible sidebar navigation
│   ├── ThemeToggle     # Dark/light mode toggle
│   ├── DocHeader       # Page header with breadcrumbs
│   ├── ComponentPreview # Live preview + code toggle
│   ├── CodeBlock       # Syntax highlighted code with copy
│   ├── PropsTable      # Component API table
│   └── StatusBadge     # Status indicator badges
└── ui/                 # Component library source
    ├── Button/         # Primary, secondary, ghost, accent
    ├── Badge/          # Section, accent, semantic variants
    ├── Input/          # Text input with labels, icons, validation
    └── Card/           # Glass card with multiple variants

lib/
├── theme-context.tsx   # Theme provider (dark/light)
├── sidebar-config.ts   # Sidebar navigation data
├── cn.ts               # Classnames utility
└── copy-to-clipboard.ts
```

## Design System

- **Dark-first** with `data-theme` attribute switching
- **Lime accent:** `#D2FE17` (dark) / `#8AB400` (light)
- **Glass morphism** on all elevated surfaces
- **CSS custom properties** for all design tokens
- **0.4s smooth transitions** between themes

## Install

```bash
pnpm add omnira-ui
```
