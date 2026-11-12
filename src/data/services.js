import creationImg from "@/assets/images/creation-jardin.jpg";
import entretienImg from "@/assets/images/entretien-taille.jpg";

// Les deux pôles d’activité, chacun avec ses prestations.
export const servicePoles = [
  {
    slug: "creation-amenagement",
    title: "Création & aménagement",
    intro:
      "De l’esquisse à la dernière plantation, nous dessinons et réalisons un jardin qui vous ressemble, pensé pour durer.",
    image: creationImg,
    imageAlt: "Maison contemporaine entourée d’une pelouse et d’un grand arbre au crépuscule",
    services: [
      "Création de jardins",
      "Terrasses & allées",
      "Clôtures",
      "Arrosage automatique",
      "Engazonnement",
    ],
  },
  {
    slug: "entretien",
    title: "Entretien de jardin",
    intro:
      "Un jardin soigné toute l’année, sans y penser : nous intervenons ponctuellement ou dans le cadre d’un contrat d’entretien.",
    image: entretienImg,
    imageAlt: "Mains gantées taillant un conifère au sécateur",
    services: [
      "Tonte & soin des pelouses",
      "Taille de haies",
      "Contrats d’entretien à l’année",
      "Élagage & abattage",
    ],
  },
];
