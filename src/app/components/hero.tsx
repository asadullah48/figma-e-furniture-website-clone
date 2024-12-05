"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./slide";

export default function Hero() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  const sliderData = [
    {
      id: 0,
      img: "/banner01.jpg",
      title: "LUXURY FURNITURE",
      mainTitle: "Style is your own shape it as you wish",
      price: "$470",
    },
    {
      id: 1,
      img: "/banner03.jpg",
      title: "DISCOVER OUER COLLECTIONS",
      mainTitle: "Style is what you make it make it yours",
      price: "$400",
    },
    {
      id: 2,
      img: "/banner2.jpg",
      title: "UNVEIL THE BEAUTY OF OUR FURNITURE",
      mainTitle: "Our unique and stylish furniture",
      price: "$400",
    },
  ];
  return (
    <div>
      <div className="container pt-2 lg:pt-0 max-w-screen-2xl animation animate-fadeIn">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
