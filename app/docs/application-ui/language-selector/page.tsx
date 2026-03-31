"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import type { LanguageOption } from "@/components/ui/LanguageSelector";

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

const demoWrap: React.CSSProperties = {
    maxWidth: 360,
    width: "100%",
};

/** Narrow column so long locale names exceed the trigger width and ellipsis kicks in */
const longLabelsDemoWrap: React.CSSProperties = {
    width: "100%",
    maxWidth: 200,
};

const sampleLanguages: LanguageOption[] = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ja", label: "日本語" },
];

const longLabelLanguages: LanguageOption[] = [
    { code: "zh-Hans", label: "简体中文（中国大陆）", abbreviation: "ZH-HANS" },
    { code: "zh-Hant", label: "繁體中文（台灣）", abbreviation: "ZH-HANT" },
    { code: "ko", label: "한국어 (대한민국)", abbreviation: "KO" },
];

const rtlLanguages: LanguageOption[] = [
    { code: "ar", label: "العربية" },
    { code: "he", label: "עברית" },
    { code: "fa", label: "فارسی" },
];

function DefaultDemo() {
    const [lang, setLang] = useState("en");
    return (
        <div style={demoWrap}>
            <LanguageSelector
                label="Language"
                options={sampleLanguages}
                value={lang}
                onValueChange={setLang}
                placeholder="Choose language"
            />
        </div>
    );
}

function CompactDemo() {
    const [lang, setLang] = useState("fr");
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <LanguageSelector
                compact
                options={sampleLanguages}
                value={lang}
                onValueChange={setLang}
                aria-label="Interface language"
            />
        </div>
    );
}

function PlacementDemo() {
    const [lang, setLang] = useState("en");
    return (
        <div style={{ ...demoWrap, marginTop: 120 }}>
            <LanguageSelector
                label="Opens upward"
                placement="top"
                options={sampleLanguages}
                value={lang}
                onValueChange={setLang}
                placeholder="Language"
            />
        </div>
    );
}

function TextOnlyDemo() {
    const [lang, setLang] = useState("en");
    return (
        <div style={demoWrap}>
            <LanguageSelector
                label="Text only"
                leading="none"
                options={sampleLanguages}
                value={lang}
                onValueChange={setLang}
            />
        </div>
    );
}

function LongLabelsDemo() {
    const [lang, setLang] = useState("zh-Hans");
    return (
        <div style={longLabelsDemoWrap}>
            <LanguageSelector
                label="Locale"
                options={longLabelLanguages}
                value={lang}
                onValueChange={setLang}
            />
        </div>
    );
}

function RtlLanguagesDemo() {
    const [lang, setLang] = useState("ar");
    return (
        <div dir="rtl" style={demoWrap}>
            <LanguageSelector
                label="اللغة"
                options={rtlLanguages}
                value={lang}
                onValueChange={setLang}
                placeholder="اختر اللغة"
            />
        </div>
    );
}

const languageSelectorProps = [
    {
        name: "options",
        type: "readonly LanguageOption[]",
        required: true,
        description:
            "Language choices with code, label, and optional abbreviation. Pass a stable array reference (e.g. a module-level const) when possible so the list is not recreated every render.",
    },
    { name: "value", type: "string", description: "Controlled selected language code." },
    { name: "defaultValue", type: "string", default: '""', description: "Default code when uncontrolled." },
    { name: "onValueChange", type: "(code: string) => void", description: "Called when the user selects a language." },
    { name: "placeholder", type: "string", default: '"Language"', description: "Shown when nothing is selected." },
    { name: "label", type: "string", description: "Optional visible label above the trigger." },
    { name: "compact", type: "boolean", default: "false", description: "Icon-only trigger; use aria-label for accessibility." },
    { name: "leading", type: '"code" | "none"', default: '"code"', description: "ISO-style subtag badge (default) or text-only rows." },
    { name: "placement", type: '"top" | "bottom"', default: '"bottom"', description: "Whether the menu opens above or below the trigger." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Trigger height and typography." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the control." },
    { name: "className", type: "string", description: "Extra class on the root wrapper." },
    { name: "aria-label", type: "string", description: "Accessible name for compact mode (or override)." },
];

const languageOptionProps = [
    { name: "code", type: "string", required: true, description: "Stable id for the locale (e.g. BCP 47 tag); used for the default code badge." },
    { name: "label", type: "string", required: true, description: "Human-readable name." },
    { name: "abbreviation", type: "string", description: "Override badge text (e.g. ZH-HANS vs ZH for two scripts)." },
    { name: "disabled", type: "boolean", description: "Disable a row." },
];

