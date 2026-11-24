import heroImg from "@/assets/images/creation-jardin.jpg";
import { projectFaq } from "@/data/projet";
import PageHero from "@/components/ui/PageHero";
import FaqSection from "@/components/ui/FaqSection";
import ProjectSteps from "@/components/projet/ProjectSteps";
import ProjectChecklist from "@/components/projet/ProjectChecklist";
import ProjectContact from "@/components/projet/ProjectContact";
import { CommitmentsSection } from "@/components/home";

export const metadata = {
  title: "Votre projet de jardin, étape par étape",
  description:
    "Visite gratuite, devis détaillé sous 5 jours, chantier soigné et suivi : découvrez comment se déroule votre projet de jardin avec Tellier Paysage, paysagiste à Broué (28).",
  alternates: { canonical: "/votre-projet" },
};

export default function VotreProjetPage() {
  return (
    <>
      <PageHero
        eyebrow="Votre projet"
        title="Votre projet de jardin, du premier appel au jardin terminé."
        intro="Visite offerte, devis détaillé sous 5 jours, chantier soigné et suivi dans le temps : voici comment nous travaillons ensemble."
        image={heroImg}
        imageAlt="Maison contemporaine entourée d’une pelouse et d’un grand arbre au crépuscule"
        breadcrumb="Votre projet"
        devis
      />
      <CommitmentsSection />
      <ProjectSteps />
      <ProjectChecklist />
      <FaqSection id="projet-faq-title" title="Vos questions avant de vous lancer." items={projectFaq} />
      <ProjectContact />
    </>
  );
}
