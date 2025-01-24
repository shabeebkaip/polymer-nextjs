"use client";
import React, { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";

const FilterComponent = ({ filters }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    if (isFilterVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFilterVisible]);
  return (
    <div>
      <div className="fixed z-50 bottom-4 right-4 md:hidden">
        <button
          onClick={toggleFilterVisibility}
          className="p-3 text-white bg-[#e58110] rounded-full shadow-lg hover:bg-[#e58110] focus:outline-none"
          aria-label="Open filter modal"
        >
          <Filter className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden md:block">
        <div className="p-6 space-y-6 bg-white rounded-lg shadow-sm">
          <FilterContent filters={filters} />
        </div>
      </div>

      {isFilterVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 max-h-[90vh] p-6 space-y-6 bg-white rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={toggleFilterVisibility}
              className="absolute z-50 p-2 text-gray-600 bg-white rounded-full shadow-md top-4 right-4 hover:text-gray-900 hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            <FilterContent filters={filters} />
          </div>
        </div>
      )}
    </div>
  );
};

const FilterContent = ({ filters }) => {
  console.log(filters, "filter");
  return (
    <>
      <div className="pb-4 border-b">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-gray-700">Brands</h4>
        <div className="space-y-2">
          {filters?.brands?.map((brand) => (
            <label
              key={brand?.name}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                style={{
                  accentColor: "#222c2e",
                }}
                className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary checked:bg-primary"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                {brand?.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3 border-t">
        <h4 className="font-medium text-gray-700">Chemical Family</h4>
        <div className="space-y-2">
          {filters?.chemicalFamily?.map((family, index) => (
            <label
              key={index}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                style={{
                  accentColor: "#e58110",
                }}
                className="w-4 h-4 text-[#e58110] border-gray-300 rounded focus:ring-[#e58110]"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                {family?.name}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="pt-4 space-y-3 border-t">
        <h4 className="font-medium text-gray-700">Labeling Claims</h4>
        <div className="space-y-2">
          {["Kosher", "Allergen-free", "BSE-free", "Eco-friendly"].map(
            (claim) => (
              <label
                key={claim}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  style={{
                    accentColor: "#e58110",
                  }}
                  type="checkbox"
                  className="w-4 h-4 text-[#e58110] border-gray-300 rounded focus:ring-[#e58110]"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">
                  {claim}
                </span>
              </label>
            )
          )}
        </div>
      </div>
      <div className="pt-4 space-y-3 border-t">
        <h4 className="font-medium text-gray-700">Compatible With</h4>
        <div className="space-y-2">
          {["Paper", "Wood", "Textiles", "Plastics"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                style={{
                  accentColor: "#e58110",
                }}
                type="checkbox"
                className="w-4 h-4 text-[#e58110] border-gray-300 rounded focus:ring-[#e58110]"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="pt-4 border-t">
        <button className="text-sm font-medium text-[#e58110] hover:text-[#e58110]">
          Clear all filters
        </button>
      </div>
    </>
  );
};

export default FilterComponent;
