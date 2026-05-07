"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { MarketingHeader } from "@/components/ui/MarketingHeader";
import {
    Layer, Chart, Setting2, People, MessageText, Book1,
    ShieldTick, CloudConnection, Code1, Cpu, Brush2, Moneys,
    DocumentText, Video, Star1,
} from "iconsax-react";

/* ══════════════════════════════════════════════
   Preview wrapper
   ══════════════════════════════════════════════ */

const previewStyle: React.CSSProperties = {
    width: "100%",
    overflow: "visible",
    position: "relative",
    minHeight: 280,
};

/* ══════════════════════════════════════════════
   Shared nav data
   ══════════════════════════════════════════════ */

const productItems = [
    { icon: <Layer size={20} variant="Bulk" color="currentColor" />, title: "Analytics", description: "Track and measure performance metrics." },
    { icon: <Chart size={20} variant="Bulk" color="currentColor" />, title: "Dashboards", description: "Custom dashboards for your team." },
    { icon: <Setting2 size={20} variant="Bulk" color="currentColor" />, title: "Automation", description: "Automate your repetitive workflows." },
    { icon: <ShieldTick size={20} variant="Bulk" color="currentColor" />, title: "Security", description: "Enterprise-grade security and compliance." },
];

const resourceItems = [
    { icon: <Book1 size={20} variant="Bulk" color="currentColor" />, title: "Documentation", description: "Learn how to get started." },
    { icon: <MessageText size={20} variant="Bulk" color="currentColor" />, title: "Blog", description: "Latest news and articles." },
    { icon: <People size={20} variant="Bulk" color="currentColor" />, title: "Community", description: "Connect with other developers." },
];

const demoActions = (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button style={{
            padding: "8px 16px", fontSize: 14, fontWeight: 600, borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border-standard)", background: "transparent",
            color: "var(--color-text-secondary)", cursor: "pointer", fontFamily: "var(--font-body)",
        }}>
            Log in
        </button>
        <button style={{
            padding: "8px 16px", fontSize: 14, fontWeight: 700, borderRadius: "var(--radius-md)",
            border: "none", background: "var(--color-lime)", color: "var(--color-lime-text)",
            cursor: "pointer", fontFamily: "var(--font-body)",
        }}>
            Sign up
        </button>
    </div>
);

/* ══════════════════════════════════════════════
   Demo 1: Simple Dropdown
   ══════════════════════════════════════════════ */

function SimpleDropdownDemo() {
    return (
        <div style={previewStyle}>
            <MarketingHeader
                navItems={[
                    {
                        label: "Products",
                        items: productItems,
                        footer: { text: "Explore all products", ctaLabel: "View all", ctaHref: "#" },
                    },
                    {
                        label: "Resources",
                        items: resourceItems,
                    },
                    { label: "Pricing", href: "#" },
                    { label: "About", href: "#" },
                ]}
                actions={demoActions}
            />
        </div>
    );
}

const simpleCode = `import { MarketingHeader } from "@/components/ui/MarketingHeader";
import { Layer, Chart, Setting2, ShieldTick } from "iconsax-react";

<MarketingHeader
  navItems={[
    {
      label: "Products",
      items: [
        { icon: <Layer size={20} variant="Bulk" color="currentColor" />, title: "Analytics", description: "Track metrics." },
        { icon: <Chart size={20} variant="Bulk" color="currentColor" />, title: "Dashboards", description: "Custom dashboards." },
        { icon: <Setting2 size={20} variant="Bulk" color="currentColor" />, title: "Automation", description: "Automate workflows." },
      ],
      footer: { text: "Explore all", ctaLabel: "View all", ctaHref: "/products" },
    },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ]}
  actions={<>
    <Button variant="secondary">Log in</Button>
    <Button variant="primary">Sign up</Button>
  </>}
/>`;

/* ══════════════════════════════════════════════
   Demo 2: Two-Column with Footer
   ══════════════════════════════════════════════ */

