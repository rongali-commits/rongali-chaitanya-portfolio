import type { Metadata } from "next";
import { PortfolioAgent } from "./PortfolioAgent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rongalichaitanya.com"),
  title: "Rongali Chaitanya | AI Integration, Python Automation & Web Development",
  description:
    "IT professional with 5 years of experience building AI integrations, Python automations, web tools, dashboards, and practical business systems.",
  openGraph: {
    title: "Rongali Chaitanya | AI Integration, Python Automation & Web Development",
    description:
      "Professional portfolio for AI integrations, Python automation, web development, and the Noerong publishing project.",
    url: "https://rongalichaitanya.com",
    siteName: "Rongali Chaitanya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rongali Chaitanya | AI Integration, Python Automation & Web Development",
    description:
      "IT professional with 5 years of experience building practical AI, automation, and web systems.",
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
