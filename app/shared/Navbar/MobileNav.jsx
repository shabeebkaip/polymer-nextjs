import React, { useState } from 'react';
import { AlignJustify, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const marketplaceLinks = [
        { label: "Industries", href: "/" },
        { label: "Products", href: "/" },
        { label: "Suppliers", href: "/" },
        { label: "Sustainability", href: "/" },
        { label: "Formulations", href: "/" },
    ];

    const learnMoreLinks = [
        { label: "For buyers", href: "/" },
        { label: "For suppliers", href: "/" },
        { label: "Take a tour", href: "/" },
        { label: "Security", href: "/" },
    ];

    return (
        <div className="relative">
           
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-white md:hidden"
            >
                <AlignJustify className="w-6 h-6" />
            </button>

            
            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                  
                    <div
                        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-50'
                            }`}
                        onClick={handleClose}
                    />

                    <div
                        className={`fixed inset-y-0 right-0 w-[280px] bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out ${isClosing ? 'translate-x-full' : 'translate-x-0'
                            }`}
                    >
                     
                        <div className="flex items-center justify-between p-4">
                            <Link href={"/"} className="col-span-2">
                                <h2 className="text-lg font-bold text-[#000] text-md">POLYMERS HUB</h2>
                            </Link>
                            <button
                                onClick={handleClose}
                                className="p-1"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        
                        <div className="px-4 py-3">
                            <h3 className="text-xs font-medium text-gray-500 uppercase">
                                BROWSE THE MARKETPLACE BY
                            </h3>
                            <div className="mt-2">
                                {marketplaceLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="flex items-center justify-between py-3 group"
                                    >
                                        <span className="text-gray-900">{link.label}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="h-[1px] bg-gray-200 my-2" />

                      
                        <div className="px-4 py-3">
                            <h3 className="text-xs font-medium text-gray-500 uppercase">
                                LEARN MORE ABOUT KNOWDE
                            </h3>
                            <div className="mt-2">
                                {learnMoreLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="flex items-center py-3"
                                    >
                                        <span className="text-gray-900">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav; 