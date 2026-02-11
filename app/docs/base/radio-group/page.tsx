"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { RadioGroups } from "@/components/ui/RadioGroup";

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

/* ── Inline icons (no external deps) ── */
const LayersIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L2 6l8 4 8-4-8-4Z" /><path d="M2 14l8 4 8-4" /><path d="M2 10l8 4 8-4" />
    </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 1L3 12h7l-1 7 8-11h-7l1-7Z" />
    </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 16s-3-2-5-2-3 2-3 2 1-5 3-8 5-5 5-5 3 2 5 5 3 8 3 8-1-2-3-2-5 2-5 2Z" /><circle cx="10" cy="8" r="1.5" />
    </svg>
);

const CodepenIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 1l8 5v8l-8 5-8-5V6l8-5Z" /><path d="M10 1v5M10 14v5M2 6l8 5 8-5M2 14l8-5 8 5" />
    </svg>
);

/* ── Plan data ── */
const plans = [
    {
        value: "basic",
        title: "Basic plan",
        secondaryTitle: "$10/month",
        description: "Includes up to 10 users, 20 GB individual data and access to all features.",
        icon: LayersIcon,
        price: "$10",
        badge: "Limited time only",
    },
    {
        value: "business",
        title: "Business plan",
        secondaryTitle: "$20/month",
        description: "Includes up to 20 users, 40 GB individual data and access to all features.",
        icon: ZapIcon,
        price: "$20",
    },
    {
        value: "enterprise",
        title: "Enterprise plan",
        secondaryTitle: "$40/month",
        description: "Unlimited users, unlimited individual data and access to all features.",
        icon: RocketIcon,
        price: "$40",
    },
    {
        value: "ultimate",
        title: "Ultimate plan",
        secondaryTitle: "$60/month",
        description: "Unlimited users, unlimited individual data and access to all features.",
        icon: CodepenIcon,
        price: "$60",
    },
];

/* ── Payment data ── */
const paymentCards = [
    { value: "card-1", title: "Visa ending in 1234", description: "Expiry 06/2025", logo: <span style={{ fontSize: 18, fontWeight: 700 }}>VISA</span> },
    { value: "card-2", title: "Mastercard ending in 1234", description: "Expiry 06/2025", logo: <span style={{ fontSize: 14, fontWeight: 700 }}>MC</span> },
    { value: "card-3", title: "Apple Pay", description: "Expiry 06/2025", logo: <span style={{ fontSize: 16 }}></span> },
    { value: "card-4", title: "Stripe (Visa ending 1234)", description: "Expiry 06/2025", logo: <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-lime)" }}>Stripe</span> },
    { value: "card-5", title: "PayPal (Visa ending 1234)", description: "Expiry 06/2025", logo: <span style={{ fontSize: 14, fontWeight: 700, color: "#0070ba" }}>PayPal</span> },
];

/* ── People data ── */
const people = [
    { id: "@olivia", name: "Olivia Rhye", username: "@olivia", title: "Product Manager, Integrations", avatarUrl: "https://i.pravatar.cc/80?u=olivia" },
    { id: "@phoenix", name: "Phoenix Baker", username: "@phoenix", title: "Frontend Developer, Payments", avatarUrl: "https://i.pravatar.cc/80?u=phoenix" },
    { id: "@lori", name: "Lori Bryson", username: "@lori", title: "Backend Developer, Payments", avatarUrl: "https://i.pravatar.cc/80?u=lori" },
    { id: "@orlando", name: "Orlando Diggs", username: "@orlando", title: "Sales Manager, Enterprise", avatarUrl: "https://i.pravatar.cc/80?u=orlando" },
    { id: "@kate", name: "Kate Morrison", username: "@kate", title: "Product Designer, Dashboard", avatarUrl: "https://i.pravatar.cc/80?u=kate" },
];

/* ── IconCard plans ── */
const iconCardPlans = [
    { value: "basic", title: "Basic plan", secondaryTitle: "per month", price: "$10", badge: "Limited time only", description: "Includes up to 10 users, 20 GB individual data and access to all features.", icon: LayersIcon },
    { value: "premium", title: "Premium plan", secondaryTitle: "per month", price: "$20", description: "Includes up to 20 users, 40 GB individual data and access to all features.", icon: ZapIcon },
    { value: "enterprise", title: "Enterprise plan", secondaryTitle: "per month", price: "$40", description: "Unlimited users, unlimited individual data and access to all features.", icon: RocketIcon },
];

/* ── Demos ── */
function IconSimpleDemo() {
    return <RadioGroups.IconSimple aria-label="Payment plans" defaultValue="basic" items={plans} />;
}

function CheckboxDemo() {
    return <RadioGroups.Checkbox aria-label="Payment plans" defaultValue="basic" items={plans} />;
}

function PaymentIconDemo() {
    return <RadioGroups.PaymentIcon aria-label="Payment options" defaultValue="card-1" items={paymentCards} />;
}

function AvatarDemo() {
    return <RadioGroups.Avatar aria-label="Users" defaultValue="@olivia" items={people} />;
}

function IconCardDemo() {
    return <RadioGroups.IconCard aria-label="Payment plans" defaultValue="basic" items={iconCardPlans} />;
}

