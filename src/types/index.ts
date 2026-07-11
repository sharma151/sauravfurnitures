export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

/**
 * Dimensions vary widely across product types (beds, round tables, bookshelves, etc.).
 * Use a flexible record so each product can describe its own dimension keys.
 * Examples: { length, width, height } | { diameter, height } | { width, depth } | { height }
 */
export type ProductDimensions = Record<string, string>;

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  features: string[];
  dimensions: ProductDimensions;
  materials: string[];
  careInstructions: string;
  stock: number;
  rating: number;
  reviews: number;
  images: string[];
  isNewArrival: boolean;
  deliveryTime: string;
}
