import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col space-y-4">
          <div className="font-bold text-3xl pb-4 sm:pb-0 text-black font-serif">
            <span className="text-yellow-800">SM</span> Furniture
          </div>
          <p className="text-gray-500">
            Transforming your home with luxury and comfort.
          </p>
        </div>

        {/* Navbar Links Section */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <Link href="#" className="hover:text-yellow-600">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            Shop
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            About
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            Contact
          </Link>
        </div>

        {/* Help Links Section */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-semibold">Help</h4>
          <Link href="#" className="hover:text-yellow-600">
            FAQs
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            Support
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            Shipping
          </Link>
          <Link href="#" className="hover:text-yellow-600">
            Returns
          </Link>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-semibold">Newsletter</h4>
          <p className="text-gray-500">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              className="p-2 rounded-md text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-yellow-900 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500">
        <p>&copy; 2024 SM Furniture. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
