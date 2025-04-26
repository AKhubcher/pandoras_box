import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandora's Box - The AI Library That Actually Works",
  description: "A revolutionary AI library that breaks the mold of traditional AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <nav >
          <div >
            <div >
              <div >
                <Link href="/">
                  Pandora's Box
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/how-it-works">
                  How It Works
                </Link>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
