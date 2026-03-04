"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ArrowDown2 } from "iconsax-react";

const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 16,
};

const subHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 17,
    fontWeight: 600,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 12,
};

const paragraph: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 16,
};

const inlineCode: React.CSSProperties = {
    color: "var(--color-lime)",
    background: "var(--color-bg-lime-subtle)",
    padding: "2px 6px",
    borderRadius: 4,
    fontSize: 13,
};

const optionRow: React.CSSProperties = {
    display: "flex",
    gap: 16,
    padding: "12px 0",
    borderBottom: "1px solid var(--color-border-standard)",
    alignItems: "flex-start",
};

const optionName: React.CSSProperties = {
    fontFamily: "var(--font-mono, monospace)",
    fontSize: 13,
    color: "var(--color-lime)",
    background: "var(--color-bg-lime-subtle)",
    padding: "2px 8px",
    borderRadius: 4,
    whiteSpace: "nowrap" as const,
    minWidth: 180,
    flexShrink: 0,
};

const optionDesc: React.CSSProperties = {
    fontSize: 13,
    color: "var(--color-text-secondary)",
    lineHeight: 1.5,
};

const FAQ_ITEMS = [
    {
        question: "Can I use the CLI with an existing project?",
        answer: <>Yes. The <code style={inlineCode}>add</code> command is designed for existing projects. It copies only the requested component folder into your <code style={inlineCode}>components/ui/</code> directory and ensures the required utility files (<code style={inlineCode}>lib/cn.ts</code>, <code style={inlineCode}>app/globals.css</code>) are present without overwriting anything else.</>,
    },
    {
        question: "Does the CLI modify my existing code?",
        answer: <>No. Both <code style={inlineCode}>init</code> and <code style={inlineCode}>add</code> only create new files. They will never modify or overwrite your existing files. If a utility file like <code style={inlineCode}>lib/cn.ts</code> already exists, it is skipped.</>,
    },
    {
        question: "What\u2019s the difference between components and page bundles?",
        answer: <>Components are individual UI elements (like Button, Avatar, or Table). Page bundles are collections of components required for a specific page type — for example, the <code style={inlineCode}>login</code> bundle installs AuthPage, LoginSimple, LoginSplitImage, LoginSplitQuote, LoginCardSeparated, SocialButton, Button, Input, and Checkbox all at once.</>,
    },
    {
        question: "Do page bundles include their dependencies?",
        answer: <>Yes. When you install a page bundle, the CLI automatically includes all required component dependencies. The bundle will be fully functional immediately after installation.</>,
    },
    {
        question: "Can I customize components after adding them?",
        answer: <>Absolutely. Once a component is added to your project, you own the code completely. Every component uses CSS Modules with design tokens, so you can modify styles, props, and behavior however you need. There are no locked dependencies — it&apos;s all local source code.</>,
    },
    {
        question: "Does the CLI detect my project structure automatically?",
        answer: <>Yes. The CLI automatically detects if your project uses a <code style={inlineCode}>src/</code> directory structure (common in Create React App and some Next.js setups) and places files in the correct location — e.g., <code style={inlineCode}>src/components/ui/</code> instead of <code style={inlineCode}>components/ui/</code>.</>,
    },
    {
        question: "What frameworks are supported?",
        answer: <>Omnira UI is built for Next.js 13+ with the App Router. The components use React 18 features, CSS Modules, and design tokens. The CLI is optimized for Next.js projects but the component source code works in any React environment that supports CSS Modules.</>,
    },
    {
        question: "What peer dependencies are required?",
        answer: <>Omnira UI requires <code style={inlineCode}>iconsax-react</code> for icons and <code style={inlineCode}>clsx</code> for conditional class merging. Some components also use <code style={inlineCode}>framer-motion</code> for animations. Install them with: <code style={inlineCode}>npm install iconsax-react clsx framer-motion</code>.</>,
    },
    {
        question: "How do I update components to the latest version?",
        answer: <>Re-run the <code style={inlineCode}>add</code> command for the component you want to update. Since components are copied as local source code, you can also manually compare and merge changes from the latest documentation at <code style={inlineCode}>omnira.one</code>.</>,
    },
];

