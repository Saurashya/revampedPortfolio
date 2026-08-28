"use client";

import Navbar from "@/components/navigation/header/navbar";
import Footer from "@/components/navigation/footer/footer";
import Landing from "@/sections/landing";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-8">
        <Landing />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
