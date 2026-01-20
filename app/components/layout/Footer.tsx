"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-black text-white font-poppins py-6 md:py-15">
      <Container>
        <div className="flex flex-col items-center">
          <div className="text-center mb-8 md:mb-12 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Stay Updated
            </h2>
            <p className="text-[14px] md:text-[20px] mb-8 px-2">
              Get the latest apps and software development updates
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-row items-stretch px-8 md:px-2 max-w-md mx-auto gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 md:px-6 py-3 rounded-l-lg sm:rounded-l-lg sm:rounded-tr-none bg-white text-black text-[10px] sm:text-[12px] placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 md:px-8 py-3 bg-white text-black text-[10px] sm:text-[12px] font-semibold rounded-r-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-[#F5A623] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-[20px] md:text-[24px] font-poppins font-bold mb-4">Product of Knightowl</h3>
            <div className="flex justify-center">
              <Image
                src="/ellipse 3.png"
                alt="Knight Owl Logo"
                width={82}
                height={82}
                className="object-contain md:w-20 md:h-20"
              />
            </div>
          </div>

          <div className="w-full md:hidden px-2">
            <div className="flex flex-wrap items-center justify-center gap-10 text-[10px] mb-6 font-bold">
              <Link
                href="/privacy-policy"
                className="hover:text-[#F7B74D] transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-[#F7B74D] transition-colors underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies-settings"
                className="hover:text-[#F7B74D] transition-colors underline"
              >
                Cookies Settings
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3 mb-6">
              <span className="text-[10px] font-bold">Follow us on</span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:bg-amber-300"
                  aria-label="Facebook"
                >
                  <Image
                    src="/Icon/Vector.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:bg-amber-300"
                  aria-label="Instagram"
                  
                >
                  <Image
                    src="/Icon/Vector-1.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:bg-amber-300"
                  aria-label="Twitter/X"
                  
                >
                  <Image
                    src="/Icon/Vector-2.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/Icon/Vector-3.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="YouTube"
                >
                  <Image
                    src="/Icon/Vector-4.svg"
                    alt="YouTube"
                    width={10}
                    height={10}
                    className="w-3 h-3"
                  />
                </Link>
              </div>
            </div>

            <div className="text-[10px] text-center font-bold">
              © 2025 Knight Owl. All rights reserved.
            </div>
          </div>

          <div className="hidden md:block w-full">
            <div className="w-full border-t border-gray-500 mb-5"></div>

            <div className="flex items-center font-semibold justify-between gap-6 px-4">
              <div className="flex flex-wrap items-center gap-6 text-[16px]">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#F7B74D] transition-colors underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#F7B74D] transition-colors underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies-settings"
                  className="hover:text-[#F7B74D] transition-colors underline"
                >
                  Cookies Settings
                </Link>
              </div>

              <div className="text-[16px]">
                © 2025 Knight Owl. All rights reserved.
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[16px] mr-2 font-semibold">Follow us on</span>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="Facebook"
                >
                  <Image
                    src="/Icon/Vector.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="Instagram"
                >
                  <Image
                    src="/Icon/Vector-1.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="Twitter/X"
                >
                  <Image
                    src="/Icon/Vector-2.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/Icon/Vector-3.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-yellow-400"
                  aria-label="YouTube"
                >
                  <Image
                    src="/Icon/Vector-4.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
