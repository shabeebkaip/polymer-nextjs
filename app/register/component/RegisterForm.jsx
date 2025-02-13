import { Eye } from "lucide-react";
import React, { useState } from "react";

const RegisterForm = ({ setShowComponent }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    country: "",
    mobile: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSave = async () => {
    // Basic validation
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.dob ||
      !data.country ||
      !data.mobile
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (data.password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/register`,
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

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        setShowComponent("login"); // Switch to login UI
      } else {
        alert(result.message || "Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-primary">Register</h2>
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>
          <div>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
              placeholder="Date of Birth"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>
          <div>
            <input
              type="text"
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              placeholder="Country"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>
          <div>
            <input
              type="text"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
              placeholder="Mobile"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-14px"
            />
            <Eye className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 text-white transition-colors rounded-lg bg-primary"
          >
            Register
          </button>
        </div>
        <div className="mt-6 text-sm text-center text-gray-600">
          Already have an account?
          <a
            href="#"
            className="ml-1 text-primary"
            onClick={() => handleSave()}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
