"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ActivityGauge, MultiActivityGauge } from "@/components/ui/ActivityGauge";
import styles from "@/components/ui/ActivityGauge/ActivityGauge.module.css";

/* ── Demo 01: Simple Gauges ── */

function GaugeSimpleDemo() {
    return (
        <div className={styles.gaugeGrid}>
            <ActivityGauge value={72} label="CPU Usage" color="lime" />
            <ActivityGauge value={45} label="Memory" color="info" />
            <ActivityGauge value={89} label="Disk Space" color="warning" />
            <ActivityGauge value={34} label="Network" color="error" />
        </div>
    );
}

const simpleCode = `import { ActivityGauge } from "@/components/ui/ActivityGauge";

export function GaugeSimpleDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <ActivityGauge value={72} label="CPU Usage" color="lime" />
            <ActivityGauge value={45} label="Memory" color="info" />
            <ActivityGauge value={89} label="Disk Space" color="warning" />
            <ActivityGauge value={34} label="Network" color="error" />
        </div>
    );
}`;

/* ── Demo 02: With Description & Custom Unit ── */

function GaugeDescriptionDemo() {
    return (
        <div className={styles.gaugeGrid}>
            <ActivityGauge
                value={1842}
                max={2500}
                label="Steps Today"
                description="Goal: 2,500 steps"
                unit="steps"
                color="success"
            />
            <ActivityGauge
                value={320}
                max={500}
                label="Calories Burned"
                description="Goal: 500 kcal"
                unit="kcal"
                color="error"
            />
            <ActivityGauge
                value={6.2}
                max={8}
                label="Hours Slept"
                description="Goal: 8 hours"
                unit="hrs"
                color="info"
            />
        </div>
    );
}

const descriptionCode = `import { ActivityGauge } from "@/components/ui/ActivityGauge";

export function GaugeDescriptionDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <ActivityGauge
                value={1842}
                max={2500}
                label="Steps Today"
                description="Goal: 2,500 steps"
                unit="steps"
                color="success"
            />
            <ActivityGauge
                value={320}
                max={500}
                label="Calories Burned"
                description="Goal: 500 kcal"
                unit="kcal"
                color="error"
            />
            <ActivityGauge
                value={6.2}
                max={8}
                label="Hours Slept"
                description="Goal: 8 hours"
                unit="hrs"
                color="info"
            />
        </div>
    );
}`;

/* ── Demo 03: Different Sizes ── */

function GaugeSizesDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
            <ActivityGauge value={65} label="Small" size={100} strokeWidth={8} color="lime" />
            <ActivityGauge value={78} label="Medium" size={140} strokeWidth={10} color="info" />
            <ActivityGauge value={92} label="Large" size={180} strokeWidth={12} color="warning" />
        </div>
    );
}

const sizesCode = `import { ActivityGauge } from "@/components/ui/ActivityGauge";

export function GaugeSizesDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
            <ActivityGauge value={65} label="Small" size={100} strokeWidth={8} color="lime" />
            <ActivityGauge value={78} label="Medium" size={140} strokeWidth={10} color="info" />
            <ActivityGauge value={92} label="Large" size={180} strokeWidth={12} color="warning" />
        </div>
    );
}`;

/* ── Demo 04: Multi-Ring — Active Users ── */

function MultiRingActiveUsersDemo() {
    return (
        <div className={styles.multiGaugeGrid}>
            <MultiActivityGauge
                rings={[
                    { value: 85, label: "Desktop" },
                    { value: 62, label: "Mobile" },
                    { value: 38, label: "Tablet" },
                ]}
                centerLabel="Active users"
                centerValue="1,000"
                color="lime"
                size={200}
                strokeWidth={12}
            />
            <MultiActivityGauge
                rings={[
                    { value: 72, label: "Direct" },
                    { value: 54, label: "Organic" },
                    { value: 28, label: "Referral" },
                ]}
                centerLabel="Traffic"
                centerValue="8.4K"
                color="info"
                size={200}
                strokeWidth={12}
            />
            <MultiActivityGauge
                rings={[
                    { value: 95, label: "Revenue" },
                    { value: 78, label: "Orders" },
                    { value: 45, label: "Returns" },
                ]}
                centerLabel="Sales"
                centerValue="$24K"
                color="success"
                size={200}
                strokeWidth={12}
            />
        </div>
    );
}

const multiRingActiveUsersCode = `import { MultiActivityGauge } from "@/components/ui/ActivityGauge";

<MultiActivityGauge
    rings={[
        { value: 85, label: "Desktop" },
        { value: 62, label: "Mobile" },
        { value: 38, label: "Tablet" },
    ]}
    centerLabel="Active users"
    centerValue="1,000"
    color="lime"
    size={200}
    strokeWidth={12}
/>`;

/* ── Demo 05: Multi-Ring — Two Rings ── */

function MultiRingTwoDemo() {
    return (
        <div className={styles.multiGaugeGrid}>
            <MultiActivityGauge
                rings={[
                    { value: 78, label: "Completed" },
                    { value: 45, label: "In Progress" },
                ]}
                centerLabel="Tasks"
                centerValue="156"
                color="lime"
                size={180}
                strokeWidth={14}
            />
            <MultiActivityGauge
                rings={[
                    { value: 92, label: "Uptime" },
                    { value: 67, label: "Latency" },
                ]}
                centerLabel="Health"
                centerValue="99.9%"
                color="success"
                size={180}
                strokeWidth={14}
            />
            <MultiActivityGauge
                rings={[
                    { value: 60, label: "Used" },
                    { value: 35, label: "Reserved" },
                ]}
                centerLabel="Storage"
                centerValue="1.2TB"
                color="warning"
                size={180}
                strokeWidth={14}
            />
        </div>
    );
}

