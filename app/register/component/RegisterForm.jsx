"use client";
import { Eye } from "lucide-react";
import { set } from "nprogress";
import React, { useState } from "react";

const RegisterForm = ({ setShowComponent }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    if (Object.values(data).some((field) => !field)) {
      setLoading(false);
      alert("Please fill in all fields.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setLoading(false);
      alert("Passwords do not match.");
      return;
    }

    try {
      const payload = {
        ...data,
        profile_url: "https://www.gravatar.com/avatar/",
        isSeller: false,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const passwordResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/user/set-password`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              password: data.password,
              confirmPassword: data.confirmPassword,
              email: data.email,
            }),
          }
        );

        if (passwordResponse.ok) {
          setLoading(false);
          setShowComponent("login");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-primary">Register</h2>
        <div className="space-y-4">
          {["name", "email", "dob", "country"].map((field) => (
            <input
              key={field}
              type={field === "dob" ? "date" : "text"}
              name={field}
              value={data[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          ))}

          {["password", "confirmPassword"].map((field) => (
            <div key={field} className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name={field}
                value={data[field]}
                onChange={handleChange}
                placeholder={
                  field === "password" ? "Password" : "Confirm Password"
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              />
              <Eye
                className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 cursor-pointer right-3 top-1/2"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          ))}

          <button
            onClick={handleSave}
            className="w-full py-3 text-white transition-colors rounded-lg bg-primary"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
        <div className="mt-6 text-sm text-center text-gray-600">
          Already have an account?
          <span
            className="ml-1 cursor-pointer text-primary"
            onClick={() => setShowComponent("login")}
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
