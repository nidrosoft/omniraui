"use client";

import { useState, useCallback, useRef, useEffect, forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Slider.module.css";

export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    label?: string;
    hint?: string;
    showValue?: boolean;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
    (
        {
            min = 0,
            max = 100,
            step = 1,
            value: controlledValue,
            defaultValue = 0,
            onChange,
            label,
            hint,
            showValue = true,
            size = "md",
            disabled = false,
            className,
        },
        ref,
    ) => {
        const isControlled = controlledValue !== undefined;
        const [internalValue, setInternalValue] = useState(defaultValue);
        const value = isControlled ? controlledValue : internalValue;
        const pct = ((value - min) / (max - min)) * 100;

        const trackRef = useRef<HTMLDivElement>(null);
        const dragging = useRef(false);

        const updateValue = useCallback(
            (clientX: number) => {
                const track = trackRef.current;
                if (!track || disabled) return;
                const rect = track.getBoundingClientRect();
                let ratio = (clientX - rect.left) / rect.width;
                ratio = Math.max(0, Math.min(1, ratio));
                let newVal = min + ratio * (max - min);
                newVal = Math.round(newVal / step) * step;
                newVal = Math.max(min, Math.min(max, newVal));
                if (!isControlled) setInternalValue(newVal);
                onChange?.(newVal);
            },
            [min, max, step, disabled, isControlled, onChange],
        );

        const handlePointerDown = useCallback(
            (e: React.PointerEvent) => {
                if (disabled) return;
                dragging.current = true;
                (e.target as HTMLElement).setPointerCapture(e.pointerId);
                updateValue(e.clientX);
            },
            [disabled, updateValue],
        );

        const handlePointerMove = useCallback(
            (e: React.PointerEvent) => {
                if (!dragging.current) return;
                updateValue(e.clientX);
            },
            [updateValue],
        );

        const handlePointerUp = useCallback(() => {
            dragging.current = false;
        }, []);

        return (
            <div ref={ref} className={cn(styles.wrapper, disabled && styles.wrapperDisabled, className)}>
                {(label || (showValue && label)) && (
                    <div className={styles.header}>
                        {label && <span className={styles.label}>{label}</span>}
                        {showValue && <span className={styles.valueText}>{value}</span>}
                    </div>
                )}
                {hint && <span className={styles.hint}>{hint}</span>}
                <div
                    ref={trackRef}
                    className={cn(styles.track, styles[`track_${size}`])}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                >
                    <div className={styles.fill} style={{ width: `${pct}%` }} />
                    <div
                        className={cn(styles.thumb, styles[`thumb_${size}`])}
                        style={{ left: `${pct}%` }}
                    />
                </div>
                {!label && showValue && (
                    <div className={styles.header}>
                        <span className={styles.valueText}>{value}</span>
                    </div>
                )}
            </div>
        );
    },
);

Slider.displayName = "Slider";
