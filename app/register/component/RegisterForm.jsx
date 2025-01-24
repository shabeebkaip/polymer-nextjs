import { Eye } from 'lucide-react'
import React from 'react'

const RegisterForm = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-col items-center justify-center w-1/2">
                <div className='w-full max-w-md'>
                    <h2 className="mb-6 text-2xl font-bold text-orange-600">Register</h2>
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <Eye className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <Eye className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-6 text-sm text-center text-gray-600">
                        Already have an account?
                        <a href="#" className="ml-1 text-orange-600 hover:text-orange-800">Log in</a>
                    </div>
                    <div className="mt-8 text-xs text-center text-gray-500">
                        <a href="#" className="hover:text-gray-700">Terms of Use</a>
                        {' | '}
                        <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-1/2 h-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <img
                    src="/herobg2.jpg"
                    alt="polymers"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>

    )
}

export default RegisterForm
