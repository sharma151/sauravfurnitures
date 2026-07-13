import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Sparkles,
  Award,
  TreePine,
  Users,
  Clock3,
} from "lucide-react";

// --- Navbar & Footer ---
export const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  // { href: "/ourworks", label: "Our Works" },
];

export const footerServices = [
  { name: "Wood Works", href: "/services#wood-works" },
  { name: "Sofa Works", href: "/services#sofa-works" },
  { name: "Iron Welding Works", href: "/services#iron-welding" },
];

export const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

// --- Carousel ---
export const carouselSlides = [
  { src: "/images/carousel/carousel-1.svg", alt: "Premium Bedroom Collection" },
  { src: "/images/carousel/carousel-2.svg", alt: "Living Room Furniture" },
  { src: "/images/carousel/carousel-3.svg", alt: "Dining & Office Solutions" },
  {
    src: "/images/carousel/carousel-4.svg",
    alt: "Trust, Comfort & Experience",
  },
];

// --- Contact Form ---
export const inquiryTypes = [
  "Workshop Visit",
  "Product Inquiry",
  "Custom Furniture",
  "Restoration / Repair",
  "Interior Consultation",
  "Bulk / Commercial Order",
];

// --- Home Page ---
export const homeFeatures = [
  {
    title: "Heritage Craftsmanship",
    description:
      "Built by skilled artisans with decades of woodworking expertise.",
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: "Premium Material Selection",
    description:
      "Engineered wood, solid hardwood, and luxe upholstery sourced responsibly.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Elegant Modern Design",
    description:
      "Refined silhouettes crafted to complement contemporary interiors.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Sustainable Production",
    description:
      "Thoughtful production with eco-conscious methods and long-lasting quality.",
    icon: <Leaf className="h-6 w-6" />,
  },
];

export const homeTestimonials = [
  {
    quote:
      "The design team transformed our space with furniture that feels warm, elegant, and incredibly premium.",
    author: "Aakriti Sharma",
    role: "Interior Client, Kathmandu",
  },
  {
    quote:
      "From finish quality to delivery experience, everything felt high-end and deeply professional.",
    author: "Ritvik Thapa",
    role: "Homeowner",
  },
  {
    quote:
      "A rare blend of modern aesthetics and handcrafted details. Every piece looks timeless in our home.",
    author: "Nina Gurung",
    role: "Architect",
  },
];

// --- Services Page ---
export const serviceCardsData = [
  {
    id: "wood-works",
    title: "Wood Works",
    shortDescription:
      "Custom timber furniture and antique restoration with a focus on grain and durability.",
    details: [
      "Bespoke Tables, Chairs & Cabinets",
      "Premium Wood Polishing",
      "Structural Wood Repair",
    ],
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
    id: "furniture-restoration",
    title: "Furniture Restoration",
    shortDescription:
      "Expert revival of vintage and heirloom pieces through meticulous stripping, staining, and structural repair.",
    details: [
      "Antique Wood Refinishing",
      "Structural Joint Repair",
      "Custom Upholstery",
    ],
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7h16M4 7v10a1 1 0 001 1h14a1 1 0 001-1V7M4 7l2-4h12l2 4M10 12h4m-2 6v.01"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 12l2 2m0-2l-2 2"
          className="animate-pulse"
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
    icon: (
      <svg
        className="h-10 w-10 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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

export const serviceSteps = [
  {
    title: "Consultation & Space Review",
    description:
      "We evaluate your layout, style, and functional needs before design finalization.",
  },
  {
    title: "Design & Material Selection",
    description:
      "Choose curated materials, finishes, and dimensions with our expert guidance.",
  },
  {
    title: "Build, Delivery & Setup",
    description:
      "Precision production, premium finishing, and careful on-site installation.",
  },
];

// --- About Page ---
export const aboutValues = [
  {
    title: "Heritage Craftsmanship",
    icon: Award,
    content:
      "For over two decades, our artisans have crafted furniture with a timeless blend of precision, soul, and enduring quality.",
  },
  {
    title: "Material Excellence",
    icon: TreePine,
    content:
      "From premium hardwood to high-grade upholstery and metal details, every material is selected for beauty, durability, and performance.",
  },
  {
    title: "Design-Led Process",
    icon: Sparkles,
    content:
      "Each piece balances  aesthetics with practical comfort, ensuring your home feels both elevated and truly livable.",
  },
  {
    title: "Trusted Quality Promise",
    icon: ShieldCheck,
    content:
      "Our quality checks span every phase from design and sourcing to finishing, so every furniture piece leaves with confidence.",
  },
];

export const aboutStats = [
  { label: "Years Legacy", value: "25+" },
  { label: "Projects Delivered", value: "5,000+" },
];

export const aboutPhilosophyItems = [
  {
    icon: Users,
    title: "Collaborative Design",
    description: "Your lifestyle guides each furniture concept.",
  },
  {
    icon: Clock3,
    title: "Long-Term Value",
    description: "Built to last in style and structure for years.",
  },
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    description: "Thoughtful material choices with sustainability in mind.",
  },
];
