"use client";

import { useState, useEffect } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { CommandMenu } from "@/components/ui/CommandMenu";
import type { CommandMenuGroup } from "@/components/ui/CommandMenu";
import { Button } from "@/components/ui/Button";
import {
    Home2, Chart, People, Setting2, DocumentText,
    LogoutCurve, Add, SearchNormal1, Calendar, Briefcase,
} from "iconsax-react";

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

const demoGroups: CommandMenuGroup[] = [
    {
        heading: "Navigation",
        items: [
            { id: "home", label: "Go to Home", icon: <Home2 size={16} variant="Bulk" />, shortcut: "⌘H" },
            { id: "dashboard", label: "Go to Dashboard", icon: <Chart size={16} variant="Bulk" />, shortcut: "⌘D" },
            { id: "team", label: "Go to Team", icon: <People size={16} variant="Bulk" /> },
            { id: "projects", label: "Go to Projects", icon: <Briefcase size={16} variant="Bulk" /> },
        ],
    },
    {
        heading: "Actions",
        items: [
            { id: "new-doc", label: "Create new document", icon: <Add size={16} />, shortcut: "⌘N" },
            { id: "search", label: "Search files", icon: <SearchNormal1 size={16} />, shortcut: "⌘F" },
            { id: "calendar", label: "Open calendar", icon: <Calendar size={16} variant="Bulk" /> },
        ],
    },
    {
        heading: "Settings",
        items: [
            { id: "settings", label: "Open settings", icon: <Setting2 size={16} variant="Bulk" />, shortcut: "⌘," },
            { id: "docs", label: "View documentation", icon: <DocumentText size={16} variant="Bulk" /> },
            { id: "logout", label: "Sign out", icon: <LogoutCurve size={16} variant="Bulk" /> },
        ],
    },
];

export default function CommandMenuPage() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((v) => !v);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div>
            <DocHeader
                title="Command Menu"
                description="A keyboard-driven quick-action command palette. Search, navigate, and execute actions without leaving the keyboard. Open with ⌘K."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Command Menu" },
                ]}
            />

            <InstallBlock slug="command-menu" components={["CommandMenu"]} />

            {/* ── Interactive Demo ── */}
            <h2 style={sectionHeading}>Interactive Demo</h2>
            <p style={sectionDesc}>Click the button below or press <kbd style={{ padding: "2px 6px", background: "var(--color-bg-elevated)", border: "1px solid var(--color-border-standard)", borderRadius: 4, fontSize: 12 }}>⌘K</kbd> to open the command menu.</p>

            <ComponentPreview
                title="Command Menu"
                code={`const [isOpen, setIsOpen] = useState(false);

<Button variant="secondary" onClick={() => setIsOpen(true)}>
    Open Command Menu (⌘K)
</Button>

<CommandMenu
    open={isOpen}
    onClose={() => setIsOpen(false)}
    groups={groups}
    onSelect={(item) => console.log("Selected:", item.label)}
/>`}
            >
                <Button
                    variant="secondary"
                    size="md"
                    icon={<SearchNormal1 size={16} />}
                    iconPosition="leading"
                    onClick={() => setIsOpen(true)}
                >
                    Open Command Menu (⌘K)
                </Button>
            </ComponentPreview>

            <CommandMenu
                open={isOpen}
                onClose={() => setIsOpen(false)}
                groups={demoGroups}
                onSelect={(item) => console.log("Selected:", item.label)}
            />

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Define groups of command items with optional icons, shortcuts, and callbacks.</p>

            <CodeBlock
                code={`import { CommandMenu } from "omnira-ui/CommandMenu";
import type { CommandMenuGroup } from "omnira-ui/CommandMenu";
import { Home2, Add, Setting2 } from "iconsax-react";

const groups: CommandMenuGroup[] = [
    {
        heading: "Navigation",
        items: [
            { id: "home", label: "Go to Home", icon: <Home2 size={16} />, shortcut: "⌘H" },
            { id: "settings", label: "Settings", icon: <Setting2 size={16} />, shortcut: "⌘," },
        ],
    },
    {
        heading: "Actions",
        items: [
            { id: "new", label: "Create new", icon: <Add size={16} />, shortcut: "⌘N",
              onSelect: () => console.log("Create!") },
        ],
    },
];

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <CommandMenu
            open={open}
            onClose={() => setOpen(false)}
            groups={groups}
        />
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "open", type: "boolean", default: "false", description: "Whether the menu is open" },
                    { name: "onClose", type: "() => void", default: "—", description: "Called when the menu should close" },
                    { name: "groups", type: "CommandMenuGroup[]", default: "[]", description: "Grouped menu items" },
                    { name: "placeholder", type: "string", default: '"Type a command or search..."', description: "Search input placeholder" },
                    { name: "onSelect", type: "(item: CommandMenuItem) => void", default: "—", description: "Called when an item is selected" },
                ]}
            />
        </div>
    );
}
