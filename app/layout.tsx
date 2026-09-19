import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-wdth.woff2",
  variable: "--font-archivo",
  display: "swap",
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const sourceSerif = localFont({
  src: "./fonts/source-serif-4-wght.woff2",
  variable: "--font-source-serif",
  display: "swap",
  weight: "200 900",
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
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#15181d",
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
  knowsAbout: ["Node.js", "Go", "MongoDB", "PostgreSQL", "Payment integrations", "Webhooks", "Microservices"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
