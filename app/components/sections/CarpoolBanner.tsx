import Image from "next/image";

export default function CarpoolBanner() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* TOP IMAGE + TITLE */}
      <div className="relative w-full h-[220px] sm:h-96 lg:h-[520px]">
        <Image
          src="/carpool-hero.jpg"
          alt="Carpool scenic road"
          fill
          className="object-cover"
          priority
        />

        <h2
          className="
            font-poppins
            absolute inset-0
            flex justify-center
            font-semibold tracking-widest
            text-[56px]
            sm:text-[120px]
            lg:text-[200px]
            pt-6
            sm:pt-12
            lg:pt-0
            items-start
          "
          style={{
            background: "linear-gradient(180deg, #F5A623 0%, #FFFBF4 73.36%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CARPOOL
        </h2>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden relative mx-auto mt-10 px-6">
        {/* Block 1: Phone left + Text right */}
        <div className="flex items-start gap-5">
          <Image
            src="/phone-left.png"
            alt="Publish Ride screen"
            width={120}
            height={240}
            className="w-[120px] h-auto"
          />

          <div className="font-baloo pt-12">
            <h3 className="text-xl font-bold text-[#1E272E]">Publish a Ride</h3>
            <p className="mt-2 text-xs text-gray-700 leading-relaxed">
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>
        </div>

        <div className="h-14" />

        {/* Block 2: Phone right + Text */}
        <div className="flex items-start gap-5 justify-between">
          <div className="font-baloo pt-12 text-right">
            <h3 className="text-xl font-bold text-[#1E272E]">Find a Ride</h3>
            <p className="mt-2 text-xs text-gray-700 leading-relaxed max-w-[220px] mx-auto">
              Looking for a smarter way to commute? Discover rides within your
              organization, enjoy safe and affordable trips, and connect with
              verified colleagues heading the same way.
            </p>
          </div>

          <Image
            src="/phone-right.png"
            alt="Find Ride screen"
            width={120}
            height={240}
            className="w-[120px] h-auto"
          />
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="relative max-w-[1200px] mx-auto mt-24 px-6 hidden lg:block">
        {/* RED DOTTED PATH (DESKTOP ONLY) */}
        <Image
          src="/Red-dot.png"
          alt="Route path"
          width={1100}
          height={650}
          className="absolute -z-10 pointer-events-none left-7 -top-5"
        />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-3">
          {/* LEFT PHONE */}
          <div className="flex flex-col items-start text-center ml-5 mt-44">
            <Image
              src="/phone-left.png"
              alt="Publish Ride screen"
              width={220}
              height={440}
              className="w-[220px] h-auto"
            />

            <h3 className="font-baloo mt-8 text-[#1E272E] ml-5 text-2xl text-left font-bold">
              Publish a Ride
            </h3>

            <p className="font-baloo mt-3 text-left text-sm ml-5 text-gray-700 leading-relaxed max-w-[260px]">
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>

          {/* CENTER PIN */}
          <div className="relative flex justify-center mt-48">
            <Image
              src="/location-pin.png"
              alt="Location marker"
              width={150}
              height={180}
              className="z-10"
            />

            <div className="absolute bottom-[370px] flex items-center justify-center w-9 h-9 rounded-full bg-[#C7C9CB] border border-[#C7C9CB]">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>

          {/* RIGHT PHONE */}
          <div className="font-baloo flex flex-col mr-5 items-end ml-auto text-right">
            <Image
              src="/phone-right.png"
              alt="Find Ride screen"
              width={220}
              height={440}
              className="w-[220px] h-auto"
            />

            <h3 className="mt-8 text-2xl text-[#1E272E] mr-5 font-bold">
              Find a Ride
            </h3>

            <p className="mt-3 text-sm text-gray-700 mr-5 leading-relaxed max-w-[260px]">
              Looking for a smarter way to commute? Discover rides within your
              organization, enjoy safe and affordable trips, and connect with
              verified colleagues heading the same way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
