"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ActivityGauge } from "@/components/ui/ActivityGauge";
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

/* ── Page ── */

export default function ActivityGaugePage() {
    return (
        <div>
            <DocHeader
                title="Activity Gauges"
                description="Circular gauge components for visualizing progress, usage, and activity metrics. Supports multiple colors, sizes, and custom units."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Activity Gauges" },
                ]}
            />

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

            <PropsTable title="ActivityGauge" props={gaugeProps} />
        </div>
    );
}
