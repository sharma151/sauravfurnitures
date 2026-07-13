"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import type { Product } from "@/types";

interface HomeProductsProps {
  products: Product[];
}

export default function HomeProducts({ products }: HomeProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-border bg-card p-4">
              <div className="luxury-shimmer h-56 rounded-2xl" />
              <div className="mt-4 space-y-3">
                <div className="luxury-shimmer h-3 w-24 rounded-full" />
                <div className="luxury-shimmer h-5 w-3/4 rounded-full" />
                <div className="luxury-shimmer h-4 w-full rounded-full" />
                <div className="luxury-shimmer h-4 w-5/6 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>
      )}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
