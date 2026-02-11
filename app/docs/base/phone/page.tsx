"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Phone } from "@/components/ui/Phone";

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

function WithAddressDemo() {
    return <Phone address="omnira.space" />;
}

function NoAddressDemo() {
    return <Phone />;
}

function WithContentDemo() {
    return (
        <Phone address="app.omnira.space">
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: 300,
                gap: 12,
                padding: 24,
            }}>
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--color-lime)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#121212",
                }}>O</div>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>Welcome to Omnira</span>
                <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Your mobile experience</span>
            </div>
        </Phone>
    );
}

const phoneProps = [
    { name: "address", type: "string", description: "URL displayed in the bottom address bar. If omitted, the bar is hidden." },
    { name: "children", type: "ReactNode", description: "Content rendered inside the phone screen." },
];

export default function PhonePage() {
    return (
        <div>
            <DocHeader
                title="Phone"
                description="An iPhone-style phone mockup with dynamic island, screen area, address bar, and home indicator. Perfect for showcasing mobile UIs."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Phone" },
                ]}
            />

            <h2 style={sectionHeading}>With Address Bar</h2>
            <p style={sectionDesc}>Phone frame with a bottom address bar showing the URL.</p>
            <ComponentPreview title="With Address" code={`<Phone address="omnira.space" />`}>
                <WithAddressDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Without Address Bar</h2>
            <p style={sectionDesc}>Clean phone frame without the bottom navigation bar.</p>
            <ComponentPreview title="No Address" code={`<Phone />`}>
                <NoAddressDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>With Content</h2>
            <p style={sectionDesc}>Phone frame with custom content inside the screen.</p>
            <ComponentPreview title="With Content" code={`<Phone address="app.omnira.space">\n    <YourMobileComponent />\n</Phone>`}>
                <WithContentDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and use the Phone component.</p>
            <CodeBlock
                code={`import { Phone } from "@/components/ui/Phone";

<Phone address="omnira.space" />

// With content
<Phone address="app.omnira.space">
    <div>Your mobile content</div>
</Phone>`}
                language="tsx"
            />

            <PropsTable props={phoneProps} />
        </div>
    );
}
