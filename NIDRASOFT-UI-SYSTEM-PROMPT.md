# Omnira UI — Cursor System Prompt

You are building **Omnira UI**, a premium glassmorphism component library and documentation website. Think shadcn/ui but with a completely custom, premium dark-first design system featuring glass effects, lime green accents, and a distinctive visual identity.

---

## Project Overview

Omnira UI is a component library where users can:
- Browse all available components in a clean, organized sidebar
- View live previews of each component in both dark and light mode
- Copy the component code with one click
- Read usage documentation and props/API for each component
- Install the base design system via CLI or manual copy

The project is NOT a traditional npm component library that imports from a package. Instead, it follows the **shadcn/ui model**: users install the base design system (CSS variables, fonts, base styles) and then copy individual component source code into their own projects.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties (no Tailwind — we use our own design tokens)
- **Icons**: Iconsax React (`iconsax-react`) — always use "Bulk" variant
- **Animations**: Framer Motion
- **Code Display**: `react-syntax-highlighter` or `shiki` for code blocks with copy button
- **Fonts**: 
  - Display/Headlines: "Host Grotesk" (local font, Bold 700)
  - Body: "Rubik" (Google Font, weights 300-700)
- **Package Manager**: pnpm preferred

---

## Design System Foundation

### Color System (CSS Custom Properties)

The entire design system is built on CSS custom properties that swap between dark and light mode. The mode is controlled by a `data-theme="dark"` or `data-theme="light"` attribute on the root element.

#### Dark Mode (Default)
```css
[data-theme="dark"] {
    --color-lime: #D2FE17;
    --color-lime-hover: #c0e616;
    --color-lime-gradient: #ABC928;
    --color-lime-text: #121212;

    --color-bg-primary: #202020;
    --color-bg-secondary: #1a1a1a;
    --color-bg-card: rgba(248, 248, 248, 0.03);
    --color-bg-elevated: rgba(248, 248, 248, 0.06);
    --color-bg-input: rgba(248, 248, 248, 0.04);
    --color-bg-hover: rgba(248, 248, 248, 0.05);
    --color-bg-overlay: rgba(10, 10, 10, 0.97);
    --color-bg-sidebar: #1a1a1a;

    --color-text-primary: rgba(248, 248, 248, 0.95);
    --color-text-secondary: rgba(248, 248, 248, 0.70);
    --color-text-tertiary: rgba(248, 248, 248, 0.50);

    --color-border-subtle: rgba(255, 255, 255, 0.05);
    --color-border-standard: rgba(255, 255, 255, 0.06);
    --color-border-medium: rgba(255, 255, 255, 0.08);
    --color-border-strong: rgba(255, 255, 255, 0.15);

    --color-border-lime-subtle: rgba(210, 254, 23, 0.1);
    --color-border-lime-medium: rgba(210, 254, 23, 0.15);
    --color-border-lime-strong: rgba(210, 254, 23, 0.3);

    --color-bg-lime-subtle: rgba(210, 254, 23, 0.06);
    --color-bg-lime-medium: rgba(210, 254, 23, 0.08);
    --color-bg-lime-strong: rgba(210, 254, 23, 0.12);

    --color-error: #ef4444;
    --color-warning: #ffbd2e;
    --color-success: #28c840;
    --color-info: #3b82f6;

    --color-error-bg: rgba(239, 68, 68, 0.08);
    --color-error-border: rgba(239, 68, 68, 0.15);
    --color-warning-bg: rgba(255, 189, 46, 0.08);
    --color-warning-border: rgba(255, 189, 46, 0.15);
    --color-success-bg: rgba(40, 200, 64, 0.08);
    --color-success-border: rgba(40, 200, 64, 0.15);
    --color-info-bg: rgba(59, 130, 246, 0.08);
    --color-info-border: rgba(59, 130, 246, 0.15);

    --shadow-card: inset 2px 4px 16px rgba(248, 248, 248, 0.06), 0px 8px 32px rgba(0, 0, 0, 0.2);
    --shadow-card-light: inset 1px 2px 12px rgba(248, 248, 248, 0.03), 0px 8px 28px rgba(0, 0, 0, 0.12);
    --shadow-card-accent: inset 2px 4px 16px rgba(210, 254, 23, 0.04), 0px 16px 48px rgba(0, 0, 0, 0.2);
    --shadow-card-hover: inset 2px 4px 16px rgba(248, 248, 248, 0.08), 0px 12px 40px rgba(0, 0, 0, 0.28);
    --shadow-btn-primary: 0 8px 24px rgba(210, 254, 23, 0.3);
    --shadow-glow-lime: 0 0 8px rgba(210, 254, 23, 0.6), 0 0 16px rgba(210, 254, 23, 0.3);

    --gradient-text: linear-gradient(93deg, rgba(248, 248, 248, 0.9), rgba(248, 248, 248, 0.5));
    --gradient-framework: linear-gradient(124deg, rgba(248, 248, 248, 0.04) 0%, rgba(248, 248, 248, 0.01) 46.5%), linear-gradient(180deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0.00) 100%);
    --gradient-progress: linear-gradient(90deg, #D2FE17, #e5ff54);

    --blur-standard: blur(50px);
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --radius-2xl: 32px;
    --radius-3xl: 40px;
    --radius-full: 100px;
}
```

