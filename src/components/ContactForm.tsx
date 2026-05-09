"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-12 text-center animate-in fade-in duration-500">
        <p className="text-xl font-semibold text-amber-600">
          Thank you!
        </p>
        <p className="mt-2 text-gray-600">
          We'll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputStyle =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your Name"
          required
          className={inputStyle}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className={inputStyle}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <input
        type="tel"
        placeholder="Phone Number"
        className={inputStyle}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Your Message"
        rows={4}
        className={inputStyle}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-cta py-3 font-semibold text-white transition hover:shadow-lg hover:scale-[1.02] active:scale-95"
      >
        Send Inquiry
      </button>
    </form>
  );
}