import type { Metadata } from "next";
import {
  Libre_Baskerville,
  Source_Sans_3,
  IBM_Plex_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { BreakingNewsBanner } from "@/components/breaking-news-banner";
import { Navbar } from "@/components/navbar";
import { Footer } from "react-day-picker";
import { getSiteConfig } from "@/lib/services";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();

  return {
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  const subscribed = false;
  return (
    <html
      lang={config.language}
      className={`${libreBaskerville.variable} ${sourceSans.variable} ${ibmPlexMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar subscribed={subscribed} />
          <BreakingNewsBanner />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
