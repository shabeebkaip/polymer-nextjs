"use client";
import React, { useEffect, useState } from "react";
import ProductSection from "./contains/ProductSection";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: "value" }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const { data } = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ProductSection data={products} loading={loading} />
    </div>
  );
};

export default Page;
