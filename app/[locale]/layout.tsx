import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "Arhitektonski biro u Novom Sadu — projektovanje, inženjering i urbanizam.",
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero.png`,
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Novi Sad",
    sameAs: "https://www.wikidata.org/wiki/Q598",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paje Marganovića 5",
    addressLocality: "Novi Sad",
    postalCode: "21000",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.2671,
    longitude: 19.8335,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Paje+Marganovi%C4%87a+5,+Novi+Sad",
  knowsAbout: [
    "Arhitektura",
    "Projektovanje objekata",
    "Idejno rešenje (IDR)",
    "Projekat za građevinsku dozvolu (PGD)",
    "Enterijer dizajn",
    "Tehnički nadzor",
    "Urbanizam",
    "Zaštita životne sredine",
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
