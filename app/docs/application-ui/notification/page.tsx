"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { toast } from "sonner";
import {
    IconNotification,
    AvatarNotification,
    ProgressNotification,
    SimpleNotification,
} from "@/components/ui/Notification";
import s from "@/components/ui/Notification/Notification.module.css";
import {
    Notification1,
    TickCircle,
    Danger,
    Warning2,
    InfoCircle,
    DocumentDownload,
    MessageText1,
    UserAdd,
    ShieldTick,
    Cloud,
    Refresh2,
    Trash,
} from "iconsax-react";

/* ══════════════════════════════════════════════
   01 — Icon Notification (Default)
   ══════════════════════════════════════════════ */

function DefaultIconDemo() {
    return (
        <div className={s.previewCenter}>
            <IconNotification
                title="Version 2.1.0 is now available"
                description="Includes the all-new dashboard view. Pages and exports will now load faster."
                confirmLabel="Install now"
                dismissLabel="Later"
                color="default"
                icon={Notification1}
                onClose={() => {}}
                onConfirm={() => {}}
                inline
            />
        </div>
    );
}

const defaultIconCode = `import { toast } from "sonner";
import { Notification1 } from "iconsax-react";
import { IconNotification } from "@/components/ui/Notification";

export function DefaultNotificationDemo() {
    const handleNotification = () => {
        toast.custom((t) => (
            <IconNotification
                title="Version 2.1.0 is now available"
                description="Includes the all-new dashboard view. Pages and exports will now load faster."
                confirmLabel="Install now"
                dismissLabel="Later"
                color="default"
                icon={Notification1}
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
            />
        ));
    };

    return <button onClick={handleNotification}>Show Notification</button>;
}`;

/* ══════════════════════════════════════════════
   02 — Color Variants
   ══════════════════════════════════════════════ */

function ColorVariantsDemo() {
    return (
        <div className={s.previewStack}>
            <IconNotification
                title="Deployment successful"
                description="Your application has been deployed to production."
                color="success"
                icon={TickCircle}
                onClose={() => {}}
                inline
            />
            <IconNotification
                title="Build failed"
                description="The build process encountered 3 errors. Check the logs for details."
                confirmLabel="View logs"
                color="error"
                icon={Danger}
                onClose={() => {}}
                onConfirm={() => {}}
                inline
            />
            <IconNotification
                title="Storage almost full"
                description="You have used 92% of your storage quota. Consider upgrading your plan."
                confirmLabel="Upgrade"
                dismissLabel="Dismiss"
                color="warning"
                icon={Warning2}
                onClose={() => {}}
                onConfirm={() => {}}
                inline
            />
            <IconNotification
                title="New feature available"
                description="AI-powered code review is now available in your workspace."
                confirmLabel="Try it"
                color="info"
                icon={InfoCircle}
                onClose={() => {}}
                onConfirm={() => {}}
                inline
            />
        </div>
    );
}

const colorVariantsCode = `import { IconNotification } from "@/components/ui/Notification";
import { TickCircle, Danger, Warning2, InfoCircle } from "iconsax-react";

export function ColorVariantsDemo() {
    return (
        <>
            <IconNotification
                title="Deployment successful"
                description="Your application has been deployed to production."
                color="success"
                icon={TickCircle}
                onClose={() => {}}
            />
            <IconNotification
                title="Build failed"
                description="The build process encountered 3 errors."
                confirmLabel="View logs"
                color="error"
                icon={Danger}
                onClose={() => {}}
            />
            <IconNotification
                title="Storage almost full"
                description="You have used 92% of your storage quota."
                confirmLabel="Upgrade"
                dismissLabel="Dismiss"
                color="warning"
                icon={Warning2}
                onClose={() => {}}
            />
            <IconNotification
                title="New feature available"
                description="AI-powered code review is now available."
                confirmLabel="Try it"
                color="info"
                icon={InfoCircle}
                onClose={() => {}}
            />
        </>
    );
}`;

/* ══════════════════════════════════════════════
   03 — Avatar Notifications
   ══════════════════════════════════════════════ */

function AvatarDemo() {
    return (
        <div className={s.previewStack}>
            <AvatarNotification
                title="Sarah Chen sent you a message"
                description="Hey! I just reviewed the latest PR. Looks great, just a few minor comments."
                confirmLabel="Reply"
                dismissLabel="Mark read"
                color="info"
                avatarFallback="SC"
                avatarColor="#3B82F6"
                onClose={() => {}}
                onConfirm={() => {}}
                timestamp="2 min ago"
                inline
            />
            <AvatarNotification
                title="Alex Rivera joined your team"
                description="Alex has accepted the invitation and joined the Engineering team."
                color="success"
                avatarFallback="AR"
                avatarColor="#10B981"
                onClose={() => {}}
                timestamp="5 min ago"
                inline
            />
            <AvatarNotification
                title="Jordan Lee requested access"
                description="Requesting editor access to the Design System project."
                confirmLabel="Approve"
                dismissLabel="Deny"
                color="warning"
                avatarFallback="JL"
                avatarColor="#F59E0B"
                onClose={() => {}}
                onConfirm={() => {}}
                timestamp="12 min ago"
                inline
            />
        </div>
    );
}

