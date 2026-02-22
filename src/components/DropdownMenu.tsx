"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types";

interface DropdownMenuProps {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}

export default function DropdownMenu({ category, isOpen, onClose }: DropdownMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-border bg-card py-3 shadow-soft transition-all duration-300"
      onMouseLeave={onClose}
    >
      {category.subcategories.map((sub) => (
        <Link
          key={sub.slug}
          href={
            category.slug === "new-arrival"
              ? `/products/new-arrival/${sub.slug}`
              : `/products/${category.slug}${sub.slug !== "all" ? `/${sub.slug}` : ""}`
          }
          onClick={onClose}
          className={`block px-5 py-2.5 text-sm transition-colors hover:bg-highlight ${
            pathname.includes(category.slug) && pathname.includes(sub.slug)
              ? "bg-highlight font-medium text-accent"
              : "text-primaryText"
          }`}
        >
          {sub.name}
        </Link>
      ))}
    </div>
  );
}
