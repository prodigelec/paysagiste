import Image from "next/image";
import sapLogo from "@/assets/logo/services-a-la-personne.png";
import { siteConfig } from "@/lib/site";

// Logo officiel « Services à la personne », avec le numéro de déclaration s’il est connu.
// N’apparaît que si l’entreprise est déclarée (siteConfig.servicesALaPersonne).
export default function SapBadge({ className = "w-28", numberClassName = "" }) {
  if (!siteConfig.servicesALaPersonne) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={sapLogo}
        alt="Entreprise déclarée Services à la personne"
        sizes="160px"
        className={`h-auto ${className}`}
      />
      {siteConfig.sapNumber && (
        <p className={`text-xs ${numberClassName}`}>Déclaration n° {siteConfig.sapNumber}</p>
      )}
    </div>
  );
}
