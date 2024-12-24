"use client"

import BlurIn from '@/components/ui/blur-in';
import GradualSpacing from '@/components/ui/gradual-spacing';
import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import React from 'react'

const Hero = () => {
    
  return (
    <div className="flex items-center justify-between min-h-[90vh] p-6 mx-10">
      <div className="flex-1 mr-6 w-[45vw] absolute bottom-[30%]">
        {/* <h2 className="text-6xl font-bold mb-[40px] text-center">ABOUT US</h2> */}
        <GradualSpacing
          text="ABOUT US"
          className="text-6xl font-bold mb-[40px] text-center"
        />

        <BlurIn
          className="text-gray-700 text-[10px] tracking-wide"
          word="The Association of Mechanical Engineers (AME), IIT Kanpur welcomes you
          to its information portal. We provide much needed exposure to real
          life engineering problems, both technical as well as managerial kind
          by organizing industrial tours visits, lectures on topics of general
          interest and seminars of specific interest etc."
        />
      </div>
      <div className="flex-none w-[70%] h-[90vh] absolute top-14 right-0 z-10">
        <Spline scene="https://prod.spline.design/qsqKwIv3haEfn6Pa/scene.splinecode" className='z-10' />
      </div>
    </div>
  );
}

export default Hero
