#!/usr/bin/env node

/**
 * Omnira UI — CLI
 *
 * Commands:
 *   npx omnira-ui init              Full project scaffolding
 *   npx omnira-ui add <Component>   Copy a single component into your project
 *   npx omnira-ui add               List all available components
 *
 * The `add` command copies only the requested component folder into
 * components/ui/ and ensures required lib utilities (cn.ts, etc.)
 * and globals.css are present. No full scaffolding needed.
 */

import * as readline from "node:readline";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { COLOR_PRESETS, DEFAULT_COLOR, DEFAULT_THEME } from "./presets.mjs";

// ── Resolve package root (where this CLI lives inside node_modules) ──

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PKG_ROOT = path.resolve(__dirname, "..");

// ── Detect src/ directory structure ─────────────────────────────────

function detectSrcDir(cwd) {
    const srcDir = path.join(cwd, "src");
    if (fs.existsSync(srcDir)) {
        // If src/ contains app/, components/, or lib/, it's a src-based project
        if (
            fs.existsSync(path.join(srcDir, "app")) ||
            fs.existsSync(path.join(srcDir, "components")) ||
            fs.existsSync(path.join(srcDir, "lib"))
        ) {
            return "src";
        }
    }
    return "";
}

function getProjectBase(cwd) {
    const srcPrefix = detectSrcDir(cwd);
    return srcPrefix ? path.join(cwd, srcPrefix) : cwd;
}

// ── ANSI helpers ─────────────────────────────────────────────────────

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const YELLOW = "\x1b[33m";
const MAGENTA = "\x1b[35m";
const WHITE = "\x1b[97m";
const RED = "\x1b[31m";

function colorize(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `\x1b[38;2;${r};${g};${b}m`;
}

function log(msg = "") {
    process.stdout.write(msg + "\n");
}

function blank() {
    log();
}

// ── Readline prompt ──────────────────────────────────────────────────

function createPrompt() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function ask(question) {
        return new Promise((resolve) => {
            rl.question(question, (answer) => resolve(answer.trim()));
        });
    }

    function close() {
        rl.close();
    }

    return { ask, close };
}

// ── Color picker ─────────────────────────────────────────────────────

async function pickColor(promptFn) {
    const keys = Object.keys(COLOR_PRESETS);

    blank();
    log(`${BOLD}${WHITE}  Available accent colors:${RESET}`);
    blank();

    keys.forEach((key, i) => {
        const preset = COLOR_PRESETS[key];
        const swatch = colorize(preset.hex);
        const isDefault = key === DEFAULT_COLOR;
        const suffix = isDefault ? ` ${DIM}(default)${RESET}` : "";
        const num = String(i + 1).padStart(2, " ");
        log(`    ${DIM}${num}.${RESET} ${swatch}●${RESET}  ${preset.label}${suffix}  ${DIM}${preset.hex}${RESET}`);
    });

    blank();
    const answer = await promptFn(`  ${CYAN}?${RESET} ${BOLD}Pick a color${RESET} ${DIM}(number or name, default: lime):${RESET} `);

    if (!answer) return DEFAULT_COLOR;

    const num = parseInt(answer, 10);
    if (!isNaN(num) && num >= 1 && num <= keys.length) return keys[num - 1];

    const lower = answer.toLowerCase();
    if (COLOR_PRESETS[lower]) return lower;

    const match = keys.find((k) => k.startsWith(lower) || COLOR_PRESETS[k].label.toLowerCase().startsWith(lower));
    if (match) return match;

    log(`  ${YELLOW}!${RESET} Unknown color "${answer}", using lime.`);
    return DEFAULT_COLOR;
}

// ── Theme mode picker ────────────────────────────────────────────────

async function pickTheme(promptFn) {
    blank();
    log(`${BOLD}${WHITE}  Default theme mode:${RESET}`);
    blank();
    log(`    ${DIM} 1.${RESET} Dark-first  ${DIM}(default — follows system preference)${RESET}`);
    log(`    ${DIM} 2.${RESET} Light-first`);
    blank();

    const answer = await promptFn(`  ${CYAN}?${RESET} ${BOLD}Default theme mode${RESET} ${DIM}(1 or 2, default: 1):${RESET} `);

    if (!answer || answer === "1" || answer.toLowerCase().startsWith("dark")) return "dark-first";
    if (answer === "2" || answer.toLowerCase().startsWith("light")) return "light-first";

    log(`  ${YELLOW}!${RESET} Unknown option "${answer}", using dark-first.`);
    return DEFAULT_THEME;
}

