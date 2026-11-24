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
    absolute: "Tellier Paysage · Paysagiste à Broué, Eure-et-Loir (28) et Yvelines (78)",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommitmentsSection />
      <ServicesSection />
      <TaxCreditSection />
      <AboutSection />
      <ProcessSection />
      <RealisationsSection />
      <ZonesSection />
      <ContactCTASection />
    </main>
  );
}
