"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, User, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  // { href: "/helpdesk", label: "Book Service" },
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
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 h-14 px-6 text-[15px] font-semibold text-[#4A3728] transition-all outline-none",
          open ? "bg-[#F2E3CA]" : "hover:bg-[#F2E3CA]",
        )}
      >
        {category.name}
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-50 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-56 bg-white shadow-xl rounded-b-md">
          <ul className="p-2">
            {category.subcategories.map((sub) => (
              <li key={sub.slug}>
                <Link
                  href={getCategoryHref(category.slug, sub.slug)}
                  className="block w-full px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#F2E3CA] hover:text-black rounded-sm transition-colors"
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
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="bg-white border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#4A3728]"
          >
            Saurav Furnitures
          </Link>

          {/* Desktop main nav links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primaryText transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="lg:hidden">
              <MobileNav categories={categories} />
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR — Desktop hover dropdowns */}
      <nav className="hidden lg:block bg-[#FAF3E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {categories.map((category) => (
              <CategoryDropdown key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

// MOBILE SIDEBAR
function MobileNav({ categories }: { categories: any[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-[#F2E3CA]"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-[#4A3728]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] p-0 border-r-0 bg-[#FAF3E7]"
      >
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 text-left border-b bg-white">
            <SheetTitle className="text-[#4A3728] font-bold">
              Saurav Furnitures
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">
                Company
              </p>
              <div className="grid gap-3">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-[#4A3728]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Separator className="bg-black/5" />

            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">
                Shop Categories
              </p>
              {categories.map((category) => (
                <div key={category.slug} className="space-y-3">
                  <Link
                    href={`/products/${category.slug}`}
                    onClick={() => setOpen(false)}
                    className="block text-md font-bold text-[#4A3728]"
                  >
                    {category.name}
                  </Link>
                  <div className="ml-2 border-l-2 border-[#F2E3CA] pl-4 flex flex-col gap-3">
                    {category.subcategories.map((sub: any) => (
                      <Link
                        key={sub.slug}
                        href={getCategoryHref(category.slug, sub.slug)}
                        onClick={() => setOpen(false)}
                        className="text-[16px] text-gray-600 hover:text-black transition-colors"
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
