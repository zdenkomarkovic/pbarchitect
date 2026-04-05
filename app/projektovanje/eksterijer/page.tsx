import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Projektovanje eksterijera",
  description:
    "Projektovanje uređenja dvorišta, parcela, vrtova, ograda, tremova i ostalih spoljnih prostora.",
});

export default function EksterijerPage() {
  return (
    <>
      <PageHero
        title="Eksterijer"
        subtitle="Spoljni prostor je produžetak vašeg objekta. Osmišljavamo uređenje dvorišta, parcela, vrtnih površina i svih pratećih elemenata eksterijera."
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Projektovanje", href: "/projektovanje" },
          { label: "Eksterijer" },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-[#6b6b6b]">
                PB Architect projektuje uređenje spoljnih prostora koji su
                funkcionalni, vizuelno privlačni i usklađeni sa karakterom
                objekta i okruženja. Svaki eksterijer je jedinstven i nastaje
                na osnovu analitičnog pristupa lokaciji, klimi i potrebama
                korisnika.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-semibold text-[#1a1a1a]">
                  Šta projektujemo
                </h2>
                <ul className="space-y-2 text-[#6b6b6b]">
                  {[
                    "Uređenje dvorišta i parcela",
                    "Vrtovi i zelene površine",
                    "Tremovi, terase i pergole",
                    "Ograde i kapije",
                    "Staze, parkirišta i popločavanja",
                    "Spoljne stepenice i rampe",
                    "Dekorativni elementi fasada",
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

            <div className="space-y-4">
              <ImagePlaceholder label="Uređeno dvorište" aspectRatio="video" />
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder label="Terasa" aspectRatio="square" />
                <ImagePlaceholder label="Vrt" aspectRatio="square" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
