"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Button } from "@/components/ui/Button";
import { Add, ArrowRight2, Send2, Setting2 } from "iconsax-react";

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

export default function ButtonPage() {
    return (
        <div>
            <DocHeader
                title="Button"
                description="Buttons trigger actions. Use them for form submissions, navigation, and interactive elements. Available in primary, secondary, and tertiary variants with four sizes."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Button" },
                ]}
            />

            {/* ── Primary Button ── */}
            <h2 style={sectionHeading}>Primary Button</h2>
            <p style={sectionDesc}>Solid lime background for the most important actions. Available in four sizes.</p>

            <ComponentPreview
                title="Primary — All Sizes"
                code={`<Button variant="primary" size="sm">Button sm</Button>
<Button variant="primary" size="md">Button md</Button>
<Button variant="primary" size="lg">Button lg</Button>
<Button variant="primary" size="xl">Button xl</Button>`}
            >
                <Button variant="primary" size="sm">Button sm</Button>
                <Button variant="primary" size="md">Button md</Button>
                <Button variant="primary" size="lg">Button lg</Button>
                <Button variant="primary" size="xl">Button xl</Button>
            </ComponentPreview>

            {/* ── Secondary Button ── */}
            <h2 style={sectionHeading}>Secondary Button</h2>
            <p style={sectionDesc}>Bordered button with a subtle glass background. Use for secondary actions alongside a primary button.</p>

            <ComponentPreview
                title="Secondary — All Sizes"
                code={`<Button variant="secondary" size="sm">Button sm</Button>
<Button variant="secondary" size="md">Button md</Button>
<Button variant="secondary" size="lg">Button lg</Button>
<Button variant="secondary" size="xl">Button xl</Button>`}
            >
                <Button variant="secondary" size="sm">Button sm</Button>
                <Button variant="secondary" size="md">Button md</Button>
                <Button variant="secondary" size="lg">Button lg</Button>
                <Button variant="secondary" size="xl">Button xl</Button>
            </ComponentPreview>

            {/* ── Tertiary Button ── */}
            <h2 style={sectionHeading}>Tertiary Button</h2>
            <p style={sectionDesc}>Text-only button with no background or border. Use for low-emphasis actions like &quot;Cancel&quot; or inline links.</p>

            <ComponentPreview
                title="Tertiary — All Sizes"
                code={`<Button variant="tertiary" size="sm">Button sm</Button>
<Button variant="tertiary" size="md">Button md</Button>
<Button variant="tertiary" size="lg">Button lg</Button>
<Button variant="tertiary" size="xl">Button xl</Button>`}
            >
                <Button variant="tertiary" size="sm">Button sm</Button>
                <Button variant="tertiary" size="md">Button md</Button>
                <Button variant="tertiary" size="lg">Button lg</Button>
                <Button variant="tertiary" size="xl">Button xl</Button>
            </ComponentPreview>

            {/* ── Icon Leading ── */}
            <h2 style={sectionHeading}>Icon Leading</h2>
            <p style={sectionDesc}>Button with an icon placed before the text label. Use for actions that benefit from a visual cue.</p>

            <ComponentPreview
                title="Icon Leading"
                code={`<Button variant="primary" icon={<Add size={18} />} iconPosition="leading">
    Create New
</Button>
<Button variant="secondary" icon={<Send2 size={18} />} iconPosition="leading">
    Send Message
</Button>
<Button variant="tertiary" icon={<Setting2 size={18} />} iconPosition="leading">
    Settings
</Button>`}
            >
                <Button variant="primary" icon={<Add size={18} color="var(--color-lime-text)" />} iconPosition="leading">
                    Create New
                </Button>
                <Button variant="secondary" icon={<Send2 size={18} variant="Bulk" color="currentColor" />} iconPosition="leading">
                    Send Message
                </Button>
                <Button variant="tertiary" icon={<Setting2 size={18} variant="Bulk" color="currentColor" />} iconPosition="leading">
                    Settings
                </Button>
            </ComponentPreview>

            {/* ── Icon Trailing ── */}
            <h2 style={sectionHeading}>Icon Trailing</h2>
            <p style={sectionDesc}>Button with an icon placed after the text label. Common for &quot;Next&quot; or &quot;Continue&quot; actions.</p>

            <ComponentPreview
                title="Icon Trailing"
                code={`<Button variant="primary" icon={<ArrowRight2 size={18} />} iconPosition="trailing">
    Continue
</Button>
<Button variant="secondary" icon={<ArrowRight2 size={18} />} iconPosition="trailing">
    Next Step
</Button>
<Button variant="tertiary" icon={<ArrowRight2 size={18} />} iconPosition="trailing">
    Learn More
</Button>`}
            >
                <Button variant="primary" icon={<ArrowRight2 size={18} color="var(--color-lime-text)" />} iconPosition="trailing">
                    Continue
                </Button>
                <Button variant="secondary" icon={<ArrowRight2 size={18} variant="Bulk" color="currentColor" />} iconPosition="trailing">
                    Next Step
                </Button>
                <Button variant="tertiary" icon={<ArrowRight2 size={18} variant="Bulk" color="currentColor" />} iconPosition="trailing">
                    Learn More
                </Button>
            </ComponentPreview>

            {/* ── Loading State ── */}
            <h2 style={sectionHeading}>Loading State</h2>
            <p style={sectionDesc}>Buttons can show a loading spinner. Use <code style={{ color: "var(--color-lime)", background: "var(--color-bg-lime-subtle)", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>showTextWhileLoading</code> to keep the label visible alongside the spinner.</p>

            <ComponentPreview
                title="Loading — Spinner Only"
                code={`<Button variant="primary" size="sm" isLoading>Button sm</Button>
<Button variant="primary" size="md" isLoading>Button md</Button>
<Button variant="primary" size="lg" isLoading>Button lg</Button>
<Button variant="primary" size="xl" isLoading>Button xl</Button>`}
            >
                <Button variant="primary" size="sm" isLoading>Button sm</Button>
                <Button variant="primary" size="md" isLoading>Button md</Button>
                <Button variant="primary" size="lg" isLoading>Button lg</Button>
                <Button variant="primary" size="xl" isLoading>Button xl</Button>
            </ComponentPreview>

            <ComponentPreview
                title="Loading — With Text (Primary)"
                code={`<Button variant="primary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
<Button variant="primary" size="md" isLoading showTextWhileLoading>Button md</Button>
<Button variant="primary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
<Button variant="primary" size="xl" isLoading showTextWhileLoading>Button xl</Button>`}
            >
                <Button variant="primary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
                <Button variant="primary" size="md" isLoading showTextWhileLoading>Button md</Button>
                <Button variant="primary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
                <Button variant="primary" size="xl" isLoading showTextWhileLoading>Button xl</Button>
            </ComponentPreview>

            <ComponentPreview
                title="Loading — With Text (Secondary)"
                code={`<Button variant="secondary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
<Button variant="secondary" size="md" isLoading showTextWhileLoading>Button md</Button>
<Button variant="secondary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
<Button variant="secondary" size="xl" isLoading showTextWhileLoading>Button xl</Button>`}
            >
                <Button variant="secondary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
                <Button variant="secondary" size="md" isLoading showTextWhileLoading>Button md</Button>
                <Button variant="secondary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
                <Button variant="secondary" size="xl" isLoading showTextWhileLoading>Button xl</Button>
            </ComponentPreview>

            <ComponentPreview
                title="Loading — With Text (Tertiary)"
                code={`<Button variant="tertiary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
<Button variant="tertiary" size="md" isLoading showTextWhileLoading>Button md</Button>
<Button variant="tertiary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
<Button variant="tertiary" size="xl" isLoading showTextWhileLoading>Button xl</Button>`}
            >
                <Button variant="tertiary" size="sm" isLoading showTextWhileLoading>Button sm</Button>
                <Button variant="tertiary" size="md" isLoading showTextWhileLoading>Button md</Button>
                <Button variant="tertiary" size="lg" isLoading showTextWhileLoading>Button lg</Button>
                <Button variant="tertiary" size="xl" isLoading showTextWhileLoading>Button xl</Button>
            </ComponentPreview>

            {/* ── Disabled State ── */}
            <h2 style={sectionHeading}>Disabled State</h2>
            <p style={sectionDesc}>Disabled buttons have reduced opacity and no pointer events. All variants support the disabled state.</p>

            <ComponentPreview
                title="Disabled — All Variants"
                code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="tertiary" disabled>Tertiary</Button>`}
            >
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="tertiary" disabled>Tertiary</Button>
            </ComponentPreview>

            <ComponentPreview
                title="Disabled — All Sizes (Primary)"
                code={`<Button variant="primary" size="sm" disabled>Button sm</Button>
<Button variant="primary" size="md" disabled>Button md</Button>
<Button variant="primary" size="lg" disabled>Button lg</Button>
<Button variant="primary" size="xl" disabled>Button xl</Button>`}
            >
                <Button variant="primary" size="sm" disabled>Button sm</Button>
                <Button variant="primary" size="md" disabled>Button md</Button>
                <Button variant="primary" size="lg" disabled>Button lg</Button>
                <Button variant="primary" size="xl" disabled>Button xl</Button>
            </ComponentPreview>

            {/* ── Full Width ── */}
            <h2 style={sectionHeading}>Full Width</h2>
            <p style={sectionDesc}>Buttons can span the full width of their container.</p>

            <ComponentPreview
                title="Full Width"
                code={`<Button variant="primary" fullWidth>Full Width Primary</Button>
<Button variant="secondary" fullWidth>Full Width Secondary</Button>
<Button variant="tertiary" fullWidth>Full Width Tertiary</Button>`}
            >
                <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 12 }}>
                    <Button variant="primary" fullWidth>Full Width Primary</Button>
                    <Button variant="secondary" fullWidth>Full Width Secondary</Button>
                    <Button variant="tertiary" fullWidth>Full Width Tertiary</Button>
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Button component and use it in your application.</p>

            <CodeBlock
                code={`import { Button } from "omnira-ui/Button";
import { ArrowRight2 } from "iconsax-react";

export default function MyPage() {
    return (
        <div>
            <Button variant="primary" size="lg">
                Get Started
            </Button>

            <Button
                variant="secondary"
                icon={<ArrowRight2 size={18} />}
                iconPosition="trailing"
            >
                Continue
            </Button>

            <Button variant="primary" isLoading showTextWhileLoading>
                Saving...
            </Button>
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "variant", type: '"primary" | "secondary" | "tertiary" | "ghost" | "accent"', default: '"primary"', description: "Visual style variant" },
                    { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Button size" },
                    { name: "icon", type: "ReactNode", default: "undefined", description: "Icon element to display" },
                    { name: "iconPosition", type: '"leading" | "trailing"', default: '"leading"', description: "Position of the icon relative to the label" },
                    { name: "iconOnly", type: "boolean", default: "false", description: "Icon-only mode (square button, no label)" },
                    { name: "isLoading", type: "boolean", default: "false", description: "Shows a loading spinner and disables the button" },
                    { name: "showTextWhileLoading", type: "boolean", default: "false", description: "Keep the label visible alongside the spinner" },
                    { name: "disabled", type: "boolean", default: "false", description: "Disabled state with reduced opacity" },
                    { name: "fullWidth", type: "boolean", default: "false", description: "Whether button spans full container width" },
                ]}
            />
        </div>
    );
}
