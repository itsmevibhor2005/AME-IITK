"use client"

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
// import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Insta from "./components/Home/insta";
import About from "./components/Home/About";
import { useState } from "react";
import Loader from "./components/LoaderHome";

export default function Home() {
  //  const [loading, setLoading] = useState(true);
  
  return (
     <div
    >

      {/* {loading && <Loader onComplete={() => setLoading(false)} />} */}
      <Hero />
      <About />
      <Insta />
    </div>
  );
}
