import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rongali Chaitanya — Python Automation & AI Integration",
    short_name: "Rongali Chaitanya",
    description:
      "Python automation, practical AI integration, and focused web tools for business workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7f3",
    theme_color: "#153f34",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
