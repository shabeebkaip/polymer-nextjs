import React from "react";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search through 8,000+ Supplier owned storefronts"
        className="w-full px-4 py-2 pr-10 text-gray-600 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 text-[15px]  focus:ring-[#616161]"
      />
      <div className="absolute p-1 transform -translate-y-1/2 bg-[#0D47A1] rounded-full right-3 top-1/2">
        <Search className="w-5 h-5 text-white" />
      </div>
    </>
  );
};

export default NavSearch;
