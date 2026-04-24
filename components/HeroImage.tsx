'use client'

import Image from "next/image";
import Button from "./ui/Button";

export const HeroImage = () => {
  return (
    <div>
      <div className="relative h-[650px] sm:h-[600px] md:h-[1000px] lg:h-screen w-full">



        <Image
          src="/assets/project.png"
          alt="hero"
          fill
          className="object-cover object-[78%_20%] sm:object-[80%_20%]"
          priority
        />

        <div className="red  bottom-[-220px] sm:!text-white md:!text-white lg:!text-white absolute mt-4 sm:mt-0 translate-x-1/8 sm:bottom-[50px] sm:translate-x-1/5 lg:bottom-[150px] lg:left-[23%] lg:-translate-x-1/5">


          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>
            <p className="tracking-widest red text-base lg:text-4xl font-semibold sm:!text-white">
              WINTER SALE
            </p>
            <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl sm:text-7xl font-bold red sm:!text-white">
              25% OFF
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4 red sm:!text-white">
              SITEWIDE
            </h2>
            <div className="mt-5">
              <Button text="shop now" />
            </div>
          </div>

        </div>





      </div>
    </div>
  );
};

export default HeroImage;


// "use client";

// import Image from "next/image";
// import Button from "./ui/Button";

// export const HeroImage = () => {
//   return (
//     <div>
//       <div className="relative h-[650px] sm:h-[600px] md:h-[1000px] lg:h-screen w-full overflow-hidden">
        
//         {/* HERO IMAGE FIXED */}
//         <Image
//           src="/assets/project.png"
//           alt="hero"
//           fill
//           priority
//           className="object-cover object-[78%_20%] sm:object-[80%_20%]"
//         />

//         {/* TEXT OVERLAY (UNCHANGED STRUCTURE) */}
//         <div className="red sm:!text-white md:!text-white lg:!text-white absolute mt-4 sm:mt-0 translate-x-1/5 sm:bottom-[50px] sm:translate-x-1/5 lg:bottom-[150px] lg:left-[23%] lg:-translate-x-1/5">
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>

//             <p className="tracking-widest red text-base lg:text-4xl font-semibold sm:!text-white">
//               WINTER SALE
//             </p>

//             <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>
//           </div>

//           <div className="flex flex-col justify-center items-center">
//             <h1 className="text-5xl sm:text-7xl font-bold red sm:!text-white">
//               25% OFF
//             </h1>

//             <h2 className="text-3xl sm:text-5xl font-bold mt-4 red sm:!text-white">
//               SITEWIDE
//             </h2>

//             <div className="mt-5">
//               <Button text="shop now" />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default HeroImage;