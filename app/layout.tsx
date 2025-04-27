import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import FloatingSearchIcon from "./components/FloatingSearchIcon";

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
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <FloatingSearchIcon />
        <Analytics />
      </body>
    </html>
  );
}