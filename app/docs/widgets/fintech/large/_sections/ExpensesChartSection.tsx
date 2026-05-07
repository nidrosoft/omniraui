import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { ExpensesChart } from "@/components/ui/ExpensesChart";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — typical 7-month spend */}
<ExpensesChart />

{/* 2. Holiday spike */}
<ExpensesChart
    title="Holiday Expenses"
    period="Q4"
    amount="$28,400"
    bars={[
        { label: "Sep", value: 1800 },
        { label: "Oct", value: 2200 },
        { label: "Nov", value: 4400 },
        { label: "Dec", value: 8800 },
        { label: "Jan", value: 5200 },
        { label: "Feb", value: 3000 },
        { label: "Mar", value: 2400 },
    ]}
/>

{/* 3. Steady saver — flat low spend */}
<ExpensesChart
    title="Lean Mode"
    period="Last 7 mo"
    amount="$5,600"
    bars={[
        { label: "Sep", value: 820 },
        { label: "Oct", value: 760 },
        { label: "Nov", value: 880 },
        { label: "Dec", value: 920 },
        { label: "Jan", value: 740 },
        { label: "Feb", value: 700 },
        { label: "Mar", value: 780 },
    ]}
/>`;

export function ExpensesChartSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Expenses Chart</h3>
            <p className={s.sectionDesc}>
                Monthly expense overview with a 7-column dotted bar chart. Each column's height is normalised against
                the largest value. Variations cover typical spend, a holiday spike, and a steady-low pattern.
            </p>

            <InstallBlock slug="expenses-chart" components={["ExpensesChart"]} />

            <ComponentPreview
                title="Three states — typical, spike, steady-low"
                description="Same widget, three spend shapes. Pass any number of bars — they distribute evenly across the chart width."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <ExpensesChart />
                    <ExpensesChart
                        title="Holiday Expenses"
                        period="Q4"
                        amount="$28,400"
                        bars={[
                            { label: "Sep", value: 1800 },
                            { label: "Oct", value: 2200 },
                            { label: "Nov", value: 4400 },
                            { label: "Dec", value: 8800 },
                            { label: "Jan", value: 5200 },
                            { label: "Feb", value: 3000 },
                            { label: "Mar", value: 2400 },
                        ]}
                    />
                    <ExpensesChart
                        title="Lean Mode"
                        period="Last 7 mo"
                        amount="$5,600"
                        bars={[
                            { label: "Sep", value: 820 },
                            { label: "Oct", value: 760 },
                            { label: "Nov", value: 880 },
                            { label: "Dec", value: 920 },
                            { label: "Jan", value: 740 },
                            { label: "Feb", value: 700 },
                            { label: "Mar", value: 780 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="ExpensesChart props"
                props={[
                    { name: "title", type: "string", default: "\"Expenses\"", description: "Header title rendered top-left." },
                    { name: "period", type: "string", default: "\"Monthly\"", description: "Period label rendered top-right." },
                    { name: "summaryLabel", type: "string", default: "\"Total Expenses\"", description: "Caption above the main amount." },
                    { name: "amount", type: "string", default: "\"$13,300\"", description: "Total amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "bars", type: "ExpensesChartBar[]", description: "Bar chart data. Each entry is one column: { label, value }." },
                    { name: "maxDotsPerBar", type: "number", default: "18", description: "Dot count when a bar's value equals the chart maximum." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
