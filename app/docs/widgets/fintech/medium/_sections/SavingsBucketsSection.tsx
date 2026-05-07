import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SavingsBuckets } from "@/components/ui/SavingsBuckets";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — three goals */}
<SavingsBuckets />

{/* 2. Two goals — even split */}
<SavingsBuckets
    title="My Goals"
    buckets={[
        { label: "Emergency", amount: "$4,200", percent: 84 },
        { label: "Travel",    amount: "$1,800", percent: 36 },
    ]}
/>

{/* 3. Mixed progress */}
<SavingsBuckets
    title="Family Plan"
    buckets={[
        { label: "Education", amount: "$12,500", percent: 25 },
        { label: "Reno",      amount: "$3,400",  percent: 68 },
        { label: "Retire",    amount: "$24,800", percent: 92 },
    ]}
/>`;

export function SavingsBucketsSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Savings Buckets</h3>
            <p className={s.sectionDesc}>
                Three side-by-side savings buckets, each with a marker progress bar, label, and amount. Variations
                cover the default trio, a two-bucket split, and a mixed-progress family plan.
            </p>

            <InstallBlock slug="savings-buckets" components={["SavingsBuckets"]} />

            <ComponentPreview
                title="Three states — default, two buckets, mixed"
                description="Same widget, three bucket layouts. Each bar uses the 2-dot column with 3-dot marker pattern shared across the design system."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SavingsBuckets />
                    <SavingsBuckets
                        title="My Goals"
                        buckets={[
                            { label: "Emergency", amount: "$4,200", percent: 84 },
                            { label: "Travel", amount: "$1,800", percent: 36 },
                        ]}
                    />
                    <SavingsBuckets
                        title="Family Plan"
                        buckets={[
                            { label: "Education", amount: "$12,500", percent: 25 },
                            { label: "Reno", amount: "$3,400", percent: 68 },
                            { label: "Retire", amount: "$24,800", percent: 92 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SavingsBuckets props"
                props={[
                    { name: "title", type: "string", default: "\"Savings\"", description: "Header title rendered top-left." },
                    { name: "buckets", type: "SavingsBucket[]", description: "Up to 3 buckets recommended. Each: { label, amount, percent }." },
                    { name: "dotCount", type: "number", default: "28", description: "Number of dots in each progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
