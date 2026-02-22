"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DropdownMenuProps {
  category: Category;
}

export default function ReusableDropdown({ category }: DropdownMenuProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* The Trigger is the top-level Category name */}
          <NavigationMenuTrigger className="bg-transparent  px-4 py-2 text-sm font-medium text-primaryText transition-colors">
            {category.name}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-55 gap-1 bg-card  rounded-xl ">
              {category.subcategories.map((sub) => {
                const href =
                  category.slug === "new-arrival"
                    ? `/products/new-arrival/${sub.slug}`
                    : `/products/${category.slug}${sub.slug !== "all" ? `/${sub.slug}` : ""}`;

                const isActive =
                  pathname.includes(category.slug) &&
                  pathname.includes(sub.slug);

                return (
                  <li key={sub.slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className={`block select-none rounded-md px-5 py-2.5 text-sm no-underline outline-none transition-colors hover:bg-highlight hover:text-accent focus:bg-highlight focus:text-accent ${
                          isActive
                            ? "bg-highlight font-medium text-accent"
                            : "text-primaryText"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
