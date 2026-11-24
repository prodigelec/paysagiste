import heroImg from "@/assets/images/apropos-mains-terre.jpg";
import PageHero from "@/components/ui/PageHero";
import AboutStory from "@/components/apropos/AboutStory";
import AboutFacts from "@/components/apropos/AboutFacts";
import AboutValues from "@/components/apropos/AboutValues";
import { ZonesSection, ContactCTASection } from "@/components/home";

export const metadata = {
  title: "À propos · Paysagiste indépendant à Broué (28)",
  description:
    "Tellier Paysage, paysagiste indépendant installé à Broué (28) : cinq ans d’expérience, un seul interlocuteur et un travail soigné pour vos jardins en Eure-et-Loir et Yvelines.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Tellier Paysage, créateur d’espaces naturels."
        intro="Un paysagiste indépendant installé à Broué, qui conçoit, réalise et entretient des jardins pensés pour être vécus."
        image={heroImg}
        imageAlt="Mains plantant de jeunes pousses dans une terre fraîchement travaillée"
        breadcrumb="À propos"
        devis
      />
      <AboutStory />
      <AboutFacts />
      <AboutValues />
      <ZonesSection />
      <ContactCTASection />
    </>
  );
}
