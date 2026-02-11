import { DocHeader } from "@/components/docs/DocHeader";

export default function SharedPagesPage() {
    return (
        <div>
            <DocHeader
                title="Shared Pages"
                description="Common page templates like login, signup, error pages, and more."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages" },
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
                    Shared page templates are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Authentication flows, error pages, and common layouts.
                </p>
            </div>
        </div>
    );
}
