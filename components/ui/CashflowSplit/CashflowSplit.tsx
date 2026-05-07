"use client";

import { cn } from "@/lib/cn";
import styles from "./CashflowSplit.module.css";

export interface CashflowSplitSegment {
    /** Top label, e.g. "$8,543.32 in". */
    label: string;
    /** Optional small caption rendered below the label, e.g. "+3% Last month". */
    note?: string;
    /** Share of the total, 0–100. Drives the dotted progress bar fill. */
    percent: number;
}

export interface CashflowSplitProps {
    title?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    /** Main amount, rendered in display type. */
    amount?: string;
    /** Optional small decimal suffix shown after the amount, e.g. ".21". */
    amountDecimal?: string;
    segments?: CashflowSplitSegment[];
    /** Number of dots in the progress bar. Higher = finer resolution. */
    dotCount?: number;
    className?: string;
}

const DEFAULT_SEGMENTS: CashflowSplitSegment[] = [
    { label: "$8,543.32 in", note: "+3% Last month", percent: 75 },
    { label: "$2,343.32 in", note: "+3% Last month", percent: 25 },
];

function ProgressBar({ percent, dotCount }: { percent: number; dotCount: number }) {
    const safe = Math.min(Math.max(percent, 0), 100);
    const filled = Math.round((safe / 100) * dotCount);

    return (
        <div className={styles.bar}>
            <span className={styles.barAccent} aria-hidden="true" />
            <div className={styles.barTrack} aria-hidden="true">
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

export function CashflowSplit({
    title = "Cashflow",
    ctaLabel = "See More",
    onCtaClick,
    amount = "$6,528",
    amountDecimal = ".21",
    segments = DEFAULT_SEGMENTS,
    dotCount = 64,
    className,
}: CashflowSplitProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {onCtaClick ? (
                    <button type="button" className={styles.headerCta} onClick={onCtaClick}>
                        {ctaLabel}
                    </button>
                ) : (
                    <span className={styles.headerCta}>{ctaLabel}</span>
                )}
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amount}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </div>

            <ul className={styles.segments}>
                {segments.map((segment, i) => (
                    <li key={i} className={styles.segment}>
                        <span className={styles.segmentLabel}>
                            {parseSegmentLabel(segment.label)}
                        </span>
                        <div className={styles.segmentMeta}>
                            {segment.note && <span className={styles.segmentNote}>{segment.note}</span>}
                            <span className={styles.segmentPercent}>{segment.percent}%</span>
                        </div>
                        <ProgressBar percent={segment.percent} dotCount={dotCount} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

/**
 * Splits "$8,543.32 in" into a styled amount + small "in" suffix.
 * Last whitespace-separated token (when it's short, like "in" or "out") is treated as a suffix.
 */
function parseSegmentLabel(label: string) {
    const parts = label.trim().split(/\s+/);
    if (parts.length >= 2 && parts[parts.length - 1].length <= 4) {
        const suffix = parts.pop()!;
        const head = parts.join(" ");
        return (
            <>
                <span className={styles.segmentLabelHead}>{head} </span>
                <span className={styles.segmentLabelSuffix}>{suffix}</span>
            </>
        );
    }
    return <span className={styles.segmentLabelHead}>{label}</span>;
}
