"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Wrench,
  Calendar,
  MessageSquare,
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
    <div className="max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Direct Call Section */}
      <div className="md:w-1/3 bg-blue-400 p-8 text-white flex flex-col justify-center items-center text-center">
        <div className="bg-white/20 p-4 rounded-full mb-4">
          <Phone size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Need Help Fast?</h2>
        <p className="text-green-100 mb-6 text-sm">
          Call us directly to talk to a carpenter right now.
        </p>
        <a
          href="tel:+1234567890"
          className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md"
        >
          Call: 98765-43210
        </a>
      </div>

      {/* Booking Form Section */}
      <div className="md:w-2/3 p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Wrench size={20} className="text-green-600" />
          Book a Visit
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 outline-none"
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="service"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 outline-none bg-white"
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 outline-none"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="details"
            placeholder="Tell us what is broken or what you need..."
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 outline-none"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
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
