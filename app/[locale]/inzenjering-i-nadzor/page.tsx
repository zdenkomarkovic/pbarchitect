import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "inzenjering" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/inzenjering-i-nadzor" });
}

export default async function InzeenjeringPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "inzenjering" });

  const aspects = [
    { title: t("aspect1Title"), body: t("aspect1Body") },
    { title: t("aspect2Title"), body: t("aspect2Body") },
    { title: t("aspect3Title"), body: t("aspect3Body") },
    { title: t("aspect4Title"), body: t("aspect4Body") },
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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">{t("p1")}</p>
              <p className="leading-relaxed text-[#6b6b6b]">{t("p2")}</p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aspects.map((a) => (
                  <div key={a.title} className="border border-[#e0ddd8] bg-[#f8f7f4] p-6">
                    <h3 className="font-[family-name:var(--font-heading)] mb-2 text-lg font-semibold text-[#1a1a1a]">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6b6b6b]">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/nadzor.webp" alt={t("img1Alt")} fill className="object-cover" />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src="/pregled.webp" alt={t("img2Alt")} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
