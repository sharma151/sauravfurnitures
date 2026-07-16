import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  emptySubMessage?: string;
}

export default function ProductGrid({ 
  products, 
  emptyMessage = "No products found in this category yet.",
  emptySubMessage = "Check back soon for new arrivals!"
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-border bg-section p-12 text-center">
        <p className="text-lg text-secondaryText">
          {emptyMessage}
        </p>
        <p className="mt-2 text-sm text-secondaryText/80">
          {emptySubMessage}
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
