# 🪑 Saurav Furnitures

> A modern, SEO-optimised furniture e-commerce website proudly built in Nepal.  
> Showcasing premium handcrafted and contemporary furniture across five categories — Bedroom, Living Room, Dining, Office, and New Arrivals.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui + Radix UI primitives |
| **Icons** | Lucide React |
| **Data** | Split JSON files per category (no database required) |
| **Routing** | Fully dynamic — `/products/[category]/[slug]` |
| **SEO** | Metadata API, Open Graph, JSON-LD structured data, Sitemap |
| **Responsive** | Mobile-first, fully responsive layout |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Start the development server

```bash
npm run dev
# or
yarn dev
```

### 3. Open in your browser

```
http://localhost:3000
```

---

## 🏗️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Frontend Framework | [Next.js](https://nextjs.org/) | ^16.1.6 |
| UI Library | [React](https://react.dev/) | ^19.2.4 |
| Language | [TypeScript](https://www.typescriptlang.org/) | ^5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | ^4.2.0 |
| Component Primitives | [Radix UI](https://www.radix-ui.com/) | ^1.4.3 |
| Component Library | [shadcn/ui](https://ui.shadcn.com/) | ^3.8.5 |
| Icons | [Lucide React](https://lucide.dev/) | ^0.575.0 |
| Class Utilities | clsx + tailwind-merge + CVA | latest |
| Linting | ESLint (Next.js config) | ^10.0.1 |

---

## 📁 Project Structure

```
sauravfurnitures/
│
├── public/
│   └── images/
│       └── products/               # Product images
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.tsx            # About Us page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── helpdesk/
│   │   │   └── page.tsx            # Help & FAQ page
│   │   ├── ourworks/
│   │   │   └── page.tsx            # Portfolio / Our Works page
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── products/
│   │   │   └── [category]/         # Dynamic category route
│   │   │       ├── page.tsx        # Category listing page
│   │   │       ├── CategoryProducts.tsx
│   │   │       └── [slug]/         # Dynamic product detail route
│   │   │           └── page.tsx    # Product detail page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout (Navbar + Footer)
│   │   ├── page.tsx                # Homepage
│   │   ├── HomeProducts.tsx        # Featured products section
│   │   ├── robots.ts               # robots.txt generator
│   │   └── sitemap.ts              # XML sitemap generator
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── Breadcrumb.tsx          # Page breadcrumb trail
│   │   ├── Carousel.tsx            # Image / product carousel
│   │   ├── CategoryGrid.tsx        # Category cards grid
│   │   ├── CompanyMarquee.tsx      # Scrolling brand marquee
│   │   ├── ContactForm.tsx         # Contact & inquiry form
│   │   ├── DropdownMenu.tsx        # Navbar dropdown for categories
│   │   ├── Footer.tsx              # Site footer
│   │   ├── HeroSection.tsx         # Homepage hero banner
│   │   ├── Navbar.tsx              # Top navigation bar
│   │   ├── ProductCard.tsx         # Product listing card
│   │   ├── ProductModal.tsx        # Quick-view product modal
│   │   ├── ServiceCard.tsx         # Service feature card
│   │   ├── luxury/                 # Premium/luxury UI components
│   │   │   ├── CTABanner.tsx       # Call-to-action banner
│   │   │   ├── CategoryCard.tsx    # Luxury category card variant
│   │   │   ├── PremiumButton.tsx   # Styled premium button
│   │   │   ├── SectionHeading.tsx  # Decorative section heading
│   │   │   └── TestimonialCard.tsx # Customer testimonial card
│   │   └── ui/                     # shadcn/ui base components
│   │
│   ├── data/                       # All static JSON data
│   │   ├── categories.json         # Navigation categories & subcategories
│   │   └── products/               # ✅ Split product data by category
│   │       ├── bedroom.json        # Bedroom furniture products
│   │       ├── living-room.json    # Living room furniture products
│   │       ├── dining.json         # Dining furniture products
│   │       ├── office.json         # Office furniture products
│   │       └── new-arrivals.json   # New arrival / kitchen accessories
│   │
│   ├── lib/                        # Utility & data access layer
│   │   ├── data.ts                 # Merges all product JSONs; exports query helpers
│   │   └── utils.ts                # General utility functions (cn, etc.)
│   │
│   └── types/                      # TypeScript type definitions
│       └── index.ts                # Product, Category, Subcategory types
│
├── .eslintrc.json                  # ESLint config
├── .gitignore
├── components.json                 # shadcn/ui component config
├── next.config.js                  # Next.js configuration
├── package.json                    # Project dependencies & scripts
├── postcss.config.js               # PostCSS config for Tailwind
├── tsconfig.json                   # TypeScript config
└── README.md                       # This file
```

---

## 🗂️ Data Architecture

Product data is split into individual JSON files per category for maintainability and scalability.  
All files live under `src/data/products/` and are merged transparently in `src/lib/data.ts`.

### Category Files

| File | Category | Subcategories |
|---|---|---|
| `bedroom.json` | Bedroom | Bedroom Set, Bed, Wardrobes, Dressing Table, Bedside/Night Table, Kids |
| `living-room.json` | Living Room | Sofa Set, Coffee Table, TV Unit, Bookshelf, Center Table |
| `dining.json` | Dining | Dining Table, Dining Chairs, Dining Set, Bar Stools |
| `office.json` | Office | Office Desk, Office Chair, Study Table, Filing Cabinet, Bookshelf |
| `new-arrivals.json` | New Arrivals / Kitchen | Kitchen Accessory (Spice Racks, Knife Strips, etc.) |

### Adding New Products

1. Open the relevant file in `src/data/products/`, e.g., `bedroom.json`
2. Add a new product object following this schema:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "slug": "product-name-url-slug",
  "category": "bedroom",
  "subcategory": "bed",
  "price": 45000,
  "currency": "NPR",
  "shortDescription": "A short one-liner.",
  "description": "Full product description.",
  "features": ["Feature 1", "Feature 2"],
  "dimensions": { "length": "78 inches", "width": "60 inches" },
  "materials": ["Sal Wood"],
  "careInstructions": "Wipe with a dry cloth.",
  "stock": 10,
  "rating": 4.5,
  "reviews": 12,
  "images": ["/images/products/your-image.jpg"],
  "isNewArrival": false,
  "deliveryTime": "5-7 days"
}
```

### Adding a New Category

1. Add the category entry to `src/data/categories.json`
2. Create a new file `src/data/products/<category-slug>.json`
3. Import it in `src/lib/data.ts` and spread it into the `products` array

---

## 🔗 Key Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage with Hero, Featured Products, Categories |
| `/products/bedroom` | Bedroom category listing |
| `/products/living-room` | Living Room category listing |
| `/products/dining` | Dining category listing |
| `/products/office` | Office category listing |
| `/products/new-arrival` | New Arrivals listing |
| `/products/[category]/[slug]` | Individual product detail page |
| `/about` | About Saurav Furnitures |
| `/contact` | Contact & inquiry form |
| `/services` | Services offered |
| `/helpdesk` | Help & FAQ page |
| `/ourworks` | Portfolio / Our Works |

---

## 🔍 SEO

- **Dynamic metadata** per page using Next.js Metadata API
- **Open Graph** tags for social sharing
- **JSON-LD** structured data for products (Schema.org `Product` type)
- **XML Sitemap** auto-generated at `/sitemap.xml`
- **robots.txt** auto-generated at `/robots.txt`
- **Semantic HTML** with proper heading hierarchy (`h1` → `h2` → `h3`)

---

## 🛠️ Scripts

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Build production bundle
npm run start     # Start production server
npm run lint      # Run ESLint checks
```

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 📝 License

© 2026 Saurav Furnitures. All rights reserved.  
Handcrafted with ❤️ in Nepal 🇳🇵
