"use client";

import { DollarCircle, People, ShoppingCart, Activity, Chart, TrendUp, Setting2, Eye, ShoppingBag, More } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";
import styles from "@/components/ui/Metric/Metric.module.css";

/* ── Sparkline SVG helpers ── */

function SparklineUp({ color = "var(--color-lime)" }: { color?: string }) {
    const id = `su-${color.replace(/[^a-z0-9]/gi, "")}`;
    return (
        <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0 38 C20 36, 30 28, 50 30 C70 32, 80 18, 100 20 C120 22, 130 10, 150 14 C170 18, 180 6, 200 8" stroke={color} strokeWidth="2" fill="none" />
            <path d="M0 38 C20 36, 30 28, 50 30 C70 32, 80 18, 100 20 C120 22, 130 10, 150 14 C170 18, 180 6, 200 8 L200 48 L0 48 Z" fill={`url(#${id})`} />
        </svg>
    );
}

function SparklineDown({ color = "var(--color-error)" }: { color?: string }) {
    const id = `sd-${color.replace(/[^a-z0-9]/gi, "")}`;
    return (
        <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0 10 C20 12, 30 18, 50 16 C70 14, 80 28, 100 26 C120 24, 130 36, 150 34 C170 32, 180 40, 200 38" stroke={color} strokeWidth="2" fill="none" />
            <path d="M0 10 C20 12, 30 18, 50 16 C70 14, 80 28, 100 26 C120 24, 130 36, 150 34 C170 32, 180 40, 200 38 L200 48 L0 48 Z" fill={`url(#${id})`} />
        </svg>
    );
}

/* ══════════════════════════════════════════════
   Demo 01 — Default: Classic stacked card
   ══════════════════════════════════════════════ */

function DefaultDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                label="Total Revenue"
                value="$45,231"
                change={{ value: "12.5%", direction: "up" }}
                description="vs. last month"
                icon={<DollarCircle size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Active Users"
                value="2,338"
                change={{ value: "3.2%", direction: "up" }}
                description="vs. last month"
                icon={<People size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Orders"
                value="1,247"
                change={{ value: "1.8%", direction: "down" }}
                description="vs. last month"
                icon={<ShoppingCart size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Conversion"
                value="3.24%"
                change={{ value: "0.9%", direction: "up" }}
                description="vs. last month"
                icon={<TrendUp size={18} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}

const defaultCode = `import { DollarCircle, People, ShoppingCart, TrendUp } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";

<Metric
    label="Total Revenue"
    value="$45,231"
    change={{ value: "12.5%", direction: "up" }}
    description="vs. last month"
    icon={<DollarCircle size={18} variant="Bulk" color="currentColor" />}
/>`;

/* ══════════════════════════════════════════════
   Demo 02 — Compact: minimal single-row cards
   ══════════════════════════════════════════════ */

function CompactDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric variant="compact" label="Page Views" value="124,892" change={{ value: "22%", direction: "up" }} description="vs last month" icon={<Eye size={14} variant="Bulk" color="currentColor" />} />
            <Metric variant="compact" label="Bounce Rate" value="42.3%" change={{ value: "5.1%", direction: "down" }} description="vs last month" icon={<Activity size={14} variant="Bulk" color="currentColor" />} />
            <Metric variant="compact" label="Avg. Session" value="3m 42s" change={{ value: "0.8%", direction: "up" }} description="vs last month" icon={<Chart size={14} variant="Bulk" color="currentColor" />} />
            <Metric variant="compact" label="Conversion" value="3.24%" change={{ value: "1.2%", direction: "up" }} description="vs last month" icon={<TrendUp size={14} variant="Bulk" color="currentColor" />} />
        </div>
    );
}

const compactCode = `import { Metric } from "@/components/ui/Metric";

<Metric
    variant="compact"
    label="Page Views"
    value="124,892"
    change={{ value: "22%", direction: "up" }}
    description="vs last month"
    icon={<Eye size={14} variant="Bulk" color="currentColor" />}
/>`;

/* ══════════════════════════════════════════════
   Demo 03 — Tab: "folder" style card
   ══════════════════════════════════════════════ */

function TabDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="tab"
                label="Views 24 hours"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp />}
            />
            <Metric
                variant="tab"
                label="New Signups"
                value="1,248"
                change={{ value: "24.5%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp color="var(--color-success)" />}
            />
        </div>
    );
}

const tabCode = `import { Metric } from "@/components/ui/Metric";

<Metric
    variant="tab"
    label="Views 24 hours"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    description="vs last month"
    chart={<SparklineUp />}
/>`;

/* ══════════════════════════════════════════════
   Demo 04 — Tab with Footer Actions
   ══════════════════════════════════════════════ */

function TabActionsDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="tab"
                label="Views 24 hours"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                actions={<Button variant="ghost" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />}
                chart={<SparklineUp />}
                footer={
                    <>
                        <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} variant="Bulk" color="currentColor" />} />
                        <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
                    </>
                }
            />
            <Metric
                variant="tab"
                label="Orders"
                value="846"
                change={{ value: "3.2%", direction: "down" }}
                description="vs last month"
                actions={<Button variant="ghost" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />}
                chart={<SparklineDown />}
                footer={
                    <>
                        <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} variant="Bulk" color="currentColor" />} />
                        <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
                    </>
                }
            />
        </div>
    );
}

const tabActionsCode = `import { Setting2, More } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";

<Metric
    variant="tab"
    label="Views 24 hours"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    description="vs last month"
    actions={<Button variant="ghost" size="sm" iconOnly icon={<More size={16} />} />}
    chart={<SparklineUp />}
    footer={
        <>
            <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} />} />
            <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
        </>
    }
/>`;

/* ══════════════════════════════════════════════
   Demo 05 — Inline: horizontal icon + stats
   ══════════════════════════════════════════════ */

function InlineDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="inline"
                label="Total Views"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                icon={<Eye size={24} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="inline"
                label="Total Orders"
                value="1,580"
                change={{ value: "12.3%", direction: "up" }}
                description="vs last month"
                icon={<ShoppingBag size={24} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="inline"
                label="Active Users"
                value="4,200"
                change={{ value: "8.1%", direction: "up" }}
                description="vs last month"
                icon={<People size={24} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="inline"
                label="Revenue"
                value="$18,400"
                change={{ value: "5.4%", direction: "down" }}
                description="vs last month"
                icon={<DollarCircle size={24} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}

const inlineCode = `import { Eye } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";

<Metric
    variant="inline"
    label="Total Views"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    description="vs last month"
    icon={<Eye size={24} variant="Bulk" color="currentColor" />}
/>`;

/* ══════════════════════════════════════════════
   Demo 06 — Accent: colored left border strip
   ══════════════════════════════════════════════ */

function AccentDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="accent"
                label="Storage Used"
                value="68.2 GB"
                progress={{ value: 68, label: "68.2 GB used", max: "100 GB" }}
                icon={<Chart size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="accent"
                label="Monthly Goal"
                value="$32,400"
                change={{ value: "8.1%", direction: "up" }}
                progress={{ value: 81, label: "$32,400 earned", max: "$40,000" }}
                icon={<Activity size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="accent"
                label="Active Users"
                value="4,200"
                change={{ value: "8.1%", direction: "up" }}
                description="vs last month"
                icon={<People size={18} variant="Bulk" color="currentColor" />}
            />
            <Metric
                variant="accent"
                label="Revenue"
                value="$18,400"
                change={{ value: "5.4%", direction: "down" }}
                description="vs last month"
                icon={<DollarCircle size={18} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}

const accentCode = `import { Chart, Activity } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";

<Metric
    variant="accent"
    label="Storage Used"
    value="68.2 GB"
    progress={{ value: 68, label: "68.2 GB used", max: "100 GB" }}
    icon={<Chart size={18} variant="Bulk" color="currentColor" />}
/>`;

/* ══════════════════════════════════════════════
   Demo 07 — Split: stats left, chart right
   ══════════════════════════════════════════════ */

function SplitDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="split"
                label="Views 24 hours"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp />}
            />
            <Metric
                variant="split"
                label="Orders"
                value="846"
                change={{ value: "3.2%", direction: "down" }}
                description="vs last month"
                chart={<SparklineDown />}
            />
        </div>
    );
}

const splitCode = `import { Metric } from "@/components/ui/Metric";

<Metric
    variant="split"
    label="Views 24 hours"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    description="vs last month"
    chart={<SparklineUp />}
/>`;

/* ══════════════════════════════════════════════
   Demo 08 — Default with Chart + Footer
   ══════════════════════════════════════════════ */

function ChartFooterDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                label="Views 24 hours"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp />}
                footer={<Button variant="ghost" size="sm" style={{ color: "var(--color-lime)" }}>View report</Button>}
            />
            <Metric
                label="New Signups"
                value="1,248"
                change={{ value: "24.5%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp color="var(--color-success)" />}
                footer={<Button variant="ghost" size="sm" style={{ color: "var(--color-lime)" }}>View report</Button>}
            />
            <Metric
                label="Orders"
                value="846"
                change={{ value: "3.2%", direction: "down" }}
                description="vs last month"
                chart={<SparklineDown />}
                footer={<Button variant="ghost" size="sm" style={{ color: "var(--color-lime)" }}>View report</Button>}
            />
            <Metric
                label="Revenue"
                value="$12,480"
                change={{ value: "18.7%", direction: "up" }}
                description="vs last month"
                chart={<SparklineUp color="var(--color-text-secondary)" />}
                footer={<Button variant="ghost" size="sm" style={{ color: "var(--color-lime)" }}>View report</Button>}
            />
        </div>
    );
}

const chartFooterCode = `import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";

<Metric
    label="Views 24 hours"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    description="vs last month"
    chart={<SparklineUp />}
    footer={<Button variant="ghost" size="sm" style={{ color: "var(--color-lime)" }}>View report</Button>}
/>`;

/* ══════════════════════════════════════════════
   Demo 09 — Inline with Footer Actions
   ══════════════════════════════════════════════ */

function InlineFooterDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                variant="inline"
                label="Total Views"
                value="2,000"
                change={{ value: "100%", direction: "up" }}
                description="vs last month"
                icon={<Eye size={24} variant="Bulk" color="currentColor" />}
                footer={
                    <>
                        <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} variant="Bulk" color="currentColor" />} />
                        <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
                    </>
                }
            />
            <Metric
                variant="inline"
                label="Revenue"
                value="$18,400"
                change={{ value: "5.4%", direction: "down" }}
                description="vs last month"
                icon={<DollarCircle size={24} variant="Bulk" color="currentColor" />}
                footer={
                    <>
                        <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} variant="Bulk" color="currentColor" />} />
                        <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
                    </>
                }
            />
        </div>
    );
}

