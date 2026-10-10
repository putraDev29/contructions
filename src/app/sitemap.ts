import type { MetadataRoute } from "next";
import { companyData } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: companyData.domain,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
