import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^\+?[\d\s-]{7,15}$/.test(val);
  }, "Please enter a valid phone number"),
  inquiryType: z.string().min(1, "Inquiry Type is required"),
  message: z.string().min(5, "Project Details are required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
