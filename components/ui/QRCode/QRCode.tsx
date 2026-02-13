"use client";

import { useMemo, forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./QRCode.module.css";

export interface QRCodeProps {
    value: string;
    size?: "sm" | "md" | "lg";
    color?: string;
    bgColor?: string;
    className?: string;
}

const sizePx: Record<string, number> = {
    sm: 128,
    md: 200,
    lg: 280,
};

export const QRCode = forwardRef<HTMLDivElement, QRCodeProps>(
    (
        {
            value,
            size = "md",
            color,
            bgColor,
            className,
        },
        ref,
    ) => {
        const dim = sizePx[size];
        const matrix = useMemo(() => generateQR(value), [value]);
        const cellSize = dim / matrix.length;

        return (
            <div
                ref={ref}
                className={cn(styles.wrap, className)}
                style={{ width: dim, height: dim }}
            >
                <svg
                    width={dim}
                    height={dim}
                    viewBox={`0 0 ${dim} ${dim}`}
                    className={styles.svg}
                >
                    <rect
                        width={dim}
                        height={dim}
                        fill={bgColor || "var(--color-bg-card)"}
                        rx="8"
                    />
                    {matrix.map((row, y) =>
                        row.map((cell, x) =>
                            cell ? (
                                <rect
                                    key={`${y}-${x}`}
                                    x={x * cellSize}
                                    y={y * cellSize}
                                    width={cellSize}
                                    height={cellSize}
                                    rx={cellSize * 0.15}
                                    fill={color || "var(--color-text-primary)"}
                                />
                            ) : null,
                        ),
                    )}
                </svg>
            </div>
        );
    },
);

QRCode.displayName = "QRCode";

/**
 * Minimal QR-like pattern generator.
 * This creates a deterministic grid pattern based on the input string.
 * For production use, integrate a proper QR encoding library.
 */
function generateQR(value: string): boolean[][] {
    const size = 25;
    const matrix: boolean[][] = Array.from({ length: size }, () =>
        Array(size).fill(false),
    );

    // Finder patterns (top-left, top-right, bottom-left)
    const drawFinder = (ox: number, oy: number) => {
        for (let y = 0; y < 7; y++) {
            for (let x = 0; x < 7; x++) {
                const isOuter = y === 0 || y === 6 || x === 0 || x === 6;
                const isInner = x >= 2 && x <= 4 && y >= 2 && y <= 4;
                if (isOuter || isInner) matrix[oy + y][ox + x] = true;
            }
        }
    };

    drawFinder(0, 0);
    drawFinder(size - 7, 0);
    drawFinder(0, size - 7);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
        matrix[6][i] = i % 2 === 0;
        matrix[i][6] = i % 2 === 0;
    }

    // Data area — hash-based fill
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    }

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (matrix[y][x]) continue;
            // Skip finder + margin zones
            if ((x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8)) continue;
            if (x === 6 || y === 6) continue;

            const seed = (hash ^ (x * 31 + y * 37 + x * y * 13)) >>> 0;
            matrix[y][x] = seed % 3 !== 0;
        }
    }

    return matrix;
}
