import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import emblemeClair from "@/assets/logo/embleme-clair.png";
import emblemeFonce from "@/assets/logo/embleme-fonce.png";

// Emblème du logo Tellier Paysage + nom en texte (net à toutes les tailles).
// Version claire sur fond sombre, version foncée sur fond crème.
export default function Logo({ light = false }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name}, accueil`} className="flex items-center gap-3">
      <Image
        src={light ? emblemeClair : emblemeFonce}
        alt=""
        priority
        className="h-12 w-auto xl:h-14"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-2xl font-medium uppercase tracking-[0.2em] transition-colors xl:text-[1.7rem] ${light ? "text-on-dark" : "text-forest-950"}`}
        >
          Tellier
        </span>
        <span className="mt-1.5 flex items-center gap-2" aria-hidden="true">
          <span className={`h-px w-4 ${light ? "bg-olive-light" : "bg-olive"}`} />
          <span
            className={`text-[0.8rem] font-bold uppercase tracking-[0.36em] xl:text-[0.85rem] ${light ? "text-on-dark [text-shadow:0_1px_8px_rgb(0_0_0/0.7)]" : "text-olive"}`}
          >
            Paysage
          </span>
          <span className={`h-px w-4 ${light ? "bg-olive-light" : "bg-olive"}`} />
        </span>
      </span>
    </Link>
  );
}
