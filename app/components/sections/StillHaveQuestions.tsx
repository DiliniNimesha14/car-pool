import Image from "next/image";
import Container from "../Container";

export default function StillHaveQuestions() {
  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[#1F1F1F] sm:bg-black">
      <Container>
        <div className="text-center md:pb-10">
          <h2 className="font-poppins text-xl md:text-3xl lg:text-5xl font-bold text-white text-left md:text-center mb-3 md:mb-10">
            Still Have Questions?
          </h2>
          <p className="text-[#F4F4F5] md:text-white font-poppins text-[16px] md:text-[24px] leading-relaxed text-left md:text-center mb-6 md:mb-15 max-w-4xl md:max-w-[960px] md:mx-auto">
            Our team is here to help you understand how corporate carpooling can benefit your organization
          </p>
          <button className="inline-flex items-center justify-center gap-2 md:gap-6 bg-[#F5A623] hover:bg-[#E09000] text-white font-baloo font-semibold text-[14px] md:text-[30px] px-5 md:px-10 py-3 md:py-4 rounded-full transition-colors duration-300 md:shadow-lg md:hover:shadow-xl">
            <Image
              src="/StillHaveQuestions/calendar-add.png"
              alt="Calendar"
              width={38}
              height={38}
              className="w-5 h-5 md:w-[38px] md:h-[38px]"
            />
            Schedule a Demo Call
          </button>
        </div>
      </Container>
    </section>
  );
}
