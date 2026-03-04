"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { PieChart } from "@/components/ui/PieChart";

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

const trafficData = [
    { label: "Direct", value: 45 },
    { label: "Organic Search", value: 30 },
    { label: "Referral", value: 15 },
    { label: "Social", value: 10 },
];

const revenueData = [
    { label: "Subscriptions", value: 55 },
    { label: "One-time", value: 25 },
    { label: "Enterprise", value: 20 },
];

export default function PieChartPage() {
    return (
        <div>
            <DocHeader
                title="Pie Chart"
                description="SVG-based proportional data visualization. Supports solid pie and donut variants with optional center labels and legends. Theme-aware using CSS variables."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Pie Chart" },
                ]}
            />

            <InstallBlock slug="pie-chart" components={["PieChart"]} />

            {/* ── Solid Pie ── */}
            <h2 style={sectionHeading}>Solid Pie</h2>
            <p style={sectionDesc}>Standard pie chart with proportional segments.</p>

            <ComponentPreview
                title="Solid Pie Chart"
                code={`<PieChart segments={trafficData} />`}
            >
                <PieChart segments={trafficData} />
            </ComponentPreview>

            {/* ── Donut ── */}
            <h2 style={sectionHeading}>Donut Chart</h2>
            <p style={sectionDesc}>Hollow center with optional label and value display.</p>

            <ComponentPreview
                title="Donut Chart"
                code={`<PieChart
    segments={revenueData}
    innerRadius={0.6}
    centerValue="$24k"
    centerLabel="Revenue"
/>`}
            >
                <PieChart
                    segments={revenueData}
                    innerRadius={0.6}
                    centerValue="$24k"
                    centerLabel="Revenue"
                />
            </ComponentPreview>

            {/* ── Without Legend ── */}
            <h2 style={sectionHeading}>Without Legend</h2>
            <p style={sectionDesc}>Compact pie chart without the side legend.</p>

            <ComponentPreview
                title="No Legend"
                code={`<PieChart segments={trafficData} showLegend={false} />`}
            >
                <PieChart segments={trafficData} showLegend={false} />
            </ComponentPreview>

            {/* ── Custom Colors ── */}
            <h2 style={sectionHeading}>Custom Colors</h2>
            <p style={sectionDesc}>Override individual segment colors.</p>

            <ComponentPreview
                title="Custom Colors"
                code={`<PieChart
    segments={[
        { label: "Active", value: 65, color: "var(--color-lime)" },
        { label: "Pending", value: 20, color: "#f59e0b" },
        { label: "Inactive", value: 15, color: "#ef4444" },
    ]}
    innerRadius={0.55}
    centerValue="65%"
    centerLabel="Active"
/>`}
            >
                <PieChart
                    segments={[
                        { label: "Active", value: 65, color: "var(--color-lime)" },
                        { label: "Pending", value: 20, color: "#f59e0b" },
                        { label: "Inactive", value: 15, color: "#ef4444" },
                    ]}
                    innerRadius={0.55}
                    centerValue="65%"
                    centerLabel="Active"
                />
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "segments", type: "PieChartSegment[]", default: "[]", description: "Array of { label, value, color? }" },
                    { name: "size", type: "number", default: "200", description: "Chart diameter in pixels" },
                    { name: "innerRadius", type: "number", default: "0", description: "Donut hole ratio (0 = solid, 0.6 = donut)" },
                    { name: "showLegend", type: "boolean", default: "true", description: "Show legend beside the chart" },
                    { name: "centerLabel", type: "string", default: "—", description: "Small text in donut center" },
                    { name: "centerValue", type: "string", default: "—", description: "Large value in donut center" },
                ]}
            />
        </div>
    );
}
