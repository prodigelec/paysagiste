import Image from "next/image";

// Une prestation : photo d’un côté, texte et détails de l’autre (sens alterné).
export default function CreationServiceBlock({ service, index }) {
  const reversed = index % 2 === 1;

  return (
    <article
      id={service.id}
      className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20"
    >
      <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${reversed ? "lg:order-2" : ""}`}>
        <Image
          src={service.image}
          alt={service.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="font-serif text-5xl text-brass-dark" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-3xl text-forest-900 md:text-4xl">{service.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-muted">{service.text}</p>
        <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-baseline gap-3 text-ink">
              <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.25em] bg-brass-dark" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
