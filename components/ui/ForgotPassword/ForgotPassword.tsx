"use client";

import React, { useState, useCallback } from "react";
import { Sms, Lock, Eye, EyeSlash, ArrowRight, ArrowLeft, TickCircle, Key } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./ForgotPassword.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type ForgotPasswordStep = "forgot" | "check-email" | "new-password" | "success";

export interface ForgotPasswordProps {
    /** Current step in the recovery flow */
    step?: ForgotPasswordStep;
    /** User's email address (shown in check-email step) */
    email?: string;
    /** Logo character or short text */
    logoText?: string;
    /** Custom logo element */
    logo?: React.ReactNode;
    /** Called when user submits email for password reset */
    onSubmitEmail?: (email: string) => Promise<void> | void;
    /** Called when user submits new password */
    onResetPassword?: (data: { password: string; confirmPassword: string }) => Promise<void> | void;
    /** Called when user clicks "Open email app" */
    onOpenEmail?: () => void;
    /** Called when user clicks "Resend email" */
    onResend?: () => Promise<void> | void;
    /** Called when user clicks "Back to login" */
    onBackToLogin?: () => void;
    /** Called when user clicks "Continue" on success */
    onContinue?: () => void;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Password strength helper
   ══════════════════════════════════════════════ */

function getPasswordStrength(pw: string): { level: number; label: string } {
    if (!pw) return { level: 0, label: "" };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (score <= 1) return { level: 1, label: "Weak" };
    if (score <= 2) return { level: 2, label: "Fair" };
    if (score <= 3) return { level: 3, label: "Good" };
    return { level: 4, label: "Strong" };
}

/* ══════════════════════════════════════════════
   ForgotPassword Component
   ══════════════════════════════════════════════ */

export function ForgotPassword({
    step = "forgot",
    email: emailProp = "",
    logoText = "O",
    logo,
    onSubmitEmail,
    onResetPassword,
    onOpenEmail,
    onResend,
    onBackToLogin,
    onContinue,
    className,
}: ForgotPasswordProps) {
    const [currentStep, setCurrentStep] = useState<ForgotPasswordStep>(step);
    const [email, setEmail] = useState(emailProp);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [showConfirmPw, setShowConfirmPw] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);

    React.useEffect(() => { setCurrentStep(step); }, [step]);

    const strength = getPasswordStrength(password);

    /* ── Step 1: Submit email ── */

