export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface ProductDimensions {
  length: string;
  width: string;
  height: string;
}

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
