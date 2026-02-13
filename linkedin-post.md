# I built a glassmorphism design system from scratch. Here's why dark-first changes everything.

After years of using hundreds of apps, tools, and design systems — from Material UI to shadcn to Radix — I kept running into the same problem:

**Bright interfaces are hard to read.**

Not just aesthetically. It's an accessibility issue. White backgrounds with thin gray text create eye strain. Low-contrast light UIs punish users who spend 8+ hours a day staring at screens. And most design systems treat dark mode as an afterthought — a quick color inversion slapped on top of a light-first foundation.

So I decided to build my own.

---

## Introducing Omnira UI — a glassmorphism design system built dark-first.

Omnira UI is a premium component library I'm building from scratch as a senior product designer and product engineer. It's not a wrapper around another library. Every component, every token, every pixel is intentional.

**The core philosophy: dark-first, glass-forward.**

Instead of starting with white and inverting to dark, I designed every surface, every elevation, every interaction in dark mode first — then adapted to light. The result?

- **Reduced eye strain** — Soft, muted backgrounds with high-contrast text where it matters
- **Better readability** — Dark surfaces with carefully calibrated lime green (#D2FE17) accents guide the eye naturally
- **True glassmorphism** — Frosted glass surfaces with backdrop blur, subtle borders, and layered depth that actually looks premium
- **Seamless light mode** — Because the color system was built with both modes in mind from day one, the light theme isn't an afterthought — it's a first-class citizen

---

## What's inside?

I'm building toward **1,000 components** across the entire design system. Here's what's already shipped and documented:

### Base Components (30+)
Every foundation piece a modern app needs:
- **Button** — Primary, secondary, tertiary with 4 sizes, loading states, icon support
- **Input** — Text, password, search, with leading/trailing icons, dropdowns, copy-to-clipboard
- **Badge** — 6 semantic variants with dot indicators and 3 sizes
- **Select & Dropdown** — Fully accessible with keyboard navigation
- **Toggle, Checkbox, Radio Button, Radio Group** — Complete form controls
- **Slider** — Range selection with custom tracks
- **Rating** — Star-based rating with half-star support
- **Tag** — Dismissible tags with variants
- **Tooltip** — Positioned tooltips with arrow indicators
- **Collapse** — Animated accordion panels
- **Textarea & Text Editor** — Rich text input with formatting
- **Progress Indicator** — Bars and circular progress
- **Avatar** — Image, initials, and status indicators
- **Credit Card** — Visual card component with formatting
- **QR Code** — Scannable QR generation
- **Phone Input** — International phone number formatting
- **Verification Code Input** — OTP-style pin entry
- **Video Player** — Custom-styled media player
- **Browser Frame** — Chrome-style browser mockup
- **App Store Button** — iOS/Android download buttons
- **Social Button** — OAuth provider buttons
- **Illustration** — Decorative SVG components
- **Badge Group** — Grouped badge layouts
- **Button Group** — Connected button sets

### Application UI
- **Sidebar Navigation** — 5 variants: Simple, Section Dividers, Section Headings, Slim (icon-only with tooltips), and Dual Panel
- **12 Feature Cards** — Progress, Storage, Image Banner, Cookie Consent, Referral, Onboarding Checklist, Upgrade CTA, Support, Event, Message, Current Project, Free Trial, QR Code
- **User Account Menu** — Click-to-open popup with profile, settings, account switching with radio selection, and sign out
- **Search Bar** — Integrated ⌘K search component

### Icon System
Powered by **iconsax-react** with the Bulk variant throughout — over 1,000 icons available, all rendered in the signature lime accent color for consistency.

### Documentation
Every single component has a dedicated documentation page with:
- Live interactive previews
- Copy-pasteable code blocks that actually work
- Props tables with types, defaults, and descriptions
- Multiple variant showcases

---

## The tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **CSS Modules** + **CSS Custom Properties** — No Tailwind. Every token is a CSS variable, giving you full control
- **Framer Motion** for animations
- **iconsax-react** (Bulk variant) for iconography
- **Host Grotesk** (display) + **Rubik** (body) typography pairing

---

## What's coming next

This is where it gets exciting. Upcoming features include:

- **Full theme customization** — Custom accent colors, border radius, spacing scales, and shadow depths
- **10 accent color presets** — Lime (default), Blue, Cyan, Green, Orange, Pink, Purple, Red, Teal, Yellow — each with complete dark/light token sets
- **CLI tool** — Run `npx omnira-ui init` to scaffold your project with your chosen accent, theme mode, and configuration
- **Custom borders & rounded corners** — Fine-tune every radius from sharp to pill
- **Dashboard templates** — Full application layouts built with Omnira components
- **More application UI** — Tables, modals, command palettes, notification centers, and more
- **Targeting 1,000 components** — We keep building, every week

---

## Why I built this

I'm a product engineer at **Intraopic**, where I work on complex product interfaces daily. After using countless design systems across hundreds of projects, I wanted something that:

1. **Looks premium out of the box** — No fighting with default styles
2. **Prioritizes readability** — Dark-first solves the contrast problem most light-first systems ignore
3. **Is genuinely beautiful** — Glassmorphism done right, not as a gimmick
4. **Speeds up my workflow** — Every component I need, documented and ready to drop in
5. **Gives developers real control** — CSS variables, not utility classes. You own your styles.

This started as a personal project to accelerate my own work. Now it's becoming something bigger.

---

## Try it / Follow along

The project is open source and actively developed:

🔗 **GitHub**: [github.com/nidrosoft/omniraui](https://github.com/nidrosoft/omniraui)

If this resonates with you:
- ⭐ **Star the repo** to follow updates
- 🍴 **Fork it** if you want to explore
- 💬 **Drop a comment** — I'd love to hear what components you'd want to see next

Building in public. Shipping every week. Dark-first, glass-forward, no compromises.

---

*#designsystem #opensource #uiux #webdevelopment #react #nextjs #typescript #glassmorphism #darkmode #accessibility #frontend #componentlibrary #productdesign #buildinpublic*
