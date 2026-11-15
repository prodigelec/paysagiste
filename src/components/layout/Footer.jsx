import Image from "next/image";
import Link from "next/link";
import logoComplet from "@/assets/logo/logo-complet-clair.png";
import { siteConfig, navLinks } from "@/lib/site";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-on-dark-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src={logoComplet}
            alt={`${siteConfig.name}, ${siteConfig.slogan}`}
            className="h-auto w-44"
          />
          <p className="mt-6 max-w-xs leading-relaxed">
            Création et entretien de jardins pour les particuliers en {siteConfig.departments.join(" et ")}.
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <p className="eyebrow mb-5 text-brass">Le site</p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-on-dark">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="transition-colors hover:text-on-dark">
                Contact & devis
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-5 text-brass">Contact</p>
          <ul className="space-y-3">
            <li>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-on-dark">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-on-dark">
                {siteConfig.email}
              </a>
            </li>
            <li>
              {siteConfig.postalCode} {siteConfig.city}
            </li>
            <li>Intervention en {siteConfig.departments.join(" et ")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm md:flex-row md:justify-between md:px-8">
          <p>
            © <CopyrightYear /> {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-on-dark">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-on-dark">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
