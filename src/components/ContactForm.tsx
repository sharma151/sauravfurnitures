"use client";
import { useState, useRef, useEffect } from "react";
import PremiumButton from "@/components/luxury/PremiumButton";
import emailjs from "@emailjs/browser";
import { ChevronDown } from "lucide-react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (form.phone && !/^\+?[\d\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.message.trim()) {
      newErrors.message = "Project Details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] p-8 text-center animate-in fade-in duration-500">
        <p className="text-xl font-semibold text-[#5B3A29]">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-[#6B7280]">
          Our team will contact you shortly with personalized assistance.
        </p>
      </div>
    );
  }

  const getInputStyle = (error?: string) => {
    const baseStyle =
      "w-full rounded-xl border bg-white px-4 py-3 text-[#2B2B2B] outline-none transition focus:ring-2";
    const normalStyle =
      "border-[#E8DCCF] focus:border-[#C6A77D] focus:ring-[#C6A77D]/30";
    const errorStyle =
      "border-red-500 focus:border-red-500 focus:ring-red-500/30";
    return `${baseStyle} ${error ? errorStyle : normalStyle}`;
  };

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        inquiry_type: form.inquiryType,
        project_description: form.message,
      };
      emailjs.init(publicKey);
      await emailjs.send(serviceID, templateID, templateParams);
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[#3B241A]">
          Full Name
          <input
            type="text"
            placeholder="Your Name"
            className={getInputStyle(errors.name)}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-[#3B241A]">
          Email Address
          <input
            type="email"
            placeholder="name@email.com"
            className={getInputStyle(errors.email)}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[#3B241A]">
          Phone Number
          <input
            type="tel"
            placeholder="+977..."
            className={getInputStyle(errors.phone)}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <span className="text-xs text-red-500">{errors.phone}</span>
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-[#3B241A]">
          Inquiry Type
          <div className="relative" ref={dropdownRef}>
            <div
              className={`${getInputStyle()} flex items-center justify-between cursor-pointer`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="truncate">{form.inquiryType}</span>
              <ChevronDown
                className={`text-[#3B241A] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                size={20}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute z-10 w-full mt-2 overflow-hidden bg-white border border-[#E8DCCF] rounded-xl shadow-lg animate-in fade-in zoom-in-95 duration-200">
                {inquiryTypes.map((type) => (
                  <div
                    key={type}
                    className={`px-4 py-3 cursor-pointer transition-colors ${
                      form.inquiryType === type
                        ? "bg-[#F7F3EE] text-[#5B3A29] font-medium"
                        : "text-[#2B2B2B] hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setForm({ ...form, inquiryType: type });
                      setDropdownOpen(false);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-[#3B241A]">
        Project Details :
        <textarea
          placeholder="Tell us about your space, preferred style, timeline, and budget expectations."
          rows={5}
          className={getInputStyle(errors.message)}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </label>

      {submitError && (
        <div className="text-sm text-red-500 text-center">{submitError}</div>
      )}
      <PremiumButton
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </PremiumButton>
    </form>
  );
}
