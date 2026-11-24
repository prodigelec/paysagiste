import SectionHeading from "./SectionHeading";

// Questions fréquentes en accordéon natif (<details>) : accessible, sans JavaScript.
export default function FaqSection({ id, title, items }) {
  return (
    <section aria-labelledby={id} className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <SectionHeading id={id} eyebrow="Questions fréquentes" title={title} />
        <div className="border-t border-sand">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-sand py-6">
              <summary className="cursor-pointer list-none text-xl text-forest-900 transition-colors hover:text-brass-dark md:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="font-serif">{item.question}</span>
                <span className="mt-1 block text-sm font-semibold tracking-wide text-brass-dark group-open:hidden">
                  Voir la réponse
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
