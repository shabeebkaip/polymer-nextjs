import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  console.log(product, "product");
  return (
    <div className="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-md text-[13px] ">
      <div>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-40"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-1 p-3">
          <h4 className="font-semibold">{product?.name}</h4>
          <div className="">
            <span className="font-semibold">Brand:</span>
            <span className="ml-1">{product.brand}</span>
          </div>
          <div className="">
            <span className="font-semibold">Chemical Name:</span>
            <span className="ml-1">{product.chemical_name}</span>
          </div>
          {product?.basic_details?.map((detail, index) => (
            <div key={index} className="">
              <span className="font-semibold">{detail.title} :</span>
              <span className="ml-1">{detail.value}</span>
            </div>
          ))}
          {product?.identification?.map((detail, index) => (
            <div key={index} className="">
              <span className="font-semibold">{detail.title}:</span>
              <span className="ml-1">{detail.value}</span>
            </div>
          ))}
          <div className="space-y-2 text-sm">
            {product?.labelingClaims?.length > 0 && (
              <div>
                <span className="block mb-1 font-medium">Labeling Claims:</span>
                <div className="flex items-baseline gap-1 ">
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
            {product?.compatible?.length > 0 && (
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
        <button
          className="w-full px-4 py-2 text-white transition-colors bg-teal-600 rounded-md hover:bg-teal-600"
          onClick={() => router.push(`/product-list/${product._id}`)}
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
