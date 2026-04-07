import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kontakt" });
  return buildMetadata({ title: t("metaTitle"), description: t("metaDesc") });
}

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kontakt" });

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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                    {t("address")}
                  </p>
                  <address className="not-italic text-[#1a1a1a]">{CONTACT.address}</address>
                </div>

                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                    {t("email")}
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-[#1a1a1a] transition-colors hover:text-[#c4a84f]"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                    {t("phone")}
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-[#1a1a1a] transition-colors hover:text-[#c4a84f]"
                  >
                    {CONTACT.phone}
                  </a>
                </div>

                <div className="border-t border-[#e0ddd8] pt-10">
                  <p className="text-sm leading-relaxed text-[#6b6b6b]">{t("workHours")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2049.669707762475!2d19.821142773409388!3d45.25250680991008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1049df2917d3%3A0xf4d29886c5cb8914!2sPaje%20Marganovi%C4%87a%205%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1775516515865!5m2!1sen!2srs"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("mapTitle")}
        />
      </section>
    </>
  );
}
