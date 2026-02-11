"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { ProgressBar, ProgressBarCircle, ProgressBarHalfCircle } from "@/components/ui/ProgressBar";

const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 8,
    marginTop: 48,
};

const sectionDesc: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 24,
};

/* ── Text Right (default) ── */
function TextRightDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
            <ProgressBar value={40} />
            <ProgressBar value={70} label="Uploading..." />
        </div>
    );
}

/* ── Text Bottom ── */
function TextBottomDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
            <ProgressBar value={40} textPosition="bottom" />
            <ProgressBar value={70} textPosition="bottom" label="Storage used" />
        </div>
    );
}

/* ── Text Top Floating ── */
function TextTopFloatingDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
            <ProgressBar value={40} textPosition="top-floating" />
            <ProgressBar value={75} textPosition="top-floating" label="Progress" />
        </div>
    );
}

/* ── Text Bottom Floating ── */
function TextBottomFloatingDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
            <ProgressBar value={40} textPosition="bottom-floating" />
            <ProgressBar value={60} textPosition="bottom-floating" label="Downloading" />
        </div>
    );
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
            <ProgressBar value={50} size="sm" label="Small" />
            <ProgressBar value={50} size="md" label="Medium" />
            <ProgressBar value={50} size="lg" label="Large" />
        </div>
    );
}

/* ── Colors ── */
function ColorsDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
            <ProgressBar value={60} color="lime" label="Lime" />
            <ProgressBar value={60} color="blue" label="Blue" />
            <ProgressBar value={60} color="orange" label="Orange" />
            <ProgressBar value={60} color="red" label="Red" />
        </div>
    );
}

/* ── Circle Progress ── */
function CircleDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <ProgressBarCircle size="xxs" value={40} />
            <ProgressBarCircle size="xs" value={40} />
            <ProgressBarCircle size="sm" value={40} />
            <ProgressBarCircle size="md" value={40} />
            <ProgressBarCircle size="lg" value={40} />
        </div>
    );
}

/* ── Circle with Label ── */
function CircleLabelDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <ProgressBarCircle size="xs" value={40} label="Users" />
            <ProgressBarCircle size="sm" value={65} label="Active" />
            <ProgressBarCircle size="md" value={80} label="Storage" />
        </div>
    );
}

/* ── Half Circle ── */
function HalfCircleDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <ProgressBarHalfCircle size="xxs" value={40} />
            <ProgressBarHalfCircle size="xs" value={40} />
            <ProgressBarHalfCircle size="sm" value={40} />
            <ProgressBarHalfCircle size="md" value={40} />
            <ProgressBarHalfCircle size="lg" value={40} />
        </div>
    );
}

/* ── Half Circle with Label ── */
function HalfCircleLabelDemo() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <ProgressBarHalfCircle size="xs" value={40} label="Users" />
            <ProgressBarHalfCircle size="sm" value={65} label="Active users" />
            <ProgressBarHalfCircle size="md" value={80} label="Active users" />
        </div>
    );
}

