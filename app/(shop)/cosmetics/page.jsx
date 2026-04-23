

import Image from "next/image";

import Footer from "../../../components/layout/Footer"
import ProductGrid from "../../../components/product/ProductGrid"
import { cosmeticsProducts } from "../../../data/products/cosmetics"
import TransButton from "../../../components/ui/TransButton";

import NavSwitcher from "../../../components/layout/Navbar/NavSwitcher"

export default function CosmeticsPage() {
    return (
        <>

            <NavSwitcher/>

            <div className='relative w-full h-[250px] sm:h-[550px] overflow-hidden'>
                <Image src="/Red.jpeg" alt="red" fill className="w-full h-full object-cover" />

                <div className="absolute sm:bottom-[40px] sm:left-[7%]  left-[3%] bottom-[20px]">
                    <h1 className='text-sm sm:text-xl font-extrabold text-white'>HER COSMETICS</h1>
                </div>
            </div>

            {/* Small Images Row of Cosmetics Categories */}

            <div className='flex sm:gap-5 gap-5 justify-start items-start m-8 mt-10 sm:m-10 lg:ml-15 '>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px]   rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/eyes.avif" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base whitespace-nowrap'>eyes & brows</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px]  rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/best.avif" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base whitespace-nowrap'>best sellers</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px]  rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/Fac.avif" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>face</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px]  rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/Feat.avif" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>featured</p>
                </div>
            </div>

            {/* Total Products + categorical buttons */}

            <div className='flex justify-between items-center m-6 sm:m-10 lg:m-15'>
                <p className='text-base whitespace-nowrap sm:text-xl Font grey mt-5 sm:ml-4 lg:ml-18'>218 products</p>

                <select className='border border-black px-1 py-1 w-[160px] sm:w-[170px] sm:px-2 sm:py-2 rounded-md flex Font mt-5 sm:mr-2 lg:mr-18'>
                    <option>Sort by: Featured </option>
                    <option>Sort by: newest</option>
                    <option>Sort by: best selling </option>
                    <option>Sort by: price (high to low) </option>
                    <option>Sort by: price (low to high) </option>
                </select>
            </div>

            <div className="mt-10">
                <ProductGrid products={cosmeticsProducts} />
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <TransButton text={"load more"} />
            </div>
            <Footer />

        </>
    );
}