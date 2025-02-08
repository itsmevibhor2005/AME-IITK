"use client";

import React from "react";

const LoopAnimationLoader = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      Loading....
    </div>
    // <div className="bg-white w-full h-screen flex justify-center items-center relative">
    //   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
    //     {Array.from({ length: 21 }).map((_, i) => (
    //       <div
    //         key={i}
    //         className="absolute bg-white rounded-full border-[0.9vmin] border-cyan-400 shadow-lg shadow-gray-500 inset-shadow-lg inset-shadow-gray-500"
    //         style={{
    //           width: `${i * 2.5}vmin`,
    //           aspectRatio: "1",
    //           transformStyle: "preserve-3d",
    //           transform: "rotateX(70deg) translateZ(50px)",
    //           animation: `my-move 3s ease-in-out ${i * 0.08}s infinite`,
    //         }}
    //       ></div>
    //     ))}
    //   </div>
    //   <style>
    //     {`
    //       @keyframes my-move {
    //         0%, 100% {
    //           transform: rotateX(70deg) translateZ(50px) translateY(0px);
    //           filter: hue-rotate(0deg);
    //         }
    //         50% {
    //           transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
    //           filter: hue-rotate(180deg);
    //         }
    //       }
    //     `}
    //   </style>
    // </div>
  );
};

export default LoopAnimationLoader;
