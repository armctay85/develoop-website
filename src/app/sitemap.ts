import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["/", "/services/", "/approach/", "/tools/", "/about/", "/contact/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-09");

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
