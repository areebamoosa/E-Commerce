"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Category = () => {
  const categories = [
    { img: "/assets/pd5s-4.webp", label: "LIPS" },
    { img: "/assets/pd16.webp", label: "FRAGRANCE" },
    { img: "/assets/pd4.webp", label: "EYES" },
    { img: "/assets/pd9h.webp", label: "SKIN" },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const count = window.innerWidth < 640 ? 1 : 3;
      setVisibleCount(count);

      if (startIndex + count > categories.length) {
        setStartIndex(0);
      }
    };

    handleResize(); // run on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [startIndex, categories.length]);

  const visibleImgs = categories.slice(startIndex, startIndex + visibleCount);

  const next = () => {
    if (startIndex + visibleCount < categories.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + visibleCount >= categories.length;

  return (
    <div className="mt-10">
      <h1 className="mb-10 flex items-center justify-center font-bold text-xl sm:text-3xl lg:text-4xl dark-pink headFont">
        SHOP SALE BY CATEGORY
      </h1>

      <div className="flex w-full max-w-[1800px] items-center justify-center gap-3 sm:gap-3 lg:gap-6 m-2">
        {/* Left Button */}
        <button
          onClick={prev}
          disabled={isPrevDisabled}
          className={`h-10 w-10 rounded-full px-3 py-1 shadow-md transition-all duration-200 cursor-pointer
            ${
              isPrevDisabled
                ? "bg-white text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-pink-400 hover:text-white"
            }`}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="flex gap-8">
          {visibleImgs.map((item, index) => (
            <div
              key={index}
              className="relative h-[380px] w-[300px] flex-shrink-0 sm:h-80 sm:w-50 lg:h-[550px] lg:w-[350px] xl:h-[700px] xl:w-[460px]"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="rounded-xl object-cover brightness-80"
              />

              <h2 className="absolute bottom-1/2 left-1/2 -translate-x-1/2 font-semibold text-white text-xl sm:text-2xl md:text-3xl headFont">
                {item.label}
              </h2>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          disabled={isNextDisabled}
          className={`h-10 w-10 rounded-full px-3 py-1 shadow-md transition-all duration-200 cursor-pointer
            ${
              isNextDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-pink-400 hover:text-white"
            }`}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Category;
