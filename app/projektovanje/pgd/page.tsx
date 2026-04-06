import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Projekat za građevinsku dozvolu (PGD)",
  description:
    "PGD je završna faza tehničke dokumentacije koja se podnosi uz zahtev za izdavanje rešenja o građevinskoj dozvoli.",
});

export default function PGDPage() {
  return (
    <>
      <PageHero
        title="Projekat za građevinsku dozvolu"
        subtitle="Završna i najvažnija faza tehničke dokumentacije za objekte do 400 m² BRGP — osnova za ishodovanje rešenja o građevinskoj dozvoli."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Projektovanje", href: "/projektovanje" },
          { label: "PGD" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6 text-[#1a1a1a]">
              <p className="leading-relaxed text-[#6b6b6b]">
                Projekat za građevinsku dozvolu (PGD) je tehnička dokumentacija
                koja se predaje uz Zahtev za izdavanje rešenja o građevinskoj
                dozvoli. Za objekte bruto razvijene građevinske površine (BRGP)
                do 400 m², PGD je ključna i završna faza projektovanja.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Važno je naglasiti da se nakon usvajanja PGD-a, odnosno
                izdavanja Rešenja o građevinskoj dozvoli, projektovana rešenja
                ne mogu menjati bez izmene samog rešenja. Iz tog razloga je
                preciznost i kompletnost PGD-a od suštinskog značaja.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  Šta obuhvata PGD za objekte do 400 m² BRGP
                </h2>
                <p className="mb-3 text-[#6b6b6b]">
                  Saglasno zakonu i podzakonskim aktima, PGD za ovu kategoriju
                  objekata čini jedan deo:
                </p>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Sveska 1 — Arhitektura: građevinsko-tehničke, tehnološke i eksploatacione karakteristike objekta",
                    "Opis kompletne opreme i instalacija",
                    "Tehničko-tehnološka i organizaciona rešenja za gradnju",
                    "Investiciona vrednost objekta",
                    "Uslovi za buduće održavanje objekta",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  Podloge za izradu PGD
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Lokacijski uslovi — definišu sve parametre za izradu tehničke dokumentacije",
                    "Overeni katastarsko-topografski plan (KTP) — izrađuje ovlašćeni geometar",
                    "Geotehnički elaborat — definiše sastav tla i uslove fundiranja (obavezan za područje Beograda, a po potrebi i na ostalim lokacijama)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-relaxed text-[#6b6b6b]">
                Po kompletiranju PGD-a, pristupa se podnošenju zahteva za
                izdavanje Rešenja o građevinskoj dozvoli nadležnom lokalnom
                organu uprave.
              </p>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/projektovanje"
                  className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
                >
                  Natrag na Projektovanje
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image
                  src="/pgd.webp"
                  alt="PGD — osnova objekta"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
