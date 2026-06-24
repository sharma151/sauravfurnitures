import Link from "next/link";
import { getCategories } from "@/lib/data";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const services = [
  { name: "Wood Works", href: "/services#wood-works" },
  { name: "Sofa Works", href: "/services#sofa-works" },
  { name: "Iron Welding Works", href: "/services#iron-welding" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const categories = getCategories().filter((c) => c.slug !== "new-arrival");

  return (
    <footer className="border-t border-[#E8DCCF] bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-[#3B241A]"
            >
              Saurav Furnitures
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6B7280]">
              A modern luxury furniture house blending artisanal craftsmanship,
              timeless silhouettes, and warm contemporary living.
            </p>
            <div className="relative h-24 max-w-50 shrink-0 overflow-hidden rounded-lg border border-border">
              <Image
                src="../../public/images/logo.jpg"
                alt={`logo`}
                fill
                // className="object-cover"
              />
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E8DCCF] bg-white p-2.5 text-[#3B241A] transition-all hover:border-[#C6A77D] hover:text-[#5B3A29]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E8DCCF] bg-white p-2.5 text-[#3B241A] transition-all hover:border-[#C6A77D] hover:text-[#5B3A29]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E8DCCF] bg-white p-2.5 text-[#3B241A] transition-all hover:border-[#C6A77D] hover:text-[#5B3A29]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#3B241A]">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#5B3A29]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#3B241A]">Categories</h3>
            <ul className="mt-4 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#5B3A29]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#3B241A]">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#5B3A29]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E8DCCF] pt-8 text-center text-sm text-[#6B7280]">
          © {new Date().getFullYear()} Saurav Furnitures. Curated comfort.
          Crafted luxury.
        </div>
      </div>
    </footer>
  );
}
