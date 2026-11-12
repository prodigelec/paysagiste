# Site vitrine — société de paysagiste (nom à définir)

Dossier créé le 2026-11-12. Nom du dossier provisoire : à renommer quand la société aura son nom.

## Ce qui est décidé

- Site vitrine pour une société de paysagiste, sur le modèle du site `prodigelec` (Desktop/ProjetsDev/prodigelec).
- Il doit être **attirant**, avec des **tons en rapport avec la nature** (verts, terre, bois…), sans être terne.

## Ce qui reste à faire (dans l'ordre)

1. **Brief** (skill `project-brief`), une question à la fois :
   - nom de la société et logo (s'il existe) ;
   - activités exactes (création de jardins, entretien, élagage, clôtures, arrosage…) ;
   - zone d'intervention ;
   - public visé (particuliers, entreprises, collectivités) ;
   - contenus disponibles (photos de réalisations, avis clients, textes) ;
   - ambiance de couleurs et références de sites appréciés.
2. **Stack et structure** (skill `create-project`) — probablement la même que prodigelec (Next.js).
3. **Design** (skill `ui-ux-pro-max`) : wireframe → design system (couleurs et fonts dans `globals.css` dès le départ) → UI.

## Règles à respecter (reprises de prodigelec / instructions globales)

- Français.
- Pas de prix ni de fourchettes de tarifs sur le site.
- Ne pas ajouter d'icônes ou d'emojis sans demander lesquels.
- Git : travailler depuis `dev`, une branche par fonctionnalité, jamais de commit direct sur `main` ou `dev`.
- Composants sous 150 lignes, un dossier par page ou fonctionnalité.
- Questions posées une par une.

## Réponses au brief (en cours)

- **Nom et logo** : pas encore transmis par le client, on garde un nom provisoire. À redemander.
- **Activités** : toutes : création de jardins, entretien (tonte, taille de haies), élagage et abattage, clôtures, terrasses et allées, arrosage automatique, engazonnement. Pas d'activité principale précisée.
- **Zone d'intervention** : Eure-et-Loir (28) et Yvelines (78). Ville du siège à préciser.
- **Public cible** : particuliers en priorité (entreprises / collectivités possibles mais secondaires).
- **Contenus** : rien de fourni. Textes à rédiger par nous, photos de banque d'images en attendant les vraies réalisations, pas d'avis clients pour l'instant.
- **Ambiance couleurs** : élégant, haut de gamme : vert profond + crème. Pas de site de référence fourni.
- **Pages** (structure prodigelec adaptée au métier de paysagiste) :
  - Accueil
  - Création & aménagement (hub) → création de jardins, terrasses & allées, clôtures, arrosage automatique, engazonnement
  - Entretien de jardin (hub) → tonte, taille de haies, contrats d'entretien à l'année, élagage & abattage
  - Réalisations (galerie avant/après, vide au départ)
  - Votre projet, étape par étape (visite, conception, chantier, suivi)
  - Crédit d'impôt 50 % pour l'entretien (services à la personne, si la société est agréée : à vérifier). Mention du dispositif seulement, sans aucun prix.
  - À propos
  - Contact / demande de devis (avec photos du jardin en option)
  - Pages villes 28 / 78 (« Paysagiste à Chartres », « Paysagiste à Rambouillet »…)
  - Conseils jardin (blog saisonnier, optionnel)
  - Avis clients (à activer plus tard)
  - Mentions légales, confidentialité
  - Retirés par rapport à prodigelec : marques, flyers, page Facebook.
- **Nom de domaine, deadline, maintenance** : à définir.
- **Stack** : identique à prodigelec : Next.js (App Router, JavaScript, dossier `src/`), Tailwind CSS 4.
