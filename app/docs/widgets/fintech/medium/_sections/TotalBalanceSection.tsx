import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { TotalBalance } from "@/components/ui/TotalBalance";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — total balance + sparkline */}
<TotalBalance />

{/* 2. Custom amount + revenue */}
<TotalBalance
    title="Account Balance"
    amount="89,420"
    secondaryLabel="MRR"
    secondaryValue="$48,300"
    sparkline={[10, 18, 12, 22, 16, 28, 20, 34, 26, 38, 30, 24, 32, 22, 18, 28, 24, 16]}
    highlightIndices={[3, 9, 14]}
/>

{/* 3. Steady balance with no peaks */}
<TotalBalance
    title="Reserve Fund"
    amount="412,580"
    secondaryLabel="Monthly Δ"
    secondaryValue="+$1,840"
    sparkline={[20, 21, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28]}
    highlightIndices={[]}
/>`;

export function TotalBalanceSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Total Balance</h3>
            <p className={s.sectionDesc}>
                Compact balance widget with a dotted sparkline and configurable peak markers. Variations cover the
                default, a custom MRR layout, and a steady-trend reserve fund.
            </p>

            <InstallBlock slug="total-balance" components={["TotalBalance"]} />

            <ComponentPreview
                title="Three states — default, MRR, steady"
                description="Same widget, three sparkline shapes. The peak markers are explicit indices so you control which points get a dot."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <TotalBalance />
                    <TotalBalance
                        title="Account Balance"
                        amount="89,420"
                        secondaryLabel="MRR"
                        secondaryValue="$48,300"
                        sparkline={[10, 18, 12, 22, 16, 28, 20, 34, 26, 38, 30, 24, 32, 22, 18, 28, 24, 16]}
                        highlightIndices={[3, 9, 14]}
                    />
                    <TotalBalance
                        title="Reserve Fund"
                        amount="412,580"
                        secondaryLabel="Monthly Δ"
                        secondaryValue="+$1,840"
                        sparkline={[20, 21, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28]}
                        highlightIndices={[]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="TotalBalance props"
                props={[
                    { name: "title", type: "string", default: "\"Total Balance\"", description: "Header title rendered top-left." },
                    { name: "amount", type: "string", default: "\"154,520\"", description: "Main amount in display type." },
                    { name: "amountPrefix", type: "string", description: "Optional small prefix rendered before the amount (e.g. currency symbol)." },
                    { name: "amountDecimal", type: "string", description: "Optional small suffix rendered after the amount (e.g. decimals)." },
                    { name: "secondaryLabel", type: "string", default: "\"Net Revenue\"", description: "Caption for the right-aligned secondary stat." },
                    { name: "secondaryValue", type: "string", default: "\"$96,120\"", description: "Right-aligned secondary value." },
                    { name: "sparkline", type: "number[]", description: "Sparkline values — heights are normalised across the full set." },
                    { name: "highlightIndices", type: "number[]", description: "Indices in `sparkline` that get a teal marker dot. Pass [] to hide all markers." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
