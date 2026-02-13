"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Illustration.module.css";

export interface IllustrationProps {
    type?: "cloud" | "empty" | "error" | "success" | "search" | "lock";
    size?: "sm" | "md" | "lg";
    className?: string;
}

const sizeDims: Record<string, number> = {
    sm: 120,
    md: 200,
    lg: 280,
};

export const Illustration = forwardRef<HTMLDivElement, IllustrationProps>(
    ({ type = "cloud", size = "md", className }, ref) => {
        const dim = sizeDims[size];

        return (
            <div
                ref={ref}
                className={cn(styles.wrap, className)}
                style={{ width: dim, height: dim }}
            >
                <svg
                    width={dim}
                    height={dim}
                    viewBox="0 0 200 200"
                    fill="none"
                    className={styles.svg}
                >
                    {illustrationPaths[type]}
                </svg>
            </div>
        );
    },
);

Illustration.displayName = "Illustration";

const illustrationPaths: Record<string, React.ReactNode> = {
    cloud: (
        <>
            <circle cx="100" cy="130" r="50" className="illustrationBg" fill="var(--color-bg-elevated)" />
            <path d="M60 120C60 98 78 80 100 80C118 80 133 92 137 108C137 108 155 110 155 128C155 142 144 150 132 150H68C56 150 48 140 48 130C48 120 56 112 66 112" className="illustrationStroke" stroke="var(--color-lime)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M90 125L100 115L110 125" stroke="var(--color-lime)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="100" y1="115" x2="100" y2="140" stroke="var(--color-lime)" strokeWidth="3" strokeLinecap="round" />
        </>
    ),
    empty: (
        <>
            <circle cx="100" cy="110" r="60" fill="var(--color-bg-elevated)" />
            <rect x="70" y="75" width="60" height="70" rx="6" stroke="var(--color-text-tertiary)" strokeWidth="3" fill="none" />
            <line x1="82" y1="95" x2="118" y2="95" stroke="var(--color-text-tertiary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="82" y1="105" x2="110" y2="105" stroke="var(--color-text-tertiary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="82" y1="115" x2="100" y2="115" stroke="var(--color-text-tertiary)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="100" cy="160" r="4" fill="var(--color-text-tertiary)" opacity="0.4" />
            <circle cx="115" cy="165" r="2.5" fill="var(--color-text-tertiary)" opacity="0.3" />
            <circle cx="85" cy="163" r="3" fill="var(--color-text-tertiary)" opacity="0.25" />
        </>
    ),
    error: (
        <>
            <circle cx="100" cy="110" r="60" fill="var(--color-bg-elevated)" />
            <circle cx="100" cy="105" r="35" stroke="#ef4444" strokeWidth="4" fill="none" />
            <line x1="100" y1="88" x2="100" y2="108" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="118" r="2.5" fill="#ef4444" />
        </>
    ),
    success: (
        <>
            <circle cx="100" cy="110" r="60" fill="var(--color-bg-elevated)" />
            <circle cx="100" cy="105" r="35" stroke="var(--color-lime)" strokeWidth="4" fill="none" />
            <path d="M85 105L95 115L115 95" stroke="var(--color-lime)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
    ),
    search: (
        <>
            <circle cx="100" cy="110" r="60" fill="var(--color-bg-elevated)" />
            <circle cx="95" cy="100" r="25" stroke="var(--color-text-tertiary)" strokeWidth="4" fill="none" />
            <line x1="113" y1="118" x2="128" y2="133" stroke="var(--color-text-tertiary)" strokeWidth="4" strokeLinecap="round" />
        </>
    ),
    lock: (
        <>
            <circle cx="100" cy="110" r="60" fill="var(--color-bg-elevated)" />
            <rect x="80" y="100" width="40" height="32" rx="4" stroke="var(--color-text-tertiary)" strokeWidth="3.5" fill="none" />
            <path d="M88 100V92C88 85 93 80 100 80C107 80 112 85 112 92V100" stroke="var(--color-text-tertiary)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <circle cx="100" cy="114" r="3" fill="var(--color-text-tertiary)" />
        </>
    ),
};
