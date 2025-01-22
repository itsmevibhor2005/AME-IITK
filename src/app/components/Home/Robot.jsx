"use client"

import React from "react";
import "@/app/loader.css"; // Import the animation CSS separately if needed.

const FuturisticRobotLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-80 h-80 rounded-full  flex items-center justify-center overflow-hidden">
        <div className="eva animate-rotateRight">
          <div className="relative w-24 h-16 rounded-[48%_53%_45%_55%/79%_79%_20%_22%] bg-gradient-to-r from-white to-gray-500">
            <div className="relative w-18 h-11 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[45%_53%_45%_48%/62%_59%_35%_34%] bg-[#0c203c] shadow-[0_0_2px_2px_white,inset_0_0_0_2px_black] animate-moveRight">
              <div className="absolute w-5 h-6 rounded-full bg-gradient-to-tr from-[#9bdaeb] to-white shadow-[inset_0_0_5px_#04b8d5,0_0_15px_1px_#0bdaeb] left-3 top-1/2 -translate-y-1/2 rotate-[-65deg]"></div>
              <div className="absolute w-5 h-6 rounded-full bg-gradient-to-tl from-[#9bdaeb] to-white shadow-[inset_0_0_5px_#04b8d5,0_0_15px_1px_#0bdaeb] right-3 top-1/2 -translate-y-1/2 rotate-[65deg]"></div>
            </div>
          </div>
          <div className="relative w-24 h-32 mt-1 rounded-[47%_53%_45%_55%/12%_9%_90%_88%] bg-gradient-to-r from-white to-gray-500">
            <div className="absolute left-[-1.5rem] top-[0.75rem] w-8 h-20 rounded-[40%] bg-gradient-to-l from-white to-gray-500 shadow-[5px_0px_5px_rgba(0,0,0,0.25)] rotate-y-[55deg] rotate-z-[10deg] animate-compensateRotation"></div>
            <div className="absolute right-[-1.5rem] top-[0.75rem] w-8 h-20 rounded-[40%] bg-gradient-to-r from-white to-gray-500 shadow-[5px_0px_5px_rgba(0,0,0,0.25)] rotate-y-[55deg] rotate-z-[-10deg] animate-compensateRotationRight"></div>
            <div className="absolute left-[60%] top-[10%] w-0 h-0 border-t-[180px] border-t-[#9bdaeb] border-l-[250px] border-l-transparent border-r-[250px] border-r-transparent origin-top-left mask-linear-gradient animate-glow"></div>
            <div className="absolute left-[60%] top-[10%] w-2 h-2 bg-[#9bdaeb] rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.5)] animate-moveRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticRobotLoader;
