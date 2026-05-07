import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { MonthlySubscription } from "@/components/ui/MonthlySubscription";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — savings up */}
<MonthlySubscription />

{/* 2. Negative trend */}
<MonthlySubscription
    title="Active Subscriptions"
    changePercent={-3.2}
    summaryLabel="Total Spent"
    amount="$248"
    services={[
        { name: "Spotify",  color: "#1ed760" },
        { name: "YouTube",  color: "#ff0000" },
        { name: "Disney",   color: "#0e6cef" },
        { name: "HBO",      color: "#9332ff" },
    ]}
/>

{/* 3. Single service */}
<MonthlySubscription
    title="Cloud Bill"
    changePercent={0}
    changeLabel="Stable"
    summaryLabel="Total Cost"
    amount="$2,140"
    services={[{ name: "Vercel", color: "#000000" }]}
/>`;

export function MonthlySubscriptionSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Monthly Subscription</h3>
            <p className={s.sectionDesc}>
                Subscription tracker — header with change percent, total amount, and an overlapping stack of service
                avatars. Variations cover savings up, costs up, and a single-service bill.
            </p>

            <InstallBlock slug="monthly-subscription" components={["MonthlySubscription"]} />

            <ComponentPreview
                title="Three states — savings up, costs up, single service"
                description="Same widget, three subscription states. Pass any number of services — they overlap by half their diameter."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <MonthlySubscription />
                    <MonthlySubscription
                        title="Active Subscriptions"
                        changePercent={-3.2}
                        summaryLabel="Total Spent"
                        amount="$248"
                        services={[
                            { name: "Spotify", color: "#1ed760" },
                            { name: "YouTube", color: "#ff0000" },
                            { name: "Disney", color: "#0e6cef" },
                            { name: "HBO", color: "#9332ff" },
                        ]}
                    />
                    <MonthlySubscription
                        title="Cloud Bill"
                        changePercent={0}
                        changeLabel="Stable"
                        summaryLabel="Total Cost"
                        amount="$2,140"
                        services={[{ name: "Vercel", color: "#000000" }]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="MonthlySubscription props"
                props={[
                    { name: "title", type: "string", default: "\"Monthly Subscription\"", description: "Header title rendered top-left." },
                    { name: "changePercent", type: "number", default: "2.45", description: "Change percent (positive = success color, negative = error color). Renders as e.g. \"+2.45%\"." },
                    { name: "changeLabel", type: "string", description: "Override the change badge text outright (e.g. \"Stable\")." },
                    { name: "summaryLabel", type: "string", default: "\"Total Amount Saved\"", description: "Caption above the main amount." },
                    { name: "amount", type: "string", default: "\"$14,212\"", description: "Main amount in display type." },
                    { name: "amountDecimal", type: "string", default: "\".00\"", description: "Optional decimal suffix rendered small after the amount." },
                    { name: "services", type: "MonthlySubscriptionService[]", description: "Overlapping service avatars. Each: { name, avatar?, color? }." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
