import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChemistry from "../components/WhyChemistry";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";

async function fetchSubCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sub-category`,
    { cache: "no-store" } // Avoid stale data
  );
  return response.json();
}
async function fetchCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/list`,
    {
      method: "POST", // Change method to POST
      headers: {
        "Content-Type": "application/json", // Set appropriate headers
      },
      cache: "no-store", // Correct the cache option
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

const Mainhome = async () => {
  const { data: subCategories } = await fetchSubCategories();
  const { result } = await fetchCategories();
  return (
    <>
      <Hero
        subCategories={subCategories || []}
        categories={result?.data || []}
      />
      <Brands />
      <About />
      <WhyChemistry />
      <Testimonial />
    </>
  );
};

export default Mainhome;
