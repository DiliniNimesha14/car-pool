"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CarPoolOnboarding() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-auto md:min-h-screen flex items-start md:items-center justify-center p-4 md:p-8 pt-16 md:pt-8 pb-0 md:pb-8 overflow-hidden relative"
    >
      {/* Checkered Pattern Header - Mobile */}
      <div className="absolute top-0 left-0 right-0 z-20 md:hidden">
        <Image
          src="/Design1/Shape Bg mobile.png"
          alt="Background pattern"
          width={375}
          height={200}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Checkered Pattern Header - Desktop */}
      <div className="absolute top-18 left-0 right-0 z-20 hidden md:block">
        <Image
          src="/Design1/Shape BG.png"
          alt="Background pattern"
          width={1440}
          height={157}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* City Background - Mobile */}
      <div className="absolute -top-20 -left-24 md:hidden">
        <Image
          src="/Design1/freepik--City--inject-63.png"
          alt="City background"
          width={500}
          height={400}
          className="w-[500px] h-auto object-contain"
        />
      </div>

      {/* City Background - Desktop */}
      <div className="absolute -top-200 left-0 right-0 bottom-0 hidden md:flex items-center justify-center">
        <Image
          src="/Design1/freepik--City--inject-63.png"
          alt="City background"
          width={920}
          height={1080}
          className="object-cover"
        />
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="flex md:hidden items-center justify-center mt-20 mb-0 z-25 w-full">
        <div
          className={`relative flex items-center justify-center transition-all duration-1000 ease-out w-full ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[100px] opacity-0"
          }`}
        >
          {/* Phone 1 - Left  */}
          <div className="absolute -left-2 sm:-left-8 bottom-16 sm:bottom-20 -translate-x-1/2 z-10">
            <Image
              src="/Design1/iPhone 12 Pro-1.png"
              alt="iPhone screen 1"
              width={145}
              height={260}
              className="w-[120px] sm:w-[145px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Phone 2 - Center  */}
          <div className="relative -top-5 z-20">
            <Image
              src="/Design1/iPhone 12 Pro-1.png"
              alt="iPhone screen 2"
              width={200}
              height={500}
              className="w-[160px] sm:w-[200px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Phone 3 - Right  */}
          <div className="absolute -right-2 sm:-right-8 bottom-16 sm:bottom-20 translate-x-1/2 z-10">
            <Image
              src="/Design1/iPhone 12 Pro-1.png"
              alt="iPhone screen 3"
              width={145}
              height={260}
              className="w-[120px] sm:w-[145px] h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden md:flex relative items-end justify-center mt-16 z-25">
        {/* Phone 1 - Left */}
        <div
          className={`relative z-10 mr-4 lg:mr-30 mt-50 transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-4 opacity-100"
              : "translate-y-[200px] opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src="/Design1/iPhone 12 Pro-2.png"
            alt="iPhone screen 1"
            width={315}
            height={652}
            className="w-[200px] lg:w-[280px] xl:w-[315px] h-auto"
          />
        </div>

        {/* Phone 2 - Center (Main) */}
        <div
          className={`relative z-20 transition-all duration-1000 ease-out ${
            isVisible ? "-top-20 lg:-top-40 opacity-100" : "top-[150px] opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <Image
            src="/Design1/iPhone 12 Pro-1.png"
            alt="iPhone screen 2"
            width={315}
            height={652}
            className="w-[200px] lg:w-[280px] xl:w-[315px] h-auto"
          />
        </div>

        {/* Phone 3 - Right */}
        <div
          className={`relative z-10 ml-4 lg:ml-30 transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-4 opacity-100"
              : "translate-y-[200px] opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src="/Design1/iPhone 12 Pro.png"
            alt="iPhone screen 3"
            width={315}
            height={652}
            className="w-[200px] lg:w-[280px] xl:w-[315px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