// ── File copy utilities ──────────────────────────────────────────────

function copyDirRecursive(src, dest) {
    let count = 0;
    if (!fs.existsSync(src)) return count;
    fs.mkdirSync(dest, { recursive: true });

    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            count += copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            count++;
        }
    }
    return count;
}

function copyFile(src, dest) {
    if (!fs.existsSync(src)) return false;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    return true;
}

// ── File generators ──────────────────────────────────────────────────

function generateConfig(projectName, colorKey, themeMode) {
    return `/**
 * Omnira UI Configuration
 * Generated by: npx omnira-ui init
 *
 * Accent: ${colorKey}
 * Theme:  ${themeMode}
 */

const omniraConfig = {
    project: "${projectName}",
    accent: "${colorKey}",
    theme: "${themeMode}",
};

export default omniraConfig;
`;
}

function generateCSS(colorKey, themeMode) {
    const preset = COLOR_PRESETS[colorKey];
    if (!preset) return "";

    if (colorKey === "lime") {
        return `/**
 * Omnira UI — Theme Overrides
 * Accent: ${preset.label} (${preset.hex}) — default, no overrides needed.
 * Import this file after globals.css in your root layout.
 */
`;
    }

    let css = `/**
 * Omnira UI — Theme Overrides
 * Accent: ${preset.label} (${preset.hex})
 * Theme:  ${themeMode}
 *
 * Import this file after globals.css in your root layout:
 *   import "./omnira-overrides.css";
 */

`;

    css += `[data-theme="dark"] {\n`;
    for (const [prop, value] of Object.entries(preset.dark)) {
        css += `    ${prop}: ${value};\n`;
    }
    css += `}\n\n`;

    css += `[data-theme="light"] {\n`;
    for (const [prop, value] of Object.entries(preset.light)) {
        css += `    ${prop}: ${value};\n`;
    }
    css += `}\n`;

    return css;
}

