# NOTES — Conversion de La Table d'Amélie en Tailwind CSS v4

## Lancement

`npm install && npm run dev` (Vite 7 + `@tailwindcss/vite`, sans PostCSS ni CLI).
`vite.config.js` déclare les 3 pages pour que `npm run build` les génère aussi.

## Choix faits

- **Design system dans `@theme`** (`css/style.css`) : couleurs du sujet reprises à
  l'identique (plus celles du footer et du badge végétarien, qui étaient en dur),
  polices, ombres, largeur du site (`max-w-site`), breakpoint `2k`, animation.
- **Mobile-first sur les 5 breakpoints.** Correspondance avec l'original
  desktop-first : moins de 600px → base, 600–900px → `md`, plus de 900px → `lg`.
  Ajouts pour les grands écrans : titre du hero agrandi à `xl`, site élargi à
  1600px et sections plus aérées à `2k`.
- **`@apply` réservé aux éléments répétés** : `.btn`, `.btn-primary`, `.btn-outline`
  (12 boutons sur 3 pages) et `.form-input` (16 champs, avec état `focus`).
  Le reste est en utilitaires dans le HTML (3 cartes, 3 avis, lignes de la carte
  courtes et lisibles).
- **Animation du hero** : `motion-safe:animate-fade-in-up`. Elle ne se joue plus
  quand « réduire les animations » est activé, ce que l'original ne gérait pas.
- **Widgets natifs conservés** : `<dialog>` de réservation, `<details>` de la FAQ,
  validation native des formulaires.
- **HTML** : seuls les attributs `class` ont changé (vérifié par diff avec le
  commit initial), sauf la balise `<script>`, passée en `type="module"` pour que
  le build inclue le JS. `js/main.js` n'a pas été modifié.

## Difficultés rencontrées

- **Preflight de Tailwind** : il remet à zéro titres et marges, et supprime le
  `margin: auto` qui centre une `<dialog>`. Corrigé par `@layer base` et `m-auto`.
- **Classe `container`** : Tailwind a la sienne, avec d'autres largeurs. Remplacée
  par `mx-auto max-w-site px-6` et un token dédié.
- **Collisions de noms** : les variables du sujet `--radius-lg` et `--shadow-lg`
  auraient écrasé celles de Tailwind. Renommées ou remplacées par leurs équivalents.
- **Menu mobile sans toucher au JS** : le JS ajoute la classe `nav--open`. Elle est
  stylée dans `style.css`, comme un élément ajouté par le JS ne peut pas recevoir
  de classe Tailwind à l'avance.
- **Tableau des horaires** : stylé à l'origine par des sélecteurs descendants.
  Les classes sont désormais posées sur les lignes et les cellules.

## Ce qui reste en dehors des utilitaires

- **Classes conservées pour le JS** : `nav__toggle`, `nav`,
  `reservation-dialog__close`, ainsi que `nav--open` (ajoutée par le JS, règle
  `.nav--open { @apply block; }`).
- **`@layer base`** : police, graisse, interligne et tailles des `h1`–`h3`, marge
  des `p`, couleur des `a`. Il recrée ce que le preflight retire, pour la trentaine
  d'éléments sans classe. C'est la méthode prévue par Tailwind v4 pour les styles
  de base.
- **Aucune règle du CSS classique d'origine n'a été conservée.**

## Écarts visuels assumés (améliorations)

- Tous les boutons ont la même taille de texte (16px). À l'origine, les `<button>`
  étaient plus petits que les liens.
- Le header a une marge latérale sur mobile ; le logo touchait le bord.
- La dernière ligne du tableau n'a plus de demi-trait.
- Les effets de survol ne s'appliquent qu'aux appareils qui ont un survol.
