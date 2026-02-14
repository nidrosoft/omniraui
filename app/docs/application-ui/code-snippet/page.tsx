"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { CodeSnippet } from "@/components/ui/CodeSnippet";

const tsExample = `import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${id}\`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  return { user, loading };
}`;

const jsxExample = `export function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      {...props}
    >
      {children}
    </button>
  );
}`;

const bashExample = `npm install omnira-ui
npx omnira-ui init
npm run dev`;

/* ── Demos ── */

function WithLineNumbersDemo() {
    return <CodeSnippet code={tsExample} language="typescript" fileName="useUser.ts" showLineNumbers />;
}

const withLineNumbersCode = `import { CodeSnippet } from "@/components/ui/CodeSnippet";

<CodeSnippet
  code={code}
  language="typescript"
  fileName="useUser.ts"
  showLineNumbers
/>`;

function WithoutLineNumbersDemo() {
    return <CodeSnippet code={bashExample} language="bash" showLineNumbers={false} />;
}

const withoutLineNumbersCode = `import { CodeSnippet } from "@/components/ui/CodeSnippet";

<CodeSnippet
  code={code}
  language="bash"
  showLineNumbers={false}
/>`;

function JsxExampleDemo() {
    return <CodeSnippet code={jsxExample} language="jsx" fileName="Button.jsx" />;
}

const jsxExampleCode = `import { CodeSnippet } from "@/components/ui/CodeSnippet";

<CodeSnippet
  code={code}
  language="jsx"
  fileName="Button.jsx"
/>`;

function NoHeaderDemo() {
    return <CodeSnippet code={bashExample} showHeader={false} showLineNumbers={false} />;
}

const noHeaderCode = `import { CodeSnippet } from "@/components/ui/CodeSnippet";

<CodeSnippet
  code={code}
  showHeader={false}
  showLineNumbers={false}
/>`;

/* ── Props ── */

const props = [
    { name: "code", type: "string", description: "The code string to display." },
    { name: "language", type: "string", description: "Programming language label shown in the header." },
    { name: "fileName", type: "string", description: "Optional file name shown in the header." },
    { name: "showLineNumbers", type: "boolean", default: "true", description: "Show line numbers alongside the code." },
    { name: "showCopy", type: "boolean", default: "true", description: "Show the copy-to-clipboard button." },
    { name: "showHeader", type: "boolean", default: "true", description: "Show the header bar with language, file name, and copy button." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

/* ── Page ── */

export default function CodeSnippetPage() {
    return (
        <div>
            <DocHeader
                title="Code Snippet"
                description="Syntax-highlighted code blocks with line numbers, copy-to-clipboard, and language labels. Ideal for documentation, tutorials, and developer tools."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Code Snippet" },
                ]}
            />

            <InstallBlock slug="code-snippet" components={["CodeSnippet"]} />

            <ComponentPreview
                title="With Line Numbers"
                description="Code block with line numbers, language label, file name, and copy button."
                code={withLineNumbersCode}
            >
                <WithLineNumbersDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Without Line Numbers"
                description="Clean code block without line numbers. Great for terminal commands."
                code={withoutLineNumbersCode}
            >
                <WithoutLineNumbersDemo />
            </ComponentPreview>

            <ComponentPreview
                title="JSX Example"
                description="JSX/React code with line numbers and file name."
                code={jsxExampleCode}
            >
                <JsxExampleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="No Header"
                description="Minimal code block without the header bar."
                code={noHeaderCode}
            >
                <NoHeaderDemo />
            </ComponentPreview>

            <PropsTable title="CodeSnippet" props={props} />
        </div>
    );
}
