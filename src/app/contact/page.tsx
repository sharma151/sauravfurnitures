import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Saurav Furnitures",
  description: "Get in touch for custom furniture and interior solutions.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
      {/* 1. Header: Minimal & Centered on mobile, left-aligned on desktop */}
      <header className="mb-16 border-b border-border pb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-primaryText sm:text-6xl">
          Let's build your <span className="text-cta">dream space.</span>
        </h1>
      </header>

      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* 2. Contact Info & Map (Left on Desktop, Bottom on Mobile) */}
        {/* order-2 moves this below the form on mobile. lg:order-1 moves it back to the left on desktop */}
        <div className="order-2 w-full space-y-12 lg:order-1 lg:w-5/12">
          {/* Address Section */}
          <section className="space-y-6">
            <div className="group flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-cta" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondaryText/70">
                  Showroom
                </h2>
                <address className="mt-2 not-italic text-secondaryText leading-relaxed">
                  Thasikhel, Lalitpur <br />
                  Near Hospice Nepal
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-cta" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondaryText/70">
                  Call
                </h2>
                <p className="mt-2 text-secondaryText">+977-9841469014</p>
                <p className="text-secondaryText">+977-9763200683</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-cta" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondaryText/70">
                  Email
                </h2>
                <p className="mt-2 text-secondaryText">
                  contact@sauravfurniture.com
                </p>
              </div>
            </div>
          </section>

          {/* Minimal Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm transition-opacity hover:opacity-95">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.68477762213!2d85.3151873740512!3d27.664780027370202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be7eb9c70d%3A0xc780a9c5fe60cec7!2sSaurav%20Furniture%20Udyog%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1772463998962!5m2!1sen!2snp"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* 3. Form (Top on Mobile, Right on Desktop) */}
        <div className="order-1 w-full lg:order-2 lg:w-7/12">
          <div className="rounded-2xl bg-card p-2 sm:p-0">
            <h2 className="mb-8 text-xl font-medium text-primaryText">
              Inquiry Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
