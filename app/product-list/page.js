import React from "react";
import ProductSection from "./contains/ProductSection";

const page = async () => {
  const fetchProducts = async () => {
    const res = await fetch("https://polymer-nodejs.vercel.app/api/product", {
      method: "POST", // Specify the POST method
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify({ key: "value" }), // Include the data to send
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  };
  try {
    const { data } = await fetchProducts();
    return (
      <div>
        <ProductSection data={data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products</div>;
  }
};

export default page;
