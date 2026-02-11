"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SocialButton } from "@/components/ui/SocialButton";

const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 8,
    marginTop: 48,
};

const sectionDesc: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 24,
};

const colStack: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: "100%",
    maxWidth: 360,
};

const rowWrap: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
};

export default function SocialButtonPage() {
    return (
        <div>
            <DocHeader
                title="Social Button"
                description="Pre-styled social login and sign-in buttons with brand colors, icons, and three theme options. Supports 12 social providers out of the box."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Social Button" },
                ]}
            />

            {/* ── Brand Theme ── */}
            <h2 style={sectionHeading}>Brand Theme</h2>
            <p style={sectionDesc}>Full brand-colored backgrounds matching each provider&apos;s identity guidelines.</p>

            <ComponentPreview
                title="Brand — Sign In Group"
                code={`<SocialButton social="google" theme="brand">Sign in with Google</SocialButton>
<SocialButton social="facebook" theme="brand">Sign in with Facebook</SocialButton>
<SocialButton social="apple" theme="brand">Sign in with Apple</SocialButton>
<SocialButton social="github" theme="brand">Sign in with GitHub</SocialButton>
<SocialButton social="x" theme="brand">Sign in with X</SocialButton>
<SocialButton social="linkedin" theme="brand">Sign in with LinkedIn</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="google" theme="brand">Sign in with Google</SocialButton>
                    <SocialButton social="facebook" theme="brand">Sign in with Facebook</SocialButton>
                    <SocialButton social="apple" theme="brand">Sign in with Apple</SocialButton>
                    <SocialButton social="github" theme="brand">Sign in with GitHub</SocialButton>
                    <SocialButton social="x" theme="brand">Sign in with X</SocialButton>
                    <SocialButton social="linkedin" theme="brand">Sign in with LinkedIn</SocialButton>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Brand — More Providers"
                code={`<SocialButton social="microsoft" theme="brand">Sign in with Microsoft</SocialButton>
<SocialButton social="discord" theme="brand">Sign in with Discord</SocialButton>
<SocialButton social="slack" theme="brand">Sign in with Slack</SocialButton>
<SocialButton social="figma" theme="brand">Sign in with Figma</SocialButton>
<SocialButton social="dribbble" theme="brand">Sign in with Dribbble</SocialButton>
<SocialButton social="spotify" theme="brand">Sign in with Spotify</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="microsoft" theme="brand">Sign in with Microsoft</SocialButton>
                    <SocialButton social="discord" theme="brand">Sign in with Discord</SocialButton>
                    <SocialButton social="slack" theme="brand">Sign in with Slack</SocialButton>
                    <SocialButton social="figma" theme="brand">Sign in with Figma</SocialButton>
                    <SocialButton social="dribbble" theme="brand">Sign in with Dribbble</SocialButton>
                    <SocialButton social="spotify" theme="brand">Sign in with Spotify</SocialButton>
                </div>
            </ComponentPreview>

            {/* ── Color Theme ── */}
            <h2 style={sectionHeading}>Color Theme</h2>
            <p style={sectionDesc}>Glass-style buttons with colored icons on a neutral background. Blends with the Omnira UI design system.</p>

            <ComponentPreview
                title="Color — Sign In Group"
                code={`<SocialButton social="google" theme="color">Sign in with Google</SocialButton>
<SocialButton social="facebook" theme="color">Sign in with Facebook</SocialButton>
<SocialButton social="apple" theme="color">Sign in with Apple</SocialButton>
<SocialButton social="github" theme="color">Sign in with GitHub</SocialButton>
<SocialButton social="x" theme="color">Sign in with X</SocialButton>
<SocialButton social="linkedin" theme="color">Sign in with LinkedIn</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="google" theme="color">Sign in with Google</SocialButton>
                    <SocialButton social="facebook" theme="color">Sign in with Facebook</SocialButton>
                    <SocialButton social="apple" theme="color">Sign in with Apple</SocialButton>
                    <SocialButton social="github" theme="color">Sign in with GitHub</SocialButton>
                    <SocialButton social="x" theme="color">Sign in with X</SocialButton>
                    <SocialButton social="linkedin" theme="color">Sign in with LinkedIn</SocialButton>
                </div>
            </ComponentPreview>

            {/* ── Gray Theme ── */}
            <h2 style={sectionHeading}>Gray Theme</h2>
            <p style={sectionDesc}>Monochrome buttons using the current text color. Minimal and unobtrusive.</p>

            <ComponentPreview
                title="Gray — Sign In Group"
                code={`<SocialButton social="google" theme="gray">Sign in with Google</SocialButton>
<SocialButton social="facebook" theme="gray">Sign in with Facebook</SocialButton>
<SocialButton social="apple" theme="gray">Sign in with Apple</SocialButton>
<SocialButton social="github" theme="gray">Sign in with GitHub</SocialButton>
<SocialButton social="x" theme="gray">Sign in with X</SocialButton>
<SocialButton social="linkedin" theme="gray">Sign in with LinkedIn</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="google" theme="gray">Sign in with Google</SocialButton>
                    <SocialButton social="facebook" theme="gray">Sign in with Facebook</SocialButton>
                    <SocialButton social="apple" theme="gray">Sign in with Apple</SocialButton>
                    <SocialButton social="github" theme="gray">Sign in with GitHub</SocialButton>
                    <SocialButton social="x" theme="gray">Sign in with X</SocialButton>
                    <SocialButton social="linkedin" theme="gray">Sign in with LinkedIn</SocialButton>
                </div>
            </ComponentPreview>

            {/* ── Icon Only ── */}
            <h2 style={sectionHeading}>Icon Only</h2>
            <p style={sectionDesc}>Compact icon-only buttons for tight layouts. Omit the children prop to render icon-only mode.</p>

            <ComponentPreview
                title="Icon Only — Brand"
                code={`<SocialButton social="google" theme="brand" />
<SocialButton social="facebook" theme="brand" />
<SocialButton social="apple" theme="brand" />
<SocialButton social="github" theme="brand" />
<SocialButton social="x" theme="brand" />
<SocialButton social="linkedin" theme="brand" />
<SocialButton social="discord" theme="brand" />
<SocialButton social="figma" theme="brand" />`}
            >
                <div style={rowWrap}>
                    <SocialButton social="google" theme="brand" />
                    <SocialButton social="facebook" theme="brand" />
                    <SocialButton social="apple" theme="brand" />
                    <SocialButton social="github" theme="brand" />
                    <SocialButton social="x" theme="brand" />
                    <SocialButton social="linkedin" theme="brand" />
                    <SocialButton social="discord" theme="brand" />
                    <SocialButton social="figma" theme="brand" />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Icon Only — Color"
                code={`<SocialButton social="google" theme="color" />
<SocialButton social="facebook" theme="color" />
<SocialButton social="apple" theme="color" />
<SocialButton social="github" theme="color" />
<SocialButton social="x" theme="color" />
<SocialButton social="linkedin" theme="color" />
<SocialButton social="discord" theme="color" />
<SocialButton social="figma" theme="color" />`}
            >
                <div style={rowWrap}>
                    <SocialButton social="google" theme="color" />
                    <SocialButton social="facebook" theme="color" />
                    <SocialButton social="apple" theme="color" />
                    <SocialButton social="github" theme="color" />
                    <SocialButton social="x" theme="color" />
                    <SocialButton social="linkedin" theme="color" />
                    <SocialButton social="discord" theme="color" />
                    <SocialButton social="figma" theme="color" />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Icon Only — Gray"
                code={`<SocialButton social="google" theme="gray" />
<SocialButton social="facebook" theme="gray" />
<SocialButton social="apple" theme="gray" />
<SocialButton social="github" theme="gray" />
<SocialButton social="x" theme="gray" />
<SocialButton social="linkedin" theme="gray" />`}
            >
                <div style={rowWrap}>
                    <SocialButton social="google" theme="gray" />
                    <SocialButton social="facebook" theme="gray" />
                    <SocialButton social="apple" theme="gray" />
                    <SocialButton social="github" theme="gray" />
                    <SocialButton social="x" theme="gray" />
                    <SocialButton social="linkedin" theme="gray" />
                </div>
            </ComponentPreview>

            {/* ── Per-Provider Showcase ── */}
            <h2 style={sectionHeading}>Per-Provider Showcase</h2>
            <p style={sectionDesc}>Each provider shown across all three themes with both full-width and icon-only variants.</p>

            <ComponentPreview
                title="Apple — All Themes"
                code={`<SocialButton social="apple" theme="brand">Sign in with Apple</SocialButton>
<SocialButton social="apple" theme="color">Sign in with Apple</SocialButton>
<SocialButton social="apple" theme="gray">Sign in with Apple</SocialButton>
<SocialButton social="apple" theme="brand" />
<SocialButton social="apple" theme="color" />
<SocialButton social="apple" theme="gray" />`}
            >
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div style={{ ...colStack, maxWidth: 280 }}>
                        <SocialButton social="apple" theme="brand">Sign in with Apple</SocialButton>
                        <SocialButton social="apple" theme="color">Sign in with Apple</SocialButton>
                        <SocialButton social="apple" theme="gray">Sign in with Apple</SocialButton>
                    </div>
                    <div style={rowWrap}>
                        <SocialButton social="apple" theme="brand" />
                        <SocialButton social="apple" theme="color" />
                        <SocialButton social="apple" theme="gray" />
                    </div>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Google — All Themes"
                code={`<SocialButton social="google" theme="brand">Sign in with Google</SocialButton>
<SocialButton social="google" theme="color">Sign in with Google</SocialButton>
<SocialButton social="google" theme="gray">Sign in with Google</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="google" theme="brand">Sign in with Google</SocialButton>
                    <SocialButton social="google" theme="color">Sign in with Google</SocialButton>
                    <SocialButton social="google" theme="gray">Sign in with Google</SocialButton>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="GitHub — All Themes"
                code={`<SocialButton social="github" theme="brand">Sign in with GitHub</SocialButton>
<SocialButton social="github" theme="color">Sign in with GitHub</SocialButton>
<SocialButton social="github" theme="gray">Sign in with GitHub</SocialButton>`}
            >
                <div style={colStack}>
                    <SocialButton social="github" theme="brand">Sign in with GitHub</SocialButton>
                    <SocialButton social="github" theme="color">Sign in with GitHub</SocialButton>
                    <SocialButton social="github" theme="gray">Sign in with GitHub</SocialButton>
                </div>
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three size options for different contexts.</p>

            <ComponentPreview
                title="Sizes"
                code={`<SocialButton social="google" theme="brand" size="sm">Sign in with Google</SocialButton>
<SocialButton social="google" theme="brand" size="md">Sign in with Google</SocialButton>
<SocialButton social="google" theme="brand" size="lg">Sign in with Google</SocialButton>`}
            >
                <div style={{ ...colStack, maxWidth: 320 }}>
                    <SocialButton social="google" theme="brand" size="sm">Sign in with Google</SocialButton>
                    <SocialButton social="google" theme="brand" size="md">Sign in with Google</SocialButton>
                    <SocialButton social="google" theme="brand" size="lg">Sign in with Google</SocialButton>
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the SocialButton component and use it in your application.</p>

            <CodeBlock
                code={`import { SocialButton } from "omnira-ui/SocialButton";

export default function LoginPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
            <SocialButton social="google" theme="brand">
                Sign in with Google
            </SocialButton>
            <SocialButton social="github" theme="color">
                Sign in with GitHub
            </SocialButton>
            <SocialButton social="apple" theme="gray">
                Sign in with Apple
            </SocialButton>

            {/* Icon-only mode — omit children */}
            <div style={{ display: "flex", gap: 12 }}>
                <SocialButton social="google" theme="color" />
                <SocialButton social="github" theme="color" />
                <SocialButton social="apple" theme="color" />
            </div>
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "social", type: '"google" | "facebook" | "apple" | "github" | "x" | "linkedin" | "microsoft" | "discord" | "slack" | "figma" | "dribbble" | "spotify"', description: "Social provider to render" },
                    { name: "theme", type: '"brand" | "color" | "gray"', default: '"brand"', description: "Visual theme — brand colors, colored icon on neutral, or monochrome" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
                    { name: "children", type: "ReactNode", default: "undefined", description: "Button label. Omit for icon-only mode" },
                    { name: "disabled", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </div>
    );
}
