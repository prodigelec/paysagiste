"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { heroSlides } from "@/data/heroSlides";
import { siteConfig } from "@/lib/site";
import HeroSlideImages from "./HeroSlideImages";
import HeroSlideText from "./HeroSlideText";
import HeroIndicators from "./HeroIndicators";
import HeroSapNote from "./HeroSapNote";

const INTERVAL_MS = 6500;

// Respecte le réglage système « réduire les animations » : pas de défilement automatique.
function subscribeReducedMotion(callback) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Carrousel des prestations : la photo, le titre et le texte changent ensemble.
// `actions` : boutons fixes affichés sous le texte.
export default function HeroCarousel({ actions }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => true);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setTimeout(
      () => setCurrent((index) => (index + 1) % heroSlides.length),
      INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [current, paused, reducedMotion]);

  return (
    <>
      <HeroSlideImages slides={heroSlides} current={current} />

      <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-44 md:px-8 md:pb-24">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="eyebrow mb-6 inline-flex items-center gap-3 rounded-full border border-on-dark/15 bg-forest-950/45 px-5 py-2.5 !text-[0.75rem] !font-bold text-brass-light backdrop-blur-md md:!text-[0.8rem]">
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-brass-light" />
            {siteConfig.tagline}
          </h1>
          <HeroSlideText slides={heroSlides} current={current} />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>
          <HeroSapNote />
        </div>
      </div>

      <HeroIndicators
        slides={heroSlides}
        current={current}
        onSelect={setCurrent}
        onPauseChange={setPaused}
      />
    </>
  );
}
