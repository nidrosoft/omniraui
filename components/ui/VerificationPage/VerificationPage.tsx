"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { Sms, ArrowRight, ArrowLeft, TickCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./VerificationPage.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type VerificationStep = "check-email" | "enter-code" | "success";

export interface VerificationPageProps {
    /** Current step in the verification flow */
    step?: VerificationStep;
    /** User's email address to display */
    email?: string;
    /** Number of OTP digits */
    codeLength?: number;
    /** Logo character or short text */
    logoText?: string;
    /** Custom logo element (replaces logoText) */
    logo?: React.ReactNode;
    /** Called when user submits the verification code */
    onVerify?: (code: string) => Promise<void> | void;
    /** Called when user clicks "Resend email" */
    onResend?: () => Promise<void> | void;
    /** Called when user clicks "Open email app" */
    onOpenEmail?: () => void;
    /** Called when user clicks "Back to login" */
    onBackToLogin?: () => void;
    /** Called on success — "Continue" button */
    onContinue?: () => void;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   VerificationPage Component
   ══════════════════════════════════════════════ */

export function VerificationPage({
    step = "check-email",
    email = "olivia@example.com",
    codeLength = 6,
    logoText = "O",
    logo,
    onVerify,
    onResend,
    onOpenEmail,
    onBackToLogin,
    onContinue,
    className,
}: VerificationPageProps) {
    const [currentStep, setCurrentStep] = useState<VerificationStep>(step);
    const [code, setCode] = useState<string[]>(Array(codeLength).fill(""));
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        setCurrentStep(step);
    }, [step]);

    /* ── OTP input handlers ── */

    const handleCodeChange = useCallback((index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const next = [...code];
        next[index] = value.slice(-1);
        setCode(next);
        setError("");

        if (value && index < codeLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    }, [code, codeLength]);

    const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    }, [code]);

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, codeLength);
        if (!pasted) return;
        const next = [...code];
        for (let i = 0; i < pasted.length; i++) {
            next[i] = pasted[i];
        }
        setCode(next);
        const focusIdx = Math.min(pasted.length, codeLength - 1);
        inputRefs.current[focusIdx]?.focus();
    }, [code, codeLength]);

    /* ── Verify code ── */

    const handleVerify = useCallback(async () => {
        const fullCode = code.join("");
        if (fullCode.length < codeLength) {
            setError("Please enter the full verification code.");
            return;
        }
        setLoading(true);
        setError("");
        try {
            await onVerify?.(fullCode);
            setCurrentStep("success");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Invalid code. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [code, codeLength, onVerify]);

    /* ── Resend ── */

    const handleResend = useCallback(async () => {
        setResending(true);
        try {
            await onResend?.();
        } finally {
            setResending(false);
        }
    }, [onResend]);

    /* ── Step 1: Check Email ── */

    if (currentStep === "check-email") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.card}>
                    <div className={s.header}>
                        <div className={s.iconCircle}>
                            <Sms size={28} variant="Bulk" color="currentColor" />
                        </div>
                        <h1 className={s.heading}>Check your email</h1>
                        <p className={s.subheading}>
                            We sent a verification link to{" "}
                            <span className={s.emailHighlight}>{email}</span>
                        </p>
                    </div>

                    <button
                        type="button"
                        className={s.submitBtn}
                        onClick={onOpenEmail}
                    >
                        Open email app
                        <ArrowRight size={18} variant="Linear" color="currentColor" />
                    </button>

                    <div className={s.resendRow}>
                        Didn&apos;t receive the email?{" "}
                        <button
                            type="button"
                            className={s.resendBtn}
                            onClick={handleResend}
                            disabled={resending}
                        >
                            Click to resend
                        </button>
                    </div>

                    <button
                        type="button"
                        className={s.backLink}
                        onClick={() => setCurrentStep("enter-code")}
                    >
                        Enter code manually
                        <ArrowRight size={14} variant="Linear" color="currentColor" />
                    </button>

                    <button type="button" className={s.backLink} onClick={onBackToLogin}>
                        <ArrowLeft size={14} variant="Linear" color="currentColor" />
                        Back to log in
                    </button>
                </div>
            </div>
        );
    }

    /* ── Step 2: Enter Code ── */

    if (currentStep === "enter-code") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.card}>
                    <div className={s.header}>
                        <div className={s.iconCircle}>
                            <Sms size={28} variant="Bulk" color="currentColor" />
                        </div>
                        <h1 className={s.heading}>Enter verification code</h1>
                        <p className={s.subheading}>
                            Enter the {codeLength}-digit code sent to{" "}
                            <span className={s.emailHighlight}>{email}</span>
                        </p>
                    </div>

                    {error && <div className={s.errorBanner}>{error}</div>}

                    <div className={s.codeRow} onPaste={handlePaste}>
                        {Array.from({ length: codeLength }).map((_, i) => (
                            <input
                                key={i}
                                ref={(el) => { inputRefs.current[i] = el; }}
                                className={s.codeInput}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={code[i]}
                                onChange={(e) => handleCodeChange(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                autoFocus={i === 0}
                                aria-label={`Digit ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className={s.submitBtn}
                        onClick={handleVerify}
                        disabled={loading}
                    >
                        {loading && <span className={s.spinner} />}
                        Verify email
                        {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                    </button>

                    <div className={s.resendRow}>
                        Didn&apos;t receive the code?{" "}
                        <button
                            type="button"
                            className={s.resendBtn}
                            onClick={handleResend}
                            disabled={resending}
                        >
                            Click to resend
                        </button>
                    </div>

                    <button type="button" className={s.backLink} onClick={onBackToLogin}>
                        <ArrowLeft size={14} variant="Linear" color="currentColor" />
                        Back to log in
                    </button>
                </div>
            </div>
        );
    }

    /* ── Step 3: Success ── */

    return (
        <div className={cn(s.wrapper, className)}>
            <div className={s.card}>
                <div className={s.header}>
                    <div className={s.successIcon}>
                        <TickCircle size={32} variant="Bulk" color="currentColor" />
                    </div>
                    <h1 className={s.heading}>Email verified</h1>
                    <p className={s.successText}>
                        Your email has been successfully verified. You can now continue to use the application.
                    </p>
                </div>

                <button
                    type="button"
                    className={s.submitBtn}
                    onClick={onContinue}
                >
                    Continue
                    <ArrowRight size={18} variant="Linear" color="currentColor" />
                </button>

                <button type="button" className={s.backLink} onClick={onBackToLogin}>
                    <ArrowLeft size={14} variant="Linear" color="currentColor" />
                    Back to log in
                </button>
            </div>
        </div>
    );
}
