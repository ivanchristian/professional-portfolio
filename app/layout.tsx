import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ivan Christian | Tech Lead | Full Stack Developer | IT Consultant',
  description: 'Portfolio of Ivan Christian, a Tech Lead, Full Stack Developer, and IT Consultant based in Jakarta, Indonesia. Open to remote, part-time, contract, and international opportunities.',
  openGraph: {
    title: 'Ivan Christian | Tech Lead | Full Stack Developer | IT Consultant',
    description: 'Portfolio of Ivan Christian, a Tech Lead, Full Stack Developer, and IT Consultant based in Jakarta, Indonesia.',
    url: 'https://ivanchristian.vercel.app',
    siteName: 'Ivan Christian Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ivan Christian Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Christian | Tech Lead | Full Stack Developer | IT Consultant',
    description: 'Portfolio of Ivan Christian, a Tech Lead, Full Stack Developer, and IT Consultant based in Jakarta, Indonesia.',
    images: ['/og-image.png'],
  },
  keywords: ['Ivan Christian', 'Tech Lead', 'Full Stack Developer', 'IT Consultant', 'React Developer', 'Next.js Developer', 'Node.js Developer', 'Java Spring Boot Developer', 'Remote Software Engineer', 'Indonesia Developer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
