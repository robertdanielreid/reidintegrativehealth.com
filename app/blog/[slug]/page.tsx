import { blogPosts } from "@/lib/data";
import SectionWrapper from "@/components/SectionWrapper";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery, allPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const sanityPosts = await client.fetch(allPostsQuery);
  const sanitySlugs = sanityPosts.map((post: any) => ({
    slug: post.slug.current,
  }));

  const fallbackSlugs = blogPosts.map((post) => ({
    slug: post.slug,
  }));

  return [...sanitySlugs, ...fallbackSlugs];
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const sanityPost = await getPost(params.slug);
  const fallbackPost = blogPosts.find((p) => p.slug === params.slug);
  const post = sanityPost || fallbackPost;

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Reid Integrative`,
    description: sanityPost ? "Blog post from Reid Integrative" : post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const sanityPost = await getPost(params.slug);
  const fallbackPost = blogPosts.find((p) => p.slug === params.slug);

  if (!sanityPost && !fallbackPost) {
    notFound();
  }

  if (sanityPost) {
    return (
      <div className="pt-24 pb-20">
        <SectionWrapper>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to all articles
          </Link>

          <article className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {sanityPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {sanityPost.publishedAt ? new Date(sanityPost.publishedAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                  }) : "Recent"}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Read time: Dynamic
                </div>
              </div>
            </div>

            {sanityPost.mainImage && (
              <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={urlFor(sanityPost.mainImage).url()}
                  alt={sanityPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-slate prose-lg max-w-none
              prose-headings:text-primary prose-headings:font-bold
              prose-a:text-secondary prose-strong:text-primary
              prose-ul:list-disc prose-ol:list-decimal">
              <PortableText value={sanityPost.body} />
            </div>

            <NewsletterCTA />
          </article>
        </SectionWrapper>
      </div>
    );
  }

  // Fallback for hardcoded posts
  const post = fallbackPost!;
  return (
    <div className="pt-24 pb-20">
      <SectionWrapper>
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all articles
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long', day: 'numeric', year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-slate prose-lg max-w-none
            prose-headings:text-primary prose-headings:font-bold
            prose-a:text-secondary prose-strong:text-primary
            prose-ul:list-disc prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <NewsletterCTA />
        </article>
      </SectionWrapper>
    </div>
  );
}

function NewsletterCTA() {
    return (
        <div className="mt-16 pt-10 border-t border-border">
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Want more science-backed health tips?</h3>
              <p className="text-muted-foreground mb-6">
                Join our &quot;Inner Circle&quot; newsletter for exclusive insights into biohacking, recovery protocols, and the latest research in integrative nutrition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <button className="bg-secondary text-secondary-foreground font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
    )
}
