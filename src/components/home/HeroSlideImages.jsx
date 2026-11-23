import Image from "next/image";

// Photos superposées : seule la diapositive active est visible (fondu enchaîné).
export default function HeroSlideImages({ slides, current }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {slides.map((slide, index) => {
        const active = index === current;
        return (
          <div
            key={slide.label}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              placeholder="blur"
              sizes="100vw"
              className={`object-cover ${active ? "animate-slow-zoom" : ""}`}
            />
          </div>
        );
      })}
    </div>
  );
}
