import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/luxury/SectionHeading";
import PremiumButton from "@/components/luxury/PremiumButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium furniture services including custom woodwork, luxury upholstery, and metal fabrication.",
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
    <main>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#EFE4D7_0%,_#FAF8F5_45%,_#FAF8F5_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Luxury Services"
            title="End-To-End Furniture Services For Refined Interiors."
            description="From bespoke wood pieces to premium upholstery and precision metal detailing, we deliver complete solutions designed around your space."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                details={service.details}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Consultation & Space Review",
              description: "We evaluate your layout, style, and functional needs before design finalization.",
            },
            {
              title: "Design & Material Selection",
              description: "Choose curated materials, finishes, and dimensions with our expert guidance.",
            },
            {
              title: "Build, Delivery & Setup",
              description: "Precision production, premium finishing, and careful on-site installation.",
            },
          ].map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-[#E8DCCF] bg-[#FFFCF8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A77D]">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-[#3B241A]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] border border-[#C6A77D]/30 bg-gradient-to-br from-[#5B3A29] via-[#4A2F22] to-[#3B241A] p-10 text-[#F7F3EE] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8DCCF]">Custom Projects</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Need A Bespoke Furniture Solution?</h2>
          <p className="mt-4 max-w-3xl text-[#F7F3EE]/85">
            Share your ideas, dimensions, and style references. Our team will craft a personalized
            proposal tailored for your home or commercial space.
          </p>
          <PremiumButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 inline-flex bg-white/10 text-[#F7F3EE] hover:bg-white/20"
          >
            Start A Service Request
            <ArrowRight className="ml-1 h-4 w-4" />
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}
