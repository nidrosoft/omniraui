import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";

export default function SectionFooterPage() {
    return (
        <div>
            <DocHeader
                title="Section Footer"
                description="Documentation for the Section Footer component."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Section Footer" },
                ]}
            />

            <InstallBlock slug="section-footer" components={["Button"]} />
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
