"use client";

import { useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

/* ── Types ── */

export interface ModalProps {
    /** Whether the modal is open */
    open: boolean;
    /** Callback when the modal should close */
    onClose: () => void;
    /** Modal width preset */
    size?: "sm" | "md" | "lg" | "xl" | "full";
    /** Optional title rendered in the header */
    title?: string;
    /** Optional description below the title */
    description?: string;
    /** Optional icon or illustration above the title */
    icon?: React.ReactNode;
    /** Footer content (typically action buttons) */
    footer?: React.ReactNode;
    /** Whether clicking the overlay closes the modal */
    closeOnOverlay?: boolean;
    /** Whether pressing Escape closes the modal */
    closeOnEscape?: boolean;
    /** Hide the close (X) button */
    hideClose?: boolean;
    /** Visual intent for the icon container */
    intent?: "default" | "warning" | "destructive" | "success";
    /** Additional class for the panel */
    className?: string;
    /** Modal body content */
    children?: React.ReactNode;
}

/* ── Component ── */

export function Modal({
    open,
    onClose,
    size = "md",
    title,
    description,
    icon,
    footer,
    closeOnOverlay = true,
    closeOnEscape = true,
    hideClose = false,
    intent = "default",
    className,
    children,
}: ModalProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    /* Escape key handler */
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (closeOnEscape && e.key === "Escape") onClose();
        },
        [closeOnEscape, onClose],
    );

    useEffect(() => {
        if (!open) return;
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={closeOnOverlay ? onClose : undefined}>
            <div
                ref={panelRef}
                className={cn(
                    styles.panel,
                    styles[`size-${size}`],
                    className,
                )}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                {/* Close button */}
                {!hideClose && (
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                )}

                {/* Icon */}
                {icon && (
                    <div className={cn(styles.iconContainer, styles[`intent-${intent}`])}>
                        {icon}
                    </div>
                )}

                {/* Header */}
                {(title || description) && (
                    <div className={styles.header}>
                        {title && <h2 id="modal-title" className={styles.title}>{title}</h2>}
                        {description && <p className={styles.description}>{description}</p>}
                    </div>
                )}

                {/* Body */}
                {children && <div className={styles.body}>{children}</div>}

                {/* Footer */}
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
}
