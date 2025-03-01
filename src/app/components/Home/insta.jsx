"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MuseoModerno } from "next/font/google";

const museo = MuseoModerno({ subsets: ["latin"], weight: ["400"] });
const InstagramSection = () => {
  const [insta, setInsta] = useState([]);
  useEffect(() =>{
    fetch("/data/Insta/instaLinks.json")
      .then((res) => res.json())
      .then((data) => setInsta(data.instagramLinks))
      .catch((err) => console.error("Error fetching Instagram data:", err));
  },[]);
  return (
    <div className="text-center relative my-6 min-h-[100vh]">
      {/* Heading */}
      <h1 className="sm:text-5xl font-museo text-purple-600 text-4xl lg:text-7xl mb-6">
        Featured Stories
      </h1>
      {insta.length ? (
        <>
        <motion.div
        className="bg-purple-600 relative top-[-15px] h-1 mx-auto"
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
          <InstagramEmbedCustom url= {insta[0]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto"
        >
          <InstagramEmbedCustom url={insta[1]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto"
          >
          <InstagramEmbedCustom url={insta[2]} />
        </motion.div>
      </div>
      </>) : (<p>Loading...</p>)}
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
