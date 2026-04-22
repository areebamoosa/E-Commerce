"use client";

import { useState } from "react";
import { cosmeticsProducts as cosmetics } from "../../data/products/cosmetics";
import ProductCard from "../product/ProductCard";

const SecFeat = () => {
  const secFeatured = [cosmetics[0], cosmetics[1], cosmetics[2], cosmetics[3]];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex gap-3 px-1">
            {secFeatured.map((prod) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 snap-start"
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
