import creationImg from "@/assets/images/prestations/creation-massif.jpg";
import terrasseImg from "@/assets/images/prestations/terrasse-bois.jpg";
import maconnerieImg from "@/assets/images/prestations/maconnerie-muret.jpg";
import gazonImg from "@/assets/images/prestations/engazonnement-rouleau.jpg";
import haieImg from "@/assets/images/prestations/taille-haie.jpg";
import bassinImg from "@/assets/images/prestations/bassin.jpg";
import entretienImg from "@/assets/images/prestations/entretien-jardinier.jpg";

// Diapositives du hero : une prestation par photo, avec son titre et son texte.
// Photos d’illustration (Unsplash) à remplacer par celles des chantiers du client.
export const heroSlides = [
  {
    label: "Création de jardins",
    title: "Des jardins pensés pour être vécus.",
    text: "Création de jardins et de massifs sur mesure, du premier croquis à la dernière plantation.",
    image: creationImg,
    alt: "Massif fleuri et pas japonais au milieu d’une pelouse",
  },
  {
    label: "Terrasses & allées",
    title: "Des terrasses faites pour durer.",
    text: "Bois, pierre ou pavés : des terrasses et des allées posées avec soin, qui prolongent la maison vers le jardin.",
    image: terrasseImg,
    alt: "Terrasse en bois bordée d’un muret de pierres sèches et de végétaux",
  },
  {
    label: "Maçonnerie paysagère",
    title: "La pierre au service du jardin.",
    text: "Murets, bordures, escaliers et soutènements qui structurent le terrain et lui donnent du caractère.",
    image: maconnerieImg,
    alt: "Mur en pierre avec niches fleuries surmonté d’une pergola végétalisée",
  },
  {
    label: "Engazonnement",
    title: "Une pelouse dense, dès la première saison.",
    text: "Préparation du sol, semis ou gazon en rouleau pour un tapis vert qui s’installe vite et dure.",
    image: gazonImg,
    alt: "Mains posant un rouleau de gazon frais sur la terre",
  },
  {
    label: "Taille de haies",
    title: "Des haies nettes, toute l’année.",
    text: "Taille régulière et soignée de vos haies et arbustes, avec évacuation des déchets verts.",
    image: haieImg,
    alt: "Taille-haie égalisant un arbuste persistant",
  },
  {
    label: "Bassins & éclairage",
    title: "L’eau, cœur vivant du jardin.",
    text: "Bassins et points d’eau intégrés au paysage, mis en valeur par un éclairage extérieur.",
    image: bassinImg,
    alt: "Bassin de jardin entouré de plantes aquatiques et d’une terrasse en bois",
  },
  {
    label: "Entretien de jardin",
    title: "Un jardin soigné, sans y penser.",
    text: "Tonte, taille et soins de saison, ponctuellement ou en contrat à l’année, avec 50 % de crédit d’impôt.",
    image: entretienImg,
    alt: "Jardiniers en tenue de travail poussant une brouette sur une pelouse",
  },
];
