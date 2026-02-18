"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SignUpSimple } from "@/components/ui/SignUpSimple";
import { SignUpSplitImage } from "@/components/ui/SignUpSplitImage";
import { SignUpSplitQuote } from "@/components/ui/SignUpSplitQuote";
import { SignUpCardSeparated } from "@/components/ui/SignUpCardSeparated";

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
   1. SignUpSimple — Demo
   ══════════════════════════════════════════════ */

function SignUpSimpleDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <SignUpSimple
                    logoText="O"
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const signUpSimpleCode = `import { SignUpSimple } from "@/components/ui/SignUpSimple";

<SignUpSimple
  logoText="O"
  heading="Create an account"
  subheading="Start your journey today. It only takes a minute."
  showSocial
  showTerms
  onSignUp={async ({ name, email, password, agreedToTerms }) => { /* ... */ }}
  onSocialLogin={(provider) => signUpWithOAuth(provider)}
  onSignInClick={() => router.push("/sign-in")}
  onTermsClick={() => router.push("/terms")}
  onPrivacyClick={() => router.push("/privacy")}
/>`;

/* ══════════════════════════════════════════════
   2. SignUpSplitImage — Demo
   ══════════════════════════════════════════════ */

function SignUpSplitImageDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <SignUpSplitImage
                    productName="Omnira"
                    logoText="O"
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const signUpSplitImageCode = `import { SignUpSplitImage } from "@/components/ui/SignUpSplitImage";

<SignUpSplitImage
  productName="Omnira"
  logoText="O"
  imageSrc="/images/signup-hero.jpg"
  imageAlt="Product screenshot"
  onSignUp={async ({ name, email, password, agreedToTerms }) => { /* ... */ }}
  onSocialLogin={(provider) => signUpWithOAuth(provider)}
  onSignInClick={() => router.push("/sign-in")}
  onTermsClick={() => router.push("/terms")}
  onPrivacyClick={() => router.push("/privacy")}
/>`;

/* ══════════════════════════════════════════════
   3. SignUpSplitQuote — Demo
   ══════════════════════════════════════════════ */

function SignUpSplitQuoteDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <SignUpSplitQuote
                    productName="Omnira"
                    logoText="O"
                    quoteText="This platform has completely transformed how we manage our practice. The interface is intuitive and the team behind it truly cares about their users."
                    authorName="Sarah Chen"
                    authorRole="Head of Product, Acme Inc."
                    starRating={5}
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const signUpSplitQuoteCode = `import { SignUpSplitQuote } from "@/components/ui/SignUpSplitQuote";

<SignUpSplitQuote
  productName="Omnira"
  logoText="O"
  quoteText="This platform has completely transformed how we manage our practice."
  authorName="Sarah Chen"
  authorRole="Head of Product, Acme Inc."
  starRating={5}
  onSignUp={async ({ name, email, password, agreedToTerms }) => { /* ... */ }}
  onSocialLogin={(provider) => signUpWithOAuth(provider)}
  onSignInClick={() => router.push("/sign-in")}
  onTermsClick={() => router.push("/terms")}
  onPrivacyClick={() => router.push("/privacy")}
/>`;

/* ══════════════════════════════════════════════
   4. SignUpCardSeparated — Demo
   ══════════════════════════════════════════════ */

function SignUpCardSeparatedDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <SignUpCardSeparated
                    logoText="O"
                    onSignUp={async (data) => { await new Promise((r) => setTimeout(r, 1500)); console.log("Sign up:", data); }}
                    onSocialLogin={(provider) => console.log("Social:", provider)}
                />
            </div>
        </div>
    );
}

const signUpCardSeparatedCode = `import { SignUpCardSeparated } from "@/components/ui/SignUpCardSeparated";

<SignUpCardSeparated
  logoText="O"
  heading="Create an account"
  subheading="Start your journey today. It only takes a minute."
  showSocial
  showTerms
  onSignUp={async ({ name, email, password, agreedToTerms }) => { /* ... */ }}
  onSocialLogin={(provider) => signUpWithOAuth(provider)}
  onSignInClick={() => router.push("/sign-in")}
  onTermsClick={() => router.push("/terms")}
  onPrivacyClick={() => router.push("/privacy")}
/>`;

/* ══════════════════════════════════════════════
   Props Tables
   ══════════════════════════════════════════════ */

