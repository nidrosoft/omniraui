"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/cn";
import s from "./LoadingIndicator.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type LoadingVariant = "line" | "spinner" | "dotCircle" | "dotBounce" | "pulse";
export type LoadingSize = "sm" | "md" | "lg";
export type LoadingColor = "lime" | "white" | "info" | "success" | "warning" | "error";

export interface LoadingIndicatorProps {
    /** Visual variant */
    variant?: LoadingVariant;
    /** Size of the indicator */
    size?: LoadingSize;
    /** Accent color */
    color?: LoadingColor;
    /** Label text displayed alongside the indicator */
    label?: string;
    /** For line variant: determinate progress value 0–100. Omit for indeterminate. */
    value?: number;
    /** Place label inline (row) instead of below (column) */
    inline?: boolean;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

function getColorCls(color: LoadingColor) {
    switch (color) {
        case "lime": return s.colorLime;
        case "white": return s.colorWhite;
        case "info": return s.colorInfo;
        case "success": return s.colorSuccess;
        case "warning": return s.colorWarning;
        case "error": return s.colorError;
        default: return s.colorLime;
    }
}

/* ══════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════ */

/* ── Line Simple ── */

function LineIndicator({
    size = "md",
    value,
    label,
}: {
    size: LoadingSize;
    value?: number;
    label?: string;
}) {
    const trackCls = size === "sm" ? s.lineTrackSm : size === "lg" ? s.lineTrackLg : s.lineTrackMd;
    const isDeterminate = typeof value === "number";

    if (label || isDeterminate) {
        const labelCls = size === "sm" ? s.lineLabelSm : size === "lg" ? s.lineLabelLg : undefined;
        const percentCls = size === "sm" ? s.linePercentSm : size === "lg" ? s.linePercentLg : undefined;
        const wrapperCls = size === "sm" ? s.lineWrapperSm : size === "lg" ? s.lineWrapperLg : undefined;

        return (
            <div className={cn(s.lineWrapper, wrapperCls)}>
                {(label || isDeterminate) && (
                    <div className={s.lineLabelRow}>
                        {label && <span className={cn(s.lineLabel, labelCls)}>{label}</span>}
                        {isDeterminate && (
                            <span className={cn(s.linePercent, percentCls)}>
                                {Math.round(Math.min(100, Math.max(0, value)))}%
                            </span>
                        )}
                    </div>
                )}
                <div className={cn(s.lineTrack, trackCls)}>
                    {isDeterminate ? (
                        <div
                            className={s.lineFillDeterminate}
                            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
                        />
                    ) : (
                        <div className={s.lineFillIndeterminate} />
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={cn(s.lineTrack, trackCls)}>
            <div className={s.lineFillIndeterminate} />
        </div>
    );
}

/* ── Spinner ── */

function SpinnerIndicator({ size = "md" }: { size: LoadingSize }) {
    const sizeCls = size === "sm" ? s.spinnerSm : size === "lg" ? s.spinnerLg : s.spinnerMd;
    return <div className={cn(s.spinner, sizeCls)} />;
}

/* ── Dot Circle ── */

function DotCircleIndicator({ size = "md" }: { size: LoadingSize }) {
    const containerCls = size === "sm" ? s.dotCircleSm : size === "lg" ? s.dotCircleLg : s.dotCircleMd;
    const dotCls = size === "sm" ? s.dotSm : size === "lg" ? s.dotLg : s.dotMd;
    const radius = size === "sm" ? 8 : size === "lg" ? 16 : 11;

    const dots = useMemo(() => {
        const count = 8;
        return Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return { x, y, delay: `${(i / count) * 1.2}s` };
        });
    }, [radius]);

    return (
        <div className={cn(s.dotCircle, containerCls)}>
            {dots.map((d, i) => (
                <div
                    key={i}
                    className={cn(s.dot, dotCls)}
                    style={{
                        left: `calc(50% + ${d.x}px - ${size === "sm" ? 1.5 : size === "lg" ? 3 : 2}px)`,
                        top: `calc(50% + ${d.y}px - ${size === "sm" ? 1.5 : size === "lg" ? 3 : 2}px)`,
                        animationDelay: d.delay,
                    }}
                />
            ))}
        </div>
    );
}

/* ── Dot Bounce ── */

function DotBounceIndicator({ size = "md" }: { size: LoadingSize }) {
    const containerCls = size === "sm" ? s.dotBounceSm : size === "lg" ? s.dotBounceLg : undefined;
    const dotCls = size === "sm" ? s.bounceDotSm : size === "lg" ? s.bounceDotLg : s.bounceDotMd;

    return (
        <div className={cn(s.dotBounce, containerCls)}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={cn(s.bounceDot, dotCls)}
                    style={{ animationDelay: `${i * 0.16}s` }}
                />
            ))}
        </div>
    );
}

/* ── Pulse ── */

function PulseIndicator({ size = "md" }: { size: LoadingSize }) {
    const sizeCls = size === "sm" ? s.pulseSm : size === "lg" ? s.pulseLg : s.pulseMd;
    return <div className={cn(s.pulse, sizeCls)} />;
}

/* ══════════════════════════════════════════════
   LoadingIndicator (main)
   ══════════════════════════════════════════════ */

export function LoadingIndicator({
    variant = "spinner",
    size = "md",
    color = "lime",
    label,
    value,
    inline = false,
    className,
}: LoadingIndicatorProps) {
    const colorCls = getColorCls(color);

    /* Line variant handles its own label layout */
    if (variant === "line") {
        return (
            <div className={cn(colorCls, className)} style={{ width: "100%" }}>
                <LineIndicator size={size} value={value} label={label} />
            </div>
        );
    }

    /* All other variants */
    const indicator = (() => {
        switch (variant) {
            case "spinner": return <SpinnerIndicator size={size} />;
            case "dotCircle": return <DotCircleIndicator size={size} />;
            case "dotBounce": return <DotBounceIndicator size={size} />;
            case "pulse": return <PulseIndicator size={size} />;
            default: return <SpinnerIndicator size={size} />;
        }
    })();

    const labelSizeCls = size === "sm" ? s.labelSm : size === "lg" ? s.labelLg : undefined;

    if (!label) {
        return (
            <div className={cn(s.wrapper, colorCls, className)} role="status" aria-label="Loading">
                {indicator}
            </div>
        );
    }

    return (
        <div
            className={cn(s.wrapper, inline && s.wrapperInline, colorCls, className)}
            role="status"
            aria-label={label}
        >
            {indicator}
            <span className={cn(s.label, labelSizeCls)}>{label}</span>
        </div>
    );
}
