"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CreditCard } from "@/components/ui/CreditCard";

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

function BrandDarkDemo() {
    return (
        <CreditCard
            type="brand-dark"
            company="Omnira."
            cardNumber="1234 1234 1234 1234"
            cardHolder="OLIVIA RHYE"
            cardExpiration="06/28"
        />
    );
}

function BrandLightDemo() {
    return (
        <CreditCard
            type="brand-light"
            company="Omnira."
            cardNumber="5678 5678 5678 5678"
            cardHolder="JOHN DOE"
            cardExpiration="12/27"
        />
    );
}

function GradientDemo() {
    return (
        <CreditCard
            type="gradient"
            company="Omnira."
            cardNumber="9012 9012 9012 9012"
            cardHolder="JANE SMITH"
            cardExpiration="03/29"
        />
    );
}

function MinimalDemo() {
    return (
        <CreditCard
            type="minimal"
            company="Omnira."
            cardNumber="3456 3456 3456 3456"
            cardHolder="ALEX CHEN"
            cardExpiration="09/26"
        />
    );
}

const creditCardProps = [
    { name: "type", type: '"brand-dark" | "brand-light" | "gradient" | "minimal"', default: '"brand-dark"', description: "Card visual style." },
    { name: "company", type: "string", default: '"Omnira."', description: "Company name on the card." },
    { name: "cardNumber", type: "string", default: '"1234 1234 1234 1234"', description: "Full card number (last 4 shown)." },
    { name: "cardHolder", type: "string", default: '"CARD HOLDER"', description: "Cardholder name." },
    { name: "cardExpiration", type: "string", default: '"00/00"', description: "Expiration date." },
];

export default function CreditCardPage() {
    return (
        <div>
            <DocHeader
                title="Credit Card"
                description="A decorative credit card component with multiple visual styles, chip, and card network icons."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Credit Card" },
                ]}
            />

            <h2 style={sectionHeading}>Brand Dark</h2>
            <p style={sectionDesc}>Dark gradient card with white text.</p>
            <ComponentPreview title="Brand Dark" code={`<CreditCard\n    type="brand-dark"\n    company="Omnira."\n    cardNumber="1234 1234 1234 1234"\n    cardHolder="OLIVIA RHYE"\n    cardExpiration="06/28"\n/>`}>
                <BrandDarkDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Brand Light</h2>
            <p style={sectionDesc}>Light card with dark text.</p>
            <ComponentPreview title="Brand Light" code={`<CreditCard\n    type="brand-light"\n    company="Omnira."\n    cardNumber="5678 5678 5678 5678"\n    cardHolder="JOHN DOE"\n    cardExpiration="12/27"\n/>`}>
                <BrandLightDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Gradient</h2>
            <p style={sectionDesc}>Purple gradient card.</p>
            <ComponentPreview title="Gradient" code={`<CreditCard\n    type="gradient"\n    company="Omnira."\n    cardNumber="9012 9012 9012 9012"\n    cardHolder="JANE SMITH"\n    cardExpiration="03/29"\n/>`}>
                <GradientDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Minimal</h2>
            <p style={sectionDesc}>Glassmorphism card that adapts to the current theme.</p>
            <ComponentPreview title="Minimal" code={`<CreditCard\n    type="minimal"\n    company="Omnira."\n    cardNumber="3456 3456 3456 3456"\n    cardHolder="ALEX CHEN"\n    cardExpiration="09/26"\n/>`}>
                <MinimalDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and configure the CreditCard component.</p>
            <CodeBlock
                code={`import { CreditCard } from "@/components/ui/CreditCard";

<CreditCard
    type="brand-dark"
    company="Omnira."
    cardNumber="1234 1234 1234 1234"
    cardHolder="OLIVIA RHYE"
    cardExpiration="06/28"
/>`}
                language="tsx"
            />

            <PropsTable props={creditCardProps} />
        </div>
    );
}
