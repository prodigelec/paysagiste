import SectionHeading from "./SectionHeading";
import ServiceDetailBlock from "./ServiceDetailBlock";

// Liste détaillée des prestations d’une page (photos alternées gauche / droite).
export default function ServiceDetailsSection({ id, eyebrow, title, intro, services }) {
  return (
    <section aria-labelledby={id} className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ServiceDetailBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
