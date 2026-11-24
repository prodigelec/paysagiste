import tonteImg from "@/assets/images/prestations/tonte-pelouse.jpg";
import haieImg from "@/assets/images/prestations/taille-haie.jpg";
import contratImg from "@/assets/images/entretien-taille.jpg";
import piscineImg from "@/assets/images/prestations/piscine-jardin.jpg";
import dechetsImg from "@/assets/images/prestations/entretien-jardinier.jpg";

// Contenus de la page « Entretien de jardin ».
// Photos d’illustration (Unsplash) à remplacer par celles des chantiers du client.
export const entretienIntro = {
  paragraphs: [
    "Un beau jardin demande des soins réguliers, au bon moment de l’année. Nous intervenons ponctuellement, pour une remise en état ou une taille de saison, ou tout au long de l’année dans le cadre d’un contrat d’entretien.",
    "Vous profitez de votre extérieur sans y consacrer vos week-ends : nous nous occupons de tout, jusqu’à l’évacuation des déchets verts.",
  ],
  points: [
    { title: "Ponctuel ou à l’année", text: "Une intervention unique ou un suivi régulier, selon vos besoins et la saison." },
    { title: "Un seul interlocuteur", text: "La même personne connaît votre jardin et en prend soin au fil des passages." },
    { title: "Un chantier propre", text: "Les déchets verts sont ramassés et évacués à chaque intervention." },
  ],
};

export const entretienServices = [
  {
    id: "tonte",
    title: "Tonte & soin des pelouses",
    text: "Une pelouse dense et régulière se construit tout au long de la saison. Nous assurons la tonte à la bonne fréquence, les finitions des bordures et les soins qui gardent votre gazon en bonne santé.",
    details: ["Tonte régulière", "Finitions et bordures", "Scarification et regarnissage", "Ramassage des feuilles"],
    image: tonteImg,
    alt: "Jardiniers tondant une grande pelouse bordée d’arbustes",
  },
  {
    id: "haies",
    title: "Taille de haies & arbustes",
    text: "Une taille faite au bon moment garde vos haies denses, nettes et en bonne santé. Nous taillons haies, arbustes et massifs en respectant la forme et le rythme de chaque végétal.",
    details: ["Taille de haies", "Taille d’arbustes et de massifs", "Mise en forme", "Désherbage des massifs"],
    image: haieImg,
    alt: "Taille-haie égalisant un arbuste persistant",
  },
  {
    id: "contrat",
    title: "Contrats d’entretien à l’année",
    text: "Avec un contrat à l’année, votre jardin est suivi saison après saison, sans que vous ayez à y penser. Nous définissons ensemble la fréquence des passages et les travaux à prévoir, puis nous nous occupons de tout.",
    details: ["Passages planifiés", "Travaux adaptés à chaque saison", "Suivi par la même personne", "Attestation fiscale annuelle"],
    image: contratImg,
    alt: "Mains gantées taillant un conifère au sécateur",
  },
  {
    id: "piscine",
    title: "Entretien de piscine",
    text: "Profitez d’une eau claire tout l’été. Nous assurons l’entretien courant de votre piscine, ainsi que sa mise en route au printemps et son hivernage à l’automne.",
    details: ["Nettoyage du bassin", "Contrôle de l’eau", "Mise en route de saison", "Hivernage"],
    devis: "piscine",
    image: piscineImg,
    imagePosition: "object-[center_85%]", // photo verticale : cadrer sur le bassin
    alt: "Piscine bordée de végétation et d’un arbre au feuillage rouge",
  },
  {
    id: "dechets",
    title: "Évacuation des déchets verts",
    text: "Tontes, tailles, feuilles mortes : nous ramassons et évacuons les déchets verts à chaque intervention. Vous n’avez rien à stocker ni à transporter en déchetterie.",
    details: ["Ramassage soigné", "Évacuation après chaque passage", "Nettoyage des allées et terrasses", "Aucun trajet en déchetterie"],
    image: dechetsImg,
    alt: "Jardiniers en tenue de travail poussant une brouette sur une pelouse",
  },
];

// Calendrier indicatif des travaux d’entretien.
export const entretienSeasons = [
  { season: "Printemps", tasks: ["Reprise des tontes", "Scarification et regarnissage", "Taille des arbustes à floraison estivale", "Désherbage des massifs"] },
  { season: "Été", tasks: ["Tontes régulières", "Taille des haies", "Entretien de la piscine", "Surveillance des plantations"] },
  { season: "Automne", tasks: ["Ramassage des feuilles", "Taille de fin de saison", "Dernières tontes", "Hivernage de la piscine"] },
  { season: "Hiver", tasks: ["Taille des arbres et arbustes en repos", "Nettoyage du jardin", "Protection des végétaux fragiles", "Préparation de la saison"] },
];

export const entretienFaq = [
  {
    question: "Comment fonctionne le crédit d’impôt de 50 % ?",
    answer: "Les petits travaux de jardinage chez les particuliers (tonte, taille de haies, désherbage, évacuation des déchets qui en sont issus…) ouvrent droit à un crédit d’impôt de 50 % des sommes versées, dans la limite du plafond fixé par la loi. Chaque année, nous vous remettons l’attestation fiscale à joindre à votre déclaration de revenus.",
  },
  {
    question: "Faut-il être imposable pour en bénéficier ?",
    answer: "Non. Il s’agit d’un crédit d’impôt : si son montant dépasse votre impôt, ou si vous n’êtes pas imposable, la différence vous est remboursée par l’administration fiscale.",
  },
  {
    question: "L’entretien de piscine ouvre-t-il droit au crédit d’impôt ?",
    answer: "Non. Le crédit d’impôt concerne uniquement les petits travaux de jardinage. L’entretien de piscine est facturé séparément et n’y ouvre pas droit.",
  },
  {
    question: "Dois-je être présent lors des passages ?",
    answer: "Ce n’est pas nécessaire si le jardin est accessible. Nous convenons ensemble des modalités d’accès lors de la mise en place de l’entretien.",
  },
  {
    question: "À quelle fréquence passez-vous ?",
    answer: "Elle dépend de votre jardin et de la saison : plus fréquente au printemps et en été pour la tonte, plus espacée en hiver. Nous l’ajustons ensemble lors de la visite.",
  },
];
