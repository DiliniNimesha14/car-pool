"use client";

import Image from "next/image";
import Container from "../Container";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: "/EarnWhileDrive/Frame 1597884622.png",
    title: "Route Optimization",
    description:
      "Advanced GPS integration finds the most efficient routes and suggests optimal pickup points. Save time and fuel while accommodating more passengers.",
    borderColor: "border-l-red-400",
    bgColor: "bg-red-50",
    position: "left-bottom",
  },
  {
    id: 2,
    icon: "/EarnWhileDrive/Frame 1597884623.png",
    title: "Passenger Matching",
    description:
      "Connect with verified passengers along your regular route. Build a network of trusted riders and create recurring carpool schedules for guaranteed income.",
    borderColor: "border-l-yellow-400",
    bgColor: "bg-yellow-50",
    position: "right-bottom",
  },
  {
    id: 3,
    icon: "/EarnWhileDrive/Frame 1597884624.png",
    title: "Smart Pricing",
    description:
      "Our smart system automatically calculates fair pricing based on distance, fuel costs, and market rates. Maximize your earnings with dynamic pricing that adjusts to demand.",
    borderColor: "border-l-[#1069E3] border-1 border-[#1069E3]",
    bgColor: "bg-white",
    position: "left-top",
  },
  {
    id: 4,
    icon: "/EarnWhileDrive/Frame 1597884625.png",
    title: "Instant Payments",
    description:
      "Get paid immediately after each trip with secure digital payments. Track your earnings real-time and cash out instantly to your bank account — anytime, anywhere.",
    borderColor: "border-r-[#1069E3] border-1 border-[#1069E3]",
    bgColor: "bg-blue-50",
    position: "right-top",
  },
];

const stats = [
  { value: "250+", label: (<>Active <br/> Driver</>) },
  { value: "23000", label: (<>Avg Monthly <br/> Earnings</>) },
  { value: "64+", label: (<>Monthly <br/> Rides</>) },
  { value: "4.9", label: (<>Driver <br/> Rating</>) },
];

