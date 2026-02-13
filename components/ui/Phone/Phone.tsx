"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Phone.module.css";

export interface PhoneProps {
    address?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Phone = forwardRef<HTMLDivElement, PhoneProps>(
    ({ address, children, className }, ref) => {
        return (
            <div ref={ref} className={cn(styles.phone, className)}>
                {/* Frame */}
                <div className={styles.frame}>
                    {/* Notch / Dynamic Island */}
                    <div className={styles.notch}>
                        <div className={styles.notchPill} />
                    </div>

                    {/* Screen */}
                    <div className={styles.screen}>
                        {children}
                    </div>

                    {/* Bottom bar with address */}
                    {address && (
                        <div className={styles.bottomBar}>
                            <button className={styles.bottomNavBtn} aria-label="Back">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </button>
                            <div className={styles.addressPill}>
                                <span className={styles.addressText}>{address}</span>
                            </div>
                            <button className={styles.bottomNavBtn} aria-label="More">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="4" cy="8" r="1.2" fill="currentColor"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/><circle cx="12" cy="8" r="1.2" fill="currentColor"/></svg>
                            </button>
                        </div>
                    )}

                    {/* Home indicator */}
                    <div className={styles.homeIndicator}>
                        <div className={styles.homeBar} />
                    </div>
                </div>
            </div>
        );
    },
);

Phone.displayName = "Phone";
