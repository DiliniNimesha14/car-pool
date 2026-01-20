"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Container from "../Container";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  return (
    <header className={`w-full bg-white ${poppins.className}`}>
      <Container>
        <div className="flex h-20 ml-13 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Carpool"
              width={70}
              height={70}
            />
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-14 font-semibold">
            <Link href="#">Features</Link>
            <Link href="#">How it Works</Link>
            <Link href="#">Safety</Link>
            <Link href="#">FAQs</Link>
          </nav>

          {/* CTA */}
          <button className="hidden md:block rounded-full w-38 h-12 bg-[#F7B74D] px-6 py-2 font-semibold
           text-black hover:opacity-80 cursor-pointer
           transition shadow-[0_6px_12px_-2px_rgba(0,0,0,0.2)]">
  Get the App
</button>
        </div>
      </Container>
    </header>
  );
}
