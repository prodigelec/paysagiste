import { siteConfig } from "@/lib/site";
import SapBadge from "@/components/ui/SapBadge";

const channels = [
  { label: "Téléphone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "SMS ou WhatsApp", value: "Envoyer un message", href: siteConfig.whatsappHref, external: true },
  { label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

// Coordonnées affichées à côté du formulaire.
export default function ContactInfo() {
  return (
    <aside aria-label="Nos coordonnées" className="rounded-sm bg-forest-900 p-8 text-on-dark md:p-10">
      <p className="eyebrow text-brass">Nous joindre directement</p>
      <ul className="mt-6 divide-y divide-forest-700">
        {channels.map((channel) => (
          <li key={channel.label} className="py-5 first:pt-0">
            <p className="text-sm text-on-dark-muted">{channel.label}</p>
            <a
              href={channel.href}
              {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-1 block break-words font-serif text-2xl lining-nums transition-colors hover:text-brass-light"
            >
              {channel.value}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-2 border-t border-forest-700 pt-6 text-on-dark-muted">
        <p>Joignable {siteConfig.hours}</p>
        <p className="first-letter:uppercase">{siteConfig.closures}</p>
        <p>
          Basé à {siteConfig.city} ({siteConfig.postalCode}), intervention dans un rayon de{" "}
          {siteConfig.serviceRadiusKm} km
        </p>
      </div>

      <div className="mt-8 flex items-center gap-5 rounded-sm bg-cream-50 p-4 text-ink">
        <SapBadge className="w-20" />
        <p className="text-sm leading-relaxed">
          Entretien de jardin : <strong className="text-forest-900">50 % de crédit d’impôt</strong>
        </p>
      </div>
    </aside>
  );
}