function TwoColumnDemo() {
    return (
        <div style={previewStyle}>
            <MarketingHeader
                navItems={[
                    {
                        label: "Platform",
                        dropdownLayout: "two-columns",
                        columns: [
                            {
                                label: "Build",
                                items: [
                                    { icon: <Code1 size={20} variant="Bulk" color="currentColor" />, title: "API", description: "Powerful REST & GraphQL APIs." },
                                    { icon: <Cpu size={20} variant="Bulk" color="currentColor" />, title: "Compute", description: "Serverless functions and edge." },
                                    { icon: <CloudConnection size={20} variant="Bulk" color="currentColor" />, title: "Storage", description: "Object and file storage." },
                                ],
                            },
                            {
                                label: "Manage",
                                items: [
                                    { icon: <ShieldTick size={20} variant="Bulk" color="currentColor" />, title: "Security", description: "Auth and permissions." },
                                    { icon: <Brush2 size={20} variant="Bulk" color="currentColor" />, title: "Design", description: "UI toolkit and themes." },
                                    { icon: <Moneys size={20} variant="Bulk" color="currentColor" />, title: "Billing", description: "Usage and invoicing." },
                                ],
                            },
                        ],
                        footer: { text: "Need help choosing?", ctaLabel: "Talk to sales", ctaHref: "#" },
                    },
                    {
                        label: "Resources",
                        items: resourceItems,
                    },
                    { label: "Pricing", href: "#" },
                    { label: "Docs", href: "#" },
                ]}
                actions={demoActions}
            />
        </div>
    );
}

const twoColumnCode = `<MarketingHeader
  navItems={[
    {
      label: "Platform",
      dropdownLayout: "two-columns",
      columns: [
        {
          label: "Build",
          items: [
            { icon: <Code1 .../>, title: "API", description: "REST & GraphQL." },
            { icon: <Cpu .../>, title: "Compute", description: "Serverless." },
          ],
        },
        {
          label: "Manage",
          items: [
            { icon: <ShieldTick .../>, title: "Security", description: "Auth." },
            { icon: <Brush2 .../>, title: "Design", description: "Themes." },
          ],
        },
      ],
      footer: { text: "Need help?", ctaLabel: "Talk to sales" },
    },
    { label: "Pricing", href: "/pricing" },
  ]}
/>`;

/* ══════════════════════════════════════════════
   Demo 3: Feature Card Dropdown
   ══════════════════════════════════════════════ */

function FeatureCardDemo() {
    return (
        <div style={previewStyle}>
            <MarketingHeader
                navItems={[
                    { label: "Products", items: productItems },
                    {
                        label: "Resources",
                        items: [
                            { icon: <DocumentText size={20} variant="Bulk" color="currentColor" />, title: "Blog", description: "The latest industry news and guides curated by our expert team." },
                            { icon: <Star1 size={20} variant="Bulk" color="currentColor" />, title: "Customer stories", description: "Learn how our customers are using Omnira to 10x their growth." },
                            { icon: <Video size={20} variant="Bulk" color="currentColor" />, title: "Video tutorials", description: "Get up and running on our newest features and in-depth guides." },
                            { icon: <Book1 size={20} variant="Bulk" color="currentColor" />, title: "Documentation", description: "In-depth articles on our tools and technologies to empower teams." },
                        ],
                        sidebar: {
                            featuredCard: {
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop",
                                title: "We've just released an update!",
                                description: "Check out the all new dashboard view. Pages now load up to 3x faster.",
                                actions: [
                                    { label: "Dismiss" },
                                    { label: "Changelog", href: "#", primary: true },
                                ],
                            },
                        },
                    },
                    { label: "Pricing", href: "#" },
                    { label: "About", href: "#" },
                ]}
                actions={demoActions}
            />
        </div>
    );
}

const featureCardCode = `<MarketingHeader
  navItems={[
    { label: "Products", items: [...] },
    {
      label: "Resources",
      items: [
        { icon: <DocumentText .../>, title: "Blog", description: "Latest news and guides." },
        { icon: <Star1 .../>, title: "Customer stories", description: "How customers use Omnira." },
        { icon: <Video .../>, title: "Video tutorials", description: "In-depth feature guides." },
        { icon: <Book1 .../>, title: "Documentation", description: "Articles on our tools." },
      ],
      sidebar: {
        featuredCard: {
          image: "/images/update-banner.jpg",
          title: "We've just released an update!",
          description: "Check out the all new dashboard view.",
          actions: [
            { label: "Dismiss" },
            { label: "Changelog", href: "/changelog", primary: true },
          ],
        },
      },
    },
    { label: "Pricing", href: "/pricing" },
  ]}
/>`;