const linearProps = [
    { name: "value", type: "number", description: "Current progress value (required)." },
    { name: "min", type: "number", default: "0", description: "Minimum value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "label", type: "string", description: "Optional label above the bar." },
    { name: "textPosition", type: '"right" | "bottom" | "top-floating" | "bottom-floating" | "none"', default: '"right"', description: "Where to display the percentage." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Track height." },
    { name: "color", type: '"lime" | "blue" | "red" | "orange"', default: '"lime"', description: "Fill color." },
];

const circleProps = [
    { name: "value", type: "number", description: "Current progress value (required)." },
    { name: "min", type: "number", default: "0", description: "Minimum value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "label", type: "string", description: "Label below the percentage." },
    { name: "size", type: '"xxs" | "xs" | "sm" | "md" | "lg"', default: '"sm"', description: "Circle diameter." },
    { name: "color", type: '"lime" | "blue" | "red" | "orange"', default: '"lime"', description: "Arc color." },
];

export default function ProgressIndicatorPage() {
    return (
        <div>
            <DocHeader
                title="Progress Indicator"
                description="Linear, circular, and half-circle progress indicators with multiple text positions, sizes, and colors."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Progress Indicator" },
                ]}
            />

            {/* ── Text Right ── */}
            <h2 style={sectionHeading}>Text Right</h2>
            <p style={sectionDesc}>Default linear bar with percentage on the right.</p>
            <ComponentPreview title="Text Right" code={`<ProgressBar value={40} />\n<ProgressBar value={70} label="Uploading..." />`}>
                <TextRightDemo />
            </ComponentPreview>

            {/* ── Text Bottom ── */}
            <h2 style={sectionHeading}>Text Bottom</h2>
            <p style={sectionDesc}>Percentage displayed below the bar.</p>
            <ComponentPreview title="Text Bottom" code={`<ProgressBar value={40} textPosition="bottom" />\n<ProgressBar value={70} textPosition="bottom" label="Storage used" />`}>
                <TextBottomDemo />
            </ComponentPreview>

            {/* ── Text Top Floating ── */}
            <h2 style={sectionHeading}>Text Top Floating</h2>
            <p style={sectionDesc}>A floating bubble above the bar that follows the fill position.</p>
            <ComponentPreview title="Top Floating" code={`<ProgressBar value={40} textPosition="top-floating" />\n<ProgressBar value={75} textPosition="top-floating" label="Progress" />`}>
                <TextTopFloatingDemo />
            </ComponentPreview>

            {/* ── Text Bottom Floating ── */}
            <h2 style={sectionHeading}>Text Bottom Floating</h2>
            <p style={sectionDesc}>A floating bubble below the bar that follows the fill position.</p>
            <ComponentPreview title="Bottom Floating" code={`<ProgressBar value={40} textPosition="bottom-floating" />\n<ProgressBar value={60} textPosition="bottom-floating" label="Downloading" />`}>
                <TextBottomFloatingDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three track heights: sm (4px), md (8px), lg (12px).</p>
            <ComponentPreview title="Sizes" code={`<ProgressBar value={50} size="sm" label="Small" />\n<ProgressBar value={50} size="md" label="Medium" />\n<ProgressBar value={50} size="lg" label="Large" />`}>
                <SizesDemo />
            </ComponentPreview>

            {/* ── Colors ── */}
            <h2 style={sectionHeading}>Colors</h2>
            <p style={sectionDesc}>Four color options for the fill.</p>
            <ComponentPreview title="Colors" code={`<ProgressBar value={60} color="lime" label="Lime" />\n<ProgressBar value={60} color="blue" label="Blue" />\n<ProgressBar value={60} color="orange" label="Orange" />\n<ProgressBar value={60} color="red" label="Red" />`}>
                <ColorsDemo />
            </ComponentPreview>

            {/* ── Circle ── */}
            <h2 style={sectionHeading}>Circle Progress Bar</h2>
            <p style={sectionDesc}>Circular progress in five sizes.</p>
            <ComponentPreview title="Circle" code={`<ProgressBarCircle size="xxs" value={40} />\n<ProgressBarCircle size="xs" value={40} />\n<ProgressBarCircle size="sm" value={40} />\n<ProgressBarCircle size="md" value={40} />\n<ProgressBarCircle size="lg" value={40} />`}>
                <CircleDemo />
            </ComponentPreview>

            {/* ── Circle with Label ── */}
            <h2 style={sectionHeading}>Circle with Label</h2>
            <p style={sectionDesc}>Circle progress with a descriptive label below the percentage.</p>
            <ComponentPreview title="Circle Label" code={`<ProgressBarCircle size="xs" value={40} label="Users" />\n<ProgressBarCircle size="sm" value={65} label="Active" />\n<ProgressBarCircle size="md" value={80} label="Storage" />`}>
                <CircleLabelDemo />
            </ComponentPreview>

            {/* ── Half Circle ── */}
            <h2 style={sectionHeading}>Half Circle Progress Bar</h2>
            <p style={sectionDesc}>Semi-circular gauge in five sizes.</p>
            <ComponentPreview title="Half Circle" code={`<ProgressBarHalfCircle size="xxs" value={40} />\n<ProgressBarHalfCircle size="xs" value={40} />\n<ProgressBarHalfCircle size="sm" value={40} />\n<ProgressBarHalfCircle size="md" value={40} />\n<ProgressBarHalfCircle size="lg" value={40} />`}>
                <HalfCircleDemo />
            </ComponentPreview>

            {/* ── Half Circle with Label ── */}
            <h2 style={sectionHeading}>Half Circle with Label</h2>
            <p style={sectionDesc}>Semi-circular gauge with a descriptive label.</p>
            <ComponentPreview title="Half Circle Label" code={`<ProgressBarHalfCircle size="xs" value={40} label="Users" />\n<ProgressBarHalfCircle size="sm" value={65} label="Active users" />\n<ProgressBarHalfCircle size="md" value={80} label="Active users" />`}>
                <HalfCircleLabelDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the desired progress component.</p>
            <CodeBlock
                code={`import { ProgressBar, ProgressBarCircle, ProgressBarHalfCircle } from "@/components/ui/ProgressBar";

// Linear
<ProgressBar value={40} />
<ProgressBar value={70} textPosition="top-floating" size="lg" color="blue" />

// Circle
<ProgressBarCircle size="sm" value={65} label="Active" />

// Half Circle
<ProgressBarHalfCircle size="md" value={80} label="Storage" />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <h2 style={sectionHeading}>ProgressBar Props</h2>
            <PropsTable props={linearProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>ProgressBarCircle / ProgressBarHalfCircle Props</h2>
            <PropsTable props={circleProps} />
        </div>
    );
}
