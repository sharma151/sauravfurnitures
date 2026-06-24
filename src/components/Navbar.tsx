"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/ourworks", label: "Our Works" },
];

function getCategoryHref(categorySlug: string, subSlug: string) {
  if (categorySlug === "new-arrival") return `/products/new-arrival/${subSlug}`;
  return `/products/${categorySlug}${subSlug !== "all" ? `/${subSlug}` : ""}`;
}

function CategoryDropdown({
  category,
}: {
  category: {
    slug: string;
    name: string;
    subcategories: { slug: string; name: string }[];
  };
}) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "group flex h-full items-center gap-1  py-4 border-transparent px-4 text-sm font-medium text-[#3B241A] transition-all outline-none",
          open ? "border-[#C6A77D] text-[#5B3A29]" : "hover:border-[#C6A77D]/80 hover:text-[#5B3A29]",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {category.name}
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-70 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="glass-surface absolute left-0 top-[calc(100%+0.6rem)] z-50 w-60 rounded-2xl p-2 shadow-[0_24px_40px_-26px_rgba(59,36,26,0.85)]">
          <ul className="space-y-1" role="menu">
            {category.subcategories.map((sub) => (
              <li key={sub.slug}>
                <Link
                  href={getCategoryHref(category.slug, sub.slug)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#3B241A] transition-all hover:bg-[#5B3A29] hover:text-[#F7F3EE]"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8DCCF]/80 bg-[#FAF8F5]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
          >
            <div className="relative h-14 w-44 shrink-0 overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Saurav Furnitures logo"
                fill
                className="object-cover"
              />
            </div>
            {/* <span className="font-serif text-2xl font-semibold tracking-tight text-[#3B241A]">
              Saurav Furnitures
            </span> */}
          </Link>

          <nav className="hidden h-full items-center gap-1 lg:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex h-full items-center px-4 text-sm font-medium text-[#3B241A] transition-colors hover:text-[#5B3A29]"
              >
                {link.label}
                <span className="absolute bottom-5 left-4 h-0.5 w-0 rounded-full bg-[#C6A77D] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 rounded-full border border-[#C6A77D]/65 bg-white px-5 py-2.5 text-sm font-semibold text-[#5B3A29] transition-all hover:border-[#C6A77D] hover:bg-[#F7F3EE]"
            >
              <Phone className="h-4 w-4" />
              Book Showroom Visit
            </Link>
          </nav>

          <div className="lg:hidden">
            <MobileNav categories={categories} />
          </div>
        </div>
      </div>

      <nav className="hidden h-14 border-t border-[#E8DCCF]/70 lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center gap-2">
            {categories.map((category) => (
              <CategoryDropdown key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav({ categories }: { categories: Category[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-[#F7F3EE]"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-[#3B241A]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[88vw] max-w-sm border-r border-[#E8DCCF] bg-[#FAF8F5] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-[#E8DCCF] p-5">
            <p className="font-serif text-xl font-semibold text-[#3B241A]">
              Saurav Furnitures
            </p>
            <Button variant="ghost" size="icon-sm" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5 text-[#3B241A]" />
            </Button>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto p-6">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
                Company
              </p>
              <div className="grid gap-2">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-base font-medium text-[#3B241A] transition-colors hover:bg-[#F7F3EE]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
                Shop Categories
              </p>
              {categories.map((category) => (
                <div key={category.slug} className="space-y-2 rounded-2xl border border-[#E8DCCF] bg-white/50 p-4">
                  <Link
                    href={`/products/${category.slug}`}
                    onClick={() => setOpen(false)}
                    className="block text-base font-semibold text-[#3B241A]"
                  >
                    {category.name}
                  </Link>
                  <div className="ml-2 flex flex-col gap-2 border-l-2 border-[#E8DCCF] pl-4">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={getCategoryHref(category.slug, sub.slug)}
                        onClick={() => setOpen(false)}
                        className="text-sm text-[#6B7280] transition-colors hover:text-[#5B3A29]"
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
      </SheetContent>
    </Sheet>
  );
}
