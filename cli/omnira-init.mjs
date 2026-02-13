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

    // ── 1. Copy all base components ──
    const componentsSrc = path.join(PKG_ROOT, "components", "ui");
    const componentsDest = path.join(cwd, "components", "ui");

    if (fs.existsSync(componentsSrc)) {
        const count = copyDirRecursive(componentsSrc, componentsDest);
        log(`  ${GREEN}✓${RESET} Copied ${BOLD}${count} files${RESET} → ${DIM}components/ui/${RESET}`);
    } else {
        log(`  ${RED}✗${RESET} Components source not found at ${componentsSrc}`);
        log(`    ${DIM}This may happen when running locally. Components are bundled in the npm package.${RESET}`);
    }

    // ── 2. Copy lib utilities ──
    const libFiles = ["cn.ts", "copy-to-clipboard.ts", "theme-context.tsx"];
    const libDest = path.join(cwd, "lib");
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
    const appDir = path.join(cwd, "app");
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
    const providersPath = path.join(appDir, "providers.tsx");
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

    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — Available Components${RESET}`);
    log(`  ${DIM}Copy individual components into your project${RESET}`);
    blank();

    if (components.length === 0) {
        log(`  ${RED}✗${RESET} No components found. This may happen when running locally.`);
        blank();
        return;
    }

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
    log(`  ${DIM}Usage:${RESET}  ${CYAN}npx omnira-ui add <Component>${RESET}`);
    log(`  ${DIM}Example:${RESET} ${CYAN}npx omnira-ui add Table${RESET}`);
    log(`  ${DIM}Multiple:${RESET} ${CYAN}npx omnira-ui add Table Button Badge${RESET}`);
    blank();
}

function ensureLibDeps(cwd) {
    const libFiles = ["cn.ts", "copy-to-clipboard.ts", "theme-context.tsx"];
    const libDest = path.join(cwd, "lib");
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
    const globalsDest = path.join(cwd, "app", "globals.css");
    if (!fs.existsSync(globalsDest)) {
        const globalsSrc = path.join(PKG_ROOT, "app", "globals.css");
        if (copyFile(globalsSrc, globalsDest)) {
            log(`  ${GREEN}✓${RESET} Copied ${BOLD}app/globals.css${RESET} ${DIM}(design tokens)${RESET}`);
            copied++;
        }
    }

    return copied;
}

function addComponents(componentNames) {
    const cwd = process.cwd();
    const available = getAvailableComponents();
    const availableLower = available.map((c) => c.toLowerCase());

    blank();
    log(`  ${BOLD}${GREEN}✦${RESET} ${BOLD}${WHITE}Omnira UI — Add Components${RESET}`);
    blank();

    let totalFiles = 0;
    const added = [];
    const notFound = [];

    for (const name of componentNames) {
        // Case-insensitive match
        const idx = availableLower.indexOf(name.toLowerCase());
        if (idx === -1) {
            notFound.push(name);
            continue;
        }

        const actualName = available[idx];
        const src = path.join(PKG_ROOT, "components", "ui", actualName);
        const dest = path.join(cwd, "components", "ui", actualName);

        const count = copyDirRecursive(src, dest);
        log(`  ${GREEN}✓${RESET} Copied ${BOLD}${actualName}${RESET} ${DIM}(${count} files)${RESET} → ${DIM}components/ui/${actualName}/${RESET}`);
        totalFiles += count;
        added.push(actualName);
    }

    for (const name of notFound) {
        log(`  ${RED}✗${RESET} Component "${name}" not found.`);
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

        if (!fs.existsSync(path.join(cwd, "app", "globals.css"))) {
            log(`  ${YELLOW}!${RESET} Don't forget to import ${BOLD}globals.css${RESET} in your root layout.`);
            blank();
        }
    }

    if (notFound.length > 0) {
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
    log(`    ${CYAN}npx omnira-ui add <Component>${RESET}   Add a single component`);
    log(`    ${CYAN}npx omnira-ui add${RESET}               List all available components`);
    log(`    ${CYAN}npx omnira-ui help${RESET}              Show this help message`);
    blank();
    log(`  ${BOLD}${WHITE}Examples:${RESET}`);
    blank();
    log(`    ${CYAN}npx omnira-ui add Table${RESET}`);
    log(`    ${CYAN}npx omnira-ui add Button Badge Input${RESET}`);
    log(`    ${CYAN}npx omnira-ui init${RESET}`);
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
