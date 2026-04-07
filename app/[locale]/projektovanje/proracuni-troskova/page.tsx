import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "proracuni" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/projektovanje/proracuni-troskova" });
}

export default async function ProracuniPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "proracuni" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
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

            <div className="space-y-4 lg:col-span-2">
              <div className="border border-[#e0ddd8] bg-[#f8f7f4] p-8">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1a1a1a]">
                  {t("ctaTitle")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                  {t("ctaDesc")}
                </p>
                <a
                  href="mailto:edy.dzanovic@gmail.com"
                  className="mt-6 inline-block bg-[#c4a84f] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
                >
                  {t("ctaBtn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
