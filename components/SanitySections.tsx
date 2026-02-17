"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ShieldCheck, Zap, Activity, ArrowRight, Quote, Check, MapPin, Globe, Mail, ShoppingBag, Beaker } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

export function HeroSection({ data }: { data: any }) {
  const bgImageUrl = data.bgImage ? urlFor(data.bgImage).url() : "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={bgImageUrl}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {data.ctaButtons?.map((btn: any, i: number) => (
            <Button key={i} size="lg" variant={btn.variant || "secondary"} className="font-bold" asChild>
              <Link href={btn.link}>{btn.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactFormSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Please enter a valid email address"),
  topic: zod.string().min(1, "Please select a topic"),
  message: zod.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = zod.infer<typeof contactFormSchema>;

export function DynamicSection({ section }: { section: any }) {
  if (section.layout === 'about-teaser') {
    return (
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {section.image && (
              <Image
                src={urlFor(section.image).url()}
                alt={section.heading || ""}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>
            <div className="text-lg mb-6 text-muted-foreground">
                <p>{section.subheading}</p>
            </div>
            {section.richText && (
               <div className="prose prose-slate mb-6">
                 <PortableText value={section.richText} />
               </div>
            )}
            <Button asChild>
              <Link href="/about" className="flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  if (section.layout === 'contact-form') {
      return <ContactSection section={section} />;
  }

  if (section.layout === 'pricing-grid') {
      return (
          <SectionWrapper className="bg-slate-50">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.heading}</h2>
                  <p className="text-muted-foreground">{section.subheading}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.featureCards?.map((card: any, i: number) => (
                      <Card key={i} className="flex flex-col">
                          <CardHeader>
                              <CardTitle>{card.title}</CardTitle>
                              {card.price && <CardDescription className="text-xl font-bold text-secondary">{card.price}</CardDescription>}
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <p className="text-muted-foreground">{card.description}</p>
                          </CardContent>
                          <CardFooter>
                              {card.buttonLabel && (
                                  <Button variant="outline" className="w-full" asChild>
                                      <Link href={card.buttonLink || "/contact"}>{card.buttonLabel}</Link>
                                  </Button>
                              )}
                          </CardFooter>
                      </Card>
                  ))}
              </div>
          </SectionWrapper>
      )
  }

  if (section.layout === 'shop-protocols') {
    return (
        <SectionWrapper>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.heading}</h2>
                <p className="text-muted-foreground">{section.subheading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {section.featureCards?.map((protocol: any, index: number) => (
                    <Card key={index} className="flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
                            <CardTitle>{protocol.title}</CardTitle>
                            <CardDescription className="text-slate-300">{protocol.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow pt-6">
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Core Components</h4>
                            <ul className="space-y-3">
                                {protocol.listItems?.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button className="w-full flex gap-2" variant="outline" asChild>
                                <Link href={protocol.buttonLink || "#"}><ShoppingBag className="w-4 h-4" /> {protocol.buttonLabel || "View on Fullscript"}</Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
            {section.richText && (
                <div className="prose prose-slate max-w-none text-center">
                    <PortableText value={section.richText} />
                </div>
            )}
        </SectionWrapper>
    )
  }

  if (section.layout === 'content') {
      return (
          <SectionWrapper>
              <div className="max-w-3xl mx-auto">
                  {section.heading && <h2 className="text-3xl font-bold mb-8">{section.heading}</h2>}
                  {section.richText && (
                      <div className="prose prose-slate max-w-none text-muted-foreground text-lg leading-relaxed">
                          <PortableText value={section.richText} />
                      </div>
                  )}
              </div>
          </SectionWrapper>
      )
  }

  return (
    <SectionWrapper className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.heading}</h2>
        <p className="text-muted-foreground">{section.subheading}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {section.featureCards?.map((card: any, i: number) => {
          const Icon = IconMap[card.icon] || Activity;
          return (
            <Card key={i} className="border-t-4 border-t-secondary">
              <CardHeader>
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.description}</p>
                {card.price && <p className="mt-4 font-bold text-secondary">{card.price}</p>}
              </CardContent>
              {card.buttonLabel && (
                  <CardFooter>
                      <Button variant="link" className="px-0 text-secondary font-bold" asChild>
                          <Link href={card.buttonLink || "#"}>{card.buttonLabel} →</Link>
                      </Button>
                  </CardFooter>
              )}
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function ContactSection({ section }: { section: any }) {
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
    )
}

export function CTASection({ cta }: { cta: any }) {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">{cta.title}</h2>
        <p className="text-xl md:text-2xl font-medium mb-4">{cta.subtitle}</p>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">{cta.description}</p>
        {cta.buttonText && (
            <Button size="lg" variant="outline" className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all font-bold" asChild>
                <Link href={cta.buttonLink || "/contact"}>{cta.buttonText}</Link>
            </Button>
        )}
      </div>
    </section>
  );
}

export function TestimonialsSection({ data }: { data: any }) {
    return (
        <SectionWrapper className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.heading || "What Our Clients Say"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.testimonialItems?.map((item: any, i: number) => (
                    <Card key={i} className="bg-slate-50 border-none shadow-sm">
                        <CardContent className="pt-8">
                            <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                            <p className="text-lg italic mb-6 text-primary/80">&quot;{item.quote}&quot;</p>
                            <div className="flex items-center gap-4">
                                {item.authorImage && (
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image src={urlFor(item.authorImage).url()} alt={item.authorName || ""} fill className="object-cover" />
                                    </div>
                                )}
                                <div>
                                    <p className="font-bold text-sm">{item.authorName}</p>
                                    <p className="text-xs text-muted-foreground">{item.authorRole}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    )
}
