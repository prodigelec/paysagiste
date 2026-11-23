// Nom de la prestation affichée + barres pour choisir une diapositive.
// Le défilement se met en pause au survol ou au focus clavier.
export default function HeroIndicators({ slides, current, onSelect, onPauseChange }) {
  return (
    <div
      className="absolute bottom-8 right-5 z-10 flex flex-col items-end gap-3 md:bottom-12 md:right-8 lg:right-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocus={() => onPauseChange(true)}
      onBlur={() => onPauseChange(false)}
    >
      <p aria-live="polite" className="eyebrow !text-[0.7rem] text-on-dark [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
        {slides[current].label}
      </p>
      <div className="flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Afficher : ${slide.label}`}
            aria-current={index === current}
            className="group flex h-6 items-center"
          >
            <span
              className={`block h-0.5 rounded-full transition-all duration-500 ${index === current ? "w-10 bg-brass-light" : "w-5 bg-on-dark/40 group-hover:bg-on-dark/70"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
