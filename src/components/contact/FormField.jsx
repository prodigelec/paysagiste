// Champ de formulaire : libellé, contrôle (input, select, textarea) et message d’erreur.
const controlClass =
  "w-full rounded-sm border bg-cream-50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-forest-700 focus-visible:outline-none";

export default function FormField({ label, name, error, optional, as = "input", children, ...props }) {
  const Control = as;
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-forest-900">
        {label}
        {optional && <span className="ml-2 font-normal text-muted">(facultatif)</span>}
      </label>
      <Control
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${controlClass} ${error ? "border-error" : "border-sand"}`}
        {...props}
      >
        {children}
      </Control>
      {error && (
        <p id={errorId} className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
