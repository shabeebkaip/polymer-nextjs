"use client";
import React, { useState } from "react";
import { ShoppingCart, Menu, Search } from "lucide-react";
import SubNavbar from "./SubNavbar";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import NavLogo from "./components/NavLogo";
import NavSearch from "./components/NavSearch";
import { Dialog, FormLabel, TextField } from "@mui/material";
import { inputStyle } from "@/lib/constant";
import LoginModal from "../auth/LoginModal";
import SignUpModal from "../auth/SignUpModal";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="top-0 z-50 ">
      <div className="w-full px-3 py-2 bg-[#0D47A1] ">
        <div className="flex items-center justify-between grid-cols-12 gap-2 md:justify-center md:grid">
          <div className="col-span-2">
            <NavLogo router={router} />
          </div>

          <div className="relative items-center hidden col-span-8 md:flex">
            <NavSearch />
          </div>
          <div className="items-center justify-end hidden col-span-2 gap-5 md:flex text-[13px] font-bold">
            <ShoppingCart className="w-5 h-5 text-white cursor-pointer" />
            <button
              className="text-white hover:bg-[#616161]  px-4 py-2 rounded"
              onClick={() => setLoginModalVisible(true)}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 text-white rounded hover:bg-[#616161]"
              onClick={() => setSignupModalVisible(true)}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-end col-span-1 md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
      <SubNavbar />
      <LoginModal
        loginModalVisible={loginModalVisible}
        setLoginModalVisible={setLoginModalVisible}
      />
      <SignUpModal
        signupModalVisible={signupModalVisible}
        setSignupModalVisible={setSignupModalVisible}
      />
    </nav>
  );
};

export default Navbar;
