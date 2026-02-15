"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Science</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Deep dives into physiology, environmental medicine, and the future of health optimization.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 uppercase tracking-widest font-bold">
                  <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <CardTitle className="leading-tight group-hover:text-secondary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary font-bold flex gap-2 items-center" asChild>
                  <Link href={`/blog/${post.slug}`}>Read Article <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-24 p-12 bg-muted rounded-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want the deep research?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join 2,000+ subscribers who receive our monthly breakdown of the latest longevity research and clinical protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <Button className="rounded-full px-8 font-bold">Subscribe</Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
