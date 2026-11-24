import { aboutValues } from "@/data/apropos";
import SectionHeading from "@/components/ui/SectionHeading";

// Valeurs et façon de travailler.
export default function AboutValues() {
  return (
    <section aria-labelledby="valeurs-title" className="bg-forest-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="valeurs-title"
          dark
          eyebrow="Notre façon de travailler"
          title="Ce qui guide chacun de nos chantiers."
        />
        <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {aboutValues.map((value, index) => (
            <li key={value.title} className="flex gap-6 border-t border-forest-700 pt-8">
              <span className="w-12 shrink-0 font-serif text-4xl leading-none text-brass" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl text-on-dark md:text-3xl">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-on-dark-muted">{value.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
