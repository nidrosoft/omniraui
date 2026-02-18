import { DocHeader } from "@/components/docs/DocHeader";

export default function ForgotPasswordPage() {
    return (
        <div>
            <DocHeader
                title="Forgot Password"
                description="Password recovery flow templates with email input, reset link confirmation, and new password form."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Forgot Password" },
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
