"use client";

import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const imageSrc = product.images[0] || "/images/placeholder.svg";

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-section">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.isNewArrival && (
          <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-medium text-white">
            New Arrival
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-secondaryText">
          {product.category}
        </p>
        <h3 className="mt-1 font-semibold text-primaryText">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-secondaryText">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between"></div>
      </div>
    </article>
  );
}
