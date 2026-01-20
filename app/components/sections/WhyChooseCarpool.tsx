"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Accent = "green" | "red";

type Card = {
  title: string;
  desc: string;
  accent: Accent;
  icon: React.ReactNode;
};


function IconWrap({
  accent,
  children,
}: {
  accent: Accent;
  children: React.ReactNode;
}) {
  const wrap =
    accent === "green"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-600";

  return (
    <div
      className={`h-11 w-11 rounded-xl flex items-center justify-center ${wrap}
      transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2`}
    >
      {children}
    </div>
  );
}

function Underline({ accent }: { accent: Accent }) {
  return (
    <div
      className={`mt-3 h-[3px] w-14 rounded-full ${
        accent === "green" ? "bg-green-500" : "bg-red-500"
      } transition-all duration-300 group-hover:w-20`}
    />
  );
}

function FeatureCard({ card }: { card: Card }) {
  return (
    <div
      className="
        group bg-white rounded-2xl border border-black/10 p-6
        aspect-square
        flex flex-col
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        active:scale-[0.98]
      "
    >
      <div className="flex flex-col">
  <IconWrap accent={card.accent}>{card.icon}</IconWrap>

  <h3 className={`font-poppins mt-4 text-base font-bold text-[#1E272E]`}>
    {card.title}
  </h3>

  <Underline accent={card.accent} />

  <p className={`font-baloo mt-4 text-sm text-gray-600 leading-relaxed`}>
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
        desc: "Every user goes through a verification process to ensure trust and safety within your organization.",
        icon: (
          // 3 people icon
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M16 11a3 3 0 1 0-2.999-3A3 3 0 0 0 16 11Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm4 1a3.5 3.5 0 1 0-3.5-3.5A3.504 3.504 0 0 0 12 12Zm0 2c-3.8 0-7 1.8-7 4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-2.2-3.2-4-7-4Zm-8 1c-2.7 0-4 1.3-4 3a1 1 0 0 0 1 1h2.2a4.9 4.9 0 0 1 1.5-3.1A5.6 5.6 0 0 0 4 15Zm16 0a5.6 5.6 0 0 0-1.7.9A4.9 4.9 0 0 1 20.8 19H23a1 1 0 0 0 1-1c0-1.7-1.3-3-4-3Z" />
          </svg>
        ),
      },
      {
        accent: "red",
        title: "Affordable & Cost-Saving",
        desc: "Split travel costs with colleagues and reduce your commuting expenses without sacrificing comfort.",
        icon: (
          // credit cards icon
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1H3V7Zm0 4h18v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6Zm3 3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H6Zm9 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
          </svg>
        ),
      },
      {
        accent: "green",
        title: "Eco-Friendly Travel",
        desc: "Fewer cars on the road means less traffic and pollution — helping create a cleaner environment.",
        icon: (
          // vehicle icon
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M5 11l1.6-4.2A3 3 0 0 1 9.4 5h5.2a3 3 0 0 1 2.8 1.8L19 11v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7Zm2.3-1h9.4l-1-2.6a1 1 0 0 0-1-.4H9.3a1 1 0 0 0-1 .4L7.3 10ZM7.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>
        ),
      },
      {
        accent: "red",
        title: "Trusted Community",
        desc: "Build trust through ratings and reviews and connect with reliable colleagues for every trip.",
        icon: (
          // heart icon
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z" />
          </svg>
        ),
      },
      {
        accent: "green",
        title: "Easy to Use",
        desc: "Simple, intuitive experience to publish or find rides quickly, with real-time updates and clarity.",
        icon: (
          // tick inside green circle
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm-1.1 14.2-3.2-3.2a1 1 0 0 1 1.4-1.4l1.8 1.8 4.5-4.5a1 1 0 0 1 1.4 1.4l-5.9 5.9Z" />
          </svg>
        ),
      },
      {
        accent: "red",
        title: "Trip Analytics",
        desc: "Track your savings and ride history with smart insights — making every commute more measurable.",
        icon: (
          // vehicle near "P" banner icon (car + parking sign)
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M3 4a1 1 0 0 1 1-1h7a3 3 0 0 1 0 6H6v2h4a1 1 0 0 1 0 2H6v6a1 1 0 0 1-2 0V4Zm3 1v2h5a1 1 0 0 0 0-2H6Z" />
            <path d="M11 13l1.1-2.8A2.5 2.5 0 0 1 14.4 9h3.2a2.5 2.5 0 0 1 2.3 1.2L21 13v5a1 1 0 0 1-1 1h-.8a1 1 0 0 1-1-1v-.6h-5.4v.6a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-5Zm2.2-1h5.7l-.5-1.2a.7.7 0 0 0-.7-.3h-3.3a.7.7 0 0 0-.7.3L13.2 12Zm.7 3.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm5 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
          </svg>
        ),
      },
    ],
    []
  );

  // Mobile dots
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card='true']");
      if (!card) return;

      // 2 cards visible -> snap items are 50% each (approx). We compute index by card width.
      const cardW = card.offsetWidth + 16; // +gap-4 approx
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveDot(Math.max(0, Math.min(idx, cards.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card='true']");
    if (!card) return;
    const cardW = card.offsetWidth + 16;
    el.scrollTo({ left: i * cardW, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
  <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
    WHY CHOOSE CARPOOL APP ?
  </h2>

  <p className="font-baloo mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
    Carpool App brings drivers and riders together on one platform, making every trip more
    affordable and efficient. Whether you want to publish a ride or find one, we’ve got you
    covered. Experience the next generation of workplace transportation.
  </p>
</div>


        {/* ===================== */}
        {/* MOBILE: 2 cards visible + scroll + dots */}
        {/* ===================== */}
        <div className="lg:hidden mt-10">
          <div
            ref={scrollerRef}
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            

            {cards.map((c, i) => (
              <div
                key={i}
                data-card="true"
                className="
                  snap-start
                  min-w-[48%]
                "
              >
                <FeatureCard card={c} />
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-4 flex justify-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
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
