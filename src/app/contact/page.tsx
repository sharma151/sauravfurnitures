import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Saurav Furnitures",
  description: "Get in touch for custom furniture and interior solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8f5f2] to-[#efe7df]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
            Let’s build your{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              dream space
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Reach out to us for custom furniture, interior design, and expert craftsmanship.
          </p>
        </header>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Showroom",
                  content: "Thasikhel, Lalitpur\nNear Hospice Nepal",
                },
                {
                  icon: Phone,
                  title: "Call",
                  content: "+977-9841469014\n+977-9763200683",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@sauravfurniture.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl border border-white/40 bg-white/70 p-5 backdrop-blur-md transition hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        {item.title}
                      </h3>
                      <p className="mt-1 whitespace-pre-line text-gray-700">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.68477762213!2d85.3151873740512!3d27.664780027370202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be7eb9c70d%3A0xc780a9c5fe60cec7!2sSaurav%20Furniture%20Udyog%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1772463998962!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                title="Location Map"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-2xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}