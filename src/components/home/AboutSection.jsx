import Image from "next/image";
import aboutImg from "@/assets/images/apropos-mains-terre.jpg";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

// Texte générique en attendant l’histoire et le parcours réels du gérant.
export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[4/5]">
          <Image
            src={aboutImg}
            alt="Mains plantant de jeunes pousses dans une terre fraîchement travaillée"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading
            id="about-title"
            eyebrow="Notre approche"
            title="Le goût du travail bien fait, au rythme du vivant."
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Un beau jardin ne se résume pas à une belle image le jour de la livraison.
              Il doit vieillir avec élégance, s’adapter à votre façon de vivre et rester
              simple à entretenir.
            </p>
            <p>
              C’est pourquoi nous prenons le temps de comprendre votre terrain, son
              exposition et vos envies, avant de choisir chaque matériau et chaque végétal.
            </p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/a-propos" variant="outlineDark">
              En savoir plus sur nous
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
