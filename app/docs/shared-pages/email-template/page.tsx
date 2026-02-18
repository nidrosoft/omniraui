import { DocHeader } from "@/components/docs/DocHeader";

export default function EmailTemplatePage() {
    return (
        <div>
            <DocHeader
                title="Email Template"
                description="Responsive email templates for transactional emails, welcome messages, password resets, and notifications."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Email Template" },
                ]}
            />
            <div style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                padding: 48,
                textAlign: "center",
            }}>
                <p style={{ fontSize: 16, color: "var(--color-text-tertiary)" }}>
                    Component documentation coming soon.
                </p>
            </div>
        </div>
    );
}
