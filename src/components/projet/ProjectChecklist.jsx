import { projectChecklist } from "@/data/projet";
import SectionHeading from "@/components/ui/SectionHeading";

// Ce qu’il est utile de préparer avant de demander un devis.
export default function ProjectChecklist() {
  return (
    <section aria-labelledby="preparer-title" className="bg-forest-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="preparer-title"
          dark
          eyebrow="Avant de nous contacter"
          title="Ce qui nous aide à bien préparer votre devis."
          intro="Rien d’obligatoire : plus nous en savons, plus notre proposition sera juste dès la première visite."
        />
        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectChecklist.map((item) => (
            <li key={item.title} className="border-t border-forest-700 pt-6">
              <h3 className="text-2xl text-on-dark">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-on-dark-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
