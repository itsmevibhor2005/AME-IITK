"use client"

import React, {useState, useEffect} from 'react'

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
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[50vw] bg-transparent border-2 border-gray-500 rounded-full shadow-lg z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <ul className="flex justify-around p-4">
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          Home
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          Activities
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          RSD
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          Farewell
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          Gallery
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200">
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
