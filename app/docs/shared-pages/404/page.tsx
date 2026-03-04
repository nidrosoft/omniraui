"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { NotFoundPage } from "@/components/ui/NotFoundPage";
import { Book1, MessageQuestion, Headphone } from "iconsax-react";

/* ══════════════════════════════════════════════
   Preview wrapper
   ══════════════════════════════════════════════ */

const previewStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "var(--radius-xl)",
    overflow: "hidden",
    border: "1px solid var(--color-border-subtle)",
    position: "relative",
    height: 0,
    paddingBottom: "62%",
    background: "var(--color-bg-primary, #0a0a0a)",
};

const innerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "153.85%",
    height: "153.85%",
    transform: "scale(0.65)",
    transformOrigin: "top left",
};

/* ══════════════════════════════════════════════
   Demos
   ══════════════════════════════════════════════ */

function FullDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <NotFoundPage
                    onGoHome={() => console.log("Go home")}
                    onGoBack={() => console.log("Go back")}
                    onSearch={(q: string) => console.log("Search:", q)}
                />
            </div>
        </div>
    );
}

const fullCode = `import { NotFoundPage } from "@/components/ui/NotFoundPage";

<NotFoundPage
  onGoHome={() => router.push("/")}
  onGoBack={() => router.back()}
  onSearch={(query) => router.push(\`/search?q=\${query}\`)}
/>`;

function SimpleDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <NotFoundPage
                    showSearch={false}
                    showQuickLinks={false}
                    onGoHome={() => console.log("Go home")}
                    onGoBack={() => console.log("Go back")}
                />
            </div>
        </div>
    );
}

const simpleCode = `<NotFoundPage
  showSearch={false}
  showQuickLinks={false}
  onGoHome={() => router.push("/")}
  onGoBack={() => router.back()}
/>`;

function CustomLinksDemo() {
    return (
        <div style={previewStyle}>
            <div style={innerStyle}>
                <NotFoundPage
                    errorCode={500}
                    heading="Internal server error"
                    subheading="Something went wrong on our end. Please try again later or contact support if the problem persists."
                    showSearch={false}
                    quickLinks={[
                        { icon: <Book1 size={20} variant="Bulk" color="currentColor" />, title: "Status Page", description: "Check current system status." },
                        { icon: <MessageQuestion size={20} variant="Bulk" color="currentColor" />, title: "Report Issue", description: "Let us know what happened." },
                        { icon: <Headphone size={20} variant="Bulk" color="currentColor" />, title: "Contact Support", description: "Get help from our team." },
                    ]}
                    onGoHome={() => console.log("Go home")}
                    onGoBack={() => console.log("Go back")}
                />
            </div>
        </div>
    );
}

const customLinksCode = `<NotFoundPage
  errorCode={500}
  heading="Internal server error"
  subheading="Something went wrong on our end."
  showSearch={false}
  quickLinks={[
    { icon: <Book1 size={20} variant="Bulk" />, title: "Status Page", description: "Check system status." },
    { icon: <MessageQuestion size={20} variant="Bulk" />, title: "Report Issue", description: "Let us know." },
    { icon: <Headphone size={20} variant="Bulk" />, title: "Support", description: "Get help." },
  ]}
  onGoHome={() => router.push("/")}
  onGoBack={() => router.back()}
/>`;

/* ══════════════════════════════════════════════
   Props
   ══════════════════════════════════════════════ */

const notFoundProps = [
    { name: "errorCode", type: "string | number", default: "404", description: "Error code displayed prominently." },
    { name: "heading", type: "string", default: '"Page not found"', description: "Main heading text." },
    { name: "subheading", type: "string", default: '"Sorry, the page you are looking for doesn\'t exist..."', description: "Description text below the heading." },
    { name: "showSearch", type: "boolean", default: "true", description: "Show the search input bar." },
    { name: "searchPlaceholder", type: "string", default: '"Search our site..."', description: "Search input placeholder text." },
    { name: "showQuickLinks", type: "boolean", default: "true", description: "Show the quick-link cards section." },
    { name: "quickLinks", type: "QuickLink[]", default: "[docs, help, contact]", description: "Array of quick link objects with icon, title, description, and optional href/onClick." },
    { name: "onSearch", type: "(query: string) => void", description: "Called when user submits a search query." },
    { name: "onGoHome", type: "() => void", description: "Called when 'Take me home' button is clicked." },
    { name: "onGoBack", type: "() => void", description: "Called when 'Go back' button is clicked." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function NotFoundPageDocs() {
    return (
        <div>
            <DocHeader
                title="404 Page"
                description="Custom error page templates with large error code display, search bar, action buttons, and quick-link cards. Configurable for any error code (404, 500, etc.) with a subtle grid background."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Shared Pages", href: "/docs/shared-pages" },
                    { label: "404 Page" },
                ]}
            />

            <InstallBlock slug="not-found-page" components={["NotFoundPage"]} />

            {/* ── Full Featured ── */}
            <ComponentPreview
                title="Full Featured"
                description="Default 404 page with search bar, go-home/go-back buttons, and quick-link cards to documentation, help center, and contact."
                code={fullCode}
            >
                <FullDemo />
            </ComponentPreview>

            {/* ── Simple ── */}
            <ComponentPreview
                title="Simple"
                description="Minimal 404 page without search bar or quick links. Just the error code, message, and navigation buttons."
                code={simpleCode}
            >
                <SimpleDemo />
            </ComponentPreview>

            {/* ── Custom Error ── */}
            <ComponentPreview
                title="Custom Error (500)"
                description="Reused for any error code — here configured as a 500 Internal Server Error with custom quick links for status, reporting, and support."
                code={customLinksCode}
            >
                <CustomLinksDemo />
            </ComponentPreview>

            <PropsTable title="NotFoundPage" props={notFoundProps} />
        </div>
    );
}
