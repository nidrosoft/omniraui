"use client";

import { cn } from "@/lib/cn";
import styles from "./WeeklyExpenditure.module.css";

export interface WeeklyExpenditureDay {
    label: string;
    /** Bar height as a percent of the chart, 0–100. */
    percent: number;
    /** When true, this day gets the violet highlight rectangle behind its bar. */
    highlighted?: boolean;
}

export interface WeeklyExpenditureProps {
    title?: string;
    days?: WeeklyExpenditureDay[];
    /** Number of dots when a day's percent === 100. */
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_DAYS: WeeklyExpenditureDay[] = [
    { label: "Sun", percent: 35 },
    { label: "Mon", percent: 45 },
    { label: "Tue", percent: 28 },
    { label: "Wed", percent: 100, highlighted: true },
    { label: "Thu", percent: 52 },
    { label: "Fri", percent: 60 },
    { label: "Sat", percent: 40 },
];

export function WeeklyExpenditure({
    title = "Weekly Expenditure",
    days = DEFAULT_DAYS,
    maxDotsPerBar = 18,
    className,
}: WeeklyExpenditureProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.chart} aria-hidden="true">
                {days.map((day, i) => {
                    const safe = Math.min(Math.max(day.percent, 0), 100);
                    const dotCount = Math.max(1, Math.round((safe / 100) * maxDotsPerBar));
                    return (
                        <div key={i} className={styles.col}>
                            <div className={styles.barWrap}>
                                {day.highlighted && <span className={styles.highlight} />}
                                <div className={styles.bar}>
                                    {Array.from({ length: dotCount }, (_, j) => (
                                        <span key={j} className={styles.barDot} />
                                    ))}
                                </div>
                            </div>
                            <span className={styles.dayLabel}>{day.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
