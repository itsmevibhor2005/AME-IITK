"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Home/Navbar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-0 lg:py-2 sm:py-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={160}
          className="lg:w-[200px] sm:w-[150px] w-[150px] object-contain"
        />
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
