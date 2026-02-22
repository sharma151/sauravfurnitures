"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-highlight/30 p-8 text-center">
        <p className="text-lg font-medium text-primaryText">Thank you for your message!</p>
        <p className="mt-2 text-secondaryText">We will get back to you shortly.</p>
      </div>
    );
  }

  const inputClasses =
    "mt-2 block w-full rounded-lg border border-border px-4 py-3 text-primaryText placeholder-secondaryText/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 ease-in-out";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primaryText">
          Name
        </label>
        <input type="text" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} placeholder="Your name" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primaryText">
          Email
        </label>
        <input type="email" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} placeholder="your@email.com" />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primaryText">
          Phone
        </label>
        <input type="tel" id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} placeholder="+977 000-0000-000" />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primaryText">
          Message
        </label>
        <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClasses} placeholder="How can we help?" />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-cta px-6 py-4 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-ctaHover"
      >
        Send Message
      </button>
    </form>
  );
}