#### Light Mode
```css
[data-theme="light"] {
    --color-lime: #8AB400;
    --color-lime-hover: #7DA310;
    --color-lime-gradient: #6B9A00;
    --color-lime-text: #ffffff;

    --color-bg-primary: #f5f5f7;
    --color-bg-secondary: #ebebed;
    --color-bg-card: rgba(255, 255, 255, 0.7);
    --color-bg-elevated: rgba(255, 255, 255, 0.9);
    --color-bg-input: rgba(0, 0, 0, 0.03);
    --color-bg-hover: rgba(0, 0, 0, 0.04);
    --color-bg-overlay: rgba(255, 255, 255, 0.97);
    --color-bg-sidebar: #ffffff;

    --color-text-primary: rgba(18, 18, 18, 0.95);
    --color-text-secondary: rgba(18, 18, 18, 0.65);
    --color-text-tertiary: rgba(18, 18, 18, 0.45);

    --color-border-subtle: rgba(0, 0, 0, 0.06);
    --color-border-standard: rgba(0, 0, 0, 0.08);
    --color-border-medium: rgba(0, 0, 0, 0.10);
    --color-border-strong: rgba(0, 0, 0, 0.18);

    --color-border-lime-subtle: rgba(138, 180, 0, 0.15);
    --color-border-lime-medium: rgba(138, 180, 0, 0.25);
    --color-border-lime-strong: rgba(138, 180, 0, 0.4);

    --color-bg-lime-subtle: rgba(138, 180, 0, 0.06);
    --color-bg-lime-medium: rgba(138, 180, 0, 0.10);
    --color-bg-lime-strong: rgba(138, 180, 0, 0.15);

    --color-error: #dc2626;
    --color-warning: #d97706;
    --color-success: #16a34a;
    --color-info: #2563eb;

    --color-error-bg: rgba(220, 38, 38, 0.06);
    --color-error-border: rgba(220, 38, 38, 0.15);
    --color-warning-bg: rgba(217, 119, 6, 0.06);
    --color-warning-border: rgba(217, 119, 6, 0.15);
    --color-success-bg: rgba(22, 163, 74, 0.06);
    --color-success-border: rgba(22, 163, 74, 0.15);
    --color-info-bg: rgba(37, 99, 235, 0.06);
    --color-info-border: rgba(37, 99, 235, 0.15);

    --shadow-card: 0px 1px 3px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);
    --shadow-card-light: 0px 1px 2px rgba(0, 0, 0, 0.03), 0px 4px 16px rgba(0, 0, 0, 0.04);
    --shadow-card-accent: 0px 2px 8px rgba(138, 180, 0, 0.08), 0px 12px 36px rgba(0, 0, 0, 0.06);
    --shadow-card-hover: 0px 2px 6px rgba(0, 0, 0, 0.06), 0px 12px 36px rgba(0, 0, 0, 0.1);
    --shadow-btn-primary: 0 6px 20px rgba(138, 180, 0, 0.25);
    --shadow-glow-lime: 0 0 6px rgba(138, 180, 0, 0.4), 0 0 12px rgba(138, 180, 0, 0.2);

    --gradient-text: linear-gradient(93deg, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, 0.55));
    --gradient-framework: linear-gradient(124deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 46.5%), linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
    --gradient-progress: linear-gradient(90deg, #8AB400, #a5d600);
}
```

