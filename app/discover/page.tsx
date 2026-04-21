import Image from "next/image";

// import Nav from '../Navbar/Nav'
// import img from '../../assets/Discover.jpeg'
// import Footer from '.././Footer/Footer'

import MainNavbar from "../../components/layout/Navbar/MainNavbar";
import Footer from "../../components/layout/Footer";

export const Discover = () => {
  return (
    <>
      {/* <Nav /> */}

      <MainNavbar />

      <div className="relative w-full h-[250px] mt-[80px] sm:mt-[100px] sm:h-[500px] overflow-hidden">
        <Image
          src="/Discover.jpeg"
          alt="img"
          fill
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-[10px]  sm:bottom-[20px] lg:bottom-[40px] left-[13%] -translate-x-1/5  ">
          <h1 className="text-base sm:text-2xl lg:text-3xl Font text-white font-extrabold">
            ABOUT THE
          </h1>
          <h1 className="text-base sm:text-2xl lg:text-3xl Font text-white font-extrabold">
            BRAND
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-10 mt-[-1px]  sm:mt-[-10px]">
        <div className="flex headFont text-sm sm:text-lg lg:text-2xl gap-10 dark-pink ">
          <h1 className=" rounded-md light-pink px-2 py-2 ">COSMETICS</h1>
          <h1 className="px-2 py-2">FRAGRANCE</h1>
          <h1 className="px-2 py-2">SKIN</h1>
        </div>

        <div className="font text-xs sm:text-sm lg:text-lg flex flex-col justify-center lg:w-250 gap-5 mt-6 sm:mt-10 ">
          <p>
            i created HER Cosmetics to give everyone access to the beauty
            products that i truly love and use every single day to create my
            favorite looks. whether i’m getting ready for an event or doing my
            own makeup at home, i’ve always believed that makeup isn’t just
            about how you look — it’s about how confident and empowered it makes
            you feel. i wanted to share that same feeling with all of you.
          </p>

          <p>
            my collection features a range of versatile products — from our
            signature lip kits to radiant blushes, bronzers, highlighters,
            glosses, matte lipsticks, eye essentials, and everyday complexion
            must-haves. everything is clean, vegan, and made with skin-loving
            ingredients, without ever compromising on quality, color payoff, or
            performance.
          </p>

          <p>
            and this is just the beginning! i’m working on some incredible new
            launches that i can’t wait for you to experience.
          </p>

          <p>xo, A.M 💕</p>

          <p>make sure you follow @hercosmetics to stay updated.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Discover;
