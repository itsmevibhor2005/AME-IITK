"use client";

import React from "react";
import { motion } from "framer-motion";

const InstagramSection = () => {
  return (
    <div className="text-center relative my-6 min-h-[100vh]">
      {/* Heading */}
      <h1 className="sm:text-5xl text-4xl lg:text-6xl font-bold mb-6">
        Latest Stories Running Around
      </h1>
      <motion.div
        className="bg-black relative top-[-15px] h-1 mx-auto"
        style={{ width: "0px" }}
        whileInView={{ width: "75vw" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          originX: 0.5,
        }}
      ></motion.div>

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
  );
};

export default InstagramSection;

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
