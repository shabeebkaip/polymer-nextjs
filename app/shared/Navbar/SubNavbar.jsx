import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const marketplaceLinks = [
    { label: "Industries" },
    { label: "Products" },
    // { label: "Suppliers" },
    // { label: "Sustainability" },
    // { label: "Formulations" },
  ];

  const learnMoreLinks = [
    { label: "For buyers" },
    { label: "For suppliers" },
    { label: "Take a tour" },
    { label: "Security" },
  ];

  const subNavLinks = [
    { label: "Cosmetic Ingredients" },
    { label: "Food Ingredients" },
    { label: "Pharmaceutical Ingredients" },
    { label: "Personal Care Ingredients" },
    { label: "Home Care Ingredients" },
  ];

  return (
    <>
      <div
        className="hidden md:block bottom-0 px-3 py-2 border-[#717171] border-t-[0.5px] font-montserrat text-sm capitalize bg-[#0D47A1]"
        // style={{
        //   backgroundImage: `linear-gradient(to bottom, rgba(25, 81, 133, 0.5), rgba(0,0,0,0.7)),url('/chem.jpg')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="flex items-center justify-start gap-5">
          <div className="flex items-center  border-[#717171] pr-5">
            <div className="block xl:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-600"
              >
                <AlignJustify className="w-6 h-6" />
              </button>
            </div>
            <div className="flex space-x-6 font-semibold">
              {marketplaceLinks.map((link) => (
                <p
                  key={link.label}
                  className="flex items-center text-white cursor-pointer hover:text-teal-500"
                >
                  {link.label}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden xl:block">
            <ul className="flex items-center space-x-2">
              {subNavLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-white py-1 2xl:px-3 px-1 rounded-full border border-[#fff] text-[12px] cursor-pointer text-center"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-[#616161] bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-64 bg-white">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href={"/"} className="col-span-2">
                <h2 className="text-lg font-bold text-[#000] text-md">
                  POLYMERS HUB
                </h2>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-6">
                <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase">
                  BROWSE THE MARKETPLACE BY
                </h3>
                {marketplaceLinks.map((link) => (
                  <div
                    key={link.label}
                    className="py-2 text-gray-800 cursor-pointer hover:text-teal-600"
                  >
                    {link.label}
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase">
                  LEARN MORE ABOUT KNOWDE
                </h3>
                {learnMoreLinks.map((link) => (
                  <div
                    key={link.label}
                    className="py-2 text-gray-800 cursor-pointer hover:text-teal-600"
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubNavbar;
