"use client";

import { useState } from "react";
import {
    User,
    Setting2,
    Logout,
    Trash,
    People,
    Wallet2,
    Notification,
    Moon,
    Card,
    Bitcoin,
    DollarSquare,
    Share,
    Link1,
    Sms,
    Copy,
    Edit2,
    DocumentText,
    FolderOpen,
} from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/Dropdown";

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

/* ── Basic Demo ── */
function BasicDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Settings</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={() => {}}>Team</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Invite Members</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => {}}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Icons Demo ── */
function IconsDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuItem icon={<User size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<Setting2 size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<Wallet2 size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                        Billing
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem icon={<People size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                        Team
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<Notification size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem icon={<Logout size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                    Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Shortcuts Demo ── */
function ShortcutsDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Edit</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem icon={<Edit2 size={16} variant="Bold" color="currentColor" />} shortcut="⌘E" onSelect={() => {}}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem icon={<Copy size={16} variant="Bold" color="currentColor" />} shortcut="⌘C" onSelect={() => {}}>
                    Copy
                </DropdownMenuItem>
                <DropdownMenuItem icon={<DocumentText size={16} variant="Bold" color="currentColor" />} shortcut="⌘V" onSelect={() => {}}>
                    Paste
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem icon={<FolderOpen size={16} variant="Bold" color="currentColor" />} shortcut="⌘O" onSelect={() => {}}>
                    Open
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Checkboxes Demo ── */
function CheckboxesDemo() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [sounds, setSounds] = useState(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Preferences</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    icon={<Notification size={16} variant="Bold" color="currentColor" />}
                >
                    Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    icon={<Moon size={16} variant="Bold" color="currentColor" />}
                >
                    Dark Mode
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={sounds}
                    onCheckedChange={setSounds}
                >
                    Sound Effects
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Radio Group Demo ── */
function RadioDemo() {
    const [payment, setPayment] = useState("card");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Payment Method</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select Payment</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={payment} onValueChange={setPayment}>
                    <DropdownMenuRadioItem value="card" icon={<Card size={16} variant="Bold" color="currentColor" />}>
                        Credit Card
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="crypto" icon={<Bitcoin size={16} variant="Bold" color="currentColor" />}>
                        Cryptocurrency
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bank" icon={<DollarSquare size={16} variant="Bold" color="currentColor" />}>
                        Bank Transfer
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Destructive Demo ── */
function DestructiveDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem icon={<Edit2 size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem icon={<Copy size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                    Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    icon={<Trash size={16} variant="Bold" color="currentColor" />}
                    destructive
                    onSelect={() => {}}
                >
                    Delete Project
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Submenu Demo ── */
function SubmenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">More Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem icon={<Edit2 size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger icon={<Share size={16} variant="Bold" color="currentColor" />}>
                        Share
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem icon={<Link1 size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                            Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem icon={<Sms size={16} variant="Bold" color="currentColor" />} onSelect={() => {}}>
                            Email
                        </DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem icon={<Trash size={16} variant="Bold" color="currentColor" />} destructive onSelect={() => {}}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* ── Alignment Demo ── */
function AlignmentDemo() {
    return (
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" size="sm">Start</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onSelect={() => {}}>Option A</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Option B</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" size="sm">Center</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    <DropdownMenuItem onSelect={() => {}}>Option A</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Option B</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" size="sm">End</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => {}}>Option A</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Option B</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

/* ── Disabled Items Demo ── */
function DisabledDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="sm">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => {}}>Active Item</DropdownMenuItem>
                <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => {}}>Another Active</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

const dropdownMenuItemProps = [
    { name: "children", type: "ReactNode", required: true, description: "Item label content." },
    { name: "icon", type: "ReactNode", description: "Icon rendered before the label." },
    { name: "shortcut", type: "string", description: "Keyboard shortcut hint displayed on the right." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the item." },
    { name: "destructive", type: "boolean", default: "false", description: "Style as a destructive/danger action." },
    { name: "onSelect", type: "() => void", description: "Callback when item is selected. Closes the menu." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

export default function DropdownPage() {
    return (
        <div>
            <DocHeader
                title="Dropdown Menu"
                description="Displays a menu of actions or options triggered by a button. Supports icons, shortcuts, checkboxes, radio groups, submenus, and destructive actions."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Dropdown" },
                ]}
            />

            {/* ── Basic ── */}
            <h2 style={sectionHeading}>Basic</h2>
            <p style={sectionDesc}>A simple dropdown with labels, groups, and separators.</p>

            <ComponentPreview
                title="Basic Menu"
                code={`<DropdownMenu>
    <DropdownMenuTrigger>
        <Button variant="ghost" size="sm">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Settings</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => {}}>Log Out</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>`}
            >
                <BasicDemo />
            </ComponentPreview>

            {/* ── Icons ── */}
            <h2 style={sectionHeading}>With Icons</h2>
            <p style={sectionDesc}>Combine icons with labels for quick visual scanning.</p>

            <ComponentPreview
                title="Icons Menu"
                code={`<DropdownMenuItem
    icon={<User size={16} variant="Bold" color="currentColor" />}
    onSelect={() => {}}
>
    Profile
</DropdownMenuItem>
<DropdownMenuItem
    icon={<Setting2 size={16} variant="Bold" color="currentColor" />}
    onSelect={() => {}}
>
    Settings
</DropdownMenuItem>`}
            >
                <IconsDemo />
            </ComponentPreview>

            {/* ── Shortcuts ── */}
            <h2 style={sectionHeading}>Keyboard Shortcuts</h2>
            <p style={sectionDesc}>Show keyboard shortcut hints alongside menu items.</p>

            <ComponentPreview
                title="Shortcuts"
                code={`<DropdownMenuItem
    icon={<Edit2 size={16} variant="Bold" color="currentColor" />}
    shortcut="⌘E"
    onSelect={() => {}}
>
    Edit
</DropdownMenuItem>
<DropdownMenuItem
    icon={<Copy size={16} variant="Bold" color="currentColor" />}
    shortcut="⌘C"
    onSelect={() => {}}
>
    Copy
</DropdownMenuItem>`}
            >
                <ShortcutsDemo />
            </ComponentPreview>

            {/* ── Checkboxes ── */}
            <h2 style={sectionHeading}>Checkboxes</h2>
            <p style={sectionDesc}>Use DropdownMenuCheckboxItem for toggleable options.</p>

            <ComponentPreview
                title="Checkbox Items"
                code={`const [notifications, setNotifications] = useState(true);
const [darkMode, setDarkMode] = useState(false);

<DropdownMenuCheckboxItem
    checked={notifications}
    onCheckedChange={setNotifications}
    icon={<Notification size={16} variant="Bold" color="currentColor" />}
>
    Notifications
</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem
    checked={darkMode}
    onCheckedChange={setDarkMode}
    icon={<Moon size={16} variant="Bold" color="currentColor" />}
>
    Dark Mode
</DropdownMenuCheckboxItem>`}
            >
                <CheckboxesDemo />
            </ComponentPreview>

            {/* ── Radio Group ── */}
            <h2 style={sectionHeading}>Radio Group</h2>
            <p style={sectionDesc}>Use DropdownMenuRadioGroup for exclusive single-selection options.</p>

            <ComponentPreview
                title="Radio Selection"
                code={`const [payment, setPayment] = useState("card");

<DropdownMenuRadioGroup value={payment} onValueChange={setPayment}>
    <DropdownMenuRadioItem
        value="card"
        icon={<Card size={16} variant="Bold" color="currentColor" />}
    >
        Credit Card
    </DropdownMenuRadioItem>
    <DropdownMenuRadioItem
        value="crypto"
        icon={<Bitcoin size={16} variant="Bold" color="currentColor" />}
    >
        Cryptocurrency
    </DropdownMenuRadioItem>
    <DropdownMenuRadioItem
        value="bank"
        icon={<DollarSquare size={16} variant="Bold" color="currentColor" />}
    >
        Bank Transfer
    </DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
            >
                <RadioDemo />
            </ComponentPreview>

            {/* ── Destructive ── */}
            <h2 style={sectionHeading}>Destructive</h2>
            <p style={sectionDesc}>Use the destructive prop for irreversible actions like delete.</p>

            <ComponentPreview
                title="Destructive Action"
                code={`<DropdownMenuItem
    icon={<Trash size={16} variant="Bold" color="currentColor" />}
    destructive
    onSelect={() => {}}
>
    Delete Project
</DropdownMenuItem>`}
            >
                <DestructiveDemo />
            </ComponentPreview>

            {/* ── Submenu ── */}
            <h2 style={sectionHeading}>Submenu</h2>
            <p style={sectionDesc}>Nest secondary actions inside a submenu that opens on hover.</p>

            <ComponentPreview
                title="Submenu"
                code={`<DropdownMenuSub>
    <DropdownMenuSubTrigger
        icon={<Share size={16} variant="Bold" color="currentColor" />}
    >
        Share
    </DropdownMenuSubTrigger>
    <DropdownMenuSubContent>
        <DropdownMenuItem
            icon={<Link1 size={16} variant="Bold" color="currentColor" />}
            onSelect={() => {}}
        >
            Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem
            icon={<Sms size={16} variant="Bold" color="currentColor" />}
            onSelect={() => {}}
        >
            Email
        </DropdownMenuItem>
    </DropdownMenuSubContent>
</DropdownMenuSub>`}
            >
                <SubmenuDemo />
            </ComponentPreview>

            {/* ── Alignment ── */}
            <h2 style={sectionHeading}>Alignment</h2>
            <p style={sectionDesc}>Control where the dropdown opens relative to the trigger: start, center, or end.</p>

            <ComponentPreview
                title="Start / Center / End"
                code={`<DropdownMenuContent align="start">...</DropdownMenuContent>
<DropdownMenuContent align="center">...</DropdownMenuContent>
<DropdownMenuContent align="end">...</DropdownMenuContent>`}
            >
                <AlignmentDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled Items</h2>
            <p style={sectionDesc}>Disabled items are visually dimmed and non-interactive.</p>

            <ComponentPreview
                title="Disabled"
                code={`<DropdownMenuItem onSelect={() => {}}>Active Item</DropdownMenuItem>
<DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
<DropdownMenuItem onSelect={() => {}}>Another Active</DropdownMenuItem>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Dropdown components and compose them together.</p>

            <CodeBlock
                code={`import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";

export default function Example() {
    const [darkMode, setDarkMode] = useState(false);
    const [payment, setPayment] = useState("card");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {}}>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                >
                    Dark Mode
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={payment} onValueChange={setPayment}>
                    <DropdownMenuRadioItem value="card">Card</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="crypto">Crypto</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem destructive onSelect={() => {}}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={dropdownMenuItemProps} />
        </div>
    );
}
