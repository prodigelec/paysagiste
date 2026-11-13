"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

// Liens répartis de part et d'autre du logo centré.
const leftLinks = navLinks.slice(0, 3);
const rightLinks = [...navLinks.slice(3), { href: "/contact", label: "Contact" }];

export default function MainNav({ topBar }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparente par-dessus la photo de l'accueil, crème dès qu'on défile
  // ou sur les autres pages.
  const transparent = isHome && !scrolled;

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link.href}>
        <NavLink href={link.href} active={pathname.startsWith(link.href)} light={transparent}>
          {link.label}
        </NavLink>
      </li>
    ));

  return (
    <header className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50`}>
      {/* La barre d'infos se replie au défilement */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
      >
        <div className="overflow-hidden">{topBar}</div>
      </div>

      <div
        className={`relative transition-colors duration-300 ${transparent ? "bg-transparent" : "border-b border-sand/70 bg-cream-50/95 shadow-sm backdrop-blur"}`}
      >
        <nav
          aria-label="Navigation principale"
          className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-5 md:px-8 xl:h-24 xl:grid-cols-[1fr_auto_1fr]"
        >
          <ul className="hidden items-center gap-8 xl:flex 2xl:gap-10">{renderLinks(leftLinks)}</ul>

          <div className="justify-self-start xl:justify-self-center">
            <Logo light={transparent} centered />
          </div>

          <ul className="hidden items-center justify-end gap-8 xl:flex 2xl:gap-10">{renderLinks(rightLinks)}</ul>

          <div className="justify-self-end xl:hidden">
            <MobileMenu light={transparent} />
          </div>
        </nav>
      </div>
    </header>
  );
}
