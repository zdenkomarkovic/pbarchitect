import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Projekat parcelacije / preparcelacije",
  description:
    "Izrada projekata parcelacije i preparcelacije katastarskih parcela kao uslova za kvalitetniju izgradnju.",
});

export default function ParcelacijaPage() {
  return (
    <>
      <PageHero
        title="Projekat parcelacije"
        subtitle="Precizno formiranje i reorganizacija parcela — preduslov za plansku i zakonitu izgradnju na raznovrsnim lokalitetima."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Urbanizam", href: "/urbanizam" },
          { label: "Projekat parcelacije" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect izrađuje projekte parcelacije i preparcelacije
                kojima se vrši formiranje novih ili reorganizacija postojećih
                katastarskih parcela. Ovi projekti su neophodan preduslov za
                usklađivanje katastarskog stanja sa planskom dokumentacijom,
                što otvara mogućnost za ishođenje dozvola i legalizaciju
                objekata.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Projekti parcelacije izrađuju se u saradnji sa ovlašćenim
                geodetskim biroom i u skladu sa planskom dokumentacijom koja
                važi za datu lokaciju.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Kada je potreban projekat parcelacije
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Formiranje nove građevinske parcele",
                    "Podela jedne parcele na više manjih",
                    "Spajanje više parcela u jednu",
                    "Usklađivanje katastarskog stanja sa planskim dokumentom",
                    "Regulacija granica parcela između suseda",
                  ].map((item) => (
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
                Natrag na Urbanizam
              </Link>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src="/parcelizacija.webp" alt="Projekat parcelacije" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
