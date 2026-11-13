import Link from "next/link";

// Lien de navigation desktop avec filet laiton au survol et sur la page active.
export default function NavLink({ href, active, light, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors ${light ? "text-on-dark hover:text-brass-light" : "text-ink hover:text-brass-dark"}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-center bg-brass transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      />
    </Link>
  );
}
