import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "sujata@saf-ron.com";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please share a few more details."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  function onSubmit(values: ContactFormValues) {
    const subject = `Discovery Call Request${values.company ? ` — ${values.company}` : ""}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      "",
      values.message,
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;

    toast({
      title: "Opening your email app",
      description: `Your message to ${CONTACT_EMAIL} is ready to send.`,
    });

    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white text-left p-8 md:p-10 max-w-xl mx-auto shadow-xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jane Doe"
                      className="rounded-none border-gray-300 h-12"
                      data-testid="input-contact-name"
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
                <FormItem>
                  <FormLabel className="text-primary font-medium">Work Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane@company.com"
                      className="rounded-none border-gray-300 h-12"
                      data-testid="input-contact-email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Company (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Corporation"
                    className="rounded-none border-gray-300 h-12"
                    data-testid="input-contact-company"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your transformation goals..."
                    className="rounded-none border-gray-300 min-h-32 resize-none"
                    data-testid="input-contact-message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-none bg-accent text-primary hover:bg-primary hover:text-white h-14 text-base font-semibold tracking-wide uppercase transition-colors"
            data-testid="button-contact-submit"
          >
            Book Discovery Call
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
