'use client';
import React, { useState } from 'react';

const SellerForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        whatsappNumber: '',
        email: '',
        gstCertificate: null,
        gradeGroups: []
    });

    const gradeGroups = [
        ['PP', 'LLDPE', 'HDPE', 'LDPE'],
        ['PVC', 'PET', 'PolyStyrene', 'EVA'],
        ['NYLON', 'PMMA', 'POM', 'PC'],
        ['POE']
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            gstCertificate: file,
        }));
    };

    const handleCheckboxChange = (value) => {
        setFormData((prev) => {
            const updatedGradeGroups = prev.gradeGroups.includes(value)
                ? prev.gradeGroups.filter((group) => group !== value)
                : [...prev.gradeGroups, value];

            return {
                ...prev,
                gradeGroups: updatedGradeGroups,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      
    };

    return (
        <div
            className="flex items-center justify-center bg-[#f1f0f0]">
            <div className="container flex flex-col items-center justify-center w-full py-20 mx-auto">
                <div className="pb-4 text-center xl:pb-8">
                    <h1 className="xl:text-[30px] text-[24px] text-[#5c5a4a] font-medium">SELLER ONBOARDING FORM</h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col justify-center px-8 space-y-6 md:px-20 w-[80%] pt-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contact Person (Full Name)
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:border-[#e58110]"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="whatsappNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Whatsapp Number
                            </label>
                            <input
                                type="text"
                                id="whatsappNumber"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleInputChange}
                                placeholder="Whatsapp Number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:border-[#e58110]"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:border-[#e58110]"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="gstCertificate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Upload GST Certificate (PDF)
                            </label>
                            <input
                                type="file"
                                id="gstCertificate"
                                name="gstCertificate"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:border-[#e58110]"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Select Grade Group
                        </label>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                            {gradeGroups.map((row, rowIndex) => (
                                <div key={rowIndex} className="space-y-2">
                                    {row.map((grade) => (
                                        <div key={grade} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={grade}
                                                checked={formData.gradeGroups.includes(grade)}
                                                onChange={() => handleCheckboxChange(grade)}
                                                className="w-4 h-4 text-[#e58110] border-gray-300 rounded focus:ring-[#e58110]"
                                            />
                                            <label
                                                htmlFor={grade}
                                                className="text-sm text-gray-700 cursor-pointer"
                                            >
                                                {grade}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center justify-center '>
                        <button
                            type="submit"
                            className="lg:w-[10%] w-full px-4 py-2 text-white transition-colors bg-[#e58110] rounded-md hover:bg-[#e58110] focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerForm;
