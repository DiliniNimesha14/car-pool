import Image from "next/image";
import Container from "../Container";

const features = [
  {
    id: 1,
    icon: "/SaftyPriority/check-verified-02.png",
    title: "Only Your Co-Workers",
    description:
      "Every rider and driver is a verified employee from your company. No strangers, no unknowns – just trusted colleagues.",
    borderColor: "border-blue-200",
    position: "top-left",
  },
  {
    id: 2,
    icon: "/SaftyPriority/document-lock-outline.png",
    title: "Company Login Required",
    description:
      "Access only through your corporate email or company login system. If you don't work there, you can't join.",
    borderColor: "border-red-200",
    position: "top-right",
  },
  {
    id: 3,
    icon: "/SaftyPriority/carbon_location-company.png",
    title: "Company Support",
    description:
      "Issues are handled through your company's HR department with our support team. Quick resolution with people you trust.",
    borderColor: "border-coral-200",
    position: "bottom-left",
  },
  {
    id: 4,
    icon: "/SaftyPriority/Group.png",
    title: "Trip Tracking",
    description:
      "Every ride is tracked for safety. Your HR department can access trip data if needed for security or insurance purposes.",
    borderColor: "border-cyan-200",
    position: "bottom-right",
  },
];

export default function SafetyPriority() {
  return (
    <section id="safety" className="py-12 sm:py-18 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-8 sm:mb-16 font-poppins">
          <h2 className=" text-2xl mb-5 sm:mb-10 sm:text-3xl md:text-5xl font-extrabold text-[#1E272E] uppercase tracking-wide text:left sm:text-center">
            Your Safety Is Our Priority
          </h2>
          <p className="mt-4  text-[16px] sm:text-2xl max-w-5xl mx-auto text:left sm:text-center">
            Your safety is guaranteed because you only ride with verified colleagues from
            your own company
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Background Image */}
          <div className="absolute  top-18  z-0 hidden md:block">
            <Image
              src="/SaftyPriority/Private data-rafiki 1.svg"
              alt="Security illustration"
              width={800}
              height={800}
              className="h-auto"
            />
          </div>

          {/* Grid of 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-20 lg:gap-35 p-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`relative rounded-2xl p-4 sm:p-6 border-2 aspect-square flex flex-col items-center justify-center ${
                  feature.id === 1
                    ? "border-blue-100 bg-blue-100 sm:bg-transparent"
                    : feature.id === 2
                    ? "border-red-100 bg-red-100 sm:bg-transparent"
                    : feature.id === 3
                    ? "border-red-100 bg-red-100 sm:bg-transparent"
                    : "border-blue-100 bg-blue-100 sm:bg-transparent"
                } hover:shadow-md transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 sm:w-25 sm:h-25 rounded-xl flex items-center justify-center -mt-10 `}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-12 h-12 sm:w-18 sm:h-18"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center font-poppins">
                  <h3 className=" font-semibold  text-[14px] sm:text-[24px] -mb-10 sm:mb-4 ">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed hidden sm:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
