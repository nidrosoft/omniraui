"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { RadarChart } from "@/components/ui/RadarChart";

const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 8,
    marginTop: 48,
};

const sectionDesc: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 24,
};

const skillData = [
    { label: "Design", value: 85 },
    { label: "Frontend", value: 90 },
    { label: "Backend", value: 70 },
    { label: "DevOps", value: 55 },
    { label: "Testing", value: 75 },
    { label: "Security", value: 60 },
];

const performanceData = [
    { label: "Speed", value: 92 },
    { label: "Accuracy", value: 78 },
    { label: "Efficiency", value: 85 },
    { label: "Quality", value: 88 },
    { label: "Reliability", value: 95 },
];

export default function RadarChartPage() {
    return (
        <div>
            <DocHeader
                title="Radar Chart"
                description="Multi-axis comparative polygon chart for visualizing data across multiple dimensions. Pure SVG, theme-aware, and zero dependencies."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Radar Chart" },
                ]}
            />

            <InstallBlock slug="radar-chart" components={["RadarChart"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Hexagonal radar chart with labeled axes and a filled data area.</p>

            <ComponentPreview
                title="Skill Assessment"
                code={`<RadarChart data={skillData} />`}
            >
                <RadarChart data={skillData} />
            </ComponentPreview>

            {/* ── Five Axes ── */}
            <h2 style={sectionHeading}>Five Axes</h2>
            <p style={sectionDesc}>Pentagonal radar chart for performance metrics.</p>

            <ComponentPreview
                title="Performance Metrics"
                code={`<RadarChart data={performanceData} />`}
            >
                <RadarChart data={performanceData} />
            </ComponentPreview>

            {/* ── Custom Size ── */}
            <h2 style={sectionHeading}>Custom Size</h2>
            <p style={sectionDesc}>Resize the chart to fit different layouts.</p>

            <ComponentPreview
                title="Small Radar (200px)"
                code={`<RadarChart data={skillData} size={200} />`}
            >
                <RadarChart data={skillData} size={200} />
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "data", type: "RadarChartDataPoint[]", default: "[]", description: "Array of { label, value, maxValue? }" },
                    { name: "size", type: "number", default: "280", description: "Chart diameter in pixels" },
                    { name: "color", type: "string", default: "var(--color-lime)", description: "Fill and stroke color" },
                    { name: "showLabels", type: "boolean", default: "true", description: "Show axis labels" },
                    { name: "levels", type: "number", default: "4", description: "Number of grid level rings" },
                ]}
            />
        </div>
    );
}
