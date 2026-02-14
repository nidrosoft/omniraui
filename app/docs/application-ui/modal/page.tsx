"use client";

import { cn } from "@/lib/cn";
import {
    TickCircle, Warning2, Trash, Sms, Lock, ShieldTick,
    DocumentUpload, Add, Link21, Crown, TickSquare,
} from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toggle } from "@/components/ui/Toggle";
import { Checkbox } from "@/components/ui/Checkbox";
import { Badge } from "@/components/ui/Badge";
import s from "@/components/ui/Modal/Modal.module.css";

/* ══════════════════════════════════════════════
   Helper: Static modal panel rendered inline
   (no overlay, no click-to-open — visible immediately)
   ══════════════════════════════════════════════ */

function ModalPanel({
    size = "sm",
    icon,
    intent = "default",
    title,
    description,
    footer,
    children,
}: {
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    intent?: "default" | "warning" | "destructive" | "success";
    title?: string;
    description?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}) {
    return (
        <div className={cn(s.panel, s.staticPreview, s[`size-${size}`])} role="dialog">
            {/* Close button (decorative) */}
            <button className={s.closeBtn} aria-label="Close modal" tabIndex={-1}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </button>

            {icon && <div className={cn(s.iconContainer, s[`intent-${intent}`])}>{icon}</div>}

            {(title || description) && (
                <div className={s.header}>
                    {title && <h2 className={s.title}>{title}</h2>}
                    {description && <p className={s.description}>{description}</p>}
                </div>
            )}

            {children && <div className={s.body}>{children}</div>}
            {footer && <div className={s.footer}>{footer}</div>}
        </div>
    );
}

/* ══════════════════════════════════════════════
   Shared data
   ══════════════════════════════════════════════ */

const noop = () => {};

const teamMembers = [
    { name: "Alice Johnson", email: "alice@example.com", initials: "AJ" },
    { name: "Bob Smith", email: "bob@example.com", initials: "BS" },
    { name: "Carol Davis", email: "carol@example.com", initials: "CD" },
];

/* ══════════════════════════════════════════════
   Code strings
   ══════════════════════════════════════════════ */

const confirmationCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { TickCircle } from "iconsax-react";

<Modal
    open={open}
    onClose={onClose}
    size="sm"
    icon={<TickCircle size={24} variant="Bulk" />}
    intent="success"
    title="Changes saved"
    description="Your profile changes have been saved successfully."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="primary" onClick={onClose}>Continue</Button>
        </>
    }
/>`;

const warningCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Warning2 } from "iconsax-react";

<Modal
    open={open}
    onClose={onClose}
    size="sm"
    icon={<Warning2 size={24} variant="Bulk" />}
    intent="warning"
    title="Unsaved changes"
    description="You have unsaved changes that will be lost."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Keep editing</Button>
            <Button variant="primary" onClick={onClose}>Discard</Button>
        </>
    }
/>`;

const destructiveCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Trash } from "iconsax-react";

<Modal
    open={open}
    onClose={onClose}
    size="sm"
    icon={<Trash size={24} variant="Bulk" />}
    intent="destructive"
    title="Delete project"
    description="This action cannot be undone."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}
                style={{ background: "var(--color-error)" }}>Delete</Button>
        </>
    }
/>`;

const loginCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

<Modal open={open} onClose={onClose} size="sm"
    title="Welcome back" description="Sign in to your account.">
    <Input label="Email" type="email" placeholder="you@example.com" />
    <Input label="Password" type="password" placeholder="Enter your password" />
    <Checkbox label="Remember me" size="sm" />
    <Button variant="primary" fullWidth>Sign in</Button>
    <Button variant="secondary" fullWidth>Continue with Google</Button>
</Modal>`;

const signupCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

<Modal open={open} onClose={onClose} size="sm"
    title="Create an account" description="Get started with a free account.">
    <div style={{ display: "flex", gap: 12 }}>
        <Input label="First name" placeholder="John" />
        <Input label="Last name" placeholder="Doe" />
    </div>
    <Input label="Email" type="email" placeholder="you@example.com" />
    <Input label="Password" type="password" placeholder="Create a password" />
    <Checkbox label="I agree to the Terms of Service" size="sm" />
    <Button variant="primary" fullWidth>Create account</Button>
