import Image from "next/image";
import sapLogo from "@/assets/logo/services-a-la-personne.png";
import { siteConfig } from "@/lib/site";

// Rappel du crédit d’impôt dès l’ouverture du site.
// Formulation volontairement limitée à l’entretien : seul l’entretien y ouvre droit.
export default function HeroSapNote() {
  if (!siteConfig.servicesALaPersonne) return null;

  return (
    <p className="mt-8 inline-flex items-center gap-4 rounded-full border border-on-dark/15 bg-forest-950/45 py-2 pl-2 pr-5 text-sm text-on-dark backdrop-blur-md md:text-base">
      <Image src={sapLogo} alt="Services à la personne" sizes="48px" className="h-9 w-auto md:h-10" />
      <span>
        Entretien de jardin :{" "}
        <strong className="font-bold text-brass-light">50 % de crédit d’impôt</strong>
      </span>
    </p>
  );
}
