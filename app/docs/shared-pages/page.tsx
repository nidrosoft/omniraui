import { DocHeader } from "@/components/docs/DocHeader";
import Link from "next/link";

const pages = [
    {
        title: "Login Page",
        href: "/docs/shared-pages/login",
        description: "Pre-built login page templates with email/password, social login, and magic link variants.",
    },
    {
        title: "Sign Up Page",
        href: "/docs/shared-pages/sign-up",
        description: "Sign up page templates with multi-step flows, social registration, and form validation.",
    },
    {
        title: "Verification Page",
        href: "/docs/shared-pages/verification",
        description: "Email and phone verification templates with OTP input, resend functionality, and success states.",
    },
    {
        title: "Forgot Password",
        href: "/docs/shared-pages/forgot-password",
        description: "Password recovery flow templates with email input, reset link confirmation, and new password form.",
    },
    {
        title: "404 Page",
        href: "/docs/shared-pages/404",
        description: "Custom 404 error page templates with illustrations, search suggestions, and navigation links.",
    },
    {
        title: "Email Template",
        href: "/docs/shared-pages/email-template",
        description: "Responsive email templates for transactional emails, welcome messages, password resets, and notifications.",
    },
];

export default function SharedPagesPage() {
    return (
        <div>
            <DocHeader
                title="Shared Pages"
                description="Common page templates for authentication flows, error pages, and email templates. Drop-in ready with the Omnira glassmorphism design system."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages" },
                ]}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {pages.map((page) => (
                    <Link
                        key={page.href}
                        href={page.href}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            padding: 24,
                            borderRadius: "var(--radius-xl)",
                            background: "var(--color-bg-card)",
                            border: "1px solid var(--color-border-subtle)",
                            textDecoration: "none",
                            transition: "border-color 0.15s, background 0.15s",
                        }}
                    >
                        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)" }}>
                            {page.title}
                        </span>
                        <span style={{ fontSize: 13, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
                            {page.description}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
