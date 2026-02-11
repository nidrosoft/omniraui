"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Browser } from "@/components/ui/Browser";

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

function DefaultDemo() {
    return (
        <div style={{ width: "100%" }}>
            <Browser address="omnira.space">
                <div style={{ padding: 24, textAlign: "center", color: "var(--color-text-tertiary)", fontSize: 14 }}>
                    Your content goes here
                </div>
            </Browser>
        </div>
    );
}

function EmptyDemo() {
    return (
        <div style={{ width: "100%" }}>
            <Browser address="vercel.com">
                <div style={{ padding: 24 }} />
            </Browser>
        </div>
    );
}

function WithContentDemo() {
    return (
        <div style={{ width: "100%" }}>
            <Browser address="dashboard.omnira.space">
                <div style={{
                    padding: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    alignItems: "center",
                }}>
                    <div style={{
                        width: "100%",
                        height: 12,
                        borderRadius: 6,
                        background: "var(--color-bg-elevated)",
                        maxWidth: 300,
                    }} />
                    <div style={{
                        width: "100%",
                        height: 12,
                        borderRadius: 6,
                        background: "var(--color-bg-elevated)",
                        maxWidth: 240,
                    }} />
                    <div style={{
                        width: 80,
                        height: 32,
                        borderRadius: 8,
                        background: "var(--color-lime)",
                        marginTop: 8,
                    }} />
                </div>
            </Browser>
        </div>
    );
}

const browserProps = [
    { name: "address", type: "string", default: '"example.com"', description: "URL displayed in the address bar." },
    { name: "children", type: "ReactNode", description: "Content rendered inside the browser window." },
];

export default function BrowserPage() {
    return (
        <div>
            <DocHeader
                title="Browser"
                description="A browser window mockup with traffic lights, navigation buttons, and an address bar. Useful for showcasing web content in documentation."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Browser" },
                ]}
            />

            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Browser frame with address bar and content slot.</p>
            <ComponentPreview title="Default" code={`<Browser address="omnira.space">\n    <div>Your content goes here</div>\n</Browser>`}>
                <DefaultDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Empty</h2>
            <p style={sectionDesc}>Minimal browser frame with no visible content.</p>
            <ComponentPreview title="Empty" code={`<Browser address="vercel.com">\n    <div style={{ padding: 24 }} />\n</Browser>`}>
                <EmptyDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>With Content</h2>
            <p style={sectionDesc}>Browser frame with placeholder content inside.</p>
            <ComponentPreview title="With Content" code={`<Browser address="dashboard.omnira.space">\n    <YourComponent />\n</Browser>`}>
                <WithContentDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and use the Browser component.</p>
            <CodeBlock
                code={`import { Browser } from "@/components/ui/Browser";

<Browser address="omnira.space">
    <div className="p-6">Your content here</div>
</Browser>`}
                language="tsx"
            />

            <PropsTable props={browserProps} />
        </div>
    );
}
