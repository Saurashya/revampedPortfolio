"use client"
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { MdHome } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import TextArea from "@/components/ui/textarea";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import Landing from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import About from "@/sections/about";

export default function Home() {
  return (
   <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="3" resolution="2048">
{()=>
<div className="pb-8">
  {/* 
   <Landing/>
   <FeaturedSection/>
   */}
   <About/>
   </div>
}
   </WaterWaveWrapper>
   );
}
