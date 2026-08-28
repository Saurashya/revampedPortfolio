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
        imageUrl="/assets/images/noisy-background.PNG"
        dropRadius={18}
        perturbance={0.04}
        resolution={512}
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
