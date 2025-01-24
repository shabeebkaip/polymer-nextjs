'use client'
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "STADEX® 132 Corn Dextrin",
      brand: "Primient",
      image: "default-card-banner.png",
      price: 299.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "VINNAPAS® 315",
      brand: "Wacker Chemie AG",
      image: "default-card-banner.png",
      price: 199.99,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Shopping Cart</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Cart Items ({cartItems.length})</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col gap-6 p-6 sm:flex-row">
                   
                    <div className="w-full h-32 overflow-hidden bg-gray-200 rounded-lg sm:w-32">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1 gap-4 sm:flex-row">
                      <div className="space-y-2">
                        <div className="inline-block px-2 py-1 text-sm text-blue-800 bg-blue-100 rounded-md">
                          {item.brand}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-lg font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 sm:items-end">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button className="text-sm font-medium text-red-600 hover:text-red-700">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-gray-200">
                <button className="flex items-center gap-2 font-medium text-teal-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white divide-y divide-gray-200 rounded-lg shadow">
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="pt-4 mt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <button className="w-full px-4 py-3 text-white bg-teal-600 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-[#e58110] focus:ring-offset-2">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
