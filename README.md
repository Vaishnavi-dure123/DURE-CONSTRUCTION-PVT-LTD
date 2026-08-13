# Duure Construction Private Limited — Website

Static marketing website built with **React + Vite + Tailwind CSS v4**,
animated with **Framer Motion**.

## Folder Structure

```
duure-construction/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Routes + layout
    ├── index.css              # Tailwind import + design tokens
    ├── data/
    │   └── siteContent.js      # All text + placeholder image URLs (edit here!)
    ├── context/
    │   ├── QuotePopupContext.js
    │   ├── QuotePopupProvider.jsx
    │   └── useQuotePopup.js    # Shared "Get a Quote" popup state
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── HeroSlider.jsx      # Home page auto-sliding image carousel
    │   ├── QuotePopup.jsx      # Animated "Get a Quote" modal + form
    │   ├── PageHeader.jsx      # Banner used on About / Gallery / Contact
    │   └── AnimatedSection.jsx # Scroll-reveal wrapper
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Gallery.jsx         # Filterable grid + lightbox popup
        └── Contact.jsx         # Contact form + map
```

## Getting Started

```bash
npm install
npm run dev       # opens http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
```

## Editing Content

- **Text, services, stats, gallery captions:** `src/data/siteContent.js`
- **Images:** every image currently points to a placeholder
  (`picsum.photos`). Drop your real photos into `public/images/` and
  update the `src` values in `siteContent.js` (and the two photos inside
  `src/pages/About.jsx`) to point at them, e.g. `/images/hero-1.jpg`.
- **Colors / fonts:** `src/index.css` under the `@theme` block —
  change `--color-orange`, `--color-charcoal`, etc. and every component
  updates automatically.
- **Contact form / Get a Quote form:** both currently show a success
  state on submit without calling an API. Wire `handleSubmit` in
  `src/components/QuotePopup.jsx` and `src/pages/Contact.jsx` to your
  backend or an email service (e.g. Formspree, EmailJS) when ready.

## Pages

- **Home** — sliding hero images, services, stats, gallery preview, CTA
- **About** — company story, values, stats
- **Gallery** — filterable project grid with an animated lightbox popup
- **Contact** — contact form with animated success state + map embed

## Tech Stack

- React 18 + React Router
- Vite
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)
