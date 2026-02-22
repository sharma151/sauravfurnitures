import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/data";

const categoryImages: Record<string, string> = {
  bedroom: "/images/placeholder.svg",
  "living-room": "/images/placeholder.svg",
  dining: "/images/placeholder.svg",
  mattress: "/images/placeholder.svg",
  bedding: "/images/placeholder.svg",
  office: "/images/placeholder.svg",
  "new-arrival": "/images/placeholder.svg",
};

export default function CategoryGrid() {
  const categories = getCategories().filter((c) => c.slug !== "new-arrival");

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const imgSrc = categoryImages[category.slug] || "/images/placeholder.svg";
        return (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="group relative overflow-hidden rounded-xl border border-border bg-section shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={imgSrc}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="mt-1 text-sm text-white/90">Explore collection</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
