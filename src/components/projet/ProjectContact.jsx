import { siteConfig } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

const channels = [
  { label: "Par téléphone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "Par SMS ou WhatsApp", value: "Envoyez un message", href: siteConfig.whatsappHref, external: true },
  { label: "Par e-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

// Les différentes façons de démarrer un projet.
export default function ProjectContact() {
  return (
    <section aria-labelledby="demarrer-title" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="demarrer-title"
            eyebrow="Démarrer votre projet"
            title="Parlons de votre jardin."
            intro={`Joignable ${siteConfig.hours}, ${siteConfig.closures}. Le plus simple : remplissez le formulaire de demande de devis, photos à l’appui.`}
          />
          <div className="mt-10">
            <ButtonLink href="/contact" variant="forest">Demander un devis gratuit</ButtonLink>
          </div>
        </div>

        <ul className="divide-y divide-sand border-y border-sand self-start">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col gap-1 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="eyebrow text-brass-dark">{channel.label}</span>
                <span className="font-serif text-2xl lining-nums text-forest-900 transition-colors group-hover:text-brass-dark md:text-3xl">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
