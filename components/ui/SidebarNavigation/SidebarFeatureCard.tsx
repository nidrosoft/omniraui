"use client";

import { useState, useCallback } from "react";
import { CloseCircle, Copy, TickCircle, Calendar, Star1, Flash, MessageText1, Scan, Gift, Headphones, Crown1, Clock } from "iconsax-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import styles from "./SidebarFeatureCard.module.css";

/* ── 1. Progress ── */
export function FeatureCardProgress({
    title = "Profile completion",
    percent = 65,
    description = "Complete your profile to unlock all features.",
}: {
    title?: string;
    percent?: number;
    description?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                </div>
            </div>
            <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${percent}%` }} />
                </div>
                <div className={styles.progressMeta}>
                    <span className={styles.progressPercent}>{percent}%</span>
                    <span className={styles.progressLabel}>completed</span>
                </div>
            </div>
        </div>
    );
}

/* ── 2. Progress with Code ── */
export function FeatureCardProgressCode({
    title = "Storage used",
    percent = 42,
    used = "4.2 GB",
    total = "10 GB",
}: {
    title?: string;
    percent?: number;
    used?: string;
    total?: string;
}) {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{title}</span>
            <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${percent}%` }} />
                </div>
                <div className={styles.progressMeta}>
                    <span className={styles.progressPercent}>{used}</span>
                    <span className={styles.progressLabel}>of {total}</span>
                </div>
            </div>
            <Button variant="secondary" size="sm" fullWidth>Manage storage</Button>
        </div>
    );
}

/* ── 3. Image Banner ── */
export function FeatureCardImage({
    title = "New feature available",
    description = "Check out our latest update with improved performance and new tools.",
}: {
    title?: string;
    description?: string;
}) {
    const [dismissed, setDismissed] = useState(false);
    if (dismissed) return null;

    return (
        <div className={styles.card}>
            <div className={styles.imageBanner} />
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                </div>
                <button className={styles.dismiss} onClick={() => setDismissed(true)} type="button" aria-label="Dismiss">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            </div>
            <div className={styles.actions}>
                <Button variant="primary" size="sm">Learn more</Button>
                <Button variant="ghost" size="sm" onClick={() => setDismissed(true)}>Dismiss</Button>
            </div>
        </div>
    );
}

/* ── 4. Cookie ── */
export function FeatureCardCookie() {
    const [dismissed, setDismissed] = useState(false);
    if (dismissed) return null;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconWrap}>
                    <Scan size={18} variant="Bulk" color="var(--color-lime)" />
                </div>
                <button className={styles.dismiss} onClick={() => setDismissed(true)} type="button" aria-label="Dismiss">
                    <CloseCircle size={16} variant="Bulk" color="currentColor" />
                </button>
            </div>
            <span className={styles.title}>Cookie preferences</span>
            <p className={styles.cookieText}>
                We use cookies to improve your experience. Read our{" "}
                <span className={styles.cookieLink}>privacy policy</span>.
            </p>
            <div className={styles.actions}>
                <Button variant="primary" size="sm" onClick={() => setDismissed(true)}>Accept all</Button>
                <Button variant="ghost" size="sm" onClick={() => setDismissed(true)}>Reject</Button>
            </div>
        </div>
    );
}

/* ── 5. Referral Link ── */
export function FeatureCardReferral({
    code = "https://omnira.space/ref/abc123",
}: {
    code?: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
        copyToClipboard(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [code]);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={cn(styles.iconWrap, styles.iconWrapAccent)}>
                    <Gift size={18} variant="Bulk" color="var(--color-lime)" />
                </div>
            </div>
            <span className={styles.title}>Refer a friend</span>
            <span className={styles.description}>Share your link and earn rewards for each signup.</span>
            <div className={styles.codeBox}>
                <span className={styles.codeText}>{code}</span>
                <button className={styles.codeCopy} onClick={handleCopy} type="button" aria-label="Copy link">
                    {copied
                        ? <TickCircle size={14} variant="Bulk" color="var(--color-lime)" />
                        : <Copy size={14} variant="Bulk" color="currentColor" />
                    }
                </button>
            </div>
        </div>
    );
}

