import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rongali Chaitanya — Research Writing & Python Automation",
    short_name: "Rongali Chaitanya",
    description:
      "Research-based writing, Python automation, practical AI workflows, and focused web tools.",
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
