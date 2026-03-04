"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { LineBarChart } from "@/components/ui/LineBarChart";

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

const monthlyData = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 65 },
    { label: "Mar", value: 55 },
    { label: "Apr", value: 80 },
    { label: "May", value: 70 },
    { label: "Jun", value: 95 },
    { label: "Jul", value: 85 },
    { label: "Aug", value: 100 },
    { label: "Sep", value: 75 },
    { label: "Oct", value: 90 },
    { label: "Nov", value: 110 },
    { label: "Dec", value: 120 },
];

const comparisonData = [
    { label: "Jan", value: 40, secondaryValue: 30 },
    { label: "Feb", value: 65, secondaryValue: 45 },
    { label: "Mar", value: 55, secondaryValue: 60 },
    { label: "Apr", value: 80, secondaryValue: 50 },
    { label: "May", value: 70, secondaryValue: 65 },
    { label: "Jun", value: 95, secondaryValue: 70 },
];

export default function LineandBarChartPage() {
    return (
        <div>
            <DocHeader
                title="Line & Bar Chart"
                description="SVG-based chart component for time-series and comparison visualizations. Supports bar, line, and area types with dual data series. Uses CSS variables for theme-aware styling."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Line & Bar Chart" },
                ]}
            />

            <InstallBlock slug="line-bar-chart" components={["LineBarChart"]} />

            {/* ── Bar Chart ── */}
            <h2 style={sectionHeading}>Bar Chart</h2>
            <p style={sectionDesc}>Standard vertical bar chart for categorical comparisons.</p>

            <ComponentPreview
                title="Bar Chart"
                code={`<LineBarChart type="bar" data={monthlyData} />`}
            >
                <LineBarChart type="bar" data={monthlyData} />
            </ComponentPreview>

            {/* ── Line Chart ── */}
            <h2 style={sectionHeading}>Line Chart</h2>
            <p style={sectionDesc}>Continuous line chart with data points for trend visualization.</p>

            <ComponentPreview
                title="Line Chart"
                code={`<LineBarChart type="line" data={monthlyData} />`}
            >
                <LineBarChart type="line" data={monthlyData} />
            </ComponentPreview>

            {/* ── Area Chart ── */}
            <h2 style={sectionHeading}>Area Chart</h2>
            <p style={sectionDesc}>Filled area beneath the line for volume emphasis.</p>

            <ComponentPreview
                title="Area Chart"
                code={`<LineBarChart type="area" data={monthlyData} />`}
            >
                <LineBarChart type="area" data={monthlyData} />
            </ComponentPreview>

            {/* ── Dual Series ── */}
            <h2 style={sectionHeading}>Dual Series Comparison</h2>
            <p style={sectionDesc}>Compare two data series side by side using the secondary value.</p>

            <ComponentPreview
                title="Line — Dual Series"
                code={`<LineBarChart
    type="line"
    data={comparisonData}
    showSecondary
/>`}
            >
                <LineBarChart type="line" data={comparisonData} showSecondary />
            </ComponentPreview>

            <ComponentPreview
                title="Bar — Dual Series"
                code={`<LineBarChart
    type="bar"
    data={comparisonData}
    showSecondary
/>`}
            >
                <LineBarChart type="bar" data={comparisonData} showSecondary />
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "data", type: "ChartDataPoint[]", default: "[]", description: "Array of { label, value, secondaryValue? }" },
                    { name: "type", type: '"bar" | "line" | "area"', default: '"bar"', description: "Chart visualization type" },
                    { name: "height", type: "number", default: "240", description: "Chart height in pixels" },
                    { name: "showGrid", type: "boolean", default: "true", description: "Show horizontal grid lines" },
                    { name: "showLabels", type: "boolean", default: "true", description: "Show x-axis labels" },
                    { name: "showSecondary", type: "boolean", default: "false", description: "Show secondary data series" },
                    { name: "color", type: "string", default: "var(--color-lime)", description: "Primary series color" },
                    { name: "secondaryColor", type: "string", default: "var(--color-text-tertiary)", description: "Secondary series color" },
                ]}
            />
        </div>
    );
}