/* ── 6. Onboarding ── */
export function FeatureCardOnboarding({
    steps = [
        { label: "Create account", done: true },
        { label: "Set up profile", done: true },
        { label: "Invite team members", done: false },
        { label: "Create first project", done: false },
    ],
}: {
    steps?: { label: string; done: boolean }[];
}) {
    const completed = steps.filter((s) => s.done).length;
    const total = steps.length;

    return (
        <div className={styles.card}>
            <span className={styles.title}>Getting started</span>
            <span className={styles.description}>{completed} of {total} steps completed</span>
            <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${(completed / total) * 100}%` }} />
                </div>
            </div>
            <div className={styles.steps}>
                {steps.map((step) => (
                    <div key={step.label} className={cn(styles.step, step.done && styles.stepDone)}>
                        <span className={cn(styles.stepCheck, step.done && styles.stepCheckDone)}>
                            {step.done && <TickCircle size={12} variant="Bulk" color="currentColor" />}
                        </span>
                        {step.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── 7. Upgrade ── */
export function FeatureCardUpgrade({
    title = "Upgrade to Pro",
    description = "Unlock unlimited projects, advanced analytics, and priority support.",
}: {
    title?: string;
    description?: string;
}) {
    return (
        <div className={cn(styles.card, styles.cardAccent)}>
            <div className={cn(styles.iconWrap, styles.iconWrapAccent)}>
                <Crown1 size={18} variant="Bulk" color="var(--color-lime)" />
            </div>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <Button variant="accent" size="sm" fullWidth>Upgrade now</Button>
        </div>
    );
}

/* ── 8. Support ── */
export function FeatureCardSupport({
    title = "Need help?",
    description = "Our support team is available 24/7 to assist you.",
}: {
    title?: string;
    description?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrap}>
                <Headphones size={18} variant="Bulk" color="var(--color-lime)" />
            </div>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <div className={styles.actions}>
                <Button variant="primary" size="sm">Contact us</Button>
                <Button variant="ghost" size="sm">View docs</Button>
            </div>
        </div>
    );
}

/* ── 9. Event CTA ── */
export function FeatureCardEvent({
    title = "Design Systems Workshop",
    date = "Mar 15, 2026 · 2:00 PM",
    description = "Join us for a live workshop on building scalable design systems.",
}: {
    title?: string;
    date?: string;
    description?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconWrap}>
                    <Calendar size={18} variant="Bulk" color="var(--color-lime)" />
                </div>
                <Badge variant="accent" size="sm">Upcoming</Badge>
            </div>
            <span className={styles.title}>{title}</span>
            <div className={styles.eventDate}>
                <Clock size={12} variant="Bulk" color="var(--color-text-tertiary)" />
                {date}
            </div>
            <span className={styles.description}>{description}</span>
            <Button variant="primary" size="sm" fullWidth>Register now</Button>
        </div>
    );
}

/* ── 10. Message ── */
export function FeatureCardMessage({
    name = "Sarah Chen",
    initials = "SC",
    time = "2 min ago",
    message = "Hey! Just pushed the new sidebar components. Can you review the PR when you get a chance?",
}: {
    name?: string;
    initials?: string;
    time?: string;
    message?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.avatarRow}>
                <div className={styles.avatarCircle}>{initials}</div>
                <div className={styles.avatarInfo}>
                    <span className={styles.avatarName}>{name}</span>
                    <span className={styles.avatarMeta}>{time}</span>
                </div>
            </div>
            <p className={styles.messagePreview}>{message}</p>
            <div className={styles.actions}>
                <Button variant="primary" size="sm">Reply</Button>
                <Button variant="ghost" size="sm">Mark read</Button>
            </div>
        </div>
    );
}

/* ── 11. Current Project ── */
export function FeatureCardCurrentProject({
    name = "Omnira UI",
    description = "Component library",
    status = "In progress",
}: {
    name?: string;
    description?: string;
    status?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>Current project</span>
                    <span className={styles.title}>{name}</span>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={cn(styles.iconWrap, styles.iconWrapAccent)}>
                    <Flash size={18} variant="Bulk" color="var(--color-lime)" />
                </div>
            </div>
            <div className={styles.tagRow}>
                <Badge variant="success" dot size="sm">{status}</Badge>
                <Badge variant="section" size="sm">v2.1.0</Badge>
            </div>
            <Button variant="secondary" size="sm" fullWidth>Open project</Button>
        </div>
    );
}

/* ── 12. Free Trial ── */
export function FeatureCardFreeTrial({
    daysLeft = 7,
    title = "Free trial ending soon",
    description = "Upgrade now to keep access to all premium features.",
}: {
    daysLeft?: number;
    title?: string;
    description?: string;
}) {
    return (
        <div className={cn(styles.card, styles.cardAccent)}>
            <div className={styles.header}>
                <div className={cn(styles.iconWrap, styles.iconWrapAccent)}>
                    <Star1 size={18} variant="Bulk" color="var(--color-lime)" />
                </div>
            </div>
            <div className={styles.trialCountdown}>
                <span className={styles.trialNumber}>{daysLeft}</span>
                <span className={styles.trialUnit}>days remaining</span>
            </div>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <div className={cn(styles.actions, styles.actionsFull)}>
                <Button variant="accent" size="sm" fullWidth>Upgrade to Pro</Button>
                <Button variant="ghost" size="sm" fullWidth>Compare plans</Button>
            </div>
        </div>
    );
}

/* ── 13. QR Code ── */
export function FeatureCardQRCode({
    title = "Download the app",
    description = "Scan the QR code to get our mobile app.",
}: {
    title?: string;
    description?: string;
}) {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <div className={styles.qrPlaceholder}>
                <MessageText1 size={32} variant="Bulk" color="var(--color-text-tertiary)" />
            </div>
            <div className={styles.actions}>
                <Button variant="secondary" size="sm" fullWidth>App Store</Button>
                <Button variant="secondary" size="sm" fullWidth>Google Play</Button>
            </div>
        </div>
    );
}
