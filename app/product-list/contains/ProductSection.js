import React from "react";
import ProductList from "../component/ProductList";

const ProductSection = ({ data }) => {
  return (
    <div>
      <ProductList data={data} />
    </div>
  );
};

export default ProductSection;
