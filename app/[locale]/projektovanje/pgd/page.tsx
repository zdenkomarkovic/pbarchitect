import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pgd" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/projektovanje/pgd" });
}

export default async function PGDPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pgd" });
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
            <div className="space-y-6 text-[#1a1a1a]">
              <p className="leading-relaxed text-[#6b6b6b]">{t("p1")}</p>
              <p className="leading-relaxed text-[#6b6b6b]">{t("p2")}</p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  {t("scopeTitle")}
                </h2>
                <p className="mb-3 text-[#6b6b6b]">{t("scopeIntro")}</p>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("scope1"), t("scope2"), t("scope3"), t("scope4"), t("scope5")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  {t("basisTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("basis1"), t("basis2"), t("basis3")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-relaxed text-[#6b6b6b]">{t("nextText")}</p>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/projektovanje"
                  className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
                >
                  {t("backBtn")}
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image src="/pgd.webp" alt={t("imgAlt")} width={800} height={600} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
