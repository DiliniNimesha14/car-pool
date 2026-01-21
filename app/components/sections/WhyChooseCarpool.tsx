"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Accent = "green" | "red";

type Card = {
  title: string;
  desc: string;
  accent: Accent;
  iconSrc: string;
};


function IconWrap({
  iconSrc,
}: {
  iconSrc: string;
}) {
  return (
    <div
      className="h-11 w-11 lg:h-14 lg:w-14 flex items-center justify-center
      transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2"
    >
      <Image src={iconSrc} alt="" width={24} height={24} className="w-6 h-6 lg:w-9 lg:h-9" />
    </div>
  );
}

function Underline({ accent }: { accent: Accent }) {
  return (
    <div
      className={`hidden lg:block mt-3 h-[3px] w-14 rounded-full ${
        accent === "green" ? "bg-green-500" : "bg-red-500"
      } transition-all duration-300 group-hover:w-20`}
    />
  );
}

function FeatureCard({ card }: { card: Card }) {
  return (
    <div
      className="
        group bg-white rounded-2xl border border-black/10 p-6 sm:p-9 sm:pl-10 sm:pr-2
        w-[340px] lg:w-auto h-[250px] lg:h-auto lg:aspect-square
        flex flex-col
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        active:scale-[0.98]
      "
    >
      <div className="flex flex-col">
        <IconWrap iconSrc={card.iconSrc} />

        <h3 className={`font-poppins mt-3 lg:mt-6 text-[16px] sm:text-[16px] font-bold text-[#1E272E] pb-1 lg:pb-3`}>
          {card.title}
        </h3>

        <Underline accent={card.accent} />

        <p className={`font-baloo mt-2 lg:mt-6 text-[14px] sm:text-[16px] text-gray-600 leading-[1.5] max-w-[350px]`}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseCarpool() {
  const cards: Card[] = useMemo(
    () => [
      {
        accent: "green",
        title: "Safe & Verified Profiles",
        desc: "Every user goes through a verification process to ensure trust and safety. This way, you can share rides confidently, knowing that all drivers and riders are genuine.",
        iconSrc: "/WhyChooseCarpool/Vector.svg",
      },
      {
        accent: "red",
        title: "Affordable & Cost-Saving",
        desc: "Sharing rides reduces travel costs for everyone. By splitting expenses, you save money while still enjoying convenient and budget-friendly transportation.",
        iconSrc: "/WhyChooseCarpool/Group.svg",
      },
      {
        accent: "green",
        title: "Eco-Friendly Travel",
        desc: "Fewer cars on the road mean less traffic and pollution. Choosing carpool contributes to a cleaner environment, while also making every ride more sustainable for the future.",
        iconSrc: "/WhyChooseCarpool/Vector-1.svg",
      },
      {
        accent: "red",
        title: "Trusted Community",
        desc: "Rating systems and reviews help build trust, allowing you to connect with verified users and build lasting carpool relationships with transparent feedback.",
        iconSrc: "/WhyChooseCarpool/coolicon.svg",
      },
      {
        accent: "green",
        title: "Easy to Use",
        desc: "The intuitive app design makes booking rides simple. Chat features, one-tap payments, real-time updates, and quick support are included for a seamless experience.",
        iconSrc: "/WhyChooseCarpool/Vector-2.svg",
      },
      {
        accent: "red",
        title: "Trip Analytics",
        desc: "Track your savings, environmental impact, and build your carpool community with detailed insights, ride history, progress tracking, and personalized monthly reports.",
        iconSrc: "/WhyChooseCarpool/Frame 1597884411.svg",
      },
    ],
    []
  );

  // Mobile dots
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  // 2 cards stacked per page, 3 pages total
  const totalPages = 3;

  // Group cards into pairs for stacked display
  const cardPairs = useMemo(() => {
    const pairs: Card[][] = [];
    for (let i = 0; i < cards.length; i += 2) {
      pairs.push(cards.slice(i, i + 2));
    }
    return pairs;
  }, [cards]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const page = el.querySelector<HTMLElement>("[data-page='true']");
      if (!page) return;

      // Calculate page index based on page width
      const pageW = page.offsetWidth + 16; // +gap-4
      const idx = Math.round(el.scrollLeft / pageW);
      setActiveDot(Math.max(0, Math.min(idx, totalPages - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const page = el.querySelector<HTMLElement>("[data-page='true']");
    if (!page) return;
    const pageW = page.offsetWidth + 16;
    el.scrollTo({ left: i * pageW, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-poppins text-[18px] sm:text-[35px] md:text-[48px] font-extrabold text-white pb-6 sm:pb-10">
            WHY CHOOSE CARPOOL APP ?
          </h2>

          <p className="font-poppins mt-4 text-[12px] sm:text-[24px] text-[#F4F4F5] leading-[2] pb-5">
            Carpool App brings drivers and riders together on one platform, making every trip more
            affordable and efficient. Whether you want to publish a ride or find one, we've got you
            covered. Experience the next generation of workplace transportation.
          </p>
        </div>


        {/* ===================== */}
        {/* MOBILE: 2 cards stacked }
        {/* ===================== */}
        <div className="lg:hidden mt-8 sm:mt-10">
          <div
            ref={scrollerRef}
            className="
              flex gap-6 overflow-x-auto pb-2
              snap-x snap-mandatory
              scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cardPairs.map((pair, pageIndex) => (
              <div
                key={pageIndex}
                data-page="true"
                className="
                  snap-start snap-always
                  min-w-full
                  flex-shrink-0
                  flex flex-col gap-4
                  items-center
                "
              >
                {pair.map((c, i) => (
                  <FeatureCard key={i} card={c} />
                ))}
              </div>
            ))}
          </div>

          {/* dots - 3 pages */}
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeDot ? "bg-white scale-110" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* DESKTOP: 3x2 grid   */}
        {/* ===================== */}
        <div className="hidden lg:grid mt-10 grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FeatureCard key={i} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
