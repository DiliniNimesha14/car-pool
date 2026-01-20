import Image from "next/image";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16 lg:pt-24 pb-16 md:pb-20 lg:pb-30 md:ml-15 lg:-mb-35 bg-no-repeat bg-left">
      {/* Mobile BG */}
      <div
        className="absolute inset-0 -z-10 ml-7 bg-no-repeat pointer-events-none lg:hidden"
        style={{
          backgroundImage: "url('/Hero/bg-image1.png')",
          backgroundSize: "350px",
          backgroundPosition: "left -10px top -10px",
        }}
      />
      {/* Desktop BG */}
      <div
        className="absolute inset-0 -z-10 hidden lg:block bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/Hero/bg-image1.png')",
          backgroundSize: "850px",
          backgroundPosition: "left 10px top -40px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-8 md:gap-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-poppins text-[36px] sm:text-[50px] md:text-[65px] lg:text-[75px] xl:text-[80px] font-extrabold leading-[1.5] md:leading-tight lg:leading-[1.5] pl-3 sm:pl-0 sm:-ml-8">
              Share Rides,
              <br />
              Split Costs,
              <br />
              Work Together.
            </h1>

            <p className="font-baloo mt-4 md:mt-6 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-full text-gray-600 font-semibold text-[16px] sm:text-[20px] md:text-[26px] lg:text-[22px] leading-6 sm:leading-7 md:leading-relaxed lg:leading-relaxed pl-3 sm:pl-0 sm:-ml-8">
              Find trusted carpool partners within your organization. Save big on
              commuting, strengthen bonds with colleagues, and ride greener
              together.
            </p>

            {/* MOBILE & TABLET: Phones */}
            <div className="mt-8 md:mt-10 flex justify-center lg:hidden">
              <div className="relative w-[250px] sm:w-[300px] md:w-[350px] mb-6">
                <Image
                  src="/Hero/iPhone-12-Pro.png"
                  alt="App screen preview"
                  width={200}
                  height={100}
                  className="absolute left-[100px] sm:left-[120px] md:left-[150px] -top-8 w-[150px] sm:w-[180px] md:w-[200px] h-auto"
                />
                <Image
                  src="/Hero/False.png"
                  alt="App screen main"
                  width={240}
                  height={150}
                  className="relative z-10 top-10 -right-2 sm:-right-4 md:-right-6 w-[180px] sm:w-[220px] md:w-[260px] h-auto"
                />
              </div>
            </div>

            {/* App store buttons */}
            <div className="mt-8 md:mt-10 lg:mt-25 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 px-3 sm:px-0 sm:-ml-8">
              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start pl-8 sm:justify-center sm:pl-0 gap-3 sm:gap-4 w-full sm:w-[200px] md:w-[220px] lg:w-[243px] h-[65px] sm:h-[70px] lg:h-[75px] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] border border-[#9EA2A5] bg-transparent hover:bg-white/10 transition"
              >
                <Image
                  src="/Playstore.png"
                  alt="Google Play"
                  width={40}
                  height={40}
                  className="w-[30px] sm:w-[35px] lg:w-[40px] h-auto"
                />
                <span className="text-[14px] sm:text-[16px] lg:text-[20px] text-[#1E272E] leading-5 sm:leading-6">
                  GET IT ON
                  <br />
                  <span className="text-[16px] sm:text-[18px] lg:text-[24px] font-semibold">Google Play</span>
                </span>
              </a>

              {/* App Store */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start pl-8 sm:justify-center sm:pl-0 gap-3 sm:gap-4 lg:gap-6 w-full sm:w-[200px] md:w-[220px] lg:w-[243px] h-[65px] sm:h-[70px] lg:h-[75px] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] border border-[#9EA2A5] bg-transparent hover:bg-white/10 transition"
              >
                <svg
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  className="text-black w-[30px] sm:w-[35px] lg:w-[45px] h-auto"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.3-36.7 16.4-64.4 51.5-85.1-19.6-28.3-49.2-43.9-88.3-47-37.1-3-77.6 21.6-89.6 21.6-12.4 0-48.9-20.5-75.8-20.5-55.4.8-115.2 44.2-115.2 131.3 0 25.7 4.8 52.2 14.3 79.5 12.7 36.7 58.5 126.8 106.3 125.3 25.1-.6 42.8-17.9 75.5-17.9 31.7 0 47.8 17.9 75.8 17.9 48.2-.8 89.7-81.6 101.8-118.4-71.8-34.5-56.3-106.6-56.3-107.7z" />
                  <path d="M259.4 76.1c10.6-13.4 18.2-32.1 16.2-50.9-17.3.7-37.7 11.5-49.8 25.7-11 12.5-20.7 31.6-18.2 50.1 19.3 1.5 38.8-9.8 51.8-24.9z" />
                </svg>
                <span className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#1E272E] leading-5 sm:leading-6">
                  Download on the
                  <br />
                  <span className="text-[16px] sm:text-[18px] lg:text-[24px] font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT PHONES (Desktop only) */}
          <div className="relative hidden lg:block">
            {/* iPhone 12 Pro - top right corner */}
            <div className="absolute -top-40 -right-10 z-20">
              <Image
                src="/Hero/iPhone-12-Pro.png"
                alt="App screen with CARPOOL"
                width={300}
                height={600}
                className="[filter:drop-shadow(10px_20px_20px_rgba(0,0,0,0.35))]"
              />
            </div>

            {/* False phone - below and to the left */}
            <div className="relative z-30 -mt-5 mr-32 w-[400px]">
              <Image
                src="/Hero/False.png"
                alt="App screen with role selection"
                width={400}
                height={700}
                className="drop-shadow-[-15px_20px_30px_rgba(0,0,0,0.6)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
