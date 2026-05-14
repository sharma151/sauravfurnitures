import { getCategories } from "@/lib/data";
import CategoryCard from "@/components/luxury/CategoryCard";

const categoryImages: Record<string, string> = {
  bedroom: "/images/bedroom/bedroom.avif",
  "living-room": "/images/livingroom/livingroom.avif",
  dining: "/images/dining/dining.avif",
  mattress: "/images/carousel/carousel-4.svg",
  bedding: "/images/carousel/carousel-2.svg",
  office: "/images/office/office.avif",
  "new-arrival": "/images/carousel/carousel-1.svg",
};

export default function CategoryGrid() {
  const categories = getCategories().filter((c) => c.slug !== "new-arrival");

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => {
        const imgSrc =
          categoryImages[category.slug] || "/images/placeholder.svg";
        return (
          <CategoryCard
            key={category.slug}
            category={category}
            image={imgSrc}
          />
        );
      })}
    </div>
  );
}
