import { Heart, House, Car, Bag2, Airplane, Teacher } from "iconsax-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SavingsGoals } from "@/components/ui/SavingsGoals";
import s from "../../fintech.module.css";

const CODE = `import { Heart, House, Car, Bag2, Airplane, Teacher } from "iconsax-react";

{/* 1. Default — wedding / house / car */}
<SavingsGoals />

{/* 2. Family plan — education / home / vacation */}
<SavingsGoals
    title="Family Goals"
    amount="$18,500"
    items={[
        { icon: <Teacher size={18} variant="Linear" />, label: "Education",  amount: "$15,000", percent: 35 },
        { icon: <House          size={18} variant="Linear" />, label: "Renovation", amount: "$8,000",  percent: 70 },
        { icon: <Airplane       size={18} variant="Linear" />, label: "Vacation",   amount: "$3,000",  percent: 90 },
    ]}
/>

{/* 3. Personal stash — emergency / car / shopping */}
<SavingsGoals
    title="Personal Stash"
    amount="$5,400"
    items={[
        { icon: <Heart size={18} variant="Linear" />, label: "Emergency",   amount: "$10,000", percent: 25 },
        { icon: <Car   size={18} variant="Linear" />, label: "Car Upgrade", amount: "$5,000",  percent: 60 },
        { icon: <Bag2  size={18} variant="Linear" />, label: "Shopping",    amount: "$1,200",  percent: 85 },
    ]}
/>`;

export function SavingsGoalsSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Savings Goals</h3>
            <p className={s.sectionDesc}>
                List of savings goals — each row pairs an icon, label, target amount, and dotted progress bar against
                the goal. Variations cover the default trio, a family plan, and a personal stash.
            </p>

            <InstallBlock slug="savings-goals" components={["SavingsGoals"]} />

            <ComponentPreview
                title="Three states — default, family, personal"
                description="Same widget, three goal layouts. Bring your own iconsax-react icon for each row to match the goal's intent."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SavingsGoals />
                    <SavingsGoals
                        title="Family Goals"
                        amount="$18,500"
                        items={[
                            { icon: <Teacher size={18} variant="Linear" color="currentColor" />, label: "Education", amount: "$15,000", percent: 35 },
                            { icon: <House size={18} variant="Linear" color="currentColor" />, label: "Renovation", amount: "$8,000", percent: 70 },
                            { icon: <Airplane size={18} variant="Linear" color="currentColor" />, label: "Vacation", amount: "$3,000", percent: 90 },
                        ]}
                    />
                    <SavingsGoals
                        title="Personal Stash"
                        amount="$5,400"
                        items={[
                            { icon: <Heart size={18} variant="Linear" color="currentColor" />, label: "Emergency", amount: "$10,000", percent: 25 },
                            { icon: <Car size={18} variant="Linear" color="currentColor" />, label: "Car Upgrade", amount: "$5,000", percent: 60 },
                            { icon: <Bag2 size={18} variant="Linear" color="currentColor" />, label: "Shopping", amount: "$1,200", percent: 85 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SavingsGoals props"
                props={[
                    { name: "title", type: "string", default: "\"Savings\"", description: "Header title rendered top-left." },
                    { name: "summaryLabel", type: "string", default: "\"Total amount\"", description: "Caption above the total." },
                    { name: "amount", type: "string", default: "\"$13,300\"", description: "Total amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "items", type: "SavingsGoalItem[]", description: "Goal rows. Each: { icon, label, amount, percent }." },
                    { name: "dotCount", type: "number", default: "56", description: "Number of dots in each progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
