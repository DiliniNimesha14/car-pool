"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white font-poppins sticky top-0 z-50">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Carpool Logo"
              width={70}
              height={70}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-14 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#F7B74D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            className="hidden md:block rounded-full px-6 py-3 bg-[#F7B74D] font-semibold text-black hover:opacity-80 cursor-pointer transition shadow-[0_6px_12px_-2px_rgba(0,0,0,0.2)]"
          >
            Get the App
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold py-2 hover:text-[#F7B74D] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="mt-2 rounded-full px-6 py-3 bg-[#F7B74D] font-semibold text-black hover:opacity-80 transition shadow-[0_6px_12px_-2px_rgba(0,0,0,0.2)]">
                Get the App
              </button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
