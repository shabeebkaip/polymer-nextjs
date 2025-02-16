"use client";
import React, { useState } from "react";

import DocumentTable from "./DocumentTable";
import ActionButtons from "./ActionButtons";
import BasicDetails from "./BasicDetails";
import Identifications from "./Identifications";
import Features from "./Features";
import { Breadcrumbs } from "@mui/material";
import { useRouter } from "next/navigation";
import RequestQuote from "./RequestQuote";

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
                  <BasicDetails data={data} />
                  <Identifications data={data} />
                  <Features data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RequestQuote
          data={data}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
