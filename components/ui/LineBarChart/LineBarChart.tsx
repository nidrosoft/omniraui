"use client";

import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/cn";
import styles from "./LineBarChart.module.css";

/* ══════════════════════════════════════
   Types
   ══════════════════════════════════════ */

export interface ChartDataPoint {
    label: string;
    value: number;
    secondaryValue?: number;
}

export interface LineBarChartProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Chart data */
    data: ChartDataPoint[];
    /** Chart type */
    type?: "line" | "bar" | "area";
    /** Chart height in px */
    height?: number;
    /** Show grid lines */
    showGrid?: boolean;
    /** Show labels on x-axis */
    showLabels?: boolean;
    /** Show secondary data series */
    showSecondary?: boolean;
    /** Accent color (CSS value) */
    color?: string;
    /** Secondary color */
    secondaryColor?: string;
}

/* ══════════════════════════════════════
   Component
   ══════════════════════════════════════ */

export const LineBarChart = forwardRef<HTMLDivElement, LineBarChartProps>(
    (
        {
            data,
            type = "bar",
            height = 240,
            showGrid = true,
            showLabels = true,
            showSecondary = false,
            color = "var(--color-lime)",
            secondaryColor = "var(--color-text-tertiary)",
            className,
            ...props
        },
        ref
    ) => {
        const maxValue = useMemo(() => {
            const vals = data.flatMap((d) => [d.value, d.secondaryValue ?? 0]);
            return Math.max(...vals, 1);
        }, [data]);

        const padding = { top: 16, right: 16, bottom: showLabels ? 32 : 8, left: 40 };
        const svgWidth = 600;
        const svgHeight = height;
        const chartW = svgWidth - padding.left - padding.right;
        const chartH = svgHeight - padding.top - padding.bottom;

        const xStep = chartW / Math.max(data.length - 1, 1);
        const barWidth = Math.min(chartW / data.length * 0.6, 32);

        // Grid lines (4 rows)
        const gridLines = [0, 0.25, 0.5, 0.75, 1].map((pct) => ({
            y: padding.top + chartH * (1 - pct),
            label: Math.round(maxValue * pct).toString(),
        }));

        // Points
        const points = data.map((d, i) => ({
            x: padding.left + (type === "bar" ? (chartW / data.length) * (i + 0.5) : xStep * i),
            y: padding.top + chartH * (1 - d.value / maxValue),
            secondaryY: d.secondaryValue
                ? padding.top + chartH * (1 - d.secondaryValue / maxValue)
                : undefined,
            label: d.label,
        }));

        const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
        const areaPath = linePath + ` L ${points[points.length - 1]?.x} ${padding.top + chartH} L ${points[0]?.x} ${padding.top + chartH} Z`;

        const secondaryLinePath = showSecondary
            ? points
                .filter((p) => p.secondaryY !== undefined)
                .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.secondaryY}`)
                .join(" ")
            : "";

        return (
            <div ref={ref} className={cn(styles.root, className)} {...props}>
                <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className={styles.svg}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Grid */}
                    {showGrid && gridLines.map((line, i) => (
                        <g key={i}>
                            <line
                                x1={padding.left}
                                y1={line.y}
                                x2={svgWidth - padding.right}
                                y2={line.y}
                                className={styles.gridLine}
                            />
                            <text
                                x={padding.left - 8}
                                y={line.y + 4}
                                className={styles.axisLabel}
                                textAnchor="end"
                            >
                                {line.label}
                            </text>
                        </g>
                    ))}

                    {/* Bar chart */}
                    {type === "bar" && points.map((p, i) => (
                        <g key={i}>
                            <rect
                                x={p.x - barWidth / 2}
                                y={p.y}
                                width={barWidth}
                                height={padding.top + chartH - p.y}
                                rx={4}
                                fill={color}
                                opacity={0.85}
                                className={styles.bar}
                            />
                            {showSecondary && p.secondaryY !== undefined && (
                                <rect
                                    x={p.x - barWidth / 2 + barWidth + 2}
                                    y={p.secondaryY}
                                    width={barWidth}
                                    height={padding.top + chartH - p.secondaryY}
                                    rx={4}
                                    fill={secondaryColor}
                                    opacity={0.4}
                                    className={styles.bar}
                                />
                            )}
                        </g>
                    ))}

                    {/* Area chart */}
                    {type === "area" && (
                        <>
                            <path d={areaPath} fill={color} opacity={0.1} />
                            <path d={linePath} fill="none" stroke={color} strokeWidth={2} />
                        </>
                    )}

                    {/* Line chart */}
                    {type === "line" && (
                        <>
                            <path d={linePath} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                            {showSecondary && secondaryLinePath && (
                                <path d={secondaryLinePath} fill="none" stroke={secondaryColor} strokeWidth={2} strokeDasharray="6 4" strokeLinecap="round" />
                            )}
                            {points.map((p, i) => (
                                <circle key={i} cx={p.x} cy={p.y} r={4} fill={color} className={styles.dot} />
                            ))}
                        </>
                    )}

                    {/* X labels */}
                    {showLabels && points.map((p, i) => (
                        <text
                            key={i}
                            x={p.x}
                            y={svgHeight - 6}
                            className={styles.axisLabel}
                            textAnchor="middle"
                        >
                            {p.label}
                        </text>
                    ))}
                </svg>
            </div>
        );
    }
);

LineBarChart.displayName = "LineBarChart";
