import React from 'react'
import ProductGrid from "../../../components/product/ProductGrid"
import { fragranceProducts } from "../../../data/products/fragrance"
import Footer from "../../../components/layout/Footer"
import NavSwitcher from '../../../components/layout/Navbar/NavSwitcher'

const Page = () => {
    return (
        <>
            <div className='min-h-screen bg-black'>
                <NavSwitcher />

                <div className='pt-[130px] sm:pt-[200px] '>
                    <h1 className='Font text-xl sm:text-3xl lg:text-4xl text-white font-extrabold ml-8 sm:ml-12 lg:ml-30'>FRAGRANCE</h1>
                </div>

                <div className='flex justify-between items-center m-6 sm:m-10 lg:m-15'>
                    <p className='text-base whitespace-nowrap sm:text-xl Font  mt-5 sm:ml-4 lg:ml-18 text-white'>30 products</p>
                    <select className='border border-white px-1 py-1 w-[160px] sm:w-[170px] sm:px-2 sm:py-2 rounded-md flex Font mt-5 text-white'>
                        <option>Sort by: Featured </option>
                        <option>Sort by: Newest</option>
                        <option>Sort by: Best selling</option>
                        <option>Sort by: Price (high to low)</option>
                        <option>Sort by: Price (low to high)</option>
                    </select>
                </div>

                <ProductGrid products={fragranceProducts} />

                <div className='mt-50'>
                    <Footer variant="dark" />
                </div>

            </div>
        </>
    )
}

export default Page