"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share, FileText, FileWarning, Mail, ChevronDown } from "lucide-react";
import DocumentTable from "./DocumentTable";
import ActionButtons from "./ActionButtons";
import BasicDetails from "./BasicDetails";
import Identifications from "./Identifications";
import Features from "./Features";
import { Breadcrumbs } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductDetail = ({ data }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("kg");
  const router = useRouter();

  const units = ["kg", "lb", "ton"];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectUnit = (unit) => {
    setSelectedUnit(unit);
    setDropdownOpen(false);
  };
  return (
    <div className="px-6 py-4 text-[14px] ">
      <div className="grid grid-cols-12 gap-3">
        <div
          className="col-span-2 "
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="col-span-7">
          <div className="mb-6">
            <Breadcrumbs className="text-sm">
              <li
                onClick={() => router.push("/")}
                className="cursor-pointer hover:text-primary"
              >
                Polymers Hub
              </li>
              <li
                onClick={() => router.back()}
                className="cursor-pointer hover:text-primary"
              >
                Products
              </li>
              <li href="#">{data?.name}</li>
            </Breadcrumbs>
          </div>
          <div className="">
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-2xl font-bold">{data?.name}</h1>
            </div>
            <ActionButtons />
            <p className="mb-6 text-gray-700">{data?.description}</p>
          </div>
          <div className="">
            <div className="lg:col-span-3">
              <div className="p-6 border rounded">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <h3 className="font-medium ">Brand:</h3>
                    <p>{data.brand}</p>
                  </div>
                  <div>
                    <h3 className="font-medium ">CAS Number</h3>
                    <p>{data.CAS_number}</p>
                  </div>
                  <div>
                    <h3 className="font-medium ">Chemical Name</h3>
                    <p>{data.chemical_name}</p>
                  </div>
                  <DocumentTable product={data} />
                  {/* Basic Details */}
                  <BasicDetails data={data} />
                  {/* Identification */}
                  <Identifications data={data} />
                  {/* features  */}
                  <Features data={data} />
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
                  {isDropdownOpen && (
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
                  )}
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
