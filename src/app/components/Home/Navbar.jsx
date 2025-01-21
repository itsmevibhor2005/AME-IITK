"use client"

import { BorderBeam } from '@/components/ui/border-beam';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[50vw] bg-[rgba(203,213,225,0.8)] border-4 border-purple-50 rounded-full shadow-2xl z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <BorderBeam borderWidth={2} />
      <ul className="flex justify-around p-4">
        <Link href="/">
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          Home
        </li>
        </Link>
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          Activities
        </li>
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          RSD
        </li>
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          Farewell
        </li>
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          Gallery
        </li>
        <Link href="/contacts">
        <li className="text-black font-bold hover:text-purple-800 cursor-pointer hover:scale-125 transition-all">
          Contact
        </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar
