"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Textarea } from "@/components/ui/Textarea";

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

const demoWrap: React.CSSProperties = {
    maxWidth: 480,
    width: "100%",
};

/* ── Default Demo ── */
function DefaultDemo() {
    return (
        <div style={demoWrap}>
            <Textarea
                isRequired
                label="Description"
                hint="This is a hint text to help user."
                placeholder="This is a placeholder."
                rows={5}
            />
        </div>
    );
}

/* ── Disabled Demo ── */
function DisabledDemo() {
    return (
        <div style={demoWrap}>
            <Textarea
                label="Description"
                placeholder="This textarea is disabled."
                rows={5}
                disabled
            />
        </div>
    );
}

/* ── Invalid Demo ── */
function InvalidDemo() {
    return (
        <div style={demoWrap}>
            <Textarea
                isRequired
                label="Description"
                placeholder="This is a placeholder."
                error="This field is required."
                rows={5}
                defaultValue=""
            />
        </div>
    );
}

const textareaProps = [
    { name: "label", type: "string", description: "Label text above the textarea." },
    { name: "error", type: "string", description: "Error message. Replaces hint when present." },
    { name: "hint", type: "string", description: "Helper/hint text below the textarea." },
    { name: "helperText", type: "string", description: "Alias for hint (backward compatible)." },
    { name: "isRequired", type: "boolean", default: "false", description: "Show required asterisk on label." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the textarea." },
    { name: "rows", type: "number", description: "Number of visible text rows." },
    { name: "placeholder", type: "string", description: "Placeholder text." },
    { name: "wrapperClassName", type: "string", description: "Additional CSS class for the wrapper." },
];

export default function TextareaPage() {
    return (
        <div>
            <DocHeader
                title="Textarea"
                description="Multi-line text input for longer content. Supports labels, hints, validation states, and resizing."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Textarea" },
                ]}
            />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A basic textarea with label, hint text, and required indicator.</p>

            <ComponentPreview
                title="Default Textarea"
                code={`<Textarea
    isRequired
    label="Description"
    hint="This is a hint text to help user."
    placeholder="This is a placeholder."
    rows={5}
/>`}
            >
                <DefaultDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>A disabled textarea that cannot be interacted with. Resizing is also disabled.</p>

            <ComponentPreview
                title="Disabled"
                code={`<Textarea
    label="Description"
    placeholder="This textarea is disabled."
    rows={5}
    disabled
/>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Invalid ── */}
            <h2 style={sectionHeading}>Invalid / Error</h2>
            <p style={sectionDesc}>Pass an error prop to show validation state with a red border and error message.</p>

            <ComponentPreview
                title="Error State"
                code={`<Textarea
    isRequired
    label="Description"
    placeholder="This is a placeholder."
    error="This field is required."
    rows={5}
/>`}
            >
                <InvalidDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Textarea component and configure with props.</p>

            <CodeBlock
                code={`import { Textarea } from "@/components/ui/Textarea";

// Basic
<Textarea
    label="Description"
    placeholder="Enter a description..."
    rows={5}
/>

// Required with hint
<Textarea
    isRequired
    label="Description"
    hint="This is a hint text to help user."
    placeholder="This is a placeholder."
    rows={5}
/>

// Error state
<Textarea
    isRequired
    label="Description"
    error="This field is required."
    rows={5}
/>

// Disabled
<Textarea
    label="Description"
    placeholder="Disabled textarea"
    rows={5}
    disabled
/>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={textareaProps} />
        </div>
    );
}
