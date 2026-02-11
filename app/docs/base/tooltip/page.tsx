"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Tooltip } from "@/components/ui/Tooltip";

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

const demoBtn: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "var(--radius-md)",
    background: "var(--color-bg-elevated)",
    border: "1px solid var(--color-border-standard)",
    color: "var(--color-text-primary)",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
};

/* ── Positions ── */
function PositionsDemo() {
    return (
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", padding: "40px 0" }}>
            <Tooltip content="Tooltip on top" position="top">
                <button style={demoBtn}>Top</button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" position="bottom">
                <button style={demoBtn}>Bottom</button>
            </Tooltip>
            <Tooltip content="Tooltip on left" position="left">
                <button style={demoBtn}>Left</button>
            </Tooltip>
            <Tooltip content="Tooltip on right" position="right">
                <button style={demoBtn}>Right</button>
            </Tooltip>
        </div>
    );
}

/* ── Default (top) ── */
function DefaultDemo() {
    return (
        <div style={{ display: "flex", gap: 16, padding: "40px 0" }}>
            <Tooltip content="Edit this item">
                <button style={demoBtn}>Hover me</button>
            </Tooltip>
        </div>
    );
}

/* ── Custom delay ── */
function DelayDemo() {
    return (
        <div style={{ display: "flex", gap: 16, padding: "40px 0" }}>
            <Tooltip content="Instant (0ms)" delay={0}>
                <button style={demoBtn}>No delay</button>
            </Tooltip>
            <Tooltip content="Default (200ms)">
                <button style={demoBtn}>Default</button>
            </Tooltip>
            <Tooltip content="Slow (500ms)" delay={500}>
                <button style={demoBtn}>500ms delay</button>
            </Tooltip>
        </div>
    );
}

/* ── Rich content ── */
function RichContentDemo() {
    return (
        <div style={{ display: "flex", gap: 16, padding: "40px 0" }}>
            <Tooltip content={<span>Press <kbd style={{ padding: "1px 4px", borderRadius: 3, background: "var(--color-bg-elevated)", fontSize: 11 }}>⌘K</kbd> to search</span>}>
                <button style={demoBtn}>Keyboard shortcut</button>
            </Tooltip>
        </div>
    );
}

const tooltipProps = [
    { name: "content", type: "ReactNode", description: "Tooltip content (text or JSX)." },
    { name: "children", type: "ReactElement", description: "Trigger element." },
    { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Tooltip placement." },
    { name: "delay", type: "number", default: "200", description: "Delay in ms before showing." },
];

export default function TooltipPage() {
    return (
        <div>
            <DocHeader
                title="Tooltip"
                description="A lightweight tooltip that appears on hover. Supports four positions, custom delay, and rich content."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Tooltip" },
                ]}
            />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A basic tooltip that appears above the trigger on hover.</p>
            <ComponentPreview title="Default" code={`<Tooltip content="Edit this item">\n    <button>Hover me</button>\n</Tooltip>`}>
                <DefaultDemo />
            </ComponentPreview>

            {/* ── Positions ── */}
            <h2 style={sectionHeading}>Positions</h2>
            <p style={sectionDesc}>Four placement options: top, bottom, left, right.</p>
            <ComponentPreview title="Positions" code={`<Tooltip content="Top" position="top"><button>Top</button></Tooltip>\n<Tooltip content="Bottom" position="bottom"><button>Bottom</button></Tooltip>\n<Tooltip content="Left" position="left"><button>Left</button></Tooltip>\n<Tooltip content="Right" position="right"><button>Right</button></Tooltip>`}>
                <PositionsDemo />
            </ComponentPreview>

            {/* ── Delay ── */}
            <h2 style={sectionHeading}>Custom Delay</h2>
            <p style={sectionDesc}>Control how quickly the tooltip appears.</p>
            <ComponentPreview title="Delay" code={`<Tooltip content="Instant" delay={0}><button>No delay</button></Tooltip>\n<Tooltip content="Default"><button>Default</button></Tooltip>\n<Tooltip content="Slow" delay={500}><button>500ms</button></Tooltip>`}>
                <DelayDemo />
            </ComponentPreview>

            {/* ── Rich Content ── */}
            <h2 style={sectionHeading}>Rich Content</h2>
            <p style={sectionDesc}>Tooltips can contain JSX, not just plain text.</p>
            <ComponentPreview title="Rich Content" code={`<Tooltip content={<span>Press <kbd>⌘K</kbd> to search</span>}>\n    <button>Keyboard shortcut</button>\n</Tooltip>`}>
                <RichContentDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Tooltip component and wrap any trigger element.</p>
            <CodeBlock
                code={`import { Tooltip } from "@/components/ui/Tooltip";

// Basic
<Tooltip content="Edit this item">
    <button>Hover me</button>
</Tooltip>

// Position
<Tooltip content="Below" position="bottom">
    <button>Bottom tooltip</button>
</Tooltip>

// Custom delay
<Tooltip content="Quick" delay={0}>
    <button>Instant</button>
</Tooltip>

// Rich content
<Tooltip content={<span>Press <kbd>⌘K</kbd></span>}>
    <button>Shortcut</button>
</Tooltip>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={tooltipProps} />
        </div>
    );
}
