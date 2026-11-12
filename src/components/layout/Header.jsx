import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";
import ButtonLink from "@/components/ui/ButtonLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        {/* Logo provisoire en attendant celui du client */}
        <Link href="/" className="flex flex-col leading-none" aria-label={`${siteConfig.name}, accueil`}>
          <span className="font-serif text-2xl font-semibold text-forest-900">{siteConfig.name}</span>
          <span className="eyebrow mt-1 !text-[0.6rem] text-brass-dark">Paysagiste · 28 & 78</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-brass-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="forest">
            Demander un devis
          </ButtonLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
