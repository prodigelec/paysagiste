import heroImg from "@/assets/images/prestations/allee-jardin-structure.jpg";
import { creationIntro, creationServices, creationFaq } from "@/data/creation";
import PageHero from "@/components/ui/PageHero";
import PageIntro from "@/components/ui/PageIntro";
import ServiceDetailsSection from "@/components/ui/ServiceDetailsSection";
import FaqSection from "@/components/ui/FaqSection";
import { ProcessSection, ContactCTASection } from "@/components/home";

export const metadata = {
  title: "Création et aménagement de jardins à Broué (28)",
  description:
    "Création de jardins, terrasses, allées, maçonnerie paysagère, clôtures, bassins et engazonnement autour de Broué, Dreux et Houdan, en Eure-et-Loir et Yvelines. Devis gratuit.",
  alternates: { canonical: "/creation-amenagement" },
};

export default function CreationPage() {
  return (
    <>
      <PageHero
        eyebrow="Création & aménagement"
        title="Création et aménagement de jardins en Eure-et-Loir et Yvelines."
        intro="De l’esquisse à la dernière plantation, nous dessinons et réalisons un jardin qui vous ressemble : plantations, terrasses, allées, maçonnerie, clôtures et bassins."
        image={heroImg}
        imageAlt="Allée pavée sinueuse entre des haies taillées et des massifs de graminées"
        breadcrumb="Création & aménagement"
      />
      <PageIntro
        id="creation-intro-title"
        eyebrow="Notre savoir-faire"
        title="Un jardin qui vous ressemble, pensé pour durer."
        {...creationIntro}
      />
      <ServiceDetailsSection
        id="creation-services-title"
        eyebrow="Nos prestations"
        title="Tout pour créer et aménager votre extérieur."
        intro="Chaque projet peut associer plusieurs de ces savoir-faire : nous coordonnons l’ensemble pour un résultat cohérent."
        services={creationServices}
      />
      <ProcessSection />
      <FaqSection id="creation-faq-title" title="Vos questions sur la création de jardin." items={creationFaq} />
      <ContactCTASection />
    </>
  );
}
