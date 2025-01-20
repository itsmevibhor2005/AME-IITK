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
        className=" bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute w-[50vw] text-6xl top-[-10vh] font-bold mb-[40px] text-center tracking-wide text-[rgba(255,255,255,0.8)]"
        >
          ABOUT US
        </motion.div>

        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="tracking-wide text-2xl w-[70vw] block absolute top-[10vh] text-[rgba(255,255,255,0.8)]"
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