const avatarCode = `import { AvatarNotification } from "@/components/ui/Notification";
import { toast } from "sonner";

export function AvatarNotificationDemo() {
    const notify = () => {
        toast.custom((t) => (
            <AvatarNotification
                title="Sarah Chen sent you a message"
                description="Hey! I just reviewed the latest PR."
                confirmLabel="Reply"
                dismissLabel="Mark read"
                color="info"
                avatarFallback="SC"
                avatarColor="#3B82F6"
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
                timestamp="2 min ago"
            />
        ));
    };

    return <button onClick={notify}>Show Notification</button>;
}`;

/* ══════════════════════════════════════════════
   04 — Progress Notifications
   ══════════════════════════════════════════════ */

function ProgressDemo() {
    return (
        <div className={s.previewStack}>
            <ProgressNotification
                title="Uploading files..."
                description="3 of 8 files uploaded"
                color="default"
                icon={Cloud}
                progress={37}
                onClose={() => {}}
                inline
            />
            <ProgressNotification
                title="Downloading update"
                description="Version 2.1.0 — 64 MB remaining"
                color="info"
                icon={DocumentDownload}
                progress={72}
                onClose={() => {}}
                inline
            />
            <ProgressNotification
                title="Syncing data..."
                description="Synchronizing 1,247 records"
                color="success"
                icon={Refresh2}
                progress={91}
                onClose={() => {}}
                inline
            />
        </div>
    );
}

const progressCode = `import { ProgressNotification } from "@/components/ui/Notification";
import { Cloud, DocumentDownload } from "iconsax-react";

export function ProgressNotificationDemo() {
    return (
        <>
            <ProgressNotification
                title="Uploading files..."
                description="3 of 8 files uploaded"
                color="default"
                icon={Cloud}
                progress={37}
                onClose={() => {}}
            />
            <ProgressNotification
                title="Downloading update"
                description="Version 2.1.0 — 64 MB remaining"
                color="info"
                icon={DocumentDownload}
                progress={72}
                onClose={() => {}}
            />
        </>
    );
}`;

/* ══════════════════════════════════════════════
   05 — Simple Notifications
   ══════════════════════════════════════════════ */

function SimpleDemo() {
    return (
        <div className={s.previewStack}>
            <SimpleNotification
                title="Settings saved"
                description="Your preferences have been updated successfully."
                color="success"
                onClose={() => {}}
                inline
            />
            <SimpleNotification
                title="Connection lost"
                description="Attempting to reconnect..."
                color="error"
                onClose={() => {}}
                inline
            />
            <SimpleNotification
                title="Scheduled maintenance"
                description="The system will be down for maintenance on Sunday 2:00 AM UTC."
                color="warning"
                onClose={() => {}}
                timestamp="1 hour ago"
                inline
            />
        </div>
    );
}

const simpleCode = `import { SimpleNotification } from "@/components/ui/Notification";

export function SimpleNotificationDemo() {
    return (
        <>
            <SimpleNotification
                title="Settings saved"
                description="Your preferences have been updated successfully."
                color="success"
                onClose={() => {}}
            />
            <SimpleNotification
                title="Connection lost"
                description="Attempting to reconnect..."
                color="error"
                onClose={() => {}}
            />
        </>
    );
}`;

/* ══════════════════════════════════════════════
   06 — Live Toast Demo
   ══════════════════════════════════════════════ */

