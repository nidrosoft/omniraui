import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CashflowSummary } from "@/components/ui/CashflowSummary";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — large positive cashflow */}
<CashflowSummary />

{/* 2. Smaller business */}
<CashflowSummary
    title="Monthly Net"
    amount="$48,420"
    inflowAmount="$18,200"
    inflowDecimal=""
    comparisonLabel="vs $44,890 Last month"
    inflowPercentLabel="38% money in"
/>

{/* 3. Tight inflow */}
<CashflowSummary
    title="Q1 Cashflow"
    amount="$1,240,800"
    amountDecimal=""
    inflowAmount="$120,400"
    inflowDecimal=""
    comparisonLabel="vs $1.18M Last quarter"
    inflowPercentLabel="9% money in"
/>`;

export function CashflowSummarySection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Cashflow Summary</h3>
            <p className={s.sectionDesc}>
                Compact cashflow snapshot — total amount up top, inline mini bar chart with comparison overlay below.
                Variations cover a typical default, a small-business net, and a tight-inflow quarterly view.
            </p>

            <InstallBlock slug="cashflow-summary" components={["CashflowSummary"]} />

            <ComponentPreview
                title="Three states — default, small biz, tight inflow"
                description="Same widget, three cashflow shapes. Pass any number of bars to drive the chart shape."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CashflowSummary />
                    <CashflowSummary
                        title="Monthly Net"
                        amount="$48,420"
                        inflowAmount="$18,200"
                        inflowDecimal=""
                        comparisonLabel="vs $44,890 Last month"
                        inflowPercentLabel="38% money in"
                    />
                    <CashflowSummary
                        title="Q1 Cashflow"
                        amount="$1,240,800"
                        amountDecimal=""
                        inflowAmount="$120,400"
                        inflowDecimal=""
                        comparisonLabel="vs $1.18M Last quarter"
                        inflowPercentLabel="9% money in"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CashflowSummary props"
                props={[
                    { name: "title", type: "string", default: "\"Cashflow\"", description: "Header title rendered top-left." },
                    { name: "amount", type: "string", default: "\"$789,870\"", description: "Main amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".21\"", description: "Optional small decimals after the amount." },
                    { name: "inflowAmount", type: "string", default: "\"$234,882\"", description: "Mid-line money-in amount overlaid on the chart." },
                    { name: "inflowDecimal", type: "string", default: "\".21\"", description: "Decimals for the inflow amount." },
                    { name: "comparisonLabel", type: "string", default: "\"vs $211,280.30 Last month\"", description: "Caption beneath the inflow amount." },
                    { name: "inflowPercentLabel", type: "string", default: "\"68% money in\"", description: "Right-aligned overlay label." },
                    { name: "bars", type: "number[]", description: "Variable-height dot bars (each value 0–100 = bar height percent)." },
                    { name: "maxDotsPerBar", type: "number", default: "10", description: "Number of dots per bar when value === 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
