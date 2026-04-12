import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "enterijer" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/projektovanje/enterijer" });
}

export default async function EnterijePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "enterijer" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
        locale={locale}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: t("breadcrumbDesign"), href: "/projektovanje" },
          { label: t("breadcrumbCurrent") },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">{t("p1")}</p>
              <p className="leading-relaxed text-[#6b6b6b]">{t("p2")}</p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  {t("scopeTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("scope1"), t("scope2"), t("scope3"), t("scope4"), t("scope5")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/projektovanje"
                className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
              >
                {t("backBtn")}
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/dnevnasoba.webp" alt={t("img1Alt")} fill className="object-cover" />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/kuhinja.webp" alt={t("img2Alt")} fill className="object-cover" />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/spavacasoba.webp" alt={t("img3Alt")} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
