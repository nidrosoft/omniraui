import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CreditScore } from "@/components/ui/CreditScore";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — strong score */}
<CreditScore />

{/* 2. Average score */}
<CreditScore
    score={680}
    comparisonLabel="vs last month : 672"
/>

{/* 3. Low score */}
<CreditScore
    score={520}
    comparisonLabel="vs last month : 540"
/>`;

export function CreditScoreSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Credit Score</h3>
            <p className={s.sectionDesc}>
                Half-arc credit score gauge with a central score number and comparison caption. The arc fills clockwise
                proportionally to the score within the configured min/max range.
            </p>

            <InstallBlock slug="credit-score" components={["CreditScore"]} />

            <ComponentPreview
                title="Three states — strong, average, low"
                description="Same widget, three score levels. Tweak minScore/maxScore for non-FICO scoring systems."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <CreditScore />
                    <CreditScore
                        score={680}
                        comparisonLabel="vs last month : 672"
                    />
                    <CreditScore
                        score={520}
                        comparisonLabel="vs last month : 540"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="CreditScore props"
                props={[
                    { name: "title", type: "string", default: "\"Credit Score\"", description: "Header title rendered top-center." },
                    { name: "score", type: "number", default: "803", description: "Score (e.g. FICO 300–850)." },
                    { name: "minScore", type: "number", default: "300", description: "Lower bound of the score range." },
                    { name: "maxScore", type: "number", default: "850", description: "Upper bound of the score range." },
                    { name: "displayValue", type: "string", description: "Override the displayed central number." },
                    { name: "comparisonLabel", type: "string", default: "\"vs last month : 780\"", description: "Caption beneath the score." },
                    { name: "tickCount", type: "number", default: "80", description: "Number of tick marks across the half-arc." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
