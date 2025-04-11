import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Navbar = memo(() => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-4 sm:px-8 md:px-16 lg:px-20 py-4">
      <Link to="/" aria-label="Go to homepage">
        <img
          className="w-24 sm:w-32 md:w-36"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Company logo"
        />
      </Link>

      <div className='flex gap-6'>
        <Link 
          to="/cart" 
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Go to shopping cart"
        >
          <FaShoppingCart size={24} className="mr-2" aria-hidden="true" />
          <span className="hidden md:inline">Cart</span>
        </Link>

        <Link 
          to="/signup" 
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Go to sign up"
        >
          <CgProfile size={24} className="mr-2" aria-hidden="true" />
          <span className="hidden md:inline">Sign Up</span>
        </Link>

        <Link 
          to="/login" 
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Go to login"
        >
          <CgProfile size={24} className="mr-2" aria-hidden="true" />
          <span className="hidden md:inline">Login</span>
        </Link>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
