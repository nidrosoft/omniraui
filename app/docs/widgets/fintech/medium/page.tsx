import type { Metadata } from "next";
import { DocHeader } from "@/components/docs/DocHeader";
import { PaginatedSections } from "./PaginatedSections";

export const metadata: Metadata = {
    title: "Medium Fintech Widgets — Omnira UI",
    description: "Mid-sized fintech widgets (~348×164) for 2 / 3-column dashboard grids — emergency funds, income breakdowns, weekly expenditure, credit usage, and asset allocation. Drop-in components themeable for dark and light modes.",
    keywords: ["fintech widgets", "medium widgets", "dashboard widgets", "emergency funds", "income breakdown", "asset allocation", "react components", "glassmorphism", "omnira ui"],
    openGraph: {
        title: "Medium Fintech Widgets — Omnira UI",
        description: "Mid-sized fintech widgets — emergency funds, income breakdowns, weekly expenditure, credit usage, asset allocation.",
        url: "https://omnira.one/docs/widgets/fintech/medium",
        type: "article",
    },
    alternates: { canonical: "/docs/widgets/fintech/medium" },
};

export default function MediumFintechWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Medium Fintech Widgets"
                description="Mid-sized widgets (~348×164) designed for 2 / 3-column dashboard grids — half the height of the Large widgets, same width. Each widget below ships with three ready-to-paste variations."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Fintech", href: "/docs/widgets/fintech" },
                    { label: "Medium" },
                ]}
            />

            <PaginatedSections />
        </div>
    );
}
