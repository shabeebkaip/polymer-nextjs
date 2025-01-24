import React from 'react'

const AddProductHero = () => {
  return (
    <div className="relative w-full  h-[30vh]"
    style={{
      backgroundImage: `url('/molecule.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
    <div className="flex items-center justify-center h-full " 
    // style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <h2 className="md:text-[54px] text-[30px] font-medium tracking-wide text-[#FFF] " >
       Add Product
      </h2>


    </div>
  </div>
  )
}

export default AddProductHero
