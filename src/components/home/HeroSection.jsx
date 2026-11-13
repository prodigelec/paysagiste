import Image from "next/image";
import heroImg from "@/assets/images/hero-allee-jardin.jpg";
import { siteConfig } from "@/lib/site";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-900">
      <Image
        src={heroImg}
        alt="Allée de jardin bordée de haies taillées et de rosiers en fleurs"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Voile vert pour garantir la lisibilité du texte sur la photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/95 via-forest-900/60 to-forest-900/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/70 via-forest-950/20 to-transparent"
      />
      {/* Assombrit le haut pour la lisibilité de la navigation transparente */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-forest-950/75 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-44 md:px-8 md:pb-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="eyebrow mb-6 text-brass-light">{siteConfig.tagline}</p>
          <h1 className="text-5xl text-on-dark sm:text-6xl lg:text-7xl">
            Des jardins pensés pour être vécus.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted md:text-xl">
            Création, aménagement et entretien de jardins pour les particuliers.
            Un travail soigné, du premier croquis à chaque saison qui suit.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Demander un devis gratuit</ButtonLink>
            <ButtonLink href="/realisations" variant="outlineLight">
              Voir nos réalisations
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