export default function EarnWhileDrive() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text:lefts sm:text-center mb-8 md:mb-6">
          <h2 className="font-poppins text-xl sm:text-3xl md:text-4xl font-semibold text-[#1E272E] mb-8">
            Earn While You Drive
          </h2>
          <p className="font-poppins text:black text-sm sm:text-2xl leading-6 max-w-8xl mx-auto mb-10">
            Turn your daily commute into a profitable journey. Our driver-focused features help you maximize earnings while building a trusted carpool community.
          </p>
          <button className="inline-flex items-center gap-2 bg-white border-1 border-gray-800 text-gray-800 font-semibold text:sm sm:text-lg px-8 py-3 rounded-full mb:2 sm:mb-5 hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Start Driving & Earning
          </button>
        </div>

        {/*  MOBILE LAYOUT  */}
        <div className="block lg:hidden mt-10">
          {/* Feature Cards - Stacked */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-lg p-5 border w-[345px] h-[164px] mx-auto ${
                  feature.id === 1
                    ? "bg-white border-l-6 border-[#1069E3]"
                    : feature.id === 2
                    ? "bg-[#F3FAF4] border-r-6 border-[#E6E96B]"
                    : feature.id === 3
                    ? "bg-white border-l-6 border-[#079521]"
                    : "bg-[#F3FAF4] border-r-6 border-[#FF302F]"
                }`}
              >
                <div className={`flex items-center gap-5 ${feature.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={45}
                      height={45}
                      className="w-13 h-13"
                    />
                  </div>
                  <div className={`flex-1 ${feature.id % 2 === 0 ? "text-right" : "text-left"}`}>
                    <h3 className="font-roboto font-bold text-[#1E272E] text-md mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-roboto text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  DESKTOP LAYOUT */}
        <div className="hidden lg:block mt-8" ref={sectionRef}>
          <div className="relative max-w-5xl mx-auto min-h-[550px]">
            {/* Phone Mockup - Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/EarnWhileDrive/iPhone 12 Pro.png"
                alt="Driver App"
                width={280}
                height={560}
                className="w-[280px] h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Icons around phone */}
            <div className="absolute left-[33%] top-[2%] z-20">
              <Image
                src="/EarnWhileDrive/Frame 1597884624.png"
                alt=""
                width={52}
                height={50}
                className="w-[52px] h-[50px]"
              />
            </div>
            <div className="absolute right-[35%] top-[20%] z-20">
              <Image
                src="/EarnWhileDrive/Frame 1597884622.png"
                alt=""
                width={52}
                height={50}
                className="w-[52px] h-[50px]"
              />
            </div>
            <div className="absolute left-[33%] top-[50%] z-20">
              <Image
                src="/EarnWhileDrive/Frame 1597884625.png"
                alt=""
                width={52}
                height={50}
                className="w-[52px] h-[50px]"
              />
            </div>

            <div className="absolute right-[34%] bottom-[20%] z-20">
              <Image
                src="/EarnWhileDrive/Frame 1597884623.png"
                alt=""
                width={52}
                height={50}
                className="w-[52px] h-[50px]"
              />
            </div>

            {/* Smart Pricing - Left Top */}
            <div
              className={`absolute -left-[13%] top-[10%] w-[470px] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-green-50 rounded-[6px] p-4 px-5 border-r-8 border-r-[#079521] border-1 border-[#079521]  shadow-sm">
                <h3 className="font-roboto font-semibold text-[#1E272E] text-xl mb-2">
                  Smart Pricing
                </h3>
                <p className="font-roboto text-[#495056] text-[15px] leading-normal">
                  Our smart system automatically calculates fair pricing based on distance, fuel costs, and market rates. Maximize your earnings with dynamic pricing that adjusts to demand.
                </p>
              </div>
            </div>

            {/* Route Optimization - Right Top */}
            <div
              className={`absolute -right-[11%] top-[27%] w-[470px] transition-all duration-700 ease-out delay-150 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="bg-blue-50 rounded-[6px] p-4 px-5 border-l-8 border-l-[#1069E3] border-1 border-[#1069E3]  shadow-sm">
                <h3 className="font-roboto font-semibold text-[#495056] text-xl mb-2">
                  Route Optimization
                </h3>
                <p className="font-roboto text-[#495056] text-[15px] leading-normal">
                  Advanced GPS integration finds the most efficient routes and suggests optimal pickup points. Save time and fuel while accommodating more passengers.
                </p>
              </div>
            </div>

            {/* Instant Payments - Left Bottom */}
            <div
              className={`absolute -left-[13%] bottom-[18%] w-[470px] transition-all duration-700 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-red-50 rounded-[6px] p-4 px-5 border-r-8 border-r-[#FF6B6B] border-1 border-[#FF6B6B]  shadow-sm">
                <h3 className="font-roboto font-semibold text-[#495056] text-xl mb-2">
                  Instant Payments
                </h3>
                <p className="font-roboto text-[#495056] text-[15px] leading-normal">
                  Get paid immediately after each trip with secure digital payments. Track your earnings real-time and cash out instantly to your bank account — anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Passenger Matching - Right Bottom */}
            <div
              className={`absolute -right-[12%] -bottom-[4%] w-[470px] transition-all duration-700 ease-out delay-[450ms] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="bg-yellow-50 rounded-[6px] p-4 px-5 border-l-8 border-l-[#E6E96B] border-1 border-[#E6E96B]  shadow-sm">
                <h3 className="font-roboto font-semibold text-[#495056] text-xl mb-2">
                  Passenger Matching
                </h3>
                <p className="font-roboto text-[#495056] text-[15px] leading-normal">
                  Connect with verified passengers along your regular route. Build a network of trusted riders and create recurring carpool schedules for guaranteed income.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 lg:mt-25 bg-black rounded-xl py-3 sm:py-8 px-4 sm:px-6">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${
                  index < stats.length - 1 ? "border-r border-gray-400" : ""
                }`}
              >
                <div className="font-saira text-lg sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className=" font-saira text-white text-[10px] sm:text-xl mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}