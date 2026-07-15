import Link from "next/link";
import { getCategories } from "@/lib/data";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { footerServices, quickLinks } from "@/lib/constants";

export default function Footer() {
  const categories = getCategories().filter((c) => c.slug !== "new-arrival");

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.jpg"
                alt="Saurav Furnitures logo"
                width={220}
                height={90}
                className="w-32 h-auto sm:w-40 md:w-48 lg:w-52 object-contain"
              />
            </Link>
            {/* <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-secondary-foreground"
            >
              Saurav Furnitures
            </Link> */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A modern luxury furniture house blending artisanal craftsmanship,
              timeless silhouettes, and warm contemporary living.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582617441183"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white p-2.5 text-secondary-foreground transition-all hover:border-accent hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sauravfurnitures"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white p-2.5 text-secondary-foreground transition-all hover:border-accent hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saurav Furnitures. Curated comfort.
          Crafted luxury.
        </div>
      </div>
    </footer>
  );
}
