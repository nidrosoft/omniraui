import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { EmergencyFunds } from "@/components/ui/EmergencyFunds";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — early in the goal */}
<EmergencyFunds />

{/* 2. Halfway there */}
<EmergencyFunds
    title="Rainy Day Fund"
    subtitle="3 Months Expenses"
    amount="$3,150"
    progressPercent={52}
    target="$6,000"
/>

{/* 3. Almost complete */}
<EmergencyFunds
    title="Safety Net"
    subtitle="9 Months Expenses"
    amount="$16,200"
    progressPercent={90}
    target="$18,000"
/>`;

export function EmergencyFundsSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Emergency Funds</h3>
            <p className={s.sectionDesc}>
                Compact emergency-fund tracker — header, big amount, marker progress bar, and percent / target footer.
                Variations show early, mid, and near-complete progress.
            </p>

            <InstallBlock slug="emergency-funds" components={["EmergencyFunds"]} />

            <ComponentPreview
                title="Three states — early, halfway, near-complete"
                description="Same widget, three progress shapes. The marker dot bumps to 3 dots tall right at the boundary so the user can read progress at a glance."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <EmergencyFunds />
                    <EmergencyFunds
                        title="Rainy Day Fund"
                        subtitle="3 Months Expenses"
                        amount="$3,150"
                        progressPercent={52}
                        target="$6,000"
                    />
                    <EmergencyFunds
                        title="Safety Net"
                        subtitle="9 Months Expenses"
                        amount="$16,200"
                        progressPercent={90}
                        target="$18,000"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="EmergencyFunds props"
                props={[
                    { name: "title", type: "string", default: "\"Emergency Funds\"", description: "Header title rendered top-left." },
                    { name: "subtitle", type: "string", default: "\"6 Months Expenses\"", description: "Sub-caption rendered top-right." },
                    { name: "amount", type: "string", default: "\"$4,520\"", description: "Main amount in display type." },
                    { name: "amountDecimal", type: "string", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "progressPercent", type: "number", default: "34", description: "Goal completion percent, 0–100." },
                    { name: "progressLabel", type: "string", description: "Override left footer caption (defaults to e.g. \"34% Completed\")." },
                    { name: "target", type: "string", default: "\"$12,000\"", description: "Right footer value." },
                    { name: "progressDotCount", type: "number", default: "64", description: "Number of dots in the progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
