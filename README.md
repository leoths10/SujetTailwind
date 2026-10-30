# Examen final — Conversion CSS classique → Tailwind CSS

M1 Ingénierie du Web — ESGI — Module Tailwind CSS (2026)

## Le sujet

Le dossier [`sujet/`](sujet/) contient un site vitrine complet et fonctionnel —
**La Table d'Amélie**, un bistrot fictif — écrit en **CSS classique** : un seul
fichier `css/style.css`, variables CSS, nomenclature BEM, Flexbox, Grid,
media queries desktop-first. Aucune ligne de Tailwind.

3 pages : `index.html` (accueil), `menu.html` (la carte), `contact.html`
(formulaire, horaires, FAQ). Le HTML est **sémantiquement correct** — il ne
doit pas être réécrit en profondeur, seulement stylé différemment.

**Consigne : convertir l'intégralité du site en Tailwind CSS v4**, en
supprimant le CSS classique au fur et à mesure qu'il est remplacé. Le site
doit rester visuellement et fonctionnellement identique (ou amélioré) à la
fin de l'exercice.

## Ce que le sujet contient déjà (à préserver pendant la conversion)

- HTML sémantique : `header`/`nav`, `main`, `article` (plats, témoignages),
  `section` titrées, `footer`/`address`, `table` pour les horaires.
- Un widget interactif natif : `<dialog>` de réservation (`showModal()`/`close()`
  dans `js/main.js`), déclenché depuis chaque page.
- Un autre widget natif : `<details>`/`<summary>` pour la FAQ (`contact.html`).
- Un formulaire avec validation native (`required`, `type="email"`,
  `type="date"`, `type="number" min max`).
- Une animation CSS (`@keyframes fade-in-up` sur le hero).
- Un responsive desktop-first sur 2 breakpoints classiques (900px, 600px) —
  **à refaire en mobile-first sur les 5 breakpoints du cours**, custom `2k`
  (2560px) inclus.

## Livrable attendu

Un dépôt git (lien à fournir) contenant :
- le site converti, qui doit se lancer avec `npm install && npm run dev`
  (scaffold Vite + `@tailwindcss/vite`, comme vu en cours) ;
- un historique de commits lisible (pas un seul commit "tout converti") ;
- un court `NOTES.md` : choix faits, difficultés rencontrées, ce qui reste
  en CSS classique si tout n'a pas pu être converti et pourquoi.

## Barème (/20)

| Critère | Points | Mesure |
|---|---|---|
| Couverture Tailwind (script `coverage.mjs`) | 8 | Automatique, proportionnelle au % |
| HTML sémantique préservé (pas de régression) | 3 | Lecture manuelle du HTML rendu |
| Responsive mobile-first sur les 5 breakpoints du cours (dont `2k`) | 3 | Test DevTools sur chaque seuil |
| `@apply` utilisé à bon escient (pas systématique) | 2 | Lecture de `style.css` |
| Au moins un widget natif resté fonctionnel après conversion (`dialog`, `details`...) | 2 | Test manuel |
| Au moins une animation qui respecte `prefers-reduced-motion` | 2 | Lecture du CSS + test `motion-reduce` |

## Modalités — 

- **Durée** : 3h 
- **Individuel ou groupe** : individuel 
- **Date de rendu** : le 30/10/26 à 17H15.
- **Autorisation IA/doc** : assistants IA de génération de code interdits pendant l'épreuve.

## Structure du dépôt

```
examen/
├── sujet/              → à distribuer aux étudiants tel quel
│   ├── index.html, menu.html, contact.html
│   ├── css/style.css   → CSS classique à convertir
│   └── js/main.js      → toggle menu mobile + dialog réservation
└── README.md           → ce fichier (sujet + barème + modalités)
```
