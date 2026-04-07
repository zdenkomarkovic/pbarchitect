import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "urbanistickiProjekat" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/urbanizam/urbanisticki-projekat" });
}

export default async function UrbanistickiProjekatPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "urbanistickiProjekat" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const processSteps = [
    t("step1"), t("step2"), t("step3"), t("step4"), t("step5"), t("step6"),
    t("step7"), t("step8"), t("step9"), t("step10"), t("step11"),
  ];

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
                  {t("definesTitle")}
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[t("defines1"), t("defines2"), t("defines3"), t("defines4")].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/urbanisticki.webp" alt={t("imgAlt")} fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-6 text-2xl font-semibold text-[#1a1a1a]">
                  {t("processTitle")}
                </h2>
                <ol className="space-y-0">
                  {processSteps.map((step, i) => (
                    <li key={i} className="flex gap-4 border-b border-[#f0ede8] py-4">
                      <span className="font-[family-name:var(--font-heading)] w-6 shrink-0 text-lg font-light text-[#c4a84f]">
                        {i + 1}.
                      </span>
                      <span className="text-sm leading-relaxed text-[#6b6b6b]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/urbanizam"
                className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
              >
                {t("backBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
