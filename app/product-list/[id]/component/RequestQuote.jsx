import React from "react";
import { Database } from "lucide-react";
import { ClockArrowUp } from "lucide-react";
import { Truck } from "lucide-react";
import { Globe } from "lucide-react";

const RequestQuote = ({ data, toggleDropdown, isDropdownOpen }) => {
  const condtions = [
    {
      title: "Minimum Order Quantity",
      desc: "Quote Required",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Lead Time",
      desc: "Quote Required",
      icon: <ClockArrowUp className="w-6 h-6" />,
    },
    {
      title: "Incoterms",
      desc: "Quote Required",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Regional Availability",
      desc: "Quote Required",
      icon: <Globe className="w-6 h-6" />,
    },
  ];
  return (
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
        <div className="mt-6 space-y-4">
          {condtions.map((condition, index) => (
            <div key={index} className="flex items-center gap-4">
              {condition.icon}
              <div>
                <h3 className="text-sm font-medium">{condition.title}</h3>
                <p className="text-xs text-gray-500">{condition.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