function LiveToastDemo() {
    const showSuccess = () => {
        toast.custom((t) => (
            <IconNotification
                title="Changes saved"
                description="All your changes have been saved successfully."
                color="success"
                icon={TickCircle}
                onClose={() => toast.dismiss(t)}
            />
        ));
    };

    const showError = () => {
        toast.custom((t) => (
            <IconNotification
                title="Action failed"
                description="Could not delete the selected items. Please try again."
                confirmLabel="Retry"
                color="error"
                icon={Trash}
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
            />
        ));
    };

    const showMessage = () => {
        toast.custom((t) => (
            <AvatarNotification
                title="New message from Maya"
                description="Can you review the mockups before EOD?"
                confirmLabel="Reply"
                dismissLabel="Later"
                color="info"
                avatarFallback="M"
                avatarColor="#8B5CF6"
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
                timestamp="just now"
            />
        ));
    };

    const showSecurity = () => {
        toast.custom((t) => (
            <IconNotification
                title="New login detected"
                description="A new sign-in was detected from Chrome on macOS."
                confirmLabel="That was me"
                dismissLabel="Secure account"
                color="warning"
                icon={ShieldTick}
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
            />
        ));
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "32px 16px", justifyContent: "center" }}>
            <button className={s.triggerBtn} onClick={showSuccess}>
                <TickCircle size={16} variant="Bulk" color="currentColor" /> Success
            </button>
            <button className={s.triggerBtn} onClick={showError}>
                <Danger size={16} variant="Bulk" color="currentColor" /> Error
            </button>
            <button className={s.triggerBtn} onClick={showMessage}>
                <MessageText1 size={16} variant="Bulk" color="currentColor" /> Message
            </button>
            <button className={s.triggerBtn} onClick={showSecurity}>
                <ShieldTick size={16} variant="Bulk" color="currentColor" /> Security
            </button>
        </div>
    );
}

const liveToastCode = `import { toast } from "sonner";
import { TickCircle, Danger, ShieldTick } from "iconsax-react";
import { IconNotification, AvatarNotification } from "@/components/ui/Notification";

export function LiveToastDemo() {
    const showSuccess = () => {
        toast.custom((t) => (
            <IconNotification
                title="Changes saved"
                description="All your changes have been saved successfully."
                color="success"
                icon={TickCircle}
                onClose={() => toast.dismiss(t)}
            />
        ));
    };

    const showError = () => {
        toast.custom((t) => (
            <IconNotification
                title="Action failed"
                description="Could not delete the selected items."
                confirmLabel="Retry"
                color="error"
                icon={Danger}
                onClose={() => toast.dismiss(t)}
                onConfirm={() => toast.dismiss(t)}
            />
        ));
    };

    return (
        <div style={{ display: "flex", gap: 8 }}>
            <button onClick={showSuccess}>Success</button>
            <button onClick={showError}>Error</button>
        </div>
    );
}`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const iconNotifProps = [
    { name: "title", type: "string", description: "Notification heading text." },
    { name: "description", type: "string", default: "—", description: "Supporting description text." },
    { name: "confirmLabel", type: "string", default: "—", description: "Label for the primary action button." },
    { name: "dismissLabel", type: "string", default: "—", description: "Label for the secondary dismiss button." },
    { name: "color", type: '"default" | "success" | "error" | "warning" | "info"', default: '"default"', description: "Color variant for accent bar, icon, and confirm button." },
    { name: "icon", type: "React.ComponentType", default: "—", description: "Icon component from iconsax-react." },
    { name: "onClose", type: "() => void", default: "—", description: "Close handler. Also shows the close button when provided." },
    { name: "onConfirm", type: "() => void", default: "—", description: "Handler for the confirm action button." },
    { name: "onDismiss", type: "() => void", default: "—", description: "Handler for the dismiss button. Falls back to onClose." },
    { name: "timestamp", type: "string", default: "—", description: "Timestamp text displayed below the description." },
    { name: "inline", type: "boolean", default: "false", description: "Renders as a static inline notification without shadow." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function NotificationPage() {
    return (
        <>
            <DocHeader
                title="Notification"
                description="Toast and inline notification components powered by Sonner. Supports icon, avatar, progress, and simple variants with five color themes."
                breadcrumbs={[
                    { label: "Docs", href: "/docs" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Notification" },
                ]}
            />

            <InstallBlock slug="notification" components={["Notification"]} />

            <ComponentPreview
                title="Icon Notification"
                description="Default notification with icon, title, description, and action buttons. Recommended as the primary notification style."
                code={defaultIconCode}
            >
                <DefaultIconDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Color Variants"
                description="Five color themes — default (lime), success, error, warning, and info — each with matching accent bar, icon background, and confirm button."
                code={colorVariantsCode}
            >
                <ColorVariantsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Avatar Notifications"
                description="User-centric notifications with avatar fallback, timestamps, and action buttons. Ideal for messages, team updates, and access requests."
                code={avatarCode}
            >
                <AvatarDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Progress Notifications"
                description="Notifications with a progress bar for uploads, downloads, and sync operations."
                code={progressCode}
            >
                <ProgressDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Simple Notifications"
                description="Minimal notifications with just title, description, and close button. No icon or action buttons."
                code={simpleCode}
            >
                <SimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Live Toast Demo"
                description="Click the buttons below to trigger real Sonner toast notifications. They appear in the top-right corner of the screen."
                code={liveToastCode}
            >
                <LiveToastDemo />
            </ComponentPreview>

            <PropsTable title="IconNotification Props" props={iconNotifProps} />
        </>
    );
}
