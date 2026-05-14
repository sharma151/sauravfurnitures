"use client";
import { useState } from "react";
import PremiumButton from "@/components/luxury/PremiumButton";

const inquiryTypes = [
  "Custom Furniture",
  "Showroom Visit",
  "Interior Consultation",
  "Bulk / Commercial Order",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  console.log("Contact Form Data:", form);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] p-8 text-center animate-in fade-in duration-500">
        <p className="text-xl font-semibold text-[#5B3A29]">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-[#6B7280]">
          Our design team will contact you shortly with personalized assistance.
        </p>
      </div>
    );
  }

  const inputStyle =
    "w-full rounded-xl border border-[#E8DCCF] bg-white px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C6A77D] focus:ring-2 focus:ring-[#C6A77D]/30";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#3B241A]">
          Full Name
          <input
            type="text"
            placeholder="Your Name"
            required
            className={inputStyle}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#3B241A]">
          Email Address
          <input
            type="email"
            placeholder="name@email.com"
            required
            className={inputStyle}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#3B241A]">
          Phone Number
          <input
            type="tel"
            placeholder="+977..."
            className={inputStyle}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#3B241A]">
          Inquiry Type
          <select
            className={inputStyle}
            value={form.inquiryType}
            onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm  font-medium text-[#3B241A]">
        Project Details :
        <textarea
          placeholder="Tell us about your space, preferred style, timeline, and budget expectations."
          rows={5}
          required
          className={inputStyle}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>

      <PremiumButton type="submit" size="lg" className="w-full">
        Send Inquiry
      </PremiumButton>
    </form>
  );
}
