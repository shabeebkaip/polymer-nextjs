'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="mb-2 font-medium text-white">{title}</h3>
    {links.map((link, index) => (
      <a
        key={index}
        href="#"
        className="text-sm text-white hover:text-white"
      >
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const footerData = {
    forCustomers: {
      title: 'For Customers',
      links: ['Overview', 'Customer Features', 'Periodical']
    },
    forSuppliers: {
      title: 'For Suppliers',
      links: [
        'for Suppliers',
        'Master Data Management Platform',
        'Customer Experience Application',
        ' Marketplace',
        'Marketplace Supplier Features'
      ]
    },
    company: {
      title: 'Company',
      links: ['About us', 'Careers', 'Contact Us', 'Events', 'News']
    },
    values: {
      title: 'Values',
      links: ['Privacy', 'Security']
    },
    learning: {
      title: 'Learning',
      links: ['Help Center', 'How to Use Knowde', 'Blog']
    }
  };
  const pathname = usePathname();

  const hiddenRoutes = [
    "/register",
    "/login",
    "/reset-password",
    "/forgot-password",

  ];
  const isHiddenRoute = () => {
    if (hiddenRoutes.includes(pathname)) {
      return true;
    }
    return hiddenRoutes.some(
      (route) => route.endsWith("/") && pathname.startsWith(route)
    );
  };
  if (isHiddenRoute()) {
    return null;
  }


  return (
    <footer
      className="  bg-[#f0f0f0] relative py-20 "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(25, 81, 133, 0.5), rgba(0,0,0,0.7)),url('/chem.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="px-6 md:px-20">

        <div className="grid grid-cols-2 gap-8 mb-10 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn {...footerData.forCustomers} />
          <FooterColumn {...footerData.forSuppliers} />
          <FooterColumn {...footerData.company} />
          <FooterColumn {...footerData.values} />
          <FooterColumn {...footerData.learning} />
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">

            <div className="flex flex-col space-y-2">

              {/* <img src="/polymerslogo.svg" alt="Knowde Logo" className="w-20 h-20" /> */}
              <p className="text-sm text-white">© 2025 Polymer. All Rights Reserved.</p>
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">

              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2v2h3v2H7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h-3V4h3V2H7zm8 2h2v2h-2V4z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </a>
              </div>

              <div className="flex space-x-4 text-sm text-white">
                <a href="#" className="hover:text-white">Terms of Use</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Cookies</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;