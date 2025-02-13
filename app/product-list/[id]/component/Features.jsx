import React from "react";

const Features = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-semibold text-[18px]  w-40">Features</h4>
      <div className="flex flex-col gap-2">
        {data?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="font-medium ">{feature.title}:</h3>
            <p>{feature.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