function generateProviders(themeMode) {
    const defaultTheme = themeMode === "light-first" ? "light" : "dark";
    return `"use client";

import { ThemeProvider } from "@/lib/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider defaultTheme="${defaultTheme}">{children}</ThemeProvider>;
}
`;
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
    const { ask, close } = createPrompt();

    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — Project Scaffolding${RESET}`);
    log(`  ${DIM}The premium glassmorphism design system${RESET}`);
    blank();

    // 1. Project name
    const projectName = (await ask(`  ${CYAN}?${RESET} ${BOLD}Project name${RESET} ${DIM}(default: my-app):${RESET} `)) || "my-app";

    // 2. Accent color
    const colorKey = await pickColor(ask);
    const preset = COLOR_PRESETS[colorKey];

    // 3. Theme mode
    const themeMode = await pickTheme(ask);

    close();

    // ── Summary ──
    blank();
    log(`  ${DIM}─────────────────────────────────────${RESET}`);
    blank();
    log(`  ${BOLD}${WHITE}Configuration:${RESET}`);
    blank();
    log(`    ${DIM}Project:${RESET}  ${WHITE}${projectName}${RESET}`);
    log(`    ${DIM}Accent:${RESET}   ${colorize(preset.hex)}●${RESET}  ${preset.label} ${DIM}(${preset.hex})${RESET}`);
    log(`    ${DIM}Theme:${RESET}    ${WHITE}${themeMode === "dark-first" ? "Dark-first" : "Light-first"}${RESET}`);
    blank();

    log(`  ${DIM}Scaffolding...${RESET}`);
    blank();

    const cwd = process.cwd();

    // ── Detect project structure ──
    const base = getProjectBase(cwd);
    const srcPrefix = detectSrcDir(cwd);
    if (srcPrefix) {
        log(`  ${DIM}Detected ${BOLD}${srcPrefix}/${RESET}${DIM} directory structure${RESET}`);
        blank();
    }

    // ── 1. Copy all base components ──
    const componentsSrc = path.join(PKG_ROOT, "components", "ui");
    const componentsDest = path.join(base, "components", "ui");

    if (fs.existsSync(componentsSrc)) {
        const count = copyDirRecursive(componentsSrc, componentsDest);
        log(`  ${GREEN}✓${RESET} Copied ${BOLD}${count} files${RESET} → ${DIM}${srcPrefix ? srcPrefix + "/" : ""}components/ui/${RESET}`);
    } else {
        log(`  ${RED}✗${RESET} Components source not found at ${componentsSrc}`);
        log(`    ${DIM}This may happen when running locally. Components are bundled in the npm package.${RESET}`);
    }

    // ── 2. Copy lib utilities ──
    const libFiles = ["cn.ts", "copy-to-clipboard.ts", "theme-context.tsx"];
    const libDest = path.join(base, "lib");
    fs.mkdirSync(libDest, { recursive: true });

    for (const file of libFiles) {
        const src = path.join(PKG_ROOT, "lib", file);
        const dest = path.join(libDest, file);
        if (copyFile(src, dest)) {
            log(`  ${GREEN}✓${RESET} Copied ${BOLD}lib/${file}${RESET}`);
        }
    }

    // ── 3. Copy globals.css (design system tokens) ──
    const globalsSrc = path.join(PKG_ROOT, "app", "globals.css");
    const appDir = path.join(base, "app");
    fs.mkdirSync(appDir, { recursive: true });

    if (copyFile(globalsSrc, path.join(appDir, "globals.css"))) {
        log(`  ${GREEN}✓${RESET} Copied ${BOLD}app/globals.css${RESET} ${DIM}(design system tokens)${RESET}`);
    }

    // ── 4. Generate omnira.config.ts ──
    const configPath = path.join(cwd, "omnira.config.ts");
    fs.writeFileSync(configPath, generateConfig(projectName, colorKey, themeMode), "utf-8");
    log(`  ${GREEN}✓${RESET} Created ${BOLD}omnira.config.ts${RESET}`);

    // ── 5. Generate accent overrides CSS ──
    const cssPath = path.join(cwd, "omnira-overrides.css");
    fs.writeFileSync(cssPath, generateCSS(colorKey, themeMode), "utf-8");
    log(`  ${GREEN}✓${RESET} Created ${BOLD}omnira-overrides.css${RESET}`);

    // ── 6. Generate providers.tsx ──
    const providersPath = path.join(base, "app", "providers.tsx");
    if (!fs.existsSync(providersPath)) {
        fs.writeFileSync(providersPath, generateProviders(themeMode), "utf-8");
        log(`  ${GREEN}✓${RESET} Created ${BOLD}app/providers.tsx${RESET} ${DIM}(ThemeProvider wrapper)${RESET}`);
    } else {
        log(`  ${YELLOW}~${RESET} Skipped ${BOLD}app/providers.tsx${RESET} ${DIM}(already exists)${RESET}`);
    }

    // ── Done ──
    blank();
    log(`  ${DIM}─────────────────────────────────────${RESET}`);
    blank();
    log(`  ${GREEN}✓${RESET} ${BOLD}${WHITE}Omnira UI scaffolded successfully!${RESET}`);
    blank();

    log(`  ${BOLD}${WHITE}Next steps:${RESET}`);
    blank();
    log(`    ${DIM}1.${RESET} Install peer dependencies:`);
    blank();
    log(`       ${CYAN}npm install iconsax-react clsx${RESET}`);
    blank();
    log(`    ${DIM}2.${RESET} Wrap your root layout with the ThemeProvider:`);
    blank();
    log(`       ${DIM}// app/layout.tsx${RESET}`);
    log(`       ${MAGENTA}import${RESET} ${WHITE}"./globals.css"${RESET};`);
    if (colorKey !== "lime") {
        log(`       ${MAGENTA}import${RESET} ${WHITE}"../omnira-overrides.css"${RESET};`);
    }
    log(`       ${MAGENTA}import${RESET} { Providers } ${MAGENTA}from${RESET} ${WHITE}"./providers"${RESET};`);
    blank();
    log(`       ${DIM}export default function RootLayout({ children }) {${RESET}`);
    log(`       ${DIM}  return (${RESET}`);
    log(`       ${DIM}    <html data-theme="${themeMode === "light-first" ? "light" : "dark"}">${RESET}`);
    log(`       ${DIM}      <body><Providers>{children}</Providers></body>${RESET}`);
    log(`       ${DIM}    </html>${RESET}`);
    log(`       ${DIM}  );${RESET}`);
    log(`       ${DIM}}${RESET}`);
    blank();
    log(`    ${DIM}3.${RESET} Use components:`);
    blank();
    log(`       ${MAGENTA}import${RESET} { Button } ${MAGENTA}from${RESET} ${WHITE}"@/components/ui/Button"${RESET};`);
    blank();
    log(`    ${DIM}4.${RESET} Browse all components & copy advanced ones:`);
    log(`       ${CYAN}https://ui.omnira.space${RESET}`);
    blank();
}

