import { servicePoles } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicePoleCard from "./ServicePoleCard";

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="Nos savoir-faire"
          title="Créer, aménager, entretenir."
          intro="Que vous partiez d’un terrain nu ou que vous souhaitiez redonner vie à un jardin existant, nous vous accompagnons sur l’ensemble du projet."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {servicePoles.map((pole) => (
            <ServicePoleCard key={pole.slug} pole={pole} />
          ))}
        </div>
      </div>
    </section>
  );
}
