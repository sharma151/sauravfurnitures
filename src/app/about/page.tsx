import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saurav Furnitures - 20+ years of wood craftsmanship, quality commitment, and custom furniture solutions. Trust, Comfort & Experience.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-primaryText">About Us</h1>
      <p className="mt-4 text-lg text-secondaryText">
        Trust, Comfort & Experience — this is what we stand for at Saurav Furnitures.
      </p>

      <section className="mt-12 space-y-8 text-secondaryText">
        <div>
          <h2 className="text-2xl font-semibold text-primaryText">Our Story</h2>
          <p className="mt-4 leading-relaxed">
            For over three decades, Saurav Furnitures has been a trusted name in premium furniture.
            What started as a small workshop has grown into a brand synonymous with quality,
            craftsmanship, and timeless design. Our journey is built on a simple promise: to deliver
            furniture that lasts generations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primaryText">
            Expertise in Wood Craftsmanship
          </h2>
          <p className="mt-4 leading-relaxed">
            We specialize in transforming the finest woods into functional art. From Sheesham and
            teak to engineered wood, every piece is selected for durability and beauty. Our artisans
            bring decades of experience to every cut, joint, and finish.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primaryText">
            Commitment to Quality
          </h2>
          <p className="mt-4 leading-relaxed">
            Quality is never an accident. We implement strict quality checks at every stage —
            from sourcing raw materials to the final polish. Every piece that leaves our workshop
            carries our warranty and our reputation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primaryText">Skilled Artisans</h2>
          <p className="mt-4 leading-relaxed">
            Our craftsmen are the heart of Saurav Furnitures. Trained in traditional and modern
            techniques, they take pride in every detail. Their skill ensures that each piece is
            not just furniture — it&apos;s a statement of excellence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primaryText">
            Custom Furniture Solutions
          </h2>
          <p className="mt-4 leading-relaxed">
            We understand that every space and every customer is unique. That&apos;s why we offer
            custom furniture solutions — tailored to your dimensions, style, and preferences.
            From concept to delivery, we work with you to create pieces that fit perfectly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primaryText">
            Sustainability & Responsible Sourcing
          </h2>
          <p className="mt-4 leading-relaxed">
            We believe in responsible craftsmanship. Our wood is sourced from sustainable
            suppliers, and we minimize waste at every step. By choosing Saurav Furnitures,
            you&apos;re supporting a brand that cares for the planet as much as it cares for
            your home.
          </p>
        </div>
      </section>
    </div>
  );
}
