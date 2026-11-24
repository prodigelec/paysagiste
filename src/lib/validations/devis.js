import { z } from "zod";

// Schéma de la demande de devis : partagé entre le formulaire (confort de saisie)
// et l’action serveur (sécurité : le serveur revalide toujours).

export const PRESTATIONS = {
  creation: "Création & aménagement",
  entretien: "Entretien de jardin",
  piscine: "Entretien de piscine",
  autre: "Autre demande",
};

export const PHOTO_MAX_COUNT = 5;
export const PHOTO_MAX_BYTES = 700 * 1024; // après compression côté navigateur
export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Numéro français : 06 12 34 56 78, 0612345678, +33 6 12 34 56 78…
const PHONE_REGEX = /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

export const devisSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(2, { error: "Indiquez votre nom (2 caractères minimum)." })
    .max(80, { error: "Le nom est trop long." }),
  telephone: z
    .string()
    .trim()
    .regex(PHONE_REGEX, { error: "Indiquez un numéro de téléphone valide." }),
  email: z.union([
    z.literal(""),
    z.email({ error: "Indiquez une adresse e-mail valide, ou laissez vide." }).trim().max(120),
  ]),
  commune: z
    .string()
    .trim()
    .min(2, { error: "Indiquez la commune du jardin." })
    .max(80, { error: "Le nom de la commune est trop long." }),
  prestation: z.enum(Object.keys(PRESTATIONS), { error: "Choisissez le type de demande." }),
  message: z
    .string()
    .trim()
    .min(10, { error: "Décrivez votre projet en quelques mots (10 caractères minimum)." })
    .max(2000, { error: "Le message est trop long (2 000 caractères maximum)." }),
  consentement: z.literal("on", { error: "Merci d’accepter l’utilisation de vos données pour être recontacté." }),
  // Champ piège invisible : rempli uniquement par les robots
  site: z.string().max(0).optional(),
});

// Vérifie le nombre et le format des photos choisies. Renvoie un message d’erreur ou null.
export function checkPhotoSelection(files) {
  if (files.length > PHOTO_MAX_COUNT) return `${PHOTO_MAX_COUNT} photos maximum.`;
  if (files.some((file) => !PHOTO_TYPES.includes(file.type))) {
    return "Formats acceptés : JPG, PNG ou WebP.";
  }
  return null;
}

// Vérification complète côté serveur : nombre, format et poids (après compression).
export function checkPhotos(files) {
  const photos = files.filter((file) => file && file.size > 0);
  const selectionError = checkPhotoSelection(photos);
  if (selectionError) return selectionError;
  if (photos.some((file) => file.size > PHOTO_MAX_BYTES)) return "Une des photos est trop lourde.";
  return null;
}

// Extrait les champs texte d’un FormData pour la validation.
export function devisFields(formData) {
  const fields = ["nom", "telephone", "email", "commune", "prestation", "message", "consentement", "site"];
  return Object.fromEntries(fields.map((name) => [name, formData.get(name) ?? undefined]));
}
