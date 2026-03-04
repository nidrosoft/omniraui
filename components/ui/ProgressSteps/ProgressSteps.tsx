"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { TickCircle } from "iconsax-react";
import styles from "./ProgressSteps.module.css";

export interface ProgressStep {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: ProgressStep[];
    /** Current active step (0-indexed) */
    currentStep: number;
    /** Layout direction */
    direction?: "horizontal" | "vertical";
    /** Visual variant */
    variant?: "icon" | "number" | "minimal" | "line";
    /** Size */
    size?: "sm" | "md";
}

export const ProgressSteps = forwardRef<HTMLDivElement, ProgressStepsProps>(
    (
        {
            steps,
            currentStep,
            direction = "horizontal",
            variant = "icon",
            size = "md",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    styles.root,
                    styles[direction],
                    styles[`variant-${variant}`],
                    styles[size],
                    className
                )}
                {...props}
            >
                {variant === "minimal" ? (
                    <div className={styles.minimalWrapper}>
                        <div className={styles.minimalDots}>
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        styles.minimalDot,
                                        i < currentStep && styles.completed,
                                        i === currentStep && styles.active
                                    )}
                                />
                            ))}
                        </div>
                        <span className={styles.minimalText}>
                            Step {currentStep + 1} of {steps.length}
                        </span>
                    </div>
                ) : variant === "line" ? (
                    <div className={styles.lineWrapper}>
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={cn(
                                    styles.lineStep,
                                    i < currentStep && styles.completed,
                                    i === currentStep && styles.active
                                )}
                            >
                                <div className={styles.lineBar} />
                                <span className={styles.lineTitle}>{step.title}</span>
                                {step.description && (
                                    <span className={styles.lineDesc}>{step.description}</span>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    steps.map((step, i) => {
                        const isCompleted = i < currentStep;
                        const isActive = i === currentStep;

                        return (
                            <div
                                key={i}
                                className={cn(
                                    styles.step,
                                    isCompleted && styles.completed,
                                    isActive && styles.active
                                )}
                            >
                                {/* Indicator */}
                                <div className={styles.indicator}>
                                    {isCompleted ? (
                                        <TickCircle size={size === "sm" ? 20 : 24} variant="Bulk" />
                                    ) : variant === "number" ? (
                                        <span className={styles.number}>{i + 1}</span>
                                    ) : step.icon ? (
                                        <span className={styles.stepIcon}>{step.icon}</span>
                                    ) : (
                                        <span className={styles.number}>{i + 1}</span>
                                    )}
                                </div>

                                {/* Connector (not for last item) */}
                                {i < steps.length - 1 && <div className={styles.connector} />}

                                {/* Text */}
                                <div className={styles.stepText}>
                                    <span className={styles.stepTitle}>{step.title}</span>
                                    {step.description && (
                                        <span className={styles.stepDesc}>{step.description}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        );
    }
);

ProgressSteps.displayName = "ProgressSteps";
