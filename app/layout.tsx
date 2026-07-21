import type { Metadata } from "next";
import { PortfolioAgent } from "./PortfolioAgent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rongalichaitanya.com"),
  title: {
    default: "Research Writer & Python Automation Developer | Rongali Chaitanya",
    template: "%s | Rongali Chaitanya",
  },
  description:
    "Research-based writing on complex subjects, plus Python automation, practical AI workflows, and focused web tools.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Rongali Chaitanya", url: "/" }],
  creator: "Rongali Chaitanya",
  openGraph: {
    title: "Research Writer & Python Automation Developer | Rongali Chaitanya",
    description:
      "Source-backed articles and reports, plus practical Python automation, AI workflows, and focused web tools.",
    url: "https://www.rongalichaitanya.com",
    siteName: "Rongali Chaitanya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Writer & Python Automation Developer | Rongali Chaitanya",
    description:
      "Source-backed writing and practical automation, with transparent research and documented delivery.",
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
