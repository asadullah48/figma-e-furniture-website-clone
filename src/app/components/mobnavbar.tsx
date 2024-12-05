import React from "react";
import Link from "next/link";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";

const Mobnavbar = () => {
  return (
    <div
      className="lg:hidden fixed bottom-0 w-full bg-white shadow-lg left-[50%] -translate-x-[50%] 
    max-w-[500px] mob-navbar px-8"
    >
      
      <div className="flex justify-between items-center text-[25px] py-2">
        <Link href="#">
        <IoMenuOutline className="cursor-pointer" />
        </Link>

        <div className="relative">
          <Link href="#">
          <HiOutlineShoppingBag className="cursor-pointer" />
          </Link>

          <div
            className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px] text-white flex items-center justify-center
                translate-x-1 -translate-y-1"
          >
            0
          </div>
        </div>
        <Link href="#">
        <AiOutlineHome className="cursor-pointer" />
        </Link>
        <div className="relative">
        <Link href="">
          <FiHeart className="cursor-pointer" />
          </Link>
          <div
            className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center
                translate-x-1 -translate-y-1"
          >
            0
          </div>
        </div>
        <Link href="#">
        <AiOutlineAppstore className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Mobnavbar;
