import React from 'react';

const SellerHero = () => {
  return (
    <div className="relative w-full  h-[40vh]"
      style={{
        backgroundImage: `url('/herobg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="flex items-center justify-center h-full " style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h2 className="md:text-[54px] text-[30px] font-medium tracking-wide text-[#848484] ">
          Let’s Expand Your Reach
        </h2>


      </div>
    </div>
  );
};

export default SellerHero;