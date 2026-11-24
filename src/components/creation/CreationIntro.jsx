import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  { title: "Un projet sur mesure", text: "Chaque jardin part de votre terrain, de vos envies et de votre façon de vivre dehors." },
  { title: "Des choix durables", text: "Matériaux solides et végétaux adaptés au sol et au climat d’Eure-et-Loir et des Yvelines." },
  { title: "Un seul interlocuteur", text: "La même personne vous accompagne de la première visite à la fin du chantier." },
];

export default function CreationIntro() {
  return (
    <section aria-labelledby="creation-intro-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <SectionHeading
            id="creation-intro-title"
            eyebrow="Notre savoir-faire"
            title="Un jardin qui vous ressemble, pensé pour durer."
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Que vous partiez d’un terrain nu après une construction ou que vous souhaitiez
              transformer un jardin existant, nous vous accompagnons sur l’ensemble du projet :
              plantations, terrasses, allées, maçonnerie, clôtures et points d’eau.
            </p>
            <p>
              Notre objectif : un extérieur beau dès la fin du chantier, qui s’embellit avec les
              saisons et reste simple à entretenir.
            </p>
          </div>
        </div>

        <ul className="space-y-8 border-t border-sand pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {points.map((point) => (
            <li key={point.title}>
              <span aria-hidden="true" className="mb-4 block h-px w-10 bg-brass-dark" />
              <h3 className="text-2xl text-forest-900">{point.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
