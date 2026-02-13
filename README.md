# Omnira UI

A premium glassmorphism design system — dark-first, glass-forward, no compromises.

30+ base components, sidebar navigation, feature cards, 1,000+ icons, and a CLI to scaffold your project with your chosen accent color and theme mode.

**[Live Documentation →](https://ui.omnira.space)**

---

## Quick Start

### 1. Install

```bash
npm install omnira-ui
# or
pnpm add omnira-ui
```

### 2. Initialize your project

```bash
npx omnira-ui init
```

The CLI walks you through:
- **Project name**
- **Accent color** — 10 presets: Lime (default), Blue, Cyan, Green, Orange, Pink, Purple, Red, Teal, Yellow
- **Theme mode** — Dark-first or Light-first

It generates `omnira.config.ts` and `omnira-overrides.css` ready to import in your root layout.

### 3. Use components

```tsx
import { Button } from "omnira-ui/components/ui/Button";
import { Badge } from "omnira-ui/components/ui/Badge";
import { Input } from "omnira-ui/components/ui/Input";

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
