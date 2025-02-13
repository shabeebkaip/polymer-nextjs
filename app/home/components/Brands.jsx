"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const clients = [
  "/clients/lubrizol_logo.webp",
  "/clients/jj.webp",
  "/clients/03-Givaudan-logo.webp",
  "/clients/evonik.webp",
  "/clients/05-Unilever-logo.webp",
  "/clients/Homepage_TrustedBy_Advansix.webp",
  "/clients/07-PPG-logo.webp",
  "/clients/TrustedBy_Bunge.webp",
  "/clients/Homepage_SabicLogo.webp",
  "/clients/10-Nouryon-logo.webp",
  "/clients/ingredion.webp",
  "/clients/12-Braskem-logo.webp",
  "/clients/adm.webp",
  "/clients/14-MitsubishiChem-logo.webp",
  "/clients/15_PG_Logo.webp",
];

const Brands = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="container flex px-6 mx-auto"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="grid items-center grid-cols-1 py-20 lg:grid-cols-2"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold leading-tight md:text-3xl text-primary">
            Trusted by the World's Top{" "}
            <span className="text-[#0D47A1]">Customers & Suppliers</span>
          </h3>
        </motion.div>

        <motion.div
          className="grid items-center grid-cols-2 gap-5 md:flex md:flex-row md:flex-wrap"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {clients.map((img, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={img}
                alt="client"
                width={1000}
                height={1000}
                className="w-32 object-fit"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Brands;
