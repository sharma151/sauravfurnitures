"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Wrench,
  CheckCircle,
} from "lucide-react";

interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  details: string;
}

const FurnitureRepairHub: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Booking Request:", formData);
    alert("Thank you! We have received your request and will call you soon.");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto my-10 flex max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-card font-sans shadow-lg md:flex-row">
      {/* Direct Call Section */}
      <div className="flex flex-col items-center justify-center bg-cta p-8 text-center text-white md:w-1/3">
        <div className="mb-4 rounded-full bg-white/15 p-4">
          <Phone size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Need Help Fast?</h2>
        <p className="mb-6 text-sm text-white/85">
          Call us directly to talk to a carpenter right now.
        </p>
        <a
          href="tel:+1234567890"
          className="rounded-full bg-white px-6 py-3 font-bold text-primaryText shadow-md transition-colors hover:bg-highlight"
        >
          Call: 98765-43210
        </a>
      </div>

      {/* Booking Form Section */}
      <div className="p-8 md:w-2/3">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-primaryText">
          <Wrench size={20} className="text-accent" />
          Book a Visit
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-border bg-transparent p-3 text-primaryText outline-none transition-colors placeholder:text-secondaryText/60 focus:border-cta"
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-lg border border-border bg-transparent p-3 text-primaryText outline-none transition-colors placeholder:text-secondaryText/60 focus:border-cta"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="service"
              required
              className="w-full rounded-lg border border-border bg-card p-3 text-primaryText outline-none transition-colors focus:border-cta"
              onChange={handleChange}
            >
              <option value="">What do you need?</option>
              <option value="repair">Furniture Repair</option>
              <option value="polish">Polishing / Painting</option>
              <option value="cleaning">Sofa/Bed Cleaning</option>
              <option value="new">New Custom Furniture</option>
            </select>
            <input
              name="date"
              type="date"
              required
              className="w-full rounded-lg border border-border bg-transparent p-3 text-primaryText outline-none transition-colors focus:border-cta"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="details"
            placeholder="Tell us what is broken or what you need..."
            rows={3}
            className="w-full rounded-lg border border-border bg-transparent p-3 text-primaryText outline-none transition-colors placeholder:text-secondaryText/60 focus:border-cta"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta py-3 font-bold text-white transition-colors hover:bg-ctaHover"
          >
            <CheckCircle size={18} />
            Book My Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default FurnitureRepairHub;
