"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Illustration } from "@/components/ui/Illustration";

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

function AllTypesDemo() {
    return (
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-end" }}>
            <div style={{ textAlign: "center" }}>
                <Illustration type="cloud" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Cloud</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Illustration type="empty" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Empty</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Illustration type="error" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Error</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Illustration type="success" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Success</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Illustration type="search" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Search</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Illustration type="lock" size="md" />
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 8 }}>Lock</p>
            </div>
        </div>
    );
}

function SizesDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
            <Illustration type="cloud" size="sm" />
            <Illustration type="cloud" size="md" />
            <Illustration type="cloud" size="lg" />
        </div>
    );
}

const illustrationProps = [
    { name: "type", type: '"cloud" | "empty" | "error" | "success" | "search" | "lock"', default: '"cloud"', description: "Illustration type." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Illustration size." },
];

export default function IllustrationPage() {
    return (
        <div>
            <DocHeader
                title="Illustration"
                description="SVG illustrations for empty states, errors, success messages, and more."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Illustration" },
                ]}
            />

            <h2 style={sectionHeading}>Types</h2>
            <p style={sectionDesc}>Six illustration types for common UI states.</p>
            <ComponentPreview title="Types" code={`<Illustration type="cloud" size="md" />\n<Illustration type="empty" size="md" />\n<Illustration type="error" size="md" />\n<Illustration type="success" size="md" />\n<Illustration type="search" size="md" />\n<Illustration type="lock" size="md" />`}>
                <AllTypesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm (120px), md (200px), lg (280px).</p>
            <ComponentPreview title="Sizes" code={`<Illustration type="cloud" size="sm" />\n<Illustration type="cloud" size="md" />\n<Illustration type="cloud" size="lg" />`}>
                <SizesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and use the Illustration component.</p>
            <CodeBlock
                code={`import { Illustration } from "@/components/ui/Illustration";

<Illustration type="cloud" size="lg" />
<Illustration type="empty" size="md" />
<Illustration type="error" size="sm" />`}
                language="tsx"
            />

            <PropsTable props={illustrationProps} />
        </div>
    );
}
