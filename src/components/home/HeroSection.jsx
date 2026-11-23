import ButtonLink from "@/components/ui/ButtonLink";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-900">
      <HeroCarousel
        actions={
          <>
            <ButtonLink href="/contact">Demander un devis gratuit</ButtonLink>
            <ButtonLink href="/realisations" variant="outlineLight">
              Voir nos réalisations
            </ButtonLink>
          </>
        }
      />

      {/* Voiles verts pour garantir la lisibilité du texte sur la photo
          (placés après le carrousel : ils couvrent les photos, pas le texte) */}
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
        className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-forest-950/85 via-forest-950/40 to-transparent"
      />
    </section>
  );
}
