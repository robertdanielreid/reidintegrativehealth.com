"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "The Science", href: "/blog" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop Nav */}
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

          <div className="flex justify-center items-center">
            <Link href="/" className="shrink-0">
              <Image
                src="/reidintegrativehealth-logo.png"
                alt="Reid Integrative Health"
                width={140}
                height={140}
                className="w-[140px] h-auto"
                priority
              />
            </Link>
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

        {/* Mobile Nav Header */}
        <div className="flex md:hidden items-center justify-between py-6">
          <button
            className="p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="shrink-0">
            <Image
              src="/reidintegrativehealth-logo.png"
              alt="Reid Integrative Health"
              width={100}
              height={100}
              className="w-[100px] h-auto"
              priority
            />
          </Link>

          {/* Placeholder for symmetry */}
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
