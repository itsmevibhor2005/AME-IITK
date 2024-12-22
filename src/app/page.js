"use client"

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Header from "./components/Home/Header";

export default function Home() {
  return (
    <div className="dark">
      <BackgroundBeams />
      <Header />
    </div>
  );
}
