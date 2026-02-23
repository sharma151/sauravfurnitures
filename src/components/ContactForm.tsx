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
        <p className="text-lg font-medium text-cta">Thank you.</p>
        <p className="text-slate-500">We'll be in touch shortly.</p>
      </div>
    );
  }

  const inputBase =
    "w-full border-b border-slate-200 bg-transparent py-3 outline-none transition-all focus:border-cta text-slate-900 placeholder:text-slate-300";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2"
    >
      <div className="sm:col-span-1">
        <input
          type="text"
          placeholder="Your Name"
          required
          className={inputBase}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="sm:col-span-1">
        <input
          type="email"
          placeholder="Email Address"
          required
          className={inputBase}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2">
        <input
          type="tel"
          placeholder="Phone Number"
          className={inputBase}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2">
        <textarea
          placeholder="Message"
          rows={3}
          className={inputBase}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2 pt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-cta active:scale-95"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
