import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "idr" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/projektovanje/idr" });
}

export default async function IDRPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "idr" });
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
                  {t("contentTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("content1"), t("content2")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  {t("drawingsTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("drawing1"), t("drawing2"), t("drawing3"), t("drawing4")].map((item) => (
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

              <p className="leading-relaxed text-[#6b6b6b]">{t("nextPhaseText")}</p>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/projektovanje/pgd"
                  className="inline-flex items-center gap-2 bg-[#c4a84f] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
                >
                  {t("nextPhaseBtn")}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
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
                <Image src="/idr.webp" alt={t("img1Alt")} width={800} height={600} className="w-full object-cover" />
              </div>
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image src="/stc.webp" alt={t("img2Alt")} width={800} height={600} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
