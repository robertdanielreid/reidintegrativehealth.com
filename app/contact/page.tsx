import { client } from "@/lib/sanity/client";
import { pageBySlugQuery } from "@/lib/sanity/queries";
import { HeroSection, DynamicSection, CTASection, TestimonialsSection } from "@/components/SanitySections";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

async function getPageData() {
  try {
    return await client.fetch(pageBySlugQuery, { slug: "contact" });
  } catch (error) {
    console.error("Error fetching contact page:", error);
    return null;
  }
}

export default async function ContactPage() {
  const data = await getPageData();

  if (!data) {
    return <ContactFallback />;
  }

  const sections = data.sections || [];

  return (
    <div className="pt-20">
      {sections.map((section: any, index: number) => {
        switch (section._type) {
          case "hero":
            return <HeroSection key={index} data={section} />;
          case "section":
            return <DynamicSection key={index} section={section} />;
          case "cta":
            return <CTASection key={index} cta={section} />;
          case "testimonials":
            return <TestimonialsSection key={index} data={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function ContactFallback() {
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
                {/* Fallback form - not fully functional as it lacks the client-side logic in this component,
                    but enough for a fallback UI */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic of Interest</Label>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Select a topic" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="other">Please use Sanity to enable form</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us a bit about your health goals..." className="min-h-[150px]" />
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
