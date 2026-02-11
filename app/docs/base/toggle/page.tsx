"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Toggle } from "@/components/ui/Toggle";

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

/* ── Base with Label ── */
function BaseLabelDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Toggle label="Remember me" size="sm" />
            <Toggle label="Enable notifications" size="sm" defaultChecked />
        </div>
    );
}

/* ── Label + Hint ── */
function LabelHintDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
            <Toggle label="Enable notifications" hint="Get notified about updates and messages." size="sm" defaultChecked />
        </div>
    );
}

/* ── Disabled ── */
function DisabledDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Toggle label="Disabled off" hint="This toggle is disabled." size="sm" disabled />
            <Toggle label="Disabled on" hint="This toggle is disabled." size="sm" disabled defaultChecked />
        </div>
    );
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Toggle label="Small" hint="Toggle size sm." size="sm" defaultChecked />
            <Toggle label="Medium" hint="Toggle size md." size="md" defaultChecked />
            <Toggle label="Large" hint="Toggle size lg." size="lg" defaultChecked />
        </div>
    );
}

const toggleProps = [
    { name: "label", type: "string", description: "Label text next to the toggle." },
    { name: "hint", type: "string", description: "Hint/description text below the label." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"sm"', description: "Size of the toggle track." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the toggle." },
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "defaultChecked", type: "boolean", default: "false", description: "Initial checked state (uncontrolled)." },
    { name: "onChange", type: "(checked: boolean) => void", description: "Called when toggle state changes." },
];

export default function TogglePage() {
    return (
        <div>
            <DocHeader
                title="Toggle"
                description="A switch control for toggling between on and off states. Supports labels, hints, sizes, and disabled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Toggle" },
                ]}
            />

            {/* ── Base with Label ── */}
            <h2 style={sectionHeading}>Base with Label</h2>
            <p style={sectionDesc}>A simple toggle with a label.</p>

            <ComponentPreview
                title="Base with Label"
                code={`<Toggle label="Remember me" size="sm" />
<Toggle label="Enable notifications" size="sm" defaultChecked />`}
            >
                <BaseLabelDemo />
            </ComponentPreview>

            {/* ── Label + Hint ── */}
            <h2 style={sectionHeading}>Label and Hint</h2>
            <p style={sectionDesc}>A toggle with both label and descriptive hint text.</p>

            <ComponentPreview
                title="Label and Hint"
                code={`<Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
<Toggle label="Enable notifications" hint="Get notified about updates and messages." size="sm" defaultChecked />`}
            >
                <LabelHintDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>Disabled toggles in both off and on states.</p>

            <ComponentPreview
                title="Disabled"
                code={`<Toggle label="Disabled off" hint="This toggle is disabled." size="sm" disabled />
<Toggle label="Disabled on" hint="This toggle is disabled." size="sm" disabled defaultChecked />`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm, md, and lg.</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<Toggle label="Small" hint="Toggle size sm." size="sm" defaultChecked />
<Toggle label="Medium" hint="Toggle size md." size="md" defaultChecked />
<Toggle label="Large" hint="Toggle size lg." size="lg" defaultChecked />`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Toggle component and configure with props.</p>

            <CodeBlock
                code={`import { Toggle } from "@/components/ui/Toggle";

// Basic
<Toggle label="Remember me" size="sm" />

// With hint
<Toggle label="Remember me" hint="Save my login details for next time." size="sm" />

// Controlled
const [enabled, setEnabled] = useState(false);
<Toggle label="Notifications" checked={enabled} onChange={setEnabled} />

// Disabled
<Toggle label="Disabled" disabled />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={toggleProps} />
        </div>
    );
}
