'use client'
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProductListTable = () => {
  const router = useRouter();

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const product = [
    {
      id: 1,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "STADEX® 132 Corn Dextrin",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: ["Irradiation-free", "Ethylene Oxide-free", "Animal Products-free", "Kosher", "Allergen-free"],
      compatible: [],
    },
    {
      id: 2,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "STADEX® 10 Corn Dextrin",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: ["AZO Dyes-free", "Irradiation-free", "Ethylene Oxide-free", "BSE-free"],
      compatible: [],
    },
    {
      id: 3,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "ECLIPSE® N Functional Industrial Starch",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: [],
      compatible: ["Corrugated Board"],
    },
    {
      id: 4,
      image: "default-card-banner.png",
      brand: "Wacker Chemie AG",
      name: "VINNAPAS® 315",
      ingredientName: "Vinyl Acetate Ethylene (VAE) Copolymer",
      chemicalFamily: "Vinyl Acetate Ethylene (VAE) Copolymer",
      labelingClaims: [],
      compatible: ["Paper"],
    },
    {
      id: 5,
      image: "default-card-banner.png",
      brand: "Wacker Chemie AG",
      name: "VINNAPAS® EP 708 (NJG)",
      ingredientName: "Vinyl Acetate Ethylene (VAE) Copolymer",
      chemicalFamily: "Vinyl Acetate Ethylene (VAE) Copolymer",
      labelingClaims: [],
      compatible: ["Fibers & Fabrics", "Wood", "Textiles", "Plastics", "Paper"],
    },
    {
      id: 6,
      image: "default-card-banner.png",
      brand: "DuPont",
      name: "Delrin® Acetal Resin",
      ingredientName: "Acetal Resin",
      chemicalFamily: "Polyoxymethylene (POM)",
      labelingClaims: ["High Strength", "Wear Resistant"],
      compatible: ["Engineering Applications"],
    },
    {
      id: 7,
      image: "default-card-banner.png",
      brand: "BASF",
      name: "Ultramid® Polyamide",
      ingredientName: "Polyamide",
      chemicalFamily: "Nylons",
      labelingClaims: ["Eco-friendly", "Recyclable"],
      compatible: ["Automotive", "Electronics"],
    },
    {
      id: 1,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "STADEX® 132 Corn Dextrin",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: ["Irradiation-free", "Ethylene Oxide-free", "Animal Products-free", "Kosher", "Allergen-free"],
      compatible: [],
    },
    {
      id: 2,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "STADEX® 10 Corn Dextrin",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: ["AZO Dyes-free", "Irradiation-free", "Ethylene Oxide-free", "BSE-free"],
      compatible: [],
    },
    {
      id: 3,
      image: "default-card-banner.png",
      brand: "Primient",
      name: "ECLIPSE® N Functional Industrial Starch",
      ingredientName: "Dextrin",
      chemicalFamily: "Dextrins",
      labelingClaims: [],
      compatible: ["Corrugated Board"],
    },
    {
      id: 4,
      image: "default-card-banner.png",
      brand: "Wacker Chemie AG",
      name: "VINNAPAS® 315",
      ingredientName: "Vinyl Acetate Ethylene (VAE) Copolymer",
      chemicalFamily: "Vinyl Acetate Ethylene (VAE) Copolymer",
      labelingClaims: [],
      compatible: ["Paper"],
    },
    {
      id: 5,
      image: "default-card-banner.png",
      brand: "Wacker Chemie AG",
      name: "VINNAPAS® EP 708 (NJG)",
      ingredientName: "Vinyl Acetate Ethylene (VAE) Copolymer",
      chemicalFamily: "Vinyl Acetate Ethylene (VAE) Copolymer",
      labelingClaims: [],
      compatible: ["Fibers & Fabrics", "Wood", "Textiles", "Plastics", "Paper"],
    },
    {
      id: 6,
      image: "default-card-banner.png",
      brand: "DuPont",
      name: "Delrin® Acetal Resin",
      ingredientName: "Acetal Resin",
      chemicalFamily: "Polyoxymethylene (POM)",
      labelingClaims: ["High Strength", "Wear Resistant"],
      compatible: ["Engineering Applications"],
    },
  ];

  const totalPages = Math.ceil(product.length / productsPerPage);

  const currentProducts = product.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const buttonClick = () => {
    router.push('/seller-interface/add-product');
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex justify-between pt-20">
        <h1 className="text-[30px] font-medium text-[#000]">Polymer Product List</h1>
        <button
          className="px-4 py-2 text-white bg-[#e58110] rounded-md hover:bg-[#e58110]"
          onClick={buttonClick}
        >
          <Plus className="inline w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-40"
                />
              </div>
              <div className="p-3">
                <div className="inline-block px-2 py-1 pb-2 text-sm text-blue-800 bg-blue-100 rounded-md">
                  {product.brand}
                </div>
                <h2 className="pb-3 text-lg font-semibold">{product.name}</h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Ingredient Name:</span>
                    <span className="ml-1">{product.ingredientName}</span>
                  </div>
                  <div>
                    <span className="font-medium">Chemical Family:</span>
                    <span className="ml-1">{product.chemicalFamily}</span>
                  </div>
                  {product.labelingClaims.length > 0 && (
                    <div>
                      <span className="block mb-1 font-medium">Labeling Claims:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.labelingClaims.map((claim) => (
                          <span
                            key={claim}
                            className="px-2 py-1 text-xs bg-gray-100 rounded-md"
                          >
                            {claim}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.compatible.length > 0 && (
                    <div>
                      <span className="block mb-1 font-medium">Compatible With:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.compatible.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 text-xs bg-gray-100 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end p-3 bg-gray-50">
              <button className="w-full px-4 py-2 text-white transition-colors bg-[#e58110] rounded-md hover:bg-[#e58110]">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-20 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-[#e58110] text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductListTable;
