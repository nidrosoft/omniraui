import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CreditCardUsed } from "@/components/ui/CreditCardUsed";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — barely used */}
<CreditCardUsed />

{/* 2. Mid-cycle */}
<CreditCardUsed
    title="Card Usage"
    amount="$18,420"
    subtitle="Out of $50,000"
    percent={37}
/>

{/* 3. Maxed near limit */}
<CreditCardUsed
    title="Travel Card"
    amount="$22,340"
    subtitle="Out of $25,000"
    percent={89}
/>`;

export function CreditCardUsedSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Credit Card Used</h3>
            <p className={s.sectionDesc}>
                Split layout — used amount and total on the left, dotted donut percent on the right. Variations cover
                low usage, mid-cycle, and near-the-limit states.
            </p>

            <InstallBlock slug="credit-card-used" components={["CreditCardUsed"]} />

            <ComponentPreview
                title="Three states — low, mid, near-limit"
                description="Same widget, three usage levels. The donut fill scales clockwise from the top, with the percent number displayed in the center."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CreditCardUsed />
                    <CreditCardUsed
                        title="Card Usage"
                        amount="$18,420"
                        subtitle="Out of $50,000"
                        percent={37}
                    />
                    <CreditCardUsed
                        title="Travel Card"
                        amount="$22,340"
                        subtitle="Out of $25,000"
                        percent={89}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CreditCardUsed props"
                props={[
                    { name: "title", type: "string", default: "\"Credit Card Used\"", description: "Header title rendered top-left of the left column." },
                    { name: "amount", type: "string", default: "\"$1,250\"", description: "Used amount in display type." },
                    { name: "amountDecimal", type: "string", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "subtitle", type: "string", default: "\"Out of $72,231\"", description: "Caption beneath the amount." },
                    { name: "percent", type: "number", default: "2", description: "Used percent, 0–100. Drives the donut fill and the central number." },
                    { name: "centerText", type: "string", description: "Override the central donut text (defaults to \"{percent}\")." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
