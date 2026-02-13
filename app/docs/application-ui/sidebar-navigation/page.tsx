"use client";

import { Home2, Chart21, RowVertical, FolderOpen, Diagram, Setting2, MessageQuestion, Global, Category, Briefcase, Profile2User, Notification } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Badge } from "@/components/ui/Badge";
import { SidebarSimple } from "@/components/ui/SidebarNavigation/SidebarSimple";
import { SidebarSectionDividers } from "@/components/ui/SidebarNavigation/SidebarSectionDividers";
import { SidebarSectionHeadings } from "@/components/ui/SidebarNavigation/SidebarSectionHeadings";
import { SidebarSlim } from "@/components/ui/SidebarNavigation/SidebarSlim";
import { SidebarDual } from "@/components/ui/SidebarNavigation/SidebarDual";
import {
    FeatureCardProgress,
    FeatureCardProgressCode,
    FeatureCardImage,
    FeatureCardCookie,
    FeatureCardReferral,
    FeatureCardOnboarding,
    FeatureCardUpgrade,
    FeatureCardSupport,
    FeatureCardEvent,
    FeatureCardMessage,
    FeatureCardCurrentProject,
    FeatureCardFreeTrial,
    FeatureCardQRCode,
} from "@/components/ui/SidebarNavigation/SidebarFeatureCard";
import type { NavItemType, NavItemDividerType, NavSectionType } from "@/components/ui/SidebarNavigation/types";
import previewStyles from "@/components/docs/ComponentPreview.module.css";
import sidebarStyles from "@/components/ui/SidebarNavigation/SidebarNavigation.module.css";

const ICON_SIZE = 18;
const ICON_COLOR = "currentColor";

