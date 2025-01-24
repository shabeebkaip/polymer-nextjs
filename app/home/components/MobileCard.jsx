import React, { useState } from "react";

const MobileCard = ({ subCategory }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    console.log(`Clicked on ${subCategory.title}`);
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
          {subCategory.icon}
        </div>
        <p className="text-sm font-medium text-primary hover:text-teal-500">
          {subCategory.title}
        </p>
      </div>
    </div>
  );
};

export default MobileCard;
