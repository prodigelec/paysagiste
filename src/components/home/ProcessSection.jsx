import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { title: "La rencontre", text: "Nous venons chez vous pour découvrir le terrain et écouter vos envies, vos usages et vos contraintes." },
  { title: "La conception", text: "Nous vous proposons un projet et un devis détaillé, ajustés ensemble jusqu’à ce qu’ils vous correspondent." },
  { title: "Le chantier", text: "Nous réalisons les travaux dans les délais annoncés, avec un chantier propre et des points réguliers." },
  { title: "Le suivi", text: "Conseils d’entretien, contrat à l’année ou interventions ponctuelles : nous restons à vos côtés." },
];

export default function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="bg-forest-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="process-title"
          dark
          eyebrow="Votre projet, étape par étape"
          title="Un accompagnement clair, du premier rendez-vous au jardin fini."
        />
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-forest-700 pt-8">
              <span className="font-serif text-5xl text-brass" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl text-on-dark">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-on-dark-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
