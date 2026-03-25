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

const sampleLanguages: LanguageOption[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const longLabelLanguages: LanguageOption[] = [
    { code: "zh-Hans", label: "简体中文（中国大陆）", flag: "🇨🇳" },
    { code: "zh-Hant", label: "繁體中文（台灣）", flag: "🇹🇼" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
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
        <div style={{ ...demoWrap, maxWidth: 120 }}>
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

function NoFlagsDemo() {
    const [lang, setLang] = useState("en");
    return (
        <div style={demoWrap}>
            <LanguageSelector
                label="Text only"
                showFlag={false}
                options={sampleLanguages.map(({ code, label, disabled }) => ({ code, label, disabled }))}
                value={lang}
                onValueChange={setLang}
            />
        </div>
    );
}

function LongLabelsDemo() {
    const [lang, setLang] = useState("zh-Hans");
    return (
        <div style={demoWrap}>
            <LanguageSelector
                label="Locale"
                options={longLabelLanguages}
                value={lang}
                onValueChange={setLang}
            />
        </div>
    );
}

const languageSelectorProps = [
    { name: "options", type: "LanguageOption[]", required: true, description: "Language choices with code, label, and optional flag." },
    { name: "value", type: "string", description: "Controlled selected language code." },
    { name: "defaultValue", type: "string", default: '""', description: "Default code when uncontrolled." },
    { name: "onValueChange", type: "(code: string) => void", description: "Called when the user selects a language." },
    { name: "placeholder", type: "string", default: '"Language"', description: "Shown when nothing is selected." },
    { name: "label", type: "string", description: "Optional visible label above the trigger." },
    { name: "compact", type: "boolean", default: "false", description: "Icon-only trigger; use aria-label for accessibility." },
    { name: "showFlag", type: "boolean", default: "true", description: "Show flag column when options include flags." },
    { name: "placement", type: '"top" | "bottom"', default: '"bottom"', description: "Whether the menu opens above or below the trigger." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Trigger height and typography." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the control." },
    { name: "className", type: "string", description: "Extra class on the root wrapper." },
    { name: "aria-label", type: "string", description: "Accessible name for compact mode (or override)." },
];

const languageOptionProps = [
    { name: "code", type: "string", required: true, description: "Stable id for the locale (e.g. BCP 47 tag)." },
    { name: "label", type: "string", required: true, description: "Human-readable name." },
    { name: "flag", type: "ReactNode", description: "Optional emoji or icon." },
    { name: "disabled", type: "boolean", description: "Disable a row." },
];

export default function LanguageSelectorPage() {
    return (
        <div>
            <DocHeader
                title="Language Selector"
                description="A compact dropdown for choosing interface or content language. Pairs with your own i18n layer by reacting to onValueChange."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Language Selector" },
                ]}
            />

            <InstallBlock slug="LanguageSelector" components={["LanguageSelector"]} />

            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Standard trigger with optional flag emoji and label.</p>

            <ComponentPreview
                title="Default"
                code={`<LanguageSelector
    label="Language"
    options={[
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "es", label: "Español", flag: "🇪🇸" },
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

            <h2 style={sectionHeading}>Without flags</h2>
            <p style={sectionDesc}>Set showFlag to false for text-only lists.</p>

            <ComponentPreview
                title="Text only"
                code={`<LanguageSelector
    label="Text only"
    showFlag={false}
    options={languages}
    value={lang}
    onValueChange={setLang}
/>`}
            >
                <NoFlagsDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Long labels</h2>
            <p style={sectionDesc}>Labels truncate with ellipsis; full strings remain in the DOM for screen readers.</p>

            <ComponentPreview
                title="Non-Latin and long names"
                code={`<LanguageSelector
    label="Locale"
    options={[
        { code: "zh-Hans", label: "简体中文（中国大陆）", flag: "🇨🇳" },
        { code: "ar", label: "العربية", flag: "🇸🇦" },
    ]}
    value={lang}
    onValueChange={setLang}
/>`}
            >
                <LongLabelsDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Wire the selected code to your i18n provider or router locale.</p>

            <CodeBlock
                code={`import { LanguageSelector } from "@/components/ui/LanguageSelector";
import type { LanguageOption } from "@/components/ui/LanguageSelector";

const languages: LanguageOption[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
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