// ── Page bundles — map page slugs to all required components ────────

const PAGE_BUNDLES = {
    // Card Headers
    "card-header":        ["CardHeader", "Button", "Badge", "Avatar", "Dropdown"],
    "card-headers":       ["CardHeader", "Button", "Badge", "Avatar", "Dropdown"],
    // Page Headers
    "page-header":        ["PageHeader", "Button", "Badge"],
    "page-headers":       ["PageHeader", "Button", "Badge"],
    // Section Headers
    "section-header":     ["Button", "Badge"],
    "section-headers":    ["Button", "Badge"],
    // Section Footers
    "section-footer":     ["Button"],
    "section-footers":    ["Button"],
    // Navigation
    "sidebar-navigation": ["SidebarNavigation", "Button", "Avatar", "Badge", "Dropdown", "Toggle", "Tooltip"],
    "header-navigation":  ["Button", "Avatar", "Badge", "Dropdown"],
    // Modals
    "modal":              ["Modal", "Button", "Badge", "Input", "Toggle", "Checkbox"],
    "modals":             ["Modal", "Button", "Badge", "Input", "Toggle", "Checkbox"],
    // Command Menus
    "command-menu":       ["Button", "Input", "Badge"],
    "command-menus":      ["Button", "Input", "Badge"],
    // Charts
    "line-bar-chart":     ["Card"],
    "line-bar-charts":    ["Card"],
    "activity-gauge":     ["ActivityGauge"],
    "activity-gauges":    ["ActivityGauge"],
    "pie-chart":          ["Card"],
    "pie-charts":         ["Card"],
    "radar-chart":        ["Card"],
    "radar-charts":       ["Card"],
    // Metrics
    "metrics":            ["Metric", "Button"],
    // Slide Out
    "slide-out":          ["SlideOut", "Button", "Input", "Badge"],
    // Inline CTA
    "inline-cta":         ["Button", "Badge", "Input"],
    // Pagination
    "pagination":         ["Button", "ButtonUtility"],
    // Carousel
    "carousel":           ["Button", "ButtonUtility"],
    // Progress Steps
    "progress-steps":     ["ProgressBar", "Badge"],
    // Activity Feed
    "activity-feed":      ["Avatar", "Badge", "Button"],
    // Messaging
    "messaging":          ["Avatar", "Button", "Input"],
    // Tabs
    "tabs":               ["Button", "Badge"],
    // Table
    "table":              ["Table", "Avatar", "Badge", "Button", "ButtonUtility", "Dropdown", "ProgressBar"],
    // Breadcrumbs
    "breadcrumbs":        ["Button"],
    // Alerts
    "alert":              ["Button", "Badge"],
    "alerts":             ["Button", "Badge"],
    // Notifications
    "notification":       ["Button", "Avatar", "Badge"],
    "notifications":      ["Button", "Avatar", "Badge"],
    // Date Picker
    "date-picker":        ["Button", "Input"],
    // Calendar
    "calendar":           ["Calendar", "Button"],
    // File Upload
    "file-upload":        ["Button", "ProgressBar"],
    // Content Divider
    "content-divider":    ["Button"],
    // Loading Indicator
    "loading-indicator":  ["ProgressBar"],
    // Empty States
    "empty-state":        ["EmptyState", "Button"],
    "empty-states":       ["EmptyState", "Button"],
    // Code Snippet
    "code-snippet":       ["Button"],
    // Card
    "card":               ["Card", "Button", "Badge"],
    // Matrix
    "matrix":             ["Card"],
};

// ── Add command — copy a single component ───────────────────────────

