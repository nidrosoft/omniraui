import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { FinancialGrowth } from "@/components/ui/FinancialGrowth";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — saved & invested */}
<FinancialGrowth />

{/* 2. Three-pillar plan */}
<FinancialGrowth
    title="Wealth Plan"
    goals={[
        { label: "Emergency Fund", amount: "$8,200",  amountDecimal: ".00", percent: 82, goalValue: "$10,000" },
        { label: "Investments",    amount: "$24,500", amountDecimal: ".00", percent: 49, goalValue: "$50,000" },
        { label: "Real Estate",    amount: "$12,000", amountDecimal: ".00", percent: 8,  goalValue: "$150,000" },
    ]}
/>

{/* 3. Aggressive — heavy investing, light saving */}
<FinancialGrowth
    title="Aggressive Portfolio"
    goals={[
        { label: "Saved Amount",    amount: "$1,200",  amountDecimal: ".00", percent: 12, goalValue: "$10,000" },
        { label: "Invested Amount", amount: "$28,400", amountDecimal: ".00", percent: 71, goalValue: "$40,000" },
    ]}
/>`;

export function FinancialGrowthSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Financial Growth</h3>
            <p className={s.sectionDesc}>
                Stacked goal tracker with up to three rows, each showing an amount and a dotted progress bar against an
                independent target. Variations show the default 2-pillar split, a 3-pillar wealth plan, and an
                aggressive investor mix.
            </p>

            <InstallBlock slug="financial-growth" components={["FinancialGrowth"]} />

            <ComponentPreview
                title="Three states — balanced, three-pillar, aggressive"
                description="Same widget, three goal layouts. Pass any number of goals — each renders its own progress bar with its own target value."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <FinancialGrowth />
                    <FinancialGrowth
                        title="Wealth Plan"
                        goals={[
                            { label: "Emergency Fund", amount: "$8,200", amountDecimal: ".00", percent: 82, goalValue: "$10,000" },
                            { label: "Investments", amount: "$24,500", amountDecimal: ".00", percent: 49, goalValue: "$50,000" },
                            { label: "Real Estate", amount: "$12,000", amountDecimal: ".00", percent: 8, goalValue: "$150,000" },
                        ]}
                    />
                    <FinancialGrowth
                        title="Aggressive Portfolio"
                        goals={[
                            { label: "Saved Amount", amount: "$1,200", amountDecimal: ".00", percent: 12, goalValue: "$10,000" },
                            { label: "Invested Amount", amount: "$28,400", amountDecimal: ".00", percent: 71, goalValue: "$40,000" },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="FinancialGrowth props"
                props={[
                    { name: "title", type: "string", default: "\"Financial Growth\"", description: "Header title rendered top-left." },
                    { name: "goals", type: "FinancialGrowthGoal[]", description: "Stacked goals. Each: { label, amount, amountDecimal?, percent, goalLabel?, goalValue }. Pass 1, 2, or 3 entries — the layout adapts vertically." },
                    { name: "dotCount", type: "number", default: "64", description: "Number of dots in each progress bar. Higher = finer resolution." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
