"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { TextEditor } from "@/components/ui/TextEditor";

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

const sampleHTML =
    "<p>We need another and a wiser and perhaps a more mystical concept of animals. Remote from universal nature, and living by complicated artifice, man in civilization surveys the creature through the glass of his knowledge and sees thereby a feather magnified and the whole image in distortion.</p><p></p><p>We patronize them for their incompleteness, for their tragic fate of having taken form so far below ourselves. And therein we err, and greatly err. For the animal shall not be measured by man.</p><p></p><p>In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear. They are not brethren, they are not underlings; they are other nations, caught with ourselves in the net of life and time, fellow prisoners of the splendour and travail of the earth.</p>";

/* ── Default Small ── */
function DefaultSmDemo() {
    const [content, setContent] = useState(sampleHTML);
    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="sm"
            limit={1812}
        >
            <TextEditor.Toolbar type="advanced" />
            <TextEditor.Content />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

/* ── Default Medium ── */
function DefaultMdDemo() {
    const [content, setContent] = useState(sampleHTML);
    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="md"
            limit={1812}
        >
            <TextEditor.Toolbar type="advanced" />
            <TextEditor.Content />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

/* ── Floating Toolbar Small ── */
function FloatingSmDemo() {
    const [content, setContent] = useState(sampleHTML);
    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="sm"
            limit={1812}
        >
            <TextEditor.Toolbar floating type="advanced" />
            <TextEditor.Content />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

/* ── Floating Toolbar Medium ── */
function FloatingMdDemo() {
    const [content, setContent] = useState(sampleHTML);
    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="md"
            limit={1812}
        >
            <TextEditor.Toolbar floating type="advanced" />
            <TextEditor.Content />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

/* ── Toolbar Bottom ── */
function ToolbarBottomDemo() {
    const [content, setContent] = useState(sampleHTML);
    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="md"
            limit={1812}
        >
            <TextEditor.Content />
            <TextEditor.Toolbar type="advanced" />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

const editorProps = [
    { name: "content", type: "string", description: "Initial HTML content for the editor." },
    { name: "onUpdate", type: "({ editor }) => void", description: "Called on content change. editor.getHTML() returns current HTML." },
    { name: "limit", type: "number", description: "Character limit. Shown in HintText counter." },
    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Editor size variant." },
    { name: "TextEditor.Toolbar", type: "component", description: "Formatting toolbar. Props: type ('basic' | 'advanced'), floating (boolean)." },
    { name: "TextEditor.Content", type: "component", description: "Editable content area (contentEditable)." },
    { name: "TextEditor.HintText", type: "component", description: "Character count and optional hint text." },
];

export default function TextEditorPage() {
    return (
        <div>
            <DocHeader
                title="Text Editor"
                description="A rich text editor with formatting toolbar. Supports bold, italic, underline, strikethrough, lists, quotes, links, undo/redo, character limits, and multiple layout variants."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Text Editor" },
                ]}
            />

            {/* ── Default Small ── */}
            <h2 style={sectionHeading}>Default Small</h2>
            <p style={sectionDesc}>A compact editor with the toolbar docked at the top.</p>

            <ComponentPreview
                title="Default Small"
                code={`<TextEditor.Root content={content} onUpdate={({ editor }) => setContent(editor.getHTML())} size="sm" limit={1812}>
    <TextEditor.Toolbar type="advanced" />
    <TextEditor.Content />
    <TextEditor.HintText />
</TextEditor.Root>`}
            >
                <DefaultSmDemo />
            </ComponentPreview>

            {/* ── Default Medium ── */}
            <h2 style={sectionHeading}>Default Medium</h2>
            <p style={sectionDesc}>A standard-sized editor with the toolbar docked at the top.</p>

            <ComponentPreview
                title="Default Medium"
                code={`<TextEditor.Root content={content} onUpdate={({ editor }) => setContent(editor.getHTML())} size="md" limit={1812}>
    <TextEditor.Toolbar type="advanced" />
    <TextEditor.Content />
    <TextEditor.HintText />
</TextEditor.Root>`}
            >
                <DefaultMdDemo />
            </ComponentPreview>

            {/* ── Floating Toolbar Small ── */}
            <h2 style={sectionHeading}>Floating Toolbar Small</h2>
            <p style={sectionDesc}>A compact editor with a sticky floating toolbar that stays visible while scrolling.</p>

            <ComponentPreview
                title="Floating Toolbar Small"
                code={`<TextEditor.Root content={content} onUpdate={({ editor }) => setContent(editor.getHTML())} size="sm" limit={1812}>
    <TextEditor.Toolbar floating type="advanced" />
    <TextEditor.Content />
    <TextEditor.HintText />
</TextEditor.Root>`}
            >
                <FloatingSmDemo />
            </ComponentPreview>

            {/* ── Floating Toolbar Medium ── */}
            <h2 style={sectionHeading}>Floating Toolbar Medium</h2>
            <p style={sectionDesc}>A standard-sized editor with a sticky floating toolbar.</p>

            <ComponentPreview
                title="Floating Toolbar Medium"
                code={`<TextEditor.Root content={content} onUpdate={({ editor }) => setContent(editor.getHTML())} size="md" limit={1812}>
    <TextEditor.Toolbar floating type="advanced" />
    <TextEditor.Content />
    <TextEditor.HintText />
</TextEditor.Root>`}
            >
                <FloatingMdDemo />
            </ComponentPreview>

            {/* ── Toolbar Bottom ── */}
            <h2 style={sectionHeading}>Toolbar on Bottom</h2>
            <p style={sectionDesc}>The toolbar placed below the content area, above the character count.</p>

            <ComponentPreview
                title="Toolbar Bottom"
                code={`<TextEditor.Root content={content} onUpdate={({ editor }) => setContent(editor.getHTML())} size="md" limit={1812}>
    <TextEditor.Content />
    <TextEditor.Toolbar type="advanced" />
    <TextEditor.HintText />
</TextEditor.Root>`}
            >
                <ToolbarBottomDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the TextEditor compound component and compose with sub-components.</p>

            <CodeBlock
                code={`import { useState } from "react";
import { TextEditor } from "@/components/ui/TextEditor";

function MyEditor() {
    const [content, setContent] = useState("<p>Hello world</p>");

    return (
        <TextEditor.Root
            content={content}
            onUpdate={({ editor }) => setContent(editor.getHTML())}
            size="md"
            limit={500}
        >
            <TextEditor.Toolbar type="advanced" />
            <TextEditor.Content />
            <TextEditor.HintText />
        </TextEditor.Root>
    );
}

// Floating toolbar
<TextEditor.Root content={content} onUpdate={...} size="md">
    <TextEditor.Toolbar floating type="advanced" />
    <TextEditor.Content />
    <TextEditor.HintText />
</TextEditor.Root>

// Toolbar on bottom
<TextEditor.Root content={content} onUpdate={...} size="md">
    <TextEditor.Content />
    <TextEditor.Toolbar type="advanced" />
    <TextEditor.HintText />
</TextEditor.Root>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={editorProps} />
        </div>
    );
}
