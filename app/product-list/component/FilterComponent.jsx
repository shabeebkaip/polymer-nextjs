"use client";
import React, { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";

const FilterComponent = ({ filters, loading }) => {
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
      {/* Mobile Filter Button */}
      <div className="fixed z-50 bottom-4 right-4 md:hidden">
        <button
          onClick={toggleFilterVisibility}
          className="p-3 text-white bg-[#e58110] rounded-full shadow-lg hover:bg-[#e58110] focus:outline-none"
          aria-label="Open filter modal"
        >
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Filter Panel */}
      <div className="hidden md:block">
        <div className="min-h-screen p-6 space-y-6 bg-white rounded-lg shadow-sm">
          {loading ? <SkeletonLoader /> : <FilterContent filters={filters} />}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 max-h-[90vh] p-6 space-y-6 bg-white rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={toggleFilterVisibility}
              className="absolute z-50 p-2 text-gray-600 bg-white rounded-full shadow-md top-4 right-4 hover:text-gray-900 hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            {loading ? <SkeletonLoader /> : <FilterContent filters={filters} />}
          </div>
        </div>
      )}
    </div>
  );
};

// Skeleton Loader
const SkeletonLoader = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="w-32 h-6 bg-gray-300 rounded"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-3/4 h-4 bg-gray-300 rounded"></div>
      ))}
    </div>
  );
};

const FilterContent = ({ filters }) => {
  return (
    <div className="min-h-screen">
      <div className="pb-4 border-b">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-gray-700">Brands</h4>
        <div className="space-y-2">
          {filters?.brands?.map((brand) => (
            <label key={brand?.name} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-[#222c2e] border-gray-300 rounded" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{brand?.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3 ">
        <h4 className="font-medium text-gray-700">Chemical Family</h4>
        <div className="space-y-2">
          {filters?.chemicalFamily?.map((family, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-[#e58110] border-gray-300 rounded" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{family?.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3 ">
        <h4 className="font-medium text-gray-700">Labeling Claims</h4>
        <div className="space-y-2">
          {["Kosher", "Allergen-free", "BSE-free", "Eco-friendly"].map((claim) => (
            <label key={claim} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-[#e58110] border-gray-300 rounded" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{claim}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3 ">
        <h4 className="font-medium text-gray-700">Compatible With</h4>
        <div className="space-y-2">
          {["Paper", "Wood", "Textiles", "Plastics"].map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-[#e58110] border-gray-300 rounded" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <button className="text-sm font-medium text-[#e58110] hover:text-[#e58110]">Clear all filters</button>
      </div>
    </div>
  );
};

export default FilterComponent;
