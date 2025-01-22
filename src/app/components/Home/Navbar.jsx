"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter(); // Use the useRouter hook to get the current path
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/activities", label: "Activities" },
    { href: "/rsd", label: "RSD" },
    { href: "/farewell", label: "Farewell" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[50vw] bg-[rgba(203,213,225,0.8)] border-4 border-purple-50 rounded-full shadow-2xl z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <BorderBeam borderWidth={2} />
      <ul className="flex justify-around p-4">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            <li
              className={`font-bold cursor-pointer transition-all ${
                pathname === link.href
                  ? "text-purple-800 scale-125" // Highlight style for active link
                  : "text-black hover:text-purple-800 hover:scale-125"
              }`}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
