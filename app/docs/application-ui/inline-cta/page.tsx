"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { FeaturedIcon } from "@/components/ui/FeaturedIcon";
import { Button } from "@/components/ui/Button";
import { Star1, Flash, Crown, InfoCircle } from "iconsax-react";

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

export default function InlineCTAPage() {
    return (
        <div>
            <DocHeader
                title="Inline CTA"
                description="Embedded call-to-action prompts within content flow. Available in default, brand, subtle, and bordered variants with optional icons, descriptions, and action buttons."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Inline CTA" },
                ]}
            />

            <InstallBlock slug="inline-cta" components={["InlineCTA", "Button"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Card-style CTA with icon, text, and action buttons.</p>

            <ComponentPreview
                title="Default CTA"
                code={`<InlineCTA
    icon={<FeaturedIcon icon={<Star1 size={20} variant="Bulk" />} theme="light" />}
    title="Upgrade to Pro"
    description="Get access to advanced features and priority support."
    actions={<>
        <Button variant="secondary" size="sm">Learn more</Button>
        <Button variant="primary" size="sm">Upgrade</Button>
    </>}
/>`}
            >
                <div style={{ width: "100%" }}>
                    <InlineCTA
                        icon={<FeaturedIcon icon={<Star1 size={20} variant="Bulk" />} theme="light" />}
                        title="Upgrade to Pro"
                        description="Get access to advanced features and priority support."
                        actions={<>
                            <Button variant="secondary" size="sm">Learn more</Button>
                            <Button variant="primary" size="sm">Upgrade</Button>
                        </>}
                    />
                </div>
            </ComponentPreview>

            {/* ── Brand ── */}
            <h2 style={sectionHeading}>Brand Variant</h2>
            <p style={sectionDesc}>Accent-tinted background for emphasis.</p>

            <ComponentPreview
                title="Brand CTA"
                code={`<InlineCTA
    variant="brand"
    icon={<FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="dark" />}
    title="New feature available"
    description="Try our AI-powered analytics dashboard."
    actions={<Button variant="primary" size="sm">Try it now</Button>}
/>`}
            >
                <div style={{ width: "100%" }}>
                    <InlineCTA
                        variant="brand"
                        icon={<FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="dark" />}
                        title="New feature available"
                        description="Try our AI-powered analytics dashboard."
                        actions={<Button variant="primary" size="sm">Try it now</Button>}
                    />
                </div>
            </ComponentPreview>

            {/* ── Subtle ── */}
            <h2 style={sectionHeading}>Subtle Variant</h2>
            <p style={sectionDesc}>Low-contrast background for non-intrusive prompts.</p>

            <ComponentPreview
                title="Subtle CTA"
                code={`<InlineCTA
    variant="subtle"
    icon={<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="light" color="gray" />}
    title="Did you know?"
    description="You can customize your dashboard layout in settings."
    dismissible
/>`}
            >
                <div style={{ width: "100%" }}>
                    <InlineCTA
                        variant="subtle"
                        icon={<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="light" color="gray" />}
                        title="Did you know?"
                        description="You can customize your dashboard layout in settings."
                        dismissible
                    />
                </div>
            </ComponentPreview>

            {/* ── Bordered ── */}
            <h2 style={sectionHeading}>Bordered Variant</h2>
            <p style={sectionDesc}>Transparent background with visible border outline.</p>

            <ComponentPreview
                title="Bordered CTA"
                code={`<InlineCTA
    variant="bordered"
    icon={<FeaturedIcon icon={<Crown size={20} variant="Bulk" />} theme="outline" />}
    title="Refer a friend"
    description="Get one month free for each referral."
    actions={<Button variant="secondary" size="sm">Share link</Button>}
    dismissible
/>`}
            >
                <div style={{ width: "100%" }}>
                    <InlineCTA
                        variant="bordered"
                        icon={<FeaturedIcon icon={<Crown size={20} variant="Bulk" />} theme="outline" />}
                        title="Refer a friend"
                        description="Get one month free for each referral."
                        actions={<Button variant="secondary" size="sm">Share link</Button>}
                        dismissible
                    />
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "variant", type: '"default" | "brand" | "subtle" | "bordered"', default: '"default"', description: "Visual style variant" },
                    { name: "icon", type: "ReactNode", default: "undefined", description: "Leading icon or featured icon" },
                    { name: "title", type: "string", default: "—", description: "CTA title text" },
                    { name: "description", type: "string", default: "undefined", description: "Supporting description text" },
                    { name: "actions", type: "ReactNode", default: "undefined", description: "Action buttons area" },
                    { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss/close button" },
                    { name: "onDismiss", type: "() => void", default: "—", description: "Called when dismiss is clicked" },
                ]}
            />
        </div>
    );
}
