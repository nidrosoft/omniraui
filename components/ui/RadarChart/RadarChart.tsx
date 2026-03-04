"use client";

import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/cn";
import styles from "./RadarChart.module.css";

export interface RadarChartDataPoint {
    label: string;
    value: number;
    maxValue?: number;
}

export interface RadarChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data: RadarChartDataPoint[];
    size?: number;
    color?: string;
    showLabels?: boolean;
    levels?: number;
}

function polarToXY(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export const RadarChart = forwardRef<HTMLDivElement, RadarChartProps>(
    (
        {
            data,
            size = 280,
            color = "var(--color-lime)",
            showLabels = true,
            levels = 4,
            className,
            ...props
        },
        ref
    ) => {
        const cx = size / 2;
        const cy = size / 2;
        const maxR = size / 2 - 36;
        const angleStep = 360 / data.length;

        // Grid polygons
        const gridPolygons = useMemo(() => {
            return Array.from({ length: levels }, (_, levelIdx) => {
                const r = maxR * ((levelIdx + 1) / levels);
                const points = data.map((_, i) => {
                    const { x, y } = polarToXY(cx, cy, r, angleStep * i);
                    return `${x},${y}`;
                }).join(" ");
                return points;
            });
        }, [data, cx, cy, maxR, angleStep, levels]);

        // Axis lines
        const axes = useMemo(() => {
            return data.map((_, i) => polarToXY(cx, cy, maxR, angleStep * i));
        }, [data, cx, cy, maxR, angleStep]);

        // Data polygon
        const dataPoints = useMemo(() => {
            return data.map((d, i) => {
                const max = d.maxValue ?? 100;
                const r = maxR * (d.value / max);
                return polarToXY(cx, cy, r, angleStep * i);
            });
        }, [data, cx, cy, maxR, angleStep]);

        const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

        // Label positions
        const labelPositions = useMemo(() => {
            return data.map((d, i) => {
                const { x, y } = polarToXY(cx, cy, maxR + 20, angleStep * i);
                return { x, y, label: d.label };
            });
        }, [data, cx, cy, maxR, angleStep]);

        return (
            <div ref={ref} className={cn(styles.root, className)} {...props}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    {/* Grid */}
                    {gridPolygons.map((points, i) => (
                        <polygon
                            key={i}
                            points={points}
                            fill="none"
                            stroke="var(--color-border-subtle)"
                            strokeWidth={1}
                        />
                    ))}

                    {/* Axes */}
                    {axes.map((end, i) => (
                        <line
                            key={i}
                            x1={cx}
                            y1={cy}
                            x2={end.x}
                            y2={end.y}
                            stroke="var(--color-border-subtle)"
                            strokeWidth={1}
                        />
                    ))}

                    {/* Data fill */}
                    <polygon
                        points={dataPolygon}
                        fill={color}
                        fillOpacity={0.15}
                        stroke={color}
                        strokeWidth={2}
                    />

                    {/* Data dots */}
                    {dataPoints.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r={4} fill={color} className={styles.dot} />
                    ))}

                    {/* Labels */}
                    {showLabels && labelPositions.map((lp, i) => (
                        <text
                            key={i}
                            x={lp.x}
                            y={lp.y}
                            textAnchor="middle"
                            dominantBaseline="central"
                            className={styles.label}
                        >
                            {lp.label}
                        </text>
                    ))}
                </svg>
            </div>
        );
    }
);

RadarChart.displayName = "RadarChart";
