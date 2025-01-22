"use client"

import BlurIn from '@/components/ui/blur-in';
import GradualSpacing from '@/components/ui/gradual-spacing';
import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import React from 'react'
import FuturisticRobotLoader from './Robot';

const Hero = () => {
    
  return (
    <div className="flex items-center justify-between min-h-[90vh] p-6 mx-10">
      <div className="flex-1 mr-6 w-[45vw] absolute bottom-[30%]">
        {/* <h2 className="text-6xl font-bold mb-[40px] text-center">ABOUT US</h2> */}
        {/* <GradualSpacing
          text="ASSOCIATION OF MECHANICAL ENGINEERS, IIT KANPUR"
          className="text-6xl font-bold mb-[40px] text-center"
        /> */}

        <BlurIn
          className="text-gray-700 text-6xl tracking-wide"
          word="ASSOCIATION OF MECHANICAL ENGINEERS, IIT KANPUR"
        />
      </div>
      {/* <div className="flex-none w-[70%] h-[90vh] absolute top-14 right-0 z-10"> */}
        {/* <Spline scene="https://prod.spline.design/qsqKwIv3haEfn6Pa/scene.splinecode" className='z-10' /> */}
        {/* <FuturisticRobotLoader /> */}
      {/* </div> */}
    </div>
  );
}

export default Hero
