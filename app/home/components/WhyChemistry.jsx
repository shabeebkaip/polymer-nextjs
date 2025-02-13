"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChemistry = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="text-[#212121] flex items-center relative"
      style={{
        backgroundImage: `url('/why_chemistry.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="container px-6 mx-auto text-left text-white py-28"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Why Chemistry
        </motion.h2>
        <motion.h1
          className="text-xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Driving the world's most impactful industry forward.
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="w-full text-lg">
            At Polymers Hub, we believe in the power of chemistry. We believe
            that easy and efficient access to information and raw materials
            enables you to work smarter and faster so you can continue to make a
            rich global impact.
          </p>
          <p className="w-full text-lg">
            Your innovations have decreased the carbon footprint of the
            automotive industry, imagined a sustainable agricultural future,
            developed alternative, biodegradable packaging materials, and
            changed the landscape of connectivity forever – to name a few. This
            is only the beginning.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChemistry;
