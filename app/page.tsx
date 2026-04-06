import { buildMetadata } from "@/lib/metadata";
import { ServiceCard } from "@/components/ServiceCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CONTACT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Početna",
  description: "PB Architect — projektovanje, inženjering i urbanizam u Novom Sadu.",
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
      <section className="relative flex h-[calc(100vh-4.5rem)] flex-col justify-end overflow-hidden bg-[#1a1a1a]">
        {/* Desktop hero */}
        <Image
          src="/hero.webp"
          alt="PB Architect"
          fill
          className="hidden object-cover md:block"
          priority
        />
        {/* Mobile hero */}
        <Image
          src="/heromob.webp"
          alt="PB Architect"
          fill
          className="block object-cover md:hidden"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80 z-[1]" /> */}
        <div className="relative z-10 mx-auto w-full max-w-7xl  pb-6 pt-8">
          <div className=" px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c4a84f]">
              Novi Sad — Srbija
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-light leading-none text-white ">
              Arhitektura koja traje Arhitektonski Biro <br /> PB ARCHITECT
            </h1>
            <p className="mt-4  text-sm leading-relaxed text-[#aaa] md:text-lg">
              Projektujemo, nadziremo i planiramo. PB Architect je partner koji vas vodi od prve
              ideje do gotovog objekta.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
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
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
                O nama
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-light text-[#1a1a1a] md:text-5xl">
                Stručnost i posvećenost u svakom projektu
              </h2>
              <p className="mt-6 text-[#6b6b6b] leading-relaxed">
                PB Architect je projektantski biro sa sedištem u Novom Sadu. Bavimo se izradom
                tehničke dokumentacije, urbanizmom i tehničkim nadzorom. Svaki projekat tretiramo
                individualno — jer svaki klijent ima jedinstven prostor, budžet i viziju.
              </p>
              <p className="mt-4 text-[#6b6b6b] leading-relaxed">
                Sarađujemo sa investitorima, izvođačima i javnim institucijama kroz sve faze
                izgradnje, od ishođenja dozvola do tehničkog prijema objekta.
              </p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/Gemini_Generated_Image_rjt8y8rjt8y8rjt8.webp"
                alt="O nama — PB Architect"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#c4a84f] px-6 py-20 text-[#1a1a1a]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light md:text-4xl">
                Pokrenite vaš projekat danas
              </h2>
              <p className="mt-2 text-[#1a1a1a]">Kontaktirajte nas za besplatnu konsultaciju.</p>
            </div>
            <div className="flex flex-col gap-3 text-base">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]"
              >
                <span className="text-xl">✉</span> {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>{" "}
                {CONTACT.phone}
              </a>
              <p className="flex items-center gap-3 text-[#1a1a1a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>{" "}
                {CONTACT.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
