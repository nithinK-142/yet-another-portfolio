import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

const schibsted = localFont({
  src: "./fonts/schibsted-grotesk-wght.woff2",
  variable: "--font-schibsted",
  display: "swap",
  weight: "400 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Backend-leaning full-stack developer",
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Node.js", "Go", "MongoDB", "PostgreSQL", "Microservices", "API integrations"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={schibsted.variable} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var d = document.documentElement; d.dataset.motion = window.localStorage.getItem("nithin-motion-enabled") === "false" ? "reduce" : "on"; var t = window.localStorage.getItem("nithin-theme"); if (t === "light" || t === "dark") d.dataset.theme = t; } catch { document.documentElement.dataset.motion = "on"; }`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