const multiRingTwoCode = `import { MultiActivityGauge } from "@/components/ui/ActivityGauge";

<MultiActivityGauge
    rings={[
        { value: 78, label: "Completed" },
        { value: 45, label: "In Progress" },
    ]}
    centerLabel="Tasks"
    centerValue="156"
    color="lime"
    size={180}
    strokeWidth={14}
/>`;

/* ── Demo 06: Multi-Ring — Color Variants ── */

function MultiRingColorsDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
            <MultiActivityGauge
                rings={[
                    { value: 88, label: "Critical" },
                    { value: 65, label: "Warning" },
                    { value: 30, label: "Info" },
                ]}
                centerLabel="Alerts"
                centerValue="42"
                color="error"
                size={160}
                strokeWidth={10}
            />
            <MultiActivityGauge
                rings={[
                    { value: 70, label: "Sent" },
                    { value: 52, label: "Opened" },
                    { value: 25, label: "Clicked" },
                ]}
                centerLabel="Emails"
                centerValue="5.2K"
                color="info"
                size={200}
                strokeWidth={12}
            />
            <MultiActivityGauge
                rings={[
                    { value: 95, label: "Quota" },
                    { value: 80, label: "Bandwidth" },
                    { value: 55, label: "Requests" },
                ]}
                centerLabel="API Usage"
                centerValue="82%"
                color="warning"
                size={160}
                strokeWidth={10}
            />
        </div>
    );
}

const multiRingColorsCode = `import { MultiActivityGauge } from "@/components/ui/ActivityGauge";

<MultiActivityGauge
    rings={[
        { value: 88, label: "Critical" },
        { value: 65, label: "Warning" },
        { value: 30, label: "Info" },
    ]}
    centerLabel="Alerts"
    centerValue="42"
    color="error"
    size={160}
    strokeWidth={10}
/>`;

/* ── Props ── */

const gaugeProps = [
    { name: "value", type: "number", description: "Current value of the gauge" },
    { name: "max", type: "number", default: "100", description: "Maximum value for the gauge" },
    { name: "label", type: "string", description: "Label displayed below the gauge" },
    { name: "description", type: "string", description: "Description text below the label" },
    { name: "unit", type: "string", default: '"%"', description: "Unit displayed below the value inside the gauge" },
    { name: "color", type: '"lime" | "info" | "warning" | "error" | "success"', default: '"lime"', description: "Color of the gauge fill" },
    { name: "size", type: "number", default: "140", description: "Diameter of the gauge in pixels" },
    { name: "strokeWidth", type: "number", default: "10", description: "Width of the gauge ring stroke" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

const multiGaugeProps = [
    { name: "rings", type: "RingData[]", description: "Array of ring data objects (up to 3). Each has value, max?, and label." },
    { name: "centerLabel", type: "string", description: "Small label text in the center of the gauge" },
    { name: "centerValue", type: "string | number", description: "Large value text in the center of the gauge" },
    { name: "color", type: '"lime" | "info" | "warning" | "error" | "success"', default: '"lime"', description: "Base color — rings use progressively lighter shades" },
    { name: "size", type: "number", default: "180", description: "Diameter of the gauge in pixels" },
    { name: "strokeWidth", type: "number", default: "10", description: "Width of each ring stroke" },
    { name: "gap", type: "number", default: "4", description: "Gap between concentric rings in pixels" },
    { name: "showLegend", type: "boolean", default: "true", description: "Show color legend below the gauge" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function ActivityGaugePage() {
    return (
        <div>
            <DocHeader
                title="Activity Gauges"
                description="Circular gauge components for visualizing progress, usage, and activity metrics. Supports single and multi-ring variants with multiple colors, sizes, and custom units."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Activity Gauges" },
                ]}
            />

            <InstallBlock slug="activity-gauge" components={["ActivityGauge"]} />

            <ComponentPreview
                title="Activity Gauge — Simple"
                description="Basic circular gauges with percentage values and color variants."
                code={simpleCode}
            >
                <GaugeSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Activity Gauge — With Description & Custom Units"
                description="Gauges with custom units, goal descriptions, and non-percentage values."
                code={descriptionCode}
            >
                <GaugeDescriptionDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Activity Gauge — Sizes"
                description="Gauges in different sizes with adjustable stroke width."
                code={sizesCode}
            >
                <GaugeSizesDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Multi-Ring Gauge — Three Rings"
                description="Concentric multi-ring gauges with three data series using progressively lighter shades of the same color. Includes center label, value, and legend."
                code={multiRingActiveUsersCode}
            >
                <MultiRingActiveUsersDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Multi-Ring Gauge — Two Rings"
                description="Two-ring variant with thicker strokes for a bolder look. Great for binary comparisons."
                code={multiRingTwoCode}
            >
                <MultiRingTwoDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Multi-Ring Gauge — Color Variants"
                description="Multi-ring gauges in different color themes and sizes, showing error, info, and warning palettes."
                code={multiRingColorsCode}
            >
                <MultiRingColorsDemo />
            </ComponentPreview>

            <PropsTable title="ActivityGauge" props={gaugeProps} />
            <PropsTable title="MultiActivityGauge" props={multiGaugeProps} />
        </div>
    );
}