### Typography Scale

```css
/* Hero */          font-family: var(--font-display); font-size: 72px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.1;
/* H1 */            font-family: var(--font-display); font-size: 56px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.15;
/* H2 Section */    font-family: var(--font-display); font-size: 48px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.15;
/* H3 Subsection */ font-family: var(--font-display); font-size: 40px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2;
/* H4 Card Title */ font-family: var(--font-display); font-size: 22px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.3;
/* Lead/Info */     font-family: var(--font-body);    font-size: 20px; font-weight: 300; line-height: 1.6;
/* Body */          font-family: var(--font-body);    font-size: 16px; font-weight: 400; line-height: 1.6;
/* Body Small */    font-family: var(--font-body);    font-size: 14px; font-weight: 400; line-height: 1.5;
/* Caption */       font-family: var(--font-body);    font-size: 12px; font-weight: 400; line-height: 1.5;
/* Label */         font-family: var(--font-body);    font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
```

### Gradient Text Effect
```css
.gradient-text {
    background-image: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Glass Card Pattern (Core Visual Identity)
Every elevated surface uses this pattern:
```css
.glass-card {
    border-radius: var(--radius-2xl);
    background: var(--color-bg-card);
    border: 1.5px solid var(--color-border-standard);
    box-shadow: var(--shadow-card);
    backdrop-filter: var(--blur-standard);
    transition: all 0.35s ease;
}
.glass-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
}
```

### Icon Usage
- Library: `iconsax-react`
- Default variant: `"Bulk"`
- Default color: `var(--color-lime)`
- Sizes: 18px (small), 24px (default), 32px (medium), 48px (large)
- Icon container: lime-tinted background box with rounded corners

```tsx
import { Calendar } from "iconsax-react";
<div className="icon-box">
    <Calendar size={24} variant="Bulk" color="var(--color-lime)" />
