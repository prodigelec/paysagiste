"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className="min-h-11 cursor-pointer rounded-full border border-forest-900 px-5 text-sm font-semibold text-forest-900"
      >
        {open ? "Fermer" : "Menu"}
      </button>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-20 border-b border-sand bg-cream-50 px-5 pb-8 pt-4 shadow-lg"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-sand/70">
                <Link
                  href={link.href}
                  onClick={close}
                  className="block py-4 font-serif text-2xl text-forest-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-forest-900 text-sm font-semibold text-on-dark"
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </div>
  );
}
