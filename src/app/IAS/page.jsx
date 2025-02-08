"use client"

import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";

export default function IndustryAcademiaSymposium() {
  return (
    <div className="flex flex-col items-center justify-center  p-6">
      {/* Animated Heading */}
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl text-center font-bold text-purple-700 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Industry Academia Symposium
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="lg:text-2xl sm:text-xl text-lg text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <span className="font-bold">Industry Academia Symposium (IAS)</span>,
        the flagship event by AME under the Department of Mechanical
        Engineering, showcases the innovative spirit of both academia and
        industry. Featuring oral presentation sessions by{" "}
        <span className="font-bold">senior PhD students</span> of Mechanical
        Engineering department (<span className="font-bold">either 4years</span>{" "}
        or <span className="font-bold">above</span> or{" "}
        <span className="font-bold">
          PG students having at least one publication
        </span>
        ), esteemed faculties, and industry representatives, it fosters research
        awareness and ignites collaboration between academia and industry
        towards advances in Mechanical Engineering.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <RainbowButton className="mt-10 lg:w-[200px] sm:w-[175px] w-[150px] mb-10 lg:h-[50px] sm:h-[45px] h-[40px] lg:text-xl sm:text-lg text-sm">
          <a
            href="https://docs.google.com/forms/d/19ED1SCF0-4UhSxI41kieKALknEQ1JeQg6rhgqy68XiU/edit"
            target="_blank"
          >
            Register Now
          </a>
        </RainbowButton>
      </motion.div>

      <motion.h1
        className="lg:text-5xl sm:text-3xl text-xl text-center font-bold text-purple-700 mb-10 underline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Latest Updates
      </motion.h1>
      <div className="text-center relative my-6 min-h-[100vh]">
            {/* Heading */}
            
           
      
            {/* Instagram Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] md:gap-[5rem] items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/DD-Xn5TzkkC/" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/C-vSuAoONik/" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/C-aZLMBogSZ/" />
              </motion.div>
            </div>
          </div>
    </div>
  );
}

const InstagramEmbedCustom = ({ url }) => {
  if (!url) {
    return (
      <div className="text-center text-red-500 font-medium">
        Please provide a valid Instagram post URL.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[60vw] sm:min-h-[90vh] min-h-[50vh] mx-auto border scroll-smooth rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`${url}embed`}
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="w-full sm:min-h-[90vh] min-h-[50vh] overflow-y-hidden"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

