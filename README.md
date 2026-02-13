# Omnira UI

A premium glassmorphism design system — dark-first, glass-forward, no compromises.

30+ base components, sidebar navigation, feature cards, 1,000+ icons, and a CLI to scaffold your project with your chosen accent color and theme mode.

**[Live Documentation →](https://ui.omnira.space)**

---

## Quick Start

### 1. Scaffold your project

```bash
npx omnira-ui init
```

The CLI scaffolds the full design system into your project:

- **32 base components** → `components/ui/`
- **Utility helpers** → `lib/cn.ts`, `lib/copy-to-clipboard.ts`
- **Theme provider** → `lib/theme-context.tsx` (system preference detection + toggle)
- **Design tokens** → `app/globals.css` (all CSS custom properties)
- **Accent overrides** → `omnira-overrides.css` (if non-default color)
- **Config file** → `omnira.config.ts`

You choose:
- **Accent color** — 10 presets: Lime (default), Blue, Cyan, Green, Orange, Pink, Purple, Red, Teal, Yellow
- **Theme mode** — Dark-first or Light-first (respects system preference)

### 2. Install peer dependencies

```bash
npm install iconsax-react
```

### 3. Set up your layout

```tsx
// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
    return (
        <html data-theme="dark">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
```

### 4. Use components

```tsx
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";

export default function MyPage() {
    return (
        <div>
            <Button variant="primary" size="md">Get Started</Button>
            <Badge variant="success" dot>Online</Badge>
            <Input label="Email" placeholder="you@example.com" />
        </div>
    );
}
```

### 5. Need more components?

Browse the full library and copy advanced components (Sidebar, Feature Cards, etc.) directly from the docs:

**[ui.omnira.space →](https://ui.omnira.space)**

---

## Components

### Base Components (30+)

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, tertiary, ghost, accent — 4 sizes, loading states, icon support |
| **Input** | Text, password, search — leading/trailing icons, dropdowns, copy-to-clipboard |
| **Badge** | 6 semantic variants with dot indicators and 3 sizes |
| **Select** | Fully accessible dropdown with keyboard navigation |
| **Dropdown** | Menu dropdown with items, dividers, and icons |
| **Toggle** | On/off switch with labels |
| **Checkbox** | Single checkbox with indeterminate state |
| **Radio Button / Radio Group** | Single and grouped radio controls |
| **Slider** | Range selection with custom tracks |
| **Rating** | Star-based rating with half-star support |
| **Tag** | Dismissible tags with variants |
| **Tooltip** | Positioned tooltips with arrow indicators |
| **Collapse** | Animated accordion panels |
| **Textarea** | Multi-line text input |
| **Text Editor** | Rich text input with formatting toolbar |
| **Progress Indicator** | Bars and circular progress |
| **Avatar** | Image, initials, and status indicators |
| **Credit Card** | Visual card component with formatting |
| **QR Code** | Scannable QR generation |
| **Phone** | International phone number input |
| **Verification Code Input** | OTP-style pin entry |
| **Video Player** | Custom-styled media player |
| **Browser** | Chrome-style browser frame mockup |
| **App Store Button** | iOS and Android download buttons |
| **Social Button** | OAuth provider buttons (Google, GitHub, etc.) |
| **Illustration** | Decorative SVG components |
| **Badge Group** | Grouped badge layouts |
| **Button Group** | Connected button sets |
| **Featured Icon** | Highlighted icon containers |

### Application UI

- **Sidebar Navigation** — 5 variants: Simple, Section Dividers, Section Headings, Slim (icon-only), Dual Panel
- **12 Feature Cards** — Progress, Storage, Image Banner, Cookie Consent, Referral, Onboarding, Upgrade, Support, Event, Message, Current Project, Free Trial
- **User Account Menu** — Popup with profile, settings, account switching, sign out
- **Search Bar** — Integrated ⌘K search component

---

## Design System

- **Dark-first** — Every surface designed in dark mode first, then adapted to light
- **Glassmorphism** — Frosted glass surfaces with backdrop blur and layered depth
- **Lime accent** — `#D2FE17` (dark) / `#8AB400` (light), or choose from 10 presets
- **CSS Custom Properties** — Every design token is a CSS variable you own
- **`data-theme` switching** — Smooth 0.4s transitions between dark and light

---

## Tech Stack

- **Next.js 16+** (App Router) + **TypeScript**
- **CSS Modules** + **CSS Custom Properties** (no Tailwind)
- **iconsax-react** (Bulk variant) — 1,000+ icons
- **Framer Motion** for animations
- **Host Grotesk** (display) + **Rubik** (body) typography

---

## Development

Clone the repo and run the documentation site locally:

```bash
git clone https://github.com/nidrosoft/omniraui.git
cd omniraui
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the docs.

### Project Structure

```
components/ui/          # Component library source (published to npm)
cli/                    # CLI tool (published to npm)
app/                    # Documentation site (Next.js App Router)
lib/                    # Shared utilities
```

---

## License

MIT © [Omnira UI](https://ui.omnira.space)
