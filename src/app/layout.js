import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14261d",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Paysagiste pour particuliers en Eure-et-Loir (28) et Yvelines (78) : création de jardins, terrasses, clôtures, arrosage, engazonnement, entretien, taille de haies et élagage. Devis gratuit.",
  // Version d'aperçu pour le client : non indexée par les moteurs de recherche.
  // TODO : retirer ce bloc à la mise en ligne définitive.
  robots: { index: false, follow: false },
  openGraph: {
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-on-dark"
        >
          Passer au contenu principal
        </a>
        <Header />
        <div id="contenu" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
