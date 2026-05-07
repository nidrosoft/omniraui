import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CreditPaymentPlanner } from "@/components/ui/CreditPaymentPlanner";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — mid cycle */}
<CreditPaymentPlanner />

{/* 2. Almost paid off */}
<CreditPaymentPlanner
    title="Auto Loan"
    dueText="To be deposited by 15 March, 2026"
    amount="$1,250"
    nextPaymentText="Next Payment in 3 days"
    progressPercent={92}
    stats={[
        { value: "$24,000", label: "Total Loan" },
        { value: "4.5%",    label: "APR" },
        { value: "$22,750", label: "Paid" },
    ]}
/>

{/* 3. Just started */}
<CreditPaymentPlanner
    title="Mortgage Plan"
    dueText="To be deposited by 1 January, 2027"
    amount="$2,400"
    nextPaymentText="Next Payment in 28 days"
    progressPercent={8}
    stats={[
        { value: "$420,000", label: "Principal" },
        { value: "6.25%",    label: "Rate" },
        { value: "$33,800",  label: "Paid YTD" },
    ]}
/>`;

export function CreditPaymentPlannerSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Credit Payment Planner</h3>
            <p className={s.sectionDesc}>
                Half-arc payment planner with a due-date caption, central amount, "next payment" reminder, and a
                three-column stats footer. Variations cover early-mid-late repayment stages.
            </p>

            <InstallBlock slug="credit-payment-planner" components={["CreditPaymentPlanner"]} />

            <ComponentPreview
                title="Three states — early, mid, near-paid-off"
                description="Same widget, three repayment progress shapes. The half-arc fills clockwise from left to right based on progressPercent."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CreditPaymentPlanner />
                    <CreditPaymentPlanner
                        title="Auto Loan"
                        dueText="To be deposited by 15 March, 2026"
                        amount="$1,250"
                        nextPaymentText="Next Payment in 3 days"
                        progressPercent={92}
                        stats={[
                            { value: "$24,000", label: "Total Loan" },
                            { value: "4.5%", label: "APR" },
                            { value: "$22,750", label: "Paid" },
                        ]}
                    />
                    <CreditPaymentPlanner
                        title="Mortgage Plan"
                        dueText="To be deposited by 1 January, 2027"
                        amount="$2,400"
                        nextPaymentText="Next Payment in 28 days"
                        progressPercent={8}
                        stats={[
                            { value: "$420k", label: "Principal" },
                            { value: "6.25%", label: "Rate" },
                            { value: "$33,800", label: "Paid YTD" },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CreditPaymentPlanner props"
                props={[
                    { name: "title", type: "string", default: "\"Credit payment planner\"", description: "Header title rendered top-center." },
                    { name: "dueText", type: "string", default: "\"To be deposited by 1 June, 2026\"", description: "Caption above the central amount." },
                    { name: "amount", type: "string", default: "\"$8,000\"", description: "Central amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "nextPaymentText", type: "string", default: "\"Next Payment in 10 days\"", description: "Reminder caption beneath the amount." },
                    { name: "progressPercent", type: "number", default: "67", description: "Half-arc fill percent (0–100). Sweeps clockwise from left." },
                    { name: "stats", type: "CreditPaymentStat[]", description: "Footer stats — 3 entries recommended. Each: { value, label }." },
                    { name: "tickCount", type: "number", default: "64", description: "Number of tick marks around the half-arc." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
