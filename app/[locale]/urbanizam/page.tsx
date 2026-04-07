import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { SubServiceCard } from "@/components/SubServiceCard";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "urbanizam" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc") });
}

export default async function UrbanizamPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "urbanizam" });

  const subServices = [
    { title: t("ss1Title"), description: t("ss1Desc"), href: "/urbanizam/urbanisticki-projekat", image: "/urbanisticki.webp" },
    { title: t("ss2Title"), description: t("ss2Desc"), href: "/urbanizam/projekat-parcelacije", image: "/parcelizacija.webp" },
    { title: t("ss3Title"), description: t("ss3Desc"), href: "/urbanizam/urbanisticki-planovi", image: "/urbanizam.webp" },
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl leading-relaxed text-[#6b6b6b]">{t("intro")}</p>
        </div>
      </section>

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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {subServices.map((s) => (
              <SubServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
