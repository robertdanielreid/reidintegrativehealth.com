"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionWrapper from "@/components/SectionWrapper";
import { PortableText } from "@portabletext/react";
import { ShieldCheck, Zap, Activity, Check, MapPin, Globe, Mail, ShoppingBag, Beaker } from "lucide-react";

const IconMap: Record<string, any> = {
  ShieldCheck,
  Zap,
  Activity,
  Check,
  MapPin,
  Globe,
  Mail,
  ShoppingBag,
  Beaker,
};

const contactFormSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Please enter a valid email address"),
  topic: zod.string().min(1, "Please select a topic"),
  message: zod.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = zod.infer<typeof contactFormSchema>;

export default function ContactForm({ section }: { section: any }) {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
          name: "",
          email: "",
          topic: "",
          message: "",
        },
      });

      function handleFormSubmit(data: ContactFormValues) {
        console.log(data);
        alert("Thank you for your message. We will get back to you soon!");
        form.reset();
      }

    return (
        <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">{section.heading || "Let's Connect"}</h2>
            <div className="space-y-8 mb-12">
              {section.featureCards?.map((item: any, i: number) => {
                  const Icon = IconMap[item.icon] || MapPin;
                  return (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                        <Icon className="w-6 h-6" />
                        </div>
                        <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                  )
              })}
            </div>

            {section.richText && (
                <div className="p-8 bg-muted rounded-2xl border border-border prose prose-sm">
                    <PortableText value={section.richText} />
                </div>
            )}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
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
    )
}
