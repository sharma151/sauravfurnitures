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
      aria-label={`View ${product.name}`}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-[#E8DCCF] bg-[#FFFCF8] shadow-[0_26px_45px_-40px_rgba(59,36,26,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6A77D]/60 hover:shadow-[0_34px_70px_-42px_rgba(59,36,26,0.9)] focus:outline-none focus:ring-2 focus:ring-[#C6A77D] focus:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F3EE]">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.isNewArrival && (
          <span className="absolute left-4 top-4 rounded-full border border-[#C6A77D]/40 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#5B3A29]">
            New Arrival
          </span>
        )}
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
          {product.category}
        </p>
        <h3 className="text-xl font-semibold text-[#3B241A]">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#6B7280]">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm font-medium text-[#5B3A29]">Premium Craftsmanship</p>
          <span className="text-xs font-semibold text-[#C6A77D]">View Details</span>
        </div>
      </div>
    </article>
  );
}