</Modal>`;

const verificationCodeStr = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ShieldTick } from "iconsax-react";

<Modal open={open} onClose={onClose} size="sm"
    icon={<ShieldTick size={24} variant="Bulk" />}
    title="Verify your email"
    description="We sent a 6-digit code to your email."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>Verify</Button>
        </>
    }>
    {/* 6 single-digit inputs */}
</Modal>`;

const formCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Toggle } from "@/components/ui/Toggle";

<Modal open={open} onClose={onClose} size="md"
    title="Notification preferences"
    description="Choose how you want to be notified."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>Save preferences</Button>
        </>
    }>
    <Toggle label="Email notifications" hint="Receive updates via email" defaultChecked />
    <Toggle label="Push notifications" hint="Receive push notifications" />
    <Toggle label="SMS notifications" hint="Receive text messages" />
</Modal>`;

const teamInviteCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

<Modal open={open} onClose={onClose} size="md"
    title="Invite team members"
    description="Add people to your workspace by email."
    footer={
        <>
            <Button variant="ghost" size="sm">Copy invite link</Button>
            <Button variant="primary" onClick={onClose}>Send invites</Button>
        </>
    }>
    <Input placeholder="Enter email address" type="email" />
    {/* Team member rows */}
</Modal>`;

const fileUploadCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { DocumentUpload } from "iconsax-react";

<Modal open={open} onClose={onClose} size="md"
    title="Upload files"
    description="Drag and drop files or click to browse."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>Upload</Button>
        </>
    }>
    {/* Upload drop zone */}
</Modal>`;

const profileSettingsCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toggle } from "@/components/ui/Toggle";

<Modal open={open} onClose={onClose} size="md"
    title="Profile settings"
    description="Update your personal information."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>Save changes</Button>
        </>
    }>
    {/* Avatar, form fields, toggles */}
</Modal>`;

const planCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Crown, TickSquare } from "iconsax-react";

<Modal open={open} onClose={onClose} size="md"
    icon={<Crown size={24} variant="Bulk" />}
    title="Upgrade your plan"
    description="Choose the plan that works best for your team."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Maybe later</Button>
            <Button variant="primary" onClick={onClose}>Upgrade</Button>
        </>
    }>
    {/* Plan cards grid */}
</Modal>`;

const newProjectCode = `import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Badge } from "@/components/ui/Badge";

<Modal open={open} onClose={onClose} size="md"
    title="Create new project"
    description="Set up a new project for your team."
    footer={
        <>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>Create project</Button>
        </>
    }>
    <Input label="Project name" placeholder="My awesome project" />
    <Input label="Description" placeholder="What is this project about?" />
    <Checkbox label="Public — anyone can view" size="sm" />
