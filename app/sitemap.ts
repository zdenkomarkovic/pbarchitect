import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

type PageEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const pages: PageEntry[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/projektovanje", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projektovanje/idr", priority: 0.8, changeFrequency: "yearly" },
  { path: "/projektovanje/pgd", priority: 0.8, changeFrequency: "yearly" },
  { path: "/projektovanje/enterijer", priority: 0.7, changeFrequency: "yearly" },
  { path: "/projektovanje/eksterijer", priority: 0.7, changeFrequency: "yearly" },
  { path: "/projektovanje/proracuni-troskova", priority: 0.7, changeFrequency: "yearly" },
  { path: "/urbanizam", priority: 0.8, changeFrequency: "monthly" },
  { path: "/urbanizam/urbanisticki-projekat", priority: 0.7, changeFrequency: "yearly" },
  { path: "/urbanizam/projekat-parcelacije", priority: 0.7, changeFrequency: "yearly" },
  { path: "/urbanizam/urbanisticki-planovi", priority: 0.7, changeFrequency: "yearly" },
  { path: "/inzenjering-i-nadzor", priority: 0.8, changeFrequency: "monthly" },
  { path: "/zastita-zivotne-sredine", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
];

function srUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function enUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/en` : `${SITE_URL}/en${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2025-06-01");
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const sr = srUrl(page.path);
    const en = enUrl(page.path);

    const languages = {
      sr: sr,
      en: en,
      "x-default": sr,
    };

    // SR verzija — sa alternates ka EN
    entries.push({
      url: sr,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    });

    // EN verzija — sa alternates ka SR
    entries.push({
      url: en,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: Math.round(page.priority * 0.9 * 10) / 10,
      alternates: { languages },
    });
  }

  return entries;
}
