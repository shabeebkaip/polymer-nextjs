import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MobileCard = ({ subCategory }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    console.log(`Clicked on ${subCategory.title}`);
    router.push(`/product-list?category=${subCategory.name}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${subCategory.bgImage})`,
        backgroundPosition: "center",
      }}
      className="rounded-[25px] shadow-md  cursor-pointer flex flex-col items-start justify-between p-3 bg-no-repeat h-[250px] "
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={handleClick}
    >
      <div className="flex justify-end w-full">
        {visible && <p>Explore More {">"}</p>}
      </div>
      <div>
        <div className="mb-3 text-primary hover:text-teal-500">
          <Image
            src={subCategory?.icon}
            alt={subCategory?.name}
            width={1000}
            height={1000}
            className="object-cover w-6 h-6"
          />
        </div>
        <p className="text-sm font-medium text-primary hover:text-teal-500">
          {subCategory?.name}
        </p>
      </div>
    </div>
  );
};

export default MobileCard;
