import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SavedMoney } from "@/components/ui/SavedMoney";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — 72% saved */}
<SavedMoney />

{/* 2. Big balance, just started */}
<SavedMoney
    title="Vacation Fund"
    amount="$1,840"
    percent={18}
    percentLabel="Saved"
/>

{/* 3. Goal complete */}
<SavedMoney
    title="Emergency Reserve"
    amount="$25,000"
    percent={100}
    percentLabel="Goal Hit"
/>`;

export function SavedMoneySection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Saved Money</h3>
            <p className={s.sectionDesc}>
                Split layout — balance left, dotted donut percent right. Variations cover mid-progress, just started,
                and a goal-complete state.
            </p>

            <InstallBlock slug="saved-money" components={["SavedMoney"]} />

            <ComponentPreview
                title="Three states — mid, early, complete"
                description="Same widget, three savings progress states. The donut uses the same dotted-tick pattern as the Large widgets for consistency."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SavedMoney />
                    <SavedMoney
                        title="Vacation Fund"
                        amount="$1,840"
                        percent={18}
                        percentLabel="Saved"
                    />
                    <SavedMoney
                        title="Emergency Reserve"
                        amount="$25,000"
                        percent={100}
                        percentLabel="Goal Hit"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SavedMoney props"
                props={[
                    { name: "title", type: "string", default: "\"Saved Money\"", description: "Header title rendered top-left of the left column." },
                    { name: "balanceLabel", type: "string", default: "\"Balance\"", description: "Caption above the balance amount." },
                    { name: "amount", type: "string", default: "\"$23,456\"", description: "Balance amount in display type." },
                    { name: "amountDecimal", type: "string", description: "Optional decimal suffix rendered small after the balance." },
                    { name: "percent", type: "number", default: "72", description: "Saved percent (0–100). Drives the donut fill and the central number." },
                    { name: "percentLabel", type: "string", default: "\"Saved\"", description: "Caption beneath the percent." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