const signUpSimpleProps = [
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Create an account"', description: "Main heading text." },
    { name: "subheading", type: "string", default: '"Start your journey today. It only takes a minute."', description: "Subheading text." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showTerms", type: "boolean", default: "true", description: "Show terms & conditions checkbox." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on form submit. Receives { name, email, password, agreedToTerms }." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignInClick", type: "() => void", description: "Sign in link callback." },
    { name: "onTermsClick", type: "() => void", description: "Terms of Service link callback." },
    { name: "onPrivacyClick", type: "() => void", description: "Privacy Policy link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const signUpSplitImageProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Create an account"', description: "Main heading." },
    { name: "subheading", type: "string", description: "Subheading text." },
    { name: "imageSrc", type: "string", description: "Image URL for the right panel. Shows gradient placeholder if omitted." },
    { name: "imageAlt", type: "string", default: '"Sign up visual"', description: "Image alt text." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showTerms", type: "boolean", default: "true", description: "Show terms & conditions checkbox." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on form submit. Receives { name, email, password, agreedToTerms }." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignInClick", type: "() => void", description: "Sign in link callback." },
    { name: "onTermsClick", type: "() => void", description: "Terms of Service link callback." },
    { name: "onPrivacyClick", type: "() => void", description: "Privacy Policy link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const signUpSplitQuoteProps = [
    { name: "productName", type: "string", default: '"Omnira"', description: "Product/brand name." },
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Create an account"', description: "Main heading." },
    { name: "subheading", type: "string", description: "Subheading text." },
    { name: "quoteText", type: "string", description: "Testimonial quote displayed on the right panel." },
    { name: "authorName", type: "string", default: '"Sarah Chen"', description: "Quote author name." },
    { name: "authorRole", type: "string", description: "Quote author role/title." },
    { name: "authorAvatar", type: "string", description: "Author avatar image URL." },
    { name: "starRating", type: "number", default: "5", description: "Star rating (0-5) shown above the quote." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showTerms", type: "boolean", default: "true", description: "Show terms & conditions checkbox." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on form submit. Receives { name, email, password, agreedToTerms }." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignInClick", type: "() => void", description: "Sign in link callback." },
    { name: "onTermsClick", type: "() => void", description: "Terms of Service link callback." },
    { name: "onPrivacyClick", type: "() => void", description: "Privacy Policy link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

const signUpCardSeparatedProps = [
    { name: "logoText", type: "string", default: '"O"', description: "Logo character." },
    { name: "logo", type: "React.ReactNode", description: "Custom logo element." },
    { name: "heading", type: "string", default: '"Create an account"', description: "Main heading." },
    { name: "subheading", type: "string", default: '"Start your journey today. It only takes a minute."', description: "Subheading text." },
    { name: "showSocial", type: "boolean", default: "true", description: "Show social login buttons." },
    { name: "showTerms", type: "boolean", default: "true", description: "Show terms & conditions checkbox." },
    { name: "onSignUp", type: "(data) => Promise<void> | void", description: "Callback on form submit. Receives { name, email, password, agreedToTerms }." },
    { name: "onSocialLogin", type: "(provider) => void", description: "Social login callback." },
    { name: "onSignInClick", type: "() => void", description: "Sign in link callback." },
    { name: "onTermsClick", type: "() => void", description: "Terms of Service link callback." },
    { name: "onPrivacyClick", type: "() => void", description: "Privacy Policy link callback." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function SignUpPage() {
    return (
        <div>
            <DocHeader
                title="Sign Up Pages"
                description="A collection of production-ready sign up page components. Includes simple centered, split with image, split with testimonial quote, and card-separated layouts. All variants support social registration, terms & conditions, validation, loading states, and are fully responsive."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "Sign Up Pages" },
                ]}
            />

            {/* ── 1. SignUpSimple ── */}
            <ComponentPreview
                title="Simple Centered"
                description="A clean, centered sign up form with social buttons, name/email/password fields, terms checkbox, and sign-in link. Ideal for minimal registration flows."
                code={signUpSimpleCode}
            >
                <SignUpSimpleDemo />
            </ComponentPreview>

            <PropsTable title="SignUpSimple" props={signUpSimpleProps} />

            {/* ── 2. SignUpSplitImage ── */}
            <ComponentPreview
                title="Split with Image"
                description="Left-side sign up form with a full-height image panel on the right. Pass an imageSrc prop for a custom image, or leave it empty for a branded gradient placeholder."
                code={signUpSplitImageCode}
            >
                <SignUpSplitImageDemo />
            </ComponentPreview>

            <PropsTable title="SignUpSplitImage" props={signUpSplitImageProps} />

            {/* ── 3. SignUpSplitQuote ── */}
            <ComponentPreview
                title="Split with Testimonial"
                description="Left-side sign up form with a testimonial/quote panel on the right. Features a star rating, quote text, and author info with avatar. Great for social proof during registration."
                code={signUpSplitQuoteCode}
            >
                <SignUpSplitQuoteDemo />
            </ComponentPreview>

            <PropsTable title="SignUpSplitQuote" props={signUpSplitQuoteProps} />

            {/* ── 4. SignUpCardSeparated ── */}
            <ComponentPreview
                title="Card with Separated Sections"
                description="A centered card layout with social registration buttons in the top section, a divider, and name/email/password form in the bottom section. The sign-in link sits outside the card."
                code={signUpCardSeparatedCode}
            >
                <SignUpCardSeparatedDemo />
            </ComponentPreview>

            <PropsTable title="SignUpCardSeparated" props={signUpCardSeparatedProps} />
        </div>
    );
}
