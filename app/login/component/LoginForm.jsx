"use client";
import React, { useState } from "react";
import { Eye } from "lucide-react";
import Cookies from "js-cookie";

const LoginForm = ({ setShowComponent, setVisible }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!data.email || !data.password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Login failed. Please try again.");
      const { token } = await response.json();

      // Store token in cookie (valid for 7 days)
      Cookies.set("authToken", token, { expires: 7, secure: true });
    } catch (error) {
      console.error("Error during login:", error);
      alert(error.message);
    } finally {
      setLoading(false);
      setVisible(false);
      setData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-xl font-bold text-primary">Log in</h2>
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
            <Eye
              className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 cursor-pointer right-3 top-1/2"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 text-white rounded-lg transition ${
              loading ? "bg-gray-400" : "bg-primary"
            }`}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </div>
        <div className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button
            className="underline text-primary"
            onClick={() => setShowComponent("register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
