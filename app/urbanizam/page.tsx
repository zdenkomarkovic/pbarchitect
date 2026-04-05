import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { SubServiceCard } from "@/components/SubServiceCard";

export const metadata = buildMetadata({
  title: "Urbanizam",
  description:
    "PB Architect izrađuje urbanističke projekte, projekte parcelacije i urbanističke planove za različite investitore i lokacije.",
});

const subServices = [
  {
    title: "Urbanistički projekat (UP)",
    description:
      "Izrada urbanističkih projekata za urbanističko-arhitektonsko oblikovanje lokaliteta i ishođenje lokacijskih uslova.",
    href: "/urbanizam/urbanisticki-projekat",
  },
  {
    title: "Projekat parcelacije / preparcelacije",
    description:
      "Formiranje i reorganizacija katastarskih parcela kao uslov za kvalitetniju izgradnju i legalizaciju na datim lokalitetima.",
    href: "/urbanizam/projekat-parcelacije",
  },
  {
    title: "Urbanistički planovi",
    description:
      "Učešće u izradi planova detaljne regulacije (PDR) i ostalih planskih dokumenata na nivou jedinice lokalne samouprave.",
    href: "/urbanizam/urbanisticki-planovi",
  },
];

export default function UrbanizamPage() {
  return (
    <>
      <PageHero
        title="Urbanizam"
        subtitle="PB Architect pruža usluge urbanističkog planiranja i projektovanja — od pojedinačnih parcela do složenih urbanističkih celina."
        breadcrumbs={[{ label: "Početna", href: "/" }, { label: "Urbanizam" }]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl leading-relaxed text-[#6b6b6b]">
            U dugogodišnjoj praksi stekli smo iskustvo u samostalnoj izradi i
            učešću u izradi urbanističkih projekata za različite investitore.
            Na osnovu tako izrađenih UP vršili smo razradu lokaliteta što je
            omogućilo ishodovanje lokacijskih uslova i građevinskih dozvola, na
            osnovu kojih su izgrađeni brojni objekti. Istovremeno smo izradili
            veći broj projekata parcelacija i preparcelacija koji su stvorili
            uslove za unapređenje izgradnje na različitim lokalitetima.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Urbanističke usluge
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light text-[#1a1a1a] md:text-4xl">
              Oblasti delovanja
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {subServices.map((s) => (
              <SubServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
