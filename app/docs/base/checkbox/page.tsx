"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Checkbox } from "@/components/ui/Checkbox";

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
            <Checkbox label="Remember me" size="sm" />
            <Checkbox label="Accept terms" size="sm" defaultChecked />
        </div>
    );
}

/* ── Label + Hint ── */
function LabelHintDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />
            <Checkbox label="Accept terms" hint="You agree to our Terms of Service and Privacy Policy." size="sm" defaultChecked />
        </div>
    );
}

/* ── Disabled ── */
function DisabledDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Checkbox label="Disabled unchecked" hint="This checkbox is disabled." size="sm" disabled />
            <Checkbox label="Disabled checked" hint="This checkbox is disabled." size="sm" disabled defaultChecked />
        </div>
    );
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Checkbox label="Small" hint="Checkbox size sm." size="sm" defaultChecked />
            <Checkbox label="Medium" hint="Checkbox size md." size="md" defaultChecked />
            <Checkbox label="Large" hint="Checkbox size lg." size="lg" defaultChecked />
        </div>
    );
}

const checkboxProps = [
    { name: "label", type: "string", description: "Label text next to the checkbox." },
    { name: "hint", type: "string", description: "Hint/description text below the label." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"sm"', description: "Size of the checkbox." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox." },
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "defaultChecked", type: "boolean", default: "false", description: "Initial checked state (uncontrolled)." },
    { name: "onChange", type: "(checked: boolean) => void", description: "Called when checkbox state changes." },
];

export default function CheckboxPage() {
    return (
        <div>
            <DocHeader
                title="Checkbox"
                description="A checkbox control for selecting one or more options. Supports labels, hints, sizes, and disabled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Checkbox" },
                ]}
            />

            {/* ── Base with Label ── */}
            <h2 style={sectionHeading}>Base with Label</h2>
            <p style={sectionDesc}>A simple checkbox with a label.</p>

            <ComponentPreview
                title="Base with Label"
                code={`<Checkbox label="Remember me" size="sm" />
<Checkbox label="Accept terms" size="sm" defaultChecked />`}
            >
                <BaseLabelDemo />
            </ComponentPreview>

            {/* ── Label + Hint ── */}
            <h2 style={sectionHeading}>Label and Hint</h2>
            <p style={sectionDesc}>A checkbox with both label and descriptive hint text.</p>

            <ComponentPreview
                title="Label and Hint"
                code={`<Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />
<Checkbox label="Accept terms" hint="You agree to our Terms of Service and Privacy Policy." size="sm" defaultChecked />`}
            >
                <LabelHintDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>Disabled checkboxes in both unchecked and checked states.</p>

            <ComponentPreview
                title="Disabled"
                code={`<Checkbox label="Disabled unchecked" hint="This checkbox is disabled." size="sm" disabled />
<Checkbox label="Disabled checked" hint="This checkbox is disabled." size="sm" disabled defaultChecked />`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm, md, and lg.</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<Checkbox label="Small" hint="Checkbox size sm." size="sm" defaultChecked />
<Checkbox label="Medium" hint="Checkbox size md." size="md" defaultChecked />
<Checkbox label="Large" hint="Checkbox size lg." size="lg" defaultChecked />`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Checkbox component and configure with props.</p>

            <CodeBlock
                code={`import { Checkbox } from "@/components/ui/Checkbox";

// Basic
<Checkbox label="Remember me" size="sm" />

// With hint
<Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />

// Controlled
const [agreed, setAgreed] = useState(false);
<Checkbox label="Accept terms" checked={agreed} onChange={setAgreed} />

// Disabled
<Checkbox label="Disabled" disabled />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={checkboxProps} />
        </div>
    );
}
