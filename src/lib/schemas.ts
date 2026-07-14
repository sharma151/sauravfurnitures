import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      // Matches optional +977 or +91 (with optional spaces/dashes), followed by exactly 10 digits
      return /^(?:\+?(?:977|91)[- ]?)?\d{10}$/.test(val);
    }, "Please enter a valid 10-digit phone number"),
  inquiryType: z.string().min(1, "Inquiry Type is required"),
  message: z
    .string()
    .min(10, "Project details must be at least 10 characters long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
