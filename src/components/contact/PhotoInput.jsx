"use client";

import { PHOTO_MAX_COUNT } from "@/lib/validations/devis";

// Sélection des photos du jardin, avec la liste des fichiers choisis.
export default function PhotoInput({ files, onChange, error }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-forest-900">
        Photos du jardin <span className="ml-1 font-normal text-muted">(facultatif, {PHOTO_MAX_COUNT} maximum)</span>
      </p>
      <label
        htmlFor="photos"
        className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-sm border border-dashed bg-cream-50 px-4 py-8 text-center transition-colors hover:border-forest-700 ${error ? "border-error" : "border-sand"}`}
      >
        <span className="font-semibold text-forest-900">Ajouter des photos</span>
        <span className="text-sm text-muted">JPG, PNG ou WebP · prises au téléphone, c’est parfait</span>
      </label>
      <input
        id="photos"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="sr-only"
        aria-describedby={error ? "photos-error" : undefined}
        onChange={(event) => onChange(Array.from(event.target.files ?? []))}
      />

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between gap-4 rounded-sm bg-cream-100 px-4 py-2 text-sm text-ink"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => onChange(files.filter((_, i) => i !== index))}
                className="shrink-0 font-semibold text-brass-dark hover:text-forest-900"
              >
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p id="photos-error" className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
