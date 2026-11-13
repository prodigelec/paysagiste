// Titre de section : sur-titre en capitales + titre serif + chapeau optionnel.
export default function SectionHeading({ eyebrow, title, intro, dark = false, align = "left", id }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${dark ? "text-brass" : "text-brass-dark"}`}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={`text-4xl md:text-5xl ${dark ? "text-on-dark" : "text-forest-900"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-on-dark-muted" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
