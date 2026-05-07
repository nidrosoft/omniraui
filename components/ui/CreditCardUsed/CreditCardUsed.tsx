"use client";

import { cn } from "@/lib/cn";
import styles from "./CreditCardUsed.module.css";

export interface CreditCardUsedProps {
    title?: string;
    /** Used amount, e.g. "$1,250". */
    amount?: string;
    amountDecimal?: string;
    /** Subtitle / total, e.g. "Out of $72,231". */
    subtitle?: string;
    /** Used percent, 0–100. Drives the donut fill and the central display value. */
    percent?: number;
    /** Override central donut text (defaults to "{percent}%"). */
    centerText?: string;
    className?: string;
}

export function CreditCardUsed({
    title = "Credit Card Used",
    amount = "$1,250",
    amountDecimal,
    subtitle = "Out of $72,231",
    percent = 2,
    centerText,
    className,
}: CreditCardUsedProps) {
    const safe = Math.min(Math.max(percent, 0), 100);
    const cx = 50;
    const cy = 50;
    const radius = 44;

    let arcPath: string | null = null;
    if (safe > 0) {
        const startAngle = -90;
        const endAngle = startAngle + (safe >= 100 ? 359.999 : (safe / 100) * 360);
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        const x1 = cx + radius * Math.cos(startRad);
        const y1 = cy + radius * Math.sin(startRad);
        const x2 = cx + radius * Math.cos(endRad);
        const y2 = cy + radius * Math.sin(endRad);
        const largeArc = safe > 50 ? 1 : 0;
        arcPath = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
    }

    const resolvedCenter = centerText ?? `${Math.round(safe)}`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.left}>
                <span className={styles.title}>{title}</span>
                <div className={styles.stats}>
                    <p className={styles.amount}>
                        <span className={styles.amountMain}>{amount}</span>
                        {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                    </p>
                    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                </div>
            </div>

            <div className={styles.donut}>
                <svg viewBox="0 0 100 100" className={styles.donutSvg} aria-hidden="true">
                    <circle
                        cx={cx}
                        cy={cy}
                        r={radius}
                        className={styles.donutTrack}
                        strokeWidth="3"
                        strokeDasharray="1.5 3"
                        strokeLinecap="butt"
                    />
                    {arcPath && (
                        <path
                            d={arcPath}
                            className={styles.donutFill}
                            strokeWidth="3"
                            strokeDasharray="1.5 3"
                            strokeLinecap="butt"
                        />
                    )}
                </svg>
                <div className={styles.donutCenter}>
                    <p className={styles.donutText}>
                        <span className={styles.donutValue}>{resolvedCenter}</span>
                        <span className={styles.donutUnit}>%</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
