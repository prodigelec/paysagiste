import heroImg from "@/assets/images/apropos-mains-terre.jpg";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact et devis gratuit",
  description:
    "Demandez votre devis gratuit à Tellier Paysage, paysagiste à Broué (28) : création, aménagement et entretien de jardins en Eure-et-Loir et Yvelines. Déplacement offert.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & devis"
        title="Demandez votre devis gratuit."
        intro="Décrivez-nous votre jardin et vos envies : nous vous recontactons rapidement pour convenir d’une visite. Le déplacement est offert et le devis sans engagement."
        image={heroImg}
        imageAlt="Mains plantant de jeunes pousses dans une terre fraîchement travaillée"
        breadcrumb="Contact"
      />

      <section aria-labelledby="devis-title" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="devis-title"
              eyebrow="Votre demande"
              title="Parlez-nous de votre projet."
              intro="Quelques informations suffisent. Les photos nous aident à préparer la visite, mais elles ne sont pas obligatoires."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
