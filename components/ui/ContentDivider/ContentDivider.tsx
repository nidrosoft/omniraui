"use client";

import React from "react";
import { cn } from "@/lib/cn";
import s from "./ContentDivider.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type ContentDividerVariant = "single" | "dual" | "fill";
export type ContentDividerColor = "default" | "medium" | "strong" | "accent";
export type ContentDividerSize = "sm" | "md" | "lg";
export type ContentDividerAlign = "start" | "center" | "end";
export type ContentDividerOrientation = "horizontal" | "vertical";

export interface ContentDividerProps {
    /** Visual variant */
    variant?: ContentDividerVariant;
    /** Label text displayed in the center (or at alignment position) */
    label?: string;
    /** Icon element displayed instead of or alongside label */
    icon?: React.ReactNode;
    /** Children rendered in the label slot (overrides label + icon) */
    children?: React.ReactNode;
    /** Color intensity of the divider line */
    color?: ContentDividerColor;
    /** Size affects label font size and spacing */
    size?: ContentDividerSize;
    /** Alignment of the label when present */
    align?: ContentDividerAlign;
    /** Orientation of the divider */
    orientation?: ContentDividerOrientation;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

function SingleLine({ vertical }: { vertical?: boolean }) {
    return vertical ? <div className={s.lineVertical} /> : <hr className={s.line} />;
}

function DualLine({ vertical }: { vertical?: boolean }) {
    if (vertical) {
        return (
            <div className={s.dualLineWrapVertical}>
                <div className={s.dualLineVertical} />
                <div className={s.dualLineVertical} />
            </div>
        );
    }
    return (
        <div className={s.dualLineWrap}>
            <div className={s.dualLine} />
            <div className={s.dualLine} />
        </div>
    );
}

/* ══════════════════════════════════════════════
   ContentDivider
   ══════════════════════════════════════════════ */

export function ContentDivider({
    variant = "single",
    label,
    icon,
    children,
    color = "default",
    size = "md",
    align = "center",
    orientation = "horizontal",
    className,
}: ContentDividerProps) {
    const vertical = orientation === "vertical";
    const hasContent = !!(label || icon || children);

    const colorCls =
        color === "medium" ? s.colorMedium :
        color === "strong" ? s.colorStrong :
        color === "accent" ? s.colorAccent :
        s.colorDefault;

    const spacingCls =
        size === "sm" ? s.spacingSm :
        size === "lg" ? s.spacingLg :
        s.spacingMd;

    const labelSizeCls =
        size === "sm" ? s.labelSm :
        size === "lg" ? s.labelLg :
        undefined;

    /* ── Fill variant ── */
    if (variant === "fill") {
        const fillLabelSizeCls =
            size === "sm" ? s.fillLabelSm :
            size === "lg" ? s.fillLabelLg :
            undefined;

        return (
            <div
                className={cn(
                    s.fillDivider,
                    vertical && s.fillDividerVertical,
                    colorCls,
                    align === "start" && s.alignStart,
                    align === "center" && s.alignCenter,
                    align === "end" && s.alignEnd,
                    className,
                )}
                role="separator"
                aria-orientation={orientation}
            >
                {hasContent && (
                    children ?? (
                        <span className={cn(s.fillLabel, fillLabelSizeCls)}>
                            {icon && <span className={s.icon}>{icon}</span>}
                            {label}
                        </span>
                    )
                )}
            </div>
        );
    }

    /* ── Single / Dual line variants ── */
    const LineComponent = variant === "dual" ? DualLine : SingleLine;

    /* No content — just a line */
    if (!hasContent) {
        return (
            <div
                className={cn(
                    s.divider,
                    vertical && s.dividerVertical,
                    colorCls,
                    className,
                )}
                role="separator"
                aria-orientation={orientation}
            >
                <LineComponent vertical={vertical} />
            </div>
        );
    }

    /* With content — line + label + line */
    const contentNode = children ?? (
        <>
            {icon && <span className={s.icon}>{icon}</span>}
            {label && <span className={cn(s.label, labelSizeCls)}>{label}</span>}
        </>
    );

    if (align === "start") {
        return (
            <div
                className={cn(s.divider, vertical && s.dividerVertical, colorCls, spacingCls, className)}
                role="separator"
                aria-orientation={orientation}
            >
                {contentNode}
                <LineComponent vertical={vertical} />
            </div>
        );
    }

    if (align === "end") {
        return (
            <div
                className={cn(s.divider, vertical && s.dividerVertical, colorCls, spacingCls, className)}
                role="separator"
                aria-orientation={orientation}
            >
                <LineComponent vertical={vertical} />
                {contentNode}
            </div>
        );
    }

    /* Center (default) */
    return (
        <div
            className={cn(s.divider, vertical && s.dividerVertical, colorCls, spacingCls, className)}
            role="separator"
            aria-orientation={orientation}
        >
            <LineComponent vertical={vertical} />
            {contentNode}
            <LineComponent vertical={vertical} />
        </div>
    );
}
