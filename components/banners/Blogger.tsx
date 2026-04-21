"use client";

import Button from "../ui/Button";

const Blogger = () => {
  return (
    <>
      <div className="m-5 flex justify-center items-center mt-20">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1600px] rounded-lg">
          <div className="relative  w-full h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[1000px] overflow-hidden rounded-l-lg">
            <video
              src="/Blog.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </div>

          <div className="bg-white w-full sm:w-[600px] lg:w-[800px] h-auto sm:h-[600px] lg:h-[1000px] rounded-r-lg flex flex-col justify-center items-center p-6">
            <h1 className="font font-semibold dark-pink text-2xl sm:text-4xl">
              HER'S
            </h1>
            <h1 className="font font-semibold mt-4  sm:mt-8 dark-pink text-2xl sm:text-4xl">
              FAVE NEW EYE KIT
            </h1>

            <p className="text-base sm:text-xl grey mt-4 sm:mt-6">
              create the perfect winter eye look
            </p>

            <div className="flex gap-2">
              <p className="text-base sm:text-xl grey">with our new</p>
              <p className="text-base sm:text-xl grey sm:font-medium">
                vibrant eye kit.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-sm sm:text-xl grey mt-4 sm:mt-6">
              <p>featuring our ultra-precise precision pout</p>
              <p>lip liner and cushiony supple kiss lip gaze,</p>
              <p>this kit has everything you need for a </p>
              <p>shiny, contoured, long-lasting lip.</p>
            </div>

            <div className="flex flex-col justify-center items-center text-sm sm:text-xl grey mt-4 sm:mt-6">
              <p>available in six pre-paired,</p>
              <p>contrasting shades.</p>
            </div>

            <div className="mt-5 sm:mt-6">
              <Button text={"shop now"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogger;
