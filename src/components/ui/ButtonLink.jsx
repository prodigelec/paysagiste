import Link from "next/link";

const variants = {
  // Bouton principal : laiton sur fond sombre ou clair
  primary:
    "bg-brass text-forest-950 hover:bg-brass-light",
  // Bouton secondaire sur fond sombre
  outlineLight:
    "border border-on-dark/60 text-on-dark hover:bg-on-dark hover:text-forest-950",
  // Bouton secondaire sur fond clair
  outlineDark:
    "border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-on-dark",
  // Bouton plein vert sur fond clair
  forest:
    "bg-forest-900 text-on-dark hover:bg-forest-700",
};

export default function ButtonLink({ href, variant = "primary", className = "", children, ...props }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full px-7 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
