"use client"

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
// import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Insta from "./components/Home/insta";
import About from "./components/Home/About";

export default function Home() {
  return (
    <div className="">
      
      
      <Hero />
      <About />
      <Insta />
    </div>
  );
}
