"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

/* ── Demo 01: Line Simple ── */

function LineSimpleDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%", maxWidth: 320 }}>
            <LoadingIndicator variant="line" />
            <LoadingIndicator variant="line" color="info" />
            <LoadingIndicator variant="line" color="success" />
        </div>
    );
}

const lineSimpleCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="line" />
<LoadingIndicator variant="line" color="info" />
<LoadingIndicator variant="line" color="success" />`;

/* ── Demo 02: Line Simple with Label ── */

function LineSimpleLabelDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%", maxWidth: 320 }}>
            <LoadingIndicator variant="line" label="Loading..." />
            <LoadingIndicator variant="line" label="Uploading" value={65} />
            <LoadingIndicator variant="line" label="Processing" value={100} color="success" />
        </div>
    );
}

const lineSimpleLabelCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="line" label="Loading..." />
<LoadingIndicator variant="line" label="Uploading" value={65} />
<LoadingIndicator variant="line" label="Processing" value={100} color="success" />`;

/* ── Demo 03: Line Spinner ── */

function LineSpinnerDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <LoadingIndicator variant="spinner" />
            <LoadingIndicator variant="spinner" color="info" />
            <LoadingIndicator variant="spinner" color="success" />
            <LoadingIndicator variant="spinner" color="warning" />
            <LoadingIndicator variant="spinner" color="error" />
        </div>
    );
}

const lineSpinnerCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="spinner" />
<LoadingIndicator variant="spinner" color="info" />
<LoadingIndicator variant="spinner" color="success" />
<LoadingIndicator variant="spinner" color="warning" />
<LoadingIndicator variant="spinner" color="error" />`;

/* ── Demo 04: Line Spinner with Label ── */

function LineSpinnerLabelDemo() {
    return (
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
            <LoadingIndicator variant="spinner" label="Loading..." />
            <LoadingIndicator variant="spinner" label="Please wait" inline />
        </div>
    );
}

const lineSpinnerLabelCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="spinner" label="Loading..." />
<LoadingIndicator variant="spinner" label="Please wait" inline />`;

/* ── Demo 05: Dot Circle ── */

function DotCircleDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <LoadingIndicator variant="dotCircle" />
            <LoadingIndicator variant="dotCircle" color="info" />
            <LoadingIndicator variant="dotCircle" color="success" />
            <LoadingIndicator variant="dotCircle" color="warning" />
            <LoadingIndicator variant="dotCircle" color="error" />
        </div>
    );
}

const dotCircleCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="dotCircle" />
<LoadingIndicator variant="dotCircle" color="info" />
<LoadingIndicator variant="dotCircle" color="success" />`;

/* ── Demo 06: Dot Circle with Label ── */

function DotCircleLabelDemo() {
    return (
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
            <LoadingIndicator variant="dotCircle" label="Loading..." />
            <LoadingIndicator variant="dotCircle" label="Syncing" inline />
        </div>
    );
}

const dotCircleLabelCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="dotCircle" label="Loading..." />
<LoadingIndicator variant="dotCircle" label="Syncing" inline />`;

/* ── Demo 07: Dot Bounce ── */

function DotBounceDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <LoadingIndicator variant="dotBounce" />
            <LoadingIndicator variant="dotBounce" color="info" />
            <LoadingIndicator variant="dotBounce" color="white" />
        </div>
    );
}

const dotBounceCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="dotBounce" />
<LoadingIndicator variant="dotBounce" color="info" />
<LoadingIndicator variant="dotBounce" color="white" />`;

/* ── Demo 08: Pulse ── */

function PulseDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <LoadingIndicator variant="pulse" />
            <LoadingIndicator variant="pulse" color="info" />
            <LoadingIndicator variant="pulse" color="success" />
            <LoadingIndicator variant="pulse" label="Live" inline />
        </div>
    );
}

const pulseCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

<LoadingIndicator variant="pulse" />
<LoadingIndicator variant="pulse" color="info" />
<LoadingIndicator variant="pulse" label="Live" inline />`;

/* ── Demo 09: Sizes ── */

