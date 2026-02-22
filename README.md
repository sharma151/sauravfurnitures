# Saurav Furnitures

A modern, minimal, SEO-optimized furniture website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **JSON-based** product and category data
- **Dynamic routing** for products and categories
- **Reusable components** (Navbar, Dropdown, ProductCard, ProductModal, etc.)
- **SEO optimized** with Metadata API, Open Graph, JSON-LD, and sitemap
- **Responsive design** - mobile-first, fully responsive
- **Trust, Comfort & Experience** - clean UI with neutral tones

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── products/[category]/[slug]/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── Breadcrumb.tsx
│   ├── CategoryGrid.tsx
│   ├── ContactForm.tsx
│   ├── DropdownMenu.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   └── ServiceCard.tsx
├── data/
│   ├── categories.json
│   └── products.json
├── lib/
│   └── data.ts
└── types/
    └── index.ts
```

## Data

- Add categories and subcategories in `src/data/categories.json`
- Add products in `src/data/products.json`
- The navbar dropdown and product pages are fully data-driven

## Production

```bash
npm run build
npm start
```

## License

© 2026 Saurav Furnitures. All rights reserved.
