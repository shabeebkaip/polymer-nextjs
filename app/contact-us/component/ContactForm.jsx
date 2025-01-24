import React from 'react';

const ContactForm = () => {
    return (
      <div className='bg-[#f4f4f4]'>

            <div className='grid-cols-10 gap-16 p-6 px-6 lg:grid md:px-20'>
                <div className="hidden col-span-3 pt-28 lg:block">
                    <div className="text-white bg-orange-500 rounded-[23px] border  ">
                            <img
                                src="/contact.jpg"
                                alt="Contact person at desk"
                                className="object-cover w-full h-[350px] ronded-[23px]"
                            />
                        <div className="p-4 py-10 text-center">
                            <h2 className="mb-6 text-xl font-bold">You can contact:</h2>

                            <div className="mb-6">
                                <h3 className="mb-2 text-lg font-semibold">Sarah Johnson</h3>
                                <p className="text-sm">
                                    Executive Assistant – Administrative Manager
                                </p>
                            </div>

                          
                            <div>
                                <h3 className="mb-2 text-lg font-semibold">Emily Roberts</h3>
                                <p className="text-sm">
                                    Administrative and sales assistant
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-7'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src="/problem.png" alt="" className='w-[10%]' />
                        <h1 className="md:text-[40px] text-[25px] font-medium text-gray-700">Contact SPECIFIC POLYMERS</h1>
                        <p className="mt-2 md:text-[30px] text-[18px] text-orange-500">We are grateful for your interest.</p>
                    </div>
                    <form className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-lg font-medium text-gray-700">Your contact details</h2>

                            {/* <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">Salutations</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="salutation" value="mr" className="w-4 h-4" />
                                        <span>Mr</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="salutation" value="ms" className="w-4 h-4" />
                                        <span>Ms</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="salutation" value="phd" className="w-4 h-4" />
                                        <span>PhD</span>
                                    </label>
                                </div>
                            </div> */}

                            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                                <div>
                                    <label className="block mb-1 text-sm font-medium">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                                <div>
                                    <label className="block mb-1 text-sm font-medium">
                                        Company / Institution <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="block mb-1 text-sm font-medium">Country</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-lg font-medium text-gray-700">Your request</h2>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">
                                    Your inquiry type <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="general" className="w-4 h-4" />
                                        <span>General information</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="rd-products" className="w-4 h-4" />
                                        <span>R&D products</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="analytical" className="w-4 h-4" />
                                        <span>Analytical support</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="research" className="w-4 h-4" />
                                        <span>Research/Custom services</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="modeling" className="w-4 h-4" />
                                        <span>Material Modeling</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="inquiry" value="scale-up" className="w-4 h-4" />
                                        <span>Scale-up support</span>
                                    </label>
                                </div>
                            </div>

                            <p className="mb-6 text-sm text-gray-600">
                                Interested in a quotation for our R&D products? You can request a quotation by adding the product to your cart or submitting the request directly on the product page!
                            </p>

                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Your message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className="w-full h-32 px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-2 text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
      </div>
      
    );
};

export default ContactForm;