"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ProgressSteps } from "@/components/ui/ProgressSteps";
import type { ProgressStep } from "@/components/ui/ProgressSteps";
import { DocumentText, People, TickCircle, Setting2 } from "iconsax-react";

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

const iconSteps: ProgressStep[] = [
    { title: "Details", description: "Enter your info", icon: <DocumentText size={18} variant="Bulk" /> },
    { title: "Team", description: "Invite members", icon: <People size={18} variant="Bulk" /> },
    { title: "Review", description: "Confirm setup", icon: <TickCircle size={18} variant="Bulk" /> },
    { title: "Settings", description: "Configure prefs", icon: <Setting2 size={18} variant="Bulk" /> },
];

const numberSteps: ProgressStep[] = [
    { title: "Account", description: "Create credentials" },
    { title: "Profile", description: "Set up your profile" },
    { title: "Billing", description: "Add payment method" },
    { title: "Complete", description: "Ready to go" },
];

const lineSteps: ProgressStep[] = [
    { title: "Cart", description: "Review items" },
    { title: "Shipping", description: "Delivery address" },
    { title: "Payment", description: "Enter details" },
    { title: "Confirm", description: "Place order" },
];

const minimalSteps: ProgressStep[] = [
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: "Step 4" },
    { title: "Step 5" },
];

export default function ProgressStepsPage() {
    return (
        <div>
            <DocHeader
                title="Progress Steps"
                description="Multi-step progress indicators for wizards, onboarding flows, and checkout processes. Supports icon, number, minimal, and line variants with horizontal and vertical layouts."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Progress Steps" },
                ]}
            />

            <InstallBlock slug="progress-steps" components={["ProgressSteps"]} />

            {/* ── Icon Variant ── */}
            <h2 style={sectionHeading}>Icon Variant</h2>
            <p style={sectionDesc}>Steps display custom icons for each stage, with a check mark for completed steps.</p>

            <ComponentPreview
                title="Icon Steps"
                code={`<ProgressSteps
    steps={steps}
    currentStep={1}
    variant="icon"
/>`}
            >
                <div style={{ width: "100%" }}>
                    <ProgressSteps steps={iconSteps} currentStep={1} variant="icon" />
                </div>
            </ComponentPreview>

            {/* ── Number Variant ── */}
            <h2 style={sectionHeading}>Number Variant</h2>
            <p style={sectionDesc}>Numbered step indicators with automatic completion marks.</p>

            <ComponentPreview
                title="Number Steps"
                code={`<ProgressSteps
    steps={steps}
    currentStep={2}
    variant="number"
/>`}
            >
                <div style={{ width: "100%" }}>
                    <ProgressSteps steps={numberSteps} currentStep={2} variant="number" />
                </div>
            </ComponentPreview>

            {/* ── Vertical ── */}
            <h2 style={sectionHeading}>Vertical Layout</h2>
            <p style={sectionDesc}>Stack steps vertically for sidebar or narrow layouts.</p>

            <ComponentPreview
                title="Vertical Steps"
                code={`<ProgressSteps
    steps={steps}
    currentStep={1}
    variant="number"
    direction="vertical"
/>`}
            >
                <div style={{ maxWidth: 320 }}>
                    <ProgressSteps steps={numberSteps} currentStep={1} variant="number" direction="vertical" />
                </div>
            </ComponentPreview>

            {/* ── Minimal ── */}
            <h2 style={sectionHeading}>Minimal (Dots)</h2>
            <p style={sectionDesc}>Compact dot indicators for carousels, modals, and onboarding.</p>

            <ComponentPreview
                title="Minimal Steps"
                code={`<ProgressSteps
    steps={steps}
    currentStep={2}
    variant="minimal"
/>`}
            >
                <ProgressSteps steps={minimalSteps} currentStep={2} variant="minimal" />
            </ComponentPreview>

            {/* ── Line ── */}
            <h2 style={sectionHeading}>Line Variant</h2>
            <p style={sectionDesc}>Progress bars with step labels for checkout and multi-step forms.</p>

            <ComponentPreview
                title="Line Steps"
                code={`<ProgressSteps
    steps={steps}
    currentStep={1}
    variant="line"
/>`}
            >
                <div style={{ width: "100%" }}>
                    <ProgressSteps steps={lineSteps} currentStep={1} variant="line" />
                </div>
            </ComponentPreview>

            {/* ── Small Size ── */}
            <h2 style={sectionHeading}>Small Size</h2>
            <p style={sectionDesc}>Compact indicators for tight layouts.</p>

            <ComponentPreview
                title="Small Steps"
                code={`<ProgressSteps steps={steps} currentStep={1} size="sm" />`}
            >
                <div style={{ width: "100%" }}>
                    <ProgressSteps steps={iconSteps} currentStep={1} variant="icon" size="sm" />
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "steps", type: "ProgressStep[]", default: "[]", description: "Array of { title, description?, icon? }" },
                    { name: "currentStep", type: "number", default: "0", description: "Active step index (0-based)" },
                    { name: "variant", type: '"icon" | "number" | "minimal" | "line"', default: '"icon"', description: "Visual variant" },
                    { name: "direction", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout direction" },
                    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Indicator size" },
                ]}
            />
        </div>
    );
}
