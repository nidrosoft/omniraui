import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { GoalProgress } from "@/components/ui/GoalProgress";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — Buy a New Car, ~37% */}
<GoalProgress />

{/* 2. Halfway there */}
<GoalProgress
    title="Wedding Fund"
    timeframe="6 Months"
    amount="$12,500"
    progressPercent={50}
    goalValue="$25,000"
/>

{/* 3. Almost there */}
<GoalProgress
    title="Down Payment"
    timeframe="3 Months"
    amount="$92,400"
    progressPercent={92}
    goalValue="$100,000"
/>`;

export function GoalProgressSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Goal Progress</h3>
            <p className={s.sectionDesc}>
                Goal tracker — header with timeframe, current amount, linear progress bar with bright indicator, and a
                Goals / target footer. Variations cover early, mid, and near-complete progress.
            </p>

            <InstallBlock slug="goal-progress" components={["GoalProgress"]} />

            <ComponentPreview
                title="Three states — early, halfway, near-complete"
                description="Same widget, three savings stages. The bar uses a solid blue fill plus a bright dot indicator at the boundary."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <GoalProgress />
                    <GoalProgress
                        title="Wedding Fund"
                        timeframe="6 Months"
                        amount="$12,500"
                        progressPercent={50}
                        goalValue="$25,000"
                    />
                    <GoalProgress
                        title="Down Payment"
                        timeframe="3 Months"
                        amount="$92,400"
                        progressPercent={92}
                        goalValue="$100,000"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="GoalProgress props"
                props={[
                    { name: "title", type: "string", default: "\"Buy a New Car\"", description: "Header title rendered top-left." },
                    { name: "timeframe", type: "string", default: "\"1 Years\"", description: "Right-aligned timeframe label." },
                    { name: "amount", type: "string", default: "\"$22,231\"", description: "Current saved amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "progressPercent", type: "number", default: "37", description: "Goal completion percent (0–100)." },
                    { name: "goalLabel", type: "string", default: "\"Goals\"", description: "Footer left caption." },
                    { name: "goalValue", type: "string", default: "\"$60,000\"", description: "Footer right target value." },
                    { name: "dotCount", type: "number", default: "80", description: "Number of dots in the progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
