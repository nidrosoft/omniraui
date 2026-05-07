import type { Metadata } from "next";
import Link from "next/link";
import { Element4, Element3, Element2 } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { StatusBadge } from "@/components/docs/StatusBadge";

export const metadata: Metadata = {
    title: "Fintech Widgets — Omnira UI",
    description: "Drop-in fintech widgets organised by size — Large, Medium, and Small. Cashflow analytics, transfers, breakdowns, savings, and growth trackers built on the Omnira design system.",
    keywords: ["fintech widgets", "dashboard widgets", "cashflow widget", "savings widget", "react components", "glassmorphism", "omnira ui"],
    openGraph: {
        title: "Fintech Widgets — Omnira UI",
        description: "Drop-in fintech widgets organised by size — Large, Medium, and Small.",
        url: "https://omnira.one/docs/widgets/fintech",
        type: "article",
    },
    alternates: { canonical: "/docs/widgets/fintech" },
};

const sizes = [
    {
        title: "Large",
        href: "/docs/widgets/fintech/large",
        description: "Hero-sized widgets (~348×365) that anchor a dashboard section. Cashflow analytics, transfer cards, savings overviews, growth trackers, and more.",
        Icon: Element4,
        status: "new" as const,
    },
    {
        title: "Medium",
        href: "/docs/widgets/fintech/medium",
        description: "Mid-sized widgets (~348×164) for 2 / 3-column dashboard grids. Emergency funds, income breakdowns, weekly expenditure, credit usage, asset allocation.",
        Icon: Element3,
        status: "new" as const,
    },
    {
        title: "Small",
        href: "/docs/widgets/fintech/small",
        description: "Compact tiles in square and rectangular footprints — designed for stat strips, KPI bands, and tight dashboard rows.",
        Icon: Element2,
        status: "coming-soon" as const,
    },
];

export default function FintechWidgetsOverviewPage() {
    return (
        <div>
            <DocHeader
                title="Fintech Widgets"
                description="Drop-in fintech widgets — analytics rings, transfer cards, cashflow breakdowns, savings, and growth trackers. Browse by size to find the right footprint for your layout."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Fintech" },
                ]}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {sizes.map(({ title, href, description, Icon, status }) => (
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
