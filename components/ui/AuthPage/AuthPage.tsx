"use client";

import React, { useState, useCallback } from "react";
import { Sms, Lock, Eye, EyeSlash, ArrowRight, User, Building, DirectboxNotif } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./AuthPage.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface AuthPageProps {
    /** Product/brand name shown in overlay text */
    productName?: string;
    /** Single character or short text for the overlay logo */
    logoText?: string;
    /** Custom logo element (replaces logoText) */
    logo?: React.ReactNode;
    /** Start on sign-up mode */
    defaultSignUp?: boolean;
    /** Callback on sign-in submit */
    onSignIn?: (data: { email: string; password: string }) => Promise<void> | void;
    /** Callback on sign-up submit */
    onSignUp?: (data: { fullName: string; companyName: string; email: string; password: string }) => Promise<void> | void;
    /** Callback on forgot password click */
    onForgotPassword?: () => void;
    /** Callback on social login click */
    onSocialLogin?: (provider: "google" | "facebook" | "linkedin") => void;
    /** Callback on success card primary CTA */
    onSuccessContinue?: () => void;
    /** Show company/practice name field in sign-up */
    showCompanyField?: boolean;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Social Icons (inline SVGs)
   ══════════════════════════════════════════════ */

function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M18 9a9 9 0 10-10.406 8.89v-6.29H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.176 2.014.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.6h-2.097v6.29A9.002 9.002 0 0018 9z"/>
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M15.335 15.339H12.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25H7.013V6.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM4.003 5.575a1.546 1.546 0 110-3.092 1.546 1.546 0 010 3.092zM5.34 15.339H2.666V6.75H5.34v8.589zM16.67 0H1.329C.593 0 0 .58 0 1.297v15.406C0 17.42.594 18 1.328 18h15.34c.734 0 1.332-.58 1.332-1.297V1.297C18 .58 17.402 0 16.67 0z"/>
        </svg>
    );
}

/* ══════════════════════════════════════════════
   AuthPage Component
   ══════════════════════════════════════════════ */

