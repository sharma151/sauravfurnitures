import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wood works, sofa works, and iron welding. Custom furniture, polishing, upholstery, and metal fabrication. Expert craftsmanship at Saurav Furnitures.",
};

const services = [
  {
    id: "wood-works",
    title: "Wood Works",
    shortDescription:
      "From custom wood furniture to restoration — we bring expertise and precision to every project.",
    details: [
      "Custom wood furniture design and manufacturing",
      "Polishing & refinishing for a like-new look",
      "Repair & restoration of antique and modern pieces",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "sofa-works",
    title: "Sofa Works",
    shortDescription:
      "Transform your seating with custom designs, reupholstery, and foam replacement.",
    details: [
      "Custom sofa design to match your space",
      "Upholstery replacement with premium fabrics",
      "Foam replacement for renewed comfort",
      "Fabric customization — choose from hundreds of options",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    id: "iron-welding",
    title: "Iron Welding Works",
    shortDescription:
      "Industrial-grade metal fabrication for frames, gates, and structural elements.",
    details: [
      "Custom iron frames for beds and furniture",
      "Bed frames in various designs and finishes",
      "Industrial furniture and shelving",
      "Gate & structural welding for homes and commercial spaces",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-primaryText">Our Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-secondaryText">
        Expert craftsmanship across wood, upholstery, and metal. We bring your vision to life.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
