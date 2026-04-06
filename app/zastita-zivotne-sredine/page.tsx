import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Zaštita životne sredine",
  description:
    "Studije procene uticaja na životnu sredinu, dokumentacija za upravljanje otpadom i planovi zaštite za industrijska postrojenja.",
});

const docs = [
  {
    title: "Studija o proceni uticaja na životnu sredinu",
    body: "Izrada studije koja procenjuje potencijalne uticaje planiranog objekta ili aktivnosti na okolinu, u skladu sa zakonskim zahtevima i procedurama javnog uvida.",
  },
  {
    title: "Projektna dokumentacija za zaštitu životne sredine",
    body: "Tehnička dokumentacija kojom se definišu mere i uslovi zaštite životne sredine pri projektovanju i izgradnji objekata.",
  },
  {
    title: "Dokumenta za upravljanje otpadom",
    body: "Planovi upravljanja otpadom za privredne subjekte i postrojenja, u skladu sa propisima o upravljanju otpadom.",
  },
  {
    title: "Plan zaštite od požara",
    body: "Dokumentacija i planovi zaštite od požara za industrijska i druga rizična radna okruženja, usklađeni sa važećim propisima o zaštiti od požara.",
  },
];

export default function ZastitaPage() {
  return (
    <>
      <PageHero
        title="Zaštita životne sredine"
        subtitle="Usklađenost sa propisima o životnoj sredini nije samo obaveza — to je odgovornost prema zajednici i budućim generacijama."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Zaštita životne sredine" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect izrađuje svu potrebnu dokumentaciju iz oblasti
                zaštite životne sredine za privredne subjekte, investitore i
                javne institucije. Naše usluge pokrivaju kompletan spektar
                obaveza propisanih zakonodavstvom u oblasti zaštite okoline.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Posebno iskustvo imamo u izradi dokumentacije za industrijska
                postrojenja, objekte sa povećanim rizikom po životnu sredinu i
                objekte u zoni zaštićenih područja.
              </p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src="/zastita.webp" alt="Zaštita životne sredine" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {docs.map((doc) => (
              <div
                key={doc.title}
                className="border border-[#e0ddd8] bg-[#f8f7f4] p-6"
              >
                <div className="mb-3 h-1 w-8 bg-[#c4a84f]" />
                <h3 className="font-[family-name:var(--font-heading)] mb-3 text-lg font-semibold text-[#1a1a1a]">
                  {doc.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">
                  {doc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