export function AuthPage({
    productName = "Omnira",
    logoText = "O",
    logo,
    defaultSignUp = false,
    onSignIn,
    onSignUp,
    onForgotPassword,
    onSocialLogin,
    onSuccessContinue,
    showCompanyField = true,
    className,
}: AuthPageProps) {
    /* ── Toggle state ── */
    const [isSignUp, setIsSignUp] = useState(defaultSignUp);

    /* ── Sign In state ── */
    const [siEmail, setSiEmail] = useState("");
    const [siPassword, setSiPassword] = useState("");
    const [siShowPw, setSiShowPw] = useState(false);
    const [siError, setSiError] = useState("");
    const [siLoading, setSiLoading] = useState(false);

    /* ── Sign Up state ── */
    const [suFullName, setSuFullName] = useState("");
    const [suCompany, setSuCompany] = useState("");
    const [suEmail, setSuEmail] = useState("");
    const [suPassword, setSuPassword] = useState("");
    const [suShowPw, setSuShowPw] = useState(false);
    const [suError, setSuError] = useState("");
    const [suLoading, setSuLoading] = useState(false);
    const [suSuccess, setSuSuccess] = useState(false);

    /* ── Handlers ── */

    const handleSignIn = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setSiError("");
        if (!siEmail || !siPassword) {
            setSiError("Please fill in all fields.");
            return;
        }
        setSiLoading(true);
        try {
            await onSignIn?.({ email: siEmail, password: siPassword });
        } catch (err: unknown) {
            setSiError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
        } finally {
            setSiLoading(false);
        }
    }, [siEmail, siPassword, onSignIn]);

    const handleSignUp = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setSuError("");
        if (!suFullName || !suEmail || !suPassword) {
            setSuError("Please fill in all required fields.");
            return;
        }
        if (suPassword.length < 8) {
            setSuError("Password must be at least 8 characters.");
            return;
        }
        setSuLoading(true);
        try {
            await onSignUp?.({ fullName: suFullName, companyName: suCompany, email: suEmail, password: suPassword });
            setSuSuccess(true);
        } catch (err: unknown) {
            setSuError(err instanceof Error ? err.message : "Sign up failed. Please try again.");
        } finally {
            setSuLoading(false);
        }
    }, [suFullName, suCompany, suEmail, suPassword, onSignUp]);

    const handleToggle = useCallback(() => {
        setIsSignUp((prev) => !prev);
    }, []);

    const handleBackToSignIn = useCallback(() => {
        setSuSuccess(false);
        setIsSignUp(false);
    }, []);

    /* ── Success State ── */
    if (suSuccess) {
        return (
            <div className={s.successOverlay}>
                <div className={s.successCard}>
                    <div className={s.successIcon}>
                        <DirectboxNotif size={28} variant="Bulk" color="currentColor" />
                    </div>
                    <h2 className={s.successHeading}>Check your email</h2>
                    <p className={s.successBody}>
                        We&apos;ve sent a verification link to <strong>{suEmail}</strong>. Click the link to activate your account.
                    </p>
                    <button type="button" className={s.successPrimary} onClick={onSuccessContinue}>
                        Continue to Setup
                    </button>
                    <button type="button" className={s.successGhost} onClick={handleBackToSignIn}>
                        Back to Sign In
                    </button>
                </div>
            </div>
        );
    }

    /* ── Main Render ── */
    return (
        <div className={cn(s.wrapper, className)}>
            <div className={s.track}>

                {/* ════ Sign In Form (Left) ════ */}
                <form
                    className={cn(
                        s.formPanel,
                        s.formPanelLeft,
                        !isSignUp ? s.formVisible : s.formHidden,
                    )}
                    onSubmit={handleSignIn}
                >
                    <div className={s.formInner}>
                        <h1 className={s.formHeading}>Sign In</h1>

                        <div className={s.socialRow}>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("google")} aria-label="Sign in with Google">
                                <GoogleIcon />
                            </button>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("facebook")} aria-label="Sign in with Facebook">
                                <FacebookIcon />
                            </button>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("linkedin")} aria-label="Sign in with LinkedIn">
                                <LinkedInIcon />
                            </button>
                        </div>

                        <div className={s.divider}>or use your account</div>

                        {siError && <div className={s.errorBanner}>{siError}</div>}

                        <div className={s.inputGroup}>
                            <span className={s.inputIcon}><Sms size={16} variant="Bulk" color="currentColor" /></span>
                            <input
                                className={s.input}
                                type="email"
                                placeholder="Email"
                                value={siEmail}
                                onChange={(e) => setSiEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>

                        <div className={s.inputGroup}>
                            <span className={s.inputIcon}><Lock size={16} variant="Bulk" color="currentColor" /></span>
                            <input
                                className={cn(s.input, s.inputTrailing)}
                                type={siShowPw ? "text" : "password"}
                                placeholder="Password"
                                value={siPassword}
                                onChange={(e) => setSiPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <button type="button" className={s.eyeBtn} onClick={() => setSiShowPw(!siShowPw)} aria-label="Toggle password visibility">
                                {siShowPw ? <EyeSlash size={16} variant="Linear" color="currentColor" /> : <Eye size={16} variant="Linear" color="currentColor" />}
                            </button>
                        </div>

                        <button type="button" className={s.forgotLink} onClick={onForgotPassword}>
                            Forgot your password?
                        </button>

                        <button type="submit" className={s.submitBtn} disabled={siLoading}>
                            {siLoading && <span className={s.spinner} />}
                            Sign In
                            {!siLoading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                        </button>

                        <div className={s.mobileToggle}>
                            Don&apos;t have an account?
                            <button type="button" className={s.mobileToggleBtn} onClick={handleToggle}>Sign Up</button>
                        </div>
                    </div>
                </form>

                {/* ════ Sign Up Form (Right) ════ */}
                <form
                    className={cn(
                        s.formPanel,
                        s.formPanelRight,
                        isSignUp ? s.formVisible : s.formHidden,
                    )}
                    onSubmit={handleSignUp}
                >
                    <div className={s.formInner}>
                        <h1 className={s.formHeading}>Create Account</h1>

                        <div className={s.socialRow}>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("google")} aria-label="Sign up with Google">
                                <GoogleIcon />
                            </button>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("facebook")} aria-label="Sign up with Facebook">
                                <FacebookIcon />
                            </button>
                            <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("linkedin")} aria-label="Sign up with LinkedIn">
                                <LinkedInIcon />
                            </button>
                        </div>

                        <div className={s.divider}>or use your email for registration</div>

                        {suError && <div className={s.errorBanner}>{suError}</div>}

                        <div className={s.inputGroup}>
                            <span className={s.inputIcon}><User size={16} variant="Bulk" color="currentColor" /></span>
                            <input
                                className={s.input}
                                type="text"
                                placeholder="Full Name"
                                value={suFullName}
                                onChange={(e) => setSuFullName(e.target.value)}
                                autoComplete="name"
                            />
                        </div>

                        {showCompanyField && (
                            <div className={s.inputGroup}>
                                <span className={s.inputIcon}><Building size={16} variant="Bulk" color="currentColor" /></span>
                                <input
                                    className={s.input}
                                    type="text"
                                    placeholder="Company / Practice Name"
                                    value={suCompany}
                                    onChange={(e) => setSuCompany(e.target.value)}
                                    autoComplete="organization"
                                />
                            </div>
                        )}

                        <div className={s.inputGroup}>
                            <span className={s.inputIcon}><Sms size={16} variant="Bulk" color="currentColor" /></span>
                            <input
                                className={s.input}
                                type="email"
                                placeholder="Email"
                                value={suEmail}
                                onChange={(e) => setSuEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>

                        <div className={s.inputGroup}>
                            <span className={s.inputIcon}><Lock size={16} variant="Bulk" color="currentColor" /></span>
                            <input
                                className={cn(s.input, s.inputTrailing)}
                                type={suShowPw ? "text" : "password"}
                                placeholder="Password (min. 8 characters)"
                                value={suPassword}
                                onChange={(e) => setSuPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                            <button type="button" className={s.eyeBtn} onClick={() => setSuShowPw(!suShowPw)} aria-label="Toggle password visibility">
                                {suShowPw ? <EyeSlash size={16} variant="Linear" color="currentColor" /> : <Eye size={16} variant="Linear" color="currentColor" />}
                            </button>
                        </div>

                        <button type="submit" className={s.submitBtn} disabled={suLoading}>
                            {suLoading && <span className={s.spinner} />}
                            Sign Up
                            {!suLoading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                        </button>

                        <div className={s.mobileToggle}>
                            Already have an account?
                            <button type="button" className={s.mobileToggleBtn} onClick={handleToggle}>Sign In</button>
                        </div>
                    </div>
                </form>

                {/* ════ Sliding Overlay Panel ════ */}
                <div className={cn(s.overlay, isSignUp ? s.overlayLeft : s.overlayRight)}>
                    <div className={s.circle1} />
                    <div className={s.circle2} />
                    <div className={s.circle3} />

                    <div className={s.overlayLogo}>
                        {logo ?? logoText}
                    </div>

                    <h2 className={s.overlayHeading}>
                        {isSignUp ? "Welcome Back!" : "Hey There!"}
                    </h2>
                    <p className={s.overlaySubtext}>
                        {isSignUp
                            ? "Stay connected with your practice. Sign in with your credentials to continue."
                            : `Begin your journey with ${productName}. Create an account and transform your practice today.`
                        }
                    </p>
                    <button type="button" className={s.overlayCta} onClick={handleToggle}>
                        {isSignUp ? "SIGN IN" : "SIGN UP"}
                    </button>
                </div>

            </div>
        </div>
    );
}