</div>
```

---

## Project Structure

```
nidrasoft-ui/
├── app/
│   ├── layout.tsx                    # Root layout with sidebar + theme provider
│   ├── page.tsx                      # Landing/intro page
│   ├── globals.css                   # Design system CSS variables + base styles
│   ├── fonts/
│   │   └── HostGrotesk-Bold.woff2
│   │
│   ├── docs/
│   │   ├── layout.tsx                # Docs layout with sidebar
│   │   ├── getting-started/
│   │   │   ├── page.tsx              # Installation guide
│   │   │   ├── theming/page.tsx      # Theme customization
│   │   │   ├── typography/page.tsx   # Typography system
│   │   │   ├── colors/page.tsx       # Color palette
│   │   │   ├── icons/page.tsx        # Iconsax icon system
│   │   │   └── cli/page.tsx          # CLI tool (coming soon)
│   │   │
│   │   ├── resources/
│   │   │   ├── icons/page.tsx
│   │   │   ├── avatars/page.tsx
│   │   │   └── logos/page.tsx
│   │   │
│   │   ├── base/
│   │   │   ├── overview/page.tsx
│   │   │   ├── button/page.tsx
│   │   │   ├── social-button/page.tsx
│   │   │   ├── app-store-button/page.tsx
│   │   │   ├── button-group/page.tsx
│   │   │   ├── badge/page.tsx
│   │   │   ├── badge-group/page.tsx
│   │   │   ├── tag/page.tsx
│   │   │   ├── dropdown/page.tsx
│   │   │   ├── select/page.tsx
│   │   │   ├── input/page.tsx
│   │   │   ├── textarea/page.tsx
│   │   │   ├── verification-code-input/page.tsx
│   │   │   ├── text-editor/page.tsx
│   │   │   ├── toggle/page.tsx
│   │   │   ├── checkbox/page.tsx
│   │   │   ├── radio-button/page.tsx
│   │   │   ├── radio-group/page.tsx
│   │   │   ├── avatar/page.tsx
│   │   │   ├── tooltip/page.tsx
│   │   │   ├── progress-indicator/page.tsx
│   │   │   ├── slider/page.tsx
│   │   │   ├── video-player/page.tsx
│   │   │   ├── credit-card/page.tsx
│   │   │   ├── qr-code/page.tsx
│   │   │   ├── illustration/page.tsx
│   │   │   ├── rating/page.tsx
│   │   │   ├── featured-icon/page.tsx
│   │   │   └── utility/page.tsx
│   │   │
│   │   ├── application-ui/
│   │   │   ├── card/page.tsx
│   │   │   ├── section-header/page.tsx
│   │   │   ├── section-footer/page.tsx
│   │   │   ├── sidebar-navigation/page.tsx
│   │   │   ├── header-navigation/page.tsx
│   │   │   ├── modal/page.tsx
│   │   │   ├── command-menu/page.tsx
│   │   │   ├── line-bar-chart/page.tsx
│   │   │   ├── pie-chart/page.tsx
│   │   │   ├── radar-chart/page.tsx
│   │   │   ├── matrix/page.tsx
│   │   │   ├── slide-out/page.tsx
│   │   │   ├── inline-cta/page.tsx
│   │   │   ├── pagination/page.tsx
│   │   │   ├── carousel/page.tsx
│   │   │   ├── progress-steps/page.tsx
│   │   │   ├── activity-feed/page.tsx
│   │   │   ├── messaging/page.tsx
│   │   │   ├── tabs/page.tsx
│   │   │   ├── table/page.tsx
│   │   │   ├── breadcrumbs/page.tsx
│   │   │   ├── alert/page.tsx
│   │   │   ├── notification/page.tsx
│   │   │   ├── date-picker/page.tsx
│   │   │   ├── calendar/page.tsx
│   │   │   ├── file-upload/page.tsx
│   │   │   ├── content-divider/page.tsx
│   │   │   ├── loading-indicator/page.tsx
│   │   │   └── code-snippet/page.tsx
│   │   │
│   │   ├── application-ui-examples/
│   │   │   └── page.tsx              # Coming soon
│   │   │
│   │   ├── shared-pages/
│   │   │   └── page.tsx              # Coming soon
│   │   │
│   │   ├── marketing/
│   │   │   └── page.tsx              # Coming soon
│   │   │
│   │   └── marketing-examples/
│   │       └── page.tsx              # Coming soon
│   │
│   └── providers.tsx                 # Theme provider context
│
├── components/
│   ├── docs/
│   │   ├── Sidebar.tsx               # Collapsible sidebar navigation
│   │   ├── Sidebar.module.css
│   │   ├── ComponentPreview.tsx      # Live preview + code display wrapper
│   │   ├── ComponentPreview.module.css
│   │   ├── CodeBlock.tsx             # Syntax highlighted code with copy button
│   │   ├── CodeBlock.module.css
│   │   ├── PropsTable.tsx            # Component props/API documentation table
│   │   ├── PropsTable.module.css
│   │   ├── ThemeToggle.tsx           # Dark/light mode toggle
│   │   ├── ThemeToggle.module.css
│   │   ├── DocHeader.tsx             # Page header with title, description, breadcrumb
│   │   ├── DocHeader.module.css
│   │   ├── StatusBadge.tsx           # "New", "Updated", "Coming Soon" badges
│   │   └── StatusBadge.module.css
│   │
│   └── ui/                           # The actual component library source
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.module.css
│       │   └── index.ts
│       ├── Badge/
│       │   ├── Badge.tsx
│       │   ├── Badge.module.css
│       │   └── index.ts
│       ├── Input/
│       │   ├── Input.tsx
│       │   ├── Input.module.css
│       │   └── index.ts
│       ├── Card/
│       │   ├── Card.tsx
│       │   ├── Card.module.css
│       │   └── index.ts
│       └── ... (each component follows this pattern)
│
├── lib/
│   ├── theme-context.tsx             # Theme context provider (dark/light)
│   ├── sidebar-config.ts             # Sidebar navigation structure data
│   ├── cn.ts                         # classnames utility
│   └── copy-to-clipboard.ts          # Copy utility
│
├── public/
│   ├── images/
│   └── fonts/
│
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Sidebar Navigation Structure

