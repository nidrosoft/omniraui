"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/cn";
import styles from "./RadioGroup.module.css";

/* ── Shared types ── */
interface BaseItem {
    value: string;
    title: string;
    description?: string;
}

interface PlanItem extends BaseItem {
    secondaryTitle?: string;
    price?: string;
    badge?: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
}

interface PaymentItem extends BaseItem {
    logo?: React.ReactNode;
}

interface AvatarItem {
    id: string;
    name: string;
    username: string;
    title: string;
    avatarUrl: string;
}

/* ── Shared hook ── */
function useRadioGroup(defaultValue?: string) {
    const [value, setValue] = useState(defaultValue ?? "");
    return { value, onChange: setValue };
}

/* ── IconSimple ── */
interface IconSimpleProps {
    items: PlanItem[];
    defaultValue?: string;
    "aria-label"?: string;
    className?: string;
}

function IconSimple({ items, defaultValue, className, ...props }: IconSimpleProps) {
    const { value, onChange } = useRadioGroup(defaultValue);

    return (
        <div role="radiogroup" aria-label={props["aria-label"]} className={cn(styles.list, className)}>
            {items.map((item) => {
                const selected = value === item.value;
                const Icon = item.icon;
                return (
                    <button
                        key={item.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(item.value)}
                        className={cn(styles.iconSimpleItem, selected && styles.iconSimpleItemSelected)}
                    >
                        <div className={styles.iconSimpleTop}>
                            <div className={styles.iconSimpleLeft}>
                                {Icon && (
                                    <span className={styles.iconWrap}>
                                        <Icon className={styles.icon} />
                                    </span>
                                )}
                                <div className={styles.iconSimpleText}>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                    {item.secondaryTitle && (
                                        <span className={styles.itemSecondary}>{item.secondaryTitle}</span>
                                    )}
                                </div>
                            </div>
                            <span className={cn(styles.radioCircle, selected && styles.radioCircleSelected)}>
                                {selected && <span className={styles.radioDot} />}
                            </span>
                        </div>
                        {item.description && (
                            <p className={styles.itemDesc}>{item.description}</p>
                        )}
                        {item.badge && <div className={styles.badgeWrap}>{item.badge}</div>}
                    </button>
                );
            })}
        </div>
    );
}

/* ── Checkbox variant ── */
interface CheckboxProps {
    items: PlanItem[];
    defaultValue?: string;
    "aria-label"?: string;
    className?: string;
}

