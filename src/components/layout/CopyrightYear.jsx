import { cacheLife } from "next/cache";

// Next.js 16 (Cache Components) interdit new Date() au pré-rendu sans cache :
// l'année est mise en cache et revalidée chaque jour.
export default async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
