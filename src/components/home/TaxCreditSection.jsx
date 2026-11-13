import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Affiché uniquement si la société est déclarée en services à la personne.
// Présente le dispositif, sans aucun prix ni montant chiffré.
export default function TaxCreditSection() {
  if (!siteConfig.servicesALaPersonne) return null;

  return (
    <section aria-labelledby="credit-title" className="bg-cream-100 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[auto_1fr_auto] lg:gap-16">
        <p className="font-serif text-7xl leading-none text-brass-dark md:text-8xl" aria-hidden="true">
          50 %
        </p>
        <div>
          <h2 id="credit-title" className="text-3xl text-forest-900 md:text-4xl">
            L’entretien de votre jardin ouvre droit à un crédit d’impôt de 50 %.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Tonte, taille de haies, désherbage… Les petits travaux de jardinage chez les
            particuliers relèvent des services à la personne. Nous vous remettons chaque
            année l’attestation fiscale nécessaire.
          </p>
        </div>
        <Link
          href="/credit-impot"
          className="self-start border-b border-brass-dark pb-1 text-sm font-semibold tracking-wide text-brass-dark transition-colors hover:text-forest-900 lg:self-center"
        >
          Comment ça marche ?
        </Link>
      </div>
    </section>
  );
}
