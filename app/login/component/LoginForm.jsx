"use client";
import React, { useState } from "react";
import { Eye } from "lucide-react";

const LoginForm = ({ setShowComponent }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSave = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allows requests from any domain
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // Allow these methods
            "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specific headers
          },
          body: JSON.stringify(data),
        }
      );
      console.log("response", response);
    } catch (err) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full">
        <h2 className="mb-6 text-xl font-bold text-primary">Log in</h2>
        <div className="space-y-4">
          <div>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="Email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
            <Eye className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
          </div>
          <button
            onClick={handleSave}
            className="w-full py-3 text-white transition-colors rounded-lg bg-primary "
          >
            Log in
          </button>
        </div>
        <div className="mt-6 text-gray-600 text-14px">
          Don't have an account?
          <a
            href="#"
            className="ml-1 text-primary "
            onClick={() => setShowComponent("register")}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
