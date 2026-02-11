import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-rubik",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Omnira UI — Premium Glassmorphism Components",
    description: "Premium glassmorphism components for modern applications. Dark-first design system with glass effects, lime green accents, and a distinctive visual identity.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark" suppressHydrationWarning>
            <body className={rubik.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
