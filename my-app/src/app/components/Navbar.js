// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Web App
        </Link>
        {/* Add search bar here */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded mr-2"
            // You can add an onChange event handler for search functionality
            // For example: onChange={(e) => handleSearch(e.target.value)}
          />
          {/* Add additional navigation links or user-related components here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