/* ══════════════════════════════════════════════
   Demo 4: Floating with Sidebar
   ══════════════════════════════════════════════ */

function FloatingDemo() {
    return (
        <div style={{ ...previewStyle, paddingBottom: 8 }}>
            <MarketingHeader
                floating
                navItems={[
                    {
                        label: "Products",
                        dropdownLayout: "simple",
                        items: productItems,
                        sidebar: {
                            featuredCard: {
                                title: "What's new in v2.0",
                                description: "Check out the latest features and improvements.",
                                href: "#",
                            },
                        },
                        footer: { text: "See all products", ctaLabel: "Explore", ctaHref: "#" },
                    },
                    {
                        label: "Solutions",
                        items: [
                            { icon: <People size={20} variant="Bulk" color="currentColor" />, title: "For Teams", description: "Collaborate with your team." },
                            { icon: <Moneys size={20} variant="Bulk" color="currentColor" />, title: "Enterprise", description: "Scale with confidence." },
                        ],
                    },
                    { label: "Pricing", href: "#" },
                    { label: "Blog", href: "#" },
                ]}
                actions={demoActions}
            />
        </div>
    );
}

const floatingCode = `<MarketingHeader
  floating
  navItems={[
    {
      label: "Products",
      items: [...],
      sidebar: {
        featuredCard: {
          title: "What's new in v2.0",
          description: "Latest features and improvements.",
          href: "/changelog",
        },
      },
      footer: { text: "See all products", ctaLabel: "Explore" },
    },
    { label: "Pricing", href: "/pricing" },
  ]}
/>`;

/* ══════════════════════════════════════════════
   Demo 4: Full-Width Dropdown
   ══════════════════════════════════════════════ */

function FullWidthDemo() {
    return (
        <div style={previewStyle}>
            <MarketingHeader
                navItems={[
                    {
                        label: "Platform",
                        dropdownLayout: "four-columns",
                        dropdownStyle: "full-width",
                        columns: [
                            {
                                label: "Analytics",
                                items: [
                                    { icon: <Layer size={20} variant="Bulk" color="currentColor" />, title: "Metrics", description: "Real-time metrics." },
                                    { icon: <Chart size={20} variant="Bulk" color="currentColor" />, title: "Reports", description: "Custom reports." },
                                ],
                            },
                            {
                                label: "Infrastructure",
                                items: [
                                    { icon: <Cpu size={20} variant="Bulk" color="currentColor" />, title: "Compute", description: "Edge functions." },
                                    { icon: <CloudConnection size={20} variant="Bulk" color="currentColor" />, title: "Storage", description: "Global CDN." },
                                ],
                            },
                            {
                                label: "Developer",
                                items: [
                                    { icon: <Code1 size={20} variant="Bulk" color="currentColor" />, title: "API", description: "REST & GraphQL." },
                                    { icon: <Setting2 size={20} variant="Bulk" color="currentColor" />, title: "CLI", description: "Command-line tools." },
                                ],
                            },
                            {
                                label: "Security",
                                items: [
                                    { icon: <ShieldTick size={20} variant="Bulk" color="currentColor" />, title: "Auth", description: "SSO and MFA." },
                                    { icon: <Moneys size={20} variant="Bulk" color="currentColor" />, title: "Billing", description: "Usage billing." },
                                ],
                            },
                        ],
                    },
                    { label: "Pricing", href: "#" },
                    { label: "Docs", href: "#" },
                    { label: "Blog", href: "#" },
                ]}
                actions={demoActions}
            />
        </div>
    );
}

