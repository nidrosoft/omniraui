import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function ThemingPage() {
    return (
        <div>
            <DocHeader
                title="Theming"
                description="Omnira UI uses CSS custom properties for theming. Switch between dark and light mode with a single data attribute."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "Theming" },
                ]}
            />

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    How It Works
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Theme is controlled by a <code style={{ color: "var(--color-lime)", background: "var(--color-bg-lime-subtle)", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>data-theme</code> attribute on the HTML element. All CSS custom properties automatically switch values based on this attribute.
                </p>
                <CodeBlock
                    code={`<!-- Dark mode (default) -->
<html data-theme="dark">

<!-- Light mode -->
<html data-theme="light">`}
                    language="html"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Theme Provider
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Use the built-in React Context provider to manage theme state. It persists the user&apos;s preference in localStorage.
                </p>
                <CodeBlock
                    code={`// lib/theme-context.tsx
import { useTheme } from "@/lib/theme-context";

function MyComponent() {
    const { theme, toggleTheme, setTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Current: {theme}
        </button>
    );
}`}
                    language="tsx"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 16 }}>
                    Smooth Transitions
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    All themed properties include a 0.4s transition for smooth switching between modes. This is applied globally on the body element.
                </p>
                <CodeBlock
                    code={`body {
    transition: background 0.4s ease, color 0.4s ease;
}`}
                    language="css"
                />
            </section>
        </div>
    );
}
