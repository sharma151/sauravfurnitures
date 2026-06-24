import categoriesData from "@/data/categories.json";
import bedroomData from "@/data/products/bedroom.json";
import livingRoomData from "@/data/products/living-room.json";
import diningData from "@/data/products/dining.json";
import officeData from "@/data/products/office.json";
import newArrivalsData from "@/data/products/new-arrivals.json";
import type { Category, Product } from "@/types";

export const categories: Category[] = categoriesData as Category[];

/**
 * All products merged from individual category JSON files.
 * To add products to a category, edit the corresponding file in src/data/products/.
 */
export const products: Product[] = [
  ...(bedroomData as unknown as Product[]),
  ...(livingRoomData as unknown as Product[]),
  ...(diningData as unknown as Product[]),
  ...(officeData as unknown as Product[]),
  ...(newArrivalsData as unknown as Product[]),
];

export function getCategories(): Category[] {
  return categories;
}

export function getProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: string, subcategory?: string): Product[] {
  if (category === "new-arrival") {
    if (subcategory === "fast-delivery") {
      return products.filter((p) => p.isNewArrival && p.deliveryTime.includes("5-7"));
    }
    return products.filter((p) => p.isNewArrival);
  }
  return products.filter((p) => {
    if (subcategory && subcategory !== "all") {
      return p.category === category && p.subcategory === subcategory;
    }
    return p.category === category;
  });
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.rating >= 4.7).slice(0, 6);
}
