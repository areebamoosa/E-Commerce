"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

const ProductCard = ({ id, title, price, desc, Img, hoverImg, smallImgs, category }) => {
  const [mainImg, setImg] = useState(Img);
  const router = useRouter();

  // Navigate to the detailed page when clicking anywhere on the product card except small images
  const handleCardClick = () => {
    router.push(`/${category}/${id}`);
  };

  // Stopig navigation when clicking small images
  const handleSmallImgClick = (e, img) => {
    e.stopPropagation();
    setImg(img);
  };

  return (
    <>
      {/* Design Card of each Product */}

      <div
        className="relative lg:h-[460px] lg:w-[350px] sm:h-[350px] sm:w-[220px] h-[340px] w-[180px]  bg-white rounded-lg transition-all duration-500  group shadow-md "
        onClick={handleCardClick}
      >
        <div className="relative lg:h-[340px] lg:w-[350px]  h-[220px] w-full rounded-t-lg  ">
          {/* Original Default Image */}
          <Image
            src={mainImg}
            alt="prod"
            fill
            className="absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0"
          />

          {/* Hover Image */}

          <Image
            src={hoverImg}
            alt="hovImg"
            fill
            className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100 "
          />
        </div>

        <div className="p-2 ">
          {/* Small Images row container */}

          <div className="flex gap-1 cursor-pointer  small-imgs ">
            {smallImgs.map((img, index) => (
              <Image
                src={img}
                alt="img"
                width={40}
                height={40}
                key={index}
                onClick={(e) => handleSmallImgClick(e, img)}
                className={`lg:w-[35px] lg:h-[35px] w-[35px] h-[35px] object-cover  border  ${
                  mainImg === img ? "border-black" : "border-gray-100"
                }`}
              />
            ))}
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mt-2 text-xs ">
            <i className="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
          </div>

          {/* Details of Product */}

          <div className="flex  justify-between mt-1">
            <span className=" font-semibold sm:text-lg text-sm">{title}</span>
            <div>
              <i className="fa-solid fa-dollar-sign"></i>
              <span className="font-semibold sm:text-lg text-sm">{price}</span>
            </div>
          </div>
          <p className="sm:text-sm text-xs grey mt-[-2px] ">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
