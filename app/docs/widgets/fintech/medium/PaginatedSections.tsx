"use client";

import { useEffect, useRef, useState } from "react";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { AssetAllocationSection } from "./_sections/AssetAllocationSection";
import { CashflowRingSection } from "./_sections/CashflowRingSection";
import { CashflowSummarySection } from "./_sections/CashflowSummarySection";
import { ConvertCurrencySection } from "./_sections/ConvertCurrencySection";
import { CreditCardUsedSection } from "./_sections/CreditCardUsedSection";
import { CreditScoreSection } from "./_sections/CreditScoreSection";
import { DailyRevenueSection } from "./_sections/DailyRevenueSection";
import { EmergencyFundsSection } from "./_sections/EmergencyFundsSection";
import { GoalProgressSection } from "./_sections/GoalProgressSection";
import { IncomeBreakdownSection } from "./_sections/IncomeBreakdownSection";
import { InvestmentChartSection } from "./_sections/InvestmentChartSection";
import { MonthlySubscriptionSection } from "./_sections/MonthlySubscriptionSection";
import { MyCardSection } from "./_sections/MyCardSection";
import { SavedMoneySection } from "./_sections/SavedMoneySection";
import { SavingsBucketsSection } from "./_sections/SavingsBucketsSection";
import { SendMoneyCompactSection } from "./_sections/SendMoneyCompactSection";
import { SpendingLimitSection } from "./_sections/SpendingLimitSection";
import { StockPositionSection } from "./_sections/StockPositionSection";
import { TotalBalanceSection } from "./_sections/TotalBalanceSection";
import { WeeklyExpenditureSection } from "./_sections/WeeklyExpenditureSection";

const SECTIONS = [
    EmergencyFundsSection,
    IncomeBreakdownSection,
    WeeklyExpenditureSection,
    CreditCardUsedSection,
    AssetAllocationSection,
    MonthlySubscriptionSection,
    SavingsBucketsSection,
    MyCardSection,
    ConvertCurrencySection,
    SendMoneyCompactSection,
    TotalBalanceSection,
    StockPositionSection,
    SpendingLimitSection,
    GoalProgressSection,
    SavedMoneySection,
    CashflowSummarySection,
    CashflowRingSection,
    CreditScoreSection,
    InvestmentChartSection,
    DailyRevenueSection,
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
            {TOTAL_PAGES > 1 && (
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
            )}
        </>
    );
}
