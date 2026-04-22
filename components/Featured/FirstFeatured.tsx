"use client";

import { useState } from "react";
import ProductCard from "../product/ProductCard";
import { skinProducts as skin } from "../../data/products/skin";

const Feat = () => {
  const featured = [skin[0], skin[1], skin[2], skin[3]];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="m-6">
        <div className="sm:ml-60 lg:ml-26 mt-12 ml-20">
          <h1 className="Font dark-pink text-2xl font-bold">
            SALE BEST SELLERS
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex gap-3 px-1">
            {featured.map((prod) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 snap-start"
              >
                <ProductCard {...prod} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-1">
          <div className="flex gap-2 mt-4 sm:hidden">
            {featured.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  idx === activeIndex
                    ? "bg-black scale-125"
                    : "bg-white border border-black"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feat;
