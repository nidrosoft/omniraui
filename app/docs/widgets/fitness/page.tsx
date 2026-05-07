import { DocHeader } from "@/components/docs/DocHeader";

export default function FitnessWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Fitness Widgets"
                description="Steps trackers, workout summaries, calorie counters, and other widgets for fitness and training apps."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Fitness" },
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
                    Fitness widgets are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Steps trackers, workout summaries, calorie counters, and training-app widgets.
                </p>
            </div>
        </div>
    );
}
