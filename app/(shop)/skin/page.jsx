'use client'

import React from 'react'


import ProductGrid from '../../../components/product/ProductGrid'
import { skinProducts } from "../../../data/products/skin"

// import NavSwitcher from '../Navbar/NavSwitcher'



import Footer from "../../../components/layout/Footer"
import MainNav from "../../../components/layout/Navbar/MainNavbar"
import TransButton from '../../../components/ui/TransButton'




import Image from 'next/image'

const Page = () => {
    return (
        <>
            {/* <NavSwitcher /> */}

            <MainNav />

            <div className='relative w-full h-[250px] sm:h-[550px] overflow-hidden'>

                <Image src="/skin.png"
                    alt="img" fill
                    className='w-full h-full object-cover object-right' />


                <div className="absolute sm:bottom-[40px] sm:left-[7%] left-[4%] bottom-[20px]">
                    <h1 className='text-sm sm:text-xl lg:text-3xl font-extrabold text-white'>HER'S SKIN</h1>
                </div>
            </div>

            {/* Small Images Row of Cosmetics Categories */}

            <div className='flex sm:gap-5 gap-5 justify-start items-start m-8 mt-10 sm:m-10 lg:ml-15'>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/pd9.webp" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base whitespace-nowrap'>skin concerns</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/pd9h.webp" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>face</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/pd11h.webp" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>body</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[60px] h-[60px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <Image src="/pd12h.webp" alt="eyes" className='w-full h-full object-cover rounded-md' width={40} height={40} />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>lips</p>
                </div>
            </div>

            {/* Total Products + categorical buttons */}

            <div className='flex justify-between items-center m-6 sm:m-10 lg:m-15'>
                <p className='text-base whitespace-nowrap sm:text-xl Font grey mt-5 sm:ml-4 lg:ml-18'>89 products</p>

                <select className='border border-black px-1 py-1 w-[160px] sm:w-[170px] sm:px-2 sm:py-2 rounded-md flex Font mt-5 sm:mr-2 lg:mr-18'>
                    <option>Sort by: Featured </option>
                    <option>Sort by: newest</option>
                    <option>Sort by: best selling </option>
                    <option>Sort by: price (high to low) </option>
                    <option>Sort by: price (low to high) </option>
                </select>
            </div>

            <div className="mt-10">
                <ProductGrid products={skinProducts} />
            </div>

            <div className='mt-30 flex justify-center items-center'>
                <TransButton text={"load more"} />
            </div>

            <Footer />
        </>
    )
}

export default Page