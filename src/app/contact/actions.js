"use server";

import { z } from "zod";
import { devisSchema, devisFields, checkPhotos } from "@/lib/validations/devis";

// Action serveur de la demande de devis : revalide tout, sans faire confiance au navigateur.
export async function sendDevisRequest(formData) {
  // Champ piège rempli : c’est un robot. On répond « ok » sans rien traiter.
  if (formData.get("site")) return { ok: true };

  const parsed = devisSchema.safeParse(devisFields(formData));
  if (!parsed.success) {
    return { ok: false, errors: z.flattenError(parsed.error).fieldErrors };
  }

  const photos = formData.getAll("photos").filter((file) => typeof file === "object");
  const photoError = checkPhotos(photos);
  if (photoError) return { ok: false, errors: { photos: [photoError] } };

  // TODO : brancher l’envoi de l’e-mail (Resend ou Gmail) vers siteConfig.email,
  // avec parsed.data et les photos en pièces jointes.
  // Tant que ce n’est pas fait, les demandes ne sont PAS transmises.

  return { ok: true };
}
