"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { QRCode } from "@/components/ui/QRCode";

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

function SizesDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
            <QRCode value="https://omnira.space" size="sm" />
            <QRCode value="https://omnira.space" size="md" />
            <QRCode value="https://omnira.space" size="lg" />
        </div>
    );
}

function CustomColorsDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
            <QRCode value="https://omnira.space" size="md" />
            <QRCode value="https://omnira.space" size="md" color="var(--color-lime)" />
            <QRCode value="https://omnira.space" size="md" color="#3b82f6" bgColor="#0f172a" />
        </div>
    );
}

function DifferentValuesDemo() {
    return (
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
            <QRCode value="https://omnira.space" size="md" />
            <QRCode value="hello@omnira.space" size="md" />
            <QRCode value="tel:+1234567890" size="md" />
        </div>
    );
}

const qrProps = [
    { name: "value", type: "string", description: "The data to encode (required)." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "QR code size." },
    { name: "color", type: "string", description: "Foreground color (CSS value)." },
    { name: "bgColor", type: "string", description: "Background color (CSS value)." },
];

export default function QRCodePage() {
    return (
        <div>
            <DocHeader
                title="QR Code"
                description="Generate QR code patterns from any string value. Supports custom sizes and colors."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "QR Code" },
                ]}
            />

            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm (128px), md (200px), lg (280px).</p>
            <ComponentPreview title="Sizes" code={`<QRCode value="https://omnira.space" size="sm" />\n<QRCode value="https://omnira.space" size="md" />\n<QRCode value="https://omnira.space" size="lg" />`}>
                <SizesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Custom Colors</h2>
            <p style={sectionDesc}>Override foreground and background colors.</p>
            <ComponentPreview title="Colors" code={`<QRCode value="..." size="md" />\n<QRCode value="..." size="md" color="var(--color-lime)" />\n<QRCode value="..." size="md" color="#3b82f6" bgColor="#0f172a" />`}>
                <CustomColorsDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Different Values</h2>
            <p style={sectionDesc}>Each unique value produces a different pattern.</p>
            <ComponentPreview title="Values" code={`<QRCode value="https://omnira.space" size="md" />\n<QRCode value="hello@omnira.space" size="md" />\n<QRCode value="tel:+1234567890" size="md" />`}>
                <DifferentValuesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and use the QRCode component.</p>
            <CodeBlock
                code={`import { QRCode } from "@/components/ui/QRCode";

<QRCode value="https://omnira.space" size="lg" />

// Custom colors
<QRCode value="..." color="var(--color-lime)" bgColor="#0f172a" />`}
                language="tsx"
            />

            <PropsTable props={qrProps} />
        </div>
    );
}
