import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { client } from "@/lib/sanity/client";
import { allPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

async function getPosts() {
  try {
    return await client.fetch(allPostsQuery);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Science of Recovery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into environmental medicine, mitochondrial health, and high-performance physiology.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts && posts.length > 0 ? (
            posts.map((post: any) => (
              <Card key={post.slug.current} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recent"}
                  </div>
                  <CardTitle className="leading-tight group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-secondary font-bold group/btn" asChild>
                    <Link href={`/blog/${post.slug.current}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            blogPosts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <CardTitle className="leading-tight group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-secondary font-bold group/btn" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
