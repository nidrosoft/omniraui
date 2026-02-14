"use client";

import { cn } from "@/lib/cn";
import { CloseCircle } from "iconsax-react";
import s from "./Notification.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type NotificationColor = "default" | "success" | "error" | "warning" | "info";

export interface IconNotificationProps {
    title: string;
    description?: string;
    confirmLabel?: string;
    dismissLabel?: string;
    color?: NotificationColor;
    icon?: React.ComponentType<any>;
    onClose?: () => void;
    onConfirm?: () => void;
    onDismiss?: () => void;
    timestamp?: string;
    className?: string;
    inline?: boolean;
}

export interface AvatarNotificationProps {
    title: string;
    description?: string;
    confirmLabel?: string;
    dismissLabel?: string;
    color?: NotificationColor;
    avatarSrc?: string;
    avatarFallback?: string;
    avatarColor?: string;
    onClose?: () => void;
    onConfirm?: () => void;
    onDismiss?: () => void;
    timestamp?: string;
    className?: string;
    inline?: boolean;
}

export interface ProgressNotificationProps {
    title: string;
    description?: string;
    color?: NotificationColor;
    icon?: React.ComponentType<any>;
    progress: number;
    onClose?: () => void;
    className?: string;
    inline?: boolean;
}

export interface SimpleNotificationProps {
    title: string;
    description?: string;
    color?: NotificationColor;
    onClose?: () => void;
    timestamp?: string;
    className?: string;
    inline?: boolean;
}

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

const iconClass: Record<NotificationColor, string> = {
    default: s.iconDefault,
    success: s.iconSuccess,
    error: s.iconError,
    warning: s.iconWarning,
    info: s.iconInfo,
};

const confirmClass: Record<NotificationColor, string> = {
    default: s.btnConfirmDefault,
    success: s.btnConfirmSuccess,
    error: s.btnConfirmError,
    warning: s.btnConfirmWarning,
    info: s.btnConfirmInfo,
};

const progressColors: Record<NotificationColor, string> = {
    default: "var(--color-lime)",
    success: "var(--color-success)",
    error: "var(--color-error)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
};

/* ══════════════════════════════════════════════
   IconNotification
   ══════════════════════════════════════════════ */

export function IconNotification({
    title,
    description,
    confirmLabel,
    dismissLabel,
    color = "default",
    icon: Icon,
    onClose,
    onConfirm,
    onDismiss,
    timestamp,
    className,
    inline,
}: IconNotificationProps) {
    return (
        <div className={cn(s.notification, inline && s.inline, className)}>
            {Icon && (
                <div className={cn(s.iconWrap, iconClass[color])}>
                    <Icon size={18} variant="Bulk" color="currentColor" />
                </div>
            )}
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                {description && <span className={s.description}>{description}</span>}
                {timestamp && <span className={s.timestamp}>{timestamp}</span>}
                {(confirmLabel || dismissLabel) && (
                    <div className={s.actions}>
                        {confirmLabel && (
                            <button
                                className={cn(s.btnConfirm, confirmClass[color])}
                                onClick={onConfirm}
                            >
                                {confirmLabel}
                            </button>
                        )}
                        {dismissLabel && (
                            <button className={s.btnDismiss} onClick={onDismiss ?? onClose}>
                                {dismissLabel}
                            </button>
                        )}
                    </div>
                )}
            </div>
            {onClose && (
                <button className={s.closeBtn} onClick={onClose} aria-label="Close">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   AvatarNotification
   ══════════════════════════════════════════════ */

export function AvatarNotification({
    title,
    description,
    confirmLabel,
    dismissLabel,
    color = "default",
    avatarSrc,
    avatarFallback,
    avatarColor = "#3B82F6",
    onClose,
    onConfirm,
    onDismiss,
    timestamp,
    className,
    inline,
}: AvatarNotificationProps) {
    return (
        <div className={cn(s.notification, inline && s.inline, className)}>
            {avatarSrc ? (
                <img src={avatarSrc} alt="" className={s.avatar} />
            ) : avatarFallback ? (
                <div className={s.avatarFallback} style={{ background: avatarColor }}>
                    {avatarFallback}
                </div>
            ) : null}
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                {description && <span className={s.description}>{description}</span>}
                {timestamp && <span className={s.timestamp}>{timestamp}</span>}
                {(confirmLabel || dismissLabel) && (
                    <div className={s.actions}>
                        {confirmLabel && (
                            <button
                                className={cn(s.btnConfirm, confirmClass[color])}
                                onClick={onConfirm}
                            >
                                {confirmLabel}
                            </button>
                        )}
                        {dismissLabel && (
                            <button className={s.btnDismiss} onClick={onDismiss ?? onClose}>
                                {dismissLabel}
                            </button>
                        )}
                    </div>
                )}
            </div>
            {onClose && (
                <button className={s.closeBtn} onClick={onClose} aria-label="Close">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   ProgressNotification
   ══════════════════════════════════════════════ */

export function ProgressNotification({
    title,
    description,
    color = "default",
    icon: Icon,
    progress,
    onClose,
    className,
    inline,
}: ProgressNotificationProps) {
    const clamped = Math.min(100, Math.max(0, progress));

    return (
        <div className={cn(s.notification, inline && s.inline, className)}>
            {Icon && (
                <div className={cn(s.iconWrap, iconClass[color])}>
                    <Icon size={18} variant="Bulk" color="currentColor" />
                </div>
            )}
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                {description && <span className={s.description}>{description}</span>}
                <div className={s.progressBar}>
                    <div
                        className={s.progressFill}
                        style={{
                            width: `${clamped}%`,
                            background: progressColors[color],
                        }}
                    />
                </div>
            </div>
            {onClose && (
                <button className={s.closeBtn} onClick={onClose} aria-label="Close">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   SimpleNotification
   ══════════════════════════════════════════════ */

export function SimpleNotification({
    title,
    description,
    color = "default",
    onClose,
    timestamp,
    className,
    inline,
}: SimpleNotificationProps) {
    return (
        <div className={cn(s.notification, inline && s.inline, className)}>
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                {description && <span className={s.description}>{description}</span>}
                {timestamp && <span className={s.timestamp}>{timestamp}</span>}
            </div>
            {onClose && (
                <button className={s.closeBtn} onClick={onClose} aria-label="Close">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            )}
        </div>
    );
}
