"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ subCategory, onHover, handleClick }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => onHover(subCategory.image)}
      onMouseLeave={() => onHover("/svgimage.svg")}
      className="rounded-[25px] hover:bg-white shadow-md h-32 cursor-pointer flex flex-col items-start justify-between p-3 bg-white/30 backdrop-blur-lg border border-white/30 hover:text-[#0D47A1] transition-all duration-300 transform hover:border-[#0D47A1] hover:shadow-lg"
      onClick={() => handleClick(subCategory)}
    >
      <div className="flex justify-end w-full">
        <p className="transition-opacity opacity-0 group-hover:opacity-100">
          Explore More {">"}
        </p>
      </div>
      <div>
        <Image
          src={subCategory.icon}
          alt={subCategory.title || subCategory.name}
          width={1000}
          height={1000}
          className="object-cover w-6 h-6"
        />
        <p className="text-sm font-medium text-primary hover:text-teal-500">
          {subCategory.name}
        </p>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-2 space-y-2 rounded-lg"
    >
      <Image
        src={icon}
        alt={title}
        width={1000}
        height={1000}
        className="object-contain w-10"
      />

      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: "/why-polymer/01-v1.webp",
      title: "Instant access to the most comprehensive product catalog",
      description:
        "Browse, search and filter the world's largest catalog of chemicals, ingredients and polymers.",
    },
    {
      icon: "/why-polymer/02-v2.webp",
      title: "Talk directly to suppliers' experts",
      description:
        "Ask technical product questions, talk to a sales rep and inquire about pricing.",
    },
    {
      icon: "/why-polymer/03-v3.webp",
      title: "Order samples, request documents, and get quotes",
      description:
        "Knowde concierge will handle all the details and ensure your requests are handled faster than ever.",
    },
  ];

  return (
    <div className="flex px-6">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-10 py-5 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-3/5"
          >
            <h2 className="font-bold text-[#0D47A1]">Why Polymer</h2>
            <h3 className="text-xl font-semibold leading-tight xl:text-3xl text-secondary">
              Interact with over 8,000 suppliers, browse their catalogs, access
              documents and download starter formulations.
            </h3>
          </motion.div>
          <div className="flex flex-col gap-5 md:flex-row">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
