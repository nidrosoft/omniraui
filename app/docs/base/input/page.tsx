"use client";

import { useState, useRef, useEffect } from "react";
import {
    SearchNormal1,
    Lock1,
    Sms,
    Eye,
    EyeSlash,
    Call,
    Link1,
    ArrowDown2,
    Card,
    Bitcoin,
    Copy,
} from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Input } from "@/components/ui/Input";

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

const demoWrap: React.CSSProperties = {
    maxWidth: 400,
    width: "100%",
};

const miniDropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    zIndex: 100,
    minWidth: 120,
    padding: 4,
    borderRadius: "var(--radius-lg)",
    background: "var(--color-bg-card)",
    border: "1.5px solid var(--color-border-standard)",
    boxShadow: "var(--shadow-card)",
    display: "flex",
    flexDirection: "column",
    gap: 2,
};

const miniOptionStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: "100%",
    padding: "6px 10px",
    border: "none",
    borderRadius: "var(--radius-md)",
    background: "transparent",
    color: "var(--color-text-primary)",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
    textAlign: "left",
    whiteSpace: "nowrap",
    transition: "background 0.15s",
};

/* ── Default Demo ── */
function DefaultDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Email"
                hint="This is a hint text to help user."
                placeholder="olivia@untitledui.com"
                required
                type="email"
            />
        </div>
    );
}

/* ── Disabled Demo ── */
function DisabledDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Email"
                placeholder="olivia@untitledui.com"
                disabled
            />
        </div>
    );
}

/* ── Invalid Demo ── */
function InvalidDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Email"
                placeholder="olivia@untitledui.com"
                error="Please enter a valid email address."
                required
                defaultValue="not-an-email"
            />
        </div>
    );
}

/* ── Sizes Demo ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, ...demoWrap }}>
            <Input inputSize="sm" label="Small" placeholder="Small input" />
            <Input inputSize="md" label="Medium" placeholder="Medium input" />
            <Input inputSize="lg" label="Large" placeholder="Large input" />
        </div>
    );
}

/* ── Leading Icon Demo ── */
function LeadingIconDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Email"
                placeholder="olivia@untitledui.com"
                hint="Input with a leading icon."
                leadingIcon={<Sms size={16} variant="Bulk" color="var(--color-text-tertiary)" />}
            />
        </div>
    );
}

/* ── Leading Dropdown Demo ── */
function LeadingDropdownDemo() {
    const [country, setCountry] = useState("US +1");
    const [countryOpen, setCountryOpen] = useState(false);
    const countries = ["US +1", "UK +44", "CA +1", "AU +61", "DE +49", "FR +33", "JP +81", "IN +91"];
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!countryOpen) return;
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setCountryOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [countryOpen]);

    return (
        <div style={demoWrap}>
            <Input
                label="Phone"
                placeholder="+1 (555) 000-0000"
                hint="Input with a leading country selector."
                type="tel"
                leadingDropdown={
                    <div ref={ref} style={{ position: "relative" }}>
                        <button
                            type="button"
                            onClick={() => setCountryOpen(!countryOpen)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "inherit",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "var(--color-text-primary)",
                                padding: "0 4px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {country.split(" ")[0]}
                            <ArrowDown2 size={12} color="var(--color-text-tertiary)" />
                        </button>
                        {countryOpen && (
                            <div style={miniDropdownStyle}>
                                {countries.map((c) => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => { setCountry(c); setCountryOpen(false); }}
                                        style={{
                                            ...miniOptionStyle,
                                            background: c === country ? "var(--color-bg-lime-subtle)" : "transparent",
                                        }}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                }
            />
        </div>
    );
}

/* ── Trailing Icon Demo ── */
function TrailingIconDemo() {
    const [show, setShow] = useState(false);
    return (
        <div style={demoWrap}>
            <Input
                label="Password"
                placeholder="Enter password"
                type={show ? "text" : "password"}
                trailingIcon={
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            padding: 0,
                        }}
                    >
                        {show ? (
                            <EyeSlash size={16} variant="Bulk" color="var(--color-text-tertiary)" />
                        ) : (
                            <Eye size={16} variant="Bulk" color="var(--color-text-tertiary)" />
                        )}
                    </button>
                }
            />
        </div>
    );
}

/* ── Trailing Dropdown Demo ── */
function TrailingDropdownDemo() {
    const [currency, setCurrency] = useState("USD");
    const [currOpen, setCurrOpen] = useState(false);
    const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "CHF", "NGN"];
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!currOpen) return;
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setCurrOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [currOpen]);

    return (
        <div style={demoWrap}>
            <Input
                label="Amount"
                placeholder="0.00"
                type="number"
                hint="Input with a trailing currency selector."
                trailingDropdown={
                    <div ref={ref} style={{ position: "relative" }}>
                        <button
                            type="button"
                            onClick={() => setCurrOpen(!currOpen)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "inherit",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "var(--color-text-primary)",
                                padding: "0 4px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {currency}
                            <ArrowDown2 size={12} color="var(--color-text-tertiary)" />
                        </button>
                        {currOpen && (
                            <div style={{ ...miniDropdownStyle, left: "auto", right: 0 }}>
                                {currencies.map((c) => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => { setCurrency(c); setCurrOpen(false); }}
                                        style={{
                                            ...miniOptionStyle,
                                            background: c === currency ? "var(--color-bg-lime-subtle)" : "transparent",
                                        }}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                }
            />
        </div>
    );
}

/* ── Leading Text Demo ── */
function LeadingTextDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Website"
                placeholder="yoursite.com"
                hint="Input with leading text prefix."
                leadingText="https://"
            />
        </div>
    );
}

/* ── Payment Input Demo ── */
function PaymentDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Card Number"
                placeholder="1234 1234 1234 1234"
                hint="Enter your card details."
                leadingIcon={<Card size={16} variant="Bulk" color="var(--color-text-tertiary)" />}
                trailingIcon={
                    <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                            <rect width="24" height="16" rx="2" fill="#1A1F71" />
                            <path d="M9.5 11.5L11 4.5H12.8L11.3 11.5H9.5Z" fill="white" />
                            <path d="M16.2 4.5L14.7 9.2L14.5 8.2L13.8 5.1C13.8 5.1 13.7 4.5 12.9 4.5H10.3L10.3 4.7C10.3 4.7 11.2 4.9 12.2 5.5L13.8 11.5H15.7L18.1 4.5H16.2Z" fill="white" />
                            <path d="M8.5 4.5L6.6 9.2L6.4 8.1C6 6.8 4.8 5.4 3.5 4.7L5.1 11.5H7L10.2 4.5H8.5Z" fill="white" />
                            <path d="M5.8 4.5H3.1L3 4.7C5 5.2 6.3 6.4 6.8 7.8L6.2 5.1C6.1 4.6 5.9 4.5 5.8 4.5Z" fill="#F9A533" />
                        </svg>
                    </span>
                }
            />
        </div>
    );
}