The sidebar is the primary navigation. It should be collapsible, sticky, and organized into these sections:

```typescript
// lib/sidebar-config.ts
export const sidebarConfig = [
    {
        title: "Getting Started",
        items: [
            { name: "Installation", href: "/docs/getting-started", icon: "DocumentDownload" },
            { name: "Theming", href: "/docs/getting-started/theming", icon: "Paintbucket" },
            { name: "Typography", href: "/docs/getting-started/typography", icon: "Text" },
            { name: "Colors", href: "/docs/getting-started/colors", icon: "ColorSwatch" },
            { name: "Icons", href: "/docs/getting-started/icons", icon: "Brush2" },
            { name: "CLI", href: "/docs/getting-started/cli", icon: "CommandSquare", status: "coming-soon" },
        ],
    },
    {
        title: "Resources",
        items: [
            { name: "Icons", href: "/docs/resources/icons" },
            { name: "Avatars", href: "/docs/resources/avatars" },
            { name: "Logos", href: "/docs/resources/logos" },
        ],
    },
    {
        title: "Base Components",
        items: [
            { name: "Overview", href: "/docs/base/overview" },
            { name: "Featured Icon", href: "/docs/base/featured-icon" },
            { name: "Button", href: "/docs/base/button" },
            { name: "Social Button", href: "/docs/base/social-button" },
            { name: "App Store Button", href: "/docs/base/app-store-button" },
            { name: "Utility", href: "/docs/base/utility" },
            { name: "Button Group", href: "/docs/base/button-group" },
            { name: "Badge", href: "/docs/base/badge" },
            { name: "Badge Group", href: "/docs/base/badge-group" },
            { name: "Tag", href: "/docs/base/tag" },
            { name: "Dropdown", href: "/docs/base/dropdown" },
            { name: "Select", href: "/docs/base/select" },
            { name: "Input", href: "/docs/base/input" },
            { name: "Textarea", href: "/docs/base/textarea" },
            { name: "Verification Code Input", href: "/docs/base/verification-code-input" },
            { name: "Text Editor", href: "/docs/base/text-editor" },
            { name: "Toggle", href: "/docs/base/toggle" },
            { name: "Checkbox", href: "/docs/base/checkbox" },
            { name: "Radio Button", href: "/docs/base/radio-button" },
            { name: "Radio Group", href: "/docs/base/radio-group" },
            { name: "Avatar", href: "/docs/base/avatar" },
            { name: "Tooltip", href: "/docs/base/tooltip" },
            { name: "Progress Indicator", href: "/docs/base/progress-indicator" },
            { name: "Slider", href: "/docs/base/slider" },
            { name: "Video Player", href: "/docs/base/video-player" },
            { name: "Credit Card", href: "/docs/base/credit-card" },
            { name: "QR Code", href: "/docs/base/qr-code" },
            { name: "Illustration", href: "/docs/base/illustration" },
            { name: "Rating", href: "/docs/base/rating" },
        ],
    },
    {
        title: "Application UI",
        items: [
            { name: "Card", href: "/docs/application-ui/card" },
            { name: "Section Header", href: "/docs/application-ui/section-header" },
            { name: "Section Footer", href: "/docs/application-ui/section-footer" },
            { name: "Sidebar Navigation", href: "/docs/application-ui/sidebar-navigation" },
            { name: "Header Navigation", href: "/docs/application-ui/header-navigation" },
            { name: "Modal", href: "/docs/application-ui/modal" },
            { name: "Command Menu", href: "/docs/application-ui/command-menu" },
            { name: "Line & Bar Chart", href: "/docs/application-ui/line-bar-chart" },
            { name: "Pie Chart", href: "/docs/application-ui/pie-chart" },
            { name: "Radar Chart", href: "/docs/application-ui/radar-chart" },
            { name: "Matrix", href: "/docs/application-ui/matrix" },
            { name: "Slide Out", href: "/docs/application-ui/slide-out" },
            { name: "Inline CTA", href: "/docs/application-ui/inline-cta" },
            { name: "Pagination", href: "/docs/application-ui/pagination" },
            { name: "Carousel", href: "/docs/application-ui/carousel" },
            { name: "Progress Steps", href: "/docs/application-ui/progress-steps" },
            { name: "Activity Feed", href: "/docs/application-ui/activity-feed" },
            { name: "Messaging", href: "/docs/application-ui/messaging" },
            { name: "Tabs", href: "/docs/application-ui/tabs" },
            { name: "Table", href: "/docs/application-ui/table" },
            { name: "Breadcrumbs", href: "/docs/application-ui/breadcrumbs" },
            { name: "Alert", href: "/docs/application-ui/alert" },
            { name: "Notification", href: "/docs/application-ui/notification" },
            { name: "Date Picker", href: "/docs/application-ui/date-picker" },
            { name: "Calendar", href: "/docs/application-ui/calendar" },
            { name: "File Upload", href: "/docs/application-ui/file-upload" },
            { name: "Content Divider", href: "/docs/application-ui/content-divider" },
            { name: "Loading Indicator", href: "/docs/application-ui/loading-indicator" },
            { name: "Code Snippet", href: "/docs/application-ui/code-snippet" },
        ],
    },
    {
        title: "Application UI Examples",
        items: [
            { name: "Dashboard", href: "/docs/application-ui-examples", status: "coming-soon" },
        ],
    },
    {
        title: "Shared Pages",
        items: [
            { name: "Overview", href: "/docs/shared-pages", status: "coming-soon" },
        ],
    },
    {
        title: "Marketing Components",
        items: [
            { name: "Overview", href: "/docs/marketing", status: "coming-soon" },
        ],
    },
    {
        title: "Marketing Examples",
        items: [
            { name: "Overview", href: "/docs/marketing-examples", status: "coming-soon" },
        ],
    },
];
```