const fullWidthCode = `<MarketingHeader
  navItems={[
    {
      label: "Platform",
      dropdownLayout: "four-columns",
      dropdownStyle: "full-width",
      columns: [
        { label: "Analytics", items: [...] },
        { label: "Infrastructure", items: [...] },
        { label: "Developer", items: [...] },
        { label: "Security", items: [...] },
      ],
    },
    { label: "Pricing", href: "/pricing" },
  ]}
/>`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const headerProps = [
    { name: "navItems", type: "MarketingHeaderNavItem[]", default: "[]", description: "Array of navigation items. Each can be a plain link or a dropdown trigger." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element (replaces logoText)." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo fallback character." },
    { name: "brandName", type: "string", default: '"Omnira"', description: "Brand name displayed next to the logo." },
    { name: "brandHref", type: "string", default: '"/"', description: "Brand link href." },
    { name: "onBrandClick", type: "() => void", description: "Brand click handler (overrides href)." },
    { name: "floating", type: "boolean", default: "false", description: "Floating style with rounded bar and max-width." },
    { name: "sticky", type: "boolean", default: "false", description: "Sticky positioning at top of viewport." },
    { name: "actions", type: "React.ReactNode", description: "Right-side action buttons (login, signup, etc.)." },
    { name: "mobileFooter", type: "React.ReactNode", description: "Custom footer content for the mobile menu." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const navItemProps = [
    { name: "label", type: "string", description: "Navigation item display text." },
    { name: "href", type: "string", description: "Direct link href (no dropdown)." },
    { name: "active", type: "boolean", description: "Highlight as active." },
    { name: "dropdownLayout", type: '"simple" | "two-columns" | "three-columns" | "four-columns"', default: '"simple"', description: "Dropdown grid layout." },
    { name: "dropdownStyle", type: '"floating" | "full-width"', default: '"floating"', description: "Floating rounded panel or full-width mega-menu." },
    { name: "items", type: "MarketingHeaderMenuItem[]", description: "Dropdown menu items (simple layout)." },
    { name: "columns", type: "{ label?: string; items: MenuItem[] }[]", description: "Column groups for multi-column layouts." },
    { name: "footer", type: "{ text?: string; ctaLabel?: string; ctaHref?: string }", description: "Dropdown footer with optional CTA link." },
    { name: "sidebar", type: "{ featuredCard?: FeaturedCard }", description: "Sidebar with a featured card (renders alongside the menu)." },
];

const menuItemProps = [
    { name: "icon", type: "React.ReactNode", description: "Icon element displayed in a bordered box." },
    { name: "title", type: "string", description: "Item title." },
    { name: "description", type: "string", description: "Short description text." },
    { name: "href", type: "string", description: "Item link href." },
    { name: "onClick", type: "() => void", description: "Item click handler." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function MarketingHeaderNavigationPage() {
    return (
        <div>
            <DocHeader
                title="Header Navigation"
                description="Marketing site header navigation with dropdown menus, multi-column layouts, floating and full-width styles, sidebar panels, featured cards, and a responsive mobile drawer. Supports hover and click interactions with smooth animations."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Marketing Components", href: "/docs/marketing" },
                    { label: "Header Navigation" },
                ]}
            />

            <InstallBlock slug="marketing-header" components={["MarketingHeader"]} />

            {/* ── Simple Dropdown ── */}
            <ComponentPreview
                title="Simple Dropdown"
                description="Single-column dropdown menu with icons, titles, descriptions, and an optional footer CTA. Hover or click a nav item to open."
                code={simpleCode}
            >
                <SimpleDropdownDemo />
            </ComponentPreview>

            {/* ── Two-Column with Footer ── */}
            <ComponentPreview
                title="Two-Column with Footer"
                description="Mega-menu dropdown with two labeled column groups and a footer. Great for organizing platform features into build/manage categories."
                code={twoColumnCode}
            >
                <TwoColumnDemo />
            </ComponentPreview>

            {/* ── Feature Card Dropdown ── */}
            <ComponentPreview
                title="Feature Card Dropdown"
                description="Menu links on the left with a featured image card, announcement text, and action links on the right. Perfect for highlighting updates alongside navigation."
                code={featureCardCode}
            >
                <FeatureCardDemo />
            </ComponentPreview>

            {/* ── Floating with Sidebar ── */}
            <ComponentPreview
                title="Floating with Sidebar"
                description="Floating (rounded) header style with a sidebar panel showing a featured card alongside the dropdown menu items."
                code={floatingCode}
            >
                <FloatingDemo />
            </ComponentPreview>

            {/* ── Full-Width Mega-Menu ── */}
            <ComponentPreview
                title="Full-Width Mega-Menu"
                description="Full-width dropdown that spans the entire header width with a 4-column grid layout. Ideal for large navigation structures."
                code={fullWidthCode}
            >
                <FullWidthDemo />
            </ComponentPreview>

            <PropsTable title="MarketingHeader" props={headerProps} />
            <PropsTable title="MarketingHeaderNavItem" props={navItemProps} />
            <PropsTable title="MarketingHeaderMenuItem" props={menuItemProps} />
        </div>
    );
}
