import React from "react";

const WhyChemistry = () => {
  return (
    <div
      className=" text-[#212121]  flex items-center relative "
      style={{
        // backgroundImage: `url('/svgimage.svg')`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      <div className="px-6 text-left lg:text-center py-28 md:px-20">
        <h2 className="lg:text-[32px] text-[28px] font-semibold  ">
          Why Chemistry
        </h2>
        <h1 className=" lg:text-[32px] text-[28px] font-bold">
          Driving the world's most impactful industry forward.
        </h1>
        <div className="flex items-center justify-center pt-8 ">
          <p className="xl:w-[60%] lg:w-[90%] w-full text-[18px]">
            At Knowde, we believe in the power of chemistry. We believe that
            easy and efficient access to information and raw materials enables
            you to work smarter and faster so you can continue to make a rich
            global impact. Your innovations have decreased the carbon footprint
            of the automotive industry, imagined a sustainable agricultural
            future, developed alternative, biodegradable packaging materials,
            and changed the landscape of connectivity forever – to name a few.
            This is only the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChemistry;
