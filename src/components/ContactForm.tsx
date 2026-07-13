"use client";
import { useState } from "react";
import PremiumButton from "@/components/luxury/PremiumButton";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";

import { inquiryTypes } from "@/lib/constants";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: inquiryTypes[0],
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inquiryTypeWatch = watch("inquiryType");

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center animate-in fade-in duration-500">
        <p className="text-xl font-semibold text-primary">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-muted-foreground">
          Our team will contact you shortly with personalized assistance.
        </p>
      </div>
    );
  }

  const getInputStyle = (error?: string) => {
    const baseStyle =
      "w-full rounded-xl border bg-white px-4 py-3 text-foreground outline-none transition focus:ring-2";
    const normalStyle =
      "border-input focus:border-ring focus:ring-ring/30";
    const errorStyle =
      "border-red-500 focus:border-red-500 focus:ring-red-500/30";
    return `${baseStyle} ${error ? errorStyle : normalStyle}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Failed to send your message. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-secondary-foreground">
          Full Name
          <input
            type="text"
            placeholder="Your Name"
            className={getInputStyle(errors.name?.message)}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-secondary-foreground">
          Email Address
          <input
            type="email"
            placeholder="name@email.com"
            className={getInputStyle(errors.email?.message)}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-secondary-foreground">
          Phone Number
          <input
            type="tel"
            placeholder="+977..."
            className={getInputStyle(errors.phone?.message)}
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-xs text-red-500">{errors.phone.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-secondary-foreground">
          Inquiry Type
          <Controller
            control={control}
            name="inquiryType"
            render={({ field }) => (
              <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`${getInputStyle(errors.inquiryType?.message)} flex items-center justify-between cursor-pointer w-full text-left`}
                  >
                    <span className="truncate">{inquiryTypeWatch}</span>
                    <ChevronDown
                      className={`text-secondary-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-white border border-border rounded-xl shadow-lg p-0"
                  align="start"
                  style={{ width: "var(--radix-dropdown-menu-trigger-width)", minWidth: "16rem" }}
                >
                  {inquiryTypes.map((type) => (
                    <DropdownMenuItem
                      key={type}
                      className={`px-4 py-3 cursor-pointer transition-colors m-0 rounded-none border-b border-secondary last:border-none ${
                        inquiryTypeWatch === type
                          ? "bg-secondary text-primary font-medium focus:bg-secondary"
                          : "text-foreground hover:bg-gray-50 focus:bg-gray-50"
                      }`}
                      onClick={() => field.onChange(type)}
                    >
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          />
          {errors.inquiryType && (
            <span className="text-xs text-red-500">{errors.inquiryType.message}</span>
          )}
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-secondary-foreground">
        Project Details :
        <textarea
          placeholder="Tell us about your space, preferred style, timeline, and budget expectations."
          rows={5}
          className={getInputStyle(errors.message?.message)}
          {...register("message")}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message.message}</span>
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