function getAvailableComponents() {
    const componentsDir = path.join(PKG_ROOT, "components", "ui");
    if (!fs.existsSync(componentsDir)) return [];
    return fs.readdirSync(componentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort();
}

function listComponents() {
    const components = getAvailableComponents();
    const bundles = Object.keys(PAGE_BUNDLES).sort();

    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — Available Components${RESET}`);
    log(`  ${DIM}Copy individual components or full page bundles into your project${RESET}`);
    blank();

    if (components.length === 0) {
        log(`  ${RED}✗${RESET} No components found. This may happen when running locally.`);
        blank();
        return;
    }

    log(`  ${BOLD}${WHITE}Individual Components:${RESET}`);
    blank();

    const cols = 3;
    const rows = Math.ceil(components.length / cols);
    const colWidth = 22;

    for (let r = 0; r < rows; r++) {
        let line = "    ";
        for (let c = 0; c < cols; c++) {
            const idx = r + c * rows;
            if (idx < components.length) {
                line += components[idx].padEnd(colWidth);
            }
        }
        log(line);
    }

    blank();
    log(`  ${BOLD}${WHITE}Page Bundles:${RESET} ${DIM}(installs all components needed for a page)${RESET}`);
    blank();

    const bCols = 3;
    const bRows = Math.ceil(bundles.length / bCols);

    for (let r = 0; r < bRows; r++) {
        let line = "    ";
        for (let c = 0; c < bCols; c++) {
            const idx = r + c * bRows;
            if (idx < bundles.length) {
                const slug = bundles[idx];
                const count = PAGE_BUNDLES[slug].length;
                line += `${slug} ${DIM}(${count})${RESET}`.padEnd(colWidth + 10);
            }
        }
        log(line);
    }

    blank();
    log(`  ${BOLD}${WHITE}Usage:${RESET}`);
    blank();
    log(`    ${CYAN}npx omnira-ui add Table${RESET}            ${DIM}Single component${RESET}`);
    log(`    ${CYAN}npx omnira-ui add card-headers${RESET}     ${DIM}All components for Card Headers page${RESET}`);
    log(`    ${CYAN}npx omnira-ui add Button Badge${RESET}     ${DIM}Multiple components${RESET}`);
    blank();
}

function ensureLibDeps(cwd) {
    const base = getProjectBase(cwd);
    const libFiles = ["cn.ts", "copy-to-clipboard.ts", "theme-context.tsx"];
    const libDest = path.join(base, "lib");
    let copied = 0;

    for (const file of libFiles) {
        const dest = path.join(libDest, file);
        if (!fs.existsSync(dest)) {
            const src = path.join(PKG_ROOT, "lib", file);
            if (copyFile(src, dest)) {
                log(`  ${GREEN}✓${RESET} Copied ${BOLD}lib/${file}${RESET} ${DIM}(dependency)${RESET}`);
                copied++;
            }
        }
    }

    // Ensure globals.css exists
    const globalsDest = path.join(base, "app", "globals.css");
    if (!fs.existsSync(globalsDest)) {
        const globalsSrc = path.join(PKG_ROOT, "app", "globals.css");
        if (copyFile(globalsSrc, globalsDest)) {
            log(`  ${GREEN}✓${RESET} Copied ${BOLD}app/globals.css${RESET} ${DIM}(design tokens)${RESET}`);
            copied++;
        }
    }

    return copied;
}

function resolveNames(inputNames) {
    // Expand page bundle aliases into individual component names
    const resolved = new Set();
    const unknown = [];

    const available = getAvailableComponents();
    const availableLower = available.map((c) => c.toLowerCase());

    for (const name of inputNames) {
        const lower = name.toLowerCase();

        // Check page bundles first
        if (PAGE_BUNDLES[lower]) {
            for (const comp of PAGE_BUNDLES[lower]) {
                resolved.add(comp);
            }
            continue;
        }

        // Check individual component (case-insensitive)
        const idx = availableLower.indexOf(lower);
        if (idx !== -1) {
            resolved.add(available[idx]);
            continue;
        }

        unknown.push(name);
    }

    return { resolved: [...resolved], unknown };
}

function addComponents(componentNames) {
    const cwd = process.cwd();
    const base = getProjectBase(cwd);
    const srcPrefix = detectSrcDir(cwd);
    const available = getAvailableComponents();

    // Resolve page bundles and individual names
    const { resolved, unknown } = resolveNames(componentNames);

    // Check if any input was a page bundle for nicer messaging
    const isBundle = componentNames.some((n) => PAGE_BUNDLES[n.toLowerCase()]);

    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — Add Components${RESET}`);
    if (isBundle) {
        log(`  ${DIM}Installing page bundle: ${componentNames.filter((n) => PAGE_BUNDLES[n.toLowerCase()]).join(", ")}${RESET}`);
    }
    if (srcPrefix) {
        log(`  ${DIM}Detected ${BOLD}${srcPrefix}/${RESET}${DIM} directory structure${RESET}`);
    }
    blank();

    let totalFiles = 0;
    const added = [];
    const destPrefix = srcPrefix ? srcPrefix + "/" : "";

    for (const actualName of resolved) {
        const src = path.join(PKG_ROOT, "components", "ui", actualName);
        const dest = path.join(base, "components", "ui", actualName);

        if (!fs.existsSync(src)) continue;

        const count = copyDirRecursive(src, dest);
        log(`  ${GREEN}✓${RESET} Copied ${BOLD}${actualName}${RESET} ${DIM}(${count} files)${RESET} → ${DIM}${destPrefix}components/ui/${actualName}/${RESET}`);
        totalFiles += count;
        added.push(actualName);
    }

    for (const name of unknown) {
        log(`  ${RED}✗${RESET} "${name}" is not a component or page bundle.`);
    }

    // Ensure lib dependencies are present
    if (added.length > 0) {
        blank();
        log(`  ${DIM}Checking dependencies...${RESET}`);
        ensureLibDeps(cwd);
    }

    blank();
    log(`  ${DIM}─────────────────────────────────────${RESET}`);
    blank();

    if (added.length > 0) {
        log(`  ${GREEN}✓${RESET} ${BOLD}${WHITE}Added ${added.length} component${added.length > 1 ? "s" : ""} (${totalFiles} files)${RESET}`);
        blank();
        log(`  ${BOLD}${WHITE}Usage:${RESET}`);
        blank();
        for (const name of added) {
            log(`    ${MAGENTA}import${RESET} { ${name} } ${MAGENTA}from${RESET} ${WHITE}"@/components/ui/${name}"${RESET};`);
        }
        blank();

        const globalsPath = path.join(base, "app", "globals.css");
        if (!fs.existsSync(globalsPath)) {
            log(`  ${YELLOW}!${RESET} Don't forget to import ${BOLD}globals.css${RESET} in your root layout.`);
            blank();
        }
    }

    if (unknown.length > 0) {
        log(`  ${YELLOW}!${RESET} Run ${CYAN}npx omnira-ui add${RESET} to see all available components.`);
        blank();
    }
}

