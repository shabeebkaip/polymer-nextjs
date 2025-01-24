import React from "react";

const Tabs = ({ setActiveTab, activeTab, categories }) => {
  return (
    <div className="flex gap-5 mb-4 font-bold border-b">
      {categories?.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer pb-2 transition-all duration-300 ${
            activeTab.id === tab.id
              ? "border-b-4 border-[#0D47A1]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab?.name.charAt(0).toUpperCase() +
            tab?.name.slice(1).replace("_", " ")}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
