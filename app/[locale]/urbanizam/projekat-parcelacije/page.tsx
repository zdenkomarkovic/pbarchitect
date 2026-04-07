import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "parcelacija" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc") });
}

export default async function ParcelacijaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "parcelacija" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: t("breadcrumbUrbanism"), href: "/urbanizam" },
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
                  {t("whenTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("when1"), t("when2"), t("when3"), t("when4"), t("when5")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/urbanizam"
                className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
              >
                {t("backBtn")}
              </Link>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src="/parcelizacija.webp" alt={t("imgAlt")} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
