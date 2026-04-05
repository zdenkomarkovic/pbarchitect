import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Urbanistički projekat (UP)",
  description:
    "Izrada urbanističkih projekata za urbanističko-arhitektonsku razradu lokaliteta i ishodovanje lokacijskih uslova.",
});

const processSteps = [
  "Definisanje projektnog zadatka",
  "Izrada Idejnog rešenja (IDR) kao podloge za UP — okvirno 20 radnih dana",
  "Pribavljanje uslova nadležnih preduzeća i ustanova — okvirno 25 radnih dana",
  "Izrada nacrta UP — 15 radnih dana od prijema svih uslova",
  "Dostava nacrta UP jedinci lokalne samouprave za javnu prezentaciju",
  "Objavljivanje javnog poziva za prezentaciju (7 dana pre javne prezentacije)",
  "Javna prezentacija nacrta UP — 7 kalendarskih dana",
  "Razmatranje na sednici Komisije za planove — najkasnije 10 dana po završetku javne prezentacije",
  "Postupanje po eventualnim primedbama — 2 kalendarska dana",
  "Kompletiranje UP i predaja na overu — 2 radna dana od završene procedure",
  "Potvrda UP od strane nadležnog organa lokalne samouprave",
];

export default function UrbanistickiProjekatPage() {
  return (
    <>
      <PageHero
        title="Urbanistički projekat"
        subtitle="UP je instrument urbanističkog planiranja koji omogućava preciznu razradu lokaliteta i stvara uslove za ishodovanje lokacijskih uslova i građevinskih dozvola."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Urbanizam", href: "/urbanizam" },
          { label: "Urbanistički projekat" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect izrađuje urbanističke projekte (UP) na zahtev
                investitora ili kada je to određeno planskim dokumentom.
                Urbanistički projekat se izrađuje za urbanističko-arhitektonsko
                oblikovanje površina javne namene i razradu konkretnih
                lokaliteta.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                UP se izrađuje u skladu sa urbanističkim planom, prostornim
                planom jedinice lokalne samouprave ili prostornim planom
                područja posebne namene. Pored toga, UP se može izraditi i za
                izgradnju objekta koji je u funkciji obavljanja delatnosti
                poljoprivrednog gazdinstva, seoskog turizma, nautičkog ili
                lovnog turizma, na područjima koja nisu obuhvaćena direktno
                primenljivim planskim dokumentima.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Šta UP definiše
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Urbanističko-arhitektonsku koncepciju lokaliteta",
                    "Planiranu parcelaciju (za UP koji obuhvata više parcela)",
                    "Stepen infrastrukturne i komunalne opremljenosti",
                    "Uslove za formiranje građevinske parcele",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a84f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ImagePlaceholder label="Urbanistički projekat — primer" aspectRatio="video" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-6 text-2xl font-semibold text-[#1a1a1a]">
                  Proces izrade i usvajanja UP
                </h2>
                <ol className="space-y-0">
                  {processSteps.map((step, i) => (
                    <li key={i} className="flex gap-4 border-b border-[#f0ede8] py-4">
                      <span className="font-[family-name:var(--font-heading)] w-6 shrink-0 text-lg font-light text-[#c4a84f]">
                        {i + 1}.
                      </span>
                      <span className="text-sm leading-relaxed text-[#6b6b6b]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/urbanizam"
                className="inline-flex items-center gap-2 border border-[#e0ddd8] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
              >
                Natrag na Urbanizam
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
