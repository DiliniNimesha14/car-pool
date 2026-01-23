import Image from "next/image";
import Container from "../Container";

export default function ReadyToLaunch() {
  return (
    <section className="py-5 sm:py-16 md:py-20 sm:bg-[#F5F5F5] sm:mb-10">
      <Container>
        {/*  MOBILE LAYOUT  */}
        <div className="block md:hidden text-center">
          <h2 className="font-poppins text-xl font-extrabold text-[#1E272E] uppercase tracking-wide mb-4">
            Ready To Launch Carpooling?
          </h2>
          <p className="font-poppins text-gray-700 text-[14px] leading-7 mb-3 px-3">
            Join leading companies already reducing costs, improving employee satisfaction, and achieving sustainability goals
          </p>

          {/* App Store Buttons - Stacked */}
          <div className="flex flex-col items-center gap-2">
            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#9EA2A5] rounded-[20px] w-[131px] h-[43px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Google Play Icon */}
              <Image
                src="/ReadyToLaunch/Playstore.png"
                alt="Google Play"
                width={18}
                height={24}
                className="w-5 h-5"
              />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-[#1E272E] uppercase tracking-wide">Get it on</div>
                <div className="text-[14px] font-semibold text-[#1E272E]">Google Play</div>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#9EA2A5] rounded-[20px] w-[131px] h-[43px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Apple Icon */}
              <Image
                src="/ReadyToLaunch/Vector.png"
                alt="App Store"
                width={23}
                height={24}
                className="w-5 h-6"
              />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-[#1E272E]">Download on the</div>
                <div className="text-[14px] font-semibold text-[#1E272E]">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/*  DESKTOP LAYOUT  */}
        <div className="hidden md:block text-center my-5">
          <h2 className="font-poppins text-3xl lg:text-5xl font-bold text-[#1E272E] uppercase tracking-wide mb-6">
            Ready To Launch Carpooling?
          </h2>
          <p className="text-gray-500 font-poppins text-2xl leading-10 max-w-5xl mx-auto mb-10">
            Join leading companies already reducing costs, improving employee satisfaction, and achieving sustainability goals
          </p>

          {/* App Store Buttons  */}
          <div className="flex items-center justify-center gap-15">
            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-5 bg-transparent border border-[#9EA2A5] rounded-[20px] w-[240px] h-[75px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Google Play Icon */}
              <Image
                src="/ReadyToLaunch/Playstore.png"
                alt="Google Play"
                width={43}
                height={49}
                className="w-12 h-12"
              />
              <div className="text-left leading-tight">
                <div className="text-[20px] uppercase tracking-normal">Get it on</div>
                <div className="text-[24px] font-semibold text-[#1E272E] -mt-1">Google Play</div>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-5 bg-transparent border border-[#9EA2A5] rounded-[20px] w-[240px] h-[75px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Apple Icon */}
              <Image
                src="/ReadyToLaunch/Vector.png"
                alt="App Store"
                width={45}
                height={45}
                className="w-10 h-11"
              />
              <div className="text-left leading-wide">
                <div className="text-[16px]">Download on the</div>
                <div className="text-[24px] font-semibold text-[#1E272E] -mt-2">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}