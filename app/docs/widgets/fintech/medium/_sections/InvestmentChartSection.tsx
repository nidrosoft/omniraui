import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { InvestmentChart } from "@/components/ui/InvestmentChart";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — strong gain */}
<InvestmentChart />

{/* 2. Mild gain */}
<InvestmentChart
    title="Index Fund"
    total="$182,400"
    changePercent={6.8}
    bars={[20, 18, 22, 24, 28, 26, 30, 22, 24, 28, 32, 28, 30, 34, 30, 28, 32, 36, 32, 30, 34, 38, 32, 30, 36, 40, 34, 30, 36, 42, 36, 34, 38, 42, 38, 34, 40, 44, 40, 36, 42, 46, 42, 38, 44, 48, 44]}
/>

{/* 3. Loss */}
<InvestmentChart
    title="Tech Basket"
    total="$94,520"
    changePercent={-12.4}
    bars={[60, 58, 62, 56, 52, 56, 50, 46, 48, 42, 38, 42, 36, 32, 28, 30, 24, 26, 22, 18, 20, 16, 18, 14, 12, 16, 18, 12, 10, 14, 12, 10, 8, 12, 14, 10, 8, 12, 16, 14, 10, 8, 12, 16, 14, 12, 10]}
/>`;

export function InvestmentChartSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Investment Chart</h3>
            <p className={s.sectionDesc}>
                Compact investment performance widget — header w/ total, big percent change, dotted bar chart of recent
                history. Variations cover a strong gain, mild gain, and a loss.
            </p>

            <InstallBlock slug="investment-chart" components={["InvestmentChart"]} />

            <ComponentPreview
                title="Three states — strong, mild, loss"
                description="Same widget, three performance shapes. Negative changePercent flips the badge to the error color."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <InvestmentChart />
                    <InvestmentChart
                        title="Index Fund"
                        total="$182,400"
                        changePercent={6.8}
                        bars={[20, 18, 22, 24, 28, 26, 30, 22, 24, 28, 32, 28, 30, 34, 30, 28, 32, 36, 32, 30, 34, 38, 32, 30, 36, 40, 34, 30, 36, 42, 36, 34, 38, 42, 38, 34, 40, 44, 40, 36, 42, 46, 42, 38, 44, 48, 44]}
                    />
                    <InvestmentChart
                        title="Tech Basket"
                        total="$94,520"
                        changePercent={-12.4}
                        bars={[60, 58, 62, 56, 52, 56, 50, 46, 48, 42, 38, 42, 36, 32, 28, 30, 24, 26, 22, 18, 20, 16, 18, 14, 12, 16, 18, 12, 10, 14, 12, 10, 8, 12, 14, 10, 8, 12, 16, 14, 10, 8, 12, 16, 14, 12, 10]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="InvestmentChart props"
                props={[
                    { name: "title", type: "string", default: "\"Investment\"", description: "Header title rendered top-left." },
                    { name: "total", type: "string", default: "\"$710,520\"", description: "Right-aligned total amount in the header." },
                    { name: "changePercent", type: "number", default: "28", description: "Percent change. Positive renders in success color, negative in error." },
                    { name: "changeLabel", type: "string", description: "Override the change badge text." },
                    { name: "bars", type: "number[]", description: "Variable-height dot bars (each value 0–100 = bar height percent)." },
                    { name: "maxDotsPerBar", type: "number", default: "14", description: "Number of dots per bar when value === 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
