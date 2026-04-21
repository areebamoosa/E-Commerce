"use client";
import Button from "../ui/Button";
import Image from "next/image";

const Limited = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden sm:block w-full h-[500px] object-cover">
          <Image
            src="/virtualtry.webp"
            alt="lip"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center w-full sm:hidden">
          <div className="w-full max-w-[500px] h-[500px] aspect-square overflow-hidden">
            <Image
              src="/virtualtry.webp"
              alt="lip"
              fill
              className="w-full h-full object-cover object-[1%]"
            />
          </div>
        </div>

        <div className="absolute sm:bottom-1/6 lg:bottom-1/3 left-1/2 -translate-x-1/2 text-white flex flex-col justify-center items-center ">
          <h1 className="dark-pink font font-semibold text-2xl sm:text-2xl lg:text-3xl whitespace-nowrap mt-8 sm:mt-0">
            LIMITED EDITION
          </h1>
          <div className="mt-8 flex flex-col  justify-center items-center sm:items-start  sm:justify-start whitespace-nowrap">
            <h2 className="text-sm sm:text-lg text-black sm:text-white font ">
              try on lipsticks, blushes & more to
            </h2>
            <h2 className="text-sm sm:text-lg text-black sm:text-white font mt-2">
              discover your new favourite shade.
            </h2>
          </div>

          <div className="mt-6 sm:mt-4 lg:mt-8">
            <Button text={"shop now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Limited;
