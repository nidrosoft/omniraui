"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { EmailTemplate } from "@/components/ui/EmailTemplate";

/* ══════════════════════════════════════════════
   Preview wrapper
   ══════════════════════════════════════════════ */

const previewStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "var(--radius-xl)",
    overflow: "hidden",
    border: "1px solid var(--color-border-subtle)",
    position: "relative",
    height: 0,
    paddingBottom: "75%",
    background: "var(--color-bg-primary, #0a0a0a)",
};

const innerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "153.85%",
    height: "153.85%",
    transform: "scale(0.65)",
    transformOrigin: "top left",
};

/* ══════════════════════════════════════════════
   Demos
   ══════════════════════════════════════════════ */

function WelcomeDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <EmailTemplate variant="welcome" productName="Omnira" recipientName="Olivia" />
            </div>
        </div>
    );
}

const welcomeCode = `import { EmailTemplate } from "@/components/ui/EmailTemplate";

<EmailTemplate
  variant="welcome"
  productName="Omnira"
  logoText="O"
  recipientName="Olivia"
  ctaText="Get started"
  ctaUrl="/onboarding"
/>`;

function VerificationDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <EmailTemplate variant="verification" productName="Omnira" recipientName="Olivia" verificationCode="482956" />
            </div>
        </div>
    );
}

const verificationCode = `<EmailTemplate
  variant="verification"
  productName="Omnira"
  recipientName="Olivia"
  verificationCode="482956"
  ctaUrl="/verify?token=abc123"
/>`;

function InviteDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <EmailTemplate
                    variant="invite"
                    productName="Omnira"
                    recipientName="Olivia"
                    senderName="Jordan Baker"
                    teamName="Design Team"
                />
            </div>
        </div>
    );
}

const inviteCode = `<EmailTemplate
  variant="invite"
  productName="Omnira"
  recipientName="Olivia"
  senderName="Jordan Baker"
  teamName="Design Team"
  ctaUrl="/invite/accept?token=xyz"
/>`;

function PasswordResetDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <EmailTemplate variant="password-reset" productName="Omnira" recipientName="Olivia" />
            </div>
        </div>
    );
}

const passwordResetCode = `<EmailTemplate
  variant="password-reset"
  productName="Omnira"
  recipientName="Olivia"
  ctaUrl="/reset-password?token=abc123"
/>`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const emailTemplateProps = [
    { name: "variant", type: '"welcome" | "verification" | "invite" | "password-reset"', default: '"welcome"', description: "Template variant to render." },
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name used in headings and copy." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element (replaces logoText)." },
    { name: "recipientName", type: "string", default: '"Olivia"', description: "Recipient's first name used in the greeting." },
    { name: "senderName", type: "string", default: '"Jordan Baker"', description: "Inviter's name (invite variant)." },
    { name: "teamName", type: "string", default: '"Design Team"', description: "Team/org name (invite variant)." },
    { name: "verificationCode", type: "string", default: '"482956"', description: "OTP code displayed (verification variant)." },
    { name: "ctaText", type: "string", description: "Custom CTA button text. Defaults per variant." },
    { name: "ctaUrl", type: "string", default: '"#"', description: "CTA button link URL." },
    { name: "companyAddress", type: "string", default: '"100 Smith Street, Melbourne VIC 3000"', description: "Company address shown in footer." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function EmailTemplatePage() {
    return (
        <div>
            <DocHeader
                title="Email Template"
                description="A collection of responsive email templates for common transactional flows: welcome, email verification with OTP code, team invitation, and password reset. Each template features a branded header, body content, CTA button, and footer."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Email Template" },
                ]}
            />

            <InstallBlock slug="email-template" components={["EmailTemplate"]} />

            {/* ── Welcome ── */}
            <ComponentPreview
                title="Welcome Email"
                description="Onboarding welcome email with greeting, intro copy, a 'Get started' CTA, and branded footer with help/privacy/unsubscribe links."
                code={welcomeCode}
            >
                <WelcomeDemo />
            </ComponentPreview>

            {/* ── Verification ── */}
            <ComponentPreview
                title="Verification Email"
                description="Email verification template featuring a large OTP code block, an info box with expiry notice, and a 'Verify email' CTA button."
                code={verificationCode}
            >
                <VerificationDemo />
            </ComponentPreview>

            {/* ── Invite ── */}
            <ComponentPreview
                title="Team Invitation"
                description="Invitation email with sender avatar/details, team name, an 'Accept invitation' CTA, and an expiry info box."
                code={inviteCode}
            >
                <InviteDemo />
            </ComponentPreview>

            {/* ── Password Reset ── */}
            <ComponentPreview
                title="Password Reset"
                description="Password reset email with a 'Reset password' CTA and a security notice explaining the link expiry and what to do if the request wasn't made."
                code={passwordResetCode}
            >
                <PasswordResetDemo />
            </ComponentPreview>

            <PropsTable title="EmailTemplate" props={emailTemplateProps} />
        </div>
    );
}
