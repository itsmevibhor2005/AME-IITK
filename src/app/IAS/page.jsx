"use client"

import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";

export default function IndustryAcademiaSymposium() {
  return (
    <div className="flex flex-col items-center justify-center  p-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-6xl font-bold text-purple-700 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Industry Academia Symposium
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-2xl text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        The **Industry Academia Symposium** fosters collaboration between
        leading industry professionals and academia, providing a platform to
        discuss innovations, research, and real-world applications. Join us to
        bridge the gap between education and industry advancements.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <RainbowButton className="mt-10 w-[200px] mb-10 h-[50px] text-xl">
          <a href="https://docs.google.com/forms/d/19ED1SCF0-4UhSxI41kieKALknEQ1JeQg6rhgqy68XiU/edit" target="_blank">
            Register Now
          </a>
        </RainbowButton>
      </motion.div>

      <motion.h1
        className="text-5xl font-bold text-purple-700 mb-10 underline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Latest Updates
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <InstagramEmbedCustom url="https://www.instagram.com/p/DD-Xn5TzkkC/" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <InstagramEmbedCustom url="https://www.instagram.com/p/C-vSuAoONik/" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="div"
        >
          <InstagramEmbedCustom url="https://www.instagram.com/p/C-aZLMBogSZ/" />
        </motion.div>
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
    <div className="w-[22vw] min-h-[86vh] mx-auto border scroll-smooth rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`${url}embed`}
        width="420"
        height="315"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="w-[22vw] min-h-[86vh] overflow-y-hidden"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

