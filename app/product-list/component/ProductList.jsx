"use client";

import React from "react";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortComponent";
import ProductCard from "./ProductCard";

const ProductList = ({ data = {}, loading = false }) => {
  const products = loading ? Array.from({ length: 8 }) : data?.list || [];

  return (
    <div className="bg-[#fbfbfb] text-[14px] px-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Filter */}
        <div className="col-span-12 md:col-span-2">
          <FilterComponent filters={data?.filters} loading={loading} />
        </div>

        {/* Product Section */}
        <div className="flex flex-col col-span-12 gap-5 md:col-span-10">
          <SortComponent loading={loading} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product} loading={loading} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
