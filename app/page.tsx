"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Zap, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf51ad990d9?q=80&w=2000&auto=format&fit=crop"
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

      {/* Problem/Solution Grid */}
      <SectionWrapper className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Protocols for Complex Health</h2>
          <p className="text-muted-foreground">Bridging the gap between conventional care and cutting-edge biohacking.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </SectionWrapper>

      {/* About Teaser */}
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

      {/* Future Vision Banner */}
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
    </>
  );
}
