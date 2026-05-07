import { DocHeader } from "@/components/docs/DocHeader";

export default function HealthWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Health Widgets"
                description="Heart rate, sleep quality, water intake, and wellness widgets built for health-tracking applications."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Health" },
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
                    Health widgets are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Heart rate, sleep quality, water intake, mood tracking, and wellness monitoring widgets.
                </p>
            </div>
        </div>
    );
}