// ── Help ─────────────────────────────────────────────────────────────

function showHelp() {
    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — CLI${RESET}`);
    log(`  ${DIM}The premium glassmorphism design system${RESET}`);
    blank();
    log(`  ${BOLD}${WHITE}Commands:${RESET}`);
    blank();
    log(`    ${CYAN}npx omnira-ui init${RESET}              Scaffold the full design system`);
    log(`    ${CYAN}npx omnira-ui add <name>${RESET}        Add a component or page bundle`);
    log(`    ${CYAN}npx omnira-ui add${RESET}               List all components & page bundles`);
    log(`    ${CYAN}npx omnira-ui help${RESET}              Show this help message`);
    blank();
    log(`  ${BOLD}${WHITE}Examples:${RESET}`);
    blank();
    log(`    ${CYAN}npx omnira-ui add Table${RESET}            ${DIM}Single component${RESET}`);
    log(`    ${CYAN}npx omnira-ui add card-headers${RESET}     ${DIM}All components for Card Headers page${RESET}`);
    log(`    ${CYAN}npx omnira-ui add Button Badge${RESET}     ${DIM}Multiple components${RESET}`);
    log(`    ${CYAN}npx omnira-ui init${RESET}                 ${DIM}Full project scaffolding${RESET}`);
    blank();
}

// ── Command router ──────────────────────────────────────────────────

const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

if (!command || command === "init") {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
} else if (command === "add") {
    const componentNames = args.slice(1);
    if (componentNames.length === 0) {
        listComponents();
    } else {
        addComponents(componentNames);
    }
} else if (command === "help" || command === "--help" || command === "-h") {
    showHelp();
} else {
    log(`\n  ${RED}✗${RESET} Unknown command: "${command}"\n`);
    showHelp();
}
