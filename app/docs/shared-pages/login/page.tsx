"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { AuthPage } from "@/components/ui/AuthPage";
import { LoginSimple } from "@/components/ui/LoginSimple";
import { LoginSplitImage } from "@/components/ui/LoginSplitImage";
import { LoginSplitQuote } from "@/components/ui/LoginSplitQuote";
import { LoginCardSeparated } from "@/components/ui/LoginCardSeparated";

/* ══════════════════════════════════════════════
   Shared preview wrapper — scales a full-page
   component into a bounded preview container
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
   1. AuthPage Toggle — Demos
   ══════════════════════════════════════════════ */

function AuthPageDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <AuthPage
                    productName="Omnira"
                    logoText="O"
                    onSignIn={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign in:", data); }}
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onForgotPassword={() => console.log("Forgot password")}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const authPageCode = `import { AuthPage } from "@/components/ui/AuthPage";

<AuthPage
  productName="Omnira"
  logoText="O"
  onSignIn={async ({ email, password }) => { /* ... */ }}
  onSignUp={async ({ fullName, companyName, email, password }) => { /* ... */ }}
  onForgotPassword={() => router.push("/forgot-password")}
  onSocialLogin={(provider) => signInWithOAuth(provider)}
  onSuccessContinue={() => router.push("/onboarding")}
/>`;

function AuthPageSignUpDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <AuthPage productName="Acme" logoText="A" defaultSignUp showCompanyField={false} />
            </div>
        </div>
    );
}

const authPageSignUpCode = `<AuthPage
  productName="Acme"
  logoText="A"
  defaultSignUp
  showCompanyField={false}
/>`;

/* ══════════════════════════════════════════════
   2. LoginSimple — Demo
   ══════════════════════════════════════════════ */

function LoginSimpleDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <LoginSimple
                    productName="Omnira"
                    logoText="O"
                    onSignIn={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign in:", data); }}
                    onForgotPassword={() => console.log("Forgot password")}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const loginSimpleCode = `import { LoginSimple } from "@/components/ui/LoginSimple";

<LoginSimple
  productName="Omnira"
  logoText="O"
  heading="Log in to your account"
  subheading="Welcome back! Please enter your details."
  showSocial
  showRememberMe
  onSignIn={async ({ email, password, rememberMe }) => { /* ... */ }}
  onForgotPassword={() => router.push("/forgot-password")}
  onSocialLogin={(provider) => signInWithOAuth(provider)}
  onSignUpClick={() => router.push("/sign-up")}
/>`;

/* ══════════════════════════════════════════════
   3. LoginSplitImage — Demo
   ══════════════════════════════════════════════ */

function LoginSplitImageDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <LoginSplitImage
                    productName="Omnira"
                    logoText="O"
                    onSignIn={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign in:", data); }}
                    onForgotPassword={() => console.log("Forgot password")}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const loginSplitImageCode = `import { LoginSplitImage } from "@/components/ui/LoginSplitImage";

<LoginSplitImage
  productName="Omnira"
  logoText="O"
  imageSrc="/images/login-hero.jpg"
  imageAlt="Product screenshot"
  onSignIn={async ({ email, password }) => { /* ... */ }}
  onForgotPassword={() => router.push("/forgot-password")}
  onSocialLogin={(provider) => signInWithOAuth(provider)}
  onSignUpClick={() => router.push("/sign-up")}
/>`;

/* ══════════════════════════════════════════════
   4. LoginSplitQuote — Demo
   ══════════════════════════════════════════════ */

function LoginSplitQuoteDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <LoginSplitQuote
                    productName="Omnira"
                    logoText="O"
                    quoteText="This platform has completely transformed how we manage our practice. The interface is intuitive and the team behind it truly cares about their users."
                    authorName="Sarah Chen"
                    authorRole="Head of Product, Acme Inc."
                    starRating={5}
                    onSignIn={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign in:", data); }}
                    onForgotPassword={() => console.log("Forgot password")}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const loginSplitQuoteCode = `import { LoginSplitQuote } from "@/components/ui/LoginSplitQuote";

<LoginSplitQuote
  productName="Omnira"
  logoText="O"
  quoteText="This platform has completely transformed how we manage our practice."
  authorName="Sarah Chen"
  authorRole="Head of Product, Acme Inc."
  starRating={5}
  onSignIn={async ({ email, password }) => { /* ... */ }}
  onForgotPassword={() => router.push("/forgot-password")}
  onSocialLogin={(provider) => signInWithOAuth(provider)}
  onSignUpClick={() => router.push("/sign-up")}
/>`;

/* ══════════════════════════════════════════════
   5. LoginCardSeparated — Demo
   ══════════════════════════════════════════════ */

function LoginCardSeparatedDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <LoginCardSeparated
                    logoText="O"
                    onSignIn={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign in:", data); }}
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onForgotPassword={() => console.log("Forgot password")}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const loginCardSeparatedCode = `import { LoginCardSeparated } from "@/components/ui/LoginCardSeparated";

<LoginCardSeparated
  logoText="O"
  heading="Log in to your account"
  subheading="Welcome back! Please enter your details."
  signUpHeading="Create an account"
  signUpSubheading="Get started with your free account today."
  showSocial
  showRememberMe
  onSignIn={async ({ email, password, rememberMe }) => { /* ... */ }}
  onSignUp={async ({ name, email, password }) => { /* ... */ }}
  onForgotPassword={() => router.push("/forgot-password")}
  onSocialLogin={(provider) => signInWithOAuth(provider)}
/>`;

/* ══════════════════════════════════════════════
   Props Tables
   ══════════════════════════════════════════════ */

const authPageProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name shown in the overlay text." },
    { name: "logoText", type: "string", default: '"O"', description: "Single character or short text for the overlay logo." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element (replaces logoText)." },
    { name: "defaultSignUp", type: "boolean", default: "false", description: "Start on sign-up mode instead of sign-in." },
    { name: "onSignIn", type: "(data) => Promise<void> | void", description: "Callback on sign-in form submit. Throw an Error to show error banner." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on sign-up form submit. On success, shows verification card." },
    { name: "onForgotPassword", type: "() => void", description: "Callback when 'Forgot your password?' is clicked." },
    { name: "onSocialLogin", type: '(provider) => void', description: "Callback when a social login button is clicked." },
    { name: "onSuccessContinue", type: "() => void", description: "Callback for 'Continue to Setup' on success card." },
    { name: "showCompanyField", type: "boolean", default: "true", description: "Show company/practice name field in sign-up." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const loginSimpleProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Log in to your account"', description: "Main heading text." },
    { name: "subheading", type: "string", description: "Subheading text below the heading." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showRememberMe", type: "boolean", default: "true", description: "Show 'Remember me' checkbox." },
    { name: "onSignIn", type: "(data) => Promise<void> | void", description: "Callback on form submit." },
    { name: "onForgotPassword", type: "() => void", description: "Forgot password callback." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignUpClick", type: "() => void", description: "Sign up link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const loginSplitImageProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Log in to your account"', description: "Main heading." },
    { name: "subheading", type: "string", description: "Subheading text." },
    { name: "imageSrc", type: "string", description: "Image URL for the right panel. Shows gradient placeholder if omitted." },
    { name: "imageAlt", type: "string", default: '"Login visual"', description: "Image alt text." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "onSignIn", type: "(data) => Promise<void> | void", description: "Callback on form submit." },
    { name: "onForgotPassword", type: "() => void", description: "Forgot password callback." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignUpClick", type: "() => void", description: "Sign up link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const loginSplitQuoteProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Log in to your account"', description: "Main heading." },
    { name: "subheading", type: "string", description: "Subheading text." },
    { name: "quoteText", type: "string", description: "Testimonial quote displayed on the right panel." },
    { name: "authorName", type: "string", default: '"Sarah Chen"', description: "Quote author name." },
    { name: "authorRole", type: "string", description: "Quote author role/title." },
    { name: "authorAvatar", type: "string", description: "Author avatar image URL." },
    { name: "starRating", type: "number", default: "5", description: "Star rating (0-5) shown above the quote." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "onSignIn", type: "(data) => Promise<void> | void", description: "Callback on form submit." },
    { name: "onForgotPassword", type: "() => void", description: "Forgot password callback." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignUpClick", type: "() => void", description: "Sign up link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const loginCardSeparatedProps = [
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Log in to your account"', description: "Sign-in heading." },
    { name: "subheading", type: "string", default: '"Welcome back! Please enter your details."', description: "Sign-in subheading." },
    { name: "signUpHeading", type: "string", default: '"Create an account"', description: "Sign-up heading." },
    { name: "signUpSubheading", type: "string", default: '"Get started with your free account today."', description: "Sign-up subheading." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showRememberMe", type: "boolean", default: "true", description: "Show 'Remember me' checkbox." },
    { name: "defaultSignUp", type: "boolean", default: "false", description: "Start on sign-up view instead of sign-in." },
    { name: "onSignIn", type: "(data) => Promise<void> | void", description: "Callback on sign-in submit. Receives { email, password, rememberMe }." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on sign-up submit. Receives { name, email, password }." },
    { name: "onForgotPassword", type: "() => void", description: "Forgot password callback." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignUpClick", type: "() => void", description: "Overrides built-in sign-up toggle with custom navigation." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function LoginPage() {
    return (
        <div>
            <DocHeader
                title="Login Pages"
                description="A collection of production-ready login page components. Includes toggle-based, simple centered, split with image, split with testimonial quote, and card-separated layouts. All variants support social login, validation, loading states, and are fully responsive."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Login Pages" },
                ]}
            />

            {/* ── 1. AuthPage Toggle ── */}
            <ComponentPreview
                title="Toggle (Sign In / Sign Up)"
                description="A single full-screen component with both Sign In and Sign Up forms. The sliding overlay acts as a giant toggle switch between the two forms."
                code={authPageCode}
            >
                <AuthPageDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Toggle — Sign Up Default"
                description="Start on the sign-up form with defaultSignUp. The company field can be hidden."
                code={authPageSignUpCode}
            >
                <AuthPageSignUpDemo />
            </ComponentPreview>

            <PropsTable title="AuthPage" props={authPageProps} />

            {/* ── 2. LoginSimple ── */}
            <ComponentPreview
                title="Simple Centered"
                description="A clean, centered login form with social buttons, email/password fields, remember me checkbox, and forgot password link. No split layout — ideal for minimal auth flows."
                code={loginSimpleCode}
            >
                <LoginSimpleDemo />
            </ComponentPreview>

            <PropsTable title="LoginSimple" props={loginSimpleProps} />

            {/* ── 3. LoginSplitImage ── */}
            <ComponentPreview
                title="Split with Image"
                description="Left-side login form with a full-height image panel on the right. Pass an imageSrc prop for a custom image, or leave it empty for a branded gradient placeholder."
                code={loginSplitImageCode}
            >
                <LoginSplitImageDemo />
            </ComponentPreview>

            <PropsTable title="LoginSplitImage" props={loginSplitImageProps} />

            {/* ── 4. LoginSplitQuote ── */}
            <ComponentPreview
                title="Split with Testimonial"
                description="Left-side login form with a testimonial/quote panel on the right. Features a star rating, quote text, and author info with avatar."
                code={loginSplitQuoteCode}
            >
                <LoginSplitQuoteDemo />
            </ComponentPreview>

            <PropsTable title="LoginSplitQuote" props={loginSplitQuoteProps} />

            {/* ── 5. LoginCardSeparated ── */}
            <ComponentPreview
                title="Card with Separated Sections"
                description="A centered card layout with social login buttons in the top section, a divider, and email/password form in the bottom section. The sign-up link sits outside the card."
                code={loginCardSeparatedCode}
            >
                <LoginCardSeparatedDemo />
            </ComponentPreview>

            <PropsTable title="LoginCardSeparated" props={loginCardSeparatedProps} />
        </div>
    );
}
