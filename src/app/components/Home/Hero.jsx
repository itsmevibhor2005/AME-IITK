"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="hero-head relative min-h-[44vh]">
      {/* Full-screen loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div
        className={`hero-body flex items-center justify-between lg:min-h-[85vh] sm:min-h-[70vh] min-h-[55vh] p-2 pb-0 mx-5 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex-1 sm:mr-6 mr-0 lg:w-[45vw] w-[35vw] bottom-[30%]">
          <motion.h1
            className="flex flex-col leading-tight font-bold text-gray-700 mb-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero-txt1 font-sanchez lg:text-3xl sm:text-xl text-lg mb-5">ASSOCIATION OF </span>{" "}
            <span className="hero-txt2 font-leaguespartan lg:text-6xl sm:text-4xl text-2xl">
              MECHANICAL ENGINEERS, IIT KANPUR
            </span>
          </motion.h1>
        </div>
        <div className="hero-robot flex-none relative lg:w-[50%] lg:h-[82vh] sm:h-[75vh] sm:w-[66%] w-[65vw] h-[50vh] z-10  rounded-md overflow-hidden">
          {/* <div className="absolute bottom-4 right-3 w-[145px] h-[50px] bg-gradient-to-r from-[rgb(236,234,247)] to-[rgb(235,232,246)] z-10"></div>{" "} */}
          <Spline
            scene="https://prod.spline.design/nz7oBbrTm7qhLF0x/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
          {/* Overlay div */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
