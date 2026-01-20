import { Poppins } from "next/font/google";
import { Baloo_Bhai_2 } from "next/font/google";

const balooBhai2 = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function CARPOOL() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* TOP IMAGE + TITLE */}
      <div className="relative w-full h-[220px] sm:h-96 lg:h-130">
  <img
    src="/carpool-hero.jpg"
    alt="Carpool"
    className="w-full h-full object-cover"
  />

  <h1
    className={`
      ${poppins.className}
      absolute inset-0
      flex justify-center
      font-semibold tracking-widest
      text-[56px]          /* mobile */
      sm:text-[120px]      /* tablet */
      lg:text-[200px]      /* desktop */
      pt-6                 
      sm:pt-12
      lg:pt-0
      items-start
    `}
    style={{
      background: "linear-gradient(180deg, #F5A623 0%, #FFFBF4 73.36%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    CARPOOL
  </h1>
</div>


      {/* ===================== */}
      {/*  MOBILE VERSION  */}
      {/* ===================== */}

      <div className="lg:hidden relative mx-auto mt-10 px-6">
        {/* Block 1: Phone left + Text right */}
        <div className="flex items-start gap-5">
          <img src="/phone-left.png" alt="Publish Ride" className="w-[120px]" />

          <div className={`${balooBhai2.className} pt-12`}>
            <h2 className="text-xl font-bold text-[#1E272E]">Publish a Ride</h2>
            <p className="mt-2 text-[12px] text-gray-700 leading-relaxed">
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>
        </div>

        {/* spacing like screenshot */}
        <div className="h-14" />

        {/* Block 2: Phone right + Text (center-ish) */}
        <div className="flex items-start gap-5 justify-between">
          <div className={`${balooBhai2.className} pt-12 text-right`}>
            <h2 className="text-xl font-bold text-[#1E272E]">Find a Ride</h2>
            <p className="mt-2 text-[12px] text-gray-700 leading-relaxed max-w-[220px] mx-auto">
              Looking for a smarter way to commute? Discover rides within your
              organization, enjoy safe and affordable trips, and connect with
              verified colleagues heading the same way.
            </p>
          </div>

          <img src="/phone-right.png" alt="Find Ride" className="w-[120px]" />
        </div>
      </div>

      {/* ===================== */}
      {/*  DESKTOP VERSION   */}
      {/* ===================== */}

      <div className="relative max-w-300 mx-auto mt-24 px-6 hidden lg:block">
        {/*  RED DOTTED PATH (DESKTOP ONLY) */}
        <img
          src="/red-dot.png"
          alt="Route"
          className="
            absolute -z-10 pointer-events-none
            left-7 -top-5
            w-[1100px] h-[650px]
          "
        />

        {/* CONTENT GRID (DESKTOP ONLY) */}
        <div className="grid grid-cols-3">
          {/* LEFT PHONE */}
          <div className="flex flex-col items-left text-center ml-5 mt-44">
            <img src="/phone-left.png" alt="Publish Ride" className="w-55" />

            <h2
              className={`${balooBhai2.className} mt-8 text-[#1E272E] ml-5 text-2xl text-left font-bold`}
            >
              Publish a Ride
            </h2>

            <p
              className={`${balooBhai2.className} mt-3 text-left text-sm ml-5 text-gray-700 leading-relaxed max-w-65`}
            >
              Heading somewhere? Publish your ride, fill your empty seats, and
              cut down on travel costs while reducing traffic and pollution.
              Share the journey and make every trip count.
            </p>
          </div>

          {/* CENTER PIN */}
          <div className="relative flex justify-center mt-48">
            <img
              src="/location-pin.png"
              alt="Location"
              className="w-[150px] h-45 z-10"
            />

            <div className="absolute bottom-[370px] flex items-center justify-center w-9 h-9 rounded-full bg-[#C7C9CB] border border-[#C7C9CB]">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>

          {/* RIGHT PHONE */}
          <div
            className={`${balooBhai2.className} flex flex-col mr-5 items-end ml-auto text-right`}
          >
            <img src="/phone-right.png" alt="Find Ride" className="w-55" />
            <br />

            <h2 className="mt-8 text-2xl text-[#1E272E] mr-5 font-bold">
              Find a Ride
            </h2>

            <p className="mt-3 text-sm text-gray-700 mr-5 leading-relaxed max-w-65">
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
