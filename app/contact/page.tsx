"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Globe } from "lucide-react";

const contactFormSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Please enter a valid email address"),
  topic: zod.string().min(1, "Please select a topic"),
  message: zod.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = zod.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    alert("Thank you for your message. We will get back to you soon!");
    form.reset();
  }

  return (
    <div className="pt-20">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Ready to optimize your physiology? Whether you are in Ottawa or anywhere in Canada, we are here to support your journey.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Ottawa, Ontario</h4>
                  <p className="text-muted-foreground">Local consultations and clinical assessments.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Virtual Canada-Wide</h4>
                  <p className="text-muted-foreground">Comprehensive integrative care from the comfort of your home.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Direct Email</h4>
                  <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted rounded-2xl border border-border">
              <h3 className="font-bold mb-2">Notice for New Clients</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Due to the high demand for mold toxicity and Lyme support, there is currently a 2-3 week waitlist for new initial consultations. Corporate inquiries and high-performance programs are processed within 48 hours.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" {...form.register("name")} />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" {...form.register("email")} />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic of Interest</Label>
                <Select onValueChange={(value) => form.setValue("topic", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chronic-illness">Chronic Illness (Lyme/Mold)</SelectItem>
                    <SelectItem value="performance">Executive Performance</SelectItem>
                    <SelectItem value="corporate">Corporate Wellness</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.topic && (
                  <p className="text-sm text-destructive">{form.formState.errors.topic.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your health goals..."
                  className="min-h-[150px]"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button type="submit" variant="secondary" className="w-full py-6 text-lg font-bold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
