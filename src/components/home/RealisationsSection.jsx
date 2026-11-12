import Image from "next/image";
import glycineImg from "@/assets/images/allee-glycine.jpg";
import gazonImg from "@/assets/images/engazonnement.jpg";
import creationImg from "@/assets/images/creation-jardin.jpg";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

// TODO : remplacer ces photos d’illustration par les vraies réalisations du client.
const items = [
  { src: glycineImg, alt: "Allée en gravier sous une pergola couverte de glycine", label: "Allées & pergolas", tall: true },
  { src: gazonImg, alt: "Pelouse dense et régulière devant une terrasse contemporaine", label: "Engazonnement" },
  { src: creationImg, alt: "Jardin paysager autour d’une maison contemporaine", label: "Création de jardin" },
];

export default function RealisationsSection() {
  return (
    <section aria-labelledby="realisations-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="realisations-title"
            eyebrow="Réalisations"
            title="Des jardins qui prennent vie."
          />
          <ButtonLink href="/realisations" variant="outlineDark" className="self-start md:self-auto">
            Toutes nos réalisations
          </ButtonLink>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 md:grid-rows-2">
          {items.map((item) => (
            <li
              key={item.label}
              className={`group relative overflow-hidden rounded-sm ${item.tall ? "aspect-[4/5] md:row-span-2 md:aspect-auto" : "aspect-[3/2]"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
              <span className="absolute bottom-0 left-0 bg-forest-950/85 px-5 py-3 text-sm font-medium tracking-wide text-on-dark">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
