import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google"; // Temporarily disabled to fix Vercel build
import { ThemeProvider } from "next-themes";
import app from "@/data/app.json";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: app.title,
  description: app.description,
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/icons/icon-light.png" },
      { media: "(prefers-color-scheme: dark)", url: "/icons/icon-dark.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable}`} // Font variables temporarily removed
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
