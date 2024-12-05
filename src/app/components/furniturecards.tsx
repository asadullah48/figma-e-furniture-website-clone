import React from "react";
import Image from "next/image";

interface propsTypes {
  img: string;
  name: string;
  description: string;
  price: string;
}

const FurnitureCards: React.FC<propsTypes> = ({
  img,
  name,
  description,
  price,
}) => {
  const numericPrice = parseInt(price.replace("$", ""));
  return (
    <div className="px-4 border-gray-800 rounded-xl max:w-[400px] font-sans transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn">
      <div className="container bg-slate-100">
        <Image
          className="w-[300px] h-[300px] sm:w-full object-cover rounded-lg"
          src={img}
          alt={name}
          width={200}
          height={300}
        />

        <div>
          <div className="space-y-2 py-2 ">
            <h3 className="text-yellow-900 font-medium uppercase">{name}</h3>
            <p className="text-gray-600 max-w-[150px]">{description}</p>
            <div className="font-bold flex gap-4">
              {price}
              <del className="text-gray-500 font-normal">
                ${numericPrice + 2}.000
              </del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCards;
