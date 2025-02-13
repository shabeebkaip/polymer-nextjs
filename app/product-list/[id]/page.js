import React from "react";
import ProductDetailList from "./contains/ProductDetailList";

const fetchProductDetail = async (id) => {
  const response = await fetch(
    `https://polymer-nodejs.vercel.app/api/product/${id}`,

    { cache: "no-store" }
  );
  return response.json();
};

const page = async ({ params }) => {
  const { id } = params;
  const { data } = await fetchProductDetail(id);
  console.log(data, "data");
  return (
    <div>
      <ProductDetailList data={data} />
    </div>
  );
};

export default page;
