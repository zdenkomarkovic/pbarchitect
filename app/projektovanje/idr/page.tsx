import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Idejno rešenje (IDR)",
  description:
    "Idejno rešenje je početna faza projektovanja kojom se definiše koncepcija objekta i pribavljaju lokacijski uslovi.",
});

export default function IDRPage() {
  return (
    <>
      <PageHero
        title="Idejno rešenje"
        subtitle="Prva faza projektovanja koja utvrđuje koncepciju budućeg objekta i osnov je za pribavljanje lokacijskih uslova."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Projektovanje", href: "/projektovanje" },
          { label: "IDR" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6 text-[#1a1a1a]">
              <p className="leading-relaxed text-[#6b6b6b]">
                Idejno rešenje (IDR) je forma projekta koja se podnosi uz
                Zahtev za izdavanje lokacijskih uslova. Prema Pravilniku koji
                je stupio na snagu u aprilu 2015. godine, IDR ima precizno
                definisanu sadržinu i za potrebe lokacijskih uslova podnosi se
                isključivo deo <em>Arhitektura</em>, koji overava odgovorni
                licencirani inženjer.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                IDR prikazuje planiranu koncepciju objekta: poziciju na
                parceli, dimenzije (horizontalni i vertikalni gabarit),
                planirane kapacitete infrastrukturnih priključaka (vodovod i
                kanalizacija, električna energija, grejanje) i relevantne
                urbanističke parametre.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  Sadržaj IDR
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                    Glavna sveska
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                    Sveska 1 — Arhitektura
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold">
                  Grafički prilozi
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Šira i uža situacija objekta",
                    "Osnove svih karakterističnih etaža i krova",
                    "Karakteristični preseci objekta",
                    "Prikazi svih izgleda objekta u odgovarajućoj razmeri",
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
                  Podloge za izradu IDR
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                    Geodetski snimak (izrađuje ovlašćeni geometar)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                    Informacija o lokaciji
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                    Dodatne podloge prema specifičnostima objekta
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed text-[#6b6b6b]">
                Nakon predaje IDR i ishodovanja lokacijskih uslova, pristupa
                se sledećoj fazi — izradi Projekta za građevinsku dozvolu.
              </p>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/projektovanje/pgd"
                  className="inline-flex items-center gap-2 bg-[#c4a84f] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
                >
                  Sledeća faza: PGD
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/projektovanje"
                  className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
                >
                  Natrag
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder label="IDR — primer idejnog rešenja" aspectRatio="portrait" />
              <ImagePlaceholder label="Situacioni plan" aspectRatio="square" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
