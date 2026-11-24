import Image from "next/image";
import Link from "next/link";

// En-tête des pages intérieures : photo, fil d’Ariane, titre et chapeau.
export default function PageHero({ eyebrow, title, intro, image, imageAlt, breadcrumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/20"
      />
      {/* Sur mobile, le texte couvre toute la largeur : voile uniforme en plus */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest-950/35 lg:hidden" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-20">
        <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-on-dark-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-on-dark">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-on-dark">{breadcrumb}</li>
          </ol>
        </nav>
        <div className="animate-fade-up max-w-3xl">
          <p className="eyebrow mb-5 text-brass-light">{eyebrow}</p>
          <h1 className="text-4xl text-on-dark sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted md:text-xl">{intro}</p>
        </div>
      </div>
    </section>
  );
}
