import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { SubServiceCard } from "@/components/SubServiceCard";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Projektovanje",
  description:
    "PB Architect izrađuje kompletnu tehničku dokumentaciju — od idejnog rešenja do projekta za građevinsku dozvolu.",
});

const subServices = [
  {
    title: "IDR — Idejno rešenje",
    description:
      "Početna faza projektovanja kojom se definiše koncepcija objekta i pribavljaju lokacijski uslovi.",
    href: "/projektovanje/idr",
    image: "/idr.webp",
  },
  {
    title: "PGD — Projekat za građevinsku dozvolu",
    description:
      "Ključna faza tehničke dokumentacije neophodna za ishodovanje rešenja o građevinskoj dozvoli.",
    href: "/projektovanje/pgd",
    image: "/pgd.webp",
  },
  {
    title: "Enterijer",
    description:
      "Osmišljavamo funkcionalna i estetski dosledna enterijerna rešenja usklađena sa vašim potrebama i stilom.",
    href: "/projektovanje/enterijer",
    image: "/dnevnasoba.webp",
  },
  {
    title: "Eksterijer",
    description:
      "Projektujemo uređenje dvorišta, parcela, vrtova, ograda, tremova i ostalih spoljnih prostora.",
    href: "/projektovanje/eksterijer",
    image: "/dvoriste.webp",
  },
  {
    title: "Proračuni troškova",
    description:
      "Izrađujemo precizne proračune investicionih troškova prema aktuelnim tržišnim cenama.",
    href: "/projektovanje/proracuni-troskova",
    image: "/proracun.webp",
  },
];

const steps = [
  {
    num: "01",
    title: "Projektni zadatak",
    description:
      "Prva faza u kojoj se u saradnji sa investitorom definišu programski zahtevi: okvirna površina objekta, struktura prostora (broj soba, kupatila i sl.), materijalizacija i potrebni kapaciteti infrastrukturnih priključaka. Kvalitetno definisan projektni zadatak je temelj uspešnog projekta.",
    href: null,
  },
  {
    num: "02",
    title: "Idejno rešenje (IDR)",
    description:
      "Na osnovu projektnog zadatka izrađuje se Idejno rešenje, koje prikazuje koncepciju objekta i podnosi se uz Zahtev za lokacijske uslove. IDR definiše poziciju objekta na parceli, gabarite i parametre infrastrukturnih priključaka.",
    href: "/projektovanje/idr",
  },
  {
    num: "03",
    title: "Ishodovanje lokacijskih uslova",
    description:
      "Objedinjena procedura koja se vodi pred nadležnim organom uprave u ime investitora, posredstvom ovlašćenog lica — punomoćnika. Lokacijski uslovi su dokument koji definiše sve urbanističke i tehničke uslove za izgradnju.",
    href: null,
  },
  {
    num: "04",
    title: "Projekat za građevinsku dozvolu (PGD)",
    description:
      "Završna faza izrade tehničke dokumentacije. PGD se podnosi uz Zahtev za izdavanje rešenja o građevinskoj dozvoli. Za objekte do 400 m² BRGP, PGD obuhvata arhitektonski deo sa svim potrebnim prikazima i opisima.",
    href: "/projektovanje/pgd",
  },
  {
    num: "05",
    title: "Ishodovanje rešenja o građevinskoj dozvoli",
    description:
      "Objedinjena procedura pred nadležnim lokalnim organom uprave. Nakon dobijanja Rešenja o građevinskoj dozvoli, može da počne legalna izgradnja objekta.",
    href: null,
  },
  {
    num: "06",
    title: "Prijava radova i izgradnja",
    description:
      "Pre početka radova obavezno se prijavljuje gradilište. Tokom izgradnje vrši se stručni tehnički nadzor koji osigurava usklađenost izvođenja sa projektnom dokumentacijom.",
    href: "/inzenjering-i-nadzor",
  },
  {
    num: "07",
    title: "Tehnički prijem i upotrebna dozvola",
    description:
      "Po završetku gradnje vrši se tehnički pregled objekta. Nakon pozitivnog izveštaja komisije za tehnički pregled, izdaje se upotrebna dozvola koja je uslov za prijavu objekta i legalno korišćenje.",
    href: null,
  },
];

export default function ProjektovanjePage() {
  return (
    <>
      <PageHero
        title="Projektovanje"
        subtitle={'Izrada tehničke dokumentacije za porodične stambene objekte kategorije \u201eA\u201c je sistemski proces koji počinje od investitorovih zahteva i završava se ishodovanjem građevinske dozvole. PB Architect vas vodi kroz svaku fazu.'}
        breadcrumbs={[{ label: "Početna", href: "/" }, { label: "Projektovanje" }]}
      />

      {/* Izgradnja korak po korak */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Procedura izgradnje
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[#1a1a1a] md:text-4xl">
              Izgradnja korak po korak
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#c4a84f] bg-white">
                    <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#c4a84f]">
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#e0ddd8]" style={{ minHeight: "3rem" }} />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1a1a1a]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#6b6b6b]">
                    {step.description}
                  </p>
                  {step.href && (
                    <Link
                      href={step.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#c4a84f] transition-opacity hover:opacity-70"
                    >
                      Detalji
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-[#f8f7f4] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Oblasti projektovanja
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[#1a1a1a] md:text-4xl">
              Šta projektujemo
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((s) => (
              <SubServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
