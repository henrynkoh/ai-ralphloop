import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solo Entrepreneur Curriculum",
  description:
    "Step-by-step curriculum of key concepts for startup solo entrepreneurs: mindset, validation, MVP, business model, launch, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-stone-50 text-stone-900`}
      >
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-stone-800 hover:text-stone-600"
            >
              Solo Entrepreneur Curriculum
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link
                href="/"
                className="text-stone-600 hover:text-stone-900"
              >
                Categories
              </Link>
              <Link
                href="/all"
                className="text-stone-600 hover:text-stone-900"
              >
                Full curriculum
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
