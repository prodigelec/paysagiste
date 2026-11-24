import { aboutFacts } from "@/data/apropos";

// Bandeau de chiffres clés. Le libellé (dt) précède la valeur (dd) dans le code,
// mais la valeur s’affiche au-dessus grâce à flex-col-reverse.
export default function AboutFacts() {
  return (
    <section aria-label="Tellier Paysage en quelques chiffres" className="border-y border-sand bg-cream-100">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 px-5 md:gap-x-8 md:px-8 lg:grid-cols-4">
        {aboutFacts.map((fact) => (
          <div key={fact.value} className="flex flex-col-reverse py-8 md:py-10 lg:px-6 lg:first:pl-0">
            <dt className="mt-2 text-sm leading-relaxed text-muted md:text-base">{fact.label}</dt>
            <dd className="font-serif text-4xl lining-nums text-brass-dark sm:text-5xl md:text-6xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
