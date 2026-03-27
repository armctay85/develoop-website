import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Develoop | Specialist Retail Development Consultancy",
  description: "Expert retail development consultancy with 25 years experience across Kmart, H&M, Starbucks, and UNIQLO. Strategic guidance for complex retail development projects.",
  keywords: ["retail development", "retail consultancy", "store development", "leasing advisory", "construction management", "Australia"],
  authors: [{ name: "Develoop" }],
  creator: "Develoop",
  metadataBase: new URL("https://develoop.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://develoop.com.au",
    siteName: "Develoop",
    title: "Develoop | Specialist Retail Development Consultancy",
    description: "Expert retail development consultancy with 25 years experience across Kmart, H&M, Starbucks, and UNIQLO.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Develoop | Specialist Retail Development Consultancy",
    description: "Expert retail development consultancy with 25 years experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png" />
        <link rel="mask-icon" href="/logo/develoop-logo.svg" color="#b8956e" />
      </head>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
