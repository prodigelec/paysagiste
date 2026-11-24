import { entretienSeasons } from "@/data/entretien";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { devisHref } from "@/lib/site";

// Calendrier des travaux d’entretien, saison par saison.
export default function EntretienSeasons() {
  return (
    <section aria-labelledby="saisons-title" className="bg-forest-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="saisons-title"
          dark
          eyebrow="Au fil des saisons"
          title="Chaque saison, les bons gestes au bon moment."
          intro="Un calendrier indicatif de ce que nous prévoyons pour votre jardin tout au long de l’année, ajusté selon vos végétaux et la météo."
        />
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {entretienSeasons.map((item) => (
            <li key={item.season} className="border-t border-forest-700 pt-8">
              <h3 className="text-3xl text-brass">{item.season}</h3>
              <ul className="mt-5 space-y-3">
                {item.tasks.map((task) => (
                  <li key={task} className="flex items-baseline gap-3 leading-relaxed text-on-dark-muted">
                    <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.25em] bg-brass" />
                    {task}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <ButtonLink href={devisHref("entretien")}>Mettre en place un contrat d’entretien</ButtonLink>
        </div>
      </div>
    </section>
  );
}
