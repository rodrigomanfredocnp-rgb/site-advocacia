import type { MetadataRoute } from "next";
import { landings } from "@/content/landings";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...landings.map((l) => ({ url: `${site.url}/${l.slug}/`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/politica-de-privacidade/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/termos-de-uso/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
