"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { VerificationPage as VerificationPageComponent } from "@/components/ui/VerificationPage";

/* ══════════════════════════════════════════════
   Preview wrapper — scales full-page into preview
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

function CheckEmailDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <VerificationPageComponent
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

const checkEmailCode = `import { VerificationPage } from "@/components/ui/VerificationPage";

<VerificationPage
  step="check-email"
  email="olivia@example.com"
  onOpenEmail={() => window.open("mailto:")}
  onResend={async () => { /* resend email */ }}
  onBackToLogin={() => router.push("/login")}
/>`;

function EnterCodeDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <VerificationPageComponent
                    step="enter-code"
                    email="olivia@example.com"
                    codeLength={6}
                    onVerify={async (code) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Verify:", code); }}
                    onResend={async () => console.log("Resend")}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const enterCodeCode = `<VerificationPage
  step="enter-code"
  email="olivia@example.com"
  codeLength={6}
  onVerify={async (code) => {
    await verifyEmail(code);
  }}
  onResend={async () => { /* resend code */ }}
  onBackToLogin={() => router.push("/login")}
/>`;

function SuccessDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <VerificationPageComponent
                    step="success"
                    email="olivia@example.com"
                    onContinue={() => console.log("Continue")}
                    onBackToLogin={() => console.log("Back to login")}
                />
            </div>
        </div>
    );
}

const successCode = `<VerificationPage
  step="success"
  onContinue={() => router.push("/dashboard")}
  onBackToLogin={() => router.push("/login")}
/>`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const verificationProps = [
    { name: "step", type: '"check-email" | "enter-code" | "success"', default: '"check-email"', description: "Current step in the verification flow." },
    { name: "email", type: "string", default: '"olivia@example.com"', description: "User's email address displayed in the flow." },
    { name: "codeLength", type: "number", default: "6", description: "Number of OTP digits." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element (replaces logoText)." },
    { name: "onVerify", type: "(code: string) => Promise<void> | void", description: "Called when user submits the verification code. Throw to show error." },
    { name: "onResend", type: "() => Promise<void> | void", description: "Called when 'Click to resend' is clicked." },
    { name: "onOpenEmail", type: "() => void", description: "Called when 'Open email app' button is clicked." },
    { name: "onBackToLogin", type: "() => void", description: "Called when 'Back to log in' is clicked." },
    { name: "onContinue", type: "() => void", description: "Called on success step — 'Continue' button." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function VerificationPage() {
    return (
        <div>
            <DocHeader
                title="Verification Page"
                description="Email verification flow with 3 steps: check your email, enter the OTP code manually, and a success confirmation. Supports paste-to-fill, resend, loading states, and error handling."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Verification Page" },
                ]}
            />

            <InstallBlock slug="verification" components={["VerificationPage"]} />

            {/* ── Step 1: Check Email ── */}
            <ComponentPreview
                title="Step 1 — Check Email"
                description="Prompts the user to check their inbox for a verification link. Includes an 'Open email app' CTA, a resend link, and a manual code entry shortcut."
                code={checkEmailCode}
            >
                <CheckEmailDemo />
            </ComponentPreview>

            {/* ── Step 2: Enter Code ── */}
            <ComponentPreview
                title="Step 2 — Enter Code Manually"
                description="Six-digit OTP input with auto-advance, paste support, and keyboard navigation. Validates on submit with loading and error states."
                code={enterCodeCode}
            >
                <EnterCodeDemo />
            </ComponentPreview>

            {/* ── Step 3: Success ── */}
            <ComponentPreview
                title="Step 3 — Success"
                description="Confirmation screen shown after successful verification. Features a check icon and a continue button."
                code={successCode}
            >
                <SuccessDemo />
            </ComponentPreview>

            <PropsTable title="VerificationPage" props={verificationProps} />
        </div>
    );
}
