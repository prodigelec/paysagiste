import { zones } from "@/data/zones";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ZonesSection() {
  return (
    <section aria-labelledby="zones-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[2fr_3fr]">
        <SectionHeading
          id="zones-title"
          eyebrow="Zone d’intervention"
          title="Votre paysagiste en Eure-et-Loir et dans les Yvelines."
          intro="Nous intervenons chez les particuliers dans un large secteur autour de nos bases. Votre commune n’apparaît pas ? Contactez-nous, nous vous dirons si nous pouvons venir."
        />
        <div className="grid gap-10 sm:grid-cols-2">
          {zones.map((zone) => (
            <div key={zone.department}>
              <h3 className="border-b border-sand pb-4 text-2xl text-forest-900">{zone.department}</h3>
              <ul className="mt-5 space-y-3">
                {zone.cities.map((city) => (
                  <li key={city} className="text-muted">
                    Paysagiste à {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
