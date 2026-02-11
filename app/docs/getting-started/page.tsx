import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function GettingStartedPage() {
    return (
        <div>
            <DocHeader
                title="Installation"
                description="Get started with Omnira UI by installing the base design system into your Next.js project."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started" },
                ]}
            />

            <section style={{ marginBottom: 48 }}>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                }}>
                    1. Install Omnira UI
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Install the Omnira UI package and its peer dependencies into your project.
                </p>
                <CodeBlock
                    code={`# Using npm
npx omnira-ui@latest init

# Using pnpm
pnpm dlx omnira-ui@latest init

# Using yarn
yarn dlx omnira-ui@latest init`}
                    language="bash"
                />
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, marginTop: 16, lineHeight: 1.6 }}>
                    Or install the package directly:
                </p>
                <CodeBlock
                    code={`# Using npm
npm install omnira-ui

# Using pnpm
pnpm add omnira-ui

# Using yarn
yarn add omnira-ui`}
                    language="bash"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                }}>
                    2. Install Peer Dependencies
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Omnira UI requires the following peer dependencies for icons and animations.
                </p>
                <CodeBlock
                    code={`pnpm add iconsax-react framer-motion`}
                    language="bash"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                }}>
                    3. Configure the Design System
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Add the Omnira UI design tokens to your <code style={{ color: "var(--color-lime)", background: "var(--color-bg-lime-subtle)", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>globals.css</code>. This includes all CSS custom properties for colors, shadows, borders, radii, and typography.
                </p>
                <CodeBlock
                    code={`/* globals.css — Import the Omnira UI design tokens */
@import "omnira-ui/styles";

/* Or manually add the data-theme selectors */
[data-theme="dark"] {
    --color-lime: #D2FE17;
    --color-bg-primary: #202020;
    --color-bg-card: rgba(248, 248, 248, 0.03);
    --color-text-primary: rgba(248, 248, 248, 0.95);
    /* ... full token set */
}

[data-theme="light"] {
    --color-lime: #8AB400;
    --color-bg-primary: #f5f5f7;
    --color-bg-card: rgba(255, 255, 255, 0.7);
    --color-text-primary: rgba(18, 18, 18, 0.95);
    /* ... full token set */
}`}
                    language="css"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                }}>
                    4. Set Up Fonts
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Omnira UI uses <strong>Host Grotesk</strong> (Bold 700) for display/headlines and <strong>Rubik</strong> for body text.
                </p>
                <CodeBlock
                    code={`// app/layout.tsx
import { Rubik } from "next/font/google";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-rubik",
    display: "swap",
});

// Add Host Grotesk as a local @font-face in globals.css
// Download HostGrotesk-Bold.woff2 to public/fonts/`}
                    language="tsx"
                />
            </section>

            <section style={{ marginBottom: 48 }}>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                }}>
                    5. Start Using Components
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                    Import and use Omnira UI components in your application. Each component is self-contained and fully typed.
                </p>
                <CodeBlock
                    code={`import { Button } from "omnira-ui/Button";
import { Badge } from "omnira-ui/Badge";
import { Input } from "omnira-ui/Input";
import { Card } from "omnira-ui/Card";

export default function MyPage() {
    return (
        <Card variant="standard" padding="lg">
            <h2>Welcome to Omnira UI</h2>
            <Input label="Email" placeholder="you@example.com" />
            <Button variant="primary">Get Started</Button>
            <Badge variant="accent">New</Badge>
        </Card>
    );
}`}
                    language="tsx"
                />
            </section>
        </div>
    );
}
