import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <div className="py-20 px-20 flex flex-col justify-center gap-10  bg-white">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h3 className="text-5xl text-[#2c2b2b]">Categories</h3>
        <p className="text-lg text-[#4a4a4a] text-center max-w-3xl">
          Explore our wide range of base polymer categories, designed to meet
          diverse industrial and research needs. From thermoplastics to
          elastomers, find the materials that suit your requirements and
          applications.
        </p>
      </div>
      <CategoryCard />
    </div>
  );
};

export default CategoryList;
