import type { Metadata } from "next";
import {
  Hammer,
  TreePine,
  ShieldCheck,
  Users,
  PencilRuler,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saurav Furnitures - 20+ years of wood craftsmanship, quality commitment, and custom furniture solutions. Trust, Comfort & Experience.",
};

const sections = [
  {
    title: "Our Story",
    icon: Hammer,
    color: "from-amber-500 to-orange-600",
    content:
      "For over three decades, Saurav Furnitures has been a trusted name in premium furniture. What started as a small workshop has grown into a brand synonymous with quality, craftsmanship, and timeless design. Our journey is built on a simple promise: to deliver furniture that lasts generations.",
  },
  {
    title: "Expertise in Wood Craftsmanship",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    content:
      "We specialize in transforming the finest woods into functional art. From Sheesham and teak to engineered wood, every piece is selected for durability and beauty. Our artisans bring decades of experience to every cut, joint, and finish.",
  },
  {
    title: "Commitment to Quality",
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-600",
    content:
      "Quality is never an accident. We implement strict quality checks at every stage — from sourcing raw materials to the final polish. Every piece that leaves our workshop carries our warranty and our reputation.",
  },
  {
    title: "Skilled Artisans",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    content:
      "Our craftsmen are the heart of Saurav Furnitures. Trained in traditional and modern techniques, they take pride in every detail. Their skill ensures that each piece is not just furniture — it’s a statement of excellence.",
  },
  {
    title: "Custom Furniture Solutions",
    icon: PencilRuler,
    color: "from-yellow-500 to-amber-600",
    content:
      "We understand that every space and every customer is unique. That’s why we offer custom furniture solutions — tailored to your dimensions, style, and preferences. From concept to delivery, we work with you to create pieces that fit perfectly.",
  },
  {
    title: "Sustainability & Responsible Sourcing",
    icon: Leaf,
    color: "from-lime-500 to-green-600",
    content:
      "We believe in responsible craftsmanship. Our wood is sourced from sustainable suppliers, and we minimize waste at every step. By choosing Saurav Furnitures, you’re supporting a brand that cares for the planet as much as it cares for your home.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-linear-to-b from-[#f8f5f2] to-[#efe7df]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Trust, Comfort & Experience — this is what we stand for at Saurav Furnitures.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-10 bg-linear-to-br ${section.color}`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${section.color} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                {/* Content */}
                <p className="mt-3 leading-relaxed text-gray-600">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}