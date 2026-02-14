"use client";

import React, { useState } from "react";
import { InfoCircle, TickCircle, Danger, Warning2, CloseCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./Alert.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type AlertColor = "default" | "brand" | "gray" | "error" | "warning" | "success";
export type AlertVariant = "floating" | "fullWidth";

export interface AlertAction {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export interface AlertProps {
    /** Alert title */
    title: string;
    /** Alert description */
    description?: string;
    /** Color theme */
    color?: AlertColor;
    /** Layout variant */
    variant?: AlertVariant;
    /** Custom icon element. Pass null to hide the icon. */
    icon?: React.ReactNode | null;
    /** Action buttons */
    actions?: AlertAction[];
    /** Show close button */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Additional CSS class */
    className?: string;
    /** Children rendered after description */
    children?: React.ReactNode;
}

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

function getDefaultIcon(color: AlertColor) {
    switch (color) {
        case "error": return <Danger size={20} variant="Bulk" color="currentColor" />;
        case "warning": return <Warning2 size={20} variant="Bulk" color="currentColor" />;
        case "success": return <TickCircle size={20} variant="Bulk" color="currentColor" />;
        default: return <InfoCircle size={20} variant="Bulk" color="currentColor" />;
    }
}

function getColorCls(color: AlertColor) {
    switch (color) {
        case "brand": return s.colorBrand;
        case "gray": return s.colorGray;
        case "error": return s.colorError;
        case "warning": return s.colorWarning;
        case "success": return s.colorSuccess;
        default: return s.colorDefault;
    }
}

/* ══════════════════════════════════════════════
   Alert
   ══════════════════════════════════════════════ */

export function Alert({
    title,
    description,
    color = "default",
    variant = "floating",
    icon,
    actions,
    dismissible = false,
    onDismiss,
    className,
    children,
}: AlertProps) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };

    const showIcon = icon !== null;
    const iconElement = icon ?? getDefaultIcon(color);

    return (
        <div
            className={cn(
                s.alert,
                variant === "fullWidth" && s.fullWidth,
                getColorCls(color),
                className,
            )}
            role="alert"
        >
            {showIcon && <div className={s.iconWrap}>{iconElement}</div>}

            <div className={s.content}>
                <div className={s.title}>{title}</div>
                {description && <div className={s.description}>{description}</div>}
                {children}
                {actions && actions.length > 0 && (
                    <div className={s.actions}>
                        {actions.map((action, i) => (
                            <button
                                key={i}
                                type="button"
                                className={cn(
                                    s.actionBtn,
                                    action.variant === "secondary" ? s.actionSecondary : s.actionPrimary,
                                )}
                                onClick={action.onClick}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {dismissible && (
                <button type="button" className={s.closeBtn} onClick={handleDismiss} aria-label="Dismiss">
                    <CloseCircle size={16} variant="Linear" color="currentColor" />
                </button>
            )}
        </div>
    );
}
