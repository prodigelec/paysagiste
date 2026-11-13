"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function MobileMenu({ light = false }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Échap referme le menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const buttonColors = light
    ? "border-on-dark/70 text-on-dark"
    : "border-forest-900 text-forest-900";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm font-semibold transition-colors ${buttonColors}`}
      >
        {open ? "Fermer" : "Menu"}
      </button>

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-b border-sand bg-cream-50 px-5 pb-8 pt-2 shadow-lg"
        >
          <ul className="flex flex-col">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
              <li key={link.href} className="border-b border-sand/70">
                <Link href={link.href} onClick={close} className="block py-4 font-serif text-2xl text-forest-900">
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
            Demander un devis gratuit
          </Link>
        </div>
      )}
    </>
  );
}
