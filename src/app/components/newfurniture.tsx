import React from "react";
import FurnitureCards from "./furniturecards";

const FurnitureData = [
  {
    img: "/dining1.jpg",
    name: "Modern Dining Table",
    description: "Modern dining table.",
    price: "$4,000",
  },
  {
    img: "/dining8.jpg",
    name: "Stylish Dining Table",
    description: "Stylish dining table.",
    price: "$5,000",
  },
  {
    img: "/dining4.jpg",
    name: "Dining Table",
    description: "Classic dining chair.",
    price: "$3,000",
  },
  {
    img: "/img1.jpg",
    name: "Sofa Set",
    description: "Classic sofa set.",
    price: "$3,500",
  },
  {
    img: "/img2.jpg",
    name: "Loveseat",
    description: "Loveseat.",
    price: "$5,500",
  },
  {
    img: "/img5.jpg",
    name: "Sectional Sofa",
    description: "Luxuray sofa set.",
    price: "$4,000",
  },
  {
    img: "/bed4.jpg",
    name: "Queen Size Bed",
    description: "Stylish bed.",
    price: "$3,500",
  },
  {
    img: "/bed5.jpg",
    name: "King Size Bed",
    description: "Luxuray bed.",
    price: "$3,000",
  },
  {
    img: "/bed3.jpg",
    name: "King Size Bed",
    description: "Comfortable bed.",
    price: "$2,000",
  },
  {
    img: "/furniture3.jpg",
    name: "Office Chair",
    description: "Comfortable chair.",
    price: "$1,500",
  },
  {
    img: "/furniture1.jpg",
    name: "Office Furniture",
    description: "Office chair table.",
    price: "$2,000",
  },
  {
    img: "/furniture2.jpg",
    name: "Modern Chair ",
    description: "Comfortable chair .",
    price: "$1,000",
  },
];

const Newfurniture = () => {
  return (
    <div>
      <div className="container bg-gray-200 pt-4 font-sans max-w-screen-2xl ">
        <h2 className="font-medium text-2xl pb-4 text-center text-yellow-900">
          Our Furniture Collection
        </h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 max-w-screen-2xl"
        >
          {FurnitureData.map((item, index) => (
            <FurnitureCards
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Newfurniture;
