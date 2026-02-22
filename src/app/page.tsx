import HeroSection from "@/components/HeroSection";
import Carousel from "@/components/Carousel";
import CategoryGrid from "@/components/CategoryGrid";
import { getNewArrivals } from "@/lib/data";
import HomeProducts from "./HomeProducts";

const features = [
  {
    title: "20+ Years Experience",
    description: "Decades of craftsmanship and customer satisfaction",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Wood Quality",
    description: "Only the finest materials for lasting durability",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Skilled Craftsmanship",
    description: "Artisans dedicated to perfection in every detail",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your doorstep",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1h9M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const newArrivals = getNewArrivals();

  return (
    <>
      <HeroSection />
      <Carousel />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primaryText">Featured Categories</h2>
        <p className="mt-2 text-secondaryText">Discover our curated collections</p>
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>
      <section className="bg-section py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primaryText">New Arrivals</h2>
          <p className="mt-2 text-secondaryText">Fresh designs, fast delivery</p>
          <HomeProducts products={newArrivals} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primaryText">Why Choose Us</h2>
        <p className="mt-2 text-secondaryText">The Saurav Furnitures difference</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="text-accent">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-primaryText">{f.title}</h3>
              <p className="mt-2 text-sm text-secondaryText">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
