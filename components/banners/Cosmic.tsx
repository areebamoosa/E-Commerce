"use client";

import Image from "next/image";
import Button from "../ui/Button";

export const Cosmic = () => {
  return (
    <>
      <div className="relative mt-10">
        {/* Desktop Image */}
        <div className="hidden sm:flex justify-center items-center w-full h-full">
          <Image
            src="/assets/frag.webp"
            alt="balm"
            width={1920}
            height={1080}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="flex justify-center items-center w-full sm:hidden">
          <div className="relative w-full max-w-[500px] aspect-square overflow-hidden">
            <Image
              src="/assets/frag.webp"
              alt="balm"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-1/14 sm:left-[30px] lg:bottom-1/3 lg:left-[70px] flex justify-center items-center sm:items-start flex-col">
          <div>
            <h1 className="dark-pink text-lg sm:!text-white font font-semibold sm:text-sm lg:text-2xl">
              COSMIC 2.0 WINTER
            </h1>
            <h1 className="dark-pink text-lg sm:!text-white font font-semibold mt-3 sm:mt-1 lg:mt-3 sm:text-sm lg:text-2xl">
              MAKEUP COLLECTION
            </h1>
          </div>

          <div className="font text-xs sm:text-sm lg:text-xl mt-6 sm:mt-3 lg:mt-6 text-black sm:text-white flex flex-col gap-1 justify-center items-center sm:justify-start sm:items-start">
            <p>create ethereal, glowy summer </p>
            <p>looks with our new makeup</p>
            <p>collection inspired by</p>
            <p className="sm:font-bold">cosmic 2.0</p>
          </div>

          <div className="hidden sm:block mt-6">
            <Button text={"shop now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosmic;
