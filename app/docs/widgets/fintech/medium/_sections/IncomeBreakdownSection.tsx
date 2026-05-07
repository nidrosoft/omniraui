import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { IncomeBreakdown } from "@/components/ui/IncomeBreakdown";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — three sources */}
<IncomeBreakdown />

{/* 2. Freelancer mix */}
<IncomeBreakdown
    title="Freelance Income"
    sources={[
        { label: "Retainer", amount: "$2,800", percent: 80, color: "var(--color-lime-gradient)" },
        { label: "Project",  amount: "$1,400", percent: 42, color: "var(--color-lime-hover)" },
        { label: "Royalty",  amount: "$420",   percent: 14, color: "var(--color-lime)" },
    ]}
/>

{/* 3. Investor — passive heavy */}
<IncomeBreakdown
    title="Passive Income"
    sources={[
        { label: "Dividends",  amount: "$3,800", percent: 100, color: "var(--color-lime-gradient)" },
        { label: "Rental",     amount: "$2,200", percent: 60,  color: "var(--color-lime-hover)" },
        { label: "Royalties",  amount: "$640",   percent: 18,  color: "var(--color-lime)" },
    ]}
/>`;

export function IncomeBreakdownSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Income Breakdown</h3>
            <p className={s.sectionDesc}>
                Three side-by-side income sources, each rendered as a vertical dotted bar with a label and amount.
                Variations cover a typical mix, a freelancer breakdown, and a passive-income heavy mix.
            </p>

            <InstallBlock slug="income-breakdown" components={["IncomeBreakdown"]} />

            <ComponentPreview
                title="Three states — typical, freelance, passive"
                description="Same widget, three source mixes. Pass any number of sources — the bars distribute evenly across the chart width."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <IncomeBreakdown />
                    <IncomeBreakdown
                        title="Freelance Income"
                        sources={[
                            { label: "Retainer", amount: "$2,800", percent: 80, color: "var(--color-lime-gradient)" },
                            { label: "Project", amount: "$1,400", percent: 42, color: "var(--color-lime-hover)" },
                            { label: "Royalty", amount: "$420", percent: 14, color: "var(--color-lime)" },
                        ]}
                    />
                    <IncomeBreakdown
                        title="Passive Income"
                        sources={[
                            { label: "Dividends", amount: "$3,800", percent: 100, color: "var(--color-lime-gradient)" },
                            { label: "Rental", amount: "$2,200", percent: 60, color: "var(--color-lime-hover)" },
                            { label: "Royalties", amount: "$640", percent: 18, color: "var(--color-lime)" },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="IncomeBreakdown props"
                props={[
                    { name: "title", type: "string", default: "\"Income Breakdown\"", description: "Header title rendered top-left." },
                    { name: "sources", type: "IncomeBreakdownSource[]", description: "Income sources. Each: { label, amount, percent, color? }." },
                    { name: "maxDotsPerBar", type: "number", default: "16", description: "Number of dots rendered when a source's percent === 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
