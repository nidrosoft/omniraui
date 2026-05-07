"use client";

import { ArrowDown2, ArrowSwapHorizontal } from "iconsax-react";
import { cn } from "@/lib/cn";
import styles from "./ConvertCurrency.module.css";

export interface ConvertCurrencyField {
    /** Display amount, e.g. "$100". */
    amount: string;
    /** Currency code shown in the right dropdown, e.g. "EUR". */
    code: string;
}

export interface ConvertCurrencyProps {
    title?: string;
    /** Right-aligned balance, e.g. "$2,800". */
    balance?: string;
    balanceLabel?: string;
    /** Source field — what you have. */
    from?: ConvertCurrencyField;
    /** Destination field — what you'll get. */
    to?: ConvertCurrencyField;
    convertLabel?: string;
    onConvert?: () => void;
    onSwap?: () => void;
    className?: string;
}

const DEFAULT_FROM: ConvertCurrencyField = { amount: "$100", code: "EUR" };
const DEFAULT_TO: ConvertCurrencyField = { amount: "$90", code: "GBP" };

export function ConvertCurrency({
    title = "Convert Currency",
    balance = "$2,800",
    balanceLabel = "Balance",
    from = DEFAULT_FROM,
    to = DEFAULT_TO,
    convertLabel = "Convert",
    onConvert,
    onSwap,
    className,
}: ConvertCurrencyProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                {balance && (
                    <span className={styles.balance}>
                        <span className={styles.balanceLabel}>{balanceLabel} : </span>
                        <span className={styles.balanceValue}>{balance}</span>
                    </span>
                )}
            </div>

            <div className={styles.fields}>
                <button type="button" className={styles.field}>
                    <span className={styles.fieldAmount}>{from.amount}</span>
                    <span className={styles.fieldCode}>
                        {from.code}
                        <ArrowDown2 size={10} variant="Linear" color="currentColor" />
                    </span>
                </button>
                <button type="button" className={styles.field}>
                    <span className={styles.fieldAmount}>{to.amount}</span>
                    <span className={styles.fieldCode}>
                        {to.code}
                        <ArrowDown2 size={10} variant="Linear" color="currentColor" />
                    </span>
                </button>
            </div>

            <div className={styles.footer}>
                <button type="button" className={styles.convertBtn} onClick={onConvert}>
                    {convertLabel}
                </button>
                <button type="button" className={styles.swapBtn} onClick={onSwap} aria-label="Swap currencies">
                    <ArrowSwapHorizontal size={14} variant="Linear" color="currentColor" />
                </button>
            </div>
        </div>
    );
}
