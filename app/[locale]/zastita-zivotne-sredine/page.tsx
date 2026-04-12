import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zastita" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc"), locale, localePath: "/zastita-zivotne-sredine" });
}

export default async function ZastitaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zastita" });

  const docs = [
    { title: t("doc1Title"), body: t("doc1Body") },
    { title: t("doc2Title"), body: t("doc2Body") },
    { title: t("doc3Title"), body: t("doc3Body") },
    { title: t("doc4Title"), body: t("doc4Body") },
  ];

  return (
    <>
      <PageHero
        locale={locale}
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
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src="/zastita.webp" alt={t("imgAlt")} fill className="object-cover" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {docs.map((doc) => (
              <div key={doc.title} className="border border-[#e0ddd8] bg-[#f8f7f4] p-6">
                <div className="mb-3 h-1 w-8 bg-[#c4a84f]" />
                <h3 className="font-[family-name:var(--font-heading)] mb-3 text-lg font-semibold text-[#1a1a1a]">
                  {doc.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{doc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
