import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Zap, Activity, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity/client";
import { homepageQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const IconMap: Record<string, any> = {
  ShieldCheck,
  Zap,
  Activity,
};

async function getHomepageData() {
  try {
    const data = await client.fetch(homepageQuery);
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getHomepageData();

  // If no data from Sanity, we could render a fallback or just empty sections
  // For this task, I'll implement the mapping logic
  const sections = data?.sections || [];

  return (
    <>
      {/* Hero Section */}
      {sections.find((s: any) => s._type === "hero") ? (
        <HeroSection data={sections.find((s: any) => s._type === "hero")} />
      ) : (
        <FallbackHero />
      )}

      {/* Dynamic Sections */}
      {sections.map((section: any, index: number) => {
        if (section._type === "section") {
          return <DynamicSection key={index} section={section} />;
        }
        if (section._type === "cta") {
          return <CTASection key={index} cta={section} />;
        }
        if (section._type === "testimonials") {
          return <TestimonialsSection key={index} data={section} />;
        }
        return null;
      })}

      {/* Fallback content if Sanity is empty */}
      {sections.length === 0 && (
        <>
          <SectionWrapper className="bg-slate-50">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Protocols for Complex Health</h2>
              <p className="text-muted-foreground">Bridging the gap between conventional care and cutting-edge biohacking.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <FallbackCards />
            </div>
          </SectionWrapper>
          <FallbackAbout />
          <FallbackCTA />
        </>
      )}
    </>
  );
}

function HeroSection({ data }: { data: any }) {
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

function DynamicSection({ section }: { section: any }) {
  if (section.layout === 'about-teaser') {
    return (
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {section.image && (
              <Image
                src={urlFor(section.image).url()}
                alt={section.heading}
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function CTASection({ cta }: { cta: any }) {
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

function TestimonialsSection({ data }: { data: any }) {
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
                                        <Image src={urlFor(item.authorImage).url()} alt={item.authorName} fill className="object-cover" />
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

// Fallback Components
function FallbackHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop"
          alt="Laboratory background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Optimize Physiology. <br />
          <span className="text-secondary">Conquer Chronic Illness.</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
          Ottawa’s premier integrative health hub. Specializing in mold toxicity, Lyme support, and executive performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="font-bold" asChild>
            <Link href="/contact">Start Your Journey</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all font-bold" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FallbackCards() {
    return (
        <>
          <Card className="border-t-4 border-t-secondary">
            <CardHeader>
              <ShieldCheck className="w-12 h-12 text-secondary mb-4" />
              <CardTitle>Chronic Illness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Failed by conventional care? We support Lyme, Mold, and CIRS recovery through evidence-based integrative protocols.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-secondary">
            <CardHeader>
              <Zap className="w-12 h-12 text-secondary mb-4" />
              <CardTitle>High Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Data-driven nutrition for entrepreneurs and athletes looking to optimize cognitive function and physical output.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-secondary">
            <CardHeader>
              <Activity className="w-12 h-12 text-secondary mb-4" />
              <CardTitle>Longevity Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evidence-informed biohacking and supplementation strategies designed to extend your healthspan.
              </p>
            </CardContent>
          </Card>
        </>
    )
}

function FallbackAbout() {
    return (
        <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1000&auto=format&fit=crop"
              alt="Scientific research"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Reid Method</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              We blend Functional Medicine, CSEP Physiology, and Biohacking to create a multi-layered approach to health.
            </p>
            <p className="text-muted-foreground mb-8">
              Our process starts with deep data—advanced lab work, environmental testing, and physiological tracking—to build a roadmap that is uniquely yours. No generic advice, just science-forward results.
            </p>
            <Button asChild>
              <Link href="/about" className="flex items-center gap-2">
                About the Founder <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    )
}

function FallbackCTA() {
    return (
        <section className="bg-secondary py-20 text-secondary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Coming Soon to Ottawa</h2>
          <p className="text-xl md:text-2xl font-medium mb-4">
            The Reid Longevity Studio
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A state-of-the-art recovery facility featuring Red Light Therapy, HBOT, and advanced physiological recovery tools.
          </p>
        </div>
      </section>
    )
}
