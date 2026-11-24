import heroImg from "@/assets/images/prestations/pelouse-entretenue.jpg";
import { entretienIntro, entretienServices, entretienFaq } from "@/data/entretien";
import PageHero from "@/components/ui/PageHero";
import PageIntro from "@/components/ui/PageIntro";
import ServiceDetailsSection from "@/components/ui/ServiceDetailsSection";
import FaqSection from "@/components/ui/FaqSection";
import EntretienSeasons from "@/components/entretien/EntretienSeasons";
import { TaxCreditSection, ContactCTASection } from "@/components/home";

export const metadata = {
  title: "Entretien de jardin à Broué (28) · 50 % de crédit d’impôt",
  description:
    "Tonte, taille de haies, contrats d’entretien à l’année, entretien de piscine et évacuation des déchets verts autour de Broué, Dreux et Houdan. 50 % de crédit d’impôt sur l’entretien du jardin.",
  alternates: { canonical: "/entretien" },
};

export default function EntretienPage() {
  return (
    <>
      <PageHero
        eyebrow="Entretien de jardin"
        title="Entretien de jardin en Eure-et-Loir et Yvelines."
        intro="Tonte, taille, soins de saison et entretien de piscine, ponctuellement ou à l’année. Profitez de votre jardin, nous nous occupons du reste."
        image={heroImg}
        imageAlt="Grande pelouse soignée bordée d’arbustes taillés en boule"
        breadcrumb="Entretien"
        devis="entretien"
      />
      <PageIntro
        id="entretien-intro-title"
        eyebrow="Notre engagement"
        title="Un jardin soigné toute l’année, sans y penser."
        {...entretienIntro}
      />
      <TaxCreditSection />
      <ServiceDetailsSection
        id="entretien-services-title"
        eyebrow="Nos prestations"
        title="Tout l’entretien de votre extérieur."
        intro="Combinez librement ces prestations, en intervention ponctuelle ou dans le cadre d’un contrat à l’année."
        services={entretienServices}
        devis="entretien"
      />
      <EntretienSeasons />
      <FaqSection id="entretien-faq-title" title="Vos questions sur l’entretien de jardin." items={entretienFaq} />
      <ContactCTASection />
    </>
  );
}
