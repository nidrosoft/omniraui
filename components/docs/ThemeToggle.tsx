"use client";

import { Sun1, Moon } from "iconsax-react";
import { useTheme } from "@/lib/theme-context";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
            <span className={styles.iconWrapper}>
                {theme === "dark" ? (
                    <Sun1 size={16} variant="Bulk" color="var(--color-lime)" />
                ) : (
                    <Moon size={16} variant="Bulk" color="var(--color-lime)" />
                )}
            </span>
            <span className={styles.label}>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
    );
}
