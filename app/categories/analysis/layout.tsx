import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Pandora-Box',
    description: 'We are better than everyone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html >
            <body>
                {/* All page-specific content */}
                {children}
            </body>
        </html>
    );
}