export default function LanguageSelectorPage() {
    return (
        <div>
            <DocHeader
                title="Language Selector"
                description="A compact dropdown for choosing interface or content language. Uses language subtag badges—not country flags—so locales aren’t tied to a single nation. Pairs with your own i18n layer via onValueChange."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Language Selector" },
                ]}
            />

            <InstallBlock slug="LanguageSelector" components={["LanguageSelector"]} />

            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>
                Standard trigger with a leading language subtag badge derived from <code>code</code> (e.g. EN, FR). Use <code>abbreviation</code> when two locales
                share the same ISO 639 tag (e.g. simplified vs traditional Chinese).
            </p>

            <ComponentPreview
                title="Default"
                code={`<LanguageSelector
    label="Language"
    options={[
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
    ]}
    value={lang}
    onValueChange={setLang}
    placeholder="Choose language"
/>`}
            >
                <DefaultDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Compact</h2>
            <p style={sectionDesc}>Minimal footprint for navbars and toolbars. Provide aria-label.</p>

            <ComponentPreview
                title="Compact"
                code={`<LanguageSelector
    compact
    aria-label="Interface language"
    options={languages}
    value={lang}
    onValueChange={setLang}
/>`}
            >
                <CompactDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Placement</h2>
            <p style={sectionDesc}>Open the menu above the trigger when space below is tight.</p>

            <ComponentPreview
                title="Open upward"
                code={`<LanguageSelector
    label="Opens upward"
    placement="top"
    options={languages}
    value={lang}
    onValueChange={setLang}
/>`}
            >
                <PlacementDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Text only</h2>
            <p style={sectionDesc}>Set <code>leading=&quot;none&quot;</code> when you only want the language name.</p>

            <ComponentPreview
                title="Text only"
                code={`<LanguageSelector
    label="Text only"
    leading="none"
    options={languages}
    value={lang}
    onValueChange={setLang}
/>`}
            >
                <TextOnlyDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Long labels</h2>
            <p style={sectionDesc}>
                When horizontal space is tight, labels truncate with ellipsis on the trigger and in the list. The full
                string stays in the DOM for screen readers. This demo uses a narrow container so you can see
                truncation; widen the parent and the same options can display in full.
            </p>

            <ComponentPreview
                title="Non-Latin and long names"
                code={`<div style={{ maxWidth: 200, width: "100%" }}>
    <LanguageSelector
        label="Locale"
        options={[
            { code: "zh-Hans", label: "简体中文（中国大陆）", abbreviation: "ZH-HANS" },
            { code: "zh-Hant", label: "繁體中文（台灣）", abbreviation: "ZH-HANT" },
            { code: "ko", label: "한국어 (대한민국)", abbreviation: "KO" },
        ]}
        value={lang}
        onValueChange={setLang}
    />
</div>`}
            >
                <LongLabelsDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Right-to-left (RTL) languages</h2>
            <p style={sectionDesc}>
                For Arabic, Hebrew, Persian, and other RTL locales, wrap the selector (or your app root) in{" "}
                <code>dir=&quot;rtl&quot;</code> so the trigger, menu, and text direction mirror correctly. Use the same
                pattern when your i18n layer switches document direction for the active locale.
            </p>

            <ComponentPreview
                title="Arabic, Hebrew, Persian"
                code={`<div dir="rtl">
    <LanguageSelector
        label="اللغة"
        options={[
            { code: "ar", label: "العربية" },
            { code: "he", label: "עברית" },
            { code: "fa", label: "فارسی" },
        ]}
        value={lang}
        onValueChange={setLang}
        placeholder="اختر اللغة"
    />
</div>`}
            >
                <RtlLanguagesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Wire the selected code to your i18n provider or router locale.</p>

            <CodeBlock
                code={`import { LanguageSelector } from "@/components/ui/LanguageSelector";
import type { LanguageOption } from "@/components/ui/LanguageSelector";

const languages: LanguageOption[] = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
];

export function LangField() {
    const [locale, setLocale] = useState("en");
    return (
        <LanguageSelector
            label="Language"
            options={languages}
            value={locale}
            onValueChange={setLocale}
        />
    );
}`}
                language="tsx"
            />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>LanguageOption</h2>
            <PropsTable props={languageOptionProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>LanguageSelector props</h2>
            <PropsTable props={languageSelectorProps} />
        </div>
    );
}
