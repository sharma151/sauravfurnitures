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
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-sm font-medium text-primaryText">
          <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {product.rating}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-secondaryText">
          {product.category}
        </p>
        <h3 className="mt-1 font-semibold text-primaryText">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-secondaryText">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          {/* <span className="text-lg font-semibold text-accent">${product.price.toLocaleString()}</span> */}
          <span className="text-xs text-secondaryText">{product.deliveryTime}</span>
        </div>
      </div>
    </article>
  );
}
