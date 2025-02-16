import React from "react";
import ProductList from "../component/ProductList";

const ProductSection = ({ data, loading }) => {
  return (
    <div>
      <ProductList data={data} loading={loading} />
    </div>
  );
};

export default ProductSection;
