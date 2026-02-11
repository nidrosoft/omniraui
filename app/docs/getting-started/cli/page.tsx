import { DocHeader } from "@/components/docs/DocHeader";

export default function CLIPage() {
    return (
        <div>
            <DocHeader
                title="CLI"
                description="A command-line tool to quickly scaffold Omnira UI components into your project."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "CLI" },
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
                    The Omnira UI CLI is currently under development.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    In the meantime, you can manually copy component source code from the documentation pages.
                </p>
            </div>
        </div>
    );
}
