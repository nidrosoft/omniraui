"use client";

import React from "react";
import { ArrowRight, InfoCircle, People } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./EmailTemplate.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type EmailTemplateVariant = "welcome" | "verification" | "invite" | "password-reset";

export interface EmailTemplateProps {
    /** Template variant */
    variant?: EmailTemplateVariant;
    /** Product/brand name */
    productName?: string;
    /** Logo character or short text */
    logoText?: string;
    /** Custom logo element */
    logo?: React.ReactNode;
    /** Recipient name */
    recipientName?: string;
    /** Sender / inviter name (for invite variant) */
    senderName?: string;
    /** Team or organization name (for invite variant) */
    teamName?: string;
    /** Verification code (for verification variant) */
    verificationCode?: string;
    /** CTA button text */
    ctaText?: string;
    /** CTA button URL */
    ctaUrl?: string;
    /** Company address line for footer */
    companyAddress?: string;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   EmailTemplate Component
   ══════════════════════════════════════════════ */

export function EmailTemplate({
    variant = "welcome",
    productName = "Omnira",
    logoText = "O",
    logo,
    recipientName = "Olivia",
    senderName = "Jordan Baker",
    teamName = "Design Team",
    verificationCode = "482956",
    ctaText,
    ctaUrl = "#",
    companyAddress = "100 Smith Street, Melbourne VIC 3000",
    className,
}: EmailTemplateProps) {

    /* ── Welcome variant ── */
    if (variant === "welcome") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.email}>
                    <div className={s.emailHeader}>
                        <div className={s.logo}>{logo ?? logoText}</div>
                        <h1 className={s.headerTitle}>Welcome to {productName}</h1>
                        <p className={s.headerSubtitle}>
                            We&apos;re excited to have you on board. Let&apos;s get you started.
                        </p>
                    </div>

                    <div className={s.emailBody}>
                        <p className={s.greeting}>Hi {recipientName},</p>
                        <p className={s.bodyText}>
                            Thanks for signing up for {productName}! We&apos;re thrilled to have you join our community.
                            Your account is now active and ready to go.
                        </p>
                        <p className={s.bodyText}>
                            To get the most out of {productName}, we recommend completing your profile
                            and exploring the dashboard. If you need help at any time, our support team is always here for you.
                        </p>

                        <a href={ctaUrl} className={s.ctaBtn}>
                            {ctaText || "Get started"}
                            <ArrowRight size={18} variant="Linear" color="currentColor" />
                        </a>

                        <p className={s.bodyText}>
                            If you have any questions, feel free to reply to this email or visit
                            our <a href="#">help center</a>.
                        </p>
                        <p className={s.bodyText}>
                            Best regards,<br />
                            The {productName} Team
                        </p>
                    </div>

