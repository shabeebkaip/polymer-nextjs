import { Search } from 'lucide-react';
import React from 'react';

const SortComponent = () => {
    return (
        <div className="flex items-center justify-between gap-10 p-4 bg-white rounded-lg shadow-sm">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search the marketplace"
                    className="w-full py-3 pl-4 pr-10 text-gray-700 bg-white border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:border-transparent"
                />
                <button
                    className="absolute p-2 text-white transform -translate-y-1/2 bg-teal-600 rounded-full shadow top-1/2 right-3 hover:bg-[#e58110]focus:outline-none focus:ring-2 focus:ring-[#e58110]"
                >
                    <Search className="w-4 h-4" />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <select className="py-2 pl-4 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-md appearance-none cursor-pointer focus:ring-teal-500 focus:border-teal-500">
                        <option value="">Sort by</option>
                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="brand-asc">Brand (A-Z)</option>
                        <option value="brand-desc">Brand (Z-A)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SortComponent;