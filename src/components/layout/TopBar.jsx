import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Fine barre d'informations au-dessus de la navigation principale.
export default function TopBar() {
  return (
    <div className="bg-forest-950 text-on-dark-muted">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-5 text-xs tracking-wide md:px-8">
        <p className="flex items-center gap-3">
          <a href={siteConfig.phoneHref} className="font-semibold text-on-dark transition-colors hover:text-brass-light">
            {siteConfig.phone}
          </a>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Eure-et-Loir & Yvelines</span>
        </p>
        <Link href="/contact" className="font-semibold text-brass-light transition-colors hover:text-on-dark">
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
