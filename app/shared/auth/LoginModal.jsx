import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Icons for visibility toggle

const LoginModal = ({ loginModalVisible, setLoginModalVisible }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog
      open={loginModalVisible}
      onClose={() => setLoginModalVisible(false)}
      fullWidth
      maxWidth="xs"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold">Login</h2>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className="relative mt-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="button"
            className="absolute text-gray-600 top-9 right-3 hover:text-gray-800"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full text-[14px] px-4 py-2 text-white bg-[#0D47A1] rounded hover:bg-[#0D47A1]">
            Login
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
