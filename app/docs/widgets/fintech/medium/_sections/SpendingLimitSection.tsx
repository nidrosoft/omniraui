import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SpendingLimit } from "@/components/ui/SpendingLimit";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — 72% spent */}
<SpendingLimit />

{/* 2. Just started the month */}
<SpendingLimit
    title="Card Spend"
    period="May"
    progressPercent={18}
    spentValue="$420"
    remainingValue="$1,880"
/>

{/* 3. Over budget */}
<SpendingLimit
    title="Travel Budget"
    period="Q2"
    progressPercent={100}
    spentLabel="Total Spent"
    spentValue="$5,200"
    remainingLabel="Over By"
    remainingValue="$300"
/>`;

export function SpendingLimitSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Spending Limit</h3>
            <p className={s.sectionDesc}>
                Spending tracker with a dotted progress bar with marker plus a Today Spent / Remaining footer.
                Variations cover mid-cycle, just-started, and over-budget states.
            </p>

            <InstallBlock slug="spending-limit" components={["SpendingLimit"]} />

            <ComponentPreview
                title="Three states — mid-cycle, early, over budget"
                description={`Same widget, three usage levels. Override spentLabel / remainingLabel for context-specific phrasing like "Total Spent" / "Over By".`}
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SpendingLimit />
                    <SpendingLimit
                        title="Card Spend"
                        period="May"
                        progressPercent={18}
                        spentValue="$420"
                        remainingValue="$1,880"
                    />
                    <SpendingLimit
                        title="Travel Budget"
                        period="Q2"
                        progressPercent={100}
                        spentLabel="Total Spent"
                        spentValue="$5,200"
                        remainingLabel="Over By"
                        remainingValue="$300"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SpendingLimit props"
                props={[
                    { name: "title", type: "string", default: "\"Spending Limit\"", description: "Header title rendered top-left." },
                    { name: "period", type: "string", default: "\"This Month\"", description: "Right-aligned period label." },
                    { name: "progressPercent", type: "number", default: "72", description: "Spent percent (0–100). Drives the bar fill." },
                    { name: "dotCount", type: "number", default: "80", description: "Number of dots in the progress bar." },
                    { name: "spentLabel", type: "string", default: "\"Today Spent\"", description: "Footer left caption." },
                    { name: "spentValue", type: "string", default: "\"$7,212\"", description: "Footer left value." },
                    { name: "remainingLabel", type: "string", default: "\"Remaining\"", description: "Footer right caption." },
                    { name: "remainingValue", type: "string", default: "\"$2,762\"", description: "Footer right value." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
