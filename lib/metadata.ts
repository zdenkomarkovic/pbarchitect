import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Putanja do slike za OG (relativna od /public ili apsolutna URL) */
  image?: string;
  /** Canonical URL - ako nije naveden, izračunava se iz localePath/locale */
  url?: string;
  /** Da li da noindex ova stranica */
  noIndex?: boolean;
  /** Tip stranice za OG */
  type?: "website" | "article";
  /** Datum objave (za blog postove) */
  publishedTime?: string;
  /**
   * Putanja stranice bez locale prefiksa (npr. "/" ili "/projektovanje").
   * Koristi se za generisanje hreflang alternata i canonicala.
   */
  localePath?: string;
  /** Locale trenutne stranice ("sr" | "en") */
  locale?: string;
}

function pageUrl(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === "sr") return `${SITE_URL}${clean}` || SITE_URL;
  return `${SITE_URL}/${locale}${clean}`;
}

export function buildMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  type = "website",
  publishedTime,
  localePath,
  locale,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const ogImage = image ?? `${SITE_URL}/hero.png`;

  // Canonical: eksplicitni url > izračunat iz locale+path > root
  const canonicalUrl =
    url ?? (locale && localePath ? pageUrl(locale, localePath) : SITE_URL);

  // hreflang alternates
  const languages =
    localePath !== undefined
      ? {
          sr: pageUrl("sr", localePath),
          en: pageUrl("en", localePath),
          "x-default": pageUrl("sr", localePath),
        }
      : undefined;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      ...(languages && { languages }),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
