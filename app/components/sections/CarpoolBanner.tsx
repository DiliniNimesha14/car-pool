import Image from "next/image";

export default function CarpoolBanner() {
  return (
    <section className="relative w-full pt-0 pb-5 sm:pt-10 sm:pb-10 lg:pt-20 lg:pb-15 overflow-hidden">
      {/* TOP IMAGE + TITLE */}
      <div className="relative w-full h-[220px] sm:h-96 lg:h-[560px]">
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
            font-semibold tracking-normal
            text-[56px]
            sm:text-[150px]
            md:text-[180px]
            lg:text-[250px]
            pt-3
            sm:pt-5
            md:pt-10
            lg:pt-0
            items-start
          "
          style={{
            background: "linear-gradient(180deg, #F5A623 0%, #FFFBF4 55.36%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CARPOOL
        </h2>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden relative mx-auto mt-10 px-6 pb-3">
        {/* Block 1: Phone left + Text right */}
        <div className="flex items-start gap-3">
          <Image
            src="/phone-left.png"
            alt="Publish Ride screen"
            width={140}
            height={300}
            className="w-[140px] h-auto flex-shrink-0"
          />

          <div className="font-baloo pt-12">
            <h3 className="text-[16px] font-bold text-[#1E272E]">Publish a Ride</h3>
            <p className="mt-2 text-[12px] text-gray-700 leading-relaxed">
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>
        </div>

        <div className="h-10" />

        {/* Block 2: Phone right + Text */}
        <div className="flex items-start gap-3 flex-row-reverse">
          <Image
            src="/phone-right.png"
            alt="Find Ride screen"
            width={140}
            height={300}
            className="w-[140px] h-auto flex-shrink-0"
          />

          <div className="font-baloo pt-12 text-right">
            <h3 className="text-[16px] font-bold text-[#1E272E]">Find a Ride</h3>
            <p className="mt-2 text-[12px] text-gray-700 leading-relaxed">
              Looking for a smarter way to commute? Discover rides within your
              organization, enjoy safe and affordable trips, and connect with
              verified colleagues heading the same way.
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="relative max-w-[1200px] mx-auto mt-15 px-3 hidden lg:block">
        {/* RED DOTTED PATH (DESKTOP ONLY) */}
        <Image
          src="/Red-dot.png"
          alt="Route path"
          width={1100}
          height={650}
          className="absolute -z-10 pointer-events-none left-15 -top-6"
        />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-[2fr_1fr_2fr]">
          {/* LEFT PHONE */}
          <div className="flex flex-col items-start text-center ml-5 mt-40">
            <Image
              src="/phone-left.png"
              alt="Publish Ride screen"
              width={220}
              height={440}
              className="w-[220px] h-auto -mt-8"
            />

            <h3 className="font-baloo mt-20 text-[#1E272E] ml-5 text-[48px] text-left font-bold">
              Publish a Ride
            </h3>

            <p className="font-baloo mt-3 text-left text-[20px] ml-5 text-gray-700 leading-relaxed w-full">
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>

          {/* CENTER PIN */}
          <div className="relative flex justify-center items-center -mt-95">
            <Image
              src="/location-pin.png"
              alt="Location marker"
              width={200}
              height={250}
              className="z-10"
            />

            <div className="absolute bottom-[440px] flex items-center justify-center w-12 h-12 rounded-full border border-[#C7C9CB]">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C7C9CB]">
                <div className="w-3.5 h-3.5 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* RIGHT PHONE */}
          <div className="font-baloo flex flex-col mr-5 items-end ml-auto text-right ">
            <Image
              src="/phone-right.png"
              alt="Find Ride screen"
              width={220}
              height={440}
              className="w-[220px] h-auto"
            />

            <h3 className="mt-8 text-[48px] text-[#1E272E] mr-5 font-bold">
              Find a Ride
            </h3>

            <p className="mt-3 text-[20px] text-gray-700 mr-5 leading-relaxed w-full">
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
