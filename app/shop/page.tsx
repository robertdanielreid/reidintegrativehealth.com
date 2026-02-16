"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { shopProtocols } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // I might need to add badge component
import { Button } from "@/components/ui/button";
import { ShoppingBag, Beaker } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-muted py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Curated Protocols</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-6">
          Evidence-informed supplement stacks curated by Reid Integrative.
          <span className="block text-sm mt-2 italic font-medium">Note: These links redirect to our vetted affiliate partners.</span>
        </p>
      </section>

      {/* Protocols Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {shopProtocols.map((protocol, index) => (
            <Card key={index} className="flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
                <CardTitle>{protocol.title}</CardTitle>
                <CardDescription className="text-slate-300">{protocol.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Core Components</h4>
                <ul className="space-y-3">
                  {protocol.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full flex gap-2" variant="outline">
                  <ShoppingBag className="w-4 h-4" /> View on Fullscript
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Private Label Teaser */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/30">
              <Beaker className="w-3 h-3" /> Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reid Integrative Proprietary Line</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              We are currently in the R&D phase of our own professional-grade supplement line, utilizing advanced
              <strong> Liposomal & Phytosome Technology</strong> for maximum bioavailability.
            </p>
            <Button variant="secondary" className="font-bold">Notify Me of Launch</Button>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl">
             <Beaker className="w-32 h-32 text-secondary opacity-20" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
