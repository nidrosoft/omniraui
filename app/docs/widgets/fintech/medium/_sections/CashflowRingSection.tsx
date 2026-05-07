import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CashflowRing } from "@/components/ui/CashflowRing";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — 83.6% with side-cropped ring */}
<CashflowRing />

{/* 2. Mid-level */}
<CashflowRing
    title="Yield Rate"
    value={62.1}
    comparisonLabel="vs last month : 65.5%"
/>

{/* 3. Near full */}
<CashflowRing
    title="Compliance"
    value={96.5}
    comparisonLabel="vs last month : 91.0%"
/>`;

export function CashflowRingSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Cashflow Ring</h3>
            <p className={s.sectionDesc}>
                Compact analytics widget — stats left, side-cropped tick ring right. The ring is anchored beyond the
                widget's right edge so only the left arc reads, balancing the layout against the stats column.
            </p>

            <InstallBlock slug="cashflow-ring" components={["CashflowRing"]} />

            <ComponentPreview
                title="Three states — high, mid, near-full"
                description="Same widget, three ring fills. The displayed value defaults to a European-style decimal (e.g. 83,6) — pass displayValue to override."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CashflowRing />
                    <CashflowRing
                        title="Yield Rate"
                        value={62.1}
                        comparisonLabel="vs last month : 65.5%"
                    />
                    <CashflowRing
                        title="Compliance"
                        value={96.5}
                        comparisonLabel="vs last month : 91.0%"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CashflowRing props"
                props={[
                    { name: "title", type: "string", default: "\"Cashflow Analytics\"", description: "Header title rendered top-left." },
                    { name: "value", type: "number", default: "83.6", description: "Current rate as a percentage (0–100). Drives the ring fill." },
                    { name: "displayValue", type: "string", description: "Override the central display number (defaults to a comma-decimal format)." },
                    { name: "comparisonLabel", type: "string", default: "\"vs last month : 80.3%\"", description: "Caption beneath the value." },
                    { name: "tickCount", type: "number", default: "80", description: "Number of tick marks around the ring." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
