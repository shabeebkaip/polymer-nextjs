"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import Tabs from "./Tabs";

const Hero = ({ subCategories, categories }) => {
  const [heroBg, setHeroBg] = useState("/svgimage.svg");
  const [activeTab, setActiveTab] = useState(categories[0]);
  const handleHover = (bgImage) => {
    setHeroBg(bgImage || "/svgimage.svg");
  };

  if (!subCategories || subCategories.length === 0) {
    return <div>Loading...</div>;
  }
  const filteredSubCategories = subCategories.filter(
    (item) => item.parentCategory === activeTab.name
  );
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative flex items-center h-full hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
          transition: "background-image 0.8s ease-in-out",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="container flex flex-col gap-10 px-4 mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-5 font-montserrat">
            <motion.h1
              className="text-[#222c2e] mt-8 xl:text-4xl md:text-5xl text-[35px] font-semibold xl:w-2/5 leading-tight font-montserrat"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The easiest way to source ingredients, polymers, and chemistry
            </motion.h1>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Search, sample, quote and purchase from 8,000+ suppliers —
              <span className="font-bold"> all in one place.</span>
            </motion.div>
          </div>
          <motion.div
            className="py-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              categories={categories}
            />
            <CategoryCard
              onHover={handleHover}
              activeTab={activeTab}
              subCategories={filteredSubCategories}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
