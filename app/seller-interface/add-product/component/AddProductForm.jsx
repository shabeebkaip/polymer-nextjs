'use client'

import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', price: '', category: '', stock: '', description: '' });
  };

  return (
    <div className="flex justify-center px-6 py-20 md:px-20">
      <form onSubmit={handleSubmit} className="space-y-4 w-[80%]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              value={product.stock}
              onChange={(e) => setProduct({ ...product, stock: e.target.value })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
            rows={3}
          />
        </div>
        <div className="flex w-full gap-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Technical Data Sheet</label>
            <input
              type="file"
              onChange={(e) => setProduct({ ...product, technicalDataSheet: e.target.files[0] })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              accept=".pdf,.doc,.docx,.xlsx,.xls"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Safety Data Sheet</label>
            <input
              type="file"
              onChange={(e) => setProduct({ ...product, safetyDataSheet: e.target.files[0] })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-[#e58110] focus:ring-[#e58110]"
              accept=".pdf,.doc,.docx,.xlsx,.xls"
              required
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className="w-[200px] px-4 py-2 text-white transition-colors bg-[#e58110] rounded-md hover:bg-[#d5700f]"
          >
            Add Product
          </button>
        </div>
      </form>

    </div>
  )
}

export default AddProductForm
