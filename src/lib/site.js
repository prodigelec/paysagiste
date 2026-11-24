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
  smsHref: "sms:+33785935315",
  whatsappHref: "https://wa.me/33785935315",
  hours: "de 8 h à 19 h", // réponse du client au questionnaire
  closures: "fermé en août et pendant les fêtes de fin d’année",
  url: "https://www.tellier-paysage.fr", // domaine souhaité par le client : à réserver
  departments: ["Eure-et-Loir (28)", "Yvelines (78)"],
  // Déclaration services à la personne acceptée : active le bloc « crédit d'impôt 50 % ».
  servicesALaPersonne: true,
  sapNumber: "", // numéro de déclaration SAP : à fournir par le client
  serviceRadiusKm: 30,
};

export const navLinks = [
  { href: "/creation-amenagement", label: "Création" },
  { href: "/entretien", label: "Entretien" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/votre-projet", label: "Votre projet" },
  { href: "/a-propos", label: "À propos" },
];
