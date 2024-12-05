import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-gray-200 hidden lg:block md:w-full animate-fadeIn">
      <div className="container sm:flex justify-between items-center max-w-screen-2xl">
        <div className="font-bold text-3xl pb-4 sm:pb-0 text-black font-serif">
          {" "}
          <span className="text-yellow-800">SM</span> furniture
        </div>
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-yellow-800 font-sans text-2xl ">
          <Link className="navbar__link relative" href="#">
            Home
          </Link>
          <Link className="navbar__link relative" href="#">
            Shop
          </Link>
          <Link className="navbar__link relative" href="#">
            About
          </Link>
          <Link className="navbar__link relative" href="#">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex gap-4 text-yellow-800 text-[30px] items-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="ml-2 p-0 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-800 rounded-lg text-[20px] "
            />
            <IoSearch className="cursor-pointer" />
          </div>
          <div className="relative">
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              1
            </div>
            <FaRegUser className="cursor-pointer" />
          </div>

          <div className="relative">
            <FaRegHeart className="cursor-pointer" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <AiOutlineShoppingCart className="cursor-pointer" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
