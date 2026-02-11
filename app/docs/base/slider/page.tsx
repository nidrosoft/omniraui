"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Slider } from "@/components/ui/Slider";

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

/* ── Default ── */
function DefaultDemo() {
    return <Slider defaultValue={40} label="Volume" />;
}

/* ── With Label and Hint ── */
function LabelHintDemo() {
    return <Slider defaultValue={60} label="Brightness" hint="Adjust screen brightness." />;
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Slider defaultValue={50} label="Small" size="sm" />
            <Slider defaultValue={50} label="Medium" size="md" />
            <Slider defaultValue={50} label="Large" size="lg" />
        </div>
    );
}

/* ── Disabled ── */
function DisabledDemo() {
    return <Slider defaultValue={30} label="Disabled" disabled />;
}

/* ── Step ── */
function StepDemo() {
    return <Slider defaultValue={50} label="Step 10" step={10} />;
}

/* ── Controlled ── */
function ControlledDemo() {
    const [val, setVal] = useState(25);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Slider value={val} onChange={setVal} label="Controlled" />
            <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>Current value: {val}</p>
        </div>
    );
}

const sliderProps = [
    { name: "min", type: "number", default: "0", description: "Minimum value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "step", type: "number", default: "1", description: "Step increment." },
    { name: "value", type: "number", description: "Controlled value." },
    { name: "defaultValue", type: "number", default: "0", description: "Initial value (uncontrolled)." },
    { name: "onChange", type: "(value: number) => void", description: "Called on value change." },
    { name: "label", type: "string", description: "Label text." },
    { name: "hint", type: "string", description: "Hint text below the label." },
    { name: "showValue", type: "boolean", default: "true", description: "Show current value." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Track and thumb size." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the slider." },
];

export default function SliderPage() {
    return (
        <div>
            <DocHeader
                title="Slider"
                description="A draggable range slider for selecting numeric values. Supports labels, hints, sizes, steps, and disabled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Slider" },
                ]}
            />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A basic slider with a label and value display.</p>
            <ComponentPreview title="Default" code={`<Slider defaultValue={40} label="Volume" />`}>
                <DefaultDemo />
            </ComponentPreview>

            {/* ── Label + Hint ── */}
            <h2 style={sectionHeading}>Label and Hint</h2>
            <p style={sectionDesc}>Slider with label and descriptive hint text.</p>
            <ComponentPreview title="Label and Hint" code={`<Slider defaultValue={60} label="Brightness" hint="Adjust screen brightness." />`}>
                <LabelHintDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm, md, and lg.</p>
            <ComponentPreview title="Sizes" code={`<Slider defaultValue={50} label="Small" size="sm" />\n<Slider defaultValue={50} label="Medium" size="md" />\n<Slider defaultValue={50} label="Large" size="lg" />`}>
                <SizesDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>A disabled slider that cannot be interacted with.</p>
            <ComponentPreview title="Disabled" code={`<Slider defaultValue={30} label="Disabled" disabled />`}>
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Step ── */}
            <h2 style={sectionHeading}>Custom Step</h2>
            <p style={sectionDesc}>Slider with a step increment of 10.</p>
            <ComponentPreview title="Step" code={`<Slider defaultValue={50} label="Step 10" step={10} />`}>
                <StepDemo />
            </ComponentPreview>

            {/* ── Controlled ── */}
            <h2 style={sectionHeading}>Controlled</h2>
            <p style={sectionDesc}>A controlled slider with external state management.</p>
            <ComponentPreview title="Controlled" code={`const [val, setVal] = useState(25);\n<Slider value={val} onChange={setVal} label="Controlled" />`}>
                <ControlledDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Slider component and configure with props.</p>
            <CodeBlock
                code={`import { Slider } from "@/components/ui/Slider";

// Basic
<Slider defaultValue={40} label="Volume" />

// With hint
<Slider defaultValue={60} label="Brightness" hint="Adjust screen brightness." />

// Controlled
const [val, setVal] = useState(25);
<Slider value={val} onChange={setVal} label="Controlled" />

// Disabled
<Slider defaultValue={30} label="Disabled" disabled />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={sliderProps} />
        </div>
    );
}
