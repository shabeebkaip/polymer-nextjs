"use client";
import React, { useState } from "react";
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
    <div className="relative ">
      <div
        className="relative flex items-center h-full hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="container flex flex-col gap-10 px-4 mx-auto">
          <div className="flex flex-col gap-5 font-montserrat">
            <h1 className="text-[#222c2e] mt-8 xl:text-4xl md:text-5xl text-[35px] font-semibold xl:w-2/5 leading-tight font-montserrat">
              The easiest way to source ingredients, polymers, and chemistry
            </h1>
            <p>
              Search, sample, quote and purchase from 8,000+ suppliers —{" "}
              <span className="font-bold">all in one place.</span>
            </p>
          </div>
          <div className="py-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
