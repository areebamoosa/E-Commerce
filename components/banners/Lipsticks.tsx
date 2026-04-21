"use client";

import Button from "../ui/Button";
import Image from "next/image";

export const Lipsticks = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden sm:block w-full h-[500px] object-cover">
          <Image
            src="/lipsticks.webp"
            alt="prod"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center h-[500px]  w-full sm:hidden">
          <div className="w-full max-w-[500px] aspect-square overflow-hidden">
            <Image
              src="/lipsticks.webp"
              alt="prod"
              fill
              className="w-full h-full object-cover object-[82%] "
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-0 flex justify-center items-center sm:absolute sm:bottom-1/16 sm:left-1/4 lg:bottom-1/5 lg:left-1/6 sm:-translate-x-1/2 text-white  flex-col sm:justify-start sm:items-start gap-1 lg:gap-2   ">
          <h1 className=" text-black font text-xs  sm:text-sm lg:text-lg font-bold">
            COMING JAN 9
          </h1>
          <h1 className=" dark-pink font mt-2 sm:mt-0 sm:text-xl lg:text-4xl font-bold lg:mt-2">
            SHADES OF LIPS
          </h1>
          <h1 className=" dark-pink font mt-2 sm:mt-0 sm:text-base lg:text-xl font-bold lg:mt-2">
            HER LIP COMBO'S
          </h1>
          <div className="lg:mt-4 mt-1 sm:mt-0  flex flex-col gap-2 sm:gap-0 justify-center items-center sm:items-start  sm:justify-start lg:gap-1">
            <h2 className="text-sm lg:text-lg  grey  font ">
              longlasting, fresh - get
            </h2>
            <h2 className="text-sm lg:text-lg grey  font">
              our best selling and award winning
            </h2>
            <h2 className="text-sm lg:text-lg grey  font">
              product in 12 different shades.
            </h2>
          </div>

          <div className="hidden sm:block lg:mt-4 mt-3 sm:mt-1">
            <Button text={"shop now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lipsticks;
