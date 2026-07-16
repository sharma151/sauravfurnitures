import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.images[0] || "/images/placeholder.svg";

  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      aria-label={`View ${product.name}`}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-[0_26px_45px_-40px_rgba(59,36,26,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_34px_70px_-42px_rgba(59,36,26,0.9)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 block"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.isNewArrival && (
          <span className="absolute left-4 top-4 rounded-full border border-accent/40 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            New Arrival
          </span>
        )}
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {product.category}
        </p>
        <h3 className="text-xl font-semibold text-secondary-foreground">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm font-medium text-primary">Premium Craftsmanship</p>
          <span className="text-xs font-semibold text-accent">View Details</span>
        </div>
      </div>
    </Link>
  );
}
