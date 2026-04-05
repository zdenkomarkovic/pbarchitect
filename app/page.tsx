import { buildMetadata } from "@/lib/metadata";
import { ServiceCard } from "@/components/ServiceCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CONTACT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "PB Architect — projektovanje, inženjering i urbanizam u Novom Sadu.",
});

const services = [
  {
    number: "01",
    title: "Projektovanje",
    description:
      "Izrađujemo kompletnu tehničku dokumentaciju u svim fazama — od idejne skice do projekta izvedenog objekta. Iskustvo u stambenim, poslovnim, industrijskim i javnim objektima.",
    href: "/projektovanje",
  },
  {
    number: "02",
    title: "Inženjering i nadzor",
    description:
      "Pružamo stručni tehnički nadzor i upravljanje realizacijom projekata. Tim iskusnih inženjera garantuje usklađenost izvođenja sa projektnom dokumentacijom i propisima.",
    href: "/inzenjering-i-nadzor",
  },
  {
    number: "03",
    title: "Zaštita životne sredine",
    description:
      "Izrađujemo studije procene uticaja na životnu sredinu, dokumentaciju za upravljanje otpadom, planove zaštite od udesa i planove zaštite od požara za industrijska postrojenja.",
    href: "/zastita-zivotne-sredine",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a]">
        {/* Desktop hero */}
        <Image
          src="/hero.png"
          alt="PB Architect"
          fill
          className="hidden object-cover opacity-40 md:block"
          priority
        />
        {/* Mobile hero */}
        <Image
          src="/heromob.png"
          alt="PB Architect"
          fill
          className="block object-cover opacity-40 md:hidden"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c4a84f]">
            Novi Sad — Srbija
          </p>
          <h1 className="font-[family-name:var(--font-heading)] max-w-3xl text-6xl font-light leading-none text-white md:text-8xl">
            Arhitektura koja traje
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#aaa]">
            Projektujemo, nadziremo i planiramo. PB Architect je partner koji
            vas vodi od prve ideje do gotovog objekta.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projektovanje"
              className="bg-[#c4a84f] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a8893a]"
            >
              Naše usluge
            </Link>
            <a
              href="#kontakt"
              className="border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-white"
            >
              Kontakt
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8f7f4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Šta radimo
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-light text-[#1a1a1a] md:text-5xl">
              Naše usluge
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                O nama
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-light text-[#1a1a1a] md:text-5xl">
                Stručnost i posvećenost u svakom projektu
              </h2>
              <p className="mt-6 text-[#6b6b6b] leading-relaxed">
                PB Architect je projektantski biro sa sedištem u Novom Sadu.
                Bavimo se izradom tehničke dokumentacije, urbanizmom i
                tehničkim nadzorom. Svaki projekat tretiramo individualno —
                jer svaki klijent ima jedinstven prostor, budžet i viziju.
              </p>
              <p className="mt-4 text-[#6b6b6b] leading-relaxed">
                Sarađujemo sa investitorima, izvođačima i javnim institucijama
                kroz sve faze izgradnje, od ishođenja dozvola do tehničkog
                prijema objekta.
              </p>
            </div>
            <ImagePlaceholder label="O nama — fotografija" aspectRatio="square" />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light md:text-4xl">
                Pokrenite vaš projekat danas
              </h2>
              <p className="mt-2 text-[#999]">
                Kontaktirajte nas za besplatnu konsultaciju.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-[#999] transition-colors hover:text-white"
              >
                <span className="text-[#c4a84f]">✉</span> {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-[#999] transition-colors hover:text-white"
              >
                <span className="text-[#c4a84f]">✆</span> {CONTACT.phone}
              </a>
              <p className="flex items-center gap-3 text-[#999]">
                <span className="text-[#c4a84f]">⌖</span> {CONTACT.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
