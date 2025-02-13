"use client";
import React from "react";
import { motion } from "framer-motion";

const Tabs = ({ setActiveTab, activeTab, categories }) => {
  return (
    <div className="flex gap-5 mb-4 font-bold border-b">
      {categories?.map((tab, index) => (
        <motion.div
          key={index}
          className={`cursor-pointer pb-2 transition-all duration-300 ${
            activeTab.id === tab.id
              ? "border-b-4 border-[#0D47A1]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab(tab)}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: activeTab.id === tab.id ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {tab?.name.charAt(0).toUpperCase() +
            tab?.name.slice(1).replace("_", " ")}
        </motion.div>
      ))}
    </div>
  );
};

export default Tabs;
