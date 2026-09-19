import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nithin K — Backend-leaning Full-Stack Developer",
  description:
    "Backend-leaning full-stack developer building production systems with Node.js, Go, databases, integrations, and infrastructure.",
  metadataBase: new URL("https://nithin.me"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nithin K — Backend-leaning Full-Stack Developer",
    description:
      "Production software across commerce, warehouse operations, refurbished retail, and notification delivery.",
    url: "https://nithin.me",
    siteName: "nithin.me",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Nithin K — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin K — Backend-leaning Full-Stack Developer",
    description:
      "Production software across commerce, warehouse operations, refurbished retail, and notification delivery.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
