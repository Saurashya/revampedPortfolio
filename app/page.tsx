"use client";

import Navbar from "@/components/navigation/header/navbar";
import Footer from "@/components/navigation/footer/footer";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import Landing from "@/sections/landing";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {() => (
          <main className="pb-8">
            <Landing />
            <About />
            <Skills />
            <Contact />
            <Footer />
          </main>
        )}
      </WaterWaveWrapper>
    </>
  );
}