/* ── Trailing Button Demo ── */
function TrailingButtonDemo() {
    return (
        <div style={demoWrap}>
            <Input
                label="Invite Link"
                placeholder="Enter email address"
                hint="Send an invite to a team member."
                trailingButton={
                    <button
                        type="button"
                        style={{
                            background: "var(--color-lime)",
                            color: "var(--color-bg-primary)",
                        }}
                    >
                        Send
                    </button>
                }
            />
        </div>
    );
}

const inputProps = [
    { name: "label", type: "string", description: "Label text above the input." },
    { name: "error", type: "string", description: "Error message. Replaces hint when present." },
    { name: "hint", type: "string", description: "Helper/hint text below the input." },
    { name: "helperText", type: "string", description: "Alias for hint (backward compatible)." },
    { name: "inputSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input height size." },
    { name: "required", type: "boolean", default: "false", description: "Show required asterisk on label." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the input." },
    { name: "leadingIcon", type: "ReactNode", description: "Icon positioned inside the left of the input." },
    { name: "trailingIcon", type: "ReactNode", description: "Icon positioned inside the right of the input." },
    { name: "leadingDropdown", type: "ReactNode", description: "Dropdown element on the left (e.g. country code)." },
    { name: "trailingDropdown", type: "ReactNode", description: "Dropdown element on the right (e.g. currency)." },
    { name: "leadingText", type: "string", description: "Static text prefix (e.g. 'https://')." },
    { name: "trailingButton", type: "ReactNode", description: "Button element on the right edge." },
    { name: "wrapperClassName", type: "string", description: "Additional CSS class for the wrapper." },
];

export default function InputPage() {
    return (
        <div>
            <DocHeader
                title="Input"
                description="Text inputs allow users to enter and edit text. Supports labels, icons, dropdowns, leading text, trailing buttons, error states, and multiple sizes."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Input" },
                ]}
            />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A basic input with label, hint text, and required indicator.</p>

            <ComponentPreview
                title="Default Input"
                code={`<Input
    label="Email"
    hint="This is a hint text to help user."
    placeholder="olivia@untitledui.com"
    required
    type="email"
/>`}
            >
                <DefaultDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>A disabled input that cannot be interacted with.</p>

            <ComponentPreview
                title="Disabled"
                code={`<Input
    label="Email"
    placeholder="olivia@untitledui.com"
    disabled
/>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Invalid ── */}
            <h2 style={sectionHeading}>Invalid / Error</h2>
            <p style={sectionDesc}>Pass an error prop to show validation state with a red border and error message.</p>

            <ComponentPreview
                title="Error State"
                code={`<Input
    label="Email"
    placeholder="olivia@untitledui.com"
    error="Please enter a valid email address."
    required
    defaultValue="not-an-email"
/>`}
            >
                <InvalidDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm (36px), md (44px), and lg (52px).</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<Input inputSize="sm" label="Small" placeholder="Small input" />
<Input inputSize="md" label="Medium" placeholder="Medium input" />
<Input inputSize="lg" label="Large" placeholder="Large input" />`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Leading Icon ── */}
            <h2 style={sectionHeading}>Leading Icon</h2>
            <p style={sectionDesc}>An icon positioned inside the left of the input field.</p>

            <ComponentPreview
                title="Leading Icon"
                code={`<Input
    label="Email"
    placeholder="olivia@untitledui.com"
    leadingIcon={<Sms size={16} variant="Bulk" color="var(--color-text-tertiary)" />}
/>`}
            >
                <LeadingIconDemo />
            </ComponentPreview>

            {/* ── Leading Dropdown ── */}
            <h2 style={sectionHeading}>Leading Dropdown</h2>
            <p style={sectionDesc}>A dropdown selector on the left side, useful for country codes or prefixes.</p>

            <ComponentPreview
                title="Leading Dropdown"
                code={`<Input
    label="Phone"
    placeholder="(555) 000-0000"
    type="tel"
    leadingDropdown={
        <button>
            US <ArrowDown2 size={12} />
        </button>
    }
/>`}
            >
                <LeadingDropdownDemo />
            </ComponentPreview>

            {/* ── Trailing Icon ── */}
            <h2 style={sectionHeading}>Trailing Icon</h2>
            <p style={sectionDesc}>An interactive icon on the right, such as a password visibility toggle.</p>

            <ComponentPreview
                title="Trailing Icon (Password Toggle)"
                code={`const [show, setShow] = useState(false);

<Input
    label="Password"
    placeholder="Enter password"
    type={show ? "text" : "password"}
    trailingIcon={
        <button onClick={() => setShow(!show)}>
            {show ? <EyeSlash size={16} /> : <Eye size={16} />}
        </button>
    }
/>`}
            >
                <TrailingIconDemo />
            </ComponentPreview>

            {/* ── Trailing Dropdown ── */}
            <h2 style={sectionHeading}>Trailing Dropdown</h2>
            <p style={sectionDesc}>A dropdown on the right side, useful for currency or unit selectors.</p>

            <ComponentPreview
                title="Trailing Dropdown"
                code={`<Input
    label="Amount"
    placeholder="0.00"
    type="number"
    trailingDropdown={
        <button>
            USD <ArrowDown2 size={12} />
        </button>
    }
/>`}
            >
                <TrailingDropdownDemo />
            </ComponentPreview>

            {/* ── Leading Text ── */}
            <h2 style={sectionHeading}>Leading Text</h2>
            <p style={sectionDesc}>A static text prefix inside the input, such as a URL protocol.</p>

            <ComponentPreview
                title="Leading Text"
                code={`<Input
    label="Website"
    placeholder="yoursite.com"
    leadingText="https://"
/>`}
            >
                <LeadingTextDemo />
            </ComponentPreview>

            {/* ── Payment Input ── */}
            <h2 style={sectionHeading}>Payment Input</h2>
            <p style={sectionDesc}>A card number input with a leading card icon and trailing card brand indicator.</p>

            <ComponentPreview
                title="Payment Input"
                code={`<Input
    label="Card Number"
    placeholder="1234 1234 1234 1234"
    hint="Enter your card details."
    leadingIcon={<Card size={16} variant="Bulk" />}
    trailingIcon={<VisaIcon />}
/>`}
            >
                <PaymentDemo />
            </ComponentPreview>

            {/* ── Trailing Button ── */}
            <h2 style={sectionHeading}>Trailing Button</h2>
            <p style={sectionDesc}>An action button attached to the right edge of the input.</p>

            <ComponentPreview
                title="Trailing Button"
                code={`<Input
    label="Invite Link"
    placeholder="Enter email address"
    hint="Send an invite to a team member."
    trailingButton={
        <button style={{
            background: "var(--color-lime)",
            color: "var(--color-bg-primary)",
        }}>
            Send
        </button>
    }
/>`}
            >
                <TrailingButtonDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Input component and configure with props.</p>

            <CodeBlock
                code={`import { Input } from "@/components/ui/Input";

// Basic
<Input label="Email" placeholder="you@example.com" required />

// With leading icon
<Input
    label="Search"
    placeholder="Search..."
    leadingIcon={<SearchNormal1 size={16} variant="Bulk" />}
/>

// With trailing button
<Input
    label="Subscribe"
    placeholder="Enter email"
    trailingButton={<button>Subscribe</button>}
/>

// With leading text
<Input label="Website" placeholder="yoursite.com" leadingText="https://" />

// With leading dropdown
<Input
    label="Phone"
    placeholder="(555) 000-0000"
    leadingDropdown={<button>US ▾</button>}
/>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={inputProps} />
        </div>
    );
}
