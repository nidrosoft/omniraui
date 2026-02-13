"use client";

import { DollarCircle, People, ShoppingCart, Activity, Chart, TrendUp } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Metric } from "@/components/ui/Metric";
import styles from "@/components/ui/Metric/Metric.module.css";

/* ── Demo 01: Simple Metrics ── */

function MetricsSimpleDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                label="Total Revenue"
                value="$45,231"
                change={{ value: "12.5%", direction: "up" }}
                description="vs. last month"
                icon={<DollarCircle size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Active Users"
                value="2,338"
                change={{ value: "3.2%", direction: "up" }}
                description="vs. last month"
                icon={<People size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Orders"
                value="1,247"
                change={{ value: "1.8%", direction: "down" }}
                description="vs. last month"
                icon={<ShoppingCart size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Conversion"
                value="3.24%"
                change={{ value: "0.9%", direction: "up" }}
                description="vs. last month"
                icon={<TrendUp size={20} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}

const simpleCode = `import { DollarCircle, People, ShoppingCart, TrendUp } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";

export function MetricsSimpleDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <Metric
                label="Total Revenue"
                value="$45,231"
                change={{ value: "12.5%", direction: "up" }}
                description="vs. last month"
                icon={<DollarCircle size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Active Users"
                value="2,338"
                change={{ value: "3.2%", direction: "up" }}
                description="vs. last month"
                icon={<People size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Orders"
                value="1,247"
                change={{ value: "1.8%", direction: "down" }}
                description="vs. last month"
                icon={<ShoppingCart size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Conversion"
                value="3.24%"
                change={{ value: "0.9%", direction: "up" }}
                description="vs. last month"
                icon={<TrendUp size={20} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}`;

/* ── Demo 02: Metrics with Progress ── */

function MetricsProgressDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric
                label="Storage Used"
                value="68.2 GB"
                progress={{ value: 68, label: "68.2 GB used", max: "100 GB" }}
                icon={<Chart size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Monthly Goal"
                value="$32,400"
                change={{ value: "8.1%", direction: "up" }}
                progress={{ value: 81, label: "$32,400 earned", max: "$40,000" }}
                icon={<Activity size={20} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}

const progressCode = `import { Chart, Activity } from "iconsax-react";
import { Metric } from "@/components/ui/Metric";

export function MetricsProgressDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <Metric
                label="Storage Used"
                value="68.2 GB"
                progress={{ value: 68, label: "68.2 GB used", max: "100 GB" }}
                icon={<Chart size={20} variant="Bulk" color="currentColor" />}
            />
            <Metric
                label="Monthly Goal"
                value="$32,400"
                change={{ value: "8.1%", direction: "up" }}
                progress={{ value: 81, label: "$32,400 earned", max: "$40,000" }}
                icon={<Activity size={20} variant="Bulk" color="currentColor" />}
            />
        </div>
    );
}`;

/* ── Demo 03: Minimal Metrics ── */

function MetricsMinimalDemo() {
    return (
        <div className={styles.metricGrid}>
            <Metric label="Page Views" value="124,892" change={{ value: "22%", direction: "up" }} />
            <Metric label="Bounce Rate" value="42.3%" change={{ value: "5.1%", direction: "down" }} />
            <Metric label="Avg. Session" value="3m 42s" change={{ value: "0.8%", direction: "up" }} />
            <Metric label="Conversion" value="3.24%" change={{ value: "1.2%", direction: "up" }} />
        </div>
    );
}

const minimalCode = `import { Metric } from "@/components/ui/Metric";

export function MetricsMinimalDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <Metric label="Page Views" value="124,892" change={{ value: "22%", direction: "up" }} />
            <Metric label="Bounce Rate" value="42.3%" change={{ value: "5.1%", direction: "down" }} />
            <Metric label="Avg. Session" value="3m 42s" change={{ value: "0.8%", direction: "up" }} />
            <Metric label="Conversion" value="3.24%" change={{ value: "1.2%", direction: "up" }} />
        </div>
    );
}`;

/* ── Props ── */

const metricProps = [
    { name: "label", type: "string", description: "Metric label displayed above the value" },
    { name: "value", type: "string", description: "The main metric value (formatted)" },
    { name: "change", type: "{ value: string; direction: 'up' | 'down' }", description: "Change indicator with direction arrow and percentage" },
    { name: "description", type: "string", description: "Optional description text below the value" },
    { name: "icon", type: "React.ReactNode", description: "Optional icon displayed in the header" },
    { name: "progress", type: "{ value: number; label?: string; max?: string }", description: "Optional progress bar with percentage fill" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function MetricsPage() {
    return (
        <div>
            <DocHeader
                title="Metrics"
                description="Metric cards for dashboards displaying KPIs, statistics, change indicators, and progress bars. Ideal for analytics and reporting interfaces."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Metrics" },
                ]}
            />

            <ComponentPreview
                title="Metrics — With Icons & Change"
                description="Metric cards with icons, formatted values, and up/down change indicators with color-coded badges."
                code={simpleCode}
            >
                <MetricsSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Metrics — With Progress Bar"
                description="Metric cards with built-in progress bars showing usage or goal completion."
                code={progressCode}
            >
                <MetricsProgressDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Metrics — Minimal"
                description="Compact metric cards with just label, value, and change indicator. No icons or descriptions."
                code={minimalCode}
            >
                <MetricsMinimalDemo />
            </ComponentPreview>

            <PropsTable title="Metric" props={metricProps} />
        </div>
    );
}
