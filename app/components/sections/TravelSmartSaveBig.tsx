import Image from "next/image";
import Container from "../Container";

const features = [
  {
    id: 1,
    icon: "/TravelSmartSaveBig/report-money.png",
    title: "Massive Savings",
    description:
      "Cut your commute costs by up to 75% compared to driving alone or using ride-sharing apps. Share fuel, tolls, and parking costs with other passengers.",
    borderColor: "border-t-[#FF6B6B]",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-400",
  },
  {
    id: 2,
    icon: "/TravelSmartSaveBig/car-sport.png",
    title: "Premium Comfort",
    description:
      "Enjoy comfortable rides in well-maintained vehicles with verified drivers. Choose from economy to premium car options based on your preference and budget.",
    borderColor: "border-t-blue-400",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-400",
  },
  {
    id: 3,
    icon: "/TravelSmartSaveBig/calendar.png",
    title: "Flexible Scheduling",
    description:
      "Book rides instantly or schedule recurring daily commutes. Set your preferred pickup times and get matched with drivers on your schedule.",
    borderColor: "border-t-green-400",
    bgColor: "bg-green-50",
    iconBg: "bg-green-400",
  },
  {
    id: 4,
    icon: "/TravelSmartSaveBig/chat-alt-2.png",
    title: "Social Connection",
    description:
      "Meet like-minded commuters, build friendships, and expand your professional network. Turn your commute time into valuable social or networking time.",
    borderColor: "border-t-purple-400",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-400",
  },
];

const stats = [
  { value: "250+", label: (<>Happy<br/>Riders</>) },
  { value: "75%", label: (<>Average<br/>Savings</>) },
  { value: "3.4k", label: (<>Monthly<br/>Rides</>) },
  { value: "4.8", label: (<>Rider<br/>Rating</>) },
];

export default function TravelSmartSaveBig() {
  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[#0D0D0D]">
      <Container>
        {/* Header */}
        <div className=" text:left sm:text-center mb-8 md:mb-10">
          <h2 className="font-poppins text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8">
            Travel Smart, Save Big
          </h2>
          <p className="text-[#9EA2A5] text-sm sm:text-2xl leading-relaxed max-w-5xl mx-auto mb-4 sm:mb-10">
            Experience affordable, comfortable, and safe commuting. Join thousands of riders who&apos;ve discovered a better way to travel while making new connections.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text:[14px] sm:text-md px-[27px] py-[7px] sm:px-8 sm:py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Start Riding & Saving
          </button>
        </div>

        {/* ==================== MOBILE LAYOUT ==================== */}
        <div className="block lg:hidden mt-4">
          {/* Feature Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-lg p-4 border-l-8 ${
                  feature.id === 1
                    ? "bg-[#FFF8F8] border-l-[#FF6B6B]"
                    : feature.id === 2
                    ? "bg-[#FFFBF4] border-l-[#F5A623]"
                    : feature.id === 3
                    ? "bg-[#F3F8FE] border-l-[#3D86E8]"
                    : "bg-[#F3FAF4] border-l-[#36A94B]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={10}
                    height={10}
                    className="w-10 h-10"
                  />
                  <h3 className="font-roboto font-semibold text-[#1E272E] text-[12px] leading-3.5">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#495056] font-roboto text-[10px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== DESKTOP LAYOUT ==================== */}
        <div className="hidden lg:block mt-10">
          <div className="relative max-w-7xl mx-auto min-h-[520px]">
            {/* Phone Mockup - Left Side */}
            <div className="absolute left-[7px] top-[5px] z-10">
              <Image
                src="/TravelSmartSaveBig/iPhone 12 Pro.png"
                alt="Rider App"
                width={332}
                height={705}
                className="w-[332px] h-[705px] drop-shadow-2xl"
              />
            </div>

            {/* Feature Cards - Right Side */}
            <div className="absolute right-0 top-[10%] w-[598px] flex flex-col gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`w-[598px] h-[140px] rounded-[6px] p-4 border-t border-r border-b border-l-8 ${
                    feature.id === 1
                      ? "bg-[#FFF8F8] border-[#FF6B6B] border-l-[#FF6B6B]"
                      : feature.id === 2
                      ? "bg-[#FFFBF4] border-[#F5A623] border-l-[#F5A623]"
                      : feature.id === 3
                      ? "bg-[#F3F8FE] border-[#3D86E8] border-l-[#3D86E8]"
                      : "bg-[#F3FAF4] border-[#36A94B] border-l-[#36A94B]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={53}
                        height={53}
                        className="w-[53px] h-[53px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-roboto font-bold text-[#495056] text-[20px] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#495056] text-[16px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 lg:mt-65">
          <div className="bg-[#F5A623] rounded-lg sm:rounded-2xl py-2 sm:py-8 px-4 sm:px-8">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    index < stats.length - 1 ? "border-r border-[#F9FAFB]" : ""
                  }`}
                >
                  <div className="font-saira text-[16px] sm:text-4xl md:text-[40px] font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white text-[10px] sm:text-xl mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}