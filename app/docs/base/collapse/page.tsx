"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CollapseGroup, CollapseItem } from "@/components/ui/Collapse";

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

const loremA = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const loremB = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";
const loremC = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";

function AccordionDemo() {
    return (
        <div style={{ width: "100%" }}>
            <CollapseGroup defaultOpen={["q1"]}>
                <CollapseItem id="q1" title="Question A">
                    {loremA}
                </CollapseItem>
                <CollapseItem id="q2" title="Question B">
                    {loremB}
                </CollapseItem>
                <CollapseItem id="q3" title="Question C">
                    {loremC}
                </CollapseItem>
            </CollapseGroup>
        </div>
    );
}

function MultipleDemo() {
    return (
        <div style={{ width: "100%" }}>
            <CollapseGroup multiple defaultOpen={["m1", "m2"]}>
                <CollapseItem id="m1" title="What is Omnira UI?">
                    Omnira UI is a premium glassmorphism component library built with React, TypeScript, and CSS Modules.
                </CollapseItem>
                <CollapseItem id="m2" title="How do I install it?">
                    Run <code>pnpm add omnira-ui</code> to install the package, then import the components you need.
                </CollapseItem>
                <CollapseItem id="m3" title="Is it free?">
                    Yes, Omnira UI is open source and free to use in personal and commercial projects.
                </CollapseItem>
            </CollapseGroup>
        </div>
    );
}

function StandaloneDemo() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
            <CollapseItem id="s1" title="Standalone Item A" defaultOpen>
                This item works independently without a CollapseGroup wrapper.
            </CollapseItem>
            <CollapseItem id="s2" title="Standalone Item B">
                Each item manages its own open/close state.
            </CollapseItem>
        </div>
    );
}

const groupProps = [
    { name: "multiple", type: "boolean", default: "false", description: "Allow multiple items open at once." },
    { name: "defaultOpen", type: "string[]", default: "[]", description: "IDs of items open by default." },
    { name: "children", type: "ReactNode", description: "CollapseItem children." },
];

const itemProps = [
    { name: "id", type: "string", description: "Unique identifier (required)." },
    { name: "title", type: "string", description: "Header text (required)." },
    { name: "defaultOpen", type: "boolean", default: "false", description: "Open by default (standalone mode only)." },
    { name: "children", type: "ReactNode", description: "Content shown when expanded." },
];

export default function CollapsePage() {
    return (
        <div>
            <DocHeader
                title="Collapse"
                description="Expandable accordion sections for FAQs, settings, and grouped content. Supports single and multiple open modes."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Collapse" },
                ]}
            />

            <h2 style={sectionHeading}>Accordion (Single)</h2>
            <p style={sectionDesc}>Only one item can be open at a time. Clicking another closes the current one.</p>
            <ComponentPreview title="Accordion" code={`<CollapseGroup defaultOpen={["q1"]}>\n    <CollapseItem id="q1" title="Question A">\n        Answer content...\n    </CollapseItem>\n    <CollapseItem id="q2" title="Question B">\n        Answer content...\n    </CollapseItem>\n</CollapseGroup>`}>
                <AccordionDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Multiple Open</h2>
            <p style={sectionDesc}>Multiple items can be expanded simultaneously.</p>
            <ComponentPreview title="Multiple" code={`<CollapseGroup multiple defaultOpen={["m1", "m2"]}>\n    <CollapseItem id="m1" title="What is Omnira UI?">\n        ...\n    </CollapseItem>\n    <CollapseItem id="m2" title="How do I install it?">\n        ...\n    </CollapseItem>\n</CollapseGroup>`}>
                <MultipleDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Standalone</h2>
            <p style={sectionDesc}>CollapseItem can be used without a group — each manages its own state.</p>
            <ComponentPreview title="Standalone" code={`<CollapseItem id="s1" title="Standalone Item" defaultOpen>\n    Content here...\n</CollapseItem>`}>
                <StandaloneDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import CollapseGroup and CollapseItem.</p>
            <CodeBlock
                code={`import { CollapseGroup, CollapseItem } from "@/components/ui/Collapse";

// Accordion (single open)
<CollapseGroup defaultOpen={["faq1"]}>
    <CollapseItem id="faq1" title="Question A">
        Answer A...
    </CollapseItem>
    <CollapseItem id="faq2" title="Question B">
        Answer B...
    </CollapseItem>
</CollapseGroup>

// Multiple open
<CollapseGroup multiple>
    <CollapseItem id="a" title="Section A">...</CollapseItem>
    <CollapseItem id="b" title="Section B">...</CollapseItem>
</CollapseGroup>`}
                language="tsx"
            />

            <h2 style={sectionHeading}>CollapseGroup Props</h2>
            <PropsTable props={groupProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>CollapseItem Props</h2>
            <PropsTable props={itemProps} />
        </div>
    );
}
