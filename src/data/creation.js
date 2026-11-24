import creationImg from "@/assets/images/prestations/creation-massif.jpg";
import terrasseImg from "@/assets/images/prestations/terrasse-bois.jpg";
import maconnerieImg from "@/assets/images/prestations/maconnerie-muret.jpg";
import clotureImg from "@/assets/images/prestations/cloture-bois.jpg";
import bassinImg from "@/assets/images/prestations/bassin.jpg";
import gazonImg from "@/assets/images/prestations/engazonnement-rouleau.jpg";

// Contenus de la page « Création & aménagement ».
export const creationIntro = {
  paragraphs: [
    "Que vous partiez d’un terrain nu après une construction ou que vous souhaitiez transformer un jardin existant, nous vous accompagnons sur l’ensemble du projet : plantations, terrasses, allées, maçonnerie, clôtures et points d’eau.",
    "Notre objectif : un extérieur beau dès la fin du chantier, qui s’embellit avec les saisons et reste simple à entretenir.",
  ],
  points: [
    { title: "Un projet sur mesure", text: "Chaque jardin part de votre terrain, de vos envies et de votre façon de vivre dehors." },
    { title: "Des choix durables", text: "Matériaux solides et végétaux adaptés au sol et au climat d’Eure-et-Loir et des Yvelines." },
    { title: "Un seul interlocuteur", text: "La même personne vous accompagne de la première visite à la fin du chantier." },
  ],
};

// Prestations détaillées.
// Photos d’illustration (Unsplash) à remplacer par celles des chantiers du client.
export const creationServices = [
  {
    id: "jardins",
    title: "Création de jardins & plantations",
    text: "Nous imaginons avec vous un jardin à votre image, adapté à votre terrain, à son exposition et au temps que vous souhaitez lui consacrer. Massifs, haies, arbres et arbustes sont choisis pour leur tenue dans le temps et leur adaptation au sol et au climat local.",
    details: ["Conception sur mesure", "Massifs et plates-bandes", "Plantation d’arbres et de haies", "Jardins faciles à entretenir"],
    image: creationImg,
    alt: "Massif fleuri traversé de pas japonais au milieu d’une pelouse",
  },
  {
    id: "terrasses",
    title: "Terrasses & allées",
    text: "Une terrasse bien pensée prolonge la maison vers le jardin. Nous réalisons terrasses et allées en bois, en pierre ou en pavés, sur une préparation de sol soignée pour qu’elles restent stables et belles au fil des années.",
    details: ["Terrasses en bois ou en pierre", "Allées et cheminements", "Pas japonais et bordures", "Préparation et drainage du sol"],
    image: terrasseImg,
    alt: "Terrasse en bois bordée d’un muret de pierres sèches",
  },
  {
    id: "maconnerie",
    title: "Maçonnerie paysagère",
    text: "Murets, escaliers, bordures ou soutènements : la pierre structure le jardin, gère les dénivelés et lui donne du caractère. Chaque ouvrage est pensé pour s’intégrer naturellement au paysage existant.",
    details: ["Murets et murs de soutènement", "Escaliers extérieurs", "Bordures et emmarchements", "Pierre naturelle ou reconstituée"],
    image: maconnerieImg,
    alt: "Mur en pierre avec niches fleuries sous une pergola végétalisée",
  },
  {
    id: "clotures",
    title: "Clôtures & portails",
    text: "Pour délimiter votre terrain, préserver votre intimité ou sécuriser l’accès, nous posons clôtures et portails en harmonie avec votre maison et votre jardin, en bois, en métal ou associés à une haie.",
    details: ["Clôtures bois et panneaux", "Clôtures grillagées", "Portails et portillons", "Brise-vue et occultation"],
    image: clotureImg,
    alt: "Clôture en bois avec portillon au bord d’un jardin arboré",
  },
  {
    id: "bassins",
    title: "Bassins & éclairage extérieur",
    text: "Un point d’eau apporte calme et vie au jardin. Nous intégrons bassins et éclairages extérieurs au paysage pour profiter de votre jardin en toute saison, de jour comme de nuit.",
    details: ["Bassins d’ornement", "Plantes aquatiques", "Éclairage des allées et massifs", "Mise en valeur des arbres"],
    image: bassinImg,
    alt: "Bassin de jardin entouré de plantes aquatiques et d’une terrasse en bois",
  },
  {
    id: "engazonnement",
    title: "Engazonnement",
    text: "Une belle pelouse commence par un sol bien préparé. Nous réalisons vos gazons en semis ou en rouleaux, selon vos délais et l’usage que vous en aurez, pour un tapis dense et durable.",
    details: ["Préparation et nivellement du sol", "Semis de gazon", "Gazon en rouleaux", "Rénovation de pelouse"],
    image: gazonImg,
    alt: "Mains posant un rouleau de gazon frais sur la terre",
  },
];

export const creationFaq = [
  {
    question: "Le devis est-il gratuit ?",
    answer: "Oui. Le déplacement pour découvrir votre terrain est offert, et vous recevez un devis détaillé sous 5 jours environ, sans engagement.",
  },
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer: "Nous intervenons dans un rayon d’environ 30 km autour de Broué : Dreux, Anet, Nogent-le-Roi, Houdan, Rambouillet, Épernon et les communes alentour, en Eure-et-Loir et dans les Yvelines.",
  },
  {
    question: "Le crédit d’impôt de 50 % s’applique-t-il aux travaux de création ?",
    answer: "Non. Le crédit d’impôt concerne uniquement les petits travaux d’entretien du jardin (tonte, taille, désherbage…). La création, les terrasses ou la maçonnerie n’y ouvrent pas droit, mais l’entretien de votre jardin par la suite, oui.",
  },
  {
    question: "Quelle est la meilleure période pour créer un jardin ?",
    answer: "Les plantations se font idéalement à l’automne ou au début du printemps. Terrasses, allées et maçonnerie peuvent être réalisées presque toute l’année, hors périodes de gel.",
  },
  {
    question: "Pouvez-vous entretenir le jardin une fois créé ?",
    answer: "Bien sûr. Nous proposons un entretien ponctuel ou un contrat à l’année, pour que votre jardin reste aussi beau qu’au premier jour.",
  },
];
