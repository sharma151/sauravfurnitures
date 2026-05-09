import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-highlight/30 to-background">
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-28 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText sm:text-5xl lg:text-6xl">
            Trust, Comfort & Experience
          </h1>
          <p className="mt-6 text-lg text-secondaryText sm:text-xl">
            Premium furniture crafted with over 30+ years of expertise. Transform your living
            spaces with timeless design and exceptional quality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-secondaryText sm:flex-nowrap">
            <span>Built with Trust</span>
            <span className="hidden sm:inline">•</span>
            <span>Designed for Comfort</span>
            <span className="hidden sm:inline">•</span>
            <span>Crafted with Experience</span>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products/bedroom"
              className="inline-flex items-center justify-center rounded-lg bg-cta px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-ctaHover hover:shadow-lg"
            >
              Explore Collections
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-8 py-4 text-base font-semibold text-secondaryText transition-all duration-300 ease-in-out hover:bg-highlight"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
