"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useSearch } from "@/context/SearchContext";


import NavSidebar from "./NavSidebar";
import Nav from "./Nav";

import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("@/components/cart/Sidebar"), {
  ssr: false,
});

const Search = dynamic(() => import("@/components/search/Search"), {
  ssr: false,
});

export const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { searchItem, setSearchItem } = useSearch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null> (null);


  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10 ">
        <div className="fixed top-0 left-0 w-full z-50 p-2">
          <div className="text-white flex justify-between items-center mt-12 text-2xl ">
            <div className="text-white hidden sm:flex justify-center items-center gap-2 sm:ml-6 lg:ml-10">
              <p className="font">us</p>
              <i className="fa-solid fa-dollar-sign"></i>
            </div>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="ml-2 sm:hidden"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <h1 className="headFont whitespace-nowrap sm:text-2xl lg:text-3xl ml-10 sm:ml-25 lg:ml-50 cursor-pointer ">
              <Link href="/">
                <span className="inline-block animate-door-rotate">H</span>ER
                COSMETICS
              </Link>
            </h1>

            <div className="text-white flex mr-2 justify-center items-center gap-4 sm:gap-8 lg:gap-12 sm:text-lg lg:text-2xl sm:mr-4 lg:mr-10 cursor-pointer">
              <p className="hidden sm:block">
                <i className="fa-solid fa-heart"></i>
              </p>
              <p className="hidden sm:block">
                <Link href="/login">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </p>

              <div className="relative">
                <button
                  onClick={() => setOpen(true)}
                  className="cursor-pointer"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <button
                className="cursor-pointer"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>

          <div className="text-white flex justify-center items-center mt-8">
            <ul className="hidden sm:flex justify-center items-center sm:gap-1 lg:gap-10 font cursor-pointer">
              <li>
                <Link
                  href="/cosmetics"
                  className="hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2"
                >
                  cosmetics
                </Link>
              </li>
              <li>
                <Link
                  href="/fragrance"
                  className="hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2"
                >
                  fragrance
                </Link>
              </li>
              <li>
                <Link
                  href="/skin"
                  className="hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2"
                >
                  skin
                </Link>
              </li>
              <li>
                <Link
                  href="/discover"
                  className="hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2"
                >
                  discover
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}

      {open && (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-white z-40 flex flex-col items-center overflow-y-auto pb-10">
          <Nav />

          <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-10 mt-40">
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass font-light absolute left-4 top-1/2 -translate-y-1/2 text-base sm:text-lg"></i>

              <input
                ref={inputRef}
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className=" w-[220px] sm:w-[330px] md:w-[450px] lg:w-[600px] xl:w-[900px] h-[42px] border border-black rounded-md pl-10 pr-4 text-base sm:text-lg outline-none"
                placeholder="Search..."
              />
            </div>

            <button onClick={() => setOpen(false)} className="cursor-pointer">
              <i className="fa-solid fa-xmark text-2xl sm:text-3xl text-black"></i>
            </button>
          </div>

          <div className="w-full mt-10 px-10">
            <Search />
          </div>
        </div>
      )}

      {/* Cart Side Bar */}
      {isCartOpen && <SideBar onClose={() => setIsCartOpen(false)} />}

      {/* Side NavBar for cellphones */}

      {isSidebarOpen && (
        <NavSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default MainNavbar;