                    <div className={s.emailFooter}>
                        <div className={s.footerLinks}>
                            <button type="button" className={s.footerLink}>Help Center</button>
                            <button type="button" className={s.footerLink}>Privacy Policy</button>
                            <button type="button" className={s.footerLink}>Unsubscribe</button>
                        </div>
                        <p className={s.footerAddress}>{companyAddress}</p>
                        <p className={s.footerText}>
                            &copy; {new Date().getFullYear()} {productName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    /* ── Verification variant ── */
    if (variant === "verification") {
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.email}>
                    <div className={s.emailHeader}>
                        <div className={s.logo}>{logo ?? logoText}</div>
                        <h1 className={s.headerTitle}>Verify your email</h1>
                        <p className={s.headerSubtitle}>
                            Enter the code below to verify your email address.
                        </p>
                    </div>

                    <div className={s.emailBody}>
                        <p className={s.greeting}>Hi {recipientName},</p>
                        <p className={s.bodyText}>
                            Thanks for signing up! Please use the following verification code to complete your registration:
                        </p>

                        <div className={s.codeBlock}>
                            <span className={s.codeValue}>{verificationCode}</span>
                        </div>

                        <div className={s.infoBox}>
                            <span className={s.infoIcon}>
                                <InfoCircle size={16} variant="Bulk" color="currentColor" />
                            </span>
                            <p className={s.infoText}>
                                This code will expire in 10 minutes. If you didn&apos;t request this code,
                                you can safely ignore this email.
                            </p>
                        </div>

                        <p className={s.bodyText}>
                            Alternatively, you can click the button below to verify directly:
                        </p>

                        <a href={ctaUrl} className={s.ctaBtn}>
                            {ctaText || "Verify email address"}
                            <ArrowRight size={18} variant="Linear" color="currentColor" />
                        </a>

                        <p className={s.bodyText}>
                            Best regards,<br />
                            The {productName} Team
                        </p>
                    </div>

                    <div className={s.emailFooter}>
                        <div className={s.footerLinks}>
                            <button type="button" className={s.footerLink}>Help Center</button>
                            <button type="button" className={s.footerLink}>Privacy Policy</button>
                        </div>
                        <p className={s.footerAddress}>{companyAddress}</p>
                        <p className={s.footerText}>
                            &copy; {new Date().getFullYear()} {productName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    /* ── Invite variant ── */
    if (variant === "invite") {
        const initials = senderName.split(" ").map(w => w[0]).join("").slice(0, 2);
        return (
            <div className={cn(s.wrapper, className)}>
                <div className={s.email}>
                    <div className={s.emailHeader}>
                        <div className={s.logo}>{logo ?? logoText}</div>
                        <h1 className={s.headerTitle}>You&apos;ve been invited</h1>
                        <p className={s.headerSubtitle}>
                            {senderName} has invited you to join <strong>{teamName}</strong> on {productName}.
                        </p>
                    </div>

                    <div className={s.emailBody}>
                        <p className={s.greeting}>Hi {recipientName},</p>
                        <p className={s.bodyText}>
                            {senderName} has invited you to collaborate on {productName}. Join the team to start working together.
                        </p>

                        <div className={s.inviteDetails}>
                            <div className={s.inviteRow}>
                                <div className={s.inviteAvatar}>{initials}</div>
                                <div className={s.inviteInfo}>
                                    <span className={s.inviteName}>{senderName}</span>
                                    <span className={s.inviteRole}>invited you to {teamName}</span>
                                </div>
                            </div>
                        </div>

                        <a href={ctaUrl} className={s.ctaBtn}>
                            {ctaText || "Accept invitation"}
                            <ArrowRight size={18} variant="Linear" color="currentColor" />
                        </a>

                        <div className={s.infoBox}>
                            <span className={s.infoIcon}>
                                <InfoCircle size={16} variant="Bulk" color="currentColor" />
                            </span>
                            <p className={s.infoText}>
                                This invitation will expire in 7 days. If you don&apos;t want to join,
                                you can simply ignore this email.
                            </p>
                        </div>

                        <p className={s.bodyText}>
                            Best regards,<br />
                            The {productName} Team
                        </p>
                    </div>

                    <div className={s.emailFooter}>
                        <div className={s.footerLinks}>
                            <button type="button" className={s.footerLink}>Help Center</button>
                            <button type="button" className={s.footerLink}>Privacy Policy</button>
                            <button type="button" className={s.footerLink}>Unsubscribe</button>
                        </div>
                        <p className={s.footerAddress}>{companyAddress}</p>
                        <p className={s.footerText}>
                            &copy; {new Date().getFullYear()} {productName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    /* ── Password Reset variant ── */
    return (
        <div className={cn(s.wrapper, className)}>
            <div className={s.email}>
                <div className={s.emailHeader}>
                    <div className={s.logo}>{logo ?? logoText}</div>
                    <h1 className={s.headerTitle}>Reset your password</h1>
                    <p className={s.headerSubtitle}>
                        We received a request to reset the password for your account.
                    </p>
                </div>

                <div className={s.emailBody}>
                    <p className={s.greeting}>Hi {recipientName},</p>
                    <p className={s.bodyText}>
                        Someone recently requested a password change for your {productName} account.
                        If this was you, click the button below to set a new password:
                    </p>

                    <a href={ctaUrl} className={s.ctaBtn}>
                        {ctaText || "Reset password"}
                        <ArrowRight size={18} variant="Linear" color="currentColor" />
                    </a>

                    <div className={s.infoBox}>
                        <span className={s.infoIcon}>
                            <InfoCircle size={16} variant="Bulk" color="currentColor" />
                        </span>
                        <p className={s.infoText}>
                            This link will expire in 1 hour. If you didn&apos;t request a password reset,
                            you can safely ignore this email. Your password will remain unchanged.
                        </p>
                    </div>

                    <p className={s.bodyText}>
                        Best regards,<br />
                        The {productName} Team
                    </p>
                </div>

                <div className={s.emailFooter}>
                    <div className={s.footerLinks}>
                        <button type="button" className={s.footerLink}>Help Center</button>
                        <button type="button" className={s.footerLink}>Privacy Policy</button>
                    </div>
                    <p className={s.footerAddress}>{companyAddress}</p>
                    <p className={s.footerText}>
                        &copy; {new Date().getFullYear()} {productName}. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
