import type { MetadataRoute } from "next";
import { internalProjects } from "./projects/data";

const siteUrl = "https://www.rongalichaitanya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = internalProjects.map((project) => ({
    url: `${siteUrl}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
