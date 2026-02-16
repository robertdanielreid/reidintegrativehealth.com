import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-4 block">
            {siteConfig.name}
          </Link>
          <p className="text-muted-foreground max-w-sm mb-6">
            Bridging the gap between chronic illness support and high-performance biohacking. Ottawa-based, Canada-wide virtual care.
          </p>
          <div className="text-sm">
             <p>{siteConfig.location}</p>
             <p>{siteConfig.contact.email}</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-secondary transition-colors">The Science</Link></li>
            <li><Link href="/shop" className="hover:text-secondary transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
            <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Join the Inner Circle</h4>
          <p className="text-sm text-muted-foreground mb-4">Biohacking & Recovery Tips delivered to your inbox.</p>
          <div className="flex gap-2">
            <Input placeholder="Email Address" className="bg-background" />
            <Button size="sm">Join</Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.title}. All Rights Reserved.
      </div>
    </footer>
  );
}