/* ── Simple nav items ── */
const simpleItems: NavItemType[] = [
    { label: "Home", href: "/", icon: <Home2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Projects", href: "/projects", icon: <RowVertical size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Reporting", href: "/reporting", icon: <Diagram size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Settings", href: "/settings", icon: <Setting2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
];

/* ── Items with dividers ── */
const dividerItems: (NavItemType | NavItemDividerType)[] = [
    { label: "Home", href: "/", icon: <Home2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Projects", href: "/projects", icon: <RowVertical size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { divider: true },
    {
        label: "Folders",
        href: "/folders",
        icon: <FolderOpen size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
        items: [
            { label: "View all", badge: 18, href: "/folders/view-all" },
            { label: "Recent", badge: 8, href: "/folders/recent" },
            { label: "Favorites", badge: 6, href: "/folders/favorites" },
            { label: "Shared", badge: 4, href: "/folders/shared" },
        ],
    },
    { divider: true },
    { label: "Reporting", href: "/reporting", icon: <Diagram size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Settings", href: "/settings", icon: <Setting2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
    {
        label: "Support",
        href: "/support",
        icon: <MessageQuestion size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
        badge: <Badge variant="success" dot size="sm">Online</Badge>,
    },
    {
        label: "Open in browser",
        href: "https://omnira.space",
        icon: <Global size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
        external: true,
    },
];

/* ── Section headings ── */
const sectionHeadingData: NavSectionType[] = [
    {
        heading: "General",
        items: [
            { label: "Home", href: "/", icon: <Home2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Projects", href: "/projects", icon: <RowVertical size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
        ],
    },
    {
        heading: "Organization",
        items: [
            {
                label: "Folders",
                href: "/folders",
                icon: <FolderOpen size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
                items: [
                    { label: "View all", badge: 18, href: "/folders/view-all" },
                    { label: "Recent", badge: 8, href: "/folders/recent" },
                    { label: "Favorites", badge: 6, href: "/folders/favorites" },
                ],
            },
            { label: "Reporting", href: "/reporting", icon: <Diagram size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
        ],
    },
    {
        heading: "System",
        items: [
            { label: "Settings", href: "/settings", icon: <Setting2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            {
                label: "Support",
                href: "/support",
                icon: <MessageQuestion size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
                badge: <Badge variant="success" dot size="sm">Online</Badge>,
            },
        ],
    },
];

/* ── Slim items ── */
const slimItems: (NavItemType | NavItemDividerType)[] = [
    { label: "Home", href: "/", icon: <Home2 size={20} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={20} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Projects", href: "/projects", icon: <RowVertical size={20} variant="Bulk" color={ICON_COLOR} /> },
    { divider: true },
    { label: "Folders", href: "/folders", icon: <FolderOpen size={20} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Reporting", href: "/reporting", icon: <Diagram size={20} variant="Bulk" color={ICON_COLOR} /> },
    { divider: true },
    { label: "Settings", href: "/settings", icon: <Setting2 size={20} variant="Bulk" color={ICON_COLOR} /> },
    { label: "Support", href: "/support", icon: <MessageQuestion size={20} variant="Bulk" color={ICON_COLOR} /> },
];

/* ── Dual sidebar sections ── */
const dualSections = [
    {
        icon: <Category size={20} variant="Bulk" color="currentColor" />,
        label: "Overview",
        items: [
            { label: "Home", href: "/", icon: <Home2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Projects", href: "/projects", icon: <RowVertical size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
        ] as NavItemType[],
    },
    {
        icon: <Briefcase size={20} variant="Bulk" color="currentColor" />,
        label: "Workspace",
        items: [
            {
                label: "Folders",
                href: "/folders",
                icon: <FolderOpen size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} />,
                items: [
                    { label: "View all", badge: 18, href: "/folders/view-all" },
                    { label: "Recent", badge: 8, href: "/folders/recent" },
                ],
            },
            { label: "Reporting", href: "/reporting", icon: <Diagram size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
        ] as NavItemType[],
    },
    {
        icon: <Profile2User size={20} variant="Bulk" color="currentColor" />,
        label: "Team",
        items: [
            { label: "Members", href: "/team/members", icon: <Profile2User size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Notifications", href: "/team/notifications", icon: <Notification size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
            { label: "Settings", href: "/settings", icon: <Setting2 size={ICON_SIZE} variant="Bulk" color={ICON_COLOR} /> },
        ] as NavItemType[],
    },
];

const DEMO_USER = { name: "Marcus Chen", email: "marcus@omnira.space", initials: "MC", online: true };

export default function SidebarNavigationPage() {
    return (
        <div>
            <DocHeader
                title="Sidebar Navigation"
                description="Vertical navigation sidebars for application layouts. Available in multiple variants including simple, section dividers, section headings, slim, and dual-panel."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Sidebar Navigation" },
                ]}
            />

            {/* Simple */}
            <ComponentPreview
                title="Simple"
                description="A clean sidebar with icon + label nav items. No dividers or grouping."
                previewClassName={previewStyles.previewFlush}
                code={`import { SidebarSimple } from "@/components/ui/SidebarNavigation";
import { Home2, Chart21, RowVertical, Setting2 } from "iconsax-react";

<SidebarSimple
    items={[
        { label: "Home", href: "/", icon: <Home2 size={18} variant="Bulk" color="currentColor" /> },
        { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={18} variant="Bulk" color="currentColor" /> },
        { label: "Projects", href: "/projects", icon: <RowVertical size={18} variant="Bulk" color="currentColor" /> },
        { label: "Settings", href: "/settings", icon: <Setting2 size={18} variant="Bulk" color="currentColor" /> },
    ]}
    activeUrl="/"
    brand={{ name: "Omnira" }}
    search
    user={{ name: "Marcus Chen", email: "marcus@omnira.space", initials: "MC", online: true }}
/>`}
            >
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                    <SidebarSimple
                        items={simpleItems}
                        activeUrl="/"
                        brand={{ name: "Omnira" }}
                        search
                        user={DEMO_USER}
                        className={sidebarStyles.sidebarFlush}
                    />
                    <div style={{ flex: 1, minHeight: 680 }} />
                </div>
            </ComponentPreview>

            {/* Section Dividers */}
            <ComponentPreview
                title="Section Dividers"
                description="Sidebar with horizontal dividers to separate groups. Supports collapsible sub-items with badges."
                previewClassName={previewStyles.previewFlush}
                code={`import { SidebarSectionDividers } from "@/components/ui/SidebarNavigation";
import { Home2, Chart21, RowVertical, FolderOpen, Diagram, Setting2, MessageQuestion, Global } from "iconsax-react";
import { Badge } from "@/components/ui/Badge";

<SidebarSectionDividers
    items={[
        { label: "Home", href: "/", icon: <Home2 size={18} variant="Bulk" color="currentColor" /> },
        { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={18} variant="Bulk" color="currentColor" /> },
        { label: "Projects", href: "/projects", icon: <RowVertical size={18} variant="Bulk" color="currentColor" /> },
        { divider: true },
        { label: "Folders", href: "/folders", icon: <FolderOpen size={18} variant="Bulk" color="currentColor" />,
          items: [
            { label: "View all", badge: 18, href: "/folders/view-all" },
            { label: "Recent", badge: 8, href: "/folders/recent" },
          ]
        },
        { divider: true },
        { label: "Reporting", href: "/reporting", icon: <Diagram size={18} variant="Bulk" color="currentColor" /> },
        { label: "Settings", href: "/settings", icon: <Setting2 size={18} variant="Bulk" color="currentColor" /> },
        { label: "Support", href: "/support", icon: <MessageQuestion size={18} variant="Bulk" color="currentColor" />,
          badge: <Badge variant="success" dot size="sm">Online</Badge>
        },
        { label: "Open in browser", href: "https://omnira.space", icon: <Global size={18} variant="Bulk" color="currentColor" />, external: true },
    ]}
    activeUrl="/"
    brand={{ name: "Omnira" }}
    search
    user={{ name: "Marcus Chen", email: "marcus@omnira.space", initials: "MC", online: true }}
/>`}
            >
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                    <SidebarSectionDividers
                        items={dividerItems}
                        activeUrl="/"
                        brand={{ name: "Omnira" }}
                        search
                        user={DEMO_USER}
                        className={sidebarStyles.sidebarFlush}
                    />
                    <div style={{ flex: 1, minHeight: 680 }} />
                </div>
            </ComponentPreview>

            {/* Section Headings */}
            <ComponentPreview
                title="Section Headings"
                description="Sidebar organized by labeled section headings. Each section has an uppercase heading with its own group of nav items."
                previewClassName={previewStyles.previewFlush}
                code={`import { SidebarSectionHeadings } from "@/components/ui/SidebarNavigation";
import { Home2, Chart21, RowVertical, FolderOpen, Diagram, Setting2, MessageQuestion } from "iconsax-react";

<SidebarSectionHeadings
    sections={[
        {
            heading: "General",
            items: [
                { label: "Home", href: "/", icon: <Home2 size={18} variant="Bulk" color="currentColor" /> },
                { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={18} variant="Bulk" color="currentColor" /> },
                { label: "Projects", href: "/projects", icon: <RowVertical size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
        {
            heading: "Organization",
            items: [
                { label: "Folders", href: "/folders", icon: <FolderOpen size={18} variant="Bulk" color="currentColor" />,
                  items: [{ label: "View all", badge: 18, href: "/folders/view-all" }]
                },
                { label: "Reporting", href: "/reporting", icon: <Diagram size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
        {
            heading: "System",
            items: [
                { label: "Settings", href: "/settings", icon: <Setting2 size={18} variant="Bulk" color="currentColor" /> },
                { label: "Support", href: "/support", icon: <MessageQuestion size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
    ]}
    activeUrl="/"
    brand={{ name: "Omnira" }}
    search
    user={{ name: "Marcus Chen", email: "marcus@omnira.space", initials: "MC", online: true }}
/>`}
            >
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                    <SidebarSectionHeadings
                        sections={sectionHeadingData}
                        activeUrl="/"
                        brand={{ name: "Omnira" }}
                        search
                        user={DEMO_USER}
                        className={sidebarStyles.sidebarFlush}
                    />
                    <div style={{ flex: 1, minHeight: 680 }} />
                </div>
            </ComponentPreview>

            {/* Slim */}
            <ComponentPreview
                title="Slim"
                description="Compact icon-only sidebar with hover tooltips. Ideal for space-constrained layouts."
                previewClassName={previewStyles.previewFlush}
                code={`import { SidebarSlim } from "@/components/ui/SidebarNavigation";
import { Home2, Chart21, RowVertical, FolderOpen, Diagram, Setting2, MessageQuestion } from "iconsax-react";

<SidebarSlim
    items={[
        { label: "Home", href: "/", icon: <Home2 size={20} variant="Bulk" color="currentColor" /> },
        { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={20} variant="Bulk" color="currentColor" /> },
        { label: "Projects", href: "/projects", icon: <RowVertical size={20} variant="Bulk" color="currentColor" /> },
        { divider: true },
        { label: "Folders", href: "/folders", icon: <FolderOpen size={20} variant="Bulk" color="currentColor" /> },
        { label: "Reporting", href: "/reporting", icon: <Diagram size={20} variant="Bulk" color="currentColor" /> },
        { divider: true },
        { label: "Settings", href: "/settings", icon: <Setting2 size={20} variant="Bulk" color="currentColor" /> },
        { label: "Support", href: "/support", icon: <MessageQuestion size={20} variant="Bulk" color="currentColor" /> },
    ]}
    activeUrl="/"
    brandLogo="O"
/>`}
            >
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                    <SidebarSlim
                        items={slimItems}
                        activeUrl="/"
                        brandLogo="O"
                        className={sidebarStyles.sidebarFlush}
                    />
                    <div style={{ flex: 1, minHeight: 680 }} />
                </div>
            </ComponentPreview>

            {/* Dual */}
            <ComponentPreview
                title="Dual Sidebar"
                description="Two-panel sidebar with an icon rail on the left and a content panel on the right. Click rail icons to switch between sections."
                previewClassName={previewStyles.previewFlush}
                code={`import { SidebarDual } from "@/components/ui/SidebarNavigation";
import { Category, Briefcase, Profile2User, Home2, Chart21, RowVertical, Setting2, Notification } from "iconsax-react";

<SidebarDual
    sections={[
        {
            icon: <Category size={20} variant="Bulk" color="currentColor" />,
            label: "Overview",
            items: [
                { label: "Home", href: "/", icon: <Home2 size={18} variant="Bulk" color="currentColor" /> },
                { label: "Dashboard", href: "/dashboard", icon: <Chart21 size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
        {
            icon: <Briefcase size={20} variant="Bulk" color="currentColor" />,
            label: "Workspace",
            items: [
                { label: "Projects", href: "/projects", icon: <RowVertical size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
        {
            icon: <Profile2User size={20} variant="Bulk" color="currentColor" />,
            label: "Team",
            items: [
                { label: "Members", href: "/team/members", icon: <Profile2User size={18} variant="Bulk" color="currentColor" /> },
                { label: "Settings", href: "/settings", icon: <Setting2 size={18} variant="Bulk" color="currentColor" /> },
            ],
        },
    ]}
    activeUrl="/"
    brand={{ name: "Omnira" }}
    search
    user={{ name: "Marcus Chen", email: "marcus@omnira.space", initials: "MC", online: true }}
/>`}
            >
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                    <SidebarDual
                        sections={dualSections}
                        activeUrl="/"
                        brand={{ name: "Omnira" }}
                        search
                        user={DEMO_USER}
                        className={sidebarStyles.sidebarFlush}
                    />
                    <div style={{ flex: 1, minHeight: 680 }} />
                </div>
            </ComponentPreview>

            {/* ── Feature Cards ── */}
            <ComponentPreview
                title="Feature Card — Progress"
                description="Shows profile or task completion with a progress bar."
                code={`import { FeatureCardProgress } from "@/components/ui/SidebarNavigation";

<FeatureCardProgress percent={65} />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardProgress />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Progress Code"
                description="Storage or quota usage with a progress bar and action button."
                code={`import { FeatureCardProgressCode } from "@/components/ui/SidebarNavigation";

<FeatureCardProgressCode percent={42} used="4.2 GB" total="10 GB" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardProgressCode />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Image"
                description="Announcement card with a banner image, dismissible."
                code={`import { FeatureCardImage } from "@/components/ui/SidebarNavigation";

<FeatureCardImage title="New feature available" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardImage />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Cookie"
                description="Cookie consent banner with accept/reject actions."
                code={`import { FeatureCardCookie } from "@/components/ui/SidebarNavigation";

<FeatureCardCookie />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardCookie />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Referral"
                description="Referral link card with click-to-copy functionality."
                code={`import { FeatureCardReferral } from "@/components/ui/SidebarNavigation";

<FeatureCardReferral code="https://omnira.space/ref/abc123" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardReferral />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Onboarding"
                description="Step-by-step onboarding checklist with progress tracking."
                code={`import { FeatureCardOnboarding } from "@/components/ui/SidebarNavigation";

<FeatureCardOnboarding steps={[
    { label: "Create account", done: true },
    { label: "Set up profile", done: true },
    { label: "Invite team", done: false },
    { label: "Create project", done: false },
]} />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardOnboarding />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Upgrade"
                description="Accent-tinted upgrade CTA card."
                code={`import { FeatureCardUpgrade } from "@/components/ui/SidebarNavigation";

<FeatureCardUpgrade />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardUpgrade />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Support"
                description="Support contact card with action buttons."
                code={`import { FeatureCardSupport } from "@/components/ui/SidebarNavigation";

<FeatureCardSupport />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardSupport />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Event CTA"
                description="Upcoming event card with date, description, and registration."
                code={`import { FeatureCardEvent } from "@/components/ui/SidebarNavigation";

<FeatureCardEvent title="Design Systems Workshop" date="Mar 15, 2026 · 2:00 PM" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardEvent />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Message"
                description="Message preview card with avatar, sender info, and reply action."
                code={`import { FeatureCardMessage } from "@/components/ui/SidebarNavigation";

<FeatureCardMessage name="Sarah Chen" initials="SC" time="2 min ago" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardMessage />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Current Project"
                description="Active project status card with badges."
                code={`import { FeatureCardCurrentProject } from "@/components/ui/SidebarNavigation";

<FeatureCardCurrentProject name="Omnira UI" status="In progress" />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardCurrentProject />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — Free Trial"
                description="Trial countdown card with upgrade CTA."
                code={`import { FeatureCardFreeTrial } from "@/components/ui/SidebarNavigation";

<FeatureCardFreeTrial daysLeft={7} />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardFreeTrial />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Feature Card — QR Code"
                description="Mobile app download card with QR code placeholder."
                code={`import { FeatureCardQRCode } from "@/components/ui/SidebarNavigation";

<FeatureCardQRCode />`}
            >
                <div style={{ width: 252 }}>
                    <FeatureCardQRCode />
                </div>
            </ComponentPreview>

            {/* Usage */}
            <CodeBlock
                code={`import {
    SidebarSimple,
    SidebarSectionDividers,
    SidebarSectionHeadings,
    SidebarSlim,
    SidebarDual,
    FeatureCardProgress,
    FeatureCardUpgrade,
    FeatureCardOnboarding,
    // ... and more
} from "@/components/ui/SidebarNavigation";
import type { NavItemType, NavItemDividerType, NavSectionType } from "@/components/ui/SidebarNavigation";`}
                language="tsx"
            />

            {/* Props */}
            <PropsTable
                props={[
                    { name: "items", type: "(NavItemType | NavItemDividerType)[]", default: "—", description: "Array of nav items and dividers" },
                    { name: "sections", type: "NavSectionType[] | DualSection[]", default: "—", description: "Grouped sections (for SectionHeadings and Dual variants)" },
                    { name: "activeUrl", type: "string", default: "—", description: "Currently active URL to highlight" },
                    { name: "brand", type: "{ name: string; logo?: string }", default: "—", description: "Brand logo and name shown at top" },
                    { name: "footer", type: "ReactNode", default: "—", description: "Optional footer content (feature cards, CTAs)" },
                    { name: "className", type: "string", default: "—", description: "Additional CSS class" },
                ]}
            />
        </div>
    );
}