    const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email) {
            setError("Please enter your email address.");
            return;
        }
        setLoading(true);
        try {
            await onSubmitEmail?.(email);
            setCurrentStep("check-email");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [email, onSubmitEmail]);

    /* ── Step 3: Set new password ── */

    const handlePasswordSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        try {
            await onResetPassword?.({ password, confirmPassword });
            setCurrentStep("success");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Reset failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [password, confirmPassword, onResetPassword]);

    /* ── Resend ── */

    const handleResend = useCallback(async () => {
        setResending(true);
        try { await onResend?.(); } finally { setResending(false); }
    }, [onResend]);

    /* ── Step 1: Forgot Password (enter email) ── */

    if (currentStep === "forgot") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.card}>
                    <div className={s.header}>
                        <div className={s.iconCircle}>
                            <Key size={28} variant="Bulk" color="currentColor" />
                        </div>
                        <h1 className={s.heading}>Forgot password?</h1>
                        <p className={s.subheading}>
                            No worries, we&apos;ll send you reset instructions.
                        </p>
                    </div>

                    <form className={s.form} onSubmit={handleEmailSubmit}>
                        {error && <div className={s.errorBanner}>{error}</div>}

                        <div className={s.fieldGroup}>
                            <label className={s.label}>Email</label>
                            <div className={s.inputWrap}>
                                <span className={s.inputIcon}>
                                    <Sms size={16} variant="Bulk" color="currentColor" />
                                </span>
                                <input
                                    className={s.input}
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <button type="submit" className={s.submitBtn} disabled={loading}>
                            {loading && <span className={s.spinner} />}
                            Reset password
                            {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                        </button>
                    </form>

                    <button type="button" className={s.backLink} onClick={onBackToLogin}>
                        <ArrowLeft size={14} variant="Linear" color="currentColor" />
                        Back to log in
                    </button>
                </div>
            </div>
        );
    }

    /* ── Step 2: Check Email ── */

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
                            We sent a password reset link to{" "}
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

                    <button type="button" className={s.backLink} onClick={onBackToLogin}>
                        <ArrowLeft size={14} variant="Linear" color="currentColor" />
                        Back to log in
                    </button>
                </div>
            </div>
        );
    }

    /* ── Step 3: Set New Password ── */

    if (currentStep === "new-password") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.card}>
                    <div className={s.header}>
                        <div className={s.iconCircle}>
                            <Lock size={28} variant="Bulk" color="currentColor" />
                        </div>
                        <h1 className={s.heading}>Set new password</h1>
                        <p className={s.subheading}>
                            Your new password must be different to previously used passwords.
                        </p>
                    </div>

                    <form className={s.form} onSubmit={handlePasswordSubmit}>
                        {error && <div className={s.errorBanner}>{error}</div>}

                        <div className={s.fieldGroup}>
                            <label className={s.label}>Password</label>
                            <div className={s.inputWrap}>
                                <span className={s.inputIcon}>
                                    <Lock size={16} variant="Bulk" color="currentColor" />
                                </span>
                                <input
                                    className={cn(s.input, s.inputTrailing)}
                                    type={showPw ? "text" : "password"}
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    className={s.eyeBtn}
                                    onClick={() => setShowPw(!showPw)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPw
                                        ? <EyeSlash size={16} variant="Linear" color="currentColor" />
                                        : <Eye size={16} variant="Linear" color="currentColor" />
                                    }
                                </button>
                            </div>
                            {password && (
                                <>
                                    <div className={s.strengthRow}>
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    s.strengthBar,
                                                    i <= strength.level && (
                                                        strength.level <= 1 ? s.weak :
                                                        strength.level <= 2 ? s.medium :
                                                        s.active
                                                    )
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <span className={s.strengthLabel}>
                                        Must be at least 8 characters — {strength.label}
                                    </span>
                                </>
                            )}
                        </div>

                        <div className={s.fieldGroup}>
                            <label className={s.label}>Confirm password</label>
                            <div className={s.inputWrap}>
                                <span className={s.inputIcon}>
                                    <Lock size={16} variant="Bulk" color="currentColor" />
                                </span>
                                <input
                                    className={cn(s.input, s.inputTrailing)}
                                    type={showConfirmPw ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    className={s.eyeBtn}
                                    onClick={() => setShowConfirmPw(!showConfirmPw)}
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPw
                                        ? <EyeSlash size={16} variant="Linear" color="currentColor" />
                                        : <Eye size={16} variant="Linear" color="currentColor" />
                                    }
                                </button>
                            </div>
                        </div>

                        <button type="submit" className={s.submitBtn} disabled={loading}>
                            {loading && <span className={s.spinner} />}
                            Reset password
                            {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                        </button>
                    </form>

                    <button type="button" className={s.backLink} onClick={onBackToLogin}>
                        <ArrowLeft size={14} variant="Linear" color="currentColor" />
                        Back to log in
                    </button>
                </div>
            </div>
        );
    }

    /* ── Step 4: Success ── */

    return (
        <div className={cn(s.wrapper, className)}>
            <div className={s.card}>
                <div className={s.header}>
                    <div className={s.successIcon}>
                        <TickCircle size={32} variant="Bulk" color="currentColor" />
                    </div>
                    <h1 className={s.heading}>Password reset</h1>
                    <p className={s.subheading}>
                        Your password has been successfully reset. Click below to log in.
                    </p>
                </div>

                <button
                    type="button"
                    className={s.submitBtn}
                    onClick={onContinue}
                >
                    Continue to log in
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
