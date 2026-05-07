import type { Metadata } from "next";
import { DocHeader } from "@/components/docs/DocHeader";

export const metadata: Metadata = {
    title: "Small Fintech Widgets — Omnira UI",
    description: "Compact fintech widget tiles in square and rectangular footprints — for stat strips, KPI bands, and tight dashboard rows. Coming soon.",
    keywords: ["fintech widgets", "small widgets", "kpi tiles", "dashboard widgets", "react components", "omnira ui"],
    openGraph: {
        title: "Small Fintech Widgets — Omnira UI",
        description: "Compact fintech widget tiles in square and rectangular footprints.",
        url: "https://omnira.one/docs/widgets/fintech/small",
        type: "article",
    },
    alternates: { canonical: "/docs/widgets/fintech/small" },
};

export default function SmallFintechWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Small Fintech Widgets"
                description="Compact tiles in square and rectangular footprints — designed for stat strips, KPI bands, and tight dashboard rows."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Fintech", href: "/docs/widgets/fintech" },
                    { label: "Small" },
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
                    Small fintech widgets are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Expect square and rectangular tiles for stat strips, KPI bands, and tight dashboard rows.
                </p>
            </div>
        </div>
    );
}
