import React from "react";

const NavLogo = ({ router }) => {
  return (
    <h2
      className="text-sm font-bold text-white cursor-pointer text-md"
      onClick={() => router.push("/")}
    >
      POLYMERS HUB
    </h2>
  );
};

export default NavLogo;
