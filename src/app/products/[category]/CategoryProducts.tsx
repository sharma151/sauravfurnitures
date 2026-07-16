import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

interface CategoryProductsProps {
  products: Product[];
  categorySlug: string;
}

export default function CategoryProducts({
  products,
  categorySlug,
}: CategoryProductsProps) {
  if (products.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-border bg-section p-12 text-center">
        <p className="text-lg text-secondaryText">
          No products found in this category yet.
        </p>
        <p className="mt-2 text-sm text-secondaryText/80">
          Check back soon for new arrivals!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

