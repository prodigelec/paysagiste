import SectionHeading from "./SectionHeading";

// Présentation d’une page : titre et paragraphes à gauche, points forts à droite.
export default function PageIntro({ id, eyebrow, title, paragraphs, points }) {
  return (
    <section aria-labelledby={id} className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
