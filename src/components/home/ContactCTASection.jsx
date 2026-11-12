import Image from "next/image";
import glycineImg from "@/assets/images/allee-glycine.jpg";
import { siteConfig } from "@/lib/site";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactCTASection() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-forest-900 py-24 md:py-32">
      <Image
        src={glycineImg}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover opacity-25"
      />
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow mb-5 text-brass">Parlons de votre jardin</p>
        <h2 id="cta-title" className="text-4xl text-on-dark md:text-6xl">
          Votre projet mérite qu’on s’y attarde.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted">
          Décrivez-nous votre jardin et vos envies : nous revenons vers vous rapidement pour
          organiser une visite et établir un devis gratuit.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact">Demander un devis gratuit</ButtonLink>
          <ButtonLink href={siteConfig.phoneHref} variant="outlineLight">
            Appeler le {siteConfig.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
