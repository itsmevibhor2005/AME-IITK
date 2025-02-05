"use client"

import BlurIn from '@/components/ui/blur-in';
import GradualSpacing from '@/components/ui/gradual-spacing';
import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import React from 'react'
import FuturisticRobotLoader from './Robot';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// import Home from "../../../../home.jpg"



const Hero = () => {
    // const SplineComponent = dynamic(() => import("@/assets/scene.splinecode"), {
      // ssr: false,
    // });
  return (
    <div className="flex items-center justify-between min-h-[85vh] p-2 mx-5">
      <div className="flex-1 mr-6 w-[45vw] bottom-[30%]">
        {/* <h2 className="text-6xl font-bold mb-[40px] text-center">ABOUT US</h2> */}
        {/* <GradualSpacing
          text="ASSOCIATION OF MECHANICAL ENGINEERS, IIT KANPUR"
          className="text-6xl font-bold mb-[40px] text-center"
        /> */}

        <motion.h1
        className="text-5xl leading-tight font-bold text-gray-700 mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ASSOCIATION OF MECHANICAL ENGINEERS, IIT KANPUR
      </motion.h1>

      </div>
      <div className="flex-none w-[50%] rounded-md">
        {" "}
        <img src="/home.jpg" alt="" className='rounded-md'/>
        {/* <Spline scene="https://prod.spline.design/qsqKwIv3haEfn6Pa/scene.splinecode" /> */}
        {/* <FuturisticRobotLoader /> */}
      </div>
    </div>
  );
}

export default Hero
