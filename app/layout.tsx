import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Crop Guardian',
  description: 'AI-powered agricultural decision-support platform for crop monitoring and farm management',
  keywords: ['agriculture', 'farming', 'crop health', 'disease identification', 'farm management'],
  authors: [{ name: 'Smart Crop Guardian' }],
  openGraph: {
    title: 'Smart Crop Guardian',
    description: 'AI-powered agricultural decision-support platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
