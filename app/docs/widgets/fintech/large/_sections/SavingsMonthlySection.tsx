import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SavingsMonthly } from "@/components/ui/SavingsMonthly";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — three savings buckets */}
<SavingsMonthly />

{/* 2. Mid-progress with re-balanced buckets */}
<SavingsMonthly
    title="Monthly Savings"
    progressPercent={48}
    amount="$8,400"
    donuts={[
        { amount: "$3,200", label: "House",     percent: 64 },
        { amount: "$2,400", label: "Travel",    percent: 38 },
        { amount: "$2,800", label: "Emergency", percent: 22 },
    ]}
    footerValue="$18,400"
/>

{/* 3. Almost done */}
<SavingsMonthly
    title="Savings Sprint"
    progressPercent={94}
    amount="$22,800"
    summaryLabel="Saved this quarter"
    donuts={[
        { amount: "$9,600", label: "Down Payment", percent: 96 },
        { amount: "$7,200", label: "Wedding",      percent: 88 },
        { amount: "$6,000", label: "Reno",         percent: 100 },
    ]}
    footerValue="$48,000"
/>`;

export function SavingsMonthlySection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Savings Monthly</h3>
            <p className={s.sectionDesc}>
                Monthly savings overview — total amount, a marker-based progress bar, three donut goals, and a balance
                row. Variations cover early-mid-late savings cycles.
            </p>

            <InstallBlock slug="savings-monthly" components={["SavingsMonthly"]} />

            <ComponentPreview
                title="Three states — early, mid, near-complete"
                description="Same widget, three savings stages. Each donut renders its own percent fill — pass exactly three for the canonical layout."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SavingsMonthly />
                    <SavingsMonthly
                        title="Monthly Savings"
                        progressPercent={48}
                        amount="$8,400"
                        donuts={[
                            { amount: "$3,200", label: "House", percent: 64 },
                            { amount: "$2,400", label: "Travel", percent: 38 },
                            { amount: "$2,800", label: "Emergency", percent: 22 },
                        ]}
                        footerValue="$18,400"
                    />
                    <SavingsMonthly
                        title="Savings Sprint"
                        progressPercent={94}
                        amount="$22,800"
                        summaryLabel="Saved this quarter"
                        donuts={[
                            { amount: "$9,600", label: "Down Pay.", percent: 96 },
                            { amount: "$7,200", label: "Wedding", percent: 88 },
                            { amount: "$6,000", label: "Reno", percent: 100 },
                        ]}
                        footerValue="$48,000"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SavingsMonthly props"
                props={[
                    { name: "title", type: "string", default: "\"Savings\"", description: "Header title rendered top-left." },
                    { name: "period", type: "string", default: "\"Monthly\"", description: "Period label rendered top-right." },
                    { name: "amount", type: "string", default: "\"$13,300\"", description: "Total amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "summaryLabel", type: "string", default: "\"Total amount saved\"", description: "Caption beneath the main amount." },
                    { name: "progressPercent", type: "number", default: "72", description: "Progress percent for the marker bar (0–100)." },
                    { name: "progressLabel", type: "string", description: "Override the bar's right-side caption (defaults to e.g. \"72%\")." },
                    { name: "donuts", type: "SavingsMonthlyDonut[]", description: "Three donut charts rendered below the progress bar. Each: { amount, label, percent }." },
                    { name: "footerLabel", type: "string", default: "\"Balance\"", description: "Footer left caption." },
                    { name: "footerValue", type: "string", default: "\"$24,212\"", description: "Footer right value." },
                    { name: "progressDotCount", type: "number", default: "60", description: "Number of dots in the progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
