import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/luxury/SectionHeading";
import PremiumButton from "@/components/luxury/PremiumButton";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Saurav Furnitures for luxury custom furniture and interior consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#EFE4D7_0%,#FAF8F5_45%,#FAF8F5_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact Us"
            title="Let’s Create A Refined Space You’ll Love Living In."
            description="Reach out for bespoke furniture, design consultation, or showroom appointments. We usually respond within one business day."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Workshop",
                  content: "Thasikhel, Lalitpur\nNear Hospice Nepal",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+977-9841469013\n+977-9803002432\n+977-9763200683",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@sauravfurniture.com",
                },
                {
                  icon: Clock3,
                  title: "Hours",
                  content:
                    "Sun - Fri: 9:00 AM - 7:00 PM\nSaturday: 9:00 AM - 3:00 PM",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-[#E8DCCF] bg-[#FFFCF8] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex rounded-2xl border border-[#C6A77D]/35 bg-[#F7F3EE] p-3 text-[#5B3A29]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                          {item.title}
                        </h3>
                        <p className="mt-1 whitespace-pre-line text-[#3B241A]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="overflow-hidden rounded-3xl border border-[#E8DCCF] shadow-[0_26px_55px_-45px_rgba(59,36,26,0.9)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.68477762213!2d85.3151873740512!3d27.664780027370202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be7eb9c70d%3A0xc780a9c5fe60cec7!2sSaurav%20Furniture%20Udyog%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1772463998962!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Saurav Furnitures showroom map"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[#E8DCCF] bg-[#FFFCF8] p-8 shadow-[0_28px_60px_-50px_rgba(59,36,26,0.92)]">
                <h2 className="text-2xl font-semibold text-[#3B241A]">
                  Send A  Inquiry
                </h2>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Tell us about your project and we’ll share tailored design
                  recommendations.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#C6A77D]/35 bg-linear-to-br from-[#5B3A29] via-[#4A2F22] to-[#3B241A] p-8 text-[#F7F3EE]">
                <h3 className="text-2xl font-semibold">
                  Need Immediate Assistance?
                </h3>
                <p className="mt-2 text-sm text-[#F7F3EE]/80">
                  Connect with our team for urgent project timelines and quick
                  expert guidance.
                </p>
                <PremiumButton
                  href="tel:9841469014"
                  variant="secondary"
                  size="lg"
                  className="mt-6 inline-flex bg-white/10 text-[#F7F3EE] hover:bg-white/20"
                >
                  Call Now: 98414-69013
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
