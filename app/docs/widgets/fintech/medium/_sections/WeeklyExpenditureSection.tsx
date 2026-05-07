import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { WeeklyExpenditure } from "@/components/ui/WeeklyExpenditure";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — Wednesday peak */}
<WeeklyExpenditure />

{/* 2. Weekend warrior */}
<WeeklyExpenditure
    title="Weekly Cashflow"
    days={[
        { label: "Sun", percent: 80, highlighted: true },
        { label: "Mon", percent: 30 },
        { label: "Tue", percent: 22 },
        { label: "Wed", percent: 35 },
        { label: "Thu", percent: 28 },
        { label: "Fri", percent: 60 },
        { label: "Sat", percent: 95 },
    ]}
/>

{/* 3. Even week */}
<WeeklyExpenditure
    title="Steady Spend"
    days={[
        { label: "Sun", percent: 50 },
        { label: "Mon", percent: 55 },
        { label: "Tue", percent: 48 },
        { label: "Wed", percent: 60 },
        { label: "Thu", percent: 52 },
        { label: "Fri", percent: 58 },
        { label: "Sat", percent: 50 },
    ]}
/>`;

export function WeeklyExpenditureSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Weekly Expenditure</h3>
            <p className={s.sectionDesc}>
                7-day vertical dotted bar chart with an optional highlighted peak day. Variations cover a midweek
                spike, a weekend-heavy pattern, and a steady-spend week.
            </p>

            <InstallBlock slug="weekly-expenditure" components={["WeeklyExpenditure"]} />

            <ComponentPreview
                title="Three states — midweek peak, weekend, steady"
                description="Same widget, three weekly shapes. Set highlighted: true on any day to draw the violet emphasis rectangle behind its bar."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <WeeklyExpenditure />
                    <WeeklyExpenditure
                        title="Weekly Cashflow"
                        days={[
                            { label: "Sun", percent: 80, highlighted: true },
                            { label: "Mon", percent: 30 },
                            { label: "Tue", percent: 22 },
                            { label: "Wed", percent: 35 },
                            { label: "Thu", percent: 28 },
                            { label: "Fri", percent: 60 },
                            { label: "Sat", percent: 95 },
                        ]}
                    />
                    <WeeklyExpenditure
                        title="Steady Spend"
                        days={[
                            { label: "Sun", percent: 50 },
                            { label: "Mon", percent: 55 },
                            { label: "Tue", percent: 48 },
                            { label: "Wed", percent: 60 },
                            { label: "Thu", percent: 52 },
                            { label: "Fri", percent: 58 },
                            { label: "Sat", percent: 50 },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="WeeklyExpenditure props"
                props={[
                    { name: "title", type: "string", default: "\"Weekly Expenditure\"", description: "Header title rendered top-left." },
                    { name: "days", type: "WeeklyExpenditureDay[]", description: "Day entries. Each: { label, percent, highlighted? }. The highlighted day gets a violet emphasis rectangle behind its bar." },
                    { name: "maxDotsPerBar", type: "number", default: "18", description: "Number of dots rendered when a day's percent === 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
