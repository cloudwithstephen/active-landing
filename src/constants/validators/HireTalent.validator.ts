import { z } from 'zod';

export const hireTalentFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  telephoneNumber: z
    .string()
    .min(10, 'Telephone number must be at least 10 digits.'),
  email: z.string().email({ message: 'Invalid email address.' }),
  companyName: z.string().min(1, 'Company name is required.'),
  role: z.array(z.string()).min(1, 'Role is required.'),
  technologyStack: z.array(z.string()).min(1, 'Technology stack is required.'),
  // projectBudgetMin: z
  //   .string()
  //   .transform((val) => (!val ? 0 : parseFloat(val)))
  //   .refine(
  //     (val) => !isNaN(val) && val >= 0,
  //     'Minimum budget must be a positive number.'
  //   ),
  // projectBudgetMax: z
  //   .string()
  //   .transform((val) => (!val ? 0 : parseFloat(val)))
  //   .refine(
  //     (val) => !isNaN(val) && val >= 0,
  //     'Maximum budget must be a positive number.'
  //   ),
  jobDescription: z.string().min(1, 'Job description is required.'),
});

export type HireTalentFormData = z.infer<typeof hireTalentFormSchema>;

export const defaultHireTalentForm = {
  name: '',
  email: '',
  telephoneNumber: '',
  companyName: '',
  role: [],
  technologyStack: [],
  // projectBudgetMin: undefined,
  // projectBudgetMax: undefined,
  jobDescription: '',
};
