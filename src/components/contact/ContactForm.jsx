"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { z } from "zod";
import { devisSchema, devisFields, checkPhotoSelection, PRESTATIONS } from "@/lib/validations/devis";
import { compressImage } from "@/lib/compressImage";
import { sendDevisRequest } from "@/app/contact/actions";
import { siteConfig } from "@/lib/site";
import FormField from "./FormField";
import PhotoInput from "./PhotoInput";

const firstError = (errors, name) => errors[name]?.[0];
const FIELD_ORDER = ["nom", "telephone", "email", "commune", "prestation", "message", "photos", "consentement"];

// Formulaire de demande de devis : validation immédiate dans le navigateur,
// photos compressées avant l’envoi, puis revalidation par l’action serveur.
export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [pending, startTransition] = useTransition();
  const prestationRef = useRef(null);

  // Pré-sélectionne le type de demande depuis le lien (ex. /contact?prestation=entretien)
  useEffect(() => {
    const prestation = new URLSearchParams(window.location.search).get("prestation");
    if (prestation && prestation in PRESTATIONS && prestationRef.current) {
      prestationRef.current.value = prestation;
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const parsed = devisSchema.safeParse(devisFields(formData));
    const fieldErrors = parsed.success ? {} : z.flattenError(parsed.error).fieldErrors;
    const photoError = checkPhotoSelection(files);
    if (photoError) fieldErrors.photos = [photoError];

    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      toast.error("Merci de vérifier les champs indiqués.");
      // Place le curseur sur le premier champ à corriger (dans l’ordre du formulaire)
      const first = FIELD_ORDER.find((name) => fieldErrors[name]);
      form.querySelector(`[name="${first}"], #${first}`)?.focus();
      return;
    }

    try {
      const photos = await Promise.all(files.map(compressImage));
      photos.forEach((photo) => formData.append("photos", photo));
    } catch {
      toast.error("Une photo n’a pas pu être préparée. Essayez sans elle ou avec un autre fichier.");
      return;
    }

    startTransition(async () => {
      try {
        const result = await sendDevisRequest(formData);
        if (result.ok) {
          toast.success("Votre demande a bien été envoyée. Nous vous recontactons rapidement.");
          form.reset();
          setFiles([]);
          setErrors({});
        } else {
          setErrors(result.errors ?? {});
          toast.error("Merci de vérifier les champs indiqués.");
        }
      } catch {
        toast.error(`L’envoi a échoué. Réessayez ou appelez-nous au ${siteConfig.phone}.`);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Nom et prénom" name="nom" autoComplete="name" error={firstError(errors, "nom")} />
        <FormField label="Téléphone" name="telephone" type="tel" autoComplete="tel" error={firstError(errors, "telephone")} />
        <FormField label="E-mail" name="email" type="email" autoComplete="email" optional error={firstError(errors, "email")} />
        <FormField label="Commune du jardin" name="commune" autoComplete="address-level2" error={firstError(errors, "commune")} />
      </div>

      <FormField label="Votre demande" name="prestation" as="select" defaultValue="" ref={prestationRef} error={firstError(errors, "prestation")}>
        <option value="" disabled>Choisissez…</option>
        {Object.entries(PRESTATIONS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </FormField>

      <FormField
        label="Votre projet"
        name="message"
        as="textarea"
        rows={6}
        placeholder="Décrivez votre jardin, vos envies, les travaux souhaités, vos délais…"
        error={firstError(errors, "message")}
      />

      <PhotoInput files={files} onChange={setFiles} error={firstError(errors, "photos")} />

      {/* Champ piège invisible pour les robots */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="site">Ne pas remplir</label>
        <input id="site" name="site" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            name="consentement"
            aria-invalid={Boolean(errors.consentement)}
            className="mt-1 h-4 w-4 shrink-0 accent-forest-900"
          />
          <span>
            J’accepte que mes informations soient utilisées pour être recontacté au sujet de ma
            demande. Voir la <Link href="/confidentialite" className="underline hover:text-forest-900">politique de confidentialité</Link>.
          </span>
        </label>
        {errors.consentement && <p className="mt-2 text-sm text-error">{errors.consentement[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-forest-900 px-8 text-sm font-semibold tracking-wide text-on-dark transition-colors hover:bg-forest-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>
    </form>
  );
}
