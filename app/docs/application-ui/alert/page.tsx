"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Alert } from "@/components/ui/Alert";

/* ── Demo 01: Floating Colors ── */

function FloatingDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <Alert
                title="We've just released a new feature"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="default"
                dismissible
                actions={[{ label: "Learn more" }, { label: "Dismiss", variant: "secondary" }]}
            />
            <Alert
                title="We've just released a new feature"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="brand"
                dismissible
                actions={[{ label: "Learn more" }, { label: "Dismiss", variant: "secondary" }]}
            />
            <Alert
                title="We've just released a new feature"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="gray"
                dismissible
            />
        </div>
    );
}

const floatingCode = `import { Alert } from "@/components/ui/Alert";

<Alert
  title="We've just released a new feature"
  description="Lorem ipsum dolor sit amet consectetur."
  color="default"
  dismissible
  actions={[
    { label: "Learn more" },
    { label: "Dismiss", variant: "secondary" },
  ]}
/>

<Alert color="brand" ... />
<Alert color="gray" ... />`;

/* ── Demo 02: Floating Status Colors ── */

function FloatingStatusDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <Alert
                title="There was a problem with that action"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="error"
                dismissible
            />
            <Alert
                title="Just to let you know this might be a problem"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="warning"
                dismissible
            />
            <Alert
                title="Successfully updated profile"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                color="success"
                dismissible
            />
        </div>
    );
}

const floatingStatusCode = `import { Alert } from "@/components/ui/Alert";

<Alert color="error" title="There was a problem with that action" ... />
<Alert color="warning" title="Just to let you know this might be a problem" ... />
<Alert color="success" title="Successfully updated profile" ... />`;

/* ── Demo 03: Full Width ── */

function FullWidthDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
            <Alert
                title="Successfully updated profile"
                description="Lorem ipsum dolor sit amet consectetur."
                color="default"
                variant="fullWidth"
                dismissible
            />
            <Alert
                title="We've just released a new feature"
                description="Lorem ipsum dolor sit amet consectetur."
                color="brand"
                variant="fullWidth"
                dismissible
            />
            <Alert
                title="There was a problem with that action"
                description="Lorem ipsum dolor sit amet consectetur."
                color="error"
                variant="fullWidth"
                dismissible
            />
            <Alert
                title="Just to let you know this might be a problem"
                description="Lorem ipsum dolor sit amet consectetur."
                color="warning"
                variant="fullWidth"
                dismissible
            />
            <Alert
                title="Successfully updated profile"
                description="Lorem ipsum dolor sit amet consectetur."
                color="success"
                variant="fullWidth"
                dismissible
            />
        </div>
    );
}

const fullWidthCode = `import { Alert } from "@/components/ui/Alert";

<Alert
  title="We've just released a new feature"
  description="Lorem ipsum dolor sit amet consectetur."
  color="brand"
  variant="fullWidth"
  dismissible
/>`;

/* ── Demo 04: With Actions ── */

function ActionsDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <Alert
                title="Update available"
                description="A new version of the application is available. Would you like to update now?"
                color="brand"
                actions={[
                    { label: "Update now" },
                    { label: "Later", variant: "secondary" },
                ]}
                dismissible
            />
        </div>
    );
}

const actionsCode = `import { Alert } from "@/components/ui/Alert";

<Alert
  title="Update available"
  description="A new version is available. Would you like to update now?"
  color="brand"
  actions={[
    { label: "Update now", onClick: () => {} },
    { label: "Later", variant: "secondary" },
  ]}
  dismissible
/>`;

/* ── Props ── */

const alertProps = [
    { name: "title", type: "string", description: "Alert title text." },
    { name: "description", type: "string", description: "Alert description text." },
    { name: "color", type: '"default" | "brand" | "gray" | "error" | "warning" | "success"', default: '"default"', description: "Color theme of the alert." },
    { name: "variant", type: '"floating" | "fullWidth"', default: '"floating"', description: "Layout variant. Floating has rounded corners; full-width spans edge to edge." },
    { name: "icon", type: "React.ReactNode | null", description: "Custom icon element. Pass null to hide the icon. Defaults to a color-appropriate icon." },
    { name: "actions", type: "AlertAction[]", description: "Action buttons displayed below the description." },
    { name: "dismissible", type: "boolean", default: "false", description: "Show a close button to dismiss the alert." },
    { name: "onDismiss", type: "() => void", description: "Callback when the alert is dismissed." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
    { name: "children", type: "React.ReactNode", description: "Custom content rendered after the description." },
];

const actionProps = [
    { name: "label", type: "string", description: "Button label text." },
    { name: "onClick", type: "() => void", description: "Click handler." },
    { name: "variant", type: '"primary" | "secondary"', default: '"primary"', description: "Button style variant." },
];

/* ── Page ── */

export default function AlertPage() {
    return (
        <div>
            <DocHeader
                title="Alert"
                description="Contextual alert banners for announcements, errors, warnings, and success messages. Available in floating and full-width layouts with 6 color themes, action buttons, and dismissible state."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Alert" },
                ]}
            />

            <InstallBlock slug="alert" components={["Alert"]} />

            <ComponentPreview
                title="Floating — Default, Brand, Gray"
                description="Floating alerts with rounded corners. Ideal for inline notifications within a page."
                code={floatingCode}
            >
                <FloatingDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Floating — Error, Warning, Success"
                description="Status-colored floating alerts for feedback messages."
                code={floatingStatusCode}
            >
                <FloatingStatusDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Full Width"
                description="Edge-to-edge alerts without rounded corners. Perfect for page-level announcements and banners."
                code={fullWidthCode}
            >
                <FullWidthDemo />
            </ComponentPreview>

            <ComponentPreview
                title="With Actions"
                description="Alerts with primary and secondary action buttons."
                code={actionsCode}
            >
                <ActionsDemo />
            </ComponentPreview>

            <PropsTable title="Alert" props={alertProps} />
            <PropsTable title="AlertAction" props={actionProps} />
        </div>
    );
}
