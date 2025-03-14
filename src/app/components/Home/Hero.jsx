"use client";

// import Image from "next/image";
import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGifVisible, setIsGifVisible] = useState(true);

  return (
    <div className="hero-head relative min-h-[44vh]">
      {/* Full-screen loader with smooth center opening effect */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={isGifVisible ? {} : { clipPath: "inset(0% 50% 0% 50%)" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          {isGifVisible && (
            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="../../../../ame/page-loader.gif"
                alt="#page_loader"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onAnimationComplete={() => setIsGifVisible(false)}
              />
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onAnimationComplete={() => setIsGifVisible(false)}
                className="inset-0 text-white z-50 text-3xl"
              >
                AME IITK
              </motion.div>
            </div>
          )}
        </motion.div>
      )}

      <motion.div
        className={`hero-body flex items-center justify-between lg:min-h-[85vh] sm:min-h-[70vh] min-h-[55vh] p-2 pb-0 mx-5`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 sm:mr-6 mr-0 lg:w-[45vw] w-[35vw] bottom-[30%]">
          <motion.h1
            className="flex flex-col leading-tight font-bold text-gray-700 mb-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero-txt1 font-sanchez lg:text-3xl sm:text-xl text-lg mb-5">
              ASSOCIATION OF
            </span>
            <span className="hero-txt2 font-leaguespartan lg:text-6xl sm:text-4xl text-2xl">
              MECHANICAL ENGINEERS, IIT KANPUR
            </span>
          </motion.h1>
        </div>
        <div className="hero-robot flex-none relative lg:w-[50%] lg:h-[82vh] sm:h-[75vh] sm:w-[66%] w-[65vw] h-[50vh] z-10 rounded-md overflow-hidden">
          <Spline
            scene="https://prod.spline.design/nz7oBbrTm7qhLF0x/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