function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div style={{
            borderRadius: "var(--radius-md)",
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border-standard)",
            overflow: "hidden",
        }}>
            {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                const isLast = i === FAQ_ITEMS.length - 1;
                return (
                    <div key={i} style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border-subtle)" }}>
                        <button
                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                padding: "16px 20px",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                textAlign: "left",
                                gap: 12,
                            }}
                        >
                            <span style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 14,
                                fontWeight: 600,
                                color: isOpen ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                                transition: "color 0.2s",
                            }}>
                                {item.question}
                            </span>
                            <span style={{
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 24,
                                height: 24,
                                borderRadius: "var(--radius-sm)",
                                transition: "transform 0.25s ease",
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}>
                                <ArrowDown2 size={16} color="var(--color-text-tertiary)" />
                            </span>
                        </button>
                        <div style={{
                            overflow: "hidden",
                            maxHeight: isOpen ? 300 : 0,
                            opacity: isOpen ? 1 : 0,
                            transition: "max-height 0.3s ease, opacity 0.25s ease",
                        }}>
                            <p style={{
                                padding: "0 20px 16px 20px",
                                fontSize: 13,
                                color: "var(--color-text-tertiary)",
                                lineHeight: 1.7,
                                margin: 0,
                            }}>
                                {item.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function CLIPage() {
    return (
        <div>
            <DocHeader
                title="CLI Tool"
                description="The Omnira UI CLI helps you quickly scaffold projects and add components to your existing projects. This guide covers every command and option available."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "CLI" },
                ]}
            />

            {/* ── Installation ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Installation</h2>
                <p style={paragraph}>
                    The Omnira UI CLI is available directly as a command-line utility via <code style={inlineCode}>npx</code> and doesn&apos;t require any global installation. You can run it using any package manager:
                </p>
                <CodeBlock
                    code={`# Using npx (recommended)
npx omnira-ui@latest [command]

# Using pnpm
pnpm dlx omnira-ui@latest [command]

# Using yarn
yarn dlx omnira-ui@latest [command]`}
                    language="bash"
                />
            </section>

            {/* ── Init Command ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Init Command</h2>
                <p style={paragraph}>
                    The <code style={inlineCode}>init</code> command scaffolds the full Omnira UI design system into your existing Next.js project. It copies all components, design tokens, utility files, and generates a theme configuration.
                </p>
                <CodeBlock
                    code={`npx omnira-ui@latest init`}
                    language="bash"
                />
                <p style={{ ...paragraph, marginTop: 16 }}>
                    While running the command, you&apos;ll be guided through an interactive setup:
                </p>
                <CodeBlock
                    code={`? Project name: › my-app
? Pick a color: (number or name, default: lime)

  Available accent colors:
   1. ● Lime (default)    #D2FE17
   2. ● Blue              #3B82F6
   3. ● Violet            #8B5CF6
   4. ● Rose              #F43F5E
   5. ● Orange            #F97316
   6. ● Teal              #14B8A6

? Default theme mode: (1 or 2, default: 1)
   1. Dark-first (default — follows system preference)
   2. Light-first`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 32 }}>What gets scaffolded</h3>
                <p style={paragraph}>
                    After running <code style={inlineCode}>init</code>, the CLI creates the following in your project:
                </p>
                <CodeBlock
                    code={`your-project/
├── components/ui/          # All Omnira UI components (76+ components)
├── lib/cn.ts               # Utility for merging class names
├── lib/copy-to-clipboard.ts # Clipboard utility
├── lib/theme-context.tsx    # ThemeProvider for dark/light mode
├── app/globals.css          # Full design token system
├── app/providers.tsx        # ThemeProvider wrapper component
├── omnira.config.ts         # Project configuration (accent, theme)
└── omnira-overrides.css     # Accent color overrides (if non-default)`}
                    language="bash"
                />

                <p style={{ ...paragraph, marginTop: 16 }}>
                    The CLI automatically detects <code style={inlineCode}>src/</code> directory structures and places files accordingly.
                </p>

                <h3 style={{ ...subHeading, marginTop: 32 }}>Next steps after init</h3>
                <CodeBlock
                    code={`# 1. Install peer dependencies
npm install iconsax-react clsx

# 2. Wrap your root layout with the ThemeProvider
# app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
    return (
        <html data-theme="dark">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

# 3. Start using components
import { Button } from "@/components/ui/Button";`}
                    language="tsx"
                />
            </section>

            {/* ── Add Command ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Add Command</h2>
                <p style={paragraph}>
                    The <code style={inlineCode}>add</code> command lets you install specific components into your project without running the full scaffolding. It copies only the requested component folder into <code style={inlineCode}>components/ui/</code> and ensures required utility files are present.
                </p>

                <h3 style={{ ...subHeading, marginTop: 24 }}>Add a single component</h3>
                <CodeBlock
                    code={`npx omnira-ui@latest add Button`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 24 }}>Add multiple components</h3>
                <CodeBlock
                    code={`npx omnira-ui@latest add Button Badge Input`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 24 }}>Add a page bundle</h3>
                <p style={paragraph}>
                    Page bundles install all components required for a specific page type. For example, installing the <code style={inlineCode}>card-headers</code> bundle adds CardHeader, Button, Badge, Avatar, and Dropdown.
                </p>
                <CodeBlock
                    code={`# Install all components for card headers
npx omnira-ui@latest add card-headers

# Install all login page components
npx omnira-ui@latest add login

# Install table with all its dependencies
npx omnira-ui@latest add table`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 24 }}>List all available components</h3>
                <p style={paragraph}>
                    Run <code style={inlineCode}>add</code> without any arguments to see every available component and page bundle:
                </p>
                <CodeBlock
                    code={`npx omnira-ui@latest add`}
                    language="bash"
                />
                <p style={{ ...paragraph, marginTop: 16 }}>
                    This displays a categorized list of individual components and page bundles with the number of dependencies each bundle includes.
                </p>

                <h3 style={{ ...subHeading, marginTop: 24 }}>Example terminal output</h3>
                <CodeBlock
                    code={`  ✦ Omnira UI — Add Components

  ✓ Copied Button (3 files) → components/ui/Button/
  ✓ Copied Badge (2 files) → components/ui/Badge/

  Checking dependencies...
  ✓ Copied lib/cn.ts (dependency)
  ✓ Copied app/globals.css (design tokens)

  ─────────────────────────────────────

  ✓ Added 2 components (5 files)

  Usage:
    import { Button } from "@/components/ui/Button";
    import { Badge } from "@/components/ui/Badge";`}
                    language="bash"
                />
            </section>

            {/* ── Command Options ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Command Reference</h2>
                <p style={paragraph}>
                    Below is a complete reference of all CLI commands and their behavior.
                </p>

                <div style={{
                    borderRadius: "var(--radius-lg)",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-standard)",
                    padding: "4px 24px",
                    marginBottom: 24,
                }}>
                    <div style={optionRow}>
                        <span style={optionName}>npx omnira-ui init</span>
                        <span style={optionDesc}>Scaffold the full Omnira UI design system into your project. Copies all 76+ components, design tokens, utilities, and generates config files. Interactive prompts for project name, accent color, and theme mode.</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>npx omnira-ui add &lt;name&gt;</span>
                        <span style={optionDesc}>Add one or more components by name. Accepts component names (e.g. <code style={inlineCode}>Button</code>), hyphenated slugs (e.g. <code style={inlineCode}>social-button</code>), or page bundle names (e.g. <code style={inlineCode}>card-headers</code>). Case-insensitive.</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>npx omnira-ui add</span>
                        <span style={optionDesc}>List all available individual components and page bundles with their dependency counts.</span>
                    </div>
                    <div style={{ ...optionRow, borderBottom: "none" }}>
                        <span style={optionName}>npx omnira-ui help</span>
                        <span style={optionDesc}>Display the help message with all available commands and usage examples.</span>
                    </div>
                </div>
            </section>

            {/* ── Page Bundles Reference ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Page Bundles</h2>
                <p style={paragraph}>
                    Page bundles are shortcuts that install all components needed for a specific page type. Use them when you want to quickly set up a full feature without manually adding each dependency.
                </p>

                <div style={{
                    borderRadius: "var(--radius-lg)",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-standard)",
                    padding: "4px 24px",
                    marginBottom: 24,
                }}>
                    <div style={optionRow}>
                        <span style={optionName}>card-headers</span>
                        <span style={optionDesc}>CardHeader, Button, Badge, Avatar, Dropdown</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>page-headers</span>
                        <span style={optionDesc}>PageHeader, Button, Badge</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>sidebar-navigation</span>
                        <span style={optionDesc}>SidebarNavigation, Button, Avatar, Badge, Dropdown, Toggle, Tooltip</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>modal</span>
                        <span style={optionDesc}>Modal, Button, Badge, Input, Toggle, Checkbox</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>table</span>
                        <span style={optionDesc}>Table, Avatar, Badge, Button, ButtonUtility, Dropdown, ProgressBar</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>login</span>
                        <span style={optionDesc}>AuthPage, LoginSimple, LoginSplitImage, LoginSplitQuote, LoginCardSeparated, SocialButton, Button, Input, Checkbox</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>sign-up</span>
                        <span style={optionDesc}>SignUpSimple, SignUpSplitImage, SignUpSplitQuote, SignUpCardSeparated, SocialButton, Button, Input, Checkbox</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>slide-out</span>
                        <span style={optionDesc}>SlideOut, Button, Input, Badge</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>carousel</span>
                        <span style={optionDesc}>Button, ButtonUtility</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>calendar</span>
                        <span style={optionDesc}>Calendar, Button</span>
                    </div>
                    <div style={optionRow}>
                        <span style={optionName}>date-picker</span>
                        <span style={optionDesc}>Button, Input</span>
                    </div>
                    <div style={{ ...optionRow, borderBottom: "none" }}>
                        <span style={optionName}>empty-state</span>
                        <span style={optionDesc}>EmptyState, Button</span>
                    </div>
                </div>
                <p style={paragraph}>
                    Run <code style={inlineCode}>npx omnira-ui add</code> to see the full list of page bundles directly in your terminal.
                </p>
            </section>

            {/* ── Usage Examples ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Usage Examples</h2>
                <p style={paragraph}>
                    Here are common workflows when using the Omnira UI CLI:
                </p>

                <h3 style={{ ...subHeading, marginTop: 24 }}>Scaffold a new project</h3>
                <CodeBlock
                    code={`# Initialize Omnira UI in your Next.js project
npx omnira-ui@latest init

# Install peer dependencies
npm install iconsax-react clsx

# Start the dev server
npm run dev`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 24 }}>Add components to an existing project</h3>
                <CodeBlock
                    code={`# Add a single component
npx omnira-ui@latest add Button

# Add multiple at once
npx omnira-ui@latest add Input Select Textarea Toggle

# Add a full page bundle
npx omnira-ui@latest add login

# Use in your code
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";`}
                    language="bash"
                />

                <h3 style={{ ...subHeading, marginTop: 24 }}>Using hyphenated slugs</h3>
                <p style={paragraph}>
                    Component names can be passed as PascalCase folder names or as lowercase hyphenated slugs. Both work:
                </p>
                <CodeBlock
                    code={`# These are equivalent:
npx omnira-ui@latest add SocialButton
npx omnira-ui@latest add social-button

# These are equivalent:
npx omnira-ui@latest add RadioGroup
npx omnira-ui@latest add radio-group`}
                    language="bash"
                />
            </section>

            {/* ── FAQs ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={sectionHeading}>Frequently Asked Questions</h2>
                <p style={paragraph}>
                    Common questions about the Omnira UI CLI and component installation.
                </p>

                <FaqAccordion />
            </section>
        </div>
    );
}
