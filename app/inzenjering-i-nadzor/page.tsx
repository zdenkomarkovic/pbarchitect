import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata = buildMetadata({
  title: "Inženjering i nadzor",
  description:
    "Stručni tehnički nadzor i upravljanje realizacijom arhitektonsko-građevinskih projekata u oblasti visokogradnje.",
});

const aspects = [
  {
    title: "Tehnički nadzor",
    body: "Pratimo svaku fazu izvođenja radova i proveravamo usklađenost sa projektnom dokumentacijom, tehničkim propisima i standardima kvaliteta.",
  },
  {
    title: "Koordinacija izvođača",
    body: "Posredujemo između investitora i izvođača, upravljamo dinamikom radova i brinemo da se svaka faza odvija prema planu.",
  },
  {
    title: "Tehnički prijem",
    body: "Organizujemo i sprovodimo postupak tehničkog pregleda objekta kao preduslov za dobijanje upotrebne dozvole.",
  },
  {
    title: "Kontrola dokumentacije",
    body: "Vodimo i proveravamo kompletnu gradilišnu dokumentaciju — dnevnike, situacije, ateste i potvrde o kvalitetu materijala.",
  },
];

export default function InzeenjeringPage() {
  return (
    <>
      <PageHero
        title="Inženjering i nadzor"
        subtitle="Od projekta do izvedenog objekta — naš tim stručnjaka prati realizaciju u svakom koraku, od postavljanja temelja do tehničkog prijema."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Inženjering i nadzor" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect pruža usluge stručnog inženjerskog nadzora nad
                izvođenjem radova u oblasti visokogradnje. Naš tim osigurava
                da se svaki objekat izgradi prema usvojenoj projektnoj
                dokumentaciji, u skladu sa važećim tehničkim propisima i
                standardima struke.
              </p>
              <p className="leading-relaxed text-[#6b6b6b]">
                Prisutnost kvalifikovanog nadzornog inženjera na gradilištu
                nije samo zakonska obaveza — to je garancija da će vaš
                objekat biti izveden kvalitetno, bezbedno i bez skupljih
                grešaka koje bi se mogle pojaviti bez stručnog oka.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aspects.map((a) => (
                  <div
                    key={a.title}
                    className="border border-[#e0ddd8] bg-[#f8f7f4] p-6"
                  >
                    <h3 className="font-[family-name:var(--font-heading)] mb-2 text-lg font-semibold text-[#1a1a1a]">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6b6b6b]">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <ImagePlaceholder label="Nadzor na gradilištu" aspectRatio="portrait" />
              <ImagePlaceholder label="Tehnički pregled" aspectRatio="video" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
