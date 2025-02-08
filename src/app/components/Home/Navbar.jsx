"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
      setIsSidebarVisible(false);
    } else {
      setIsVisible(true);
      setIsSidebarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/activities", label: "Activities" },
    { href: "/IAS", label: "IAS" },
    { href: "/farewell", label: "Farewell" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden fixed top-5 right-5 z-50 bg-gray-300 p-2 rounded-md shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for Mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[70vw] bg-gray-200 shadow-xl z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen && isSidebarVisible
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-6 space-y-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <li
                className={`text-lg font-bold cursor-pointer transition-all ${
                  pathname === link.href
                    ? "text-purple-800 scale-110"
                    : "text-black hover:text-purple-800 hover:scale-110"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Top Navbar for Larger Screens */}
      <nav
        className={`hidden sm:block fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[50vw] w-[60vw] bg-[rgba(203,213,225,0.8)] border-4 border-purple-50 rounded-full shadow-2xl z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <BorderBeam borderWidth={2} />
        <ul className="flex justify-around p-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <li
                className={`lg:text-lg text-sm font-bold cursor-pointer transition-all ${
                  pathname === link.href
                    ? "text-purple-800 scale-125"
                    : "text-black hover:text-purple-800 hover:scale-125"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
