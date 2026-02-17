import { client } from "@/lib/sanity/client";
import { pageBySlugQuery } from "@/lib/sanity/queries";
import { HeroSection, DynamicSection, CTASection, TestimonialsSection } from "@/components/SanitySections";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GraduationCap, Microscope, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

async function getPageData() {
  try {
    return await client.fetch(pageBySlugQuery, { slug: "about" });
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

export default async function AboutPage() {
  const data = await getPageData();

  if (!data) {
    return <AboutFallback />;
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

function AboutFallback() {
  return (
    <div className="pt-20">
      {/* Hero / Mission */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/5 aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/profile.png"
              alt="Founder of Reid Integrative"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-3/5">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 border border-secondary/20">
              Science-Forward Wellness
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bridging the Gap Between Research and Recovery.</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              &quot;We don&apos;t do influencer-wellness. We do clinical health optimization. My mission is to bring the same rigor applied to elite athletic performance to the world of chronic illness recovery.&quot;
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="font-bold" asChild>
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy Grid */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Microscope className="w-10 h-10 text-secondary" />
            <h3 className="text-2xl font-bold">Deep Research Orientation</h3>
            <p className="opacity-80">
              Our protocols aren&apos;t based on trends. We spend hundreds of hours analyzing peer-reviewed literature to find what actually works for complex cases like Mold and Lyme.
            </p>
          </div>
          <div className="space-y-4">
            <GraduationCap className="w-10 h-10 text-secondary" />
            <h3 className="text-2xl font-bold">Clinical Pedigree</h3>
            <p className="opacity-80">
              With a background in the CSEP (Canadian Society for Exercise Physiology) pathway and Functional Medicine training, we merge the best of both worlds.
            </p>
          </div>
          <div className="space-y-4">
            <Target className="w-10 h-10 text-secondary" />
            <h3 className="text-2xl font-bold">Outcome Driven</h3>
            <p className="opacity-80">
              We track data points that matter. From HRV and deep sleep architecture to inflammatory markers and mitochondrial function tests.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Bio */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">To be Ottawa&apos;s leading authority on complex illness and longevity.</h2>
          <div className="prose prose-slate max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              Reid Integrative was born out of a frustration with the status quo. In conventional medicine, patients with complex environmental illnesses are often left without answers. In the holistic world, protocols often lack the scientific rigor required to move the needle on deep-seated dysfunction.
            </p>
            <p>
              By blending the principles of <strong>Functional Medicine</strong> with the data-driven approach of <strong>Biohacking</strong> and the foundations of <strong>Physiology</strong>, we offer a path forward that is both compassionate and clinical.
            </p>
            <p>
              Whether you are an executive looking to regain your cognitive edge or a chronic illness patient fighting to get your life back, our methodology remains the same: <strong>Identify the interference, remove the burden, and optimize the environment.</strong>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
