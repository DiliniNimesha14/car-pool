// app/page.tsx
import Navbar from "./components/layout/Navbar";
import CARPOOL from "./components/sections/CARPOOL";
import Hero from "./components/sections/Hero";
import WhyChooseCarpool from "./components/sections/WhyChooseCarpool";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CARPOOL />
      <WhyChooseCarpool />
    </>
  );
}
