import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Logo typographique provisoire, en attendant le logo du client.
export default function Logo({ light = false, centered = false }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, accueil`}
      className={`flex flex-col leading-none ${centered ? "items-center text-center" : ""}`}
    >
      <span
        className={`font-serif text-2xl font-semibold uppercase tracking-[0.12em] transition-colors md:text-[1.7rem] ${light ? "text-on-dark" : "text-forest-900"}`}
      >
        {siteConfig.name}
      </span>
      <span
        className={`eyebrow mt-1.5 !text-[0.6rem] transition-colors ${light ? "text-brass-light" : "text-brass-dark"}`}
      >
        Paysagiste · 28 & 78
      </span>
    </Link>
  );
}
