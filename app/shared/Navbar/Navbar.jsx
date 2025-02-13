"use client";
import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import AuthModal from "../auth/AuthModal";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [showComponent, setShowComponent] = useState("login");

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/blog" },
    { label: "Seller", href: "/seller" },
  ];

  return (
    <nav className="top-0 z-50 ">
      <div className="w-full px-3 py-2 bg-[#0D47A1]">
        <div className="flex items-center justify-between grid-cols-12 gap-2 md:justify-center md:grid">
          <div className="col-span-2">
            <h2
              className="text-lg font-bold text-white cursor-pointer text-md"
              onClick={() => router.push("/")}
            >
              POLYMERS HUB
            </h2>
          </div>

          <div className="relative items-center hidden col-span-8 md:flex">
            <input
              type="text"
              placeholder="Search through 8,000+ Supplier owned storefronts"
              className="w-full px-4 py-2 pr-10 text-gray-600 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 text-[15px]  focus:ring-[#616161]"
            />
            <div className="absolute p-1 transform -translate-y-1/2 bg-[#0D47A1] rounded-full right-3 top-1/2">
              <Search className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-2 gap-5 md:flex text-[13px] font-bold">
            {/* <ShoppingCart className="w-5 h-5 text-white cursor-pointer" /> */}
            <button
              className="text-white hover:bg-[#616161]  px-4 py-2 rounded"
              onClick={() => {
                setLoginModalVisible(true);
                setShowComponent("login");
              }}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 text-white rounded hover:bg-[#616161]"
              onClick={() => {
                setLoginModalVisible(true);
                setShowComponent("register");
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-end col-span-1 md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
      <AuthModal
        visible={loginModalVisible}
        setVisible={setLoginModalVisible}
        showComponent={showComponent}
        setShowComponent={setShowComponent}
      />
      {/* <SubNavbar /> */}
    </nav>
  );
};

export default Navbar;
