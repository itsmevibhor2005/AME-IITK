import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center  font-medium text-transparent flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute w-[70vw] lg:text-6xl sm:top-[-10vh] top-[-20vh] sm:text-5xl text-4xl font-bold font-nunito lg:mb-[40px] mb-[20px] text-center tracking-wide text-[rgba(255,255,255,0.8)]"
        >
          ABOUT US
        </motion.div>

        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="tracking-wide lg:text-2xl  sm:text-xl text-lg font-nunito w-[80vw] block absolute lg:top-[10vh] sm:top-[5vh] top-[-5vh] text-[rgba(255,255,255,0.8)]"
        >
          The Association of Mechanical Engineers (AME), IIT Kanpur welcomes you
          to its information portal. We provide much needed exposure to real
          life engineering problems, both technical as well as managerial kind
          by organizing industrial tours visits, lectures on topics of general
          interest and seminars of specific interest etc.
        </motion.div>
      </motion.h1>
    </LampContainer>
  );
};

export default About;
