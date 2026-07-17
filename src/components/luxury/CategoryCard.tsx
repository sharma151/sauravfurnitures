import Link from "next/link";
import type { Category } from "@/types";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

interface CategoryCardProps {
  category: Category;
  image: string;
}

export default function CategoryCard({ category, image }: CategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_45px_-38px_rgba(59,36,26,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_32px_64px_-34px_rgba(59,36,26,0.6)]"
    >
      <div className="relative aspect-4/5 luxury-shimmer">
        <ImageWithSkeleton
          src={image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 767px) 100vw, (max-width: 1280px) 33vw, 24vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/78 via-foreground/28 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-2xl font-semibold text-secondary">{category.name}</h3>
          <p className="mt-2 text-sm font-medium tracking-wide text-secondary/90">Explore Collection</p>
        </div>
      </div>
    </Link>
  );
}
