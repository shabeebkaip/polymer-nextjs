import { useRouter } from "next/navigation";
import React from "react";
import MobileCard from "./MobileCard";
import Image from "next/image";

const Card = ({ subCategory, onHover, handleClick }) => {
  return (
    <div
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
    </div>
  );
};

const CategoryCard = ({ onHover, subCategories }) => {
  const router = useRouter();
  const handleClick = (subCategory) => {
    router.push(`/product-list?category=${subCategory.name}`);
  };

  return (
    <>
      <div className="hidden grid-cols-5 gap-6 md:grid xl:grid-cols-6 font-montserrat">
        {subCategories?.map((subCategory, index) => (
          <Card
            key={index}
            subCategory={subCategory}
            onHover={onHover}
            handleClick={(subCategory) => handleClick(subCategory)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 md:hidden sm:grid-cols-3">
        {subCategories.map((subCategory) => (
          <MobileCard
            key={subCategory.id || subCategory.name}
            subCategory={subCategory}
            handleClick={(subCategory) => handleClick(subCategory)}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
