import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Sparkles,
  Award,
  TreePine,
  Users,
  Clock3,
  Hammer,
  Armchair,
  Wrench,
  Anvil,
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
    icon: <Hammer className="h-10 w-10 transition-colors duration-300" />,
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
    icon: <Armchair className="h-10 w-10 transition-colors duration-300" />,
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
    icon: <Wrench className="h-10 w-10 transition-colors duration-300" />,
  },
  {
    id: "iron-welding",
    title: "Iron Welding",
    shortDescription:
      "Precision metal fabrication for industrial frames, gates, and minimalist decor.",
    details: ["Iron Bed Frames", "Architectural Gates", "Steel Shelving Units"],
    icon: <Anvil className="h-10 w-10 transition-colors duration-300" />,
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
