import { DocHeader } from "@/components/docs/DocHeader";

export default function DashboardWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Dashboard Widgets"
                description="KPI tiles, activity widgets, and stats blocks designed for operational dashboards across any industry."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Dashboard" },
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
                    Dashboard widgets are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    KPI tiles, activity summaries, quick stats, and other operational dashboard widgets.
                </p>
            </div>
        </div>
    );
}
