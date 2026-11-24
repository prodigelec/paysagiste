import { projectSteps } from "@/data/projet";
import SectionHeading from "@/components/ui/SectionHeading";

// Déroulé détaillé d’un projet, présenté en frise verticale numérotée.
export default function ProjectSteps() {
  return (
    <section aria-labelledby="etapes-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="etapes-title"
            eyebrow="Étape par étape"
            title="Comment se déroule votre projet."
            intro="Du premier appel au jardin terminé, vous savez à chaque instant où en est votre projet et ce qui vient ensuite."
          />
        </div>

        <ol className="relative border-l border-sand">
          {projectSteps.map((step, index) => (
            <li key={step.title} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-[0.4rem] top-3 h-3 w-3 rounded-full border-2 border-cream-50 bg-brass-dark"
              />
              <p className="font-serif text-4xl leading-none text-brass-dark" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl text-forest-900 md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