const inlineFooterCode = `import { Eye, Setting2 } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";

<Metric
    variant="inline"
    label="Total Views"
    value="2,000"
    change={{ value: "100%", direction: "up" }}
    icon={<Eye size={24} variant="Bulk" color="currentColor" />}
    footer={
        <>
            <Button variant="ghost" size="sm" iconOnly icon={<Setting2 size={16} />} />
            <Button variant="secondary" size="sm" style={{ marginLeft: "auto" }}>View report</Button>
        </>
    }
/>`;

/* ── Props ── */

const metricProps = [
    { name: "variant", type: "'default' | 'compact' | 'tab' | 'inline' | 'accent' | 'split'", description: "Visual variant — each has a unique card layout" },
    { name: "label", type: "string", description: "Metric label displayed above or beside the value" },
    { name: "value", type: "string", description: "The main metric value (formatted)" },
    { name: "change", type: "{ value: string; direction: 'up' | 'down' }", description: "Change indicator with direction arrow and percentage" },
    { name: "description", type: "string", description: "Optional description text" },
    { name: "icon", type: "React.ReactNode", description: "Optional icon — size and placement varies by variant" },
    { name: "actions", type: "React.ReactNode", description: "Inline actions rendered in the header area (e.g. a three-dot menu)" },
    { name: "progress", type: "{ value: number; label?: string; max?: string }", description: "Optional progress bar (default and accent variants)" },
    { name: "chart", type: "React.ReactNode", description: "Optional chart or sparkline element" },
    { name: "footer", type: "React.ReactNode", description: "Footer area with a top border divider for action buttons or links" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function MetricsPage() {
    return (
        <div>
            <DocHeader
                title="Metrics"
                description="Metric cards for dashboards displaying KPIs, statistics, change indicators, sparkline charts, and progress bars. Six distinct visual variants for different dashboard needs."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Metrics" },
                ]}
            />

            <InstallBlock slug="metrics" components={["Metric", "Button"]} />

            <ComponentPreview
                title="Default — Classic Stacked"
                description="Standard metric card with label, value, change badge, description, and optional icon. Stacked vertical layout."
                code={defaultCode}
            >
                <DefaultDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Compact — Minimal Row"
                description="Ultra-compact single-row metric with small icon, value, and change badge. Ideal for dense dashboards."
                code={compactCode}
            >
                <CompactDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Tab — Folder Style"
                description="The label sits as a tab above the card body, creating a folder-like appearance. Includes sparkline chart."
                code={tabCode}
            >
                <TabDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Tab — With Footer Actions"
                description="Folder-style card with a three-dot menu, sparkline chart, and footer with settings and report buttons."
                code={tabActionsCode}
            >
                <TabActionsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Inline — Horizontal Icon"
                description="Horizontal layout with a large accent icon on the left and stats stacked on the right. Great for feature highlights."
                code={inlineCode}
            >
                <InlineDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Inline — With Footer Actions"
                description="Horizontal icon metric with a footer containing settings and report action buttons."
                code={inlineFooterCode}
            >
                <InlineFooterDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Accent — Left Border Strip"
                description="Colored accent strip on the left edge. Supports progress bars for goal tracking and usage metrics."
                code={accentCode}
            >
                <AccentDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Split — Stats & Chart Side-by-Side"
                description="Two-column layout with stats on the left and a sparkline chart on the right. Maximizes horizontal space."
                code={splitCode}
            >
                <SplitDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Chart — With Footer Link"
                description="Default card with sparkline chart and a footer link for navigation to detailed reports."
                code={chartFooterCode}
            >
                <ChartFooterDemo />
            </ComponentPreview>

            <PropsTable title="Metric" props={metricProps} />
        </div>
    );
}
