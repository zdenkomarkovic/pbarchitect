import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { SubServiceCard } from "@/components/SubServiceCard";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projektovanje" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/projektovanje" });
}

export default async function ProjektovanjePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projektovanje" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const subServices = [
    { title: t("ss1Title"), description: t("ss1Desc"), href: "/projektovanje/idr", image: "/idr.webp" },
    { title: t("ss2Title"), description: t("ss2Desc"), href: "/projektovanje/pgd", image: "/pgd.webp" },
    { title: t("ss3Title"), description: t("ss3Desc"), href: "/projektovanje/enterijer", image: "/dnevnasoba.webp" },
    { title: t("ss4Title"), description: t("ss4Desc"), href: "/projektovanje/eksterijer", image: "/dvoriste.webp" },
    { title: t("ss5Title"), description: t("ss5Desc"), href: "/projektovanje/proracuni-troskova", image: "/proracun.webp" },
  ];

  const steps = [
    { num: "01", title: t("step1Title"), description: t("step1Desc"), href: null },
    { num: "02", title: t("step2Title"), description: t("step2Desc"), href: "/projektovanje/idr" },
    { num: "03", title: t("step3Title"), description: t("step3Desc"), href: null },
    { num: "04", title: t("step4Title"), description: t("step4Desc"), href: "/projektovanje/pgd" },
    { num: "05", title: t("step5Title"), description: t("step5Desc"), href: null },
    { num: "06", title: t("step6Title"), description: t("step6Desc"), href: "/inzenjering-i-nadzor" },
    { num: "07", title: t("step7Title"), description: t("step7Desc"), href: null },
  ];

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        breadcrumbs={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("heroTitle") },
        ]}
      />

      {/* Steps */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              {t("processLabel")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[#1a1a1a] md:text-4xl">
              {t("processTitle")}
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#c4a84f] bg-white">
                    <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#c4a84f]">
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#e0ddd8]" style={{ minHeight: "3rem" }} />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1a1a1a]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#6b6b6b]">
                    {step.description}
                  </p>
                  {step.href && (
                    <Link
                      href={step.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#c4a84f] transition-opacity hover:opacity-70"
                    >
                      {tCommon("details")}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-[#f8f7f4] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              {t("subServicesLabel")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[#1a1a1a] md:text-4xl">
              {t("subServicesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((s) => (
              <SubServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
