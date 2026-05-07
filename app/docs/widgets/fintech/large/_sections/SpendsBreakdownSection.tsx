import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SpendsBreakdown } from "@/components/ui/SpendsBreakdown";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — household monthly spend */}
<SpendsBreakdown />

{/* 2. Travel budget — even split */}
<SpendsBreakdown
    title="Trip Budget"
    period="July"
    summaryLabel="Total Trip Spend"
    amount="$4,800"
    amountDecimal=".00"
    categories={[
        { label: "Flights",      amount: "$1,200", color: "var(--color-lime)", weight: 1200 },
        { label: "Hotels",       amount: "$1,200", color: "var(--color-lime-hover)", weight: 1200 },
        { label: "Food",         amount: "$1,200", color: "var(--color-lime-gradient)", weight: 1200 },
        { label: "Activities",   amount: "$1,200", color: "var(--color-bg-elevated)", weight: 1200 },
    ]}
/>

{/* 3. Dominant category — one big block */}
<SpendsBreakdown
    title="Workspace Costs"
    period="Q1"
    summaryLabel="Total Q1 Spend"
    amount="$22,400"
    amountDecimal=".00"
    categories={[
        { label: "Salaries",      amount: "$18,000", color: "var(--color-lime)", weight: 18000 },
        { label: "Tooling",       amount: "$2,800",  color: "var(--color-lime-hover)", weight: 2800 },
        { label: "Office",        amount: "$1,200",  color: "var(--color-lime-gradient)", weight: 1200 },
        { label: "Misc",          amount: "$400",    color: "var(--color-bg-elevated)", weight: 400 },
    ]}
/>`;

export function SpendsBreakdownSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Spends Breakdown</h3>
            <p className={s.sectionDesc}>
                Spending overview with a total, a categorized dotted bar (dot colors mirror the legend), and a list of
                category amounts. Variations cover an even-split travel budget and a one-dominant-category cost
                breakdown.
            </p>

            <InstallBlock slug="spends-breakdown" components={["SpendsBreakdown"]} />

            <ComponentPreview
                title="Three states — household, travel, workspace"
                description="Same widget, three category mixes. The dotted bar normalises proportionally against the sum of weights — pass any number of categories with their amounts."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SpendsBreakdown />
                    <SpendsBreakdown
                        title="Trip Budget"
                        period="July"
                        summaryLabel="Total Trip Spend"
                        amount="$4,800"
                        amountDecimal=".00"
                        categories={[
                            { label: "Flights", amount: "$1,200", color: "var(--color-lime)", weight: 1200 },
                            { label: "Hotels", amount: "$1,200", color: "var(--color-lime-hover)", weight: 1200 },
                            { label: "Food", amount: "$1,200", color: "var(--color-lime-gradient)", weight: 1200 },
                            { label: "Activities", amount: "$1,200", color: "var(--color-bg-elevated)", weight: 1200 },
                        ]}
                    />
                    <SpendsBreakdown
                        title="Workspace Costs"
                        period="Q1"
                        summaryLabel="Total Q1 Spend"
                        amount="$22,400"
                        amountDecimal=".00"
                        categories={[
                            { label: "Salaries", amount: "$18,000", color: "var(--color-lime)", weight: 18000 },
                            { label: "Tooling", amount: "$2,800", color: "var(--color-lime-hover)", weight: 2800 },
                            { label: "Office", amount: "$1,200", color: "var(--color-lime-gradient)", weight: 1200 },
                            { label: "Misc", amount: "$400", color: "var(--color-bg-elevated)", weight: 400 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SpendsBreakdown props"
                props={[
                    { name: "title", type: "string", default: "\"Spends Breakdown\"", description: "Header title rendered top-left." },
                    { name: "period", type: "string", default: "\"Monthly\"", description: "Period label rendered top-right." },
                    { name: "summaryLabel", type: "string", default: "\"Total Spent this month\"", description: "Caption above the main amount." },
                    { name: "amount", type: "string", default: "\"$3,300\"", description: "Total amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "categories", type: "SpendsBreakdownCategory[]", description: "Categories with { label, amount, color, weight }. The dot bar splits proportionally to the weights." },
                    { name: "dotCount", type: "number", default: "80", description: "Number of dots in the bar. Higher = finer resolution." },
                    { name: "highlightBlocks", type: "number", default: "4", description: "Decorative semi-transparent blocks behind the bar. Set to 0 to hide." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
