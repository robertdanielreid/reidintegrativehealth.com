"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "The Science", href: "/blog" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  logo?: any;
  logoPosition?: string;
}

export default function Navbar({ logo, logoPosition = 'center' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl = logo ? urlFor(logo).url() : "/reidintegrativehealth-logo.png";

  const renderLogo = (size: "desktop" | "mobile") => (
    <Link href="/" className="shrink-0 transition-transform hover:scale-105">
      <Image
        src={logoUrl}
        alt="Reid Integrative Health"
        width={size === "desktop" ? 140 : 100}
        height={size === "desktop" ? 140 : 100}
        className={cn(
          size === "desktop" ? "w-[140px]" : "w-[100px]",
          "h-auto"
        )}
        priority
      />
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop Nav - Centered Logo Layout */}
        {logoPosition === 'center' && (
          <div className="hidden md:grid grid-cols-3 items-center py-8">
            <div className="flex justify-start items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center">
              {renderLogo("desktop")}
            </div>

            <div className="flex justify-end items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="secondary" className="font-semibold" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Nav - Left Logo Layout */}
        {(logoPosition === 'left' || logoPosition === 'right') && (
          <div className={cn(
            "hidden md:flex items-center py-8 gap-12",
            logoPosition === 'right' ? "flex-row-reverse" : "flex-row"
          )}>
            {renderLogo("desktop")}

            <div className={cn(
              "flex items-center gap-8 flex-1",
              logoPosition === 'left' ? "justify-end" : "justify-start"
            )}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="secondary" className="font-semibold" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Nav Header */}
        <div className="flex md:hidden items-center justify-between py-6">
          <button
            className="p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {renderLogo("mobile")}

          <div className="w-10" />
        </div>
      </div>

      {/* Mobile Nav Content */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" className="w-full font-semibold" asChild onClick={() => setIsOpen(false)}>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
