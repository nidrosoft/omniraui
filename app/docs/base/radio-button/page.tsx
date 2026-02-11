"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { RadioButton, RadioGroup } from "@/components/ui/RadioButton";

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

/* ── With Label ── */
function WithLabelDemo() {
    return (
        <RadioGroup aria-label="Options" defaultValue="option1">
            <RadioButton label="Option one" value="option1" />
            <RadioButton label="Option two" value="option2" />
            <RadioButton label="Option three" value="option3" />
        </RadioGroup>
    );
}

/* ── With Label and Hint ── */
function WithLabelHintDemo() {
    return (
        <RadioGroup aria-label="Pricing plans" defaultValue="basic">
            <RadioButton label="Basic plan" hint="Up to 10 users and 20 GB data." value="basic" />
            <RadioButton label="Business plan" hint="Up to 20 users and 40 GB data." value="business" />
            <RadioButton label="Enterprise plan" hint="Unlimited users and unlimited data." value="enterprise" />
        </RadioGroup>
    );
}

/* ── Disabled ── */
function DisabledDemo() {
    return (
        <RadioGroup aria-label="Disabled options" defaultValue="selected" disabled>
            <RadioButton label="Selected (disabled)" hint="This option is selected but disabled." value="selected" />
            <RadioButton label="Unselected (disabled)" hint="This option is disabled." value="unselected" />
        </RadioGroup>
    );
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <RadioGroup aria-label="Small radios" defaultValue="basic" size="sm">
                <RadioButton label="Basic plan" hint="Up to 10 users and 20 GB data." value="basic" />
                <RadioButton label="Business plan" hint="Up to 20 users and 40 GB data." value="business" />
                <RadioButton label="Enterprise plan" hint="Unlimited users and unlimited data." value="enterprise" />
            </RadioGroup>
            <RadioGroup aria-label="Medium radios" defaultValue="basic" size="md">
                <RadioButton label="Basic plan" hint="Up to 10 users and 20 GB data." value="basic" />
                <RadioButton label="Business plan" hint="Up to 20 users and 40 GB data." value="business" />
                <RadioButton label="Enterprise plan" hint="Unlimited users and unlimited data." value="enterprise" />
            </RadioGroup>
        </div>
    );
}

const radioProps = [
    { name: "label", type: "string", description: "Label text next to the radio." },
    { name: "hint", type: "string", description: "Hint/description text below the label." },
    { name: "value", type: "string", description: "Value of this radio option (required)." },
    { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Size of the radio circle." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the radio." },
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "onChange", type: "(value: string) => void", description: "Called when selected." },
];

const groupProps = [
    { name: "defaultValue", type: "string", description: "Initially selected value." },
    { name: "value", type: "string", description: "Controlled selected value." },
    { name: "onChange", type: "(value: string) => void", description: "Called when selection changes." },
    { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Size applied to all children." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable all children." },
    { name: "aria-label", type: "string", description: "Accessible label for the group." },
];

export default function RadioButtonPage() {
    return (
        <div>
            <DocHeader
                title="Radio Button"
                description="A radio button for selecting a single option from a group. Supports labels, hints, sizes, and disabled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Radio Button" },
                ]}
            />

            {/* ── With Label ── */}
            <h2 style={sectionHeading}>With Label</h2>
            <p style={sectionDesc}>Radio buttons with labels inside a RadioGroup.</p>

            <ComponentPreview
                title="With Label"
                code={`<RadioGroup aria-label="Options" defaultValue="option1">
    <RadioButton label="Option one" value="option1" />
    <RadioButton label="Option two" value="option2" />
    <RadioButton label="Option three" value="option3" />
</RadioGroup>`}
            >
                <WithLabelDemo />
            </ComponentPreview>

            {/* ── With Label and Hint ── */}
            <h2 style={sectionHeading}>Label and Hint</h2>
            <p style={sectionDesc}>Radio buttons with both label and descriptive hint text.</p>

            <ComponentPreview
                title="Label and Hint"
                code={`<RadioGroup aria-label="Pricing plans" defaultValue="basic">
    <RadioButton label="Basic plan" hint="Up to 10 users and 20 GB data." value="basic" />
    <RadioButton label="Business plan" hint="Up to 20 users and 40 GB data." value="business" />
    <RadioButton label="Enterprise plan" hint="Unlimited users and unlimited data." value="enterprise" />
</RadioGroup>`}
            >
                <WithLabelHintDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>Disabled radio group with one option pre-selected.</p>

            <ComponentPreview
                title="Disabled"
                code={`<RadioGroup aria-label="Disabled options" defaultValue="selected" disabled>
    <RadioButton label="Selected (disabled)" hint="This option is selected but disabled." value="selected" />
    <RadioButton label="Unselected (disabled)" hint="This option is disabled." value="unselected" />
</RadioGroup>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Two sizes: sm (18px) and md (22px), shown side by side.</p>

            <ComponentPreview
                title="Small / Medium"
                code={`<RadioGroup aria-label="Small" defaultValue="basic" size="sm">
    <RadioButton label="Basic plan" hint="Up to 10 users." value="basic" />
    ...
</RadioGroup>

<RadioGroup aria-label="Medium" defaultValue="basic" size="md">
    <RadioButton label="Basic plan" hint="Up to 10 users." value="basic" />
    ...
</RadioGroup>`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import RadioButton and RadioGroup, then compose.</p>

            <CodeBlock
                code={`import { RadioButton, RadioGroup } from "@/components/ui/RadioButton";

<RadioGroup aria-label="Plans" defaultValue="basic">
    <RadioButton label="Basic plan" hint="Up to 10 users." value="basic" />
    <RadioButton label="Business plan" hint="Up to 20 users." value="business" />
    <RadioButton label="Enterprise plan" hint="Unlimited users." value="enterprise" />
</RadioGroup>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <h2 style={sectionHeading}>RadioButton Props</h2>
            <PropsTable props={radioProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>RadioGroup Props</h2>
            <PropsTable props={groupProps} />
        </div>
    );
}
