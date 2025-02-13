"use client";
import React from "react";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortComponent";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="bg-[#fbfbfb] text-[14px]">
      <div className="px-6 ">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <FilterComponent filters={data?.filters} />
          </div>

          <div className="flex flex-col col-span-12 gap-5 md:col-span-10">
            <SortComponent />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data?.list?.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
