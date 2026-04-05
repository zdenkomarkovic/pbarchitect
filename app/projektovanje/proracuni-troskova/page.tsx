import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Proračuni troškova",
  description:
    "Precizni proračuni investicionih troškova izgradnje prema aktuelnim tržišnim cenama.",
});

export default function ProracuniPage() {
  return (
    <>
      <PageHero
        title="Proračuni troškova"
        subtitle="Realna i precizna procena troškova izgradnje — ključni alat za planiranje investicije i donošenje informisanih odluka."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Projektovanje", href: "/projektovanje" },
          { label: "Proračuni troškova" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect izrađuje proračune investicionih troškova prema
                aktuelnim tržišnim cenama materijala i rada. Proračun je
                zasnovan na usvojenoj projektnoj dokumentaciji i pruža
                investitoru jasan uvid u finansijski okvir projekta.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Precizno planiranje budžeta omogućava pravovremeno
                prilagođavanje projektnih rešenja, izbor optimalnih materijala
                i sprečavanje nepredviđenih troškova tokom izgradnje.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Šta obuhvata proračun
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Troškovi građevinskih i zanatskih radova",
                    "Troškovi instalacija (elektro, vodo-kanalizacione, grejanje)",
                    "Troškovi projektovanja i tehničkog nadzora",
                    "Troškovi ishođenja dozvola i taksene obaveze",
                    "Okvirni troškovi opreme i enterijera",
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

            <div className="lg:col-span-2 space-y-4">
              <div className="border border-[#e0ddd8] bg-[#f8f7f4] p-8">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1a1a1a]">
                  Zatražite proračun
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                  Pošaljite nam osnovne podatke o planiranom objektu i
                  dobićete okvirnu procenu troškova u najkraćem roku.
                </p>
                <a
                  href="mailto:edydzanovic@gmail.com"
                  className="mt-6 inline-block bg-[#c4a84f] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
                >
                  Kontaktirajte nas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
