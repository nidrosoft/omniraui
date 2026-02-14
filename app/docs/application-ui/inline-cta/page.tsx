import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";

export default function InlineCTAPage() {
    return (
        <div>
            <DocHeader
                title="Inline CTA"
                description="Documentation for the Inline CTA component."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Inline CTA" },
                ]}
            />

            <InstallBlock slug="inline-cta" components={["Button","Badge","Input"]} />
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
