// Configuration centrale du site.
// TODO : remplacer les valeurs provisoires dès que le client les transmet
// (nom, logo, ville du siège, téléphone, e-mail, domaine).
export const siteConfig = {
  name: "Atelier Paysage", // nom provisoire
  tagline: "Paysagiste en Eure-et-Loir et Yvelines",
  city: "", // ville du siège : à définir
  phone: "06 00 00 00 00", // provisoire
  phoneHref: "tel:+33600000000",
  email: "contact@exemple.fr", // provisoire
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
