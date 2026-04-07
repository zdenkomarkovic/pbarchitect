import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { ServiceCard } from "@/components/ServiceCard";
import { CONTACT } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    title: undefined,
    description: t("heroSubtitle"),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const services = [
    {
      number: "01",
      title: t("service1Title"),
      description: t("service1Desc"),
      href: "/projektovanje",
    },
    {
      number: "02",
      title: t("service2Title"),
      description: t("service2Desc"),
      href: "/inzenjering-i-nadzor",
    },
    {
      number: "03",
      title: t("service3Title"),
      description: t("service3Desc"),
      href: "/zastita-zivotne-sredine",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[calc(100vh-4.5rem)] flex-col justify-end overflow-hidden bg-[#1a1a1a]">
        <Image
          src="/hero.webp"
          alt="PB Architect"
          fill
          className="hidden object-cover md:block"
          priority
        />
        <Image
          src="/heromob.webp"
          alt="PB Architect"
          fill
          className="block object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-7xl pb-6 pt-8">
          <div className="px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c4a84f]">
              {t("heroLocation")}
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-light leading-none text-white md:text-6xl">
              <span className="block">{t("heroTitleLine1")}</span>
              <span className="block">PB ARCHITECT</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#aaa] md:text-lg">
              {t("heroSubtitle")}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/projektovanje"
                className="bg-[#c4a84f] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
              >
                {t("heroServices")}
              </Link>
              <a
                href="#kontakt"
                className="border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-white"
              >
                {t("heroContact")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8f7f4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              {t("servicesLabel")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-light text-[#1a1a1a] md:text-5xl">
              {t("servicesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                {t("aboutLabel")}
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-light text-[#1a1a1a] md:text-5xl">
                {t("aboutTitle")}
              </h2>
              <p className="mt-6 leading-relaxed text-[#6b6b6b]">{t("aboutP1")}</p>
              <p className="mt-4 leading-relaxed text-[#6b6b6b]">{t("aboutP2")}</p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/Gemini_Generated_Image_rjt8y8rjt8y8rjt8.webp"
                alt={t("aboutImgAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#c4a84f] px-6 py-20 text-[#1a1a1a]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light md:text-4xl">
                {t("contactTitle")}
              </h2>
              <p className="mt-2 text-[#1a1a1a]">{t("contactSubtitle")}</p>
            </div>
            <div className="flex flex-col gap-3 text-base">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]"
              >
                <span className="text-xl">✉</span> {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>{" "}
                {CONTACT.phone}
              </a>
              <p className="flex items-center gap-3 text-[#1a1a1a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>{" "}
                {CONTACT.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
