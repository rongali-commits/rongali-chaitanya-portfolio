import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rongalichaitanya.com"),
  title: "Rongali Chaitanya | AI Integration & Python Automation",
  description:
    "Freelance portfolio for AI integrations, Python automation, and practical web tools by Rongali Chaitanya.",
  openGraph: {
    title: "Rongali Chaitanya | AI Integration & Python Automation",
    description:
      "Practical AI, Python automation, and web development services for small businesses.",
    url: "https://rongalichaitanya.com",
    siteName: "Rongali Chaitanya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rongali Chaitanya | AI Integration & Python Automation",
    description:
      "Practical AI, Python automation, and web development services for small businesses.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
