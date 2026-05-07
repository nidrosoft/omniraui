import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { AssetAllocation } from "@/components/ui/AssetAllocation";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — cash-heavy */}
<AssetAllocation />

{/* 2. Balanced portfolio */}
<AssetAllocation
    title="Portfolio Mix"
    amount="$42,850"
    segments={[
        { label: "Stocks",      percent: 45, color: "var(--color-lime)" },
        { label: "Bonds",       percent: 30, color: "var(--color-lime-hover)" },
        { label: "Real Estate", percent: 15, color: "var(--color-lime-gradient)" },
        { label: "Cash",        percent: 10, color: "var(--color-bg-elevated)" },
    ]}
/>

{/* 3. Aggressive crypto */}
<AssetAllocation
    title="Crypto-Heavy"
    amount="$8,900"
    segments={[
        { label: "Bitcoin",   percent: 50, color: "var(--color-lime)" },
        { label: "Ethereum",  percent: 30, color: "var(--color-lime-hover)" },
        { label: "Altcoins",  percent: 15, color: "var(--color-lime-gradient)" },
        { label: "Stables",   percent: 5,  color: "var(--color-bg-elevated)" },
    ]}
/>`;

export function AssetAllocationSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Asset Allocation</h3>
            <p className={s.sectionDesc}>
                Pie chart with the total amount centered, paired with a legend listing each segment's percent. Pass any
                number of segments — the pie auto-distributes the slices.
            </p>

            <InstallBlock slug="asset-allocation" components={["AssetAllocation"]} />

            <ComponentPreview
                title="Three states — cash-heavy, balanced, crypto-heavy"
                description="Same widget, three allocation mixes. Each segment defines its own color so the pie and legend stay in sync."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <AssetAllocation />
                    <AssetAllocation
                        title="Portfolio Mix"
                        amount="$42,850"
                        segments={[
                            { label: "Stocks", percent: 45, color: "var(--color-lime)" },
                            { label: "Bonds", percent: 30, color: "var(--color-lime-hover)" },
                            { label: "Real Estate", percent: 15, color: "var(--color-lime-gradient)" },
                            { label: "Cash", percent: 10, color: "var(--color-bg-elevated)" },
                        ]}
                    />
                    <AssetAllocation
                        title="Crypto-Heavy"
                        amount="$8,900"
                        segments={[
                            { label: "Bitcoin", percent: 50, color: "var(--color-lime)" },
                            { label: "Ethereum", percent: 30, color: "var(--color-lime-hover)" },
                            { label: "Altcoins", percent: 15, color: "var(--color-lime-gradient)" },
                            { label: "Stables", percent: 5, color: "var(--color-bg-elevated)" },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="AssetAllocation props"
                props={[
                    { name: "title", type: "string", default: "\"Asset Class Allocation\"", description: "Header title rendered top-left." },
                    { name: "amount", type: "string", default: "\"$13,420\"", description: "Total amount centered inside the pie." },
                    { name: "segments", type: "AssetAllocationSegment[]", description: "Pie slices. Each: { label, percent, color }. Percents should sum to 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
