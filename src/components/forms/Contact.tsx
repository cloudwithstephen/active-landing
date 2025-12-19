import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../shadcn/ui/form";
import { Input } from "../shadcn/ui/input";
import Button from "../formComponents/Button";
import { Textarea } from "../shadcn/ui/textarea";
import {
  ContactFormData,
  defaultContactForm,
  contactFormSchema,
} from "../../constants/validators/Contact.validator";
import useContact from "../../hooks/useContact";
import { useEffect } from "react";

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultContactForm,
  });

  const { handleSubmit, loading, error, success } = useContact();

  // Reset form when submission is successful
  useEffect(() => {
    if (success) {
      form.reset();
    }
  }, [success, form]);

  async function onSubmit(data: ContactFormData) {
    await handleSubmit(data);
  }

  return (
    <div className="max-w-[43rem] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-md">
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </div>
          )}

          <div className="grid grid-cols-1 xmobile:grid-cols-2 gap-6 xmobile:gap-y-5 xmobile:gap-x-4 mobile:gap-y-8 mobile:gap-x-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Telephone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="xmobile:col-span-2">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="xmobile:col-span-2">
                  <FormControl>
                    <Input placeholder="Subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="xmobile:col-span-2">
                  <FormControl>
                    <Textarea rows={7} placeholder="Your Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center laptop:justify-end">
            <Button loading={loading} className="px-8 h-10" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
