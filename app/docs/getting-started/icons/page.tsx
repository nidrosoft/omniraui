import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function IconsPage() {
    return (
        <div>
            <DocHeader
                title="Icons"
                description="Omnira UI uses Iconsax React with the Bulk variant for all icons. Lime green is the default accent color."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "Icons" },
                ]}
            />

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Installation
                </h2>
                <CodeBlock code={`pnpm add iconsax-react`} language="bash" />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Usage
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Always use the <strong>&quot;Bulk&quot;</strong> variant with <code style={{ color: "var(--color-lime)", background: "var(--color-bg-lime-subtle)", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>var(--color-lime)</code> as the default color.
                </p>
                <CodeBlock
                    code={`import { Calendar } from "iconsax-react";

// Standard usage
<Calendar size={24} variant="Bulk" color="var(--color-lime)" />

// Inside icon container
<div className="icon-box">
    <Calendar size={24} variant="Bulk" color="var(--color-lime)" />
</div>`}
                    language="tsx"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Sizes
                </h2>
                <div style={{
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border-standard)",
                    overflow: "hidden",
                }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", background: "var(--color-bg-card)", borderBottom: "1px solid var(--color-border-standard)" }}>Size</th>
                                <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", background: "var(--color-bg-card)", borderBottom: "1px solid var(--color-border-standard)" }}>Value</th>
                                <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-tertiary)", background: "var(--color-bg-card)", borderBottom: "1px solid var(--color-border-standard)" }}>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { size: "Small", value: "18px", usage: "Inline text, sidebar items" },
                                { size: "Default", value: "24px", usage: "Standard icon usage" },
                                { size: "Medium", value: "32px", usage: "Feature highlights" },
                                { size: "Large", value: "48px", usage: "Hero sections, empty states" },
                            ].map((row) => (
                                <tr key={row.size}>
                                    <td style={{ padding: "12px 16px", fontSize: 14, color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border-subtle)" }}>{row.size}</td>
                                    <td style={{ padding: "12px 16px", fontSize: 13, fontFamily: "monospace", color: "var(--color-lime)", borderBottom: "1px solid var(--color-border-subtle)" }}>{row.value}</td>
                                    <td style={{ padding: "12px 16px", fontSize: 14, color: "var(--color-text-secondary)", borderBottom: "1px solid var(--color-border-subtle)" }}>{row.usage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