---

## Sidebar Design Specs

The sidebar should:
- Be **280px wide** on desktop, collapsible on mobile
- Have a **fixed position** on the left side within the docs layout
- Use **collapsible sections** — each title group can expand/collapse
- Show an **active indicator** (lime left border + lime-tinted background) on the current page
- Display **"Coming Soon"** badges on items with `status: "coming-soon"`
- Include a **search input** at the top
- Include a **theme toggle** (dark/light) at the top
- Include the **NidraSoft UI logo** at the very top
- Use **smooth transitions** for expand/collapse
- Scroll independently from the main content

### Sidebar Styling
```css
.sidebar {
    width: 280px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: var(--color-bg-sidebar);
    border-right: 1px solid var(--color-border-subtle);
    overflow-y: auto;
    padding: 24px 0;
    z-index: 40;
}

.sidebar-section-title {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-tertiary);
    padding: 8px 24px;
    cursor: pointer;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 24px;
    font-size: 14px;
    color: var(--color-text-secondary);
    border-left: 2px solid transparent;
    transition: all 0.2s;
}

.sidebar-item:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-hover);
}

.sidebar-item.active {
    color: var(--color-lime);
    background: var(--color-bg-lime-subtle);
    border-left-color: var(--color-lime);
}
```

---

## Component Documentation Page Pattern

Every component page should follow this exact structure:

```tsx
// Example: app/docs/base/button/page.tsx
export default function ButtonPage() {
    return (
        <div className="doc-page">
            <DocHeader
                title="Button"
                description="Buttons trigger actions. Use them for form submissions, navigation, and interactive elements."
                status="stable" // or "new", "updated", "coming-soon"
            />

            {/* Preview Section */}
            <ComponentPreview
                title="Default"
                description="The default button variants."
            >
                {/* Live component preview */}
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
            </ComponentPreview>

            {/* Code block with copy button */}
            <CodeBlock
                code={`<Button variant="primary">Primary</Button>`}
                language="tsx"
            />

            {/* Props table */}
            <PropsTable
                props={[
                    { name: "variant", type: '"primary" | "secondary" | "ghost" | "accent"', default: '"primary"', description: "Visual style variant" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
                    { name: "disabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "icon", type: "ReactNode", default: "undefined", description: "Leading icon" },
                ]}
            />
        </div>
    );
}
```

### ComponentPreview Design
The preview wrapper should:
- Show a **live preview area** with the component rendered
- Have a **dark background** in dark mode, **light gray** in light mode
- Include a **"Copy Code"** button in the top-right corner
- Include a **"View Code"** toggle to expand/collapse the source code below
- Have a **tab bar** if the component has multiple variants to show

---

## Landing Page (app/page.tsx)

The landing page is the first thing users see. It should be:
- A **clean, premium intro** to NidraSoft UI
- Feature the **glass morphism** aesthetic prominently
- Include a **hero section** with the name, tagline, and "Get Started" CTA
- Show a **brief component showcase** (3-4 featured components in glass cards)
- Include **quick stats** (e.g., "50+ Components", "Dark & Light Mode", "Copy & Paste")
- Have a **"Get Started"** button that navigates to `/docs/getting-started`
- NOT include the sidebar — the sidebar only appears in `/docs/*` routes

---

## Key Implementation Rules

1. **ALL styling uses CSS Custom Properties** — never hardcode colors, shadows, or borders. Always reference `var(--color-*)`, `var(--shadow-*)`, `var(--radius-*)`.

2. **CSS Modules for component-specific styles** — each component gets its own `.module.css` file. Use CSS custom properties inside these modules.

3. **No Tailwind CSS** — this project uses its own design system. Do not install or use Tailwind.

4. **Glass morphism on every elevated surface** — cards, modals, dropdowns, tooltips, sidebar items all use the glass card pattern (backdrop-filter, subtle border, inset shadow).

5. **Iconsax "Bulk" variant only** — all icons use the Bulk variant with `var(--color-lime)` as the default color.

6. **Smooth transitions everywhere** — all interactive elements should have `transition: all 0.3s ease` or similar. Theme switching should animate smoothly (0.4s).

7. **Mobile responsive** — sidebar collapses to a hamburger menu on mobile. All component previews stack vertically.

8. **Every component page must have**: DocHeader, at least one ComponentPreview, a CodeBlock with copyable code, and a PropsTable.

9. **Modular architecture** — each UI component in `components/ui/` should be completely self-contained (its own folder with .tsx, .module.css, and index.ts). This makes it easy for users to copy a single component folder into their project.

10. **Theme provider** — use React Context for theme state. The `data-theme` attribute on `<html>` controls all CSS variable switching. Persist theme preference in localStorage.

---

## Getting Started (First Steps for Cursor)

1. Initialize the Next.js project with TypeScript
2. Set up the font system (Host Grotesk local + Rubik from Google Fonts)
3. Create `globals.css` with all CSS custom properties for both dark and light mode
4. Create the theme provider context and ThemeToggle component
5. Build the Sidebar component with the full navigation structure
6. Create the docs layout (sidebar + main content area)
7. Build the landing page
8. Create the DocHeader, ComponentPreview, CodeBlock, and PropsTable doc components
9. Build the first 3 base components: Button, Badge, Input
10. Create their documentation pages as examples for the pattern

---

## Brand

- **Name**: NidraSoft UI (or your chosen name)
- **Tagline**: "Premium glassmorphism components for modern applications"
- **Visual Identity**: Dark-first, glass effects, lime green (#D2FE17) accent, clean typography
- **Tone**: Professional, premium, developer-friendly
