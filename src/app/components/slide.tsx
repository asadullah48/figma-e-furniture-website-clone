import React from "react";
import Image from "next/image";
interface propsTypes {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}
const Slide: React.FC<propsTypes> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative text-center max-w-screen-2xl">
      <div
        className="absolute left-[10px] md:left-[5%] max-w-[90%] sm:max-w-[80%] xl:max-w-[50%] top-[15%] translate-t-[20%]
            space-y-2 lg:space-y-4 bg-transparent sm:bg-yellow-50 p-2 pt-6 sm:p-4 rounded-lg sm:rounded-2px text-center md:text-left
            transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"
      >
        {/* Title  */}
        <h3 className="text-yellow-700 text-[16px] sm:text-[20px] lg:text-[28px] font-serif">
          {title}
        </h3>

        {/* main title  */}
        <h2 className="text-black text-[20px] sm:text-[28px] md:text-[30px] lg:text-[44px] font-bold leading-tight font-serif">
          {mainTitle}
        </h2>

        {/* price  */}
        <h3 className="text-[16px] sm:text-[20px] text-black">
          starting at{" "}
          <b className="text-[18px] sm:text-[22px] lg:text-[30px] font-sans">
            {price}
          </b>
          .00
        </h3>

        {/* button  */}
        <div
          className="bg-yellow-800 text-white text-[16px] sm:text-[18px] md:text-[20px] p-2 px-4 rounded-lg
                     inline-block cursor-pointer hover:bg-transparent hover:text-yellow-600 font-sans transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"
        >
          Shop Now
        </div>
      </div>

      {/* images  */}

      <Image
        className="w-full h-auto rounded-xl object-cover object-center md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};
export default Slide;
