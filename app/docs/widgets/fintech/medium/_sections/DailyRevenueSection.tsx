import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { DailyRevenue } from "@/components/ui/DailyRevenue";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — $217k toward $250k */}
<DailyRevenue />

{/* 2. Just past halfway */}
<DailyRevenue
    title="Weekly Revenue"
    amount="$58,400"
    progressPercent={56}
    goalValue="$100,000"
/>

{/* 3. Goal hit */}
<DailyRevenue
    title="Quarter Target"
    amount="$1,200,000"
    progressPercent={100}
    goalValue="$1,200,000"
/>`;

export function DailyRevenueSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Daily Revenue</h3>
            <p className={s.sectionDesc}>
                Revenue tracker — title, big amount, dotted progress bar with marker pip, and a goal footer.
                Variations cover early-day, mid-week, and goal-hit states.
            </p>

            <InstallBlock slug="daily-revenue" components={["DailyRevenue"]} />

            <ComponentPreview
                title="Three states — default, mid, complete"
                description="Same widget, three revenue progress states. The marker dot pip pops at the boundary so users can read progress at a glance."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <DailyRevenue />
                    <DailyRevenue
                        title="Weekly Revenue"
                        amount="$58,400"
                        progressPercent={56}
                        goalValue="$100,000"
                    />
                    <DailyRevenue
                        title="Quarter Target"
                        amount="$1,200,000"
                        progressPercent={100}
                        goalValue="$1,200,000"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="DailyRevenue props"
                props={[
                    { name: "title", type: "string", default: "\"Daily Revenue\"", description: "Header title rendered top-left." },
                    { name: "amount", type: "string", default: "\"217,000\"", description: "Big revenue amount in display type." },
                    { name: "amountPrefix", type: "string", description: "Optional small prefix rendered before the amount (e.g. currency symbol)." },
                    { name: "amountDecimal", type: "string", description: "Optional small suffix rendered after the amount." },
                    { name: "progressPercent", type: "number", default: "64", description: "Goal completion percent (0–100)." },
                    { name: "dotCount", type: "number", default: "80", description: "Number of dots in the progress bar." },
                    { name: "goalLabel", type: "string", default: "\"Goals\"", description: "Footer left caption." },
                    { name: "goalValue", type: "string", default: "\"$250,000\"", description: "Footer right target value." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
