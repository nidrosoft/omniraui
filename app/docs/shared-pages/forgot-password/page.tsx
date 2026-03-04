"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ForgotPassword } from "@/components/ui/ForgotPassword";

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
    paddingBottom: "56.25%",
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

function ForgotDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <ForgotPassword
                    step="forgot"
                    onSubmitEmail={async (email: string) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Submit:", email); }}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const forgotCode = `import { ForgotPassword } from "@/components/ui/ForgotPassword";

<ForgotPassword
  step="forgot"
  onSubmitEmail={async (email) => {
    await sendResetEmail(email);
  }}
  onBackToLogin={() => router.push("/login")}
/>`;

function CheckEmailDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <ForgotPassword
                    step="check-email"
                    email="olivia@example.com"
                    onOpenEmail={() => console.log("Open email")}
                    onResend={async () => console.log("Resend")}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const checkEmailCode = `<ForgotPassword
  step="check-email"
  email="olivia@example.com"
  onOpenEmail={() => window.open("mailto:")}
  onResend={async () => { /* resend reset email */ }}
  onBackToLogin={() => router.push("/login")}
/>`;

function NewPasswordDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <ForgotPassword
                    step="new-password"
                    onResetPassword={async (data: { password: string; confirmPassword: string }) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Reset:", data); }}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const newPasswordCode = `<ForgotPassword
  step="new-password"
  onResetPassword={async ({ password, confirmPassword }) => {
    await resetPassword(password);
  }}
  onBackToLogin={() => router.push("/login")}
/>`;

function SuccessDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <ForgotPassword
                    step="success"
                    onContinue={() => console.log("Continue")}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const successCode = `<ForgotPassword
  step="success"
  onContinue={() => router.push("/login")}
  onBackToLogin={() => router.push("/login")}
/>`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const forgotPasswordProps = [
    { name: "step", type: '"forgot" | "check-email" | "new-password" | "success"', default: '"forgot"', description: "Current step in the password recovery flow." },
    { name: "email", type: "string", default: '""', description: "Pre-filled or displayed email address." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element (replaces logoText)." },
    { name: "onSubmitEmail", type: "(email: string) => Promise<void> | void", description: "Called when user submits their email. Throw to show error." },
    { name: "onResetPassword", type: "(data) => Promise<void> | void", description: "Called when user submits new password. Receives { password, confirmPassword }." },
    { name: "onOpenEmail", type: "() => void", description: "Called when 'Open email app' button is clicked." },
    { name: "onResend", type: "() => Promise<void> | void", description: "Called when 'Click to resend' is clicked." },
    { name: "onBackToLogin", type: "() => void", description: "Called when 'Back to log in' is clicked." },
    { name: "onContinue", type: "() => void", description: "Called on success step — 'Continue to log in' button." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function ForgotPasswordPage() {
    return (
        <div>
            <DocHeader
                title="Forgot Password"
                description="A complete password recovery flow with 4 steps: enter email, check inbox, set a new password with strength indicator, and a success confirmation. Includes validation, loading states, and error handling."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Forgot Password" },
                ]}
            />

            <InstallBlock slug="forgot-password" components={["ForgotPassword"]} />

            {/* ── Step 1: Forgot Password ── */}
            <ComponentPreview
                title="Step 1 — Forgot Password"
                description="Simple email input form prompting the user to enter their email address. Includes validation, loading state, and a back-to-login link."
                code={forgotCode}
            >
                <ForgotDemo />
            </ComponentPreview>

            {/* ── Step 2: Check Email ── */}
            <ComponentPreview
                title="Step 2 — Check Email"
                description="Confirmation screen telling the user a reset link was sent. Features an 'Open email app' CTA and a resend option."
                code={checkEmailCode}
            >
                <CheckEmailDemo />
            </ComponentPreview>

            {/* ── Step 3: Set New Password ── */}
            <ComponentPreview
                title="Step 3 — Set New Password"
                description="Password and confirm-password form with a visual strength indicator (weak/fair/good/strong). Validates match and minimum length."
                code={newPasswordCode}
            >
                <NewPasswordDemo />
            </ComponentPreview>

            {/* ── Step 4: Success ── */}
            <ComponentPreview
                title="Step 4 — Success"
                description="Confirmation screen shown after a successful password reset. Features a check icon and a continue-to-login button."
                code={successCode}
            >
                <SuccessDemo />
            </ComponentPreview>

            <PropsTable title="ForgotPassword" props={forgotPasswordProps} />
        </div>
    );
}
