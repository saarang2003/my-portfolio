import type { Metadata } from "next";
import { Geist, Geist_Mono , Space_Mono } from "next/font/google";
import "./globals.css";
import {Analytics} from '@vercel/analytics/react';


const mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: 'Sarang -> Full Stack Developer',
  description: 'Building scalable web applications using React, TypeScript, Node.js, and MongoDB.',
  authors: [{ name: 'Sarang', url: '' }],
  keywords : [
    'Sarang',
    'Full Stack Developer Nagpur',
    'Web Developer Nagpur',
    'React Developer Nagpur',
    'React',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Software Engineer',
    'Portfolio'
  ],
    robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mono.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
