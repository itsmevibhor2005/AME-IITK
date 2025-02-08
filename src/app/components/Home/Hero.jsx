"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Full-screen loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div
        className={`flex items-center justify-between min-h-[85vh] p-2 pb-0 mx-5 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex-1 mr-6 w-[35vw] bottom-[30%]">
          <motion.h1
            className="text-5xl leading-tight font-bold text-gray-700 mb-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ASSOCIATION OF MECHANICAL ENGINEERS, IIT KANPUR
          </motion.h1>
        </div>
        <div className="flex-none w-[54%] h-[82vh] rounded-md overflow-hidden">
          {/* <Spline
            scene="https://prod.spline.design/nz7oBbrTm7qhLF0x/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
