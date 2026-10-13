import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections";

const siteUrl = "https://daffapratama.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daffa Pratama — Software Developer Portfolio",
    template: "%s | Daffa Pratama"
  },
  description:
    "Portfolio Daffa Pratama, an Information Technology student and software developer interested in building useful web, mobile, and intelligent software solutions.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Daffa Pratama — Software Developer Portfolio",
    description:
      "Explore software projects, technical skills, and experience by Daffa Pratama.",
    siteName: "Daffa Pratama Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffa Pratama — Software Developer Portfolio",
    description:
      "Software development projects, technical skills, and experience."
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f9ff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