function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <LoadingIndicator variant="spinner" size="sm" />
                <LoadingIndicator variant="spinner" size="md" />
                <LoadingIndicator variant="spinner" size="lg" />
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <LoadingIndicator variant="dotCircle" size="sm" />
                <LoadingIndicator variant="dotCircle" size="md" />
                <LoadingIndicator variant="dotCircle" size="lg" />
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <LoadingIndicator variant="dotBounce" size="sm" />
                <LoadingIndicator variant="dotBounce" size="md" />
                <LoadingIndicator variant="dotBounce" size="lg" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
                <LoadingIndicator variant="line" size="sm" />
                <LoadingIndicator variant="line" size="md" />
                <LoadingIndicator variant="line" size="lg" />
            </div>
        </div>
    );
}

const sizesCode = `import { LoadingIndicator } from "@/components/ui/LoadingIndicator";

{/* Spinners */}
<LoadingIndicator variant="spinner" size="sm" />
<LoadingIndicator variant="spinner" size="md" />
<LoadingIndicator variant="spinner" size="lg" />

{/* Dot Circles */}
<LoadingIndicator variant="dotCircle" size="sm" />
<LoadingIndicator variant="dotCircle" size="md" />
<LoadingIndicator variant="dotCircle" size="lg" />

{/* Lines */}
<LoadingIndicator variant="line" size="sm" />
<LoadingIndicator variant="line" size="md" />
<LoadingIndicator variant="line" size="lg" />`;

/* ── Props ── */

const props = [
    { name: "variant", type: '"line" | "spinner" | "dotCircle" | "dotBounce" | "pulse"', default: '"spinner"', description: "Visual style of the loading indicator." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the indicator and label text." },
    { name: "color", type: '"lime" | "white" | "info" | "success" | "warning" | "error"', default: '"lime"', description: "Accent color of the animated element." },
    { name: "label", type: "string", description: "Text label displayed alongside the indicator." },
    { name: "value", type: "number (0–100)", description: "For line variant only: determinate progress value. Omit for indeterminate animation." },
    { name: "inline", type: "boolean", default: "false", description: "Place label inline (row) instead of below (column)." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

/* ── Page ── */

export default function LoadingIndicatorPage() {
    return (
        <div>
            <DocHeader
                title="Loading Indicator"
                description="Animated loading indicators for async operations. Available as progress bars, spinners, dot circles, bouncing dots, and pulse animations with labels, sizes, and color variants."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Loading Indicator" },
                ]}
            />

            <InstallBlock slug="loading-indicator" components={["LoadingIndicator"]} />

            <ComponentPreview
                title="Line Simple"
                description="Indeterminate progress bar with a sliding fill animation. Ideal for page loads and background tasks."
                code={lineSimpleCode}
            >
                <LineSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Line Simple with Label"
                description="Progress bar with a label and optional percentage. Pass a value prop (0–100) for determinate progress."
                code={lineSimpleLabelCode}
            >
                <LineSimpleLabelDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Line Spinner"
                description="Classic circular spinner with a rotating arc. The most common loading indicator."
                code={lineSpinnerCode}
            >
                <LineSpinnerDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Line Spinner with Label"
                description="Spinner with a text label below or inline. Use inline for compact layouts."
                code={lineSpinnerLabelCode}
            >
                <LineSpinnerLabelDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Dot Circle"
                description="Eight dots arranged in a circle with staggered pulse animations."
                code={dotCircleCode}
            >
                <DotCircleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Dot Circle with Label"
                description="Dot circle with a text label below or inline."
                code={dotCircleLabelCode}
            >
                <DotCircleLabelDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Dot Bounce"
                description="Three horizontal dots with a staggered bounce animation. Great for chat typing indicators."
                code={dotBounceCode}
            >
                <DotBounceDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Pulse"
                description="A simple pulsing circle. Useful for live status indicators."
                code={pulseCode}
            >
                <PulseDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Sizes"
                description="All variants support three sizes: sm, md (default), and lg."
                code={sizesCode}
            >
                <SizesDemo />
            </ComponentPreview>

            <PropsTable title="LoadingIndicator" props={props} />
        </div>
    );
}
