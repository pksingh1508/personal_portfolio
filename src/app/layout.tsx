import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { siteMeta } from "@/data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="custom-grid flex min-h-full flex-col bg-surface text-on-background">
        {children}
      </body>
    </html>
  );
}
