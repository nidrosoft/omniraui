import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SavingAccount } from "@/components/ui/SavingAccount";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — long-term savings goal */}
<SavingAccount />

{/* 2. Short-term goal, near completion */}
<SavingAccount
    title="Vacation Fund"
    cardSuffix="**** 0241"
    balance="$2,400"
    bars={[
        { label: "Sep", value: 250 },
        { label: "Oct", value: 380 },
        { label: "Nov", value: 420 },
        { label: "Dec", value: 350 },
        { label: "Jan", value: 470 },
        { label: "Feb", value: 320 },
        { label: "Mar", value: 210 },
    ]}
    forecastText="On pace to reach your $4,000 target in 3 months"
    progressPercent={60}
    goalLabel="Goal : 4,000"
/>

{/* 3. Long horizon, early days */}
<SavingAccount
    title="Retirement IRA"
    cardSuffix="**** 8819"
    balance="$148,200"
    bars={[
        { label: "Sep", value: 1100 },
        { label: "Oct", value: 1250 },
        { label: "Nov", value: 980 },
        { label: "Dec", value: 1500 },
        { label: "Jan", value: 1320 },
        { label: "Feb", value: 1180 },
        { label: "Mar", value: 1450 },
    ]}
    forecastText="Reaching the $1.2M target by 2042 at this contribution rate"
    progressPercent={12}
    goalLabel="Goal : 1.2M"
/>`;

export function SavingAccountSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Saving Account</h3>
            <p className={s.sectionDesc}>
                Savings overview with a balance, a 7-column dotted bar chart of recent monthly contributions, and a goal
                progress bar with a forecast caption. Variations show a long-term goal, a short-term goal near
                completion, and a multi-decade retirement plan.
            </p>

            <InstallBlock slug="saving-account" components={["SavingAccount"]} />

            <ComponentPreview
                title="Three states — long-term, near-goal, multi-decade"
                description="Same widget, three savings shapes. Pass a custom bars array to drive the chart and progressPercent for the goal completion."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SavingAccount />
                    <SavingAccount
                        title="Vacation Fund"
                        cardSuffix="**** 0241"
                        balance="$2,400"
                        bars={[
                            { label: "Sep", value: 250 },
                            { label: "Oct", value: 380 },
                            { label: "Nov", value: 420 },
                            { label: "Dec", value: 350 },
                            { label: "Jan", value: 470 },
                            { label: "Feb", value: 320 },
                            { label: "Mar", value: 210 },
                        ]}
                        forecastText="On pace to reach your $4,000 target in 3 months"
                        progressPercent={60}
                        goalLabel="Goal : 4,000"
                    />
                    <SavingAccount
                        title="Retirement IRA"
                        cardSuffix="**** 8819"
                        balance="$148,200"
                        bars={[
                            { label: "Sep", value: 1100 },
                            { label: "Oct", value: 1250 },
                            { label: "Nov", value: 980 },
                            { label: "Dec", value: 1500 },
                            { label: "Jan", value: 1320 },
                            { label: "Feb", value: 1180 },
                            { label: "Mar", value: 1450 },
                        ]}
                        forecastText="Reaching the $1.2M target by 2042 at this contribution rate"
                        progressPercent={12}
                        goalLabel="Goal : 1.2M"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SavingAccount props"
                props={[
                    { name: "title", type: "string", default: "\"Saving Account\"", description: "Header title rendered top-left." },
                    { name: "cardSuffix", type: "string", default: "\"**** 4567\"", description: "Card mask shown top-right (use any short tabular string)." },
                    { name: "balanceLabel", type: "string", default: "\"Available balance\"", description: "Caption above the main balance." },
                    { name: "balance", type: "string", default: "\"$35,600\"", description: "Main balance amount in display type." },
                    { name: "balanceDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the balance." },
                    { name: "bars", type: "SavingAccountBar[]", description: "Bar chart data. Each entry is one column. Heights are normalised against the largest value." },
                    { name: "forecastText", type: "string", default: "\"You'll reach $100,000…\"", description: "Forecast caption above the progress bar." },
                    { name: "progressPercent", type: "number", default: "34", description: "Goal completion percent, 0–100." },
                    { name: "progressLabel", type: "string", description: "Override the bottom-left progress caption (defaults to e.g. \"34% Done\")." },
                    { name: "goalLabel", type: "string", default: "\"Goal : 100,000\"", description: "Bottom-right goal label." },
                    { name: "maxDotsPerBar", type: "number", default: "14", description: "Dot count when a bar's value equals the chart maximum." },
                    { name: "progressDotCount", type: "number", default: "64", description: "Number of dots in the bottom progress bar." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
