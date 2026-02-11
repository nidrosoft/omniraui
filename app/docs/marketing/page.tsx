import { DocHeader } from "@/components/docs/DocHeader";

export default function MarketingPage() {
    return (
        <div>
            <DocHeader
                title="Marketing Components"
                description="Landing page components, hero sections, feature grids, pricing tables, and more."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Marketing Components" },
                ]}
            />
            <div style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                padding: 48,
                textAlign: "center",
            }}>
                <p style={{ fontSize: 16, color: "var(--color-text-tertiary)", marginBottom: 8 }}>
                    Marketing components are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Hero sections, feature grids, testimonials, pricing, and CTAs.
                </p>
            </div>
        </div>
    );
}
