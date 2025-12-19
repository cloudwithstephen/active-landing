import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email({ message: "Invalid email address." }),
  telephoneNumber: z
    .string()
    .min(10, "Telephone number must be at least 10 digits."),
  subject: z.string().min(1, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const defaultContactForm = {
  name: "",
  email: "",
  telephoneNumber: "",
  subject: "",
  message: "",
};
