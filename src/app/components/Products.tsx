import React from "react";
import Image from "next/image";
const Products = () => {
  return (
    <div className="container px-2 pt-16 font-sans bg-gray-200 rounded-lg max-w-screen-2xl">
      <h2 className="font-medium text-3xl pb-8 text-center text-yellow-800 font-serif animate-pulse">
        Browse The Range
      </h2>
      <p className="font-sans text-2xl pb-8 text-black items-center">
        Discover elegance and comfort with our luxury furniture transforming
        your space into a haven of style
      </p>
      {/* GRIDE LAYOUT FOR IMAGES  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dining section  */}
        <div className="text-center  transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn">
          <Image
            src="/dining6.jpg"
            alt="dining furniture"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
          />
          <h3 className="text-2xl font-semibold pt-4 text-yellow-800 font-serif animate-pulse">
            DINING
          </h3>
        </div>

        {/* Living section  */}
        <div className="text-center transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn ">
          <Image
            src="/img4.jpg"
            alt="living furniture"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg cursor-pointer "
          />
          <h3 className="text-2xl font-semibold pt-4 text-yellow-800 font-serif animate-pulse">
            LIVING
          </h3>
        </div>

        {/* Bedroom Section  */}
        <div className="text-center transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn">
          <Image
            src="/bed4.jpg"
            alt="living furniture"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
          />
          <h3 className="text-2xl font-semibold pt-4 text-yellow-800 font-serif animate-pulse">
            BADROOM
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Products;
