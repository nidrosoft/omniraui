"use client";

import { useEffect, useRef, useState } from "react";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { CashflowAnalyticsSection } from "./_sections/CashflowAnalyticsSection";
import { CashflowSplitSection } from "./_sections/CashflowSplitSection";
import { CreditPaymentPlannerSection } from "./_sections/CreditPaymentPlannerSection";
import { ExpensesChartSection } from "./_sections/ExpensesChartSection";
import { FinancialGrowthSection } from "./_sections/FinancialGrowthSection";
import { SavingAccountSection } from "./_sections/SavingAccountSection";
import { SavingsGoalsSection } from "./_sections/SavingsGoalsSection";
import { SavingsMonthlySection } from "./_sections/SavingsMonthlySection";
import { SendMoneySection } from "./_sections/SendMoneySection";
import { SpendsBreakdownSection } from "./_sections/SpendsBreakdownSection";

const SECTIONS = [
    CashflowAnalyticsSection,
    SendMoneySection,
    CashflowSplitSection,
    SavingAccountSection,
    FinancialGrowthSection,
    SpendsBreakdownSection,
    SavingsMonthlySection,
    CreditPaymentPlannerSection,
    SavingsGoalsSection,
    ExpensesChartSection,
];

const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(SECTIONS.length / PER_PAGE);

export function PaginatedSections() {
    const [page, setPage] = useState(() => {
        if (typeof window === "undefined") return 1;
        const fromUrl = Number(new URLSearchParams(window.location.search).get("page"));
        return fromUrl >= 1 && fromUrl <= TOTAL_PAGES ? fromUrl : 1;
    });
    const topRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const params = new URLSearchParams(window.location.search);
        if (page === 1) params.delete("page");
        else params.set("page", String(page));
        const next = params.toString();
        const url = next ? `${window.location.pathname}?${next}` : window.location.pathname;
        window.history.replaceState(null, "", url);

        // Skip scroll on the initial mount so deep-links land at the user's chosen anchor.
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [page]);

    const start = (page - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    const visible = SECTIONS.slice(start, end);

    return (
        <>
            <div ref={topRef} aria-hidden="true" />
            {visible.map((Section, i) => (
                <Section key={start + i} />
            ))}
            <div style={{ marginTop: 48 }}>
                <Pagination
                    page={page}
                    totalPages={TOTAL_PAGES}
                    onPageChange={setPage}
                    showPageNumbers
                    variant="default"
                    align="center"
                />
            </div>
        </>
    );
}
