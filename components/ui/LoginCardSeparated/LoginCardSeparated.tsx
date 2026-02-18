"use client";

import React, { useState, useCallback } from "react";
import { Sms, Lock, Eye, EyeSlash, ArrowRight, User } from "iconsax-react";
import { cn } from "@/lib/cn";
import { Checkbox } from "@/components/ui/Checkbox";
import s from "./LoginCardSeparated.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface LoginCardSeparatedProps {
    /** Product/brand name */
    productName?: string;
    /** Single character or short text for the logo */
    logoText?: string;
    /** Custom logo element (replaces logoText) */
    logo?: React.ReactNode;
    /** Heading text */
    heading?: string;
    /** Subheading text */
    subheading?: string;
    /** Sign-up heading text */
    signUpHeading?: string;
    /** Sign-up subheading text */
    signUpSubheading?: string;
    /** Show social login buttons */
    showSocial?: boolean;
    /** Show "Remember me" checkbox */
    showRememberMe?: boolean;
    /** Start on sign-up view */
    defaultSignUp?: boolean;
    /** Callback on sign-in submit */
    onSignIn?: (data: { email: string; password: string; rememberMe: boolean }) => Promise<void> | void;
    /** Callback on sign-up submit */
    onSignUp?: (data: { name: string; email: string; password: string }) => Promise<void> | void;
    /** Callback on forgot password click */
    onForgotPassword?: () => void;
    /** Callback on social login click */
    onSocialLogin?: (provider: "google" | "facebook" | "linkedin") => void;
    /** Callback on sign-up link click (overrides built-in toggle) */
    onSignUpClick?: () => void;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Social Icons
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
   LoginCardSeparated Component
   ══════════════════════════════════════════════ */

export function LoginCardSeparated({
    heading = "Log in to your account",
    subheading = "Welcome back! Please enter your details.",
    signUpHeading = "Create an account",
    signUpSubheading = "Get started with your free account today.",
    logoText = "O",
    logo,
    showSocial = true,
    showRememberMe = true,
    defaultSignUp = false,
    onSignIn,
    onSignUp,
    onForgotPassword,
    onSocialLogin,
    onSignUpClick,
    className,
}: LoginCardSeparatedProps) {
    const [mode, setMode] = useState<"signin" | "signup">(defaultSignUp ? "signup" : "signin");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const resetFields = useCallback(() => {
        setName("");
        setEmail("");
        setPassword("");
        setShowPw(false);
        setRememberMe(false);
        setError("");
    }, []);

    const handleToggle = useCallback(() => {
        resetFields();
        setMode((prev) => (prev === "signin" ? "signup" : "signin"));
    }, [resetFields]);

    const handleSignIn = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            await onSignIn?.({ email, password, rememberMe });
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [email, password, rememberMe, onSignIn]);

    const handleSignUp = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        setLoading(true);
        try {
            await onSignUp?.({ name, email, password });
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Sign up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [name, email, password, onSignUp]);

    const isSignIn = mode === "signin";

    return (
        <div className={cn(s.wrapper, className)}>
            <div>
                <div className={s.card}>

                    {/* Top — Logo + Social */}
                    <div className={s.topSection}>
                        <div className={s.logo}>{logo ?? logoText}</div>
                        <h1 className={s.heading}>{isSignIn ? heading : signUpHeading}</h1>
                        <p className={s.subheading}>{isSignIn ? subheading : signUpSubheading}</p>

                        {showSocial && (
                            <div className={s.socialCol}>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("google")}>
                                    <GoogleIcon /> Continue with Google
                                </button>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("facebook")}>
                                    <FacebookIcon /> Continue with Facebook
                                </button>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("linkedin")}>
                                    <LinkedInIcon /> Continue with LinkedIn
                                </button>
                            </div>
                        )}
                    </div>

                    {showSocial && <div className={s.separator}>OR</div>}

                    {/* Bottom — Form */}
                    {isSignIn ? (
                        <form className={s.bottomSection} onSubmit={handleSignIn} key="signin">
                            {error && <div className={s.errorBanner}>{error}</div>}

                            <div className={s.fieldGroup}>
                                <label className={s.label}>Email</label>
                                <div className={s.inputWrap}>
                                    <span className={s.inputIcon}><Sms size={16} variant="Bulk" color="currentColor" /></span>
                                    <input className={s.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                                </div>
                            </div>

                            <div className={s.fieldGroup}>
                                <label className={s.label}>Password</label>
                                <div className={s.inputWrap}>
                                    <span className={s.inputIcon}><Lock size={16} variant="Bulk" color="currentColor" /></span>
                                    <input className={cn(s.input, s.inputTrailing)} type={showPw ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                                    <button type="button" className={s.eyeBtn} onClick={() => setShowPw(!showPw)} aria-label="Toggle password visibility">
                                        {showPw ? <EyeSlash size={16} variant="Linear" color="currentColor" /> : <Eye size={16} variant="Linear" color="currentColor" />}
                                    </button>
                                </div>
                            </div>

                            <div className={s.row}>
                                {showRememberMe ? (
                                    <div className={s.checkRow}>
                                        <Checkbox
                                            size="sm"
                                            checked={rememberMe}
                                            onChange={(val) => setRememberMe(val)}
                                            label="Remember me"
                                        />
                                    </div>
                                ) : <span />}
                                <button type="button" className={s.forgotLink} onClick={onForgotPassword}>Forgot password?</button>
                            </div>

                            <button type="submit" className={s.submitBtn} disabled={loading}>
                                {loading && <span className={s.spinner} />}
                                Sign in
                                {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                            </button>
                        </form>
                    ) : (
                        <form className={s.bottomSection} onSubmit={handleSignUp} key="signup">
                            {error && <div className={s.errorBanner}>{error}</div>}

                            <div className={s.fieldGroup}>
                                <label className={s.label}>Full Name</label>
                                <div className={s.inputWrap}>
                                    <span className={s.inputIcon}><User size={16} variant="Bulk" color="currentColor" /></span>
                                    <input className={s.input} type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                                </div>
                            </div>

                            <div className={s.fieldGroup}>
                                <label className={s.label}>Email</label>
                                <div className={s.inputWrap}>
                                    <span className={s.inputIcon}><Sms size={16} variant="Bulk" color="currentColor" /></span>
                                    <input className={s.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                                </div>
                            </div>

                            <div className={s.fieldGroup}>
                                <label className={s.label}>Password</label>
                                <div className={s.inputWrap}>
                                    <span className={s.inputIcon}><Lock size={16} variant="Bulk" color="currentColor" /></span>
                                    <input className={cn(s.input, s.inputTrailing)} type={showPw ? "text" : "password"} placeholder="Min. 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                                    <button type="button" className={s.eyeBtn} onClick={() => setShowPw(!showPw)} aria-label="Toggle password visibility">
                                        {showPw ? <EyeSlash size={16} variant="Linear" color="currentColor" /> : <Eye size={16} variant="Linear" color="currentColor" />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className={s.submitBtn} disabled={loading}>
                                {loading && <span className={s.spinner} />}
                                Create account
                                {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                            </button>
                        </form>
                    )}

                </div>

                {/* Footer outside card */}
                <div className={s.footerOuter}>
                    {isSignIn ? (
                        <>
                            Don&apos;t have an account?{" "}
                            <button type="button" className={s.footerLink} onClick={onSignUpClick ?? handleToggle}>Sign up</button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button type="button" className={s.footerLink} onClick={handleToggle}>Sign in</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
