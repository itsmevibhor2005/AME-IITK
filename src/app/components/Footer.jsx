import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Boxes } from '@/components/ui/background-boxes';
import { Dock, DockIcon } from '@/components/ui/dock';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { AiOutlineGooglePlus } from "react-icons/ai";




const Footer = () => {
  return (
    <div
      className={cn(
        "relative",
        "w-full",
        "min-h-[30rem]",
        "bg-gray-900",
        "text-white",
        "flex",
        "flex-col",
        "items-center",
        "justify-center"
      )}
    >
      <AnimatedGridPattern
        className={cn("absolute", "inset-0", "w-full", "h-full")}
        numSquares={10}
        width={50}
        height={50}
      />
      <div
        className={cn(
          "grid",
          "lg:grid-cols-3",
          "sm:grid-cols-2",
          "grid-cols-1",
          "gap-4",
          "p-4"
        )}
      >
        <div
          className={cn(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "text-center"
          )}
        >
          <nav>
            <h1
              className={cn(
                "lg:text-4xl",
                "sm:text-3xl",
                "text-2xl",
                "font-bold",
                "mb-4",
                "text-purple-200"
              )}
            >
              Association of Mechanical Engineers
            </h1>
            <p
              className={cn(
                "lg:text-2xl",
                "sm:text-xl",
                "text-lg",
                "text-purple-100"
              )}
            >
              Indian Institute of Technology, Kanpur
            </p>
            <p className={cn("lg:text-2xl", "sm:text-xl", "text-lg", "mb-6")}>
              Kanpur, Uttar Pradesh, India
            </p>
            <ul className={cn("flex", "flex-row", "gap-7", "justify-center")}>
              <li className="hover:text-purple-400 hover:scale-125 transition-all hover:underline">
                <a
                  href="https://www.iitk.ac.in/me/"
                  target="_blank"
                  className={cn(
                    "lg:text-lg",
                    "sm:text-base",
                    "text-sm",
                    "mb-2",
                    "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                  )}
                >
                  ME Department
                </a>
              </li>
              <li className="hover:text-purple-400 hover:scale-125 transition-all hover:underline">
                <a
                  href="https://www.iitk.ac.in/ame/sae/"
                  target="_blank"
                  className={cn(
                    "lg:text-lg",
                    "sm:text-base",
                    "text-sm",
                    "mb-2",
                    "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                  )}
                >
                  SAE IITK
                </a>
              </li>
              <li className="hover:text-purple-400 hover:scale-125 transition-all hover:underline">
                <a
                  href="https://www.iitk.ac.in/"
                  target="_blank"
                  className={cn(
                    "lg:text-lg",
                    "sm:text-base",
                    "text-sm",
                    "mb-2",
                    "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                  )}
                >
                  IIT Kanpur
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={cn(
            "relative",
            "flex",
            "flex-col",
            "items-center",
            "text-center"
          )}
        >
          <h2
            className={cn(
              "lg:text-4xl",
              "sm:text-3xl",
              "text-2xl",
              "font-bold",
              "lg:mb-7",
              "sm:mb-5",
              "mb-3",
              "text-purple-200"
            )}
          >
            Follow Us
          </h2>
          <Dock
            iconMagnification={100}
            iconDistance={100}
            className="hover:scale-125 transition-all h-[75px]"
          >
            <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-125 transition-all">
              <a
                href="https://www.instagram.com/ame_iitk?igsh=NTI4ZXpwOHd1aWhz"
                target="_blank"
              >
                <Icons.instagram className="size-full" />
              </a>
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-125 transition-all">
              <a href="https://www.linkedin.com/company/association-of-mechanical-engineers/" target="_blank">
                <Icons.linkedin className="size-full" />
              </a>
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-125 transition-all">
              <a href="https://www.facebook.com/AMEIITK/" target="_blank">
                <Icons.facebook className="size-full" />
              </a>
            </DockIcon>
          </Dock>
        </div>
        <div className={cn("flex", "flex-col", "items-center", "text-center")}>
          <h2
            className={cn(
              "lg:text-4xl",
              "sm:text-3xl",
              "text-2xl",
              "font-bold",
              "mb-7",
              "text-purple-200"
            )}
          >
            Quick Links
          </h2>
          <ul className={cn("flex", "flex-col", "gap-5", "items-center")}>
            <li
              className={cn(
                "lg:text-lg",
                "sm:text-base",
                "text-sm",
                "mb-2",
                "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
              )}
            >
              <Link
                href="/activities"
                className={cn(
                  "lg:text-lg",
                  "sm:text-base",
                  "text-sm",
                  "mb-2",
                  "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                )}
              >
                Activities
              </Link>
            </li>
            <li className="hover:text-purple-400 hover:scale-125 transition-all hover:underline">
              <Link
                href="/gallery"
                className={cn(
                  "lg:text-lg",
                  "sm:text-base",
                  "text-sm",
                  "mb-2",
                  "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                )}
              >
                Gallery
              </Link>
            </li>
            <li className="hover:text-purple-400 hover:scale-125 transition-all hover:underline">
              <Link
                href="/contacts"
                className={cn(
                  "lg:text-lg",
                  "sm:text-base",
                  "text-sm",
                  "mb-2",
                  "hover:text-purple-400 hover:scale-125 transition-all hover:underline"
                )}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={cn("text-center", "mt-4")}>
        <p className="lg:text-xl sm:text-lg text-sm">
          Designed by <span className="text-purple-400"> Web Team, AME </span>
        </p>
      </div>
      <div className={cn("text-center", "mt-4")}>
        <p>Copywright © All Rights Reserved</p>
      </div>
    </div>
  );
}

const Icons = {
  facebook: (props) => (
    <img src="/images/socials/facebook.svg" alt="Facebook" {...props} />
  ),
  linkedin: (props) => (
    <img src="/images/socials/linkedin.svg" alt="LinkedIn" {...props} />
  ),
  instagram: (props) => (
    <img src="/images/socials/instagram.svg" alt="Instagram" {...props} />
  ),
};

export default Footer
