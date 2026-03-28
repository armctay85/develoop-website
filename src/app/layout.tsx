import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Develoop | The Intelligence Platform for Australian Retail",
  description: "Market intelligence, site selection tools, and portfolio management for retail decision-makers. Powered by data from 15,000+ Australian retail locations and 25 years experience across Kmart, H&M, Starbucks, and UNIQLO.",
  keywords: ["retail intelligence", "site selection", "retail data", "foot traffic", "rent benchmarks", "Australia", "retail analytics", "portfolio management", "market research"],
  authors: [{ name: "Develoop" }],
  creator: "Develoop",
  metadataBase: new URL("https://develoop.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://develoop.com.au",
    siteName: "Develoop",
    title: "Develoop | The Intelligence Platform for Australian Retail",
    description: "Market intelligence, site selection tools, and portfolio management for retail decision-makers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Develoop - Retail Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Develoop | The Intelligence Platform for Australian Retail",
    description: "Market intelligence, site selection tools, and portfolio management for retail decision-makers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f0" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png" />
        <link rel="mask-icon" href="/logo/develoop-logo.svg" color="#b8956e" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      
      <body className="min-h-screen bg-background antialiased selection:bg-accent/30 selection:text-foreground">
        {/* Skip to main content - accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded"
        >
          Skip to main content
        </a>
        
        {children}
      </body>
    </html>
  );
}
