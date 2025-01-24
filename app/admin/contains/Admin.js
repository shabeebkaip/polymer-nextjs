import React from 'react';

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#e58110] text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
        <nav className="flex-1">
          <ul className="p-4 space-y-4">
            <li>
              <a
                href="#industries"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#product-families"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Product Families
              </a>
            </li>
            <li>
              <a
                href="#brands"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#suppliers"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Suppliers
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="block px-4 py-2 rounded-md hover:bg-[#d5700f]"
              >
                Products
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
        <p className="mt-4">
          Use the sidebar to navigate between different sections.
        </p>
        <div id="industries" className="mt-8">
          <h2 className="text-2xl font-semibold">Industries</h2>
          <p>Manage industries here.</p>
        </div>
        <div id="product-families" className="mt-8">
          <h2 className="text-2xl font-semibold">Product Families</h2>
          <p>Manage product families here.</p>
        </div>
        <div id="brands" className="mt-8">
          <h2 className="text-2xl font-semibold">Brands</h2>
          <p>Manage brands here.</p>
        </div>
        <div id="suppliers" className="mt-8">
          <h2 className="text-2xl font-semibold">Suppliers</h2>
          <p>Manage suppliers here.</p>
        </div>
        <div id="testimonials" className="mt-8">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p>Manage testimonials here.</p>
        </div>
        <div id="products" className="mt-8">
          <h2 className="text-2xl font-semibold">Products</h2>
          <p>Manage products here.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
