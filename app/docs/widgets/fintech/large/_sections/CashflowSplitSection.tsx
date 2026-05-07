import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CashflowSplit } from "@/components/ui/CashflowSplit";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — 75 / 25 split */}
<CashflowSplit />

{/* 2. Balanced 50 / 50 split */}
<CashflowSplit
    title="Income Sources"
    amount="$12,400"
    amountDecimal=".00"
    segments={[
        { label: "$6,200.00 salary",    note: "+1.2% Last month", percent: 50 },
        { label: "$6,200.00 dividends", note: "+4.8% Last month", percent: 50 },
    ]}
/>

{/* 3. Three-way 60 / 25 / 15 split */}
<CashflowSplit
    title="Revenue Mix"
    ctaLabel="Breakdown"
    amount="$24,890"
    amountDecimal=".50"
    segments={[
        { label: "$14,934.30 subscriptions", note: "+8.4% Last month", percent: 60 },
        { label: "$6,222.62 services",       note: "-1.1% Last month", percent: 25 },
        { label: "$3,733.58 partnerships",   note: "+12% Last month",  percent: 15 },
    ]}
/>`;

export function CashflowSplitSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Cashflow Split</h3>
            <p className={s.sectionDesc}>
                Cashflow card with a total amount and a list of segments, each rendered as a row with its own dotted
                progress bar. Variations show a 75/25 split, an even 50/50, and a three-way 60/25/15.
            </p>

            <InstallBlock slug="cashflow-split" components={["CashflowSplit"]} />

            <ComponentPreview
                title="Three states — uneven, balanced, three-way"
                description="Same widget, three split shapes. The dotted progress bar scales linearly with the segment percent — pass any number of segments."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CashflowSplit />
                    <CashflowSplit
                        title="Income Sources"
                        amount="$12,400"
                        amountDecimal=".00"
                        segments={[
                            { label: "$6,200.00 salary", note: "+1.2% Last month", percent: 50 },
                            { label: "$6,200.00 dividends", note: "+4.8% Last month", percent: 50 },
                        ]}
                    />
                    <CashflowSplit
                        title="Revenue Mix"
                        ctaLabel="Breakdown"
                        amount="$24,890"
                        amountDecimal=".50"
                        segments={[
                            { label: "$14,934.30 subs", note: "+8.4% Last month", percent: 60 },
                            { label: "$6,222.62 services", note: "-1.1% Last month", percent: 25 },
                            { label: "$3,733.58 partners", note: "+12% Last month", percent: 15 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CashflowSplit props"
                props={[
                    { name: "title", type: "string", default: "\"Cashflow\"", description: "Header title rendered top-left." },
                    { name: "ctaLabel", type: "string", default: "\"See More\"", description: "Action label rendered top-right." },
                    { name: "onCtaClick", type: "() => void", description: "When provided, the CTA renders as a button." },
                    { name: "amount", type: "string", default: "\"$6,528\"", description: "Main amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".21\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "segments", type: "CashflowSplitSegment[]", description: "Breakdown rows. Each: { label, note?, percent }. The label's last short token (≤4 chars, e.g. \"in\") is auto-styled as a subtle suffix." },
                    { name: "dotCount", type: "number", default: "64", description: "Number of dots in each progress bar. Higher = finer resolution." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
