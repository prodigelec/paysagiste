// Configuration centrale du site (coordonnées issues de la carte de visite).
export const siteConfig = {
  name: "Tellier Paysage",
  slogan: "Créateur d’espaces naturels",
  // Tirets insécables (‑) : « Eure-et-Loir » ne se coupe pas en fin de ligne
  tagline: "Paysagiste à Broué, en Eure‑et‑Loir et Yvelines",
  city: "Broué",
  postalCode: "28410",
  phone: "07 85 93 53 15",
  phoneHref: "tel:+33785935315",
  email: "tellier.paysage3@gmail.com",
  url: "https://www.exemple.fr", // domaine : à définir
  departments: ["Eure-et-Loir (28)", "Yvelines (78)"],
  // Afficher le bloc « crédit d'impôt 50 % » uniquement si la société est
  // déclarée en services à la personne. À confirmer avec le client.
  servicesALaPersonne: true,
};

export const navLinks = [
  { href: "/creation-amenagement", label: "Création" },
  { href: "/entretien", label: "Entretien" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/votre-projet", label: "Votre projet" },
  { href: "/a-propos", label: "À propos" },
];
