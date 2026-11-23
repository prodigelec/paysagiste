// Titres et textes empilés dans la même cellule de grille : la hauteur reste
// stable (celle du plus long) et seul le texte actif est visible.
export default function HeroSlideText({ slides, current }) {
  return (
    <div className="grid">
      {slides.map((slide, index) => {
        const active = index === current;
        return (
          <div
            key={slide.label}
            aria-hidden={!active}
            className={`col-start-1 row-start-1 transition-all duration-700 ease-out ${active ? "translate-y-0 opacity-100 delay-300" : "pointer-events-none translate-y-3 opacity-0"}`}
          >
            <p className="font-serif text-5xl font-medium leading-[1.1] tracking-[-0.01em] text-on-dark sm:text-6xl lg:text-7xl">
              {slide.title}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted md:text-xl">
              {slide.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
