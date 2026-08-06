import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/lib/data";
import SectionHeading from "@/components/luxury/SectionHeading";
import TestimonialCard from "@/components/luxury/TestimonialCard";
import CTABanner from "@/components/luxury/CTABanner";
import { homeFeatures, homeTestimonials } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saurav Furnitures | Custom Furniture & Restoration",
  description: "A digital showroom and manufacturing platform featuring a dynamic product catalog, custom quotation builder, and interactive consultation scheduling. Discover bespoke custom furniture, expert restoration, and interior design solutions. Handcrafted by experienced manufacturers.",
  openGraph: {
    title: "Saurav Furnitures | Custom Furniture & Restoration",
    description: "A digital showroom and manufacturing platform featuring a dynamic product catalog, custom quotation builder, and interactive consultation scheduling. Discover bespoke custom furniture, expert restoration, and interior design solutions. Handcrafted by experienced manufacturers.",
    url: "https://sauravfurniture.com",
  },
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Featured Categories"
          title="Curated Collections For Sophisticated Living."
          description="Discover custom bedroom, dining, living, and workspace solutions with refined textures and warm contemporary detailing."
        />
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Best Sellers"
            title="Furniture Loved By Modern Homes."
            description="Top-rated picks that combine comfort, statement design, and durable craftsmanship."
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Quality Service, Built Around Your Lifestyle."
          description="Every interaction is designed for convenience, confidence, and elevated design quality."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeFeatures.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-[0_22px_42px_-38px_rgba(59,36,26,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/55"
            >
              <div className="inline-flex rounded-2xl border border-accent/40 bg-secondary p-3 text-primary">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-secondary-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(125deg,#FAF8F5_0%,#F3E8DC_52%,#E8DCCF_100%)] p-10 shadow-[0_26px_55px_-46px_rgba(59,36,26,0.95)] sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Craft Narrative</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
            Where Contemporary Design Meets Timeless Craftsmanship.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We create immersive furniture experiences that feel like a private high-end showroom:
            warm tones, rich materials, and elegant forms with practical comfort.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved By Homeowners And Designers."
          description="Experiences from customers who wanted luxurious furniture that still feels warm and lived-in."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {homeTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-2xl border border-border/80 bg-white/60 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground sm:text-3xl">
            Saurav Furniture Udyog: Custom Furniture Manufacturer in Kathmandu & Lalitpur
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Welcome to <strong>Saurav Furniture Udyog Pvt. Ltd.</strong>, the premier custom furniture manufacturer and expert sofa maker in Nepal. Operating from our showroom in Kathmandu and manufacturing hub in Lalitpur, we specialize in crafting bespoke residential and commercial furniture tailored precisely to your lifestyle and aesthetic vision. Whether you are searching for intricate custom wood works, modern bedroom sets, luxurious living room pieces, or elegant dining arrangements, our master craftsmen bring over twenty years of dedicated expertise to every single project.
            </p>
            <p>
              At Saurav Furnitures, we firmly believe that true luxury lies in the details. As a trusted furniture maker in Lalitpur and Kathmandu, Nepal, we go beyond manufacturing to offer professional furniture restoration and comprehensive interior consultation services. From handcrafting a single custom sofa to fulfilling large-scale commercial orders, our unwavering commitment to quality ensures that every piece is built to endure, providing unparalleled comfort, durability, and style to your living spaces. Explore our exclusive collections today and discover why we remain the top choice for discerning homeowners and top interior designers across the region.
            </p>
          </div>
        </div>
      </section> */}

      <CTABanner />
    </>
  );
}
