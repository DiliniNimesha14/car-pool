import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import CarpoolBanner from "./components/sections/CarpoolBanner";
import WhyChooseCarpool from "./components/sections/WhyChooseCarpool";
import EarnWhileDrive from "./components/sections/EarnWhileDrive";
import TravelSmartSaveBig from "./components/sections/TravelSmartSaveBig";
import HowAppWorks from "./components/sections/HowAppWorks";
import CarpoolJourney from "./components/sections/CarpoolJourney";
import SafetyPriority from "./components/sections/SafetyPriority";
import CorporateCarpooling from "./components/sections/CorporateCarpooling";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import StillHaveQuestions from "./components/sections/StillHaveQuestions";
import ReadyToLaunch from "./components/sections/ReadyToLaunch";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CarpoolBanner />
        <WhyChooseCarpool />
        <EarnWhileDrive />
        <TravelSmartSaveBig />
        <HowAppWorks />
        <CarpoolJourney />
        <SafetyPriority />
        <CorporateCarpooling />
        <Testimonials />
        <FAQ />
        <StillHaveQuestions />
        <ReadyToLaunch />
      </main>
      <Footer />
    </>
  );
}
