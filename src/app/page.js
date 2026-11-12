import {
  HeroSection,
  CommitmentsSection,
  ServicesSection,
  AboutSection,
  ProcessSection,
  RealisationsSection,
  TaxCreditSection,
  ZonesSection,
  ContactCTASection,
} from "@/components/home";

export const metadata = {
  title: {
    absolute: "Paysagiste en Eure-et-Loir (28) et Yvelines (78) · Création et entretien de jardins",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommitmentsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <RealisationsSection />
      <TaxCreditSection />
      <ZonesSection />
      <ContactCTASection />
    </main>
  );
}
