import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Urbanistički planovi",
  description:
    "Učešće u izradi planova detaljne regulacije (PDR) i ostalih planskih dokumenata na nivou lokalne samouprave.",
});

export default function UrbanistickiPlanoviPage() {
  return (
    <>
      <PageHero
        title="Urbanistički planovi"
        subtitle="Strateško i prostorno planiranje kao osnova za uređeno i održivo korišćenje prostora."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Urbanizam", href: "/urbanizam" },
          { label: "Urbanistički planovi" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect učestvuje u izradi planova detaljne regulacije
                (PDR) i ostalih planskih dokumenata koji regulišu korišćenje
                prostora na nivou jedinice lokalne samouprave. Stečeno
                iskustvo kroz rad na različitim PDR-ovima obuhvata zone
                stanovanja, privrede, mešovite namene i infrastrukturne
                koridore.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Urbanistički plan je osnova za svaki kasniji nivo projektovanja.
                Kvalitetno urađen planski dokument obezbeđuje pravnu sigurnost
                investitorima i koherentnost razvoja datog područja.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Vrste planskih dokumenata
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Plan detaljne regulacije (PDR)",
                    "Plan generalne regulacije (PGR)",
                    "Prostorni plan jedinice lokalne samouprave",
                    "Prostorni plan područja posebne namene",
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

            <div className="space-y-4">
              <ImagePlaceholder label="Plan detaljne regulacije" aspectRatio="square" />
              <ImagePlaceholder label="Urbanistička karta" aspectRatio="video" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
