import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CashflowAnalytics } from "@/components/ui/CashflowAnalytics";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — high fill, positive trend */}
<CashflowAnalytics />

{/* 2. Mid fill, negative trend, denser ticks */}
<CashflowAnalytics
    title="Quarterly Yield"
    value={62.1}
    changePercent={-3.4}
    comparisonValue={65.5}
    tickCount={144}
    footerText="Yield across managed treasury portfolios"
/>

{/* 3. Near-full ring, strong positive */}
<CashflowAnalytics
    title="Compliance Score"
    ctaLabel="Audit"
    value={96.5}
    changePercent={5.7}
    comparisonLabel="vs last quarter"
    comparisonValue={91.0}
    footerText="All required filings reported this period"
/>`;

export function CashflowAnalyticsSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Cashflow Analytics</h3>
            <p className={s.sectionDesc}>
                Circular tick-gauge that reads a single rate against a comparison period. Variations show low, mid, and
                near-full ring states with positive and negative deltas.
            </p>

            <InstallBlock slug="cashflow-analytics" components={["CashflowAnalytics"]} />

            <ComponentPreview
                title="Three states — healthy, declining, near-full"
                description="Same widget, three data shapes: high fill with positive trend, mid fill with negative trend (denser ticks), and a near-full compliance score."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CashflowAnalytics />
                    <CashflowAnalytics
                        title="Quarterly Yield"
                        value={62.1}
                        changePercent={-3.4}
                        comparisonValue={65.5}
                        tickCount={144}
                        footerText="Yield across managed treasury portfolios"
                    />
                    <CashflowAnalytics
                        title="Compliance Score"
                        ctaLabel="Audit"
                        value={96.5}
                        changePercent={5.7}
                        comparisonLabel="vs last quarter"
                        comparisonValue={91.0}
                        footerText="All required filings reported this period"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CashflowAnalytics props"
                props={[
                    { name: "title", type: "string", default: "\"Cashflow Analytics\"", description: "Header title rendered top-left." },
                    { name: "ctaLabel", type: "string", default: "\"See All\"", description: "Action label rendered top-right." },
                    { name: "onCtaClick", type: "() => void", description: "When provided, the CTA renders as a button. Otherwise it is a static label." },
                    { name: "value", type: "number", default: "83.6", description: "Current rate as a percentage (0–100). Drives the filled portion of the ring." },
                    { name: "changePercent", type: "number", default: "2.8", description: "Delta vs the comparison period. Positive renders in success, negative in error." },
                    { name: "comparisonLabel", type: "string", default: "\"vs last month\"", description: "Subtitle prefix beneath the value." },
                    { name: "comparisonValue", type: "number", default: "80.3", description: "Previous period value displayed after the comparison label." },
                    { name: "footerText", type: "string", default: "\"Reporting rate…\"", description: "Pill-shaped footer caption." },
                    { name: "tickCount", type: "number", default: "96", description: "Number of tick marks around the gauge ring." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
