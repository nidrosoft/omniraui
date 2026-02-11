"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { PinInput } from "@/components/ui/PinInput";

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

/* ── 6-digit Default ── */
function DefaultDemo() {
    return (
        <PinInput size="md">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
}

/* ── 4-digit ── */
function FourDigitDemo() {
    return (
        <PinInput size="md">
            <PinInput.Label>PIN</PinInput.Label>
            <PinInput.Group maxLength={4}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>Enter your 4-digit PIN.</PinInput.Description>
        </PinInput>
    );
}

/* ── 6-digit with Separator (3+3) ── */
function SeparatorDemo() {
    return (
        <PinInput size="md">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
}

/* ── Disabled ── */
function DisabledDemo() {
    return (
        <PinInput size="md" disabled>
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This input is disabled.</PinInput.Description>
        </PinInput>
    );
}

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <PinInput size="sm">
                <PinInput.Label>Small</PinInput.Label>
                <PinInput.Group maxLength={6}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Separator />
                    <PinInput.Slot index={3} />
                    <PinInput.Slot index={4} />
                    <PinInput.Slot index={5} />
                </PinInput.Group>
            </PinInput>
            <PinInput size="md">
                <PinInput.Label>Medium</PinInput.Label>
                <PinInput.Group maxLength={6}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Separator />
                    <PinInput.Slot index={3} />
                    <PinInput.Slot index={4} />
                    <PinInput.Slot index={5} />
                </PinInput.Group>
            </PinInput>
            <PinInput size="lg">
                <PinInput.Label>Large</PinInput.Label>
                <PinInput.Group maxLength={6}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Separator />
                    <PinInput.Slot index={3} />
                    <PinInput.Slot index={4} />
                    <PinInput.Slot index={5} />
                </PinInput.Group>
            </PinInput>
        </div>
    );
}

const pinInputProps = [
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of each slot." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable all slots." },
    { name: "onComplete", type: "(code: string) => void", description: "Called when all slots are filled." },
    { name: "PinInput.Label", type: "ReactNode", description: "Label above the pin group." },
    { name: "PinInput.Group", type: "component", description: "Container for slots. Accepts maxLength prop." },
    { name: "PinInput.Slot", type: "component", description: "Individual digit input. Requires index prop." },
    { name: "PinInput.Separator", type: "component", description: "Visual separator between slot groups." },
    { name: "PinInput.Description", type: "ReactNode", description: "Hint/description text below the group." },
];

export default function VerificationCodeInputPage() {
    return (
        <div>
            <DocHeader
                title="Verification Code Input"
                description="A pin/OTP input for verification codes. Supports auto-focus, paste, keyboard navigation, separators, sizes, and disabled state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Verification Code Input" },
                ]}
            />

            {/* ── Default 6-digit ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A 6-digit verification code input with label and description.</p>

            <ComponentPreview
                title="6-Digit Code"
                code={`<PinInput size="md">
    <PinInput.Label>Secure code</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Slot index={3} />
        <PinInput.Slot index={4} />
        <PinInput.Slot index={5} />
    </PinInput.Group>
    <PinInput.Description>This is a hint text to help user.</PinInput.Description>
</PinInput>`}
            >
                <DefaultDemo />
            </ComponentPreview>

            {/* ── 4-digit ── */}
            <h2 style={sectionHeading}>4-Digit PIN</h2>
            <p style={sectionDesc}>A shorter 4-digit input for PINs or short codes.</p>

            <ComponentPreview
                title="4-Digit PIN"
                code={`<PinInput size="md">
    <PinInput.Label>PIN</PinInput.Label>
    <PinInput.Group maxLength={4}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Slot index={3} />
    </PinInput.Group>
    <PinInput.Description>Enter your 4-digit PIN.</PinInput.Description>
</PinInput>`}
            >
                <FourDigitDemo />
            </ComponentPreview>

            {/* ── With Separator ── */}
            <h2 style={sectionHeading}>With Separator</h2>
            <p style={sectionDesc}>A 6-digit code split into two groups of 3 with a visual separator.</p>

            <ComponentPreview
                title="6-Digit with Separator (3 + 3)"
                code={`<PinInput size="md">
    <PinInput.Label>Secure code</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Separator />
        <PinInput.Slot index={3} />
        <PinInput.Slot index={4} />
        <PinInput.Slot index={5} />
    </PinInput.Group>
    <PinInput.Description>This is a hint text to help user.</PinInput.Description>
</PinInput>`}
            >
                <SeparatorDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>A disabled verification code input that cannot be interacted with.</p>

            <ComponentPreview
                title="Disabled"
                code={`<PinInput size="md" disabled>
    <PinInput.Label>Secure code</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Separator />
        <PinInput.Slot index={3} />
        <PinInput.Slot index={4} />
        <PinInput.Slot index={5} />
    </PinInput.Group>
    <PinInput.Description>This input is disabled.</PinInput.Description>
</PinInput>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm (36px), md (48px), and lg (60px).</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<PinInput size="sm">
    <PinInput.Label>Small</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        ...
        <PinInput.Separator />
        ...
    </PinInput.Group>
</PinInput>

<PinInput size="md">...</PinInput>
<PinInput size="lg">...</PinInput>`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the PinInput compound component and compose with sub-components.</p>

            <CodeBlock
                code={`import { PinInput } from "@/components/ui/PinInput";

// Basic 6-digit
<PinInput size="md" onComplete={(code) => console.log(code)}>
    <PinInput.Label>Secure code</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Slot index={3} />
        <PinInput.Slot index={4} />
        <PinInput.Slot index={5} />
    </PinInput.Group>
    <PinInput.Description>Enter the code sent to your email.</PinInput.Description>
</PinInput>

// With separator (3+3)
<PinInput size="md">
    <PinInput.Label>Secure code</PinInput.Label>
    <PinInput.Group maxLength={6}>
        <PinInput.Slot index={0} />
        <PinInput.Slot index={1} />
        <PinInput.Slot index={2} />
        <PinInput.Separator />
        <PinInput.Slot index={3} />
        <PinInput.Slot index={4} />
        <PinInput.Slot index={5} />
    </PinInput.Group>
</PinInput>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={pinInputProps} />
        </div>
    );
}
