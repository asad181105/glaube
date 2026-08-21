import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Glaube Exotics",
  description:
    "Glaube Exotics specializes in premium vehicle sourcing, international automotive opportunities, bespoke customization and exceptional automotive experiences.",
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="grain" aria-hidden />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
