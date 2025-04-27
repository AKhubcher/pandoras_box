import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import FloatingSearchIcon from "./components/FloatingSearchIcon";
import Image from "next/image";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-black text-white`}>
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  <Image
                    width={50}
                    height={30}
                    src="/Pandora.png"
                    alt="Pandora's Logo"
                    className="object-cover"
                    style={{ paddingBottom: "20px" }}
                  />
                  Pandora's Box
                </Link>
              </div>
              <div className="flex space-x-6">
                <Link href="/models" className="hover:text-purple-400 transition-colors">
                  All Models
                </Link>
                <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                  How It Works
                </Link>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
                <Link href="/learn" className="hover:text-purple-400 transition-colors">
                  Learn
                </Link>
                <Link href="/profile" className="hover:text-purple-400 transition-colors">
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>

        <FloatingSearchIcon />
        <Analytics />
      </body>
    </html >
  );
}