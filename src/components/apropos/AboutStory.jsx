import Image from "next/image";
import storyImg from "@/assets/images/prestations/entretien-jardinier.jpg";
import { aboutStory } from "@/data/apropos";
import SectionHeading from "@/components/ui/SectionHeading";

// Histoire de l’entreprise et parcours du gérant.
export default function AboutStory() {
  return (
    <section aria-labelledby="histoire-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="histoire-title"
            eyebrow="Notre histoire"
            title="Un paysagiste indépendant, proche de chez vous."
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          {/* Photo d’illustration : à remplacer par une photo du gérant ou de son équipe */}
          <Image
            src={storyImg}
            alt="Jardinier en tenue de travail poussant une brouette sur une pelouse"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