const groupProps = [
    { name: "items", type: "array", description: "Array of option items (see variant-specific types)." },
    { name: "defaultValue", type: "string", description: "Initially selected value." },
    { name: "aria-label", type: "string", description: "Accessible label for the group." },
];

const variantProps = [
    { name: "RadioGroups.IconSimple", type: "component", description: "List with icon, title, secondary title, description, radio indicator, optional badge." },
    { name: "RadioGroups.Checkbox", type: "component", description: "List with checkbox indicator, title, price, description." },
    { name: "RadioGroups.PaymentIcon", type: "component", description: "List with payment logo, title, description, radio indicator." },
    { name: "RadioGroups.Avatar", type: "component", description: "List with avatar image, name, username, title, radio indicator." },
    { name: "RadioGroups.IconCard", type: "component", description: "Card grid with icon, title, price, description, radio indicator, optional badge." },
];

export default function RadioGroupPage() {
    return (
        <div>
            <DocHeader
                title="Radio Group"
                description="Rich radio group variants for selecting plans, payment methods, team members, and more. Each variant provides a unique card-based selection experience."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Radio Group" },
                ]}
            />

            {/* ── Icon Simple ── */}
            <h2 style={sectionHeading}>Icon Simple</h2>
            <p style={sectionDesc}>A list of selectable cards with icon, title, description, and radio indicator.</p>

            <ComponentPreview
                title="Icon Simple"
                code={`<RadioGroups.IconSimple
    aria-label="Payment plans"
    defaultValue="basic"
    items={[
        { value: "basic", title: "Basic plan", secondaryTitle: "$10/month", description: "...", icon: LayersIcon, price: "$10", badge: "Limited time only" },
        { value: "business", title: "Business plan", ... },
    ]}
/>`}
            >
                <IconSimpleDemo />
            </ComponentPreview>

            {/* ── Checkbox ── */}
            <h2 style={sectionHeading}>Checkbox</h2>
            <p style={sectionDesc}>Cards with a checkbox-style indicator, title, price, and description.</p>

            <ComponentPreview
                title="Checkbox"
                code={`<RadioGroups.Checkbox
    aria-label="Payment plans"
    defaultValue="basic"
    items={[
        { value: "basic", title: "Basic plan", price: "$10", description: "..." },
        { value: "business", title: "Business plan", ... },
    ]}
/>`}
            >
                <CheckboxDemo />
            </ComponentPreview>

            {/* ── Payment Icon ── */}
            <h2 style={sectionHeading}>Payment Icon</h2>
            <p style={sectionDesc}>Payment method selection with logos, card details, and radio indicator.</p>

            <ComponentPreview
                title="Payment Icon"
                code={`<RadioGroups.PaymentIcon
    aria-label="Payment options"
    items={[
        { value: "card-1", title: "Visa ending in 1234", description: "Expiry 06/2025", logo: <VisaIcon /> },
        { value: "card-2", title: "Mastercard ending in 1234", ... },
    ]}
/>`}
            >
                <PaymentIconDemo />
            </ComponentPreview>

            {/* ── Avatar ── */}
            <h2 style={sectionHeading}>Avatar</h2>
            <p style={sectionDesc}>Team member selection with avatar, name, username, and role.</p>

            <ComponentPreview
                title="Avatar"
                code={`<RadioGroups.Avatar
    aria-label="Users"
    defaultValue="@olivia"
    items={[
        { id: "@olivia", name: "Olivia Rhye", username: "@olivia", title: "Product Manager", avatarUrl: "..." },
        { id: "@phoenix", name: "Phoenix Baker", ... },
    ]}
/>`}
            >
                <AvatarDemo />
            </ComponentPreview>

            {/* ── Icon Card ── */}
            <h2 style={sectionHeading}>Icon Card</h2>
            <p style={sectionDesc}>A card grid with icon, pricing, description, and optional badge.</p>

            <ComponentPreview
                title="Icon Card"
                code={`<RadioGroups.IconCard
    aria-label="Payment plans"
    defaultValue="basic"
    items={[
        { value: "basic", title: "Basic plan", secondaryTitle: "per month", price: "$10", badge: "Limited time only", description: "...", icon: LayersIcon },
        { value: "premium", title: "Premium plan", ... },
    ]}
/>`}
            >
                <IconCardDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import RadioGroups and use the desired variant.</p>

            <CodeBlock
                code={`import { RadioGroups } from "@/components/ui/RadioGroup";

// Icon Simple
<RadioGroups.IconSimple aria-label="Plans" defaultValue="basic" items={plans} />

// Checkbox
<RadioGroups.Checkbox aria-label="Plans" defaultValue="basic" items={plans} />

// Payment Icon
<RadioGroups.PaymentIcon aria-label="Payment" items={paymentCards} />

// Avatar
<RadioGroups.Avatar aria-label="Users" defaultValue="@olivia" items={people} />

// Icon Card
<RadioGroups.IconCard aria-label="Plans" defaultValue="basic" items={iconCardPlans} />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <h2 style={sectionHeading}>Shared Props</h2>
            <PropsTable props={groupProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>Variants</h2>
            <PropsTable props={variantProps} />
        </div>
    );
}
