"use client";

import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/cn";
import styles from "./Matrix.module.css";

export interface MatrixCell {
    value: number;
    label?: string;
}

export interface MatrixProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 2D array of cell values */
    data: MatrixCell[][];
    /** Row labels */
    rowLabels?: string[];
    /** Column labels */
    columnLabels?: string[];
    /** Cell size in px */
    cellSize?: number;
    /** Gap between cells in px */
    gap?: number;
    /** Color for maximum value (CSS value) */
    color?: string;
}

export const Matrix = forwardRef<HTMLDivElement, MatrixProps>(
    (
        {
            data,
            rowLabels,
            columnLabels,
            cellSize = 32,
            gap = 3,
            color = "var(--color-lime)",
            className,
            ...props
        },
        ref
    ) => {
        const maxValue = useMemo(() => {
            let max = 0;
            data.forEach((row) => row.forEach((cell) => { if (cell.value > max) max = cell.value; }));
            return max || 1;
        }, [data]);

        return (
            <div ref={ref} className={cn(styles.root, className)} {...props}>
                {/* Column labels */}
                {columnLabels && (
                    <div className={styles.columnLabels} style={{ marginLeft: rowLabels ? 48 : 0 }}>
                        {columnLabels.map((label, i) => (
                            <span
                                key={i}
                                className={styles.columnLabel}
                                style={{ width: cellSize, textAlign: "center" }}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                )}

                {/* Grid */}
                <div className={styles.grid}>
                    {data.map((row, rowIdx) => (
                        <div key={rowIdx} className={styles.row}>
                            {rowLabels && rowLabels[rowIdx] && (
                                <span className={styles.rowLabel}>{rowLabels[rowIdx]}</span>
                            )}
                            {row.map((cell, colIdx) => {
                                const intensity = cell.value / maxValue;
                                return (
                                    <div
                                        key={colIdx}
                                        className={styles.cell}
                                        style={{
                                            width: cellSize,
                                            height: cellSize,
                                            gap,
                                            backgroundColor: cell.value === 0
                                                ? "var(--color-bg-elevated)"
                                                : color,
                                            opacity: cell.value === 0 ? 1 : 0.2 + intensity * 0.8,
                                            borderRadius: "var(--radius-sm)",
                                        }}
                                        title={cell.label || `${cell.value}`}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

Matrix.displayName = "Matrix";
