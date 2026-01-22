import Image from "next/image";
import Container from "../Container";

const features = [
  {
    id: 1,
    icon: "/CorporateCarpool/Group 72.png",
    text: (
      <>
        You know who you&apos;re riding with – They&apos;re <br className="md:hidden" /> your Co-workers, not strangers.
      </>
    ),
  },
  {
    id: 2,
    icon: "/CorporateCarpool/Group 73.png",
    text: (
      <>
        Shared accountability – Everyone represents <br className="md:hidden" /> the same company.
      </>
    ),
  },
  {
    id: 3,
    icon: "/CorporateCarpool/users 2.png",
    text: (
      <>
      Easy reporting – Any issues go through your familiar <br className="md:hidden" /> HR processes.
      </>
    ),
  },
];

export default function CorporateCarpooling() {
  return (
    <section className="py-5 sm:py-24 bg-[#1F1F1F]">
      <Container>
        {/*  MOBILE LAYOUT  */}
        <div className="block md:hidden">
          {/* Title */}
          <h2 className="font-poppins text-[16px] sm:text-xl font-bold text-white text-left mb-8">
            Why Corporate Carpooling Is Safer ?
          </h2>

          {/* Features List - Stacked */}
          <div className="flex flex-col gap-5 px-3">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FFDADA] flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={8}
                    height={8}
                    className="w-3 h-3"
                  />
                </div>
                {/* Text */}
                <p className="text-[#F4F4F5] text-[10px] leading-relaxed font-poppins">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  DESKTOP LAYOUT */}
        <div className="hidden md:block">
          {/* Title */}
          <h2 className="font-poppins text-3xl lg:text-5xl font-bold text-white text-center mb-15 lg:mb-25">
            Why Corporate Carpooling is Safer ?
          </h2>

          {/* Features - Scattered Layout */}
          <div className="relative max-w-6xl mx-auto min-h-[280px] ">
            {/* Feature 1 - Top Center/Right */}
            <div className="absolute top-0 left-1/2 -translate-x-1/4 lg:left-[42%] lg:translate-x-0">
              <div className="flex items-start gap-16">
                <div className="flex-shrink-0 w-15 h-15 rounded-full bg-[#FFDADA] flex items-center justify-center">
                  <Image
                    src={features[0].icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-7 h-7"
                  />
                </div>
                <p className="text-[#F4F4F5] text-[24px] leading-relaxed max-w-2xl">
                  {features[0].text}
                </p>
              </div>
            </div>

            {/* Feature 2 - Middle Left */}
            <div className="absolute top-[130px] left-0 lg:-left-2%]">
              <div className="flex items-start gap-16">
                <div className="flex-shrink-0 w-15 h-15 rounded-full bg-[#FFDADA] flex items-center justify-center">
                  <Image
                    src={features[1].icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-7 h-7"
                  />
                </div>
                <p className="text-[#F4F4F5] text-[24px] leading-relaxed max-w-2xl ">
                  {features[1].text}
                </p>
              </div>
            </div>

            {/* Feature 3 - Bottom Center/Right */}
            <div className="absolute top-[230px] left-[42%] -translate-x-1/4  lg:translate-x-0">
              <div className="flex items-start gap-16">
                <div className="flex-shrink-0 w-15 h-15 rounded-full bg-[#FFDADA] flex items-center justify-center">
                  <Image
                    src={features[2].icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-7 h-7"
                  />
                </div>
                <p className="text-[#F4F4F5] text-[24px] leading-relaxed max-w-2xl ">
                  {features[2].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}