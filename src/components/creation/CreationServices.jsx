import { creationServices } from "@/data/creation";
import SectionHeading from "@/components/ui/SectionHeading";
import CreationServiceBlock from "./CreationServiceBlock";

export default function CreationServices() {
  return (
    <section aria-labelledby="creation-services-title" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="creation-services-title"
          eyebrow="Nos prestations"
          title="Tout pour créer et aménager votre extérieur."
          intro="Chaque projet peut associer plusieurs de ces savoir-faire : nous coordonnons l’ensemble pour un résultat cohérent."
        />
        <div className="mt-20 space-y-24 md:space-y-32">
          {creationServices.map((service, index) => (
            <CreationServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
