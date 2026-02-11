import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function TypographyPage() {
    return (
        <div>
            <DocHeader
                title="Typography"
                description="Omnira UI uses Host Grotesk for display headlines and Rubik for body text, creating a clean, modern typographic hierarchy."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "Typography" },
                ]}
            />

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 24 }}>
                    Type Scale
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Hero — 72px</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--color-text-primary)" }}>Display</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>H1 — 56px</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, color: "var(--color-text-primary)" }}>Heading One</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>H2 — 48px</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--color-text-primary)" }}>Heading Two</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>H3 — 40px</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--color-text-primary)" }}>Heading Three</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>H4 — 22px</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.3, color: "var(--color-text-primary)" }}>Card Title</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Lead — 20px Light</span>
                        <span style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.6, color: "var(--color-text-secondary)" }}>Lead paragraph text for section descriptions and introductions.</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Body — 16px</span>
                        <span style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "var(--color-text-secondary)" }}>Regular body text for paragraphs and general content.</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Body Small — 14px</span>
                        <span style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5, color: "var(--color-text-secondary)" }}>Smaller body text for secondary information.</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Caption — 12px</span>
                        <span style={{ fontSize: 12, fontWeight: 400, lineHeight: 1.5, color: "var(--color-text-tertiary)" }}>Caption text for annotations and metadata.</span>
                    </div>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", marginBottom: 8, display: "block" }}>Label — 11px Uppercase</span>
                        <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)" }}>Section Label</span>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Gradient Text
                </h2>
                <CodeBlock
                    code={`.gradient-text {
    background-image: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}`}
                    language="css"
                />
            </section>
        </div>
    );
}
