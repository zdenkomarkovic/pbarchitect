import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Projektovanje enterijera",
  description:
    "PB Architect projektuje funkcionalna i estetski dosledna rešenja unutrašnjih prostora — stanovi, kuće, poslovni i ugostiteljski objekti.",
});

export default function EnterijePage() {
  return (
    <>
      <PageHero
        title="Enterijer"
        subtitle="Unutrašnji prostor koji odražava vaš identitet. Svako rešenje nastaje u dijalogu s klijentom — jer dobro projektovan enterijer je onaj koji odgovara načinu života ili poslovanju."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Projektovanje", href: "/projektovanje" },
          { label: "Enterijer" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                Bilo da se radi o privatnoj kući, stanu, poslovnom prostoru ili
                ugostiteljskom objektu, PB Architect pristupa enterijernom
                projektovanju kao integrativnom procesu koji objedinjuje
                estetiku, funkcionalnost i izvodljivost.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Naš pristup podrazumeva detaljno upoznavanje sa željama i
                potrebama klijenta, analizu prostora i izradu rešenja koje
                odražava individualnost korisnika — uz poštovanje budžeta i
                tehničkih uslova.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Obuhvat enterijernog projekta
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Idejno rešenje rasporeda prostora i namještaja",
                    "Odabir materijala, boja i tekstura",
                    "Detaljna projektna dokumentacija za izvođenje",
                    "Grafički prikazi i 3D vizualizacije",
                    "Koordinacija sa izvođačima",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/projektovanje"
                className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
              >
                Natrag
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder label="Dnevna soba" aspectRatio="portrait" />
              <ImagePlaceholder label="Kuhinja" aspectRatio="portrait" />
              <ImagePlaceholder label="Spavaća soba" aspectRatio="square" className="col-span-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
