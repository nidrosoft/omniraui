"use client";

import { cn } from "@/lib/cn";
import styles from "./FinancialGrowth.module.css";

export interface FinancialGrowthGoal {
    label: string;
    /** Display amount, e.g. "$3,600". */
    amount: string;
    /** Optional small decimal suffix, e.g. ".00". */
    amountDecimal?: string;
    /** Progress toward the goal, 0–100. */
    percent: number;
    /** Optional override for the right-side caption (defaults to "Goal"). */
    goalLabel?: string;
    /** Right-side target value, e.g. "$10,000". */
    goalValue: string;
}

export interface FinancialGrowthProps {
    title?: string;
    goals?: FinancialGrowthGoal[];
    /** Number of dots in each progress bar. Higher = finer resolution. */
    dotCount?: number;
    className?: string;
}

const DEFAULT_GOALS: FinancialGrowthGoal[] = [
    { label: "Saved Amount",    amount: "$3,600", amountDecimal: ".00", percent: 36, goalValue: "$10,000" },
    { label: "Invested Amount", amount: "$6,600", amountDecimal: ".00", percent: 33, goalValue: "$20,000" },
];

function ProgressBar({ percent, dotCount }: { percent: number; dotCount: number }) {
    const safe = Math.min(Math.max(percent, 0), 100);
    const filled = Math.round((safe / 100) * dotCount);
    return (
        <div className={styles.bar} aria-hidden="true">
            <span className={styles.barAccent} />
            <div className={styles.barTrack}>
                {Array.from({ length: dotCount }, (_, i) => (
                    <span
                        key={i}
                        className={cn(styles.dot, i < filled ? styles.dotFilled : styles.dotEmpty)}
                    />
                ))}
            </div>
        </div>
    );
}

export function FinancialGrowth({
    title = "Financial Growth",
    goals = DEFAULT_GOALS,
    dotCount = 64,
    className,
}: FinancialGrowthProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.goals}>
                {goals.map((goal, i) => (
                    <div key={i} className={styles.goal}>
                        <span className={styles.goalLabel}>{goal.label}</span>
                        <p className={styles.amount}>
                            <span className={styles.amountMain}>{goal.amount}</span>
                            {goal.amountDecimal && (
                                <span className={styles.amountDecimal}>{goal.amountDecimal}</span>
                            )}
                        </p>
                        <ProgressBar percent={goal.percent} dotCount={dotCount} />
                        <div className={styles.goalRow}>
                            <span className={styles.goalLeft}>{goal.goalLabel ?? "Goal"}</span>
                            <span className={styles.goalRight}>{goal.goalValue}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
