import { DocHeader } from "@/components/docs/DocHeader";

export default function ApplicationUIExamplesPage() {
    return (
        <div>
            <DocHeader
                title="Application UI Examples"
                description="Full-page application UI examples built with Omnira UI components."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI Examples" },
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
                    Full application UI examples are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Dashboard layouts, settings pages, and more.
                </p>
            </div>
        </div>
    );
}
