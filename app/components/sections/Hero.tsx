import Image from "next/image";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-5 md:ml-15 -mb-35 bg-no-repeat bg-left">
      {/* Mobile BG */}
      <div
        className="absolute inset-0 -z-10 ml-7 bg-no-repeat pointer-events-none lg:hidden"
        style={{
          backgroundImage: "url('/bg-image1.png')",
          backgroundSize: "420px",
          backgroundPosition: "left -90px top -40px",
        }}
      />
      {/* Desktop BG */}
      <div
        className="absolute inset-0 -z-10 hidden lg:block bg-no-repeat bg-left pointer-events-none"
        style={{
          backgroundImage: "url('/bg-image1.png')",
          backgroundSize: "750px",
          backgroundPosition: "left -40px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-poppins text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-normal -ml-5 max-sm:ml-0 max-sm:pl-3">
              Share Rides,
              <br />
              Split Costs,
              <br />
              Work Together.
            </h1>

            <p className="font-baloo mt-6 max-w-xl text-gray-600 font-semibold text-lg leading-relaxed -ml-5 max-sm:ml-0 max-sm:pl-3">
              Find trusted carpool partners within your organization. Save big on
              commuting, strengthen bonds with colleagues, and ride greener
              together.
            </p>

            {/* MOBILE: Phones */}
            <div className="mt-8 flex justify-center lg:hidden">
              <div className="relative w-[260px] mb-6">
                <Image
                  src="/phone-2.png"
                  alt="App screen preview"
                  width={220}
                  height={480}
                  className="absolute right-0 left-15 -top-8 drop-shadow-[12px_18px_35px_rgba(0,0,0,0.28)]"
                />
                <Image
                  src="/phone-1.png"
                  alt="App screen main"
                  width={320}
                  height={640}
                  className="relative z-10 top-10 right-15 drop-shadow-[-14px_20px_45px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>

            {/* App store buttons */}
            <div className="mt-8 -ml-5 flex flex-wrap gap-4 max-sm:ml-0 max-sm:px-3 max-sm:flex-col">
              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#9EA2A5] bg-white px-4 py-3 hover:bg-gray-100 transition max-sm:w-full max-sm:justify-start"
              >
                <Image
                  src="/Playstore.png"
                  alt="Google Play"
                  width={28}
                  height={28}
                  className="ml-5 md:ml-0"
                />
                <span className="text-xs text-[#1E272E] leading-none">
                  GET IT ON
                  <br />
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </a>

              {/* App Store */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#9EA2A5] bg-white px-4 py-3 hover:bg-gray-100 transition max-sm:w-full max-sm:justify-start"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  className="text-black ml-5 md:ml-0"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.3-36.7 16.4-64.4 51.5-85.1-19.6-28.3-49.2-43.9-88.3-47-37.1-3-77.6 21.6-89.6 21.6-12.4 0-48.9-20.5-75.8-20.5-55.4.8-115.2 44.2-115.2 131.3 0 25.7 4.8 52.2 14.3 79.5 12.7 36.7 58.5 126.8 106.3 125.3 25.1-.6 42.8-17.9 75.5-17.9 31.7 0 47.8 17.9 75.8 17.9 48.2-.8 89.7-81.6 101.8-118.4-71.8-34.5-56.3-106.6-56.3-107.7z" />
                  <path d="M259.4 76.1c10.6-13.4 18.2-32.1 16.2-50.9-17.3.7-37.7 11.5-49.8 25.7-11 12.5-20.7 31.6-18.2 50.1 19.3 1.5 38.8-9.8 51.8-24.9z" />
                </svg>
                <span className="text-xs text-[#1E272E] leading-none">
                  Download on the
                  <br />
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT PHONES (Desktop only) */}
          <div className="relative hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[360px] mb-10">
              <Image
                src="/phone-2.png"
                alt="App screen preview"
                width={260}
                height={520}
                className="absolute right-0 -top-8 drop-shadow-[12px_18px_35px_rgba(0,0,0,0.28)]"
              />
              <Image
                src="/phone-1.png"
                alt="App screen main"
                width={360}
                height={720}
                className="relative z-10 right-38 top-10 drop-shadow-[-14px_20px_45px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
