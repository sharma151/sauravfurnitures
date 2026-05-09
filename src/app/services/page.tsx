import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services | Saurav Furnitures",
  description:
    "Expert craftsmanship in wood, upholstery, and metal fabrication.",
};

const services = [
  {
    id: "wood-works",
    title: "Wood Works",
    shortDescription:
      "Custom timber furniture and antique restoration with a focus on grain and durability.",
    details: [
      "Bespoke Tables & Chairs",
      "Premium Wood Polishing",
      "Structural Wood Repair",
    ],
    // activeColor: "group-hover:text-amber-600",
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Custom Woodworking Plane/Chisel Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 8l2-2V3m4 4l-2 2h-3m-6 3l-2 2a2 2 0 002 2h10a2 2 0 002-2l-2-2m-8 0V7a2 2 0 012-2h2a2 2 0 012 2v3m-6 0h6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21h18"
        />
      </svg>
    ),
  },
  {
    id: "sofa-works",
    title: "Sofa Works",
    shortDescription:
      "Luxurious reupholstery and ergonomic foam replacement for modern living rooms.",
    details: [
      "Custom Sofa Design",
      "Premium Fabric Selection",
      "Deep Comfort Cushioning",
    ],
    // activeColor: "group-hover:text-orange-500",
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Custom Armchair/Sofa Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 11V7a2 2 0 012-2h12a2 2 0 012 2v4m-16 0a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2m-16 0h16M7 19v2m10-2v2"
        />
      </svg>
    ),
  },
  {
    id: "iron-welding",
    title: "Iron Welding",
    shortDescription:
      "Precision metal fabrication for industrial frames, gates, and minimalist decor.",
    details: ["Iron Bed Frames", "Architectural Gates", "Steel Shelving Units"],
    // activeColor: "group-hover:text-indigo-600",
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Custom Welding/Spark/Metal Frame Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0h-4M3 7h4m0 0v11a2 2 0 002 2h6a2 2 0 002-2V7m-8 0h8m-5 7h2"
        />
        <circle
          cx="12"
          cy="12"
          r="1"
          strokeWidth={2}
          className="animate-pulse"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header with better detailing */}
      <div className="border-l-4 border-primaryText pl-6">
        <h1 className="text-4xl font-bold tracking-tight text-primaryText sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-secondaryText/80 italic">
          Mastering the elements of Wood, Fabric, and Steel to build your
          sanctuary.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col rounded-xl border border-transparent bg-white p-8 transition-all duration-300 hover:border-stone-200 hover:shadow-xl active:scale-[0.98]"
          >
            {/* Minimalist Icon Redesign */}
            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-cta text-stone-200 transition-all duration-300 $`}
            >
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-primaryText transition-colors group-hover:text-black">
              {service.title}
            </h3>

            <p className="mt-4 text-secondaryText leading-relaxed">
              {service.shortDescription}
            </p>

            <ul className="mt-6 space-y-3 border-t border-stone-100 pt-6">
              {service.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium text-secondaryText/70"
                >
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-stone-300 group-hover:bg-amber-800 transition-colors" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Subtle Hover Decoration */}
            <div className="absolute top-4 right-4 text-xs font-mono text-secondaryText-200 opacity-0 transition-opacity group-hover:opacity-100 uppercase">
              {service.id.replace("-", " ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
