# Portfolio responsiveness and accessibility plan

## Goal
Improve narrow-screen layout, keyboard accessibility, reduced-motion behavior, and content accuracy while preserving the existing dark theme, rounded cards, project-card presentation, tab styling, and About scroll animation.

## Scope

### Responsive layout (R1–R5)
- Make the fixed header a left-aligned, horizontally reachable flex scroller with mobile-sized spacing and type while retaining the pill navigation design.
- Replace the Projects fixed viewport height and nested scroll areas with responsive minimum heights and a natural-height active panel; keep the existing cards and tab visuals.
- Tune the existing About scroll animation with responsive container/card heights, padding, offsets, and transforms instead of replacing it.
- Scale Skills icons, labels, and cell padding down on mobile, retaining progressive columns at the existing breakpoints.
- Apply a consistent fixed-header scroll margin to Home, About, Skills, Projects, and Contact, backed by document scroll padding.

### Accessibility and motion (V1–V5)
- Add a shared emerald/purple `focus-visible` ring to header links, tabs, project actions, footer links, hero actions, and the contact CTA.
- Complete tablist/tab/tabpanel semantics, associations, roving tab indices, and Home/End plus arrow-key navigation without changing the visual design.
- Respect `prefers-reduced-motion` globally and in Framer Motion components by reducing or stopping orbit, shimmer, tape, ping, scroll, tab, and card effects.
- Consolidate spacing and typography incrementally, including a readable hero paragraph max width and removal of unused font loads.
- Give About images meaningful alt text and hide decorative orbit/visual layers from assistive technology.

### Cleanup, content, and maintenance (V6, P1–P3)
- Remove obsolete ID hover CSS, invalid/redundant utilities, commented-out code, unused imports, and confirmed-unused template UI components.
- Add a direct `mailto:` Contact CTA.
- Add the NighaTech Global internship from the resume and correct project technology/category labels and filtering.
- Complete the safe maintenance pass: remove unused dependencies and update Next 14, Tailwind 3, Framer Motion 11, Tabler Icons 3, and compatible tooling/types without major-version migrations.

## Validation
- Run project diagnostics, TypeScript/production build, lint, and `git diff --check`.
- Manually review 375px header reachability, wrapped project tabs, adaptive project page scrolling, About anchor placement, keyboard focus/tab behavior, and reduced-motion behavior.
