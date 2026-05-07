import type { Metadata } from "next";
import { DocHeader } from "@/components/docs/DocHeader";
import { PaginatedSections } from "./PaginatedSections";

export const metadata: Metadata = {
    title: "Large Fintech Widgets — Omnira UI",
    description: "Hero-sized fintech widgets (~348×365): cashflow analytics, transfers, breakdowns, savings, growth trackers, expenses, credit planning and more. Drop-in components themeable for dark and light modes.",
    keywords: ["fintech widgets", "dashboard widgets", "cashflow widget", "savings widget", "expenses widget", "credit planner", "react components", "glassmorphism", "omnira ui"],
    openGraph: {
        title: "Large Fintech Widgets — Omnira UI",
        description: "Hero-sized fintech widgets — cashflow analytics, transfers, breakdowns, savings, growth, expenses, credit planning.",
        url: "https://omnira.one/docs/widgets/fintech/large",
        type: "article",
    },
    alternates: { canonical: "/docs/widgets/fintech/large" },
};

export default function LargeFintechWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Large Fintech Widgets"
                description="Hero-sized widgets (~348×365) designed to anchor a dashboard section. Each widget below ships with three ready-to-paste variations so you can see how it adapts to different data states."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Fintech", href: "/docs/widgets/fintech" },
                    { label: "Large" },
                ]}
            />

            <PaginatedSections />
        </div>
    );
}
