// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { getCategories } from "@/lib/data";
// import DropdownMenu from "./DropdownMenu";

// const mainLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/contact", label: "Contact Us" },
// ];

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const categories = getCategories();

//   return (
//     <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
//       {/* Top Navbar - Main routing: Home, About, Contact Us, Services */}
//       <div className="border-b border-border bg-section/80">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6 lg:px-8 ">
//           <Link
//             href="/"
//             className="text-xl font-semibold text-primaryText transition-colors hover:text-accent"
//           >
//             Saurav Furnitures
//           </Link>

//           <span>
//             {mainLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-medium text-primaryText transition-colors hover:text-accent gap-6 px-4 py-2 sm:px-6 lg:px-8"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </span>
//         </nav>
//       </div>

//       {/* Main Navbar - Logo + Product Categories / Filters */}
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
//         {/* Desktop - Product Categories */}
//         <div className="hidden items-center gap-1 lg:flex ">
//           {categories.map((category) => (
//             <div
//               key={category.slug}
//               className="relative"
//               onMouseEnter={() => setOpenDropdown(category.slug)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <Link
//                 href={
//                   category.slug === "new-arrival"
//                     ? "/products/new-arrival/all"
//                     : `/products/${category.slug}`
//                 }
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-primaryText transition-colors hover:bg-highlight hover:text-accent"
//               >
//                 {category.name}
//               </Link>
//               <DropdownMenu
//                 category={category}
//                 isOpen={openDropdown === category.slug}
//                 onClose={() => setOpenDropdown(null)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           className="rounded-lg p-2 lg:hidden"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6 text-primaryText"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {mobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile menu - Main links + Product categories */}
//       {mobileMenuOpen && (
//         <div className="border-t border-border bg-card lg:hidden">
//           <div className="space-y-1 px-4 py-4">
//             <div className="mb-4 flex flex-col gap-1 border-b border-border pb-4">
//               <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-secondaryText">
//                 Main
//               </p>
//               {mainLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="rounded-lg px-4 py-3 font-medium text-primaryText"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//             <div>
//               <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-secondaryText">
//                 Products & Categories
//               </p>
//               {categories.map((category) => (
//                 <div key={category.slug} className="space-y-1">
//                   <Link
//                     href={
//                       category.slug === "new-arrival"
//                         ? "/products/new-arrival/all"
//                         : `/products/${category.slug}`
//                     }
//                     className="block rounded-lg px-4 py-3 font-medium text-primaryText"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {category.name}
//                   </Link>
//                   <div className="ml-4 flex flex-col gap-1">
//                     {category.subcategories.map((sub) => (
//                       <Link
//                         key={sub.slug}
//                         href={
//                           category.slug === "new-arrival"
//                             ? `/products/new-arrival/${sub.slug}`
//                             : `/products/${category.slug}${sub.slug !== "all" ? `/${sub.slug}` : ""}`
//                         }
//                         className="rounded-lg px-4 py-2 text-sm text-secondaryText"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {sub.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";
import { getCategories } from "@/lib/data";
import DropdownMenu from "./DropdownMenu";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
      {/* Top Navbar */}
      <div className="border-b border-border bg-section/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold text-primaryText transition-colors hover:text-accent"
          >
            Saurav Furnitures
          </Link>
          <div className="flex gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primaryText transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-1 lg:flex">
          {categories.map((category) => (
            <DropdownMenu key={category.slug} category={category} />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 text-primaryText"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu (Remains unchanged for logic) */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <div className="mb-4 flex flex-col gap-1 border-b border-border pb-4">
              <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-secondaryText">
                Main
              </p>
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 font-medium text-primaryText"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-secondaryText">
                Products
              </p>
              {categories.map((category) => (
                <div key={category.slug} className="space-y-1">
                  <Link
                    href={
                      category.slug === "new-arrival"
                        ? "/products/new-arrival/all"
                        : `/products/${category.slug}`
                    }
                    className="block rounded-lg px-4 py-3 font-medium text-primaryText"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  <div className="ml-4 flex flex-col gap-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={
                          category.slug === "new-arrival"
                            ? `/products/new-arrival/${sub.slug}`
                            : `/products/${category.slug}${sub.slug !== "all" ? `/${sub.slug}` : ""}`
                        }
                        className="rounded-lg px-4 py-2 text-sm text-secondaryText"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
