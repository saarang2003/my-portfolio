
import "./globals.css";

import "./globals.css";
import {Analytics} from '@vercel/analytics/react';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <body
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
