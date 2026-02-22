import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saurav Furnitures. Visit our showroom, call, or send a message. We're here to help with your furniture needs.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-primaryText">Contact Us</h1>
      <p className="mt-4 text-lg text-secondaryText">
        We&apos;d love to hear from you. Reach out for inquiries, quotes, or
        visits.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-primaryText">
            Get in Touch
          </h2>
          <div className="mt-6 space-y-6 border">
            <div>
              <h3 className="text-sm font-medium text-primaryText">Address</h3>
              <p className="mt-1 text-secondaryText">
                Thasikhel, Lalitpur.
                <br />
                Near Hospice Nepal.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primaryText">Phone</h3>
              <p className="mt-1 text-secondaryText">+977-9841469014</p>
              <p className="mt-1 text-secondaryText">+977-9763200683</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primaryText">Email</h3>
              <p className="mt-1 text-secondaryText">
                contact@sauravfurnitures.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primaryText">
                Working Hours
              </h3>
              <p className="mt-1 text-secondaryText">
                sun - fri: 7:00 AM - 6:00 PM
                <br />
                Saturday: 07:00 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-md">
          <h2 className="text-xl font-semibold text-primaryText">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border border-border shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d606.9336250574507!2d85.31794086610502!3d27.664816750273467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1771776636921!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our location on map"
          className="block"
        ></iframe>
      </div>
    </div>
  );
}
