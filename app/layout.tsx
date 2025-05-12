
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono , Space_Mono } from "next/font/google";
import "./globals.css";
import {Analytics} from '@vercel/analytics/react';



const mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Add this
});



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
