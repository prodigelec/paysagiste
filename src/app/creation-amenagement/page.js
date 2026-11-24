import heroImg from "@/assets/images/prestations/allee-jardin-structure.jpg";
import PageHero from "@/components/ui/PageHero";
import { CreationIntro, CreationServices, CreationFaq } from "@/components/creation";
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
      <CreationIntro />
      <CreationServices />
      <ProcessSection />
      <CreationFaq />
      <ContactCTASection />
    </>
  );
}
