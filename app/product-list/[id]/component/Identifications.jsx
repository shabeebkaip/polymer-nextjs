import React from "react";

const Identifications = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-[18px] font-semibold  w-40 ">Identification</h4>
      <div className="flex flex-col gap-2">
        {data?.identification?.map((detail, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="font-medium ">{detail.title}:</h3>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Identifications;
