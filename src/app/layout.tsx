import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://endalktech.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8b5cf6",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Endalk Tech | Premium Web Solutions",
    template: "%s | Endalk Tech",
  },
  description:
    "Endalk Tech builds premium, high-conversion web applications, portfolios, and dynamic dashboards that drive scalable business growth.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Full Stack Developer",
    "Endale Gebeyehu",
    "Endalk Tech",
    "Portfolio",
    "Frontend",
    "Backend",
    "High-Conversion",
  ],
  authors: [{ name: "Endale Gebeyehu", url: siteUrl }],
  creator: "Endale Gebeyehu",
  publisher: "Endalk Tech",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Endalk Tech",
    title: "Endalk Tech | Premium Web Solutions",
    description:
      "Endalk Tech builds premium, high-conversion web applications, portfolios, and dynamic dashboards that drive scalable business growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Endalk Tech – Premium Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endalk Tech | Premium Web Solutions",
    description:
      "Premium web solutions focusing on rapid growth and technical excellence.",
    images: ["/og-image.png"],
    creator: "@EndalkTech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={clsx(
          inter.variable,
          poppins.variable,
          "font-sans antialiased text-foreground bg-background"
        )}
      >
        {children}
      </body>
    </html>
  );
}