</Modal>`;

/* ── Props ── */

const modalProps = [
    { name: "open", type: "boolean", description: "Whether the modal is open" },
    { name: "onClose", type: "() => void", description: "Callback when the modal should close" },
    { name: "size", type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", description: "Modal width preset (default: 'md')" },
    { name: "title", type: "string", description: "Optional title rendered in the header" },
    { name: "description", type: "string", description: "Optional description below the title" },
    { name: "icon", type: "React.ReactNode", description: "Optional icon or illustration above the title" },
    { name: "intent", type: "'default' | 'warning' | 'destructive' | 'success'", description: "Visual intent for the icon container (default: 'default')" },
    { name: "footer", type: "React.ReactNode", description: "Footer content, typically action buttons" },
    { name: "closeOnOverlay", type: "boolean", description: "Whether clicking the overlay closes the modal (default: true)" },
    { name: "closeOnEscape", type: "boolean", description: "Whether pressing Escape closes the modal (default: true)" },
    { name: "hideClose", type: "boolean", description: "Hide the close (X) button (default: false)" },
    { name: "children", type: "React.ReactNode", description: "Modal body content" },
    { name: "className", type: "string", description: "Additional CSS class for the panel" },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function ModalPage() {
    return (
        <div>
            <DocHeader
                title="Modal"
                description="Accessible modal dialogs for confirmations, forms, authentication, file uploads, team management, and more. Built with keyboard navigation and overlay dismiss."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Modal" },
                ]}
            />

            <InstallBlock slug="modal" components={["Modal", "Button", "Input", "Toggle", "Checkbox", "Badge"]} />

            {/* ── 01 Confirmation ── */}
            <ComponentPreview
                title="Confirmation"
                description="Success confirmation modal with icon, title, description, and action buttons."
                code={confirmationCode}
            >
                <ModalPanel
                    size="sm"
                    icon={<TickCircle size={24} variant="Bulk" color="currentColor" />}
                    intent="success"
                    title="Changes saved"
                    description="Your profile changes have been saved successfully. You can continue editing or close this dialog."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Close</Button>
                            <Button variant="primary" size="md" onClick={noop}>Continue</Button>
                        </div>
                    }
                />
            </ComponentPreview>

            {/* ── 02 Warning ── */}
            <ComponentPreview
                title="Warning"
                description="Warning modal for unsaved changes or potentially risky actions."
                code={warningCode}
            >
                <ModalPanel
                    size="sm"
                    icon={<Warning2 size={24} variant="Bulk" color="currentColor" />}
                    intent="warning"
                    title="Unsaved changes"
                    description="You have unsaved changes that will be lost if you leave this page. Are you sure you want to discard them?"
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Keep editing</Button>
                            <Button variant="primary" size="md" onClick={noop}>Discard</Button>
                        </div>
                    }
                />
            </ComponentPreview>

            {/* ── 03 Destructive ── */}
            <ComponentPreview
                title="Destructive"
                description="Destructive confirmation modal with red delete button for irreversible actions."
                code={destructiveCode}
            >
                <ModalPanel
                    size="sm"
                    icon={<Trash size={24} variant="Bulk" color="currentColor" />}
                    intent="destructive"
                    title="Delete project"
                    description="Are you sure you want to delete this project? This action cannot be undone and all data will be permanently removed."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop} style={{ background: "var(--color-error)", borderColor: "var(--color-error)" }}>Delete</Button>
                        </div>
                    }
                />
            </ComponentPreview>

            {/* ── 04 Login ── */}
            <ComponentPreview
                title="Login"
                description="Authentication modal with email/password fields, remember me, forgot password, and social login."
                code={loginCode}
            >
                <ModalPanel size="sm" title="Welcome back" description="Sign in to your account to continue.">
                    <div className={s.formGrid}>
                        <Input label="Email" type="email" placeholder="you@example.com" leadingIcon={<Sms size={18} variant="Bulk" />} />
                        <Input label="Password" type="password" placeholder="Enter your password" leadingIcon={<Lock size={18} variant="Bulk" />} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Checkbox label="Remember me" size="sm" />
                            <span style={{ color: "var(--color-lime)", fontSize: 13, cursor: "pointer" }}>Forgot password?</span>
                        </div>
                        <Button variant="primary" size="md" fullWidth onClick={noop}>Sign in</Button>
                        <hr className={s.divider} />
                        <Button variant="secondary" size="md" fullWidth onClick={noop}>Continue with Google</Button>
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 05 Signup ── */}
            <ComponentPreview
                title="Signup"
                description="Registration modal with name, email, password fields, terms checkbox, and sign-in link."
                code={signupCode}
            >
                <ModalPanel size="sm" title="Create an account" description="Get started with a free account today.">
                    <div className={s.formGrid}>
                        <div className={s.formRow}>
                            <Input label="First name" placeholder="John" />
                            <Input label="Last name" placeholder="Doe" />
                        </div>
                        <Input label="Email" type="email" placeholder="you@example.com" leadingIcon={<Sms size={18} variant="Bulk" />} />
                        <Input label="Password" type="password" placeholder="Create a password" helperText="Must be at least 8 characters" leadingIcon={<Lock size={18} variant="Bulk" />} />
                        <Checkbox label="I agree to the Terms of Service and Privacy Policy" size="sm" />
                        <Button variant="primary" size="md" fullWidth onClick={noop}>Create account</Button>
                        <hr className={s.divider} />
                        <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>
                            Already have an account? <span style={{ color: "var(--color-lime)", cursor: "pointer" }}>Sign in</span>
                        </p>
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 06 Verification Code ── */}
            <ComponentPreview
                title="Verification Code"
                description="OTP verification modal with 6-digit code input and resend link."
                code={verificationCodeStr}
            >
                <ModalPanel
                    size="sm"
                    icon={<ShieldTick size={24} variant="Bulk" color="currentColor" />}
                    title="Verify your email"
                    description="We sent a 6-digit code to john@example.com. Enter it below to verify your account."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop}>Verify</Button>
                        </div>
                    }
                >
                    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                style={{
                                    width: 48, height: 48,
                                    textAlign: "center",
                                    fontSize: 20, fontWeight: 700,
                                    borderRadius: "var(--radius-md)",
                                    border: "1px solid var(--color-border-standard)",
                                    background: "var(--color-bg-elevated)",
                                    color: "var(--color-text-primary)",
                                    outline: "none",
                                }}
                            />
                        ))}
                    </div>
                    <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>
                        Didn&apos;t receive the code? <span style={{ color: "var(--color-lime)", cursor: "pointer" }}>Resend</span>
                    </p>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 07 Notification Preferences ── */}
            <ComponentPreview
                title="Notification Preferences"
                description="Form modal with toggle switches for managing notification settings."
                code={formCode}
            >
                <ModalPanel
                    size="md"
                    title="Notification preferences"
                    description="Choose how you want to be notified about updates."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop}>Save preferences</Button>
                        </div>
                    }
                >
                    <div className={s.formGrid}>
                        <Toggle label="Email notifications" hint="Receive updates via email" defaultChecked />
                        <Toggle label="Push notifications" hint="Receive push notifications on your device" />
                        <Toggle label="SMS notifications" hint="Receive text messages for critical alerts" />
                        <hr className={s.divider} />
                        <Toggle label="Marketing emails" hint="Receive tips, product updates, and offers" defaultChecked />
                        <Toggle label="Weekly digest" hint="Get a summary of your activity every week" defaultChecked />
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 08 Team Invite ── */}
            <ComponentPreview
                title="Team Invite"
                description="Team management modal with email invite input, member list with avatars, and invite link."
                code={teamInviteCode}
            >
                <ModalPanel
                    size="md"
                    title="Invite team members"
                    description="Add people to your workspace by email address."
                    footer={
                        <div className={s.footerSpread}>
                            <Button variant="ghost" size="sm" icon={<Link21 size={16} variant="Bulk" />}>Copy invite link</Button>
                            <Button variant="primary" size="md" onClick={noop}>Send invites</Button>
                        </div>
                    }
                >
                    <div className={s.formGrid}>
                        <div className={s.formRow}>
                            <Input placeholder="Enter email address" type="email" leadingIcon={<Sms size={18} variant="Bulk" />} />
                            <Button variant="secondary" size="md" icon={<Add size={18} />}>Add</Button>
                        </div>
                        <hr className={s.divider} />
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-tertiary)" }}>Current members</div>
                        {teamMembers.map((m) => (
                            <div key={m.email} className={s.userRow}>
                                <div className={s.userAvatar}>{m.initials}</div>
                                <div className={s.userInfo}>
                                    <span className={s.userName}>{m.name}</span>
                                    <span className={s.userEmail}>{m.email}</span>
                                </div>
                                <Badge variant="section" size="sm">Admin</Badge>
                            </div>
                        ))}
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 09 File Upload ── */}
            <ComponentPreview
                title="File Upload"
                description="File upload modal with drag-and-drop zone and file type hints."
                code={fileUploadCode}
            >
                <ModalPanel
                    size="md"
                    title="Upload files"
                    description="Drag and drop files or click to browse from your computer."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop}>Upload</Button>
                        </div>
                    }
                >
                    <div className={s.uploadZone}>
                        <div className={s.uploadIcon}>
                            <DocumentUpload size={20} variant="Bulk" color="currentColor" />
                        </div>
                        <span className={s.uploadText}>
                            <span style={{ color: "var(--color-lime)", fontWeight: 600 }}>Click to upload</span> or drag and drop
                        </span>
                        <span className={s.uploadHint}>SVG, PNG, JPG or GIF (max. 10MB)</span>
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 10 Profile Settings ── */}
            <ComponentPreview
                title="Profile Settings"
                description="Settings modal with avatar, form fields, and toggle preferences."
                code={profileSettingsCode}
            >
                <ModalPanel
                    size="md"
                    title="Profile settings"
                    description="Update your personal information and preferences."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop}>Save changes</Button>
                        </div>
                    }
                >
                    <div className={s.formGrid}>
                        <div className={s.settingsAvatar}>
                            <div className={s.avatarCircle}>JD</div>
                            <div className={s.avatarActions}>
                                <Button variant="secondary" size="sm" onClick={noop}>Change photo</Button>
                                <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>JPG, PNG or GIF. Max 2MB.</span>
                            </div>
                        </div>
                        <hr className={s.divider} />
                        <div className={s.formRow}>
                            <Input label="First name" defaultValue="John" />
                            <Input label="Last name" defaultValue="Doe" />
                        </div>
                        <Input label="Email" type="email" defaultValue="john@example.com" leadingIcon={<Sms size={18} variant="Bulk" />} />
                        <Input label="Bio" placeholder="Tell us about yourself" />
                        <hr className={s.divider} />
                        <Toggle label="Public profile" hint="Allow others to see your profile" defaultChecked />
                        <Toggle label="Show email" hint="Display your email on your public profile" />
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 11 Plan Selection ── */}
            <ComponentPreview
                title="Plan Selection"
                description="Upgrade modal with plan comparison cards, pricing, and feature lists."
                code={planCode}
            >
                <ModalPanel
                    size="md"
                    icon={<Crown size={24} variant="Bulk" color="currentColor" />}
                    intent="default"
                    title="Upgrade your plan"
                    description="Choose the plan that works best for your team."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Maybe later</Button>
                            <Button variant="primary" size="md" onClick={noop}>Upgrade</Button>
                        </div>
                    }
                >
                    <div className={s.planGrid}>
                        <div className={s.planCard}>
                            <span className={s.planName}>Starter</span>
                            <div><span className={s.planPrice}>$9</span> <span className={s.planPeriod}>/month</span></div>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> 5 team members</span>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> 10 GB storage</span>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> Email support</span>
                        </div>
                        <div className={`${s.planCard} ${s.planCardActive}`}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span className={s.planName}>Pro</span>
                                <Badge variant="accent" size="sm">Popular</Badge>
                            </div>
                            <div><span className={s.planPrice}>$29</span> <span className={s.planPeriod}>/month</span></div>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> Unlimited members</span>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> 100 GB storage</span>
                            <span className={s.planFeature}><TickSquare size={14} variant="Bulk" color="var(--color-lime)" /> Priority support</span>
                        </div>
                    </div>
                </ModalPanel>
            </ComponentPreview>

            {/* ── 12 New Project ── */}
            <ComponentPreview
                title="New Project"
                description="Project creation modal with name, description, URL, visibility, and team member selection."
                code={newProjectCode}
            >
                <ModalPanel
                    size="md"
                    title="Create new project"
                    description="Set up a new project for your team to collaborate on."
                    footer={
                        <div className={s.footerRight}>
                            <Button variant="secondary" size="md" onClick={noop}>Cancel</Button>
                            <Button variant="primary" size="md" onClick={noop}>Create project</Button>
                        </div>
                    }
                >
                    <div className={s.formGrid}>
                        <Input label="Project name" placeholder="My awesome project" />
                        <Input label="Description" placeholder="What is this project about?" />
                        <Input label="Project URL" placeholder="my-project" leadingText="app.omnira.space/" />
                        <hr className={s.divider} />
                        <label className={s.formLabel}>
                            Visibility
                            <div style={{ display: "flex", gap: 12 }}>
                                <Checkbox label="Public — anyone can view" size="sm" />
                            </div>
                        </label>
                        <label className={s.formLabel}>
                            Team members
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {teamMembers.map((m) => (
                                    <Badge key={m.email} variant="section" size="sm">{m.name}</Badge>
                                ))}
                                <Button variant="ghost" size="sm" icon={<Add size={14} />}>Add</Button>
                            </div>
                        </label>
                    </div>
                </ModalPanel>
            </ComponentPreview>

            <PropsTable title="Modal" props={modalProps} />
        </div>
    );
}
