import Image from "next/image";
import Link from "next/link";

export default function ServicePoleCard({ pole }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-forest-900 text-on-dark">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={pole.image}
          alt={pole.imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <h3 className="text-3xl md:text-4xl">{pole.title}</h3>
        <p className="mt-4 leading-relaxed text-on-dark-muted">{pole.intro}</p>
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {pole.services.map((service) => (
            <li key={service} className="flex items-baseline gap-3 text-on-dark">
              <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.25em] bg-brass" />
              {service}
            </li>
          ))}
        </ul>
        <Link
          href={`/${pole.slug}`}
          className="mt-8 inline-block self-start border-b border-brass pb-1 text-sm font-semibold tracking-wide text-brass-light transition-colors hover:text-on-dark"
        >
          Découvrir {pole.title.toLowerCase()}
        </Link>
      </div>
    </article>
  );
}
