import type { Metadata } from "next";
import { PortfolioAgent } from "./PortfolioAgent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rongalichaitanya.com"),
  title: {
    default: "Python Automation & AI Integration Developer | Rongali Chaitanya",
    template: "%s | Rongali Chaitanya",
  },
  description:
    "Python automation, practical AI integration, and focused web tools for agencies, founders, and operations teams.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Rongali Chaitanya", url: "/" }],
  creator: "Rongali Chaitanya",
  openGraph: {
    title: "Python Automation & AI Integration Developer | Rongali Chaitanya",
    description:
      "Practical Python automation, AI assistants, and focused web tools with clear scope and documented handover.",
    url: "https://www.rongalichaitanya.com",
    siteName: "Rongali Chaitanya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Automation & AI Integration Developer | Rongali Chaitanya",
    description:
      "Practical Python automation, AI assistants, and focused web tools with clear scope and documented handover.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PortfolioAgent />
      </body>
    </html>
  );
}
