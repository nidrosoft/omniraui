"use client";

import React, { useState, useCallback } from "react";
import { Sms, Lock, Eye, EyeSlash, ArrowRight } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./LoginSplitImage.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface LoginSplitImageProps {
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
    /** Image URL for the right panel */
    imageSrc?: string;
    /** Image alt text */
    imageAlt?: string;
    /** Show social login buttons */
    showSocial?: boolean;
    /** Callback on sign-in submit */
    onSignIn?: (data: { email: string; password: string }) => Promise<void> | void;
    /** Callback on forgot password click */
    onForgotPassword?: () => void;
    /** Callback on social login click */
    onSocialLogin?: (provider: "google" | "facebook" | "linkedin") => void;
    /** Callback on sign-up link click */
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
   LoginSplitImage Component
   ══════════════════════════════════════════════ */

export function LoginSplitImage({
    productName = "Omnira",
    logoText = "O",
    logo,
    heading = "Log in to your account",
    subheading = "Welcome back! Please enter your details.",
    imageSrc,
    imageAlt = "Login visual",
    showSocial = true,
    onSignIn,
    onForgotPassword,
    onSocialLogin,
    onSignUpClick,
    className,
}: LoginSplitImageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            await onSignIn?.({ email, password });
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [email, password, onSignIn]);

    return (
        <div className={cn(s.wrapper, className)}>

            {/* Left — Form */}
            <div className={s.formPanel}>
                <div className={s.formInner}>

                    <div className={s.header}>
                        <div className={s.logo}>{logo ?? logoText}</div>
                        <h1 className={s.heading}>{heading}</h1>
                        <p className={s.subheading}>{subheading}</p>
                    </div>

                    <form className={s.form} onSubmit={handleSubmit}>
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
                            <span />
                            <button type="button" className={s.forgotLink} onClick={onForgotPassword}>Forgot password?</button>
                        </div>

                        <button type="submit" className={s.submitBtn} disabled={loading}>
                            {loading && <span className={s.spinner} />}
                            Sign in
                            {!loading && <ArrowRight size={18} variant="Linear" color="currentColor" />}
                        </button>
                    </form>

                    {showSocial && (
                        <>
                            <div className={s.divider}>OR</div>
                            <div className={s.socialRow}>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("google")} aria-label="Sign in with Google"><GoogleIcon /></button>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("facebook")} aria-label="Sign in with Facebook"><FacebookIcon /></button>
                                <button type="button" className={s.socialBtn} onClick={() => onSocialLogin?.("linkedin")} aria-label="Sign in with LinkedIn"><LinkedInIcon /></button>
                            </div>
                        </>
                    )}

                    <div className={s.footer}>
                        Don&apos;t have an account?{" "}
                        <button type="button" className={s.footerLink} onClick={onSignUpClick}>Sign up</button>
                    </div>

                </div>
            </div>

            {/* Right — Image */}
            <div className={s.imagePanel}>
                <div className={s.imageInner}>
                    {imageSrc ? (
                        <img className={s.image} src={imageSrc} alt={imageAlt} />
                    ) : (
                        <div className={s.imagePlaceholder}>
                            <div className={s.placeholderContent}>
                                <div className={s.placeholderLogo}>{logoText}</div>
                                <h2 className={s.placeholderHeading}>{productName}</h2>
                                <p className={s.placeholderText}>Build something amazing with {productName}. Your journey starts here.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
