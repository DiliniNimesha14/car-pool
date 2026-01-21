import Image from "next/image";
import Container from "../Container";

const steps = [
  {
    title: "Download App",
    icon: "/CarpoolJourney/Vector 2.svg",
    bg: "#FFC2C2",
  },
  {
    title: "Quick Verification",
    icon: "/CarpoolJourney/Vector 1.svg",
    bg: "#A6F4B2",
  },
  {
    title: "Publish Or Find",
    icon: "/CarpoolJourney/Vector 3.svg",
    bg: "#FFE1AD",
  },
  {
    title: "Start Carpooling",
    icon: "/CarpoolJourney/Vector.svg",
    bg: "#CBE2FF",
  },
];

export default function CarpoolJourney() {
  return (
    <section className="py-8 md:py-20 bg-[#1F1F1F] sm:bg-black">
      <Container>
        <h2 className="font-poppins text-[20px] md:text-[48px] font-extrabold text-white text-left md:text-center mb-6 md:mb-20">
          YOUR CARPOOL JOURNEY
        </h2>

        {/* Horizontal Layout - All 4 circles visible on both mobile & desktop */}
        <div className="flex items-start justify-start md:justify-center">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="flex flex-col items-center">
                {/* Circle - 65px on mobile, 165px on desktop */}
                <div
                  className="relative flex items-center justify-center rounded-full w-[65px] h-[65px] md:w-[165px] md:h-[165px] p-[15px] md:p-0"
                  style={{ backgroundColor: step.bg }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={28}
                    height={28}
                    className="md:hidden w-7 h-7"
                  />
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={67}
                    height={67}
                    className="hidden md:block"
                  />
                </div>

                {/* Label */}
                <p className="mt-4 md:mt-10 text-white font-poppins text-[10px] md:text-[20px] font-bold text-center whitespace-nowrap">
                  {step.title}
                </p>
              </div>

              {/* Arrow - visible on both mobile & desktop */}
              {index < steps.length - 1 && (
                <div className="flex items-center -mt-6 md:-mt-12">
                  <div className="w-[12px] md:w-[95px] h-[1px] md:h-[2px] bg-[#74797D] relative">
                    <span className="absolute right-0 -top-[2px] md:-top-[5px] w-[5px] h-[5px] md:w-3 md:h-3 border-t border-r md:border-t-2 md:border-r-2 border-[#74797D] rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
