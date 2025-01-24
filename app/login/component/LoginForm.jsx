import React from 'react';
import { Eye } from 'lucide-react';

const LoginForm = () => {
  return (
    <div className="flex justify-center h-screen ">
  
      <div className="flex flex-col items-center justify-center w-1/2 ">
      <div className='w-full max-w-md '>
        {/* <div className="mb-8">
         <img src="/polymerslogo.svg" alt="" className='w-20 h-20' />
        </div> */}
        <h2 className="mb-6 text-2xl font-bold text-orange-600">Log in</h2>
        <form className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Eye className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
              <span className="text-sm text-gray-600">Keep me logged in</span>
            </label>
            <a href="#" className="text-sm text-orange-600 hover:text-orange-800">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
          >
            Log in
          </button>
        </form>
        <div className="mt-6 text-sm text-center text-gray-600">
          Don't have an account? 
          <a href="#" className="ml-1 text-orange-600 hover:text-orange-800">Register</a>
        </div>
        <div className="mt-8 text-xs text-center text-gray-500">
          <a href="#" className="hover:text-gray-700">Terms of Use</a>
          {' | '}
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
        </div>
      </div>
      </div>
   
      <div className="flex items-center justify-center w-1/2 h-full " style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <img
          src="/herobg2.jpg"
          alt="polymers"
          className="object-cover w-full h-full"
        />
      </div>

  </div>
  
  );
};

export default LoginForm;