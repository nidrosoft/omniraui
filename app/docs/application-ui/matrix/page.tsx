"use client";

import { useMemo } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Matrix } from "@/components/ui/Matrix";

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

// Generate contribution-style data
function generateContributionData() {
    const rows = 7;
    const cols = 20;
    return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
            value: Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0,
        }))
    );
}

const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Heatmap-style 5x5
const heatmapData = [
    [{ value: 8 }, { value: 3 }, { value: 6 }, { value: 9 }, { value: 2 }],
    [{ value: 4 }, { value: 7 }, { value: 1 }, { value: 5 }, { value: 8 }],
    [{ value: 6 }, { value: 2 }, { value: 9 }, { value: 3 }, { value: 7 }],
    [{ value: 1 }, { value: 8 }, { value: 4 }, { value: 6 }, { value: 5 }],
    [{ value: 9 }, { value: 5 }, { value: 7 }, { value: 2 }, { value: 4 }],
];

export default function MatrixPage() {
    const contributionData = useMemo(() => generateContributionData(), []);

    return (
        <div>
            <DocHeader
                title="Matrix"
                description="Grid-based data visualization for heatmaps, contribution graphs, and correlation matrices. Each cell&apos;s opacity reflects its value relative to the maximum."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Matrix" },
                ]}
            />

            <InstallBlock slug="matrix" components={["Matrix"]} />

            {/* ── Contribution Graph ── */}
            <h2 style={sectionHeading}>Contribution Graph</h2>
            <p style={sectionDesc}>GitHub-style activity heatmap with day-of-week labels.</p>

            <ComponentPreview
                title="Contribution Matrix"
                code={`<Matrix
    data={contributionData}
    rowLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    cellSize={20}
    gap={3}
/>`}
            >
                <Matrix
                    data={contributionData}
                    rowLabels={dayLabels}
                    cellSize={20}
                    gap={3}
                />
            </ComponentPreview>

            {/* ── Heatmap ── */}
            <h2 style={sectionHeading}>Heatmap</h2>
            <p style={sectionDesc}>Compact heatmap with larger cells and labels.</p>

            <ComponentPreview
                title="Heatmap Matrix"
                code={`<Matrix
    data={heatmapData}
    rowLabels={["A", "B", "C", "D", "E"]}
    columnLabels={["Q1", "Q2", "Q3", "Q4", "Q5"]}
    cellSize={40}
    gap={4}
/>`}
            >
                <Matrix
                    data={heatmapData}
                    rowLabels={["A", "B", "C", "D", "E"]}
                    columnLabels={["Q1", "Q2", "Q3", "Q4", "Q5"]}
                    cellSize={40}
                    gap={4}
                />
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "data", type: "MatrixCell[][]", default: "[]", description: "2D array of { value, label? }" },
                    { name: "rowLabels", type: "string[]", default: "undefined", description: "Labels for each row" },
                    { name: "columnLabels", type: "string[]", default: "undefined", description: "Labels for each column" },
                    { name: "cellSize", type: "number", default: "32", description: "Cell width/height in pixels" },
                    { name: "gap", type: "number", default: "3", description: "Gap between cells in pixels" },
                    { name: "color", type: "string", default: "var(--color-lime)", description: "Color for filled cells" },
                ]}
            />
        </div>
    );
}
