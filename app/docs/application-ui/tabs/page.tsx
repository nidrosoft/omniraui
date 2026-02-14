"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Tabs } from "@/components/ui/Tabs";
import type { TabItem } from "@/components/ui/Tabs";

const sampleTabs: TabItem[] = [
    { key: "overview", label: "Overview" },
    { key: "features", label: "Features", badge: "3" },
    { key: "pricing", label: "Pricing" },
    { key: "faq", label: "FAQ" },
];

/* ── Demo: Brand Horizontal ── */

function BrandHDemo() {
    return <Tabs items={sampleTabs} variant="brand" />;
}

const brandHCode = `import { Tabs } from "@/components/ui/Tabs";

<Tabs
  items={[
    { key: "overview", label: "Overview" },
    { key: "features", label: "Features", badge: "3" },
    { key: "pricing", label: "Pricing" },
    { key: "faq", label: "FAQ" },
  ]}
  variant="brand"
/>`;

/* ── Demo: Gray Horizontal ── */

function GrayHDemo() {
    return <Tabs items={sampleTabs} variant="gray" />;
}

const grayHCode = `<Tabs items={tabs} variant="gray" />`;

/* ── Demo: Border Horizontal ── */

function BorderHDemo() {
    return <Tabs items={sampleTabs} variant="border" />;
}

const borderHCode = `<Tabs items={tabs} variant="border" />`;

/* ── Demo: Minimal Horizontal ── */

function MinimalHDemo() {
    return <Tabs items={sampleTabs} variant="minimal" />;
}

const minimalHCode = `<Tabs items={tabs} variant="minimal" />`;

/* ── Demo: Underline ── */

function UnderlineDemo() {
    return <Tabs items={sampleTabs} variant="underline" />;
}

const underlineCode = `<Tabs items={tabs} variant="underline" />`;

/* ── Demo: Line ── */

function LineDemo() {
    return <Tabs items={sampleTabs} variant="line" />;
}

const lineCode = `<Tabs items={tabs} variant="line" />`;

/* ── Demo: Brand Vertical ── */

function BrandVDemo() {
    return (
        <div style={{ display: "flex", gap: 24 }}>
            <Tabs items={sampleTabs} variant="brand" orientation="vertical" />
            <Tabs items={sampleTabs} variant="gray" orientation="vertical" />
        </div>
    );
}

const brandVCode = `<Tabs items={tabs} variant="brand" orientation="vertical" />
<Tabs items={tabs} variant="gray" orientation="vertical" />`;

/* ── Demo: Border/Minimal Vertical ── */

function BorderVDemo() {
    return (
        <div style={{ display: "flex", gap: 24 }}>
            <Tabs items={sampleTabs} variant="border" orientation="vertical" />
            <Tabs items={sampleTabs} variant="minimal" orientation="vertical" />
        </div>
    );
}

const borderVCode = `<Tabs items={tabs} variant="border" orientation="vertical" />
<Tabs items={tabs} variant="minimal" orientation="vertical" />`;

/* ── Demo: Sizes ── */

function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Tabs items={sampleTabs} variant="brand" size="sm" />
            <Tabs items={sampleTabs} variant="brand" size="md" />
            <Tabs items={sampleTabs} variant="brand" size="lg" />
        </div>
    );
}

const sizesCode = `<Tabs items={tabs} variant="brand" size="sm" />
<Tabs items={tabs} variant="brand" size="md" />
<Tabs items={tabs} variant="brand" size="lg" />`;

/* ── Demo: Full Width ── */

function FullWidthDemo() {
    return <Tabs items={sampleTabs} variant="underline" fullWidth />;
}

const fullWidthCode = `<Tabs items={tabs} variant="underline" fullWidth />`;

/* ── Props ── */

const tabsProps = [
    { name: "items", type: "TabItem[]", description: "Array of tab items." },
    { name: "variant", type: '"brand" | "gray" | "border" | "minimal" | "underline" | "line"', default: '"brand"', description: "Visual style of the tabs." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the tab buttons." },
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout direction of the tabs." },
    { name: "activeKey", type: "string", description: "Controlled active tab key." },
    { name: "defaultActiveKey", type: "string", description: "Default active tab key for uncontrolled mode." },
    { name: "onChange", type: "(key: string) => void", description: "Callback when the active tab changes." },
    { name: "fullWidth", type: "boolean", default: "false", description: "Make tabs stretch to fill the container width." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

const tabItemProps = [
    { name: "key", type: "string", description: "Unique identifier for the tab." },
    { name: "label", type: "string", description: "Display label." },
    { name: "badge", type: "string", description: "Optional badge text (e.g. a count)." },
    { name: "icon", type: "React.ReactNode", description: "Optional icon element." },
    { name: "disabled", type: "boolean", description: "Disable the tab." },
];

/* ── Page ── */

export default function TabsPage() {
    return (
        <div>
            <DocHeader
                title="Tabs"
                description="Tabbed navigation with 6 visual variants, horizontal and vertical orientations, badges, sizes, and full-width mode. Supports controlled and uncontrolled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Tabs" },
                ]}
            />

            <InstallBlock slug="tabs" components={["Tabs"]} />

            <ComponentPreview title="Button Brand — Horizontal" description="Filled brand-colored active tab." code={brandHCode}>
                <BrandHDemo />
            </ComponentPreview>

            <ComponentPreview title="Button Gray — Horizontal" description="Subtle gray background for the active tab." code={grayHCode}>
                <GrayHDemo />
            </ComponentPreview>

            <ComponentPreview title="Button Border — Horizontal" description="Bordered active tab with card background." code={borderHCode}>
                <BorderHDemo />
            </ComponentPreview>

            <ComponentPreview title="Button Minimal — Horizontal" description="Text-only tabs with no background on active state." code={minimalHCode}>
                <MinimalHDemo />
            </ComponentPreview>

            <ComponentPreview title="Underline" description="Bottom border indicator with a full-width underline track." code={underlineCode}>
                <UnderlineDemo />
            </ComponentPreview>

            <ComponentPreview title="Line" description="Accent-colored bottom line indicator." code={lineCode}>
                <LineDemo />
            </ComponentPreview>

            <ComponentPreview title="Vertical — Brand & Gray" description="Vertical tab layout for sidebar navigation patterns." code={brandVCode}>
                <BrandVDemo />
            </ComponentPreview>

            <ComponentPreview title="Vertical — Border & Minimal" description="Vertical tabs with border and minimal variants." code={borderVCode}>
                <BorderVDemo />
            </ComponentPreview>

            <ComponentPreview title="Sizes" description="Three size options: sm, md (default), and lg." code={sizesCode}>
                <SizesDemo />
            </ComponentPreview>

            <ComponentPreview title="Full Width" description="Tabs stretch to fill the container width." code={fullWidthCode}>
                <FullWidthDemo />
            </ComponentPreview>

            <PropsTable title="Tabs" props={tabsProps} />
            <PropsTable title="TabItem" props={tabItemProps} />
        </div>
    );
}
