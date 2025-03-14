"use client";

import React from "react";
// import Image from "next/image";
import Navbar from "./Home/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-0 lg:py-2 sm:py-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
        <img
          src="/ame/logo.png"
          alt="logo"
          width={100}
          height={160}
          className="lg:w-[200px] sm:w-[150px] w-[150px] object-contain"
        />
        </Link>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
