import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { seo, site } from "@/content/site";
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
  jobTitle: seo.jsonLd.jobTitle,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: seo.jsonLd.addressLocality,
    addressCountry: seo.jsonLd.addressCountry,
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: seo.jsonLd.knowsAbout,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={schibsted.variable} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var d = document.documentElement; var m = window.localStorage.getItem("nithin-motion-enabled"); d.dataset.motion = m === "true" ? "on" : m === "false" ? "reduce" : (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduce" : "on"); var t = window.localStorage.getItem("nithin-theme"); if (t === "light" || t === "dark") d.dataset.theme = t; } catch { d.dataset.motion = "on"; }`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
