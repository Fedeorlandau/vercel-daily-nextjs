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

export const metadata: Metadata = {
  title: "The Daily Dispatch",
  description: "News and insights for modern web developers.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subscribed = false;
  return (
    <html
      lang="en"
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
