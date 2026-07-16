import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYO MIN MIN OO | Portfolio",
  description: "A modern portfolio website built with Next.js, React, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
