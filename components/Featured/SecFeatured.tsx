"use client";

import { useState } from "react";
import { cosmeticsProducts as cosmetics } from "../../data/products/cosmetics";
import ProductCard from "../product/ProductCard";

const SecFeat = () => {
  const secFeatured = [cosmetics[0], cosmetics[1], cosmetics[2], cosmetics[3]];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (e) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    const nextIndex = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, secFeatured.length - 1)));
  };

  return (
    <>
      <div className="mt-8">
        <div className="mt-8">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:overflow-visible"
            onScroll={handleScroll}
          >
            {secFeatured.map((prod) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-full snap-center flex justify-center sm:w-auto"
              >
                <ProductCard {...prod} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <div className="flex gap-2 mt-4 sm:hidden">
          {secFeatured.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all duration-200 
                            ${
                              idx === activeIndex
                                ? "bg-black scale-125"
                                : "bg-white border border-black"
                            }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecFeat;
