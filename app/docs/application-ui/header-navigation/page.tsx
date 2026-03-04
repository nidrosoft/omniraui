"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { HeaderNavigation } from "@/components/ui/HeaderNavigation";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Notification1, Setting2, Home2, Chart, People, DocumentText, Briefcase } from "iconsax-react";

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

export default function HeaderNavigationPage() {
    return (
        <div>
            <DocHeader
                title="Header Navigation"
                description="Horizontal top-bar navigation for application layouts. Includes brand area, navigation links, and action slots with responsive behavior."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Header Navigation" },
                ]}
            />

            <InstallBlock slug="header-navigation" components={["HeaderNavigation", "Button", "Avatar"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Standard header with brand, centered links, and action buttons.</p>

            <ComponentPreview
                title="Header Navigation — Default"
                code={`<HeaderNavigation.Root>
    <HeaderNavigation.Brand>Omnira</HeaderNavigation.Brand>
    <HeaderNavigation.Links>
        <HeaderNavigation.Link href="#" active>Home</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#">Dashboard</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#">Projects</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#">Team</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#">Reports</HeaderNavigation.Link>
    </HeaderNavigation.Links>
    <HeaderNavigation.Actions>
        <Button variant="secondary" size="sm">Log in</Button>
        <Button variant="primary" size="sm">Sign up</Button>
    </HeaderNavigation.Actions>
</HeaderNavigation.Root>`}
            >
                <div style={{ width: "100%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border-standard)" }}>
                    <HeaderNavigation.Root>
                        <HeaderNavigation.Brand>Omnira</HeaderNavigation.Brand>
                        <HeaderNavigation.Links>
                            <HeaderNavigation.Link href="#" active>Home</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#">Dashboard</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#">Projects</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#">Team</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#">Reports</HeaderNavigation.Link>
                        </HeaderNavigation.Links>
                        <HeaderNavigation.Actions>
                            <Button variant="secondary" size="sm">Log in</Button>
                            <Button variant="primary" size="sm">Sign up</Button>
                        </HeaderNavigation.Actions>
                    </HeaderNavigation.Root>
                </div>
            </ComponentPreview>

            {/* ── With Icons ── */}
            <h2 style={sectionHeading}>With Icons</h2>
            <p style={sectionDesc}>Navigation links can include leading icons for added visual context.</p>

            <ComponentPreview
                title="Header Navigation — Icons"
                code={`<HeaderNavigation.Root>
    <HeaderNavigation.Brand>Omnira</HeaderNavigation.Brand>
    <HeaderNavigation.Links>
        <HeaderNavigation.Link href="#" active icon={<Home2 size={16} />}>Home</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#" icon={<Chart size={16} />}>Analytics</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#" icon={<People size={16} />}>Team</HeaderNavigation.Link>
        <HeaderNavigation.Link href="#" icon={<Briefcase size={16} />}>Projects</HeaderNavigation.Link>
    </HeaderNavigation.Links>
    <HeaderNavigation.Actions>
        <Avatar size="sm" fallback="OR" />
    </HeaderNavigation.Actions>
</HeaderNavigation.Root>`}
            >
                <div style={{ width: "100%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border-standard)" }}>
                    <HeaderNavigation.Root>
                        <HeaderNavigation.Brand>Omnira</HeaderNavigation.Brand>
                        <HeaderNavigation.Links>
                            <HeaderNavigation.Link href="#" active icon={<Home2 size={16} variant="Bulk" />}>Home</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#" icon={<Chart size={16} variant="Bulk" />}>Analytics</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#" icon={<People size={16} variant="Bulk" />}>Team</HeaderNavigation.Link>
                            <HeaderNavigation.Link href="#" icon={<Briefcase size={16} variant="Bulk" />}>Projects</HeaderNavigation.Link>
                        </HeaderNavigation.Links>
                        <HeaderNavigation.Actions>
                            <Avatar size="sm" fallback="OR" />
                        </HeaderNavigation.Actions>
                    </HeaderNavigation.Root>
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "sticky (Root)", type: "boolean", default: "false", description: "Sticky positioning at top of viewport" },
                    { name: "active (Link)", type: "boolean", default: "false", description: "Active/current page state" },
                    { name: "icon (Link)", type: "ReactNode", default: "undefined", description: "Leading icon element" },
                ]}
            />
        </div>
    );
}
