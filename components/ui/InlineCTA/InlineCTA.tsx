import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./InlineCTA.module.css";

export interface InlineCTAProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Variant */
    variant?: "default" | "brand" | "subtle" | "bordered";
    /** Icon or image on the left */
    icon?: React.ReactNode;
    /** Title text */
    title: string;
    /** Description text */
    description?: string;
    /** Action area (buttons) */
    actions?: React.ReactNode;
    /** Dismissible */
    dismissible?: boolean;
    /** Called when dismissed */
    onDismiss?: () => void;
}

export const InlineCTA = forwardRef<HTMLDivElement, InlineCTAProps>(
    (
        {
            variant = "default",
            icon,
            title,
            description,
            actions,
            dismissible,
            onDismiss,
            className,
            ...props
        },
        ref
    ) => (
        <div
            ref={ref}
            className={cn(styles.root, styles[variant], className)}
            {...props}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                {description && <p className={styles.description}>{description}</p>}
            </div>
            {actions && <div className={styles.actions}>{actions}</div>}
            {dismissible && (
                <button className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            )}
        </div>
    )
);

InlineCTA.displayName = "InlineCTA";
