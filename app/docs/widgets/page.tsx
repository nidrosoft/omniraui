import Link from "next/link";
import { Wallet3, Bank, Chart, Activity, HeartCircle } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { StatusBadge } from "@/components/docs/StatusBadge";

const industries = [
    {
        title: "Finance",
        href: "/docs/widgets/finance",
        description: "Market tickers, portfolio cards, balance summaries, and transaction feeds for financial applications.",
        Icon: Wallet3,
        status: "coming-soon" as const,
    },
    {
        title: "Fintech",
        href: "/docs/widgets/fintech",
        description: "Cashflow analytics, transfer cards, savings overviews, and growth trackers — organised by Large, Medium, and Small footprints.",
        Icon: Bank,
        status: "new" as const,
    },
    {
        title: "Dashboard",
        href: "/docs/widgets/dashboard",
        description: "KPI tiles, activity widgets, and stats blocks designed for operational dashboards across any industry.",
        Icon: Chart,
        status: "coming-soon" as const,
    },
    {
        title: "Fitness",
        href: "/docs/widgets/fitness",
        description: "Steps trackers, workout summaries, calorie counters, and other widgets for fitness and training apps.",
        Icon: Activity,
        status: "coming-soon" as const,
    },
    {
        title: "Health",
        href: "/docs/widgets/health",
        description: "Heart rate, sleep quality, water intake, and wellness widgets built for health-tracking applications.",
        Icon: HeartCircle,
        status: "coming-soon" as const,
    },
];

export default function WidgetsOverviewPage() {
    return (
        <div>
            <DocHeader
                title="Widgets"
                description="Industry-specific, drop-in UI blocks for finance, fintech, fitness, health, and more. Each widget is self-contained, themeable, and composes cleanly with the rest of Omnira UI."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets" },
                ]}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {industries.map(({ title, href, description, Icon, status }) => (
                    <Link
                        key={href}
                        href={href}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            padding: 24,
                            borderRadius: "var(--radius-xl)",
                            background: "var(--color-bg-card)",
                            border: "1px solid var(--color-border-subtle)",
                            textDecoration: "none",
                            transition: "border-color 0.15s, background 0.15s",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "var(--radius-md)",
                                    background: "var(--color-bg-elevated)",
                                    border: "1px solid var(--color-border-subtle)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--color-lime)",
                                    flexShrink: 0,
                                }}
                            >
                                <Icon size={20} variant="Bulk" color="currentColor" />
                            </div>
                            <StatusBadge status={status} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)" }}>
                                {title}
                            </span>
                            <span style={{ fontSize: 13, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
                                {description}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
