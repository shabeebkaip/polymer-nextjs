import React from "react";
import Brands from "./Brands";

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col space-y-2">
    <div className="w-8 h-8 mb-2 text-[#0D47A1] xl:h-12 xl:w-12">{icon}</div>
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-full h-full"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
          <line x1="9" y1="21" x2="9" y2="9" strokeWidth="2" />
        </svg>
      ),
      title: "Instant access to the most comprehensive product catalog",
      description:
        "Browse, search and filter the world's largest catalog of chemicals, ingredients and polymers.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Talk directly to suppliers' experts",
      description:
        "Ask technical product questions, talk to a sales rep and inquire about pricing.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
            strokeWidth="2"
          />
          <path d="M18 2l4 4-10 10H8v-4L18 2z" strokeWidth="2" />
        </svg>
      ),
      title: "Order samples, request documents, and get quotes",
      description:
        "Knowde concierge will handle all the details and ensure your requests are handled faster than ever.",
    },
  ];

  return (
    <div className="container flex px-6 mx-auto ">
      <div className="grid items-center grid-cols-1 gap-4 py-20 lg:grid-cols-2 ">
        <div className="">
          <h2 className="font-bold text-[#0D47A1]">Why Polymer</h2>
          <h3 className="text-2xl font-semibold leading-tight xl:text-4xl text-primary">
            Interact with over 8,000 suppliers, browse their catalogs, access
            documents and download starter formulations.
          </h3>
        </div>

        <div className="flex flex-col gap-5 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