function CheckboxVariant({ items, defaultValue, className, ...props }: CheckboxProps) {
    const { value, onChange } = useRadioGroup(defaultValue);

    return (
        <div role="radiogroup" aria-label={props["aria-label"]} className={cn(styles.list, className)}>
            {items.map((item) => {
                const selected = value === item.value;
                const Icon = item.icon;
                return (
                    <button
                        key={item.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(item.value)}
                        className={cn(styles.checkboxItem, selected && styles.checkboxItemSelected)}
                    >
                        <div className={styles.checkboxTop}>
                            <span className={cn(styles.checkboxBox, selected && styles.checkboxBoxSelected)}>
                                {selected && (
                                    <svg viewBox="0 0 12 12" fill="none" className={styles.checkIcon}>
                                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </span>
                            <div className={styles.checkboxText}>
                                <div className={styles.checkboxTitleRow}>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                    {item.price && <span className={styles.itemPrice}>{item.price}/mo</span>}
                                </div>
                                {item.description && (
                                    <p className={styles.itemDesc}>{item.description}</p>
                                )}
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

/* ── PaymentIcon ── */
interface PaymentIconProps {
    items: PaymentItem[];
    defaultValue?: string;
    "aria-label"?: string;
    className?: string;
}

function PaymentIcon({ items, defaultValue, className, ...props }: PaymentIconProps) {
    const { value, onChange } = useRadioGroup(defaultValue ?? items[0]?.value);

    return (
        <div role="radiogroup" aria-label={props["aria-label"]} className={cn(styles.list, className)}>
            {items.map((item) => {
                const selected = value === item.value;
                return (
                    <button
                        key={item.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(item.value)}
                        className={cn(styles.paymentItem, selected && styles.paymentItemSelected)}
                    >
                        <div className={styles.paymentLeft}>
                            {item.logo && <span className={styles.paymentLogo}>{item.logo}</span>}
                            <div className={styles.paymentText}>
                                <span className={styles.itemTitle}>{item.title}</span>
                                {item.description && <span className={styles.itemSecondary}>{item.description}</span>}
                            </div>
                        </div>
                        <span className={cn(styles.radioCircle, selected && styles.radioCircleSelected)}>
                            {selected && <span className={styles.radioDot} />}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

/* ── Avatar ── */
interface AvatarProps {
    items: AvatarItem[];
    defaultValue?: string;
    "aria-label"?: string;
    className?: string;
}

function AvatarVariant({ items, defaultValue, className, ...props }: AvatarProps) {
    const { value, onChange } = useRadioGroup(defaultValue);

    return (
        <div role="radiogroup" aria-label={props["aria-label"]} className={cn(styles.list, className)}>
            {items.map((item) => {
                const selected = value === item.id;
                return (
                    <button
                        key={item.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(item.id)}
                        className={cn(styles.avatarItem, selected && styles.avatarItemSelected)}
                    >
                        <div className={styles.avatarLeft}>
                            <img src={item.avatarUrl} alt={item.name} className={styles.avatarImg} />
                            <div className={styles.avatarText}>
                                <div className={styles.avatarNameRow}>
                                    <span className={styles.itemTitle}>{item.name}</span>
                                    <span className={styles.avatarUsername}>{item.username}</span>
                                </div>
                                <span className={styles.itemSecondary}>{item.title}</span>
                            </div>
                        </div>
                        <span className={cn(styles.radioCircle, selected && styles.radioCircleSelected)}>
                            {selected && <span className={styles.radioDot} />}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

/* ── IconCard ── */
interface IconCardProps {
    items: PlanItem[];
    defaultValue?: string;
    "aria-label"?: string;
    className?: string;
}

function IconCard({ items, defaultValue, className, ...props }: IconCardProps) {
    const { value, onChange } = useRadioGroup(defaultValue);

    return (
        <div role="radiogroup" aria-label={props["aria-label"]} className={cn(styles.cardGrid, className)}>
            {items.map((item) => {
                const selected = value === item.value;
                const Icon = item.icon;
                return (
                    <button
                        key={item.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(item.value)}
                        className={cn(styles.iconCardItem, selected && styles.iconCardItemSelected)}
                    >
                        <div className={styles.iconCardHeader}>
                            {Icon && (
                                <span className={styles.iconCardIconWrap}>
                                    <Icon className={styles.icon} />
                                </span>
                            )}
                            <span className={cn(styles.radioCircle, selected && styles.radioCircleSelected)}>
                                {selected && <span className={styles.radioDot} />}
                            </span>
                        </div>
                        <div className={styles.iconCardBody}>
                            <span className={styles.itemTitle}>{item.title}</span>
                            {item.price && (
                                <div className={styles.iconCardPrice}>
                                    <span className={styles.priceValue}>{item.price}</span>
                                    {item.secondaryTitle && <span className={styles.itemSecondary}>{item.secondaryTitle}</span>}
                                </div>
                            )}
                            {item.description && <p className={styles.itemDesc}>{item.description}</p>}
                        </div>
                        {item.badge && (
                            <div className={styles.iconCardBadge}>
                                <span className={styles.badge}>{typeof item.badge === "string" ? item.badge : item.badge}</span>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

/* ── Compound export ── */
export const RadioGroups = {
    IconSimple,
    Checkbox: CheckboxVariant,
    PaymentIcon,
    Avatar: AvatarVariant,
    IconCard,
};
