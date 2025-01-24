import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const SignUpModal = ({ signupModalVisible, setSignupModalVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile_url: "",
    dob: "",
    country: "",
    mobile: "",
    isSeller: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your sign-up logic here
  };

  return (
    <Dialog
      open={signupModalVisible}
      onClose={() => setSignupModalVisible(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        <h2 className="text-xl font-bold font-montserrat">Sign Up</h2>
      </DialogTitle>
      <DialogContent>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Profile URL
              </label>
              <input
                type="url"
                name="profile_url"
                placeholder="Profile URL"
                value={formData.profile_url}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full font-montserrat text-[14px] px-4 py-2 bg-[#F8F9FA] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
              />
            </div>
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <button
          type="submit"
          className="w-full text-[14px] px-4 py-2 text-white bg-[#0D47A1] rounded hover:bg-[#0D47A1]"
        >
          Sign Up
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
