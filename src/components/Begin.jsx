import React from 'react';
import WORD from '../assets/images/WORD.png';

const Begin = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-200 w-full h-[40%]">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1200px] mx-auto">

        {/* Logo */}
        <div className="flex items-center space-x-3 text-2xl font-bold text-black">
          <img className="w-12 h-12 object-contain" src={WORD} alt="Logo" />
          <span>ZEALIIGHT</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold text-black text-lg">
          <p>About</p>
          <p>Teams</p>
          <p>Services</p>
          <p>Products</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <button className="rounded-full bg-blue-950 text-white px-5 py-2 font-bold">Contact Us</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="relative lg:hidden text-black">
          <input type="checkbox" id="hamburger-toggle" className="peer hidden" />
          <label htmlFor="hamburger-toggle" className="cursor-pointer p-2">
            <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Mobile Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 hidden peer-checked:block text-black z-50">
            <ul className="py-2">
              <li><a href="#" className="block px-4 py-2 text-sm">About</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm">Teams</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm">Services</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Begin;
