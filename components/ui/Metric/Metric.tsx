import { cn } from "@/lib/cn";
import styles from "./Metric.module.css";

/* ── Types ── */

export interface MetricProps {
    /** Visual variant — each has a unique card layout */
    variant?: "default" | "compact" | "tab" | "inline" | "accent" | "split";
    label: string;
    value: string;
    change?: {
        value: string;
        direction: "up" | "down";
    };
    description?: string;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
    progress?: {
        value: number;
        label?: string;
        max?: string;
    };
    chart?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

/* ── Shared sub-components ── */

function ChangeBadge({ change }: { change: MetricProps["change"] }) {
    if (!change) return null;
    return (
        <span
            className={cn(
                styles.change,
                change.direction === "up" ? styles.changeUp : styles.changeDown,
            )}
        >
            <span className={styles.changeArrow}>
                {change.direction === "up" ? "↑" : "↓"}
            </span>
            {change.value}
        </span>
    );
}

function ProgressBar({ progress }: { progress: MetricProps["progress"] }) {
    if (!progress) return null;
    return (
        <div className={styles.progressWrapper}>
            <div className={styles.progressTrack}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${Math.min(progress.value, 100)}%` }}
                />
            </div>
            {(progress.label || progress.max) && (
                <div className={styles.progressLabel}>
                    <span>{progress.label ?? `${progress.value}%`}</span>
                    {progress.max && <span>{progress.max}</span>}
                </div>
            )}
        </div>
    );
}

/* ── Default: classic card with stacked layout ── */

function MetricDefault(props: MetricProps) {
    const { label, value, change, description, icon, progress, chart, footer, actions, className } = props;
    return (
        <div className={cn(styles.metricCard, footer ? styles.hasFooter : null, className)}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <span className={styles.label}>{label}</span>
                    {icon && <div className={styles.iconWrapper}>{icon}</div>}
                    {actions && <div className={styles.actionsInline}>{actions}</div>}
                </div>
                <div className={styles.valueRow}>
                    <span className={styles.value}>{value}</span>
                    <ChangeBadge change={change} />
                </div>
                {description && <p className={styles.description}>{description}</p>}
                {chart && <div className={styles.chartWrapper}>{chart}</div>}
                <ProgressBar progress={progress} />
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

/* ── Compact: single-row value + change, minimal height ── */

function MetricCompact(props: MetricProps) {
    const { label, value, change, description, icon, footer, className } = props;
    return (
        <div className={cn(styles.metricCard, styles.variantCompact, footer ? styles.hasFooter : null, className)}>
            <div className={styles.body}>
                <div className={styles.compactTop}>
                    {icon && <div className={styles.iconSmall}>{icon}</div>}
                    <span className={styles.label}>{label}</span>
                </div>
                <div className={styles.compactBottom}>
                    <span className={styles.valueCompact}>{value}</span>
                    <ChangeBadge change={change} />
                    {description && <span className={styles.descriptionInline}>{description}</span>}
                </div>
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

/* ── Tab: "folder" style — label floats as a tab above the card body ── */

function MetricTab(props: MetricProps) {
    const { label, value, change, description, chart, actions, footer, className } = props;
    return (
        <div className={cn(styles.variantTab, footer ? styles.hasFooter : null, className)}>
            <div className={styles.tabLabel}>{label}</div>
            <div className={styles.tabBody}>
                <div className={styles.tabContent}>
                    <div className={styles.tabValueRow}>
                        <span className={styles.value}>{value}</span>
                        <ChangeBadge change={change} />
                        {description && <span className={styles.descriptionInline}>{description}</span>}
                        {actions && <div className={styles.actionsInline}>{actions}</div>}
                    </div>
                    {chart && <div className={styles.chartWrapper}>{chart}</div>}
                </div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
}

/* ── Inline: horizontal layout — icon left, stats right ── */

function MetricInline(props: MetricProps) {
    const { label, value, change, description, icon, footer, className } = props;
    return (
        <div className={cn(styles.metricCard, styles.variantInline, footer ? styles.hasFooter : null, className)}>
            <div className={styles.body}>
                <div className={styles.inlineLayout}>
                    {icon && <div className={styles.iconLarge}>{icon}</div>}
                    <div className={styles.inlineContent}>
                        <span className={styles.label}>{label}</span>
                        <div className={styles.valueRow}>
                            <span className={styles.value}>{value}</span>
                            <ChangeBadge change={change} />
                        </div>
                        {description && <p className={styles.description}>{description}</p>}
                    </div>
                </div>
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

/* ── Accent: colored left border strip ── */

function MetricAccent(props: MetricProps) {
    const { label, value, change, description, icon, progress, footer, className } = props;
    return (
        <div className={cn(styles.metricCard, styles.variantAccent, footer ? styles.hasFooter : null, className)}>
            <div className={styles.accentStrip} />
            <div className={styles.body}>
                <div className={styles.header}>
                    <span className={styles.label}>{label}</span>
                    {icon && <div className={styles.iconWrapper}>{icon}</div>}
                </div>
                <div className={styles.valueRow}>
                    <span className={styles.value}>{value}</span>
                    <ChangeBadge change={change} />
                </div>
                {description && <p className={styles.description}>{description}</p>}
                <ProgressBar progress={progress} />
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

/* ── Split: two-column — left has stats, right has chart ── */

function MetricSplit(props: MetricProps) {
    const { label, value, change, description, chart, footer, className } = props;
    return (
        <div className={cn(styles.metricCard, styles.variantSplit, footer ? styles.hasFooter : null, className)}>
            <div className={styles.body}>
                <div className={styles.splitLayout}>
                    <div className={styles.splitLeft}>
                        <span className={styles.label}>{label}</span>
                        <div className={styles.valueRow}>
                            <span className={styles.value}>{value}</span>
                            <ChangeBadge change={change} />
                        </div>
                        {description && <p className={styles.description}>{description}</p>}
                    </div>
                    {chart && <div className={styles.splitRight}>{chart}</div>}
                </div>
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

/* ── Main export ── */

const VARIANT_MAP = {
    default: MetricDefault,
    compact: MetricCompact,
    tab: MetricTab,
    inline: MetricInline,
    accent: MetricAccent,
    split: MetricSplit,
};

export function Metric({ variant = "default", ...props }: MetricProps) {
    const Component = VARIANT_MAP[variant];
    return <Component variant={variant} {...props} />;
}
