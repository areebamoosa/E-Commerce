"use client";
import Image from "next/image";
import Button from "../ui/Button";

export const Bag = () => {
  return (
    <>
      <div className="m-5 flex justify-center items-center">
        <div
          className="flex flex-col lg:flex-row justify-center items-center 
                w-full max-w-[1600px] rounded-lg"
        >
          <div className="relative  w-full h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[1000px] overflow-hidden rounded-l-lg">
            <Image
              src="/Bag2.jpeg"
              alt="prod"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200 hover:opacity-0"
            />

            <Image
              src="/Bag1.jpeg"
              alt="hovImg"
              fill
              
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 hover:opacity-100"
            />
          </div>

          <div className="bg-white w-full sm:w-[600px] lg:w-[800px] h-auto sm:h-[600px] lg:h-[1000px] rounded-r-lg flex flex-col justify-center items-center p-6">
            <h1 className="Font font-semibold text-black text-sm sm:text-lg">
              LIMITED TIME ONLY
            </h1>
            <h1 className="Font font-bold dark-pink text-2xl sm:text-3xl mt-2 sm:mt-5">
              FREE
            </h1>
            <h1 className="Font font-bold dark-pink text-2xl sm:text-3xl">
              COSMIC OMBRE
            </h1>
            <h1 className="Font font-bold dark-pink text-2xl sm:text-3xl mt-1">
              TOTE BAG
            </h1>

            <p className="text-sm sm:text-lg grey mt-4">
              get a free, one-of-a-kind
            </p>
            <div className="flex gap-2">
              <p className="text-sm sm:text-lg grey font-medium">
                cosmic ombre tote bag
              </p>
              <p className="text-sm sm:text-lg grey">that's</p>
            </div>

            <p className="text-sm sm:text-lg grey">
              perfect for carrying all of your
            </p>
            <p className="text-sm sm:text-lg grey">winter beauty faves.</p>

            <div className="flex flex-col justify-center items-center text-sm sm:text-lg grey mt-6">
              <p>available in six pre-paired,</p>
              <p>contrasting shades.</p>
            </div>

            <div className="sm:mt-6 mt-3">
              <Button text={"shop now"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
