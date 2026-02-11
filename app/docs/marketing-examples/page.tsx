import { DocHeader } from "@/components/docs/DocHeader";

export default function MarketingExamplesPage() {
    return (
        <div>
            <DocHeader
                title="Marketing Examples"
                description="Full marketing page examples built with Omnira UI components."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Marketing Examples" },
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
                    Marketing page examples are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Complete landing pages, product pages, and more.
                </p>
            </div>
        </div>
    );
}
