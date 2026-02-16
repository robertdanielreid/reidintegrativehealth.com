"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { services, digitalPrograms } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const nutritionService = services.find(s => s.id === "integrative-nutrition");
  const corporateService = services.find(s => s.id === "corporate-wellness");

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinical Services & Programs</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto px-6">
          Evidence-based health optimization for chronic illness recovery and peak performance.
        </p>
      </section>

      {/* Consulting Section */}
      <SectionWrapper>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{nutritionService?.title}</h2>
          <p className="text-lg text-muted-foreground">{nutritionService?.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutritionService?.features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-1 bg-secondary/20 p-1 rounded-full text-secondary">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-muted rounded-2xl">
              <h3 className="text-xl font-bold mb-4">The Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our 1:1 consulting begins with a comprehensive review of your health history and current symptoms. We leverage functional lab testing (Organic Acids, Mycotoxins, GI-Map) to identify the root cause of dysfunction. From there, we build a bio-individualized protocol that evolves as you heal.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {nutritionService?.pricing?.map((item, index) => (
              <Card key={index} className={index === 0 ? "border-secondary" : ""}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{item.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant={index === 0 ? "secondary" : "outline"} className="w-full" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Digital Programs */}
      <SectionWrapper className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Digital Support Programs</h2>
          <p className="text-muted-foreground">Self-paced protocols for focused health goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {digitalPrograms.map((program, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-secondary font-bold">Learn More →</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Corporate Wellness */}
      <SectionWrapper>
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 overflow-hidden relative">
           <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{corporateService?.title}</h2>
              <p className="text-lg mb-8 opacity-80">{corporateService?.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {corporateService?.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" className="font-bold" asChild>
                <Link href="/contact">Inquire for Your Team</Link>
              </Button>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
