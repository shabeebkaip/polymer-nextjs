"use client";
import React, { useState } from "react";
import { Share, FileText, FileWarning, Mail, ChevronDown } from "lucide-react";

const ProductDetail = ({ data }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("kg");

  const units = ["kg", "lb", "ton"];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectUnit = (unit) => {
    setSelectedUnit(unit);
    setDropdownOpen(false);
  };
  const productData = {
    name: "STADEX® 10 Corn Dextrin",
    brand: "STADEX® Corn Dextrin",
    productCount: "(21 products)",
    ingredient: "Dextrin",
    chemicalFamily: "Dextrins",
    labelingClaims: [
      "Allergen-free",
      "Animal Products-free",
      "Azo Dyes-free",
      "BSE-free",
      "Ethylene Oxide-free",
      "Halal",
      "Irradiation-free",
      "Kosher",
      "Not Listed in California Proposition 65",
      "TSE-free",
    ],
    certifications: [
      "Directive 852/2004/EC",
      "FDA 21 CFR 117",
      "FDA 21 CFR 184.1277",
      "Generally Recognized As Safe (GRAS)",
      "Hazard Analysis Critical Control Point (HACCP)",
      "cGMP",
    ],
    processes: ["Ore Separation"],
    synonyms: ["Fungal amylase starch", "Hydrolysed dextrin"],
  };

  return (
    <div className="px-6 py-4 text-[14px] ">
      <div className="grid grid-cols-12 gap-3">
        <div
          className="col-span-2 "
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="col-span-7">
          <div className="">
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-2xl font-bold">{data.name}</h1>
            </div>

            <div className="flex gap-4 mb-6">
              <button className="flex items-center gap-2 px-4 py-2 border rounded">
                <FileText className="w-4 h-4" /> Technical Data Sheet
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded">
                <FileWarning className="w-4 h-4" /> Safety Data Sheet
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded">
                <FileText className="w-4 h-4" /> Request Document
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded">
                <Mail className="w-4 h-4" /> General Inquiry
              </button>
            </div>

            <p className="mb-6 text-gray-700">{data.description}</p>
          </div>
          <div className="">
            <div className="lg:col-span-3">
              <div className="p-6 border rounded">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <h3 className="font-medium ">Brand:</h3>
                    <p>{productData.brand}</p>
                  </div>
                  <div>
                    <h3 className="font-medium ">CAS Number</h3>
                    <p>{data.CAS_number}</p>
                  </div>
                  <div>
                    <h3 className="font-medium ">Chemical Name</h3>
                    <p>{data.chemical_name}</p>
                  </div>
                  {/* Basic Details */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[18px] font-semibold  w-40 ">
                      Basic Details
                    </h4>
                    <div className="flex flex-col gap-2">
                      {data?.basic_details?.map((detail, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="font-medium ">{detail.title}:</h3>
                          <p>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Identification */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[18px] font-semibold  w-40 ">
                      Identification
                    </h4>
                    <div className="flex flex-col gap-2">
                      {data?.identification?.map((detail, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="font-medium ">{detail.title}:</h3>
                          <p>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* features  */}
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-[18px]  w-40">
                      Features
                    </h4>
                    <div className="flex flex-col gap-2">
                      {data?.features?.map((feature, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="font-medium ">{feature.title}:</h3>
                          <p>{feature.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* product Family  todo  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="col-span-1 p-6 border rounded-lg shadow-lg">
            <div className="space-y-4">
              <h2 className="mb-4 text-xl font-bold">Get a Quote</h2>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Order Quantity
                </label>
                <div className="relative flex gap-2">
                  <input
                    type="number"
                    placeholder="Volume"
                    className="flex-1 p-2 border rounded"
                  />
                  <button
                    className="flex items-center gap-1 px-4 py-2 border rounded"
                    onClick={toggleDropdown}
                  >
                    {data?.uom}
                    {/* {selectedUnit} <ChevronDown className="w-4 h-4" /> */}
                  </button>
                  {/* {isDropdownOpen && (
                    <ul className="absolute right-0 z-10 w-32 mt-1 bg-white border rounded shadow">
                      {units.map((unit) => (
                        <li
                          key={unit}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectUnit(unit)}
                        >
                          {unit}
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              </div>
              <button className="w-full px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-600">
                Request a Quote
              </button>
              <button className="w-full px-4 py-2 border rounded">
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
