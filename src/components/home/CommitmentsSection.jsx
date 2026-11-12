// Bandeau des engagements, juste sous le hero : rassure le particulier.
const commitments = [
  { title: "Devis gratuit", text: "Visite sur place et proposition détaillée, sans engagement." },
  { title: "Un seul interlocuteur", text: "La même personne vous suit de la conception au suivi." },
  { title: "Travail soigné", text: "Chantier propre, végétaux adaptés au sol et au climat local." },
  { title: "Proche de chez vous", text: "Intervention dans tout l’Eure-et-Loir et les Yvelines." },
];

export default function CommitmentsSection() {
  return (
    <section aria-label="Nos engagements" className="border-b border-sand bg-cream-100">
      <ul className="mx-auto grid max-w-7xl gap-x-8 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {commitments.map((item) => (
          <li key={item.title} className="py-8 lg:px-6 lg:first:pl-0">
            <span aria-hidden="true" className="mb-4 block h-px w-10 bg-brass-dark" />
            <h3 className="text-2xl text-forest-900">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
