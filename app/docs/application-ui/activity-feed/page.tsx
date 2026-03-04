"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ActivityFeed } from "@/components/ui/ActivityFeed";
import type { ActivityFeedItem } from "@/components/ui/ActivityFeed";
import { MessageText, TickCircle, UserAdd, Code1, Flag } from "iconsax-react";

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

const defaultItems: ActivityFeedItem[] = [
    {
        id: "1",
        user: "Olivia Rhye",
        content: "Created a new project \"Dashboard Redesign\"",
        timestamp: "2 hours ago",
    },
    {
        id: "2",
        user: "Phoenix Baker",
        content: "Commented on the design review — \"Looks great, let's ship it.\"",
        timestamp: "3 hours ago",
    },
    {
        id: "3",
        user: "Lana Steiner",
        content: "Changed status from In Progress to Review",
        timestamp: "5 hours ago",
    },
    {
        id: "4",
        user: "Demi Wilkinson",
        content: "Assigned the task to Phoenix Baker",
        timestamp: "1 day ago",
    },
];

const iconItems: ActivityFeedItem[] = [
    {
        id: "1",
        user: "Olivia Rhye",
        content: "Left a comment on the pull request",
        timestamp: "10 min ago",
        icon: <MessageText size={16} variant="Bulk" />,
        iconBg: "var(--color-bg-lime-subtle)",
    },
    {
        id: "2",
        user: "Phoenix Baker",
        content: "Marked the task as complete",
        timestamp: "1 hour ago",
        icon: <TickCircle size={16} variant="Bulk" />,
        iconBg: "var(--color-success-subtle)",
    },
    {
        id: "3",
        user: "Lana Steiner",
        content: "Was added as a collaborator",
        timestamp: "3 hours ago",
        icon: <UserAdd size={16} variant="Bulk" />,
        iconBg: "var(--color-bg-elevated)",
    },
    {
        id: "4",
        user: "Demi Wilkinson",
        content: "Pushed 3 commits to main",
        timestamp: "5 hours ago",
        icon: <Code1 size={16} variant="Bulk" />,
        iconBg: "var(--color-bg-elevated)",
    },
    {
        id: "5",
        user: "Candice Wu",
        content: "Flagged an issue with the API response times",
        timestamp: "1 day ago",
        icon: <Flag size={16} variant="Bulk" />,
        iconBg: "var(--color-warning-subtle)",
    },
];

const compactItems: ActivityFeedItem[] = [
    { id: "1", user: "Olivia Rhye", content: "Updated the project README", timestamp: "5 min ago" },
    { id: "2", user: "Phoenix Baker", content: "Merged pull request #42", timestamp: "20 min ago" },
    { id: "3", user: "Lana Steiner", content: "Opened a new issue", timestamp: "1 hour ago" },
    { id: "4", user: "Demi Wilkinson", content: "Closed issue #38", timestamp: "2 hours ago" },
    { id: "5", user: "Candice Wu", content: "Released v2.1.0", timestamp: "3 hours ago" },
];

export default function ActivityFeedPage() {
    return (
        <div>
            <DocHeader
                title="Activity Feed"
                description="Timeline-style activity log for showing events, comments, status changes, and user actions. Supports avatars, icons, and compact layouts."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Activity Feed" },
                ]}
            />

            <InstallBlock slug="activity-feed" components={["ActivityFeed"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Avatar-based timeline with user names, content, and timestamps.</p>

            <ComponentPreview
                title="Default Feed"
                code={`<ActivityFeed items={items} />`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <ActivityFeed items={defaultItems} />
                </div>
            </ComponentPreview>

            {/* ── With Icons ── */}
            <h2 style={sectionHeading}>With Icons</h2>
            <p style={sectionDesc}>Replace avatar with event-type icons for a more visual timeline.</p>

            <ComponentPreview
                title="Icon Feed"
                code={`<ActivityFeed
    items={[
        {
            id: "1",
            user: "Olivia Rhye",
            content: "Left a comment",
            timestamp: "10 min ago",
            icon: <MessageText size={16} />,
            iconBg: "var(--color-bg-lime-subtle)",
        },
        // ...more items
    ]}
/>`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <ActivityFeed items={iconItems} />
                </div>
            </ComponentPreview>

            {/* ── Compact ── */}
            <h2 style={sectionHeading}>Compact</h2>
            <p style={sectionDesc}>Tighter spacing for dense feeds and sidebars.</p>

            <ComponentPreview
                title="Compact Feed"
                code={`<ActivityFeed items={items} variant="compact" />`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <ActivityFeed items={compactItems} variant="compact" />
                </div>
            </ComponentPreview>

            {/* ── Card ── */}
            <h2 style={sectionHeading}>Card Variant</h2>
            <p style={sectionDesc}>Contained in a card with background and border.</p>

            <ComponentPreview
                title="Card Feed"
                code={`<ActivityFeed items={items} variant="card" />`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <ActivityFeed items={defaultItems} variant="card" />
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "items", type: "ActivityFeedItem[]", default: "[]", description: "Array of activity events" },
                    { name: "variant", type: '"default" | "compact" | "card"', default: '"default"', description: "Visual variant" },
                ]}
            />

            <h2 style={{ ...sectionHeading, fontSize: 18 }}>ActivityFeedItem</h2>
            <PropsTable
                props={[
                    { name: "id", type: "string", default: "—", description: "Unique identifier" },
                    { name: "user", type: "string", default: "—", description: "User display name" },
                    { name: "avatar", type: "string", default: "undefined", description: "Avatar image URL" },
                    { name: "content", type: "ReactNode", default: "—", description: "Event content" },
                    { name: "timestamp", type: "string", default: "—", description: "Timestamp label" },
                    { name: "icon", type: "ReactNode", default: "undefined", description: "Icon (replaces avatar)" },
                    { name: "iconBg", type: "string", default: "undefined", description: "Icon bubble background color" },
                    { name: "type", type: '"default" | "comment" | "status" | "assignment" | "commit"', default: '"default"', description: "Event type" },
                ]}
            />
        </div>
    );
}